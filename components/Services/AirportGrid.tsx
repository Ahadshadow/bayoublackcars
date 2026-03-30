"use client";

import React from 'react';
import Image from 'next/image';

const airports = [
    { name: "O'Hare Airport", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png" },
    { name: "Chicago Midway", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png" },
    { name: "Louis Armstrong", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Premium Suv.png" },
    { name: "San Francisco", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/First class.png" },
    { name: "Los Angeles", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png" },
    { name: "John F. Kennedy", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png" },
    { name: "Indianapolis", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Premium Suv.png" },
    { name: "General Mitchell", image: "/background remove/General Mitchell.png" }
];

const AirportGrid = () => {
    return (
        <section className="py-24 bg-navy-primary text-pure-white font-poppins">
            <div className="container-custom text-center mb-16">
                <span className="text-gold uppercase tracking-widest font-bold text-sm">Services</span>
                <h2 className="text-[32px] md:text-[45px] font-bold font-taviraj tracking-tight mt-2 mb-4">
                    Premium Airport Transfers & Black Car Services
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                <p className="max-w-3xl mx-auto opacity-80 decoration-inherit decoration-white">
                    Arrive or depart in unmatched style with our professional airport limo services. Whether you&apos;re heading to a flight or arriving in town, we ensure a smooth, luxurious experience from door to terminal.
                </p>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {airports.map((airport, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 group shadow-lg">
                                <Image
                                    src={airport.image}
                                    alt={airport.name}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <div className="bg-pure-white text-pure-black px-6 py-2 rounded-lg font-bold text-sm shadow-md min-w-[160px] text-center">
                                {airport.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirportGrid;
