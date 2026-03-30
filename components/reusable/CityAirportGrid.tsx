"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface CityAirportGridProps {
    title?: string;
    description?: string;
}

const CityAirportGrid = ({
    title = "Luxury Airport Transfers Across Major Hubs",
    description = "Experience the pinnacle of travel comfort with our bespoke airport chauffeur services. From seamless terminal transfers to personalized luggage handling, Bayou Black Cars ensures your journey is defined by absolute punctuality and relaxed elegance across every major city."
}: CityAirportGridProps) => {
    const cityData = [
        {
            city: "Chicago Hub",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "O'Hare International (ORD)",
                "Midway International (MDW)",
                "Chicago Rockford (RFD)",
                "Peoria International (PIA)"
            ]
        },
        {
            city: "Indiana Connections",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "Indianapolis (IND)",
                "Fort Wayne (FWA)",
                "South Bend (SBN)",
                "Evansville Regional (EVV)"
            ]
        },
        {
            city: "Wisconsin Corridors",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "Milwaukee Mitchell (MKE)",
                "Madison Regional (MSN)",
                "Green Bay (GRB)",
                "Appleton (ATW)"
            ]
        },
        {
            city: "California Coast",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "Los Angeles (LAX)",
                "San Francisco (SFO)",
                "San Diego (SAN)",
                "San Jose Mineta (SJC)"
            ]
        },
        {
            city: "New York Hubs",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "John F. Kennedy (JFK)",
                "LaGuardia (LGA)",
                "Buffalo Niagara (BUF)"
            ]
        },
        {
            city: "New Jersey Hubs",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "Newark Liberty (EWR)",
                "Teterboro (TEB)",
                "Atlantic City (ACY)"
            ]
        },
        {
            city: "Ohio Region",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "Cleveland Hopkins (CLE)",
                "Columbus (CMH)",
                "Cincinnati/Kentucky (CVG)",
                "Dayton Intl (DAY)"
            ]
        },
        {
            city: "Florida Sunshine",
            image: "/airport limo servies/WhatsApp Image 2026-03-25 at 12.12.59 PM.jpeg",
            airports: [
                "Miami Intl (MIA)",
                "Orlando Intl (MCO)",
                "Tampa Intl (TPA)"
            ]
        }
    ];

    return (
        <section className="bg-navy-primary py-24">
            <div className="container-custom px-4 text-center">
                <h2 className="text-[28px] md:text-[36px] font-bold text-white font-taviraj mb-4">
                    {title}
                </h2>
                <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
                <p className="text-white/70 text-[14px] max-w-4xl mx-auto mb-16 leading-relaxed">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cityData.map((city, index) => (
                        <div key={index} className="bg-navy-dark rounded-2xl overflow-hidden border border-white/10 group hover:border-gold/50 transition-all duration-300 flex flex-col h-full">
                            <div className="relative w-full aspect-[3/2] overflow-hidden bg-white">
                                <Image
                                    src={city.image}
                                    alt={`Luxury Limo Service to ${city.city} - Bayou Black Cars`}
                                    fill
                                    className="object-contain object-center"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>
                            <div className="p-6 text-left flex-1 flex flex-col">
                                <h3 className="text-white text-[18px] font-bold font-taviraj mb-4 border-b border-white/10 pb-2">
                                    Limo Service to <span className="text-gold">{city.city}</span>
                                </h3>
                                <ul className="space-y-2 mb-4 flex-1">
                                    {city.airports.map((airport, i) => (
                                        <li key={i} className="flex gap-2 text-white/80 text-[12px] leading-tight items-start">
                                            <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                                            <span>{airport}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityAirportGrid;
