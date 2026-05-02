import { StatusCodes } from "http-status-codes";
import { randomUUID } from "crypto";
import { AppError } from "../utils/AppError.js";
import { logger } from "../utils/logger.js";
import { eventRepository } from "../repositories/event.repository.js";
import { ticketRepository } from "../repositories/ticket.repository.js";
import { prisma } from "../config/database.js";
import { feetiPlaySyncService } from "./feetiPlaySync.service.js";
import { firestoreSyncService } from "./firestore-sync.service.js";

const FEETIPLAY_LIVE_ID_PREFIX = "feeti2_live_";

function isFeetiPlayLiveId(id: string) {
  return id.startsWith(FEETIPLAY_LIVE_ID_PREFIX);
}

function mapSyncedLiveEvent(event: Awaited<ReturnType<typeof feetiPlaySyncService.getLiveEventById>>) {
  return {
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    location: event.location,
    image: event.image,
    price: event.price,
    currency: event.currency,
    category: event.category,
    maxAttendees: 999999,
    attendees: 0,
    duration: event.duration,
    salesBlocked: false,
    isLive: event.isLive,
    isFeatured: event.isFeatured,
    isFavorite: false,
    status: event.isLive ? "published" : "completed",
    streamUrl: event.streamUrl ?? undefined,
    videoUrl: event.videoUrl ?? undefined,
    countryCode: undefined,
    organizerId: event.organizerId,
    organizer: { name: event.channelName },
    createdAt: event.createdAt,
    updatedAt: event.updatedAt ?? event.createdAt,
  };
}

export const eventService = {
  async createEvent(data: {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number;
    ticketTypes?: string;
    currency?: string;
    category: string;
    maxAttendees: number;
    duration?: string;
    isLive?: boolean;
    streamUrl?: string;
    videoUrl?: string;
    countryCode?: string;
    organizerId: string;
  }) {
    if (data.isLive) {
      const organizer = await prisma.user.findUnique({
        where: { id: data.organizerId },
        select: { name: true },
      });

      const syncedEvent = await feetiPlaySyncService.upsertLiveEvent({
        id: data.id ?? `${FEETIPLAY_LIVE_ID_PREFIX}${randomUUID()}`,
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        duration: data.duration,
        image: data.image,
        category: data.category,
        isLive: true,
        isFeatured: false,
        streamUrl: data.streamUrl,
        videoUrl: data.videoUrl,
        price: data.price,
        currency: data.currency,
        organizerId: data.organizerId,
        organizerName: organizer?.name ?? "Organisateur",
        location: data.location,
      });

      return mapSyncedLiveEvent(syncedEvent);
    }

    // Créer dans PostgreSQL
    const event = await eventRepository.create(data);
    
    // Synchroniser dans Firestore
    await firestoreSyncService.syncEvent(event).catch((err) => {
      logger.error(`Erreur sync Firestore pour event ${event.id}:`, err);
    });
    
    return event;
  },

  async getOrganizerEvents(organizerId: string) {
    const [localEvents, liveEvents] = await Promise.all([
      eventRepository.findByOrganizer(organizerId),
      feetiPlaySyncService.listOrganizerLiveEvents(organizerId).catch(() => []),
    ]);

    return [
      ...localEvents,
      ...liveEvents.map(mapSyncedLiveEvent),
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async getAllEvents(countryCode?: string, featuredOnly?: boolean, interests?: string[]) {
    return eventRepository.findAll(countryCode, featuredOnly, interests);
  },

  async getEventById(id: string) {
    if (isFeetiPlayLiveId(id)) {
      return mapSyncedLiveEvent(await feetiPlaySyncService.getLiveEventById(id));
    }
    return eventRepository.findById(id);
  },

  async deleteEvent(eventId: string, organizerId: string, role?: string) {
    if (isFeetiPlayLiveId(eventId)) {
      const event = await feetiPlaySyncService.getLiveEventById(eventId);
      const isAdmin = role === "admin" || role === "super_admin";
      if (!isAdmin && event.organizerId !== organizerId) {
        throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
      }
      await feetiPlaySyncService.deleteLiveEvent(eventId);
      return;
    }

    const event = await eventRepository.findById(eventId);
    if (!event) {
      throw new AppError("Événement introuvable", StatusCodes.NOT_FOUND);
    }
    const isAdmin = role === "admin" || role === "super_admin";
    if (!isAdmin && event.organizerId !== organizerId) {
      throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
    }
    // Organisateur ne peut pas supprimer si des billets ont été vendus
    if (!isAdmin) {
      const ticketCount = await ticketRepository.countByEvent(eventId);
      if (ticketCount > 0) {
        throw new AppError(
          `Impossible de supprimer : ${ticketCount} billet(s) déjà vendu(s) pour cet événement`,
          StatusCodes.CONFLICT
        );
      }
    }
    
    // Supprimer de PostgreSQL
    const deleted = await eventRepository.delete(eventId);
    
    // Supprimer de Firestore
    await firestoreSyncService.deleteDocument('events', eventId).catch((err) => {
      logger.error(`Erreur suppression Firestore pour event ${eventId}:`, err);
    });
    
    return deleted;
  },

  async toggleSalesBlocked(eventId: string, organizerId: string, role?: string) {
    if (isFeetiPlayLiveId(eventId)) {
      const event = await feetiPlaySyncService.getLiveEventById(eventId);
      const isAdmin = role === "admin" || role === "super_admin";
      if (!isAdmin && event.organizerId !== organizerId) {
        throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
      }
      return { salesBlocked: false };
    }

    const event = await eventRepository.findById(eventId);
    if (!event) throw new AppError("Événement introuvable", StatusCodes.NOT_FOUND);
    const isAdmin = role === "admin" || role === "super_admin";
    if (!isAdmin && event.organizerId !== organizerId) {
      throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
    }
    const newBlocked = !(event as any).salesBlocked;
    await eventRepository.update(eventId, { salesBlocked: newBlocked });
    return { salesBlocked: newBlocked };
  },

  async toggleFavorite(userId: string, eventId: string) {
    const event = await eventRepository.findById(eventId);
    if (!event) {
      throw new AppError("Événement introuvable", StatusCodes.NOT_FOUND);
    }
    const isFavorited = await eventRepository.toggleFavorite(userId, eventId);
    return { isFavorited };
  },

  async isFavorited(userId: string, eventId: string) {
    return eventRepository.isFavorited(userId, eventId);
  },

  async getMyFavorites(userId: string) {
    return eventRepository.findFavoritesByUser(userId);
  },

  async updateEvent(
    eventId: string,
    organizerId: string,
    data: Partial<{
      title: string;
      description: string;
      date: string;
      time: string;
      location: string;
      image: string;
      price: number;
      vipPrice: number;
      ticketTypes: string;
      currency: string;
      category: string;
      maxAttendees: number;
      duration: string;
      isLive: boolean;
      isFeatured: boolean;
      streamUrl: string;
      videoUrl: string;
      status: string;
      countryCode: string | null;
    }>,
    role?: string
  ) {
    if (isFeetiPlayLiveId(eventId)) {
      const event = await feetiPlaySyncService.getLiveEventById(eventId);
      const isAdmin = role === "admin" || role === "super_admin";
      if (!isAdmin && event.organizerId !== organizerId) {
        throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
      }

      const organizer = await prisma.user.findUnique({
        where: { id: organizerId },
        select: { name: true },
      });

      if (data.isLive === false) {
        await feetiPlaySyncService.deleteLiveEvent(eventId);
        return eventRepository.create({
          id: eventId,
          title: data.title ?? event.title,
          description: data.description ?? event.description,
          date: data.date ?? event.date,
          time: data.time ?? event.time,
          location: data.location ?? event.location,
          image: data.image ?? event.image,
          price: data.price ?? event.price,
          vipPrice: data.vipPrice,
          ticketTypes: data.ticketTypes,
          currency: data.currency ?? event.currency,
          category: data.category ?? event.category,
          maxAttendees: data.maxAttendees ?? 100,
          duration: data.duration ?? event.duration,
          isLive: false,
          streamUrl: undefined,
          videoUrl: undefined,
          countryCode: data.countryCode ?? undefined,
          organizerId,
        });
      }

      const syncedEvent = await feetiPlaySyncService.upsertLiveEvent({
        id: eventId,
        title: data.title ?? event.title,
        description: data.description ?? event.description,
        date: data.date ?? event.date,
        time: data.time ?? event.time,
        duration: data.duration ?? event.duration,
        image: data.image ?? event.image,
        category: data.category ?? event.category,
        isLive: data.isLive ?? event.isLive,
        isFeatured: data.isFeatured ?? event.isFeatured,
        streamUrl: data.streamUrl ?? event.streamUrl,
        videoUrl: data.videoUrl ?? event.videoUrl,
        price: data.price ?? event.price,
        currency: data.currency ?? event.currency,
        organizerId,
        organizerName: organizer?.name ?? event.channelName,
        location: data.location ?? event.location,
      });

      return mapSyncedLiveEvent(syncedEvent);
    }

    const event = await eventRepository.findById(eventId);
    if (!event) {
      throw new AppError("Événement introuvable", StatusCodes.NOT_FOUND);
    }
    const isAdmin = role === "admin" || role === "super_admin";
    if (!isAdmin && event.organizerId !== organizerId) {
      throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
    }
    // Organisateur ne peut pas modifier si des billets ont été vendus
    if (!isAdmin) {
      const ticketCount = await ticketRepository.countByEvent(eventId);
      if (ticketCount > 0) {
        throw new AppError(
          `Impossible de modifier : ${ticketCount} billet(s) déjà vendu(s) pour cet événement`,
          StatusCodes.CONFLICT
        );
      }
    }

    if (data.isLive === true) {
      const organizer = await prisma.user.findUnique({
        where: { id: organizerId },
        select: { name: true },
      });

      const syncedEvent = await feetiPlaySyncService.upsertLiveEvent({
        id: `${FEETIPLAY_LIVE_ID_PREFIX}${eventId}`,
        title: data.title ?? event.title,
        description: data.description ?? event.description,
        date: data.date ?? event.date,
        time: data.time ?? event.time,
        duration: data.duration ?? event.duration ?? "",
        image: data.image ?? event.image,
        category: data.category ?? event.category,
        isLive: true,
        isFeatured: data.isFeatured ?? event.isFeatured ?? false,
        streamUrl: data.streamUrl ?? event.streamUrl ?? undefined,
        videoUrl: data.videoUrl ?? event.videoUrl ?? undefined,
        price: data.price ?? event.price,
        currency: data.currency ?? event.currency,
        organizerId,
        organizerName: organizer?.name ?? event.organizer?.name ?? "Organisateur",
        location: data.location ?? event.location,
      });

      await eventRepository.delete(eventId);
      return mapSyncedLiveEvent(syncedEvent);
    }

    return eventRepository.update(eventId, data);
  },
};
