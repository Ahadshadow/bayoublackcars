"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VehicleCard from './VehicleCard';

const vehicles = [
    {
        name: "Executive Luxury Sedan",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        description: "Perfect for corporate solo travelers or couples. Offers a quiet, refined environment for focused transit.",
        price: "From $85",
        capacity: "3",
        luggage: "2-3",
        href: "/cars/sedan"
    },
    {
        name: "Premium Milestone SUV",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        description: "Spacious and commanding. The ideal choice for small teams or family groups who prioritize extra interior space.",
        price: "From $125",
        capacity: "7",
        luggage: "4-5",
        href: "/cars/suv"
    },
    {
        name: "Signature Stretch Limo",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        description: "Turn any journey into a celebration. Features premium audio, mood lighting, and privacy partitions.",
        price: "Call for Pricing",
        capacity: "10",
        luggage: "3-4",
        href: "/cars/limo"
    },
    {
        name: "Professional Sprinter Van",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        description: "Designed for high-capacity group movements. Features executive lounge seating and massive storage capacity.",
        price: "From $150/hr",
        capacity: "14",
        luggage: "Large",
        href: "/cars/van"
    },
    {
        name: "Elite Milestone Party Bus",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        description: "The definitive solution for large parties and ensemble celebrations. High-impact lighting and audio systems.",
        price: "Call for Pricing",
        capacity: "24+",
        luggage: "N/A",
        href: "/cars/party-bus"
    }
];

const CardSlider: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-[28px] md:text-[40px] font-bold text-pure-black font-taviraj tracking-tight leading-tight uppercase mb-4">
                            Explore Our <span className="text-gold">Fleet</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold mb-6"></div>
                        <p className="text-gray-600">
                            Choose from our meticulously maintained collection of premium vehicles for your next journey.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-pure-black text-pure-white flex items-center justify-center hover:bg-gold transition-all duration-300"
                            aria-label="Next"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
                >
                    {vehicles.map((vehicle, index) => (
                        <div key={index} className="snap-start">
                            <VehicleCard {...vehicle} />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default CardSlider;
