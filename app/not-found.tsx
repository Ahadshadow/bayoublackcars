"use client";

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] bg-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700">
            {/* Large Text Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
                <span className="text-[30vw] font-bold text-navy-primary font-taviraj">404</span>
            </div>

            <div className="relative z-10 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-accent/10 text-gold-accent rounded-full text-[12px] font-bold uppercase tracking-[0.2em] mb-8 border border-gold-accent/20">
                    Route Not Found
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-navy-primary font-taviraj mb-6 leading-tight">
                    Lost in Luxury?
                </h1>

                <p className="text-lg text-gray-500 mb-12 font-light leading-relaxed max-w-md mx-auto">
                    The page you are looking for has been moved or redefined for your elite experience. Allow us to guide you back.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="group relative flex items-center gap-3 bg-navy-primary text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-gold-accent hover:text-navy-primary transition-all duration-300 shadow-xl shadow-navy-primary/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                        <Home size={18} />
                        Return to Home
                    </Link>

                    <button
                        onClick={() => typeof window !== 'undefined' && window.history.back()}
                        className="flex items-center gap-2 px-8 py-4 rounded-xl text-navy-primary font-bold text-sm hover:bg-gray-50 transition-colors decoration-gold-accent decoration-2 underline-offset-8 hover:underline"
                    >
                        <ArrowLeft size={18} />
                        Previous Page
                    </button>
                </div>

                <div className="mt-20 flex justify-center gap-12 border-t border-gray-100 pt-12">
                    <div className="text-left">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Corporate</p>
                        <p className="text-sm font-medium text-navy-primary">(504) 508-4831</p>
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-sm font-medium text-navy-primary">support@Bayou.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
