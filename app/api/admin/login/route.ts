import { NextRequest, NextResponse } from 'next/server';
import { loginAction, setSessionCookie, clearSessionCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
    const { password, action } = await req.json();

    if (action === 'logout') {
        const response = NextResponse.json({ success: true });
        response.cookies.set(clearSessionCookie());
        return response;
    }

    const isValid = await loginAction(password);

    if (isValid) {
        const response = NextResponse.json({ success: true });
        response.cookies.set(setSessionCookie());
        return response;
    }

    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
