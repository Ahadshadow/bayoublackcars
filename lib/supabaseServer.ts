import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Only create the client if we have a valid URL and key.
// Placeholder keys like 'your_supabase_service_role_key' will be ignored.
const isServerConfigured = Boolean(
    supabaseUrl &&
    supabaseServiceRoleKey &&
    !supabaseServiceRoleKey.includes('your_')
);

export const supabaseServer = isServerConfigured
    ? createClient(supabaseUrl!, supabaseServiceRoleKey!, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    })
    : null as any; // Fallback to avoid crashes, though calls will fail

if (!supabaseServer) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('Supabase Server credentials missing or invalid. Database operations will fail.');
    }
}
