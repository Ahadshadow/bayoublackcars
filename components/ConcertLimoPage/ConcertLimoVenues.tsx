import React from 'react';
import Image from 'next/image';

const venues = [
    {
        title: "Metropolitan Arenas & Concert Halls",
        desc: "Experience the energy of premier downtown venues with Bayou's executive black car service. We ensure your arrival is as distinguished as the performance itself.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Scenic Amphitheaters & Outdoor Stages",
        desc: "Enjoy open-air performances with the luxury of coordinated group transit. Our chauffeurs handle the logistics of regional festival grounds and scenic summer venues.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "Historic Cultural & Opera Houses",
        desc: "Complement your elegant evening at historic theaters and opera houses with our elite limousine service, providing a seamless transition between life's cultural highlights.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        icon: "",
        title: "Integrated Festival Grounds",
        desc: "Specialized logistics for major seasonal music festivals and regional grounds, ensuring safe and punctual transit for your entire group.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Elite Resort & Live Music Centers",
        desc: "Whether attending a private engagement or a resort gala, Bayou's premium group service guarantees a sophisticated and hassle-free return.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

const ConcertLimoVenues = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* Header Text */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12 text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 leading-tight">
                            Premier Arenas & Event Venues We Serve
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-pure-white/80 text-[13px] leading-relaxed">
                            Experience concert nights like never before with Bayou Black Cars's luxury transportation services. Whether you're heading to a grand concert downtown, an open-air festival, or an iconic opera house, we ensure you arrive in comfort, style, and ready to enjoy every moment of the show.
                        </p>
                    </div>
                </div>

                {/* 3+2 Card Grid (centered) */}
                <div className="flex flex-wrap justify-center gap-4">
                    {venues.map((venue, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)] bg-white rounded-xl overflow-hidden flex flex-col shadow-xl hover:scale-[1.02] transition-transform duration-300">
                            {/* Image Top */}
                            <div className="relative h-40 w-full">
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

export default ConcertLimoVenues;
