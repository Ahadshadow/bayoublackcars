"use client";

import React from 'react';
import Link from 'next/link';
import { Plane } from 'lucide-react';
import { airportGroups } from '@/data/airports-list';

const GroupedAirportGrid = () => {
    return (
        <section className="py-20 bg-white font-poppins">
            <div className="container-custom">
                {/* Intro Section */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-navy-primary font-taviraj tracking-tight mb-6">
                        Serving Major Airports with First-Class Transfers
                    </h2>
                    <p className="max-w-3xl mx-auto text-luxury-text-muted text-[15px] leading-relaxed">
                        Bayou Black Cars connects you to every major airport with professional, on-time chauffeur service. Browse the airports we serve and enjoy door-to-terminal comfort, real-time flight tracking, and fixed, all-inclusive rates. Wherever you're headed, start and end your journey in style.
                    </p>
                </div>

                {/* State Groups */}
                <div className="space-y-12 md:space-y-16">
                    {airportGroups.map((group) => (
                        <div key={group.state}>
                            <h3 className="text-navy-primary font-bold text-lg md:text-xl mb-6 md:mb-8 uppercase tracking-wider border-b-2 border-gold/20 pb-2 inline-block">
                                {group.state}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mt-4">
                                {group.airports.map((airport) => (
                                    <Link
                                        key={airport.code}
                                        href={airport.href}
                                        className="group block"
                                    >
                                        <div className="flex items-center p-4 md:p-6 border-2 border-luxury-border rounded-xl hover:border-gold hover:shadow-lg transition-all duration-300 bg-white h-full">
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-navy-primary flex items-center justify-center shrink-0 group-hover:bg-navy-primary group-hover:text-gold transition-colors duration-300">
                                                <Plane size={20} className="text-navy-primary group-hover:text-gold md:w-6 md:h-6" />
                                            </div>
                                            <div className="ml-4 md:ml-6 flex flex-col justify-center">
                                                <h4 className="text-navy-primary font-bold text-lg md:text-xl group-hover:text-gold transition-colors uppercase">
                                                    {airport.code}
                                                </h4>
                                                <p className="text-luxury-text-muted text-[12px] md:text-[13px] leading-tight mt-1 group-hover:text-luxury-text transition-colors">
                                                    {airport.name} ({airport.code})
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupedAirportGrid;
