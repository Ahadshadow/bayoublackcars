import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('STRIPE_SECRET_KEY is missing. Payment features will fail.');
    }
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build_only', {
    apiVersion: '2025-01-27-acacia' as any,
    typescript: true,
});
