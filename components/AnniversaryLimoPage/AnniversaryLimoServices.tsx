import React from 'react';
import Image from 'next/image';

const anniversaryServices = [
    {
        title: "Romantic Dinner Chauffeur Service",
        desc: "Surprise your significant other with a luxurious ride to your favorite restaurant or an upscale dining experience. Our chauffeur-driven limousines ensure a seamless, worry-free evening. Luxury sedans, stretch limos, or SUVs for an intimate setting.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "City Night Out Limo Experience",
        desc: "Enjoy a glamorous night out in the city without worrying about parking or traffic. Visit multiple destinations — restaurants, lounges, theaters, or scenic city spots — while we provide door-to-door service.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Weekend Getaway & Hotel Transfers",
        desc: "Planning a romantic getaway? Travel in comfort with our private limo service to resorts, hotels, or vacation destinations. Airport or hotel transfers with meet-and-greet service.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Surprise Anniversary Limo Ride",
        desc: "Make your celebration extra special by surprising your partner with a chauffeur-driven limo. Whether it's a scenic drive, a nostalgic trip to meaningful places, or a rooftop dinner, we'll make it magical.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

const AnniversaryLimoServices = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Signature Anniversary Chauffeur Services
                </h2>
                <p className="text-luxury-text-muted text-[15px] md:text-[16px] max-w-3xl mx-auto mb-12 leading-relaxed">
                    We specialize in curating the perfect romantic atmosphere for your milestone celebration. Discover our range of bespoke transportation solutions designed for intimacy and elegance:
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {anniversaryServices.map((service, index) => (
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

export default AnniversaryLimoServices;
