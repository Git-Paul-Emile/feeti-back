const FEETIPLAY_API_BASE_URL = process.env.FEETIPLAY_API_URL ?? "http://localhost:8001/api";
const FEETI_SYNC_SECRET = process.env.FEETI_SYNC_SECRET ?? "";
async function parseResponse(response) {
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`FEETIPLAY sync failed (${response.status}): ${text}`);
    }
    const json = (await response.json());
    if (!json.data) {
        throw new Error("FEETIPLAY sync returned an empty payload");
    }
    return json.data;
}
async function request(path, init) {
    const response = await fetch(`${FEETIPLAY_API_BASE_URL}${path}`, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            "x-feeti-sync-secret": FEETI_SYNC_SECRET,
            ...(init?.headers ?? {}),
        },
        signal: AbortSignal.timeout(10_000),
    });
    return parseResponse(response);
}
export const feetiPlaySyncService = {
    async upsertLiveEvent(payload) {
        return request("/integration/feeti2-live-events", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    },
    async getLiveEventById(id) {
        return request(`/integration/feeti2-live-events/${encodeURIComponent(id)}`);
    },
    async listOrganizerLiveEvents(organizerId) {
        return request(`/integration/feeti2-live-events?organizerId=${encodeURIComponent(organizerId)}`);
    },
    async deleteLiveEvent(id) {
        await request(`/integration/feeti2-live-events/${encodeURIComponent(id)}`, {
            method: "DELETE",
        });
    },
};
//# sourceMappingURL=feetiPlaySync.service.js.map