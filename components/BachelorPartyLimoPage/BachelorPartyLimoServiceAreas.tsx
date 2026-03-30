import React from 'react';
import Image from 'next/image';

const areas = [
    {
        title: "Metropolitan & Iconic Party Venues",
        desc: "Experience vibrant nightlife, rooftop lounges, and high-energy clubs with luxury limo transport. Arrive in style and enjoy stress-free partying with no parking worries.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Suburbs & Exclusive Private Estates",
        desc: "Celebrate at elegant suburban venues, private mansions, or scenic event spaces. Our luxury SUVs ensure smooth and comfortable group transportation.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Elite Nightclubs & Lounges",
        desc: "Turn your night into a VIP club-hopping experience. Travel in a fully stocked limousine with premium interiors, music, and ambient lighting for an unforgettable party.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

const BachelorPartyLimoServiceAreas = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* 2 Column Layout: Left handles Text, Right handles Cards */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

                    {/* Left: Text */}
                    <div className="w-full md:w-1/3 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 leading-tight">
                            Service Areas – Premium Milestone Coverage
                        </h2>
                        <p className="text-pure-white/80 text-[13px] leading-relaxed pr-8">
                            We proudly offer our Bachelor Party Limo Service across the region's most vibrant metropolitan areas, bustling downtown neighborhoods, and premier suburban destinations. From exclusive private venues to high-energy city centers, Bayou ensures you arrive in style.
                        </p>
                    </div>

                    {/* Right: 3 Card Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {areas.map((area, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden flex flex-col shadow-xl">
                                {/* Image Top */}
                                <div className="relative h-32 w-full">
                                    <Image
                                        src={area.image || ''}
                                        alt="Destination"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* White Content Bottom */}
                                <div className="p-4 flex-grow flex flex-col items-center text-center">
                                    <h3 className="text-[14px] font-bold font-taviraj text-navy-primary leading-tight mb-2 uppercase border-b border-navy-primary/20 pb-2 w-full">
                                        {area.title}
                                    </h3>
                                    <p className="text-[10px] text-luxury-text-muted leading-relaxed">
                                        {area.desc}
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

export default BachelorPartyLimoServiceAreas;
