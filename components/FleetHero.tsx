"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabaseClient } from '@/lib/supabaseClient';

const FleetHero = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const fallbacks = {
        description: `Bayou Black Cars provides elite ground transportation designed for absolute reliability and comfort. From seamless airport transfers and executive corporate travel to custom point-to-point journeys, our meticulously maintained luxury fleet guarantees a superior experience. Committing to transparent rates and highly professional chauffeurs, we deliver uncompromising service for both local residents and visiting professionals.`,
        categories: [
            { name: "Luxury Sedans", image: "/replace img/11 Luxury Sedans.png" },
            { name: "Premium SUVs", image: "/replace img/10 Premium SUVs.jpeg" },
            { name: "Limousines", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png" },
            { name: "Sprinter Van", image: "/replace img/14_pax_luxury_sprinter.webp" },
            { name: "Party Bus", image: "/replace img/8 PARTY BUS.png" },
            { name: "Motor Coach", image: "/replace img/7 MOTOR COACH.png" }
        ]
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = supabaseClient;
                if (!client) {
                    console.warn("Supabase client not initialized. Using fallback data.");
                    setCategories(fallbacks.categories);
                    setDescription(fallbacks.description);
                    return;
                }

                const [catRes, contentRes] = await Promise.all([
                    client.from('fleet_categories').select('*').order('created_at', { ascending: true }),
                    client.from('page_content').select('*').eq('key', 'fleet_hero_description').single()
                ]);

                if (catRes.data && catRes.data.length > 0) {
                    // Update the image paths to the transparent ones if they don't have them
                    const updatedCats = catRes.data.map((cat: any) => {
                        const fallback = fallbacks.categories.find(f => f.name === cat.name || cat.name.includes(f.name));
                        return {
                            ...cat,
                            image: fallback ? fallback.image : cat.image
                        };
                    });
                    setCategories(updatedCats);
                } else {
                    setCategories(fallbacks.categories);
                }

                if (contentRes.data) {
                    setDescription(contentRes.data.value);
                } else {
                    setDescription(fallbacks.description);
                }
            } catch (error) {
                console.error("Error fetching hero data:", error);
                setCategories(fallbacks.categories);
                setDescription(fallbacks.description);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="bg-white pt-5 pb-16">
            <div className="container-custom">
                {/* Hero Image Section - The three cars image */}
                <div className="relative w-full aspect-[21/9] max-w-4xl mx-auto">
                    <Image
                        src="/HERO section/fleet/fleet hero .png"
                        alt="Bayou Black Cars Fleets"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                    />
                </div>

                {/* Hero Main Content */}
                <div className="max-w-5xl mx-auto text-center mb-16 px-4">
                    <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed font-poppins max-w-4xl mx-auto">
                        {description || fallbacks.description}
                    </p>
                </div>

                {/* Featured Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <a
                            key={index}
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative rounded-[20px] overflow-hidden aspect-[1.1] group cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl border border-gray-100"
                        >
                            {/* Premium Background */}
                            <div className="absolute inset-0 bg-navy-primary group-hover:bg-[#1a2333] transition-colors duration-500" />
                            <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 bg-[url('/stats_bg.png')] bg-cover" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                            {/* Vehicle Image */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 pb-16">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={cat.image || "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"}
                                        alt={`Luxury ${cat.name} Fleet Category - Bayou Black Cars Premium Transport`}
                                        fill
                                        className="object-contain mix-blend-lighten transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Content Overlay - Text on Image */}
                            <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center">
                                <h3 className="text-white text-[24px] md:text-[30px] font-bold font-taviraj text-center tracking-tight transition-transform duration-500 group-hover:scale-105">
                                    {cat.name}
                                </h3>
                                <div className="w-16 h-0.5 bg-gold mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Book Now</span>
                                </div>
                            </div>
                        </a>
                    ))}

                    {isLoading && categories.length === 0 && (
                        [...Array(6)].map((_, i) => (
                            <div key={i} className="bg-gray-100 animate-pulse rounded-xl aspect-[4/3]"></div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default FleetHero;
