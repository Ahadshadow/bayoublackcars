import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Export a check for whether Supabase is properly configured
export const isSupabaseConfigured = Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    (supabaseAnonKey.startsWith('ey') || supabaseAnonKey.startsWith('your_'))
);

// Only create the client if we have credentials and they appear valid
export const supabaseClient = isSupabaseConfigured
    ? createClient(supabaseUrl!, supabaseAnonKey!)
    : null;

if (!supabaseClient || !isSupabaseConfigured) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('Supabase Client credentials missing or invalid. Falling back to mock data where available.');
    }
}
