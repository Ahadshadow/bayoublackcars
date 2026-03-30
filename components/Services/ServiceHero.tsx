"use client";

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const ServiceHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden font-poppins">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: "url('/HERO section/servies/our services hero section.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            <div className="container-custom relative z-20 text-center text-pure-white px-4">
                <h1 className="text-[36px] md:text-[60px] font-bold font-taviraj mb-6 leading-tight">
                    Our Services – Nationwide <span className="text-gold">Limo Solutions</span>
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a
                        href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy-primary text-pure-white px-10 py-3 rounded-lg font-bold text-[14px] uppercase tracking-wider hover:bg-gold transition-all border-2 border-navy-primary hover:border-gold shadow-xl min-w-[200px] text-center"
                    >
                        Book Now
                    </a>
                    <a
                        href="tel:5045084831"
                        className="bg-pure-white text-pure-black px-10 py-3 rounded-lg font-bold text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gold hover:text-pure-white transition-all border-2 border-pure-white hover:border-gold shadow-xl min-w-[200px]"
                    >
                        <Phone size={16} />
                        (504) 508-4831
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
