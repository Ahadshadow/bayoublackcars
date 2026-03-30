import React from 'react';
import Image from 'next/image';

const hosp_locations = [
    {
        title: "Elite Rehabilitation & Therapy Centers",
        desc: "Reliable, high-protocol transit for patients transitioning to superior recovery surgical centers and specialized therapy facilities.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Comprehensive Care Treatment Centers",
        desc: "Comfortable, punctual transport to specialized medical treatment centers, ensuring a dignified environment for every patient.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Premier Assisted Living Facilities",
        desc: "Safe and secure transportation for seniors to world-class residential facilities and specialized nursing environments.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "Regional Medical Appointment Networks",
        desc: "Meticulous transit for routine medical consultations across regional metropolitan corridors, prioritizing punctuality and comfort.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Signature Milestones & Wellness Trips",
        desc: "Premium chauffeured journeys for wellness visits and iconic landmarks, providing a world-class experience at every stop.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    }
];

const NEMTHospitals = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-navy-primary to-black font-poppins text-center md:text-left">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* Header Text */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-taviraj text-pure-white font-bold mb-4 leading-tight uppercase">
                            Major Medical Facilities We Serve
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-pure-white/80 text-[11px] md:text-[13px] leading-relaxed uppercase">
                            We provide high-protocol non-emergency medical transportation to premier regional medical centers, ensuring patient security and absolute punctuality for every appointment.
                        </p>
                    </div>
                </div>

                {/* Card Slider/Grid */}
                <div className="flex flex-wrap justify-center gap-4">
                    {hosp_locations.map((loc, index) => (
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

export default NEMTHospitals;
