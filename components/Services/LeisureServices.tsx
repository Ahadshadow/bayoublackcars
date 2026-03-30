"use client";

import React from 'react';
import Image from 'next/image';

const leisureServices = [
    {
        title: "Bespoke Limousine Service",
        description: "Travel in comfort and class with our premium limousine service. Perfect for weddings, parties, date nights, or any occasion where style matters most.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Milestone Celebration Bus",
        description: "Celebrate on the move with our fully equipped luxury party buses. Perfect for birthdays, bachelor parties, proms, or a night out with friends.",
        image: "/background remove/Milestone Celebration Bus.png"
    },
    {
        title: "Elite Black Car Service",
        description: "Experience smooth, stylish rides with our private black car service. Ideal for airport travel, business meetings, special events, or everyday luxury.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Professional Chauffeur Service",
        description: "Ride with ease and elegance with our professional chauffeur service. Perfect for business travel, VIP guests, or personal trips where comfort matters.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    }
];

const LeisureServices = () => {
    return (
        <section className="py-24 bg-white font-poppins">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[45px] font-bold text-pure-black font-taviraj tracking-tight mb-3 italic underline decoration-gold underline-offset-8">
                        Luxury Transportation for Personal & Leisure Travel
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 mt-10">
                        Whether it&apos;s a special night out, a family celebration, or personal travel, we deliver elegance with every ride. Our black car services are tailored for comfort, class, and unforgettable experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {leisureServices.map((service, index) => (
                        <div
                            key={index}
                            className="border-2 border-black rounded-[20px] p-6 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl hover:bg-gray-50/50"
                        >
                            <div className="relative w-full h-32 mb-6">
                                <Image
                                    src={service.image!}
                                    alt={service.title}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-[20px] font-bold text-black mb-4 font-taviraj h-12 flex items-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeisureServices;
