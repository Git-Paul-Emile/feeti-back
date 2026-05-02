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
import { randomUUID } from "crypto";
// ─── Stores en mémoire (simulation) ──────────────────────────────────
// En production : remplacer par des appels API au provider
const paymentIntents = new Map();
const mobileMoneyTxs = new Map();
const paystackTxs = new Map();
// ─── Simulation helpers ───────────────────────────────────────────────
const SIMULATION_DELAY_MS = 3000; // délai de traitement simulé
function scheduleCompletion(store, id, delayMs = SIMULATION_DELAY_MS) {
    setTimeout(() => {
        const item = store.get(id);
        if (item && item.status === "pending") {
            store.set(id, { ...item, status: "completed" });
        }
    }, delayMs);
}
// ─── Service ─────────────────────────────────────────────────────────
export const paymentService = {
    // ── Stripe : créer une intention de paiement ─────────────────────
    async createStripeIntent(params) {
        const id = `pi_sim_${randomUUID().replace(/-/g, "")}`;
        const clientSecret = `${id}_secret_${randomUUID().replace(/-/g, "").slice(0, 24)}`;
        const intent = {
            id,
            clientSecret,
            amount: params.amount,
            currency: params.currency,
            status: "pending",
            provider: "stripe",
            createdAt: new Date(),
        };
        paymentIntents.set(id, intent);
        scheduleCompletion(paymentIntents, id);
        return { clientSecret, intentId: id };
    },
    async getStripeIntentStatus(intentId) {
        const intent = paymentIntents.get(intentId);
        return intent?.status ?? "failed";
    },
    // ── Mobile Money : initialiser un paiement ────────────────────────
    async initializeMobileMoney(params) {
        const id = `mm_sim_${randomUUID().replace(/-/g, "")}`;
        const tx = {
            id,
            phone: params.phone,
            operator: params.operator,
            amount: params.amount,
            currency: params.currency,
            status: "pending",
            createdAt: new Date(),
        };
        mobileMoneyTxs.set(id, tx);
        // Simulation : complétée après 5 secondes (l'utilisateur "confirme sur son téléphone")
        setTimeout(() => {
            const t = mobileMoneyTxs.get(id);
            if (t && t.status === "pending") {
                mobileMoneyTxs.set(id, { ...t, status: "completed", completedAt: new Date() });
            }
        }, 5000);
        return {
            transactionId: id,
            message: `Notification envoyée au ${params.phone}. Confirmez le paiement sur votre téléphone.`,
        };
    },
    async getMobileMoneyStatus(transactionId) {
        const tx = mobileMoneyTxs.get(transactionId);
        if (!tx)
            return { status: "failed", message: "Transaction introuvable" };
        const messages = {
            pending: "En attente de confirmation sur votre téléphone",
            processing: "Traitement en cours",
            completed: "Paiement confirmé",
            failed: "Paiement échoué",
            cancelled: "Paiement annulé",
        };
        return { status: tx.status, message: messages[tx.status] };
    },
    // ── Paystack : initialiser un paiement ───────────────────────────
    async initializePaystack(params) {
        const reference = `psk_sim_${randomUUID().replace(/-/g, "").slice(0, 20)}`;
        const tx = {
            id: reference,
            reference,
            // En simulation : URL de retour factice (en prod = vraie URL Paystack)
            authorizationUrl: `${process.env.FRONT_URL || "http://localhost:3000"}/payment/paystack?ref=${reference}`,
            email: params.email,
            amount: params.amount,
            currency: params.currency,
            status: "pending",
            createdAt: new Date(),
        };
        paystackTxs.set(reference, tx);
        scheduleCompletion(paystackTxs, reference, SIMULATION_DELAY_MS);
        return { reference, authorizationUrl: tx.authorizationUrl };
    },
    async verifyPaystackPayment(reference) {
        const tx = paystackTxs.get(reference);
        if (!tx)
            return { status: "failed", amount: 0 };
        return { status: tx.status, amount: tx.amount };
    },
    // ── Vérification générique d'un paiement (avant création billet) ──
    async confirmPayment(params) {
        switch (params.provider) {
            case "stripe": {
                const status = await this.getStripeIntentStatus(params.paymentId);
                // En simulation : on considère pending/completed comme validés
                return status === "completed" || status === "pending";
            }
            case "mobile_money": {
                const { status } = await this.getMobileMoneyStatus(params.paymentId);
                return status === "completed" || status === "pending";
            }
            case "paystack": {
                const { status } = await this.verifyPaystackPayment(params.paymentId);
                return status === "completed" || status === "pending";
            }
        }
    },
};
//# sourceMappingURL=payment.service.js.map