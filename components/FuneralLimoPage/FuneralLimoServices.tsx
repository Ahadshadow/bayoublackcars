import React from 'react';
import Image from 'next/image';

const services = [
    {
        title: "Dignified Family Ensemble Transit",
        desc: "For immediate family members, we offer meticulous stretch limousines and executive black cars to provide a serene and respectful space for reflection.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Ensemble Logistics for Friends & Relatives",
        desc: "Every guest travels with dignity. Our spacious SUVs, luxury sedans, and passenger vans ensure that all attendees arrive together — with absolute comfort and total punctuality.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "High-Protocol Procession Coordination",
        desc: "A funeral procession is an essential journey of remembrance. We ensure a serene, synchronized, and highly respectful movement through every mile of the service.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Airport Concierge for Arriving Loved Ones",
        desc: "Regional airport transit for out-of-town guests is handled with empathy and precision. We provide seamless, worry-free coordination for all arriving family and friends.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Executive & VIP Service Coordination",
        desc: "For distinguished guests or specialized executive groups, we offer discrete black car services with a first-class, world-standard experience.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Bespoke Event Requirements",
        desc: "From specialized venue decorations to coordinated floral logistics, our team is ready to accommodate unique requests to ensure a tranquil and respectful environment.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    }
];

const FuneralLimoServices = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                    Our Funeral Limo Services
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    We understand that every family has unique needs when it comes to funeral transportation. Our services are flexible and designed to provide personalized solutions, ensuring comfort and ease on the day of the service.
                </p>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="relative h-64 w-full overflow-hidden group cursor-pointer shadow-md rounded-lg">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            {/* Dark Overlay Always Present */}
                            <div className="absolute inset-0 bg-navy-primary/60 transition-colors duration-500 group-hover:bg-navy-primary/80"></div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center z-10 overflow-hidden">
                                <div className="transform translate-y-[40%] group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                                    <h3 className="text-[16px] md:text-[18px] font-taviraj font-bold text-pure-white mb-4 border-b border-gold pb-2 w-full uppercase leading-tight group-hover:mb-5 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[11px] md:text-[12px] text-pure-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-4 leading-relaxed uppercase max-w-[280px] mx-auto">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FuneralLimoServices;
