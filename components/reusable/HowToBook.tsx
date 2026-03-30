"use client";

import React from 'react';
import Image from 'next/image';

const HowToBook = () => {
    return (
        <section className="bg-white py-16 md:py-24 overflow-hidden font-poppins">
            <div className="container-custom px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
                            alt="Chauffeur Service"
                            fill
                            className="object-contain object-center"
                        />
                    </div>

                    <div className="flex-1 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[42px] font-bold text-navy-primary font-taviraj italic leading-tight">
                                Seamless Chauffeur Reservations
                            </h2>
                            <h4 className="text-[20px] font-bold text-navy-primary font-taviraj italic mb-3">Effortless Digital Booking</h4>
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                Reserving your elite chauffeur with Bayou Black Cars is an exercise in simplicity. Use our intuitive digital platform to specify your itinerary, vehicle preference, and any bespoke requirements. Our logistical team manages the complexity behind the scenes, ensuring a professional chauffeur is on-site and prepared exactly when you need them. Whether for a discrete hour or a week-long engagement, we provide the ultimate flexibility for your travel.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[42px] font-bold text-navy-primary font-taviraj italic leading-tight">
                                The Executive Fleet
                            </h2>
                            <h4 className="text-[20px] font-bold text-navy-primary font-taviraj italic mb-3">Our Signature Collection</h4>
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                We curate an exceptional collection of vehicles designed to meet the highest standards of luxury and reliability. From sleek executive sedans for solo travel to spacious SUVs and bespoke limousines for group logistics, every vehicle is a testament to comfort and style. Equipped with modern amenities and maintained to showroom standards, our fleet provides the perfect environment for productivity or relaxation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToBook;
