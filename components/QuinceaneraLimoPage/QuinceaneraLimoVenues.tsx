import React from 'react';
import Image from 'next/image';

const venues = [
    {
        title: "Los Angeles, CA – Taglyan\nComplex",
        desc: "A breathtaking ballroom venue\nwith crystal chandeliers and a\nluxurious ambiance, perfect for a\nfairytale Quinceañera."
    },
    {
        title: "Miami, FL – Renaissance\nBallroom",
        desc: "A classic and elegant venue\nknown for its grand décor and\ncustomized Quinceañera packages."
    },
    {
        title: "Houston, TX – Pelazzio\nReception Venue",
        desc: "A top-tier venue featuring\nthemed decorations and all-\ninclusive Quinceañera services."
    },
    {
        title: "Grand Metropolitan Chapels",
        desc: "From historic cathedrals to modern ceremonial spaces, we provide dignified and punctual transit for every spiritual milestone.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Signature Garden & Estate Grounds",
        desc: "Experience an elegant arrival at the city's premier outdoor venues. Our chauffeurs manage all regional logistics for a seamless open-air celebration.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Elite Waterfront & Skyline Ballrooms",
        desc: "Coordinate a world-class entrance at high-profile urban venues. We provide absolute professional protocol for your red carpet moments.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

const QuinceaneraLimoVenues = () => {
    // Top 3 don't have images visible in the main section according to the screenshot structure (it only shows 3 cards visually but text suggests more, wait no the screenshot shows just 3 cards. It's a carousel originally, but we'll show the last 3 with images as static cards per the screenshot, and omit the first 3 or just display 3 for simplicity based on the screenshot)

    // Using just the 3 from the screenshot
    const displayVenues = venues.slice(3, 6);

    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* 2 Column Layout: Left handles Text, Right handles Cards */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

                    {/* Left: Text */}
                    <div className="w-full md:w-1/3 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 leading-tight">
                            Famous Quinceañera Venues<br />in Major Cities
                        </h2>
                        <p className="text-pure-white/80 text-[13px] leading-relaxed pr-8">
                            A stunning venue can take your Quinceañera celebration to the next level. Here are some of the most famous Quinceañera venues in major U.S. cities:
                        </p>
                    </div>

                    {/* Right: 3 Card Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {displayVenues.map((venue, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden flex flex-col shadow-xl">
                                {/* Image Top */}
                                <div className="relative h-32 w-full">
                                    <Image
                                        src={venue.image || ''}
                                        alt="Venue"
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                {/* White Content Bottom */}
                                <div className="p-4 flex-grow flex flex-col items-center text-center">
                                    <h3 className="text-[13px] font-bold font-taviraj text-navy-primary whitespace-pre-line leading-tight mb-2 uppercase border-b border-navy-primary/20 pb-2 w-full">
                                        {venue.title}
                                    </h3>
                                    <p className="text-[9px] text-luxury-text-muted leading-relaxed whitespace-pre-line">
                                        {venue.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuinceaneraLimoVenues;
