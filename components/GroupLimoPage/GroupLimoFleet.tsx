import React from 'react';
import Image from 'next/image';
import { Users, Briefcase, Droplets, Check, Monitor } from 'lucide-react';

const fleetVehicles = [
    {
        name: "Executive Luxury Sedan",
        subtitle: "Sophisticated and discrete transport for small ensemble travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 3" },
            { icon: <Briefcase size={16} />, text: "2-3" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Yes" },
        ]
    },
    {
        name: "Premium Executive SUV",
        subtitle: "The standard for group airport transfers and private excursions.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 6" },
            { icon: <Briefcase size={16} />, text: "4-5" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Yes" },
        ]
    },
    {
        name: "Elite Milestone Sprinter",
        subtitle: "High-capacity luxury for the entire professional ensemble.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 14" },
            { icon: <Briefcase size={16} />, text: "Large area" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Yes" },
        ]
    },
    {
        name: "Signature Stretch Limousine",
        subtitle: "An iconic choice for weddings, proms, and gala arrivals.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 8-10" },
            { icon: <Briefcase size={16} />, text: "Limited" },
            { icon: <Check size={16} />, text: "Leather" },
            { icon: <Check size={16} />, text: "Bar" },
        ]
    },
    {
        name: "Premier Milestone Party Bus",
        subtitle: "The ultimate venue on wheels for vibrant group celebrations.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { icon: <Users size={16} />, text: "Up to 24" },
            { icon: <Monitor size={16} />, text: "TV" },
            { icon: <Check size={16} />, text: "Premium" },
            { icon: <Check size={16} />, text: "Upon Request" },
        ]
    }
];

const GroupLimoFleet = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        A Fleet Ready for Any Group Size
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Bayou Black Cars offers a diverse fleet designed to accommodate group transportation needs of all sizes. From executive sedans to luxury sprinter vans, stretch limos to party buses — we ensure there's a perfect premium vehicle for every group occasion.
                    </p>
                </div>

                {/* 5-Column Custom Grid (wrapping safely on smaller screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {fleetVehicles.map((vehicle, index) => (
                        <div key={index} className="border border-luxury-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col p-4 group">

                            {/* Image Header */}
                            <div className="relative h-32 w-full mb-4 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-grow flex flex-col">
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary mb-2 border-b border-luxury-border/30 pb-2">{vehicle.name}</h3>
                                {vehicle.subtitle && (
                                    <p className="text-luxury-text-muted text-[10px] leading-tight mb-4 h-6 text-left">{vehicle.subtitle}</p>
                                )}

                                {/* Specs Column instead of Grid for narrower cards */}
                                <div className="flex flex-col gap-y-2 mb-4 mt-auto">
                                    {vehicle.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex items-center gap-2 text-luxury-text-muted text-[10px]">
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
                                className="bg-navy-primary text-pure-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase transition-colors hover:bg-gold w-fit mx-auto mt-auto"
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

export default GroupLimoFleet;
