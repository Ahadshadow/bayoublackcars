import React from 'react';
import Image from 'next/image';

const brideGroomServices = [
    {
        title: "Iconic Ceremonial Arrival",
        desc: "Choose a Signature Stretch Limousine for a grand and classic entrance that defines your milestone celebration.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Dynamic Celebration Atmosphere",
        desc: "Opt for an Elite Milestone Party Bus featuring high-impact lighting and audio systems for a vibrant ensemble movement.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "Intimate Executive Transit",
        desc: "Our Executive Luxury Sedans or SUVs provide a discreet, world-class environment for smaller groups or solo journeys.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Premium Group Logistics",
        desc: "Professional Sprinter Vans offer the perfect balance of luxury and capacity for your entire court of honor.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    }
];

const QuinceaneraLimoBrideGroom = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                {/* Note: The reference site has this exact heading here despite it being a Quinceanera page */}
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Bride & Groom Luxury Limo Service
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto mb-16 leading-relaxed">
                    Not sure which vehicle is best for your big day? Here's a guide to help you decide and Our reservation team is happy to assist you in selecting the perfect vehicle based on your party size, venue, and preferences.
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {brideGroomServices.map((service, index) => (
                        <div key={index} className="relative h-48 sm:h-56 w-full overflow-hidden group cursor-pointer shadow-md rounded-lg">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-110"
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

export default QuinceaneraLimoBrideGroom;
