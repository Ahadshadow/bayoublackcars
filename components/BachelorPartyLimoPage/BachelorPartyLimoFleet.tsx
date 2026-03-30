import React from 'react';
import Image from 'next/image';
import { Users, Briefcase } from 'lucide-react';

const fleetVehicles = [
    {
        name: "SIGNATURE EXECUTIVE SEDANS",
        subtitle: "Sophisticated and discrete transport for individual or small group milestone travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "3" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "2" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "2" },
        ]
    },
    {
        name: "PREMIUM ENSEMBLE SUVS",
        subtitle: "Luxurious and spacious enough for the whole crew to travel together in comfort.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "6-7" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "5" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "2" },
        ]
    },
    {
        name: "ELITE MILESTONE SPRINTERS",
        subtitle: "The ultimate group transit for large party crews and high-energy ensemble movement.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "14-16" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "8" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "6" },
        ]
    },
    {
        name: "TRADITIONAL STRETCH LIMOUSINES",
        subtitle: "Capture the iconic party moment with a classic and grand ensemble arrival.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "10/24" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "N/A" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "N/A" },
        ]
    }
];

const BachelorPartyLimoFleet = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Our Luxury Fleets
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Bayou Black Cars is committed to providing a variety of transportation services including airport transfers, general pickup & drop off transportation and business travel. We are a great option for tourists because of our opulent cars, skilled drivers, clear pricing, and easy booking procedures. Get competent and dependable services that can cater to your unique needs, be it business travel solutions or a journey to or from the airport.
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

export default BachelorPartyLimoFleet;
