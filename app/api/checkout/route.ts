import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            bookingData,
            successUrl,
            cancelUrl
        } = body;

        if (!bookingData || !bookingData.vehicle) {
            return NextResponse.json({ error: 'Missing booking data' }, { status: 400 });
        }

        // Create a Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `${bookingData.vehicle.models} Reservation`,
                            description: `${bookingData.mode === 'hourly' ? `${bookingData.hours} Hours` : `Point-to-Point`} service from ${bookingData.pickup}`,
                            images: [bookingData.vehicle.image || ''],
                        },
                        unit_amount: Math.round(bookingData.estimatedPrice * 100), // Stripe uses cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl,
            customer_email: bookingData.customerEmail,
            metadata: {
                pickup: bookingData.pickup,
                dropoff: bookingData.mode === 'distance' ? bookingData.dropoff : 'Hourly Service',
                date: bookingData.date,
                time: bookingData.time,
                vehicleId: bookingData.vehicle.id,
                vehicleName: bookingData.vehicle.models,
                customerPhone: bookingData.customerPhone,
                customerName: bookingData.customerName,
                customerEmail: bookingData.customerEmail,
                totalFare: bookingData.estimatedPrice.toString(),
                mode: bookingData.mode,
                hours: bookingData.hours || '0'
            },
        });

        return NextResponse.json({ sessionId: session.id, url: session.url });
    } catch (error: any) {
        console.error('Stripe Checkout Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
