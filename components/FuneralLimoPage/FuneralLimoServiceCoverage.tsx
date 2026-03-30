import React from 'react';
import Image from 'next/image';

const locations = [
    {
        title: "Premier Regional Memorial Homes",
        desc: "Dignified transportation to leading local funeral homes and memorial sanctuaries. We coordinate closely with on-site staff for seamless guest arrivals.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Serene Private Cemetery Estates",
        desc: "Reliable and respectful transit to peaceful memorial gardens and private cemetery estates across the metropolitan region.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Historic Chapels & Sanctuary Venues",
        desc: "Specialized service for religious ceremonies held at historic chapels, churches, and traditional houses of worship.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Community & Civic Religious Centers",
        desc: "Coordinated transport for large-scale memorial services at civic halls, community centers, and religious gathering spaces.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Hospitality & Post-Service Venues",
        desc: "Seamless group movement to hotels, banquet facilities, and private residences for post-service gatherings and receptions.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    }
];

const FuneralLimoServiceCoverage = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins text-center md:text-left">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* Header Text */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-taviraj text-pure-white font-bold mb-4 leading-tight uppercase">
                            Extensive Regional Service Coverage
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-pure-white/80 text-[11px] md:text-[13px] leading-relaxed uppercase">
                            We offer dignified transportation to leading memorial venues, cemetery estates, and chapels across the metropolitan area, ensuring families and arriving guests move with absolute composure and care.
                        </p>
                    </div>
                </div>

                {/* Card Slider/Grid */}
                <div className="flex flex-wrap justify-center gap-4">
                    {locations.map((loc, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)] bg-white rounded-xl overflow-hidden flex flex-col shadow-xl hover:scale-[1.02] transition-transform duration-300">
                            {/* Image Top */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={loc.image}
                                    alt={loc.title}
                                    fill
                                    className="object-contain p-4"
                                    unoptimized
                                />
                            </div>
                            {/* Content Bottom */}
                            <div className="p-6 flex-grow flex flex-col items-center text-center">
                                <h3 className="text-[14px] font-bold font-taviraj text-navy-primary leading-tight mb-3 uppercase border-b border-navy-primary/10 pb-3 w-full">
                                    {loc.title}
                                </h3>
                                <p className="text-[10px] text-luxury-text-muted leading-relaxed uppercase">
                                    {loc.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FuneralLimoServiceCoverage;
