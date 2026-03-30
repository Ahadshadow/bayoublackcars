"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Clock, Milestone, ChevronRight, Star } from 'lucide-react';

const VehicleSystemSection = () => {
    const categories = [
        {
            name: "Executive Luxury Sedans",
            description: "Perfect for corporate individuals or couples. Our sedans offer a discreet yet world-class travel environment, featuring premium interiors and absolute professional protocol.",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
            link: "https://customer.moovs.app/bayou-black-cars-llc/request/new",
            features: ["Comfort for up to 3", "Executive Privacy", "Climate Control"],
            hourlyRate: "$90", // Retaining original rates for rendering
            mileageRate: "$4.50",
            minHours: "3 Hours",
            capacity: "3-4",
            luggage: "2-3",
            tag: "MOST POPULAR"
        },
        {
            name: "Premium Milestone SUVs",
            description: "Our high-impact SUVs provide a commanding presence for group milestons or business ensembles. Spacious, comfortable, and maintained to the highest safety standards.",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png",
            link: "https://customer.moovs.app/bayou-black-cars-llc/request/new",
            features: ["Capacity for up to 7", "All-Wheel Drive", "Panoramic Views"],
            hourlyRate: "$150", // Retaining original rates for rendering
            mileageRate: "$6.00",
            minHours: "4 Hours",
            capacity: "6-7",
            luggage: "4-5",
            tag: "BEST FOR GROUPS"
        },
        {
            name: "Professional Sprinter Vans",
            description: "The definitive solution for high-capacity corporate teams or large family excursions. Features executive seating and ample space for all luggage and group logistics.",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png",
            link: "https://customer.moovs.app/bayou-black-cars-llc/request/new",
            features: ["Accommodates up to 14", "High-Ceiling Interior", "Premium Audio"],
            hourlyRate: "Call", // Retaining original rates for rendering
            mileageRate: "Quote",
            minHours: "5 Hours",
            capacity: "Up to 14",
            luggage: "Large",
            tag: "MAX CAPACITY"
        }
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-50 rounded-[40px] pt-12 pb-10 px-4 sm:px-8 flex flex-col items-center transition-all duration-500 hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)] hover:-translate-y-2 border border-black/5"
                        >
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20 rounded-[40px]"
                            ></a>

                            {/* Premium Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px]"></div>

                            {/* Tag */}
                            <div className="absolute top-6 right-8">
                                <span className="bg-gold text-pure-white text-[10px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                                    {cat.tag}
                                </span>
                            </div>

                            {/* Vehicle Image (Large Cutout) */}
                            <div className="relative w-full aspect-[16/9] mb-8 transition-transform duration-700 scale-110 group-hover:scale-115">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] p-0 sm:p-2"
                                />
                            </div>

                            {/* Title & Description */}
                            <div className="text-center mb-8">
                                <div className="flex justify-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="var(--color-gold)" className="text-gold" strokeWidth={0} />
                                    ))}
                                </div>
                                <h3 className="text-black text-[32px] font-bold font-taviraj mb-3">{cat.name}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed max-w-[280px] mx-auto">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Rates Section (Glassmorphism) */}
                            <div className="w-full bg-pure-white rounded-3xl p-6 mb-8 border border-black/5 flex justify-center items-center transition-all group-hover:bg-pure-white group-hover:shadow-md">
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-1.5 text-gold mb-1">
                                        <Clock size={14} />
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Hourly</span>
                                    </div>
                                    <p className="text-pure-black text-[24px] font-bold font-taviraj leading-none">{cat.hourlyRate}</p>
                                </div>
                            </div>

                            {/* Detailed Specs Grid */}
                            <div className="grid grid-cols-2 gap-y-4 gap-x-6 w-full mb-10 border-t border-black/5 pt-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center border border-black/5">
                                        <Users size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase leading-none mb-1">Seats</p>
                                        <p className="text-pure-black text-[16px] font-bold leading-none">{cat.capacity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center border border-black/5">
                                        <Briefcase size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase leading-none mb-1">Bags</p>
                                        <p className="text-pure-black text-[16px] font-bold leading-none">{cat.luggage}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Select Button */}
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-navy-primary text-pure-white py-4 rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-gold transition-all duration-300 active:scale-95 shadow-lg shadow-black/10 text-center"
                            >
                                Book Now
                                <ChevronRight size={18} />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom Trusted Note */}
                <div className="mt-20 text-center">
                    <p className="text-gray-400 font-medium text-[14px] uppercase tracking-[0.3em] mb-4">
                        The Standard of Excellence
                    </p>
                    <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                    <p className="text-pure-black text-[18px] md:text-[22px] font-medium font-taviraj max-w-3xl mx-auto italic">
                        "Your safety and comfort are our top priority. We maintain a fleet of modern, meticulously cleaned vehicles driven by professional chauffeurs who go above and beyond."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VehicleSystemSection;
