"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { supabaseClient } from '@/lib/supabaseClient';
import { Vehicle } from '@/lib/types';

const VehicleFleet = () => {
    const staticVehicles = [
        {
            id: 'static-1',
            category: "SEDAN",
            models: "Lincoln Continental or equivalent",
            price: "$90 / Hour",
            isStarting: true,
            image: "/replace img/6_SEDAN__Lincoln_Continental-removebg-preview.png",
            price_per_hour: 90,
            available: true,
            passengers: 4,
            bags: 3
        },
        {
            id: 'static-2',
            category: "First Class Sedan",
            models: "Mercedes Benz S-Class or BMW 7 Series",
            price: "$195 / Hour",
            isStarting: true,
            image: "/replace img/5 FIRST CLASS SEDAN.png",
            price_per_hour: 195,
            available: true,
            passengers: 3,
            bags: 3
        },
        {
            id: 'static-3',
            category: "ESCALADE SUV",
            models: "Cadillac Escalade",
            price: "$150 / Hour",
            isStarting: true,
            image: "/replace img/4_ESCALADE_SUV-removebg-preview.png",
            price_per_hour: 150,
            available: true,
            passengers: 7,
            bags: 6
        },
        {
            id: 'static-4',
            category: "PREMIUM LUXURY SUV",
            models: "Lincoln Navigator or equivalent",
            price: "$120 / Hour",
            isStarting: true,
            image: "/replace img/3_PREMIUM_LUXURY_SUV__Lincoln_Navigator-removebg-preview.png",
            price_per_hour: 120,
            available: true,
            passengers: 7,
            bags: 6
        },
        {
            id: 'static-5',
            category: "FULL SIZE SUV",
            image: "/replace img/2_FULL_SIZE_SUV__Chevrolet_Suburban-removebg-preview.png",
            price_per_hour: 110,
            price: "$110 / Hour",
            available: true,
            passengers: 7,
            bags: 6
        },
        {
            id: 'static-6',
            category: "STRETCH LIMO",
            models: "Lincoln Limousine or equivalent",
            price: "Call For Price",
            isStarting: false,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
            price_per_hour: 250,
            available: true,
            passengers: 10,
            bags: 4
        },
        {
            id: 'static-7',
            category: "SHUTTLE SPRINTER",
            models: "Mercedes Sprinter Van",
            price: "Call For Price",
            isStarting: false,
            image: "/replace img/14_pax_luxury_sprinter.webp",
            price_per_hour: 180,
            available: true,
            passengers: 14,
            bags: 14
        }
    ];

    const [vehicles, setVehicles] = useState<any[]>(staticVehicles);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const localData = localStorage.getItem('mock_vehicles');
                const parsedLocal = localData ? JSON.parse(localData) : [];

                // Add price and isStarting helper for custom vehicles if missing
                const formattedLocal = parsedLocal.map((v: any) => ({
                    ...v,
                    price: v.price || (v.price_per_hour ? `$${v.price_per_hour} / Hour` : "Call For Price"),
                    isStarting: v.isStarting !== undefined ? v.isStarting : !!v.price_per_hour
                }));

                // Start with static, then add unique local ones
                const merged = [...staticVehicles];
                formattedLocal.forEach((v: any) => {
                    if (!merged.find(mv => mv.id === v.id || mv.models === v.models)) {
                        merged.push(v);
                    }
                });

                setVehicles(merged);
            } catch (err) {
                console.error("Fleet sync error:", err);
            }
        };

        fetchAll();
    }, []);

    return (
        <section className="bg-white py-8 md:py-12">
            <div className="container-custom px-4">
                <div className="max-w-5xl mx-auto space-y-3">
                    {vehicles.map((car, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row lg:flex-row items-center border border-black/20 p-3 md:p-2 lg:p-2 lg:pl-4 lg:pr-4 rounded-[4px] bg-white transition-shadow hover:shadow-md h-[420px] md:h-[135px] lg:h-[165px]"
                        >
                            {/* Vehicle Image (Top on mobile, Left on desktop) - approx 40% height on mobile */}
                            <div className="w-full md:w-[150px] lg:w-[240px] h-[150px] md:h-auto lg:h-auto flex-shrink-0 flex items-center justify-center p-2 mb-2 md:mb-0 lg:mb-0">
                                <Image
                                    src={car.image || "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"}
                                    alt={`${car.category} - ${car.models} | Bayou Black Cars Luxury Fleet`}
                                    width={240}
                                    height={120}
                                    className="object-contain drop-shadow-md mix-blend-multiply w-auto h-full md:w-full md:h-auto lg:w-full lg:h-auto"
                                />
                            </div>

                            {/* Vehicle Details (Center) - approx 60% with pricing on mobile */}
                            <div className="flex-1 md:pl-2 lg:pl-4 flex flex-col items-center md:items-start lg:items-start text-center md:text-left lg:text-left justify-center w-full">
                                <h3 className="text-[24px] md:text-[20px] lg:text-[32px] font-bold text-black font-taviraj leading-tight md:whitespace-nowrap lg:whitespace-nowrap">
                                    {car.category}
                                </h3>
                                {/* Gold Rating Stars */}
                                <div className="flex items-center gap-1 mt-1 mb-2 md:mb-1 lg:mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill="var(--color-gold)" className="text-gold w-4 md:w-[14px] lg:w-[18px] h-4 md:h-[14px] lg:h-[18px]" strokeWidth={0} />
                                    ))}
                                </div>
                                <p className="text-gray-800 text-[18px] md:text-[14px] lg:text-[22px] font-poppins font-medium leading-tight mb-4 md:mb-0 lg:mb-0 md:whitespace-nowrap lg:whitespace-nowrap">
                                    {car.models}
                                </p>
                            </div>

                            {/* Pricing Details (Right) */}
                            <div className="mt-2 md:mt-0 lg:mt-0 md:pl-2 lg:pl-8 text-center md:text-right lg:text-right min-w-[200px] flex flex-col justify-center items-center md:items-end lg:items-end gap-2 md:gap-2 lg:gap-4 w-full">
                                <div>
                                    {car.isStarting ? (
                                        <>
                                            <span className="text-black text-[16px] md:text-[14px] lg:text-[20px] font-medium font-poppins block leading-none">
                                                From
                                            </span>
                                            <h4 className="text-[24px] md:text-[20px] lg:text-[32px] font-bold text-black font-taviraj mt-1">
                                                {car.price}
                                            </h4>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-black text-[16px] md:text-[14px] lg:text-[20px] font-medium font-poppins block leading-none">
                                                Call
                                            </span>
                                            <h4 className="text-[24px] md:text-[20px] lg:text-[32px] font-bold text-black font-taviraj mt-1 whitespace-nowrap">
                                                For Price
                                            </h4>
                                        </>
                                    )}
                                </div>
                                <a
                                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-navy-primary hover:bg-gold transition-all shadow-lg hover:shadow-xl rounded-xl px-6 py-3 md:px-4 md:py-2 lg:px-10 lg:py-4 font-bold text-pure-white tracking-widest text-[12px] md:text-[11px] lg:text-[14px] flex items-center gap-2 uppercase"
                                >
                                    BOOK NOW <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VehicleFleet;
