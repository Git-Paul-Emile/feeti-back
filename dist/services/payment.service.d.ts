/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE PAIEMENT — MODE SIMULATION
 *  Architecture: toutes les méthodes retournent des données simulées.
 *  Pour brancher un vrai provider : remplacer le corps des méthodes
 *  en gardant les mêmes signatures.
 *
 *  Providers supportés (tous en simulation) :
 *  - Stripe (carte bancaire)
 *  - Mobile Money (MTN, Orange, Airtel)
 *  - Paystack
 * ═══════════════════════════════════════════════════════════════════════
 */
export type PaymentStatus = "pending" | "processing" | "completed" | "failed" | "cancelled";
export interface PaymentIntent {
    id: string;
    clientSecret: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    provider: "stripe";
    createdAt: Date;
}
export interface MobileMoneyTransaction {
    id: string;
    phone: string;
    operator: "mtn" | "orange" | "airtel";
    amount: number;
    currency: string;
    status: PaymentStatus;
    createdAt: Date;
    completedAt?: Date;
}
export interface PaystackTransaction {
    id: string;
    reference: string;
    authorizationUrl: string;
    email: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    createdAt: Date;
}
export declare const paymentService: {
    createStripeIntent(params: {
        amount: number;
        currency: string;
        metadata?: Record<string, string>;
    }): Promise<{
        clientSecret: string;
        intentId: string;
    }>;
    getStripeIntentStatus(intentId: string): Promise<PaymentStatus>;
    initializeMobileMoney(params: {
        phone: string;
        operator: "mtn" | "orange" | "airtel";
        amount: number;
        currency: string;
        metadata?: Record<string, string>;
    }): Promise<{
        transactionId: string;
        message: string;
    }>;
    getMobileMoneyStatus(transactionId: string): Promise<{
        status: PaymentStatus;
        message: string;
    }>;
    initializePaystack(params: {
        email: string;
        amount: number;
        currency: string;
        metadata?: Record<string, string>;
    }): Promise<{
        reference: string;
        authorizationUrl: string;
    }>;
    verifyPaystackPayment(reference: string): Promise<{
        status: PaymentStatus;
        amount: number;
    }>;
    confirmPayment(params: {
        provider: "stripe" | "mobile_money" | "paystack";
        paymentId: string;
    }): Promise<boolean>;
};
//# sourceMappingURL=payment.service.d.ts.map