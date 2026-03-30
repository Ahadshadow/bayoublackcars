
import { supabaseClient } from './supabaseClient';

export interface PageAsset {
    page_route: string;
    section_key: string;
    image_url: string;
    alt_text?: string;
}

/**
 * Fetches all image assets for a specific page route.
 * @param pageRoute The route of the page (e.g., '/services/airport-limo-service')
 * @returns An object mapping section_key to image_url
 */
export async function getPageAssets(pageRoute: string): Promise<Record<string, string>> {
    if (!supabaseClient) return {};

    try {
        const { data, error } = await supabaseClient
            .from('page_assets')
            .select('section_key, image_url')
            .eq('page_route', pageRoute);

        if (error) {
            console.error('Error fetching page assets:', error);
            return {};
        }

        return data.reduce((acc, item) => {
            acc[item.section_key] = item.image_url;
            return acc;
        }, {} as Record<string, string>);
    } catch (err) {
        console.error('Failed to fetch page assets:', err);
        return {};
    }
}

/**
 * Hook-friendly version or simple fetcher for a single asset with fallback
 */
export function getAssetWithFallback(
    assets: Record<string, string>, 
    sectionKey: string, 
    fallbackUrl: string
): string {
    return assets[sectionKey] || fallbackUrl;
}
