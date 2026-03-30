"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBooking from "@/components/FloatingBooking";
import NextTopLoader from 'nextjs-toploader';

interface ClientLayoutWrapperProps {
    children: React.ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    return (
        <>
            <NextTopLoader
                color="#D4AF37"
                initialPosition={0.08}
                crawlSpeed={200}
                height={4}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #D4AF37,0 0 5px #D4AF37"
            />
            {!isAdminRoute && <Header />}
            {children}
            {!isAdminRoute && (
                <>
                    <FloatingBooking />
                    <Footer />
                </>
            )}
        </>
    );
}
