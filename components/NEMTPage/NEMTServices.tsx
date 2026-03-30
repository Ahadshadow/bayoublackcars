import React from 'react';
import Image from 'next/image';

const services = [
    {
        title: "Medical Consultation & Checkup Transit",
        desc: "For routine doctor visits and specialist checkups, we provide a private, comfortable, and punctual environment. We coordinate pickups from all residences and medical facilities.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Secure Hospital Discharge Transport",
        desc: "Following surgical procedures or complex treatments, a serene ride home is paramount. Our professional chauffeurs ensure you travel in absolute comfort and total privacy.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Rehabilitation & Therapy Coordination",
        desc: "For physical therapy and rehabilitation cycles, consistency is key. We provide seamless, door-to-door service that respects your recovery schedule and comfort needs.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "Specialized Clinical Treatment Access",
        desc: "We prioritize the unique requirements of localized clinical treatments. Our NEMT service ensures a dignified, reliable, and smooth transition to and from every session.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Professional Patient Logistics & Assistance",
        desc: "We deliver coordinated ground transportation for non-emergency medical requirements, ensuring patients arrive at clinical appointments with dignity, safety, and absolute punctuality.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Senior & Assisted Living Ensemble",
        desc: "We offer specialized transportation with tailored vehicle assistance for seniors and residents of assisted living facilities, ensuring world-class support for all medical visits.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Long-Distance Regional Medical Transit",
        desc: "We provide private, premium medical transport for extended journeys to specialized surgical centers or superior medical facilities across the region.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    }
];

const NEMTServices = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                    Our Non-Emergency Medical Transportation Services
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    We offer specialized transportation for various medical needs, ensuring every ride is tailored to your requirements.
                </p>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col bg-[#e5e7eb]/50 group cursor-pointer shadow-md rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            {/* Image Container */}
                            <div className="relative h-48 w-full bg-white/50 p-6">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col items-center flex-grow text-center">
                                <h3 className="text-[14px] md:text-[16px] font-taviraj font-bold text-navy-primary mb-3 border-b-2 border-gold pb-2 w-full uppercase tracking-wide leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[11px] md:text-[12px] text-gray-600 leading-relaxed uppercase font-medium">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NEMTServices;
