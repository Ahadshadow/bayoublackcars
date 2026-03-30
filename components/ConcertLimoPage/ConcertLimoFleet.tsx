import React from 'react';
import Image from 'next/image';
import { Users, Briefcase } from 'lucide-react';

const fleetVehicles = [
    {
        name: "PREMIUM SEDANS",
        subtitle: "Lincoln Continental or equivalent and Mercedes-Benz S Class or equivalent for VIPs",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "3" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "2" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "2" },
        ]
    },
    {
        name: "PREMIUM SUVS",
        subtitle: "Suburban or similar. Cadillac Escalade & Lincoln Navigator for VIPs",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "6-7" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "5" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "2" },
        ]
    },
    {
        name: "SPRINTER VANS",
        subtitle: "Shuttel Sprinter, Executive Sprinter & Limo Party Bus Sprinter",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "14-16" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "8" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "6" },
        ]
    },
    {
        name: "STRETCH LIMO & BUSES",
        subtitle: "Stretch Limousine, Mini Coach , Motor Coach & Party Bus",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "10/24" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "N/A" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "N/A" },
        ]
    }
];

const ConcertLimoFleet = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Extravagant Transportation for All Special Events
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Bayou Black Carss motto is "Every Event Accompanied Makes It Special." We do not just provide a ride, we offer a service, and a good one at that. If you are looking for a premium sedan for your business dealings, a large SUV for a family holiday, a stretch limo for an elegant occasion, or even a party bus for a night on the town, look no further because our state-of-the-art fleet will adequate any and all of your travel arrangements with ease and comfort and luxurious style.
                    </p>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fleetVehicles.map((vehicle, index) => (
                        <div key={index} className="border border-navy-primary/30 border-dashed rounded-xl overflow-hidden p-6 bg-white flex flex-col items-center">

                            {/* Image Header */}
                            <div className="relative h-32 w-full mb-6">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-grow flex flex-col w-full text-center">
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary mb-2 uppercase tracking-wide">{vehicle.name}</h3>
                                <p className="text-luxury-text-muted text-[11px] leading-relaxed mb-6 h-12">{vehicle.subtitle}</p>

                                {/* Specs Grid (3 items in a row) */}
                                <div className="grid grid-cols-3 gap-2 w-full mt-auto pt-4 border-t border-navy-primary/10">
                                    {vehicle.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex flex-col items-center justify-center space-y-1">
                                            <span className="text-gold">{spec.icon}</span>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] uppercase tracking-wider text-navy-primary/60 font-semibold">{spec.label}</span>
                                                <span className="text-[12px] font-bold text-navy-primary">{spec.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConcertLimoFleet;
