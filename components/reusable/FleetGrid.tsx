"use client";

import React from 'react';
import {
    Users,
    Briefcase,
    Layers,
    Wifi,
    ShieldCheck,
    Thermometer,
    Droplets,
    Clock,
    Tv,
    Sparkles,
    GlassWater,
    MapPin // Added MapPin import
} from 'lucide-react';
import FleetCard, { FleetSpec } from './FleetCard';

const fleetData = [
    {
        name: "Executive Luxury Sedan",
        category: "Sedan",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        description: "Direct city transfers for business or leisure. Bayou Black Cars ensures a smooth, punctual journey.",
        specs: [
            { icon: Users, label: "Up to 3" },
            { icon: ShieldCheck, label: "Tinted" },
            { icon: MapPin, label: "GPS" },
            { icon: Briefcase, label: "2 Bags" },
        ]
    },
    {
        name: "Premium Executive SUV",
        category: "SUV",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Premium Suv.png",
        description: "Reliable executive transport that respects your time and privacy. Perfect for teams and families.",
        specs: [
            { icon: Users, label: "Up to 6-7" },
            { icon: ShieldCheck, label: "Tinted" },
            { icon: MapPin, label: "GPS" },
            { icon: Briefcase, label: "5 Bags" },
        ]
    },
    {
        name: "Professional Sprinter Van",
        category: "Van",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png",
        description: "High-capacity transport for events, tours, and shuttle services. Spacious enough for the whole team.",
        specs: [
            { icon: Users, label: "Up to 14" },
            { icon: ShieldCheck, label: "Tinted" },
            { icon: Briefcase, label: "Large area" },
            { icon: Sparkles, label: "Premium" },
            { icon: Layers, label: "Leather" },
            { icon: Droplets, label: "Provided" },
            { icon: Wifi, label: "Yes" },
            { icon: Clock, label: "Upon Request" },
        ]
    },
    {
        name: "Signature Stretch Limo",
        category: "Limousine",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        description: "Arrive in style for weddings, proms, or any major celebration. Elegant and iconic event arrivals.",
        specs: [
            { icon: Users, label: "Up to 8-10" },
            { icon: ShieldCheck, label: "Tinted" },
            { icon: Briefcase, label: "Limited" },
            { icon: Tv, label: "TV" },
            { icon: Layers, label: "Leather" },
            { icon: Droplets, label: "Provided" },
            { icon: GlassWater, label: "Bar" },
            { icon: Clock, label: "Upon Request" },
        ]
    }
];

const FleetGrid = () => {
    return (
        <section className="bg-white py-12 md:py-20 font-poppins">
            <div className="container-custom">
                {/* Header (Matching website style) */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[28px] md:text-[40px] font-bold text-black font-taviraj tracking-tight mb-4 leading-tight">
                        Our Premium Fleet
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600 text-[15px] md:text-[17px] leading-[1.6]">
                        Business travel solutions or a journey to or from the airport.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {fleetData.map((fleet, index) => (
                        <FleetCard
                            key={index}
                            name={fleet.name}
                            description={fleet.description}
                            image={fleet.image}
                            specs={fleet.specs}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetGrid;
