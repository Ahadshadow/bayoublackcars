"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

export interface FleetSpec {
    icon: LucideIcon;
    label: string;
}

interface FleetCardProps {
    name: string;
    description: string;
    image: string;
    specs: FleetSpec[];
    bookNowHref?: string;
    className?: string;
}

const FleetCard: React.FC<FleetCardProps> = ({
    name,
    description,
    image,
    specs,
    bookNowHref = "https://customer.moovs.app/bayou-black-cars-llc/request/new",
    className = ""
}) => {
    return (
        <div className={`bg-white rounded-3xl p-6 flex flex-col items-center text-left border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group ${className}`}>
            {/* Vehicle Image */}
            <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                <Image
                    src={image || "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"}
                    alt={name}
                    width={300}
                    height={150}
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Title & Description */}
            <div className="w-full mb-6">
                <h3 className="text-[24px] font-bold text-pure-black font-taviraj leading-tight mb-2 group-hover:text-gold transition-colors uppercase tracking-tight">
                    {name}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-2 md:line-clamp-none">
                    {description}
                </p>
            </div>

            {/* Spec Grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 w-full mb-8 pt-6 border-t border-gray-100">
                {specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <spec.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                        <span className="text-[13px] text-gray-700 font-medium whitespace-nowrap">
                            {spec.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-auto w-full flex justify-center pt-2">
                <a
                    href={bookNowHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-primary text-pure-white px-8 py-3 rounded-md font-bold text-[16px] transition-all hover:bg-gold hover:text-pure-white hover:scale-105 shadow-md w-3/4 text-center uppercase tracking-wider"
                >
                    Book Now
                </a>
            </div>
        </div>
    );
};

export default FleetCard;
