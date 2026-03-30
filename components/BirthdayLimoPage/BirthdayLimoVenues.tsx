import React from 'react';
import Image from 'next/image';

const venues = [
    {
        title: "Premier Metropolitan\nNightlife & Rooftop Venues",
        desc: "Experience the city's most exclusive lounges and rooftop bars. Our chauffeurs ensure your arrival is as stylish as the venue's skyline views.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Exclusive Private Estates &\nSuburban Manors",
        desc: "Host your milestone celebration at a secluded estate or private manor. We provide seamless navigation and direct transit to the region's most scenic event spaces.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Family Celebration &\nBespoke Themed Centers",
        desc: "For family-focused birthdays or themed events, our luxury fleet provides a fun, safe, and exciting environment for guests of all ages.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    }
];

const BirthdayLimoVenues = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* 2 Column Layout: Left handles Text, Right handles Cards */}
                <div className="flex flex-col md:flex-row gap-8 items-center">

                    {/* Left: Text */}
                    <div className="w-full md:w-1/3 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 leading-tight">
                            Luxury Birthday Limo\nTransportation
                        </h2>
                        <p className="text-pure-white/80 text-[13px] leading-relaxed pr-8">
                            Make your birthday celebration extraordinary with\nour premium limo service, offering luxury, comfort,\nand VIP treatment for your special day. Whether\nyou're planning a milestone birthday, a surprise\nparty, or a night out with friends, we ensure a\nseamless, stylish, and safe ride to your destination.
                        </p>
                    </div>

                    {/* Right: 3 Card Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {venues.map((venue, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden flex flex-col shadow-xl">
                                {/* Image Top */}
                                <div className="relative h-32 w-full">
                                    <Image
                                        src={venue.image}
                                        alt="Venue"
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                {/* White Content Bottom */}
                                <div className="p-4 flex-grow flex flex-col items-center text-center">
                                    <h3 className="text-[14px] font-bold font-taviraj text-navy-primary whitespace-pre-line leading-tight mb-2">
                                        {venue.title}
                                    </h3>
                                    <p className="text-[10px] text-luxury-text-muted leading-relaxed whitespace-pre-line">
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

export default BirthdayLimoVenues;
