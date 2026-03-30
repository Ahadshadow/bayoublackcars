"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabaseClient } from '@/lib/supabaseClient';
import { Star, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const FleetService = () => {
    const [fleetItems, setFleetItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const staticBackup = [
        { title: "Birthday Parties", image: "/replace img/26 Birthday Parties.jpeg", stars: 5, price: "Call For Price" },
        { title: "Sporting Events", image: "/replace img/25 Sporting Events.jpeg", stars: 5, price: "Call For Price" },
        { title: "Wedding Shuttles", image: "/replace img/24 Wedding Shuttles.jpeg", stars: 5, price: "Call For Price" },
        { title: "Field Trips", image: "/replace img/23 Field Trips.jpeg", stars: 5, price: "Call For Price" },
        { title: "Company Events", image: "/replace img/22 Company Events.jpeg", stars: 5, price: "Call For Price" },
        { title: "Employee Shuttles", image: "/replace img/21 Employee Shuttles.jpeg", stars: 5, price: "Call For Price" },
        { title: "Prom & Homecoming", image: "/replace img/20 Prom  Homecoming.jpeg", stars: 5, price: "Call For Price" },
        { title: "Conventions & Trade Shows", image: "/replace img/19 Conventions  Trade Shows.jpg", stars: 5, price: "Call For Price" }
    ];

    const [pageContent, setPageContent] = useState<Record<string, string>>({});

    const fallbacks = {
        title: "Premium Luxury Fleet Service",
        intro1: "Bayou Black Cars is a premier provider of high-end transportation, dedicated to delivering precision, style, and an unforgettable travel experience for every client.",
        intro2: "Our fleet consists of the most modern luxury vehicles, meticulously maintained to ensure peak performance and comfort. Accompanied by our expertly trained chauffeurs, we guarantee a safe and sophisticated journey every time."
    };

    useEffect(() => {
        const fetchContent = async () => {
            try {
                if (!supabaseClient) {
                    setPageContent({}); // Ensure it uses fallbacks
                    return;
                }

                const { data } = await supabaseClient
                    .from('page_content')
                    .select('*')
                    .or('key.eq.fleet_main_title,key.eq.fleet_intro_1,key.eq.fleet_intro_2');

                if (data) {
                    const map: Record<string, string> = {};
                    data.forEach(item => map[item.key] = item.value);
                    setPageContent(map);
                }
            } catch (err) {
                console.error("Error fetching page content:", err);
            }
        };
        fetchContent();
    }, []);

    useEffect(() => {
        const fetchFleet = async () => {
            setIsLoading(true);
            try {
                const client = supabaseClient;
                if (!client) {
                    console.warn("Supabase client not initialized. Using backup fleet data.");
                    setFleetItems(staticBackup);
                    return;
                }

                const { data, error } = await client
                    .from('fleet_services')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    setFleetItems(data);
                } else {
                    setFleetItems(staticBackup);
                }
            } catch (err) {
                console.error("Fleet fetch error:", err);
                const localData = localStorage.getItem('fleet_services');
                setFleetItems(localData ? JSON.parse(localData) : staticBackup);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFleet();
    }, []);

    // Pagination Logic
    const totalPages = Math.ceil(fleetItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fleetItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Better UX: scroll only the cards container into view if needed
        const element = document.getElementById('fleet-grid-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-luxury-bg py-24 scroll-mt-20" id="fleet-grid-section">
            <div className="container-custom">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-[32px] md:text-[42px] font-bold text-luxury-text mb-3 leading-tight font-taviraj uppercase tracking-tighter">
                        {pageContent.fleet_main_title || fallbacks.title}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
                    <div className="space-y-6 text-luxury-text-muted text-[18px] leading-relaxed px-4 md:px-0 font-poppins">
                        <p>
                            {pageContent.fleet_intro_1 || fallbacks.intro1}
                        </p>
                        <p>
                            {pageContent.fleet_intro_2 || fallbacks.intro2}
                        </p>
                    </div>
                </div>

                {/* Subheader for Cards */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-luxury-border/10 gap-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-[28px] font-bold text-luxury-text font-taviraj italic">Fleet Highlights</h3>
                        <p className="text-sm text-luxury-text-muted font-medium">Showing curated services for every travel need</p>
                    </div>
                    {/* Pagination Controls Top */}
                    {totalPages > 1 && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full border border-luxury-border hover:bg-gold hover:text-pure-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className="text-sm font-bold font-poppins text-luxury-text-muted/50">
                                Page <span className="text-luxury-text">{currentPage}</span> of {totalPages}
                            </span>
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full border border-luxury-border hover:bg-gold hover:text-pure-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Grid Section */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-4">
                        <Loader2 size={48} className="animate-spin text-gold" />
                        <p className="font-bold uppercase tracking-widest text-xs">Loading Fleet...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentItems.map((item, index) => (
                            <a
                                key={index}
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden rounded-[30px] aspect-[4/3] cursor-pointer shadow-md group block border border-gray-100"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.image || "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Overlay Gradient - Refined to use Gold on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/90 via-pure-black/30 to-transparent opacity-90 transition-all duration-500 group-hover:from-gold/80 group-hover:via-gold/40 group-hover:to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center overflow-hidden">
                                    <div className="transform translate-y-[40%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        {/* Stars (Extra context) */}
                                        <div className="flex items-center justify-center gap-0.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < (item.stars || 5) ? "white" : "none"} className="text-pure-white" />
                                            ))}
                                        </div>

                                        <h3 className="text-pure-white font-bold text-[20px] md:text-[22px] font-taviraj tracking-tight leading-tight mb-3 group-hover:mb-4 transition-all duration-500">
                                            {item.title}
                                        </h3>

                                        {/* Price Label */}
                                        <div className="bg-pure-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-pure-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="text-pure-white text-[11px] font-bold uppercase tracking-[0.1em]">
                                                {item.price || "Call For Price"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {/* Bottom Pagination */}
                {!isLoading && totalPages > 1 && (
                    <div className="mt-16 flex justify-center">
                        <div className="inline-flex items-center p-1 bg-luxury-card rounded-2xl border border-luxury-border shadow-sm">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-3 text-luxury-text disabled:text-luxury-text-muted/30 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="flex items-center px-4 gap-1">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => paginate(i + 1)}
                                        className={`w-10 h-10 rounded-xl font-bold font-poppins text-sm transition-all ${currentPage === i + 1
                                            ? 'bg-pure-black text-pure-white shadow-lg'
                                            : 'text-luxury-text-muted hover:text-luxury-text hover:bg-luxury-bg'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-3 text-luxury-text disabled:text-luxury-text-muted/30 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FleetService;
