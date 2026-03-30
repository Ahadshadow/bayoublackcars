"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const FloatingBooking = () => {
    const pathname = usePathname();

    // Hide on booking page to avoid overlap with full form
    if (pathname === '/book') return null;

    return (
        <a
            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] bg-pure-black text-pure-white rounded-full pl-4 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-2 sm:gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:bg-gold hover:text-pure-black transition-all duration-300 group font-taviraj font-bold text-[11px] sm:text-[14px] uppercase tracking-wider"
        >
            <span className="whitespace-nowrap">Book now</span>
            <div className="bg-white/10 p-1.5 sm:p-2 rounded-full group-hover:bg-black/10 transition-colors flex items-center justify-center shrink-0">
                <svg className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
            </div>
        </a>
    );
};

export default FloatingBooking;
