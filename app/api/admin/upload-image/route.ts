import { NextResponse } from 'next/server';
import { supabaseServer as supabase } from '@/lib/supabaseServer';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const pageRoute = formData.get('pageRoute') as string;
        const sectionKey = formData.get('sectionKey') as string;

        if (!file || !pageRoute || !sectionKey) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!supabase) {
            return NextResponse.json({ error: 'Database configuration missing' }, { status: 500 });
        }

        // 1. Upload to Supabase Storage
        const fileExt = file.name.split('.').pop();
        const fileName = `${pageRoute.replace(/\//g, '_')}_${sectionKey}_${Date.now()}.${fileExt}`;
        const filePath = `site-assets/${fileName}`;

        const { data: storageData, error: storageError } = await supabase.storage
            .from('site-assets')
            .upload(filePath, file, { upsert: true });

        if (storageError) throw storageError;

        // 2. Get Public URL
        const { data: { publicUrl } } = supabase.storage
            .from('site-assets')
            .getPublicUrl(filePath);

        // 3. Update Database Mapping
        const { error: dbError } = await supabase
            .from('page_assets')
            .upsert({
                page_route: pageRoute,
                section_key: sectionKey,
                image_url: publicUrl,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'page_route,section_key'
            });

        if (dbError) throw dbError;

        return NextResponse.json({ success: true, url: publicUrl });
    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
