import React from 'react';
import Image from 'next/image';
import { Users, Briefcase } from 'lucide-react';

const fleetData = [
    {
        name: "Executive Luxury Sedan",
        subtitle: "Lincoln Continental or equivalent",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "3" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "2" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "2" },
        ]
    },
    {
        name: "Premium Luxury SUV",
        subtitle: "Cadillac Escalade or Suburban",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "6-7" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "5" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "2" },
        ]
    },
    {
        name: "Executive Sprinter Van",
        subtitle: "Mercedes Sprinter or similar",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "14-16" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "8" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "6" },
        ]
    },
    {
        name: "Classic Stretch Limousine",
        subtitle: "Stretch Limo or Party Bus",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        specs: [
            { icon: <Users size={16} />, label: "Passengers", text: "10-12" },
            { icon: <Briefcase size={16} />, label: "Large Bags", text: "Limited" },
            { icon: <Briefcase size={16} />, label: "Small Bags", text: "4" },
        ]
    }
];

const BirthdayLimoFleet = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Luxury Birthday Fleet Solutions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Select from our curated executive fleet for your milestone celebration. From intimate luxury sedans to high-capacity party interiors, we ensure your arrival is as distinguished as the occasion itself.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fleetData.map((vehicle, index) => (
                        <div key={index} className="border border-luxury-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col p-6 group">
                            <div className="relative h-40 w-full mb-6 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-grow flex flex-col">
                                <h3 className="text-xl font-bold font-taviraj text-navy-primary mb-2 border-b border-luxury-border/30 pb-2 uppercase tracking-tight">{vehicle.name}</h3>
                                <p className="text-luxury-text-muted text-[11px] leading-tight mb-6 h-8 text-left">{vehicle.subtitle}</p>
                                <div className="grid grid-cols-1 gap-y-3 mb-6 mt-auto">
                                    {vehicle.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex items-center gap-2 text-luxury-text-muted text-[11px]">
                                            <span className="text-navy-primary/60">{spec.icon}</span>
                                            <span className="font-semibold">{spec.label}:</span>
                                            <span>{spec.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
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

export default BirthdayLimoFleet;
