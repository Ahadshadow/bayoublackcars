"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: "Absolute Professional Protocol",
        description: "Our chauffeurs are trained in executive-class etiquette and defensive driving, ensuring a discreet and secure environment for every passenger.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Regional Logistics Expertise",
        description: "We navigate with precision, leveraging real-time traffic data and deep local knowledge to ensure you reach your destination without delay.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Bespoke Fleet Standards",
        description: "Every vehicle in our executive fleet is meticulously maintained and detailed to meet our rigorous standards for comfort and aesthetic excellence.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Premium Suv.png"
    }
];

const ChauffeurFeatures = () => {
    return (
        <section className="bg-white py-24 font-poppins">
            <div className="container-custom px-4 text-center">
                <h2 className="text-[32px] md:text-[45px] font-bold text-navy-primary font-taviraj italic mb-4">
                    Why You'll Love Our Chauffeurs
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-16">
                    Our chauffeurs are pros who put your safety and comfort first. Here's what makes them stand out
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full max-w-[320px] h-48 mb-8">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-navy-primary font-taviraj mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[300px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChauffeurFeatures;
