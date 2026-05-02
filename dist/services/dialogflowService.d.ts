type ChatbotResult = {
    reply: string;
    intent: string | null;
    confidence: number;
};
export declare function detectIntent(message: string, sessionId: string): Promise<ChatbotResult>;
export {};
//# sourceMappingURL=dialogflowService.d.ts.map