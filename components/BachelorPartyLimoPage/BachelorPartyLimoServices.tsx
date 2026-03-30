import React from 'react';
import Image from 'next/image';

const partyServices = [
    {
        title: "Metropolitan Nightlife Ensembles",
        desc: "Receive VIP-level transit as we navigate your group between the city's most exclusive lounges and bars. Our professional chauffeurs ensure your safe and stylish return while you focus entirely on the night out.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Executive Group Fleet Solutions",
        desc: "Coordinated transportation for large bachelor parties. Whether visiting multiple restaurants or entertainment venues, our luxury SUVs and stretch limousines provide the perfect group atmosphere.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Entertainment & Gaming Excursions",
        desc: "Arrive at regional casinos and entertainment centers in total comfort. Our vehicles are equipped with immersive audio-visual systems to maintain the celebration energy between stops.",
        image: "/background remove/Conventions___Trade_Shows-removebg-preview.png"
    },
    {
        title: "Curated Dining & Event Tours",
        desc: "Plan a sophisticated afternoon with luxury transit to top-tier dining destinations or curated regional events. We ensure every phase of your itinerary is handled with precision.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Regional Weekend Gateways",
        desc: "Extend the celebration with executive transportation to regional resorts and destinations. Perfect for groups seeking a high-end, multi-day bachelor party experience.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Signature Event Arrivals",
        desc: "Make an unforgettable entrance at major arenas and stadiums. We provide direct venue links and coordinated returns for large groups attending milestone events.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

const BachelorPartyLimoServices = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Elite Bachelor Celebration Logistics
                </h2>
                <p className="text-luxury-text-muted text-[15px] md:text-[16px] max-w-3xl mx-auto mb-12 leading-relaxed">
                    From high-energy metropolitan tours to sophisticated regional excursions, we manage every phase of your group movement with absolute precision and style.
                </p>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partyServices.map((service, index) => (
                        <div key={index} className="relative h-48 sm:h-56 w-full overflow-hidden group cursor-pointer shadow-md rounded-lg">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark Overlay Always Present */}
                            <div className="absolute inset-0 bg-navy-primary/50 transition-colors duration-500 group-hover:bg-navy-primary/80"></div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center z-10 overflow-hidden">
                                <div className="transform translate-y-[45%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-[17px] md:text-[20px] font-taviraj font-bold text-pure-white mb-3 group-hover:mb-4 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[11px] md:text-[12px] text-pure-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3 leading-relaxed max-w-[280px]">
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

export default BachelorPartyLimoServices;
