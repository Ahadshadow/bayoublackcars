"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Users, Briefcase, Star, CheckCircle2, Shield, Wifi,
    Coffee, Music, Zap, PhoneCall, Search, SlidersHorizontal,
    X, ChevronDown, Check, Calendar, Fuel, Gauge, Award,
    LifeBuoy, ShieldCheck, Heart
} from 'lucide-react';
import { supabaseClient } from '@/lib/supabaseClient';
import { Vehicle } from '@/lib/types';

interface CarListingSectionProps {
    initialVehicles?: Vehicle[];
}

const CarListingSection = ({ initialVehicles = [] }: CarListingSectionProps) => {
    // Data State
    const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
    const [loading, setLoading] = useState(initialVehicles.length === 0);

    // Filter State
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [priceRange, setPriceRange] = useState(500);
    const [transmission, setTransmission] = useState("All");
    const [fuelType, setFuelType] = useState("All");

    const [categories, setCategories] = useState(["All", "SUV", "Luxury", "Sedan", "Sports"]);
    const transmissions = ["All", "Automatic", "Manual"];
    const fuelTypes = ["All", "Petrol", "Diesel", "Electric"];

    // Fetch realization
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const client = supabaseClient;

                // Fetch Categories first
                if (client) {
                    const { data: catData, error: catError } = await client
                        .from('vehicle_categories')
                        .select('name')
                        .order('name');

                    if (!catError && catData) {
                        const dynamicCats = ["All", ...catData.map((c: { name: string }) => c.name)];
                        setCategories(dynamicCats);
                    }
                }

                // Fetch Vehicles
                if (initialVehicles && initialVehicles.length > 0) {
                    setVehicles(initialVehicles);
                    setLoading(false);
                    return;
                }

                // Check local storage for mock vehicles first
                const localData = localStorage.getItem('mock_vehicles');
                let mergedVehicles: Vehicle[] = [];

                if (!client) {
                    if (localData) {
                        mergedVehicles = JSON.parse(localData) as Vehicle[];
                        setVehicles(mergedVehicles);
                    }
                    setLoading(false);
                    return;
                }

                const { data, error } = await client
                    .from('vehicles')
                    .select('*')
                    .eq('available', true)
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data) {
                    // Merge Supabase data with local data, removing duplicates by ID
                    const supabaseMap = new Map<string, Vehicle>(data.map((v: Vehicle) => [v.id, v]));
                    const localList: Vehicle[] = localData ? JSON.parse(localData) as Vehicle[] : [];

                    localList.forEach((v: Vehicle) => {
                        if (!supabaseMap.has(v.id)) {
                            supabaseMap.set(v.id, v);
                        }
                    });

                    mergedVehicles = Array.from(supabaseMap.values());
                    setVehicles(mergedVehicles);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Last resort fallback
                const localData = localStorage.getItem('mock_vehicles');
                if (localData) setVehicles(JSON.parse(localData));

                // Fallback for categories
                const localCats = localStorage.getItem('vehicle_categories');
                if (localCats) setCategories(["All", ...JSON.parse(localCats).map((c: any) => c.name)]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [initialVehicles]);

    // Filtering Logic
    const filteredVehicles = useMemo(() => {
        return vehicles.filter(car => {
            const matchesSearch = car.models.toLowerCase().includes(searchQuery.toLowerCase());

            // Check if car category matches activeCategory (or is grouped by it)
            const matchesCategory = activeCategory === "All" ||
                car.category.toUpperCase() === activeCategory.toUpperCase() ||
                car.category.toUpperCase().includes(activeCategory.toUpperCase());

            const matchesPrice = car.price_per_hour <= priceRange;
            const matchesTransmission = transmission === "All" || car.transmission === transmission;
            const matchesFuel = fuelType === "All" || car.fuel === fuelType;

            return matchesSearch && matchesCategory && matchesPrice && matchesTransmission && matchesFuel;
        });
    }, [searchQuery, activeCategory, priceRange, transmission, fuelType, vehicles]);

    const resetFilters = () => {
        setSearchQuery("");
        setActiveCategory("All");
        setPriceRange(500);
        setTransmission("All");
        setFuelType("All");
    };

    return (
        <div className="bg-white text-navy-primary font-poppins pb-24">
            {/* 1️⃣ Hero Section */}
            <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
                        alt=""
                        fill
                        className="object-contain object-center blur-[1px] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white"></div>
                </div>

                <div className="container-custom relative z-10 text-center px-4 flex flex-col items-center">
                    <div className="mb-6 w-full max-w-[850px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Image
                            src="/images/fleet-group.webp"
                            alt="Our Luxury Fleet"
                            width={1024}
                            height={338}
                            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                            priority
                        />
                    </div>

                    <h1 className="text-[48px] md:text-[64px] font-bold mb-4 tracking-tight text-navy-primary leading-[1.1]">
                        Find Your <span className="text-gold">Perfect Ride</span>
                    </h1>
                    <p className="text-gray-600 text-[18px] md:text-[22px] max-w-2xl mx-auto font-light">
                        Premium cars for every journey. Experience the ultimate in luxury and comfort.
                    </p>
                </div>
            </section>

            {/* 2️⃣ Search & Filter */}
            <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 mb-12">
                <div className="container-custom px-4">
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-wrap lg:flex-nowrap items-center gap-6">
                        <div className="flex-1 min-w-[200px] relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-navy-primary transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search cars..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold transition-all text-sm text-navy-primary"
                            />
                        </div>

                        <div className="relative group">
                            <select
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                className="appearance-none bg-gold border border-gold rounded-xl py-3 pl-4 pr-10 focus:outline-none transition-all text-sm cursor-pointer min-w-[140px] text-pure-black font-bold"
                            >
                                {categories.map(cat => <option key={cat} value={cat} className="bg-white text-navy-primary">{cat} Category</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-pure-black pointer-events-none" size={16} />
                        </div>

                        <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                            <div className="flex justify-between text-[12px] text-gray-400 font-medium">
                                <span>Max Price</span>
                                <span className="text-gold font-bold">${priceRange} / hour</span>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="500"
                                step="10"
                                value={priceRange}
                                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                            />
                        </div>

                        <button
                            onClick={resetFilters}
                            className="bg-navy-primary border border-navy-primary text-pure-white px-6 py-3 rounded-xl transition-all text-sm flex items-center gap-2 hover:bg-gold hover:text-pure-black hover:border-gold"
                        >
                            <X size={16} /> Reset
                        </button>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Car Grid */}
            <section className="container-custom px-4">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {Array(8).fill(0).map((_, i) => (
                            <div key={i} className="bg-gray-50 rounded-[24px] h-[450px] animate-pulse"></div>
                        ))}
                    </div>
                ) : filteredVehicles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredVehicles.map((car) => (
                            <a
                                key={car.id}
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.01] flex flex-col h-full cursor-pointer"
                            >
                                <div className="relative h-[200px] bg-gray-50/50 flex items-center justify-center p-6 pb-2">
                                    <div className="relative w-full h-full transform transition-transform duration-700 group-hover:translate-y-[-5px]">
                                        <Image
                                            src={car.image || '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'}
                                            alt={car.models}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-gold text-pure-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] shadow-md">
                                            {car.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-0 flex flex-col flex-1">
                                    <div className="flex items-center justify-between py-2 mb-1 border-b border-gray-50 lg:gap-1">
                                        <div className="flex items-center gap-1.5">
                                            <Gauge size={14} className="text-gold" />
                                            <span className="text-[11px] text-gray-500 font-medium">{car.transmission}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Fuel size={14} className="text-gold" />
                                            <span className="text-[11px] text-gray-500 font-medium">{car.fuel}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users size={14} className="text-gold" />
                                            <span className="text-[11px] text-gray-500 font-medium">{car.passengers} Seats</span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <h3 className="text-[22px] font-bold text-navy-primary mb-0.5 font-taviraj leading-tight">
                                            {car.models}
                                        </h3>
                                        <p className="text-[13px] text-gray-400 line-clamp-2 font-light italic leading-snug">
                                            {car.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto mb-5 p-3 bg-gray-50/50 rounded-xl border border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Price Per Mile</span>
                                            <span className="text-[20px] font-bold text-luxury-red font-taviraj leading-none">${car.price_per_mile}</span>
                                        </div>
                                        <div className="w-[1px] h-8 bg-gray-200"></div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Price Per Hour</span>
                                            <span className="text-[20px] font-bold text-navy-primary font-taviraj leading-none">${car.price_per_hour}</span>
                                        </div>
                                    </div>

                                    <div
                                        className="w-full bg-navy-primary hover:bg-gold text-pure-white hover:text-pure-black py-3.5 rounded-xl text-[14px] font-bold text-center transition-all shadow-[0_4px_10px_rgba(14,39,72,0.15)] hover:shadow-[0_8px_20px_rgba(212,175,55,0.25)] flex items-center justify-center uppercase tracking-widest"
                                    >
                                        Book Now
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <X className="text-gray-300" size={40} />
                        </div>
                        <h3 className="text-[24px] font-bold mb-2 text-navy-primary">No Vehicles Found</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            We couldn't find any cars matching your current filters. Try adjusting your search criteria or reset all filters.
                        </p>
                        <button
                            onClick={resetFilters}
                            className="bg-gold text-pure-black px-8 py-3 rounded-xl font-bold transition-all hover:bg-navy-primary hover:text-pure-white"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </section>

            {/* 4️⃣ Trust Section */}
            <section className="container-custom mt-24 px-4">
                <div className="bg-gray-50 border border-gray-100 rounded-[40px] p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                <Users className="text-gold" size={28} />
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold mb-1 text-navy-primary">1000+ Happy Customers</h4>
                                <p className="text-gray-500 text-[14px] font-light">Trusted by thousands for airport transfers and corporate travel.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                <LifeBuoy className="text-gold" size={28} />
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold mb-1 text-navy-primary">24/7 Support</h4>
                                <p className="text-gray-500 text-[14px] font-light">Always here to assist with your bookings and inquiries.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                <ShieldCheck className="text-gold" size={28} />
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold mb-1 text-navy-primary">Fully Insured Cars</h4>
                                <p className="text-gray-500 text-[14px] font-light">Your safety is our priority with comprehensive insurance.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                <Award className="text-gold" size={28} />
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold mb-1 text-navy-primary">Best Price Guarantee</h4>
                                <p className="text-gray-500 text-[14px] font-light">Competitive rates without compromising on premium quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarListingSection;
