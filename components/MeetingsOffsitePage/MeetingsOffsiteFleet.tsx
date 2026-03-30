import React from 'react';
import Image from 'next/image';
import { Users, Briefcase, Droplets, Check, Monitor } from 'lucide-react';

const fleetVehicles = [
    {
        name: "Executive Luxury Sedan",
        subtitle: "Sophisticated and discrete transport for business travel and solo executive transfers.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 3" },
            { icon: <Briefcase size={16} />, text: "2-3" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Yes" },
            { icon: <Check size={16} />, text: "Tinted" },
            { icon: <Droplets size={16} />, text: "Dual-Zone" },
            { icon: <Check size={16} />, text: "Provided" },
            { icon: <Monitor size={16} />, text: "Upon Request" },
        ]
    },
    {
        name: "Premium Executive SUV",
        subtitle: "The standard for small group corporate travel and high-profile ensemble movement.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 6" },
            { icon: <Briefcase size={16} />, text: "4-5" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Yes" },
            { icon: <Check size={16} />, text: "Tinted" },
            { icon: <Droplets size={16} />, text: "Dual-Zone" },
            { icon: <Check size={16} />, text: "Provided" },
            { icon: <Monitor size={16} />, text: "Upon Request" },
        ]
    },
    {
        name: "Elite Milestone Sprinter",
        subtitle: "High-capacity luxury for entire teams and corporate retreat logistics.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 14" },
            { icon: <Briefcase size={16} />, text: "Large area" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Yes" },
            { icon: <Check size={16} />, text: "Tinted" },
            { icon: <Droplets size={16} />, text: "Premium" },
            { icon: <Check size={16} />, text: "Provided" },
            { icon: <Monitor size={16} />, text: "Upon Request" },
        ]
    },
    {
        name: "Signature Stretch Limousine",
        subtitle: "The ultimate choice for executive galas and high-stakes VIP transport.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 8-10" },
            { icon: <Briefcase size={16} />, text: "Limited" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Bar" },
            { icon: <Check size={16} />, text: "Tinted" },
            { icon: <Monitor size={16} />, text: "TV" },
            { icon: <Check size={16} />, text: "Provided" },
            { icon: <Monitor size={16} />, text: "Upon Request" },
        ]
    }
];

const MeetingsOffsiteFleet = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Our Luxury Fleets
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Bayou Black Cars provides an executive-class fleet specifically selected for corporate transport. Whether you require discrete sedans for C-suite transfers, premium SUVs for project teams, or executive sprinters for full departmental retreats, our vehicles deliver the comfort and connectivity modern business demands.
                    </p>
                </div>

                {/* 4-Column Grid on lg screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fleetVehicles.map((vehicle, index) => (
                        <div key={index} className="border border-luxury-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col p-6 group">

                            {/* Image Header */}
                            <div className="relative h-40 w-full mb-6 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-grow flex flex-col">
                                <h3 className="text-xl font-bold font-taviraj text-navy-primary mb-2 border-b border-luxury-border/30 pb-2">{vehicle.name}</h3>
                                <p className="text-luxury-text-muted text-[11px] leading-tight mb-6 h-8 text-left">{vehicle.subtitle}</p>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 mt-auto">
                                    {vehicle.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex items-center gap-2 text-luxury-text-muted text-[11px]">
                                            <span className="text-navy-primary/60">{spec.icon}</span>
                                            <span>{spec.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button */}
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-navy-primary text-pure-white px-6 py-2 rounded-lg text-xs font-bold uppercase transition-colors hover:bg-gold w-fit mx-auto mt-auto"
                            >
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetingsOffsiteFleet;
