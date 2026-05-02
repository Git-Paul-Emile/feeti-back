/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MODULE DE CALCUL FINANCIER — FEETI PLATFORM
 *  Version: 1.0.0
 *  Conformité: IFRS, Normes comptables OHADA, TVA Afrique Centrale
 * ═══════════════════════════════════════════════════════════════════════
 *
 *  RÈGLES FONDAMENTALES :
 *  • Tous les montants sont en CENTIMES (entiers) — JAMAIS de floats
 *  • Arrondi "half-up" (arrondi commercial standard)
 *  • TVA = 18% (taux CEMAC/OHADA par défaut)
 *  • Commission plateforme = 10% du TTC
 *  • HT = TTC / 1.18  →  TVA = TTC - HT
 *  • Net organisateur = TTC - TVA - Commission
 *
 *  INVARIANT DE COHÉRENCE :
 *  prixHT + tva + commission + netOrganisateur === prixTTC
 * ═══════════════════════════════════════════════════════════════════════
 */
export declare const TAUX_TVA_BP: 1800;
export declare const TAUX_COMMISSION_BP: 1000;
export declare const BP_DIVISOR: 10000;
export interface RepartitionFinanciere {
    readonly prixTTC: number;
    readonly prixHT: number;
    readonly tva: number;
    readonly commission: number;
    readonly netOrganisateur: number;
    readonly tauxTVA: number;
    readonly tauxCommission: number;
    readonly timestamp: string;
}
export interface ValidationResult {
    readonly valid: boolean;
    readonly errors: string[];
}
export interface CurrencyFormat {
    readonly montant: number;
    readonly formatted: string;
    readonly devise: string;
}
export declare function arrondiHalfUp(valeur: number): number;
export declare function validerMontantCentimes(montant: unknown): ValidationResult;
/**
 * Calcule la répartition financière d'un prix TTC en centimes.
 *
 * @param prixTTCCentimes - Prix TTC en centimes (entier positif)
 * @param tauxTVA_bp - Taux TVA en basis points (défaut: 1800 = 18%)
 * @param tauxCommission_bp - Taux commission en basis points (défaut: 1000 = 10%)
 * @returns RepartitionFinanciere immuable avec tous les montants en centimes
 *
 * @example
 * // Billet à 10 000 XOF = 1 000 000 centimes
 * const r = calculerRepartitionFinanciere(1_000_000);
 * // r.prixHT      = 847 458 centimes  (≈ 8 474,58 XOF)
 * // r.tva         = 152 542 centimes  (≈ 1 525,42 XOF)
 * // r.commission  = 100 000 centimes  (1 000 XOF)
 * // r.netOrg      = 747 458 centimes  (≈ 7 474,58 XOF)
 */
export declare function calculerRepartitionFinanciere(prixTTCCentimes: number, tauxTVA_bp?: number, tauxCommission_bp?: number): RepartitionFinanciere;
/**
 * Recalcule et vérifie la cohérence d'une répartition existante.
 * Utilisé pour la validation d'audit.
 */
export declare function verifierCohérenceRepartition(repartition: Omit<RepartitionFinanciere, "timestamp">): {
    coherent: boolean;
    ecart: number;
    details: string;
};
/** Convertit un montant décimal XOF en centimes entiers */
export declare function xofToCentimes(montantXOF: number): number;
/** Convertit des centimes en XOF décimal */
export declare function centimesToXOF(centimes: number): number;
/** Convertit un montant EUR en centimes */
export declare function eurToCentimes(montantEUR: number): number;
/** Convertit des centimes en EUR */
export declare function centimesToEUR(centimes: number): number;
/**
 * Formate un montant en centimes pour affichage
 * @example formatMontant(1000000, "XOF") → "10 000 XOF"
 * @example formatMontant(1099, "EUR") → "10,99 €"
 */
export declare function formatMontant(centimes: number, devise?: string): string;
/** Retourne un objet de formatage complet */
export declare function formatCurrency(centimes: number, devise?: string): CurrencyFormat;
/** Convertit des basis points en pourcentage lisible */
export declare function bpToPourcent(bp: number): string;
/** Convertit un pourcentage en basis points */
export declare function pourcentToBP(pourcent: number): number;
/**
 * Génère un checksum SHA-256 d'une répartition financière.
 * Utilisé pour détecter toute altération des données.
 */
export declare function genererChecksumRepartition(repartition: Omit<RepartitionFinanciere, "timestamp">): string;
/**
 * Génère un checksum générique pour n'importe quel objet.
 * Tri les clés pour garantir le déterminisme.
 */
export declare function genererChecksum(data: Record<string, unknown>): string;
/** Agrège une liste de répartitions (pour reporting batch) */
export declare function agregerRepartitions(repartitions: RepartitionFinanciere[]): {
    totalTTC: number;
    totalHT: number;
    totalTVA: number;
    totalCommission: number;
    totalNetOrganisateur: number;
    count: number;
};
/** Calcule la part de TVA d'un montant TTC */
export declare function extractTVA(prixTTC: number, tauxTVA_bp?: number): number;
//# sourceMappingURL=financial.d.ts.map