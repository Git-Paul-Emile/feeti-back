import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import { eventRepository } from "../repositories/event.repository.js";
import { ticketRepository } from "../repositories/ticket.repository.js";

export const eventService = {
  async createEvent(data: {
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
    countryCode?: string;
    organizerId: string;
  }) {
    return eventRepository.create(data);
  },

  async getOrganizerEvents(organizerId: string) {
    return eventRepository.findByOrganizer(organizerId);
  },

  async getAllEvents(countryCode?: string, featuredOnly?: boolean, interests?: string[]) {
    return eventRepository.findAll(countryCode, featuredOnly, interests);
  },

  async getEventById(id: string) {
    return eventRepository.findById(id);
  },

  async deleteEvent(eventId: string, organizerId: string, role?: string) {
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
    return eventRepository.delete(eventId);
  },

  async toggleSalesBlocked(eventId: string, organizerId: string, role?: string) {
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
      isLive: boolean;
      status: string;
      countryCode: string | null;
    }>,
    role?: string
  ) {
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
    return eventRepository.update(eventId, data);
  },
};
