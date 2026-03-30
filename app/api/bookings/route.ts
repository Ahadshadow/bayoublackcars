import { NextRequest } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { apiSuccess, apiError } from '@/utils/apiResponse';
import { validateBookingPayload } from '@/utils/validation';
import { getDistanceMatrix } from '@/lib/googleMaps';
import { calculateFare } from '@/utils/fareCalculation';
import { bookingRateLimiter } from '@/lib/rateLimit';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        // 1. Rate Limiting
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : 'anonymous';
        if (bookingRateLimiter.isRateLimited(ip)) {
            return apiError('Too many requests. Please try again later.', 429);
        }

        // 2. Input Validation
        const payload = await req.json();
        const validation = validateBookingPayload(payload);
        if (!validation.valid) {
            return apiError(validation.error || 'Invalid payload', 400);
        }

        const {
            customer_name,
            customer_email,
            customer_phone,
            pickup_location,
            dropoff_location,
            vehicle_id,
            pickup_date,
            total_fare
        } = payload;

        // 3. Fetch Vehicle details
        const { data: vehicle, error: vehicleError } = await supabaseServer
            .from('vehicles')
            .select('*')
            .eq('id', vehicle_id)
            .single();

        if (vehicleError || !vehicle) {
            return apiError('Vehicle not found', 404);
        }

        // 4. Determine Fare and Distance
        let finalFare = total_fare;
        let distance = 0;
        let duration = 0;

        if (!finalFare) {
            // Calculate Distance & Duration if not provided (e.g., from direct booking form)
            try {
                const distanceInfo = await getDistanceMatrix(pickup_location, dropoff_location);
                distance = distanceInfo.distance;
                duration = distanceInfo.duration;

                const fareDetails = calculateFare(
                    distance,
                    duration,
                    vehicle.price_per_hour,
                    vehicle.price_per_mile
                );
                finalFare = fareDetails.totalFare;
            } catch (error: any) {
                console.error('Google Maps error:', error);
                return apiError('Failed to calculate distance. Please check your locations.', 400);
            }
        }

        // 5. Save Booking to Supabase
        const { data: booking, error: bookingError } = await supabaseServer
            .from('bookings')
            .insert({
                customer_name,
                customer_email: customer_email || null,
                customer_phone: customer_phone || null,
                pickup_location,
                dropoff_location,
                distance: distance || payload.distance || 0,
                duration: duration || payload.duration || 0,
                vehicle_id,
                pickup_date: pickup_date || new Date().toISOString(),
                status: payload.status || 'PENDING',
                total_fare: finalFare,
            })
            .select()
            .single();

        if (bookingError) {
            console.error('Booking insertion error:', bookingError);
            return apiError('Failed to create booking', 500);
        }

        return apiSuccess(booking, 201);
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return apiError('An unexpected error occurred', 500);
    }
}
