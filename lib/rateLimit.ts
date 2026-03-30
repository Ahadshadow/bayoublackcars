export class RateLimiter {
    private requests: Map<string, number[]>;
    private limit: number;
    private window: number;

    constructor(limit: number, windowMs: number) {
        this.requests = new Map();
        this.limit = limit;
        this.window = windowMs;
    }

    isRateLimited(key: string): boolean {
        const now = Date.now();
        const timestamps = this.requests.get(key) || [];

        // Filter out timestamps outside the window
        const recentRequests = timestamps.filter(ts => now - ts < this.window);

        if (recentRequests.length >= this.limit) {
            return true;
        }

        recentRequests.push(now);
        this.requests.set(key, recentRequests);
        return false;
    }
}

// Global instance for booking requests: 5 per 15 minutes by default
export const bookingRateLimiter = new RateLimiter(5, 15 * 60 * 1000);
