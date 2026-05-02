/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE EMAIL — ARCHITECTURE PLUGGABLE
 *  Pour changer de provider (SendGrid, Resend, etc.), implémenter
 *  IEmailProvider et changer la factory getEmailProvider().
 * ═══════════════════════════════════════════════════════════════════════
 */
export interface EmailOptions {
    to: string | string[];
    subject: string;
    html: string;
    text?: string;
    attachments?: {
        filename: string;
        content: string | Buffer;
        encoding?: string;
        contentType?: string;
    }[];
}
export interface IEmailProvider {
    send(options: EmailOptions): Promise<void>;
}
export declare function templateTicketConfirmation(data: {
    holderName: string;
    eventTitle: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    orderId: string;
    tickets: {
        id: string;
        category: string;
        price: number;
        currency: string;
        qrDataUrl?: string;
    }[];
    totalAmount: number;
    currency: string;
}): string;
export declare function templatePasswordReset(data: {
    userName: string;
    resetUrl: string;
}): string;
export declare function templateEventReminder(data: {
    holderName: string;
    eventTitle: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    ticketCount: number;
}): string;
declare class EmailService {
    private provider;
    sendTicketConfirmation(to: string, data: Parameters<typeof templateTicketConfirmation>[0]): Promise<void>;
    sendPasswordReset(to: string, data: Parameters<typeof templatePasswordReset>[0]): Promise<void>;
    sendEventReminder(to: string, data: Parameters<typeof templateEventReminder>[0]): Promise<void>;
    send(to: string, subject: string, html: string): Promise<void>;
}
export declare const emailService: EmailService;
export {};
//# sourceMappingURL=email.service.d.ts.map