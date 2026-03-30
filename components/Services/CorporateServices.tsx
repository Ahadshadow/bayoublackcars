"use client";

import React from 'react';
import Image from 'next/image';

const corporateServices = [
    {
        title: "Corporate Airport Transfers",
        description: "Professional airport rides with timely pickups and luxury black car service. Ideal for executives who value punctuality and class.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Client & Partner Travel",
        description: "Impress your clients and partners with a smooth, high-end ride. We ensure a classy travel experience for every business need.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Meetings & Offsite Events",
        description: "Reliable transport to your business meetings and offsite venues. Focus on the meeting; we'll handle the ride.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/First class.png"
    }
];

const CorporateServices = () => {
    return (
        <section className="py-24 bg-white font-poppins">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[45px] font-bold text-pure-black font-taviraj tracking-tight mb-3 italic">
                        Corporate Travel & Executive Transport
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Professional, luxurious, and punctual black car services designed for corporate needs. From airport transfers to business events — travel smart, travel in style.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {corporateServices.map((service, index) => (
                        <div
                            key={index}
                            className="relative h-[450px] rounded-[30px] overflow-hidden group shadow-lg"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-center overflow-hidden">
                                <div className="transform translate-y-[35%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-white text-[24px] font-bold font-taviraj mb-3 group-hover:mb-4 transition-all duration-500 italic">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-[14px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {service.description}
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

export default CorporateServices;
