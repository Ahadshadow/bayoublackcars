"use client";

import React, { useState, useEffect } from 'react';
import { Settings, Clock } from 'lucide-react';
import { supabaseClient } from '@/lib/supabaseClient';

const FleetStats = () => {
    const [stats, setStats] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fallbacks = [
        { label: "Vehicles Available", value: "20+" },
        { label: "Successful Journeys", value: "1,000+" },
        { label: "Reviews & Ratings", value: "500+" },
        { label: "Years of Excellence", value: "10+" }
    ];

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const client = supabaseClient;
                if (!client) {
                    console.warn("Supabase client not initialized. Using fallback data.");
                    setStats(fallbacks);
                    return;
                }

                const { data, error } = await client
                    .from('fleet_stats')
                    .select('*')
                    .order('created_at', { ascending: true });

                if (data && data.length > 0) {
                    setStats(data);
                } else {
                    setStats(fallbacks);
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
                setStats(fallbacks);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <section className="bg-white py-12">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white px-8 py-4 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center gap-6 border border-gray-100 transition-transform hover:-translate-y-1 duration-300 min-h-[110px]"
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                <div className="p-3 bg-gold/10 rounded-2xl">
                                    <Clock className="text-gold" size={24} />
                                </div>
                                <Clock className="text-gold w-5 h-5 absolute z-10" strokeWidth={3} />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h4 className="text-[36px] md:text-[42px] font-bold text-pure-black leading-none mb-2 font-taviraj">
                                    {stat.value}
                                </h4>
                                <p className="text-gold text-[16px] font-medium leading-none font-taviraj whitespace-nowrap">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}

                    {isLoading && stats.length === 0 && (
                        [...Array(4)].map((_, i) => (
                            <div key={i} className="bg-gray-50 animate-pulse rounded-[24px] h-[110px] border border-gray-100"></div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default FleetStats;
