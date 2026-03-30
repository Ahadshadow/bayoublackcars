"use client";

import React from 'react';
import Image from 'next/image';

const WhyTrust = () => {
    const trustItems = [
        {
            title: "Reliable Airport Transit",
            description: "The most dependable way to secure your transfers at any hour.",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
        },
        {
            title: "Modern Vehicle Options",
            description: "From executive sedans to spacious Sprinters, we have the perfect ride.",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Uncompromising Quality",
            description: "Experience top-tier elegance and comfort with our professionally driven fleet.",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
        }
    ];

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container-custom px-4 text-center">
                <h2 className="text-[28px] md:text-[40px] font-bold text-navy-primary font-taviraj mb-2">
                    Why Choose Bayou Black Cars?
                </h2>
                <p className="text-gray-500 text-[14px] mb-16">
                    Make your next trip a luxurious one — <span className="text-navy-primary font-bold"> book your ride today! </span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-8 border border-navy-primary/10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <h3 className="text-navy-primary text-[24px] font-bold font-taviraj mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTrust;
