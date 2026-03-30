import React from 'react';
import Image from 'next/image';

const destinations = [
    {
        title: "Fine Dining",
        desc: "Savor world-class cuisine at the region's finest restaurants, where gourmet flavors and intimate settings set the stage for romance.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Rooftop Bars & Lounges",
        desc: "Raise a glass to your love at a trendy rooftop bar, with sweeping city views and handcrafted cocktails.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Luxury Hotels & Scenic Retreats",
        desc: "Indulge in five-star luxury, rooftop dining, and spa relaxation at premier hotels and secluded estates.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

const AnniversaryLimoDestinations = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* 2 Column Layout: Left handles Text, Right handles Cards */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

                    {/* Left: Text */}
                    <div className="w-full md:w-1/3 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 leading-tight">
                            Romantic Anniversary Destinations
                        </h2>
                        <p className="text-pure-white/80 text-[13px] leading-relaxed pr-8">
                            Celebrate your anniversary in style with a luxury ride to the most romantic spots. Whether it's fine dining, rooftop cocktails, a live symphony, or a scenic getaway, our limo service ensures a seamless and unforgettable experience for you and your partner.
                        </p>
                    </div>

                    {/* Right: 3 Card Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {destinations.map((dest, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden flex flex-col shadow-xl">
                                {/* Image Top */}
                                <div className="relative h-32 w-full">
                                    <Image
                                        src={dest.image || ''}
                                        alt="Destination"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* White Content Bottom */}
                                <div className="p-4 flex-grow flex flex-col items-center text-center">
                                    <h3 className="text-[14px] font-bold font-taviraj text-navy-primary leading-tight mb-2 uppercase border-b border-navy-primary/20 pb-2 w-full">
                                        {dest.title}
                                    </h3>
                                    <p className="text-[10px] text-luxury-text-muted leading-relaxed">
                                        {dest.desc}
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

export default AnniversaryLimoDestinations;
