import React from 'react';
import Image from 'next/image';

const partyServices = [
    {
        title: "Metropolitan Concert Ensembles",
        desc: "Arrive at the city's premier arenas in coordinated style. Our chauffeurs handle all venue logistics, bypassing traffic chaos and providing direct entryway access so you can walk straight to your seats.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Executive Group Logistics",
        desc: "Coordinating a large party for a major festival or tour? Our executive SUVs and sprinter vans ensure your entire group stays together in total luxury from the first pickup to the final encore.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "VIP Gala & Red Carpet Arrivals",
        desc: "For those high-profile tours and opening nights, our signature stretch limousines provide a world-class presence that turns heads and elevates your entire evening experience.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Integrated Event Coordination",
        desc: "We provide seamless links between pre-show dinners, venues, and after-parties. Our professional team manages every stop on your itinerary with absolute precision and professional protocol.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    }
];

const ConcertLimoServices = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 pt-12 pb-12">
                    Signature Concert & Event Transportation
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto mb-16 leading-relaxed">
                    Bayou Black Cars offers a variety of concert transportation options to match your group size, style, and unique energy. Whether it’s an intimate date night, a large-scale celebration with friends, or a high-profile corporate entertainment event, we ensure your arrival is as spectacular as the show itself.
                </p>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partyServices.map((service, index) => (
                        <div key={index} className="relative h-64 w-full overflow-hidden group cursor-pointer shadow-md rounded-lg">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            {/* Dark Overlay Always Present */}
                            <div className="absolute inset-0 bg-navy-primary/40 transition-colors duration-500 group-hover:bg-navy-primary/70"></div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center z-10 overflow-hidden">
                                <div className="transform translate-y-[45%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-[18px] md:text-[22px] font-taviraj font-bold text-pure-white mb-3 group-hover:mb-4 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-pure-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-4 leading-relaxed max-w-[280px]">
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

export default ConcertLimoServices;
