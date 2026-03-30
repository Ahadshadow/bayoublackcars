import React from 'react';
import Image from 'next/image';

const venues = [
    {
        title: "Premier Metropolitan Celebration Venues",
        desc: "Arrive in style at the city's most iconic celebration spaces, featuring grand ballrooms and skyline views perfect for your red carpet moment.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Signature Estate & Garden Grounds",
        desc: "Enjoy a picturesque arrival at scenic suburban estates and manicured gardens, offering a tranquil and sophisticated backdrop for your evening.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "Luxury Waterfront & Skyline Ballrooms",
        desc: "Make your celebration unforgettable at luxurious ballrooms featuring elegant décor and breathtaking views of the city skyline.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Scenic Outdoor Scenic Locations",
        desc: "Celebrate in beautiful regional parks and serene outdoor venues that offer natural beauty and a world-class atmosphere for your group.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Elite Hotels & Regional Resorts",
        desc: "Host a luxurious event at full-service premium hotels and resorts, ensuring a seamless transition from your ride to the main event.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    }
];

const PromLimoVenues = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* Header Text */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12 text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 leading-tight uppercase">
                            Premier Event Venues We Proudly Serve
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-pure-white/80 text-[13px] leading-relaxed">
                            At Bayou Black Cars, we elevate your prom night experience with luxury transportation that ensures a grand, stylish, and safe arrival. Whether you're headed to Chicago’s iconic downtown venues or scenic suburban ballrooms, we add a touch of elegance to your special evening.
                        </p>
                    </div>
                </div>

                {/* 3+2 Card Grid */}
                <div className="flex flex-wrap justify-center gap-4">
                    {venues.map((venue, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)] bg-white rounded-xl overflow-hidden flex flex-col shadow-xl hover:scale-[1.02] transition-transform duration-300">
                            {/* Image Top */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={venue.image}
                                    alt={venue.title}
                                    fill
                                    className="object-contain p-4"
                                    unoptimized
                                />
                            </div>
                            {/* Content Bottom */}
                            <div className="p-6 flex-grow flex flex-col items-center text-center">
                                <h3 className="text-[15px] font-bold font-taviraj text-navy-primary leading-tight mb-3 uppercase border-b border-navy-primary/10 pb-3 w-full">
                                    {venue.title}
                                </h3>
                                <p className="text-[11px] text-luxury-text-muted leading-relaxed">
                                    {venue.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PromLimoVenues;
