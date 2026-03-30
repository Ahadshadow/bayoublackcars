"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const features = [
    "Fully licensed and insured luxury transport provider with reliable rates.",
    "Rigorous background checks and professional training for all staff.",
    "Extensive local expertise of our chauffeurs for efficient routing.",
    "A deep commitment to client comfort and total satisfaction.",
    "High-end vehicle maintenance and safety standards for all fleets.",
];

const rightFeatures = [
    "Strict adherence to modern health and safety protocols for your peace of mind.",
    "Complementary waiting time provided for all airport pickups.",
    "Flight monitoring technology for seamless arrivals and departures.",
    "Premium group transit solutions for corporate or social gatherings.",
    "Safety-first family options including child seats available upon request.",
    "Convenient digital and contactless payment methods accepted.",
];

const TrustedService = () => {
    return (
        <section className="bg-white py-20 font-poppins">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column */}
                    <div className="lg:w-[35%]">
                        <h2 className="text-[40px] md:text-[50px] font-bold text-black font-taviraj leading-[1.1] mb-8">
                            Your Premier Choice <br /> for Chauffeur Excellence
                        </h2>
                        <div className="w-16 h-1 bg-gold mb-10"></div>
                        <p className="text-gray-600 text-base leading-relaxed mb-10">
                            We value your schedule and comfort above all else. Bayou Black Cars offers a superior alternative to standard rentals, providing top-tier professionalism for everything from daily commutes to grand events. Whatever your travel needs, we are prepared to deliver unrivaled quality that you can depend on.
                        </p>
                        <a
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-navy-primary text-pure-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest hover:bg-gold transition-all shadow-lg hover:shadow-xl uppercase text-center"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Middle Column */}
                    <div className="lg:w-[32.5%] w-full h-full">
                        <div className="border-[1.5px] border-dashed border-black/20 rounded-[30px] p-8 md:p-10 flex flex-col gap-6 h-full min-h-[450px]">
                            {features.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="w-5 h-5 border border-gold rounded flex items-center justify-center">
                                            <Check size={14} className="text-gold" strokeWidth={4} />
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-black leading-relaxed font-medium">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-[32.5%] w-full h-full">
                        <div className="border-[1.5px] border-dashed border-black/20 rounded-[30px] p-8 md:p-10 flex flex-col gap-6 h-full min-h-[450px]">
                            {rightFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="w-5 h-5 border border-gold rounded flex items-center justify-center">
                                            <Check size={14} className="text-gold" strokeWidth={4} />
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-black leading-relaxed font-medium">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedService;
