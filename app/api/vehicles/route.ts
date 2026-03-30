import { supabaseServer } from '@/lib/supabaseServer';
import { apiSuccess, apiError } from '@/utils/apiResponse';

// Cache the response for 60 seconds
export const revalidate = 60;

export async function GET() {
    try {
        if (!supabaseServer) {
            console.warn('Supabase Server credentials missing. Returning mock vehicles for demo.');
            // We can't access localStorage here as it's a server route, 
            // but we can return some default mock data.
            return apiSuccess([
                {
                    id: 'mock-1',
                    category: 'SEDAN',
                    models: 'Lincoln Continental',
                    description: 'Elegant luxury sedan.',
                    price_per_hour: 90,
                    price_per_mile: 12,
                    passengers: 4,
                    bags: 3,
                    image: '/replace img/6_SEDAN__Lincoln_Continental-removebg-preview.png',
                    transmission: 'Automatic',
                    fuel: 'Petrol',
                    available: true
                },
                {
                    id: 'mock-2',
                    category: 'SUV',
                    models: 'Cadillac Escalade',
                    description: 'Spacious luxury SUV.',
                    price_per_hour: 150,
                    price_per_mile: 18,
                    passengers: 7,
                    bags: 6,
                    image: '/replace img/4_ESCALADE_SUV-removebg-preview.png',
                    transmission: 'Automatic',
                    fuel: 'Petrol',
                    available: true
                }
            ]);
        }

        const { data, error } = await supabaseServer
            .from('vehicles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Supabase error:', error);
            return apiError('Failed to fetch vehicles', 500);
        }

        return apiSuccess(data);
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return apiError('An unexpected error occurred', 500);
    }
}
