"use client";

import React from 'react';
import InfoRow from './InfoRow';

interface InfoItem {
    title: string;
    description: string[];
    image: string;
    position: 'left' | 'right';
}

interface InfoSectionProps {
    title?: string;
    description?: string;
    items?: InfoItem[];
}

const defaultContent: InfoItem[] = [
    {
        title: "Reliable Terminal Connections",
        description: [
            "Arrive or depart with absolute confidence. Our airport transfer service eliminates the uncertainty of parking and rideshare availability, providing a dedicated chauffeur-driven experience. We prioritize punctuality and comfort, ensuring you reach your flight or home without unnecessary delays.",
            "Our nationwide reach covers key hubs across the U.S., including Chicago, New York, Los Angeles, and beyond. Whether it's a personal trip or high-profile executive travel, our 24/7 monitoring ensures your ride is ready when you are."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        position: 'right'
    },
    {
        title: "Suburban Executive Transit",
        description: [
            "We bridge the gap between busy city centers and surrounding residential communities. Our executive transit service offers a refined alternative to standard taxis, providing a quiet, productive environment for business travelers and a comfortable ride for families.",
            "Our coverage extends to all major suburbs near O'Hare, JFK, and other primary airports. With professionally maintained vehicles and local routing expertise, we provide a consistent and premium travel solution for every distance."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/First class.png",
        position: 'left'
    },
    {
        title: "Direct Hotel & Resort Shuttles",
        description: [
            "Complete your journey with a direct transfer to your accommodation. We provide specialized hotel and resort shuttles that bypass the crowds of public transport and shared shuttles. Experience the luxury of a private chauffeur waiting for you at the terminal.",
            "From downtown hotels to exclusive resorts, our service ensures you arrive refreshed and ready for your stay. With real-time tracking and expert logistics, we offer a seamless transition from the aircraft to your front desk."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        position: 'right'
    }
];

const InfoSection = ({
    title = "Elite Airport Connectivity",
    description = "Experience first-class terminal transfers with our dedicated airport car service. We offer reliable ground transportation designed to simplify your travel logistics, providing professional chauffeurs and a high-standard fleet for ultimate peace of mind.",
    items = defaultContent
}: InfoSectionProps) => {
    return (
        <section className="bg-white py-16 md:py-24 font-poppins overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                    <h2 className="text-[32px] md:text-[45px] font-bold text-navy-primary font-taviraj tracking-tight mb-6">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                    <p className="text-gray-600 text-[16px] md:text-[18px] leading-[1.8] opacity-90">
                        {description}
                    </p>
                </div>

                {/* Zigzag Rows */}
                <div className="flex flex-col">
                    {items.map((row, index) => (
                        <InfoRow
                            key={index}
                            title={row.title}
                            description={row.description}
                            image={row.image}
                            imagePosition={row.position}
                            sectionKey={`info_${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
