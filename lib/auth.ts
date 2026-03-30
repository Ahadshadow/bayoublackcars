import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_EXPIRY = 60 * 15; // 15 minutes

export function setSessionCookie() {
    return {
        name: SESSION_COOKIE_NAME,
        value: 'authenticated',
        httpOnly: true,
        path: '/',
        maxAge: SESSION_EXPIRY,
        sameSite: 'lax' as const,
    };
}

export function clearSessionCookie() {
    return {
        name: SESSION_COOKIE_NAME,
        value: '',
        path: '/',
        maxAge: 0,
    };
}

export function isAuthenticated(req: NextRequest) {
    const session = req.cookies.get(SESSION_COOKIE_NAME);
    return session?.value === 'authenticated';
}

export async function loginAction(password: string) {
    const adminPassword = process.env.DASHBOARD_PASSWORD || 'bayouadmin123';
    return password === adminPassword;
}
