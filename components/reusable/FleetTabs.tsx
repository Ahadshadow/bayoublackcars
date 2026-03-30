"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

const FleetTabs = () => {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(0);
    const [dynamicImages, setDynamicImages] = useState<Record<string, string>>({});

    const categories = [
        {
            id: 'fleet_sedan',
            name: "Executive Sedans",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
            description: "The classic choice for executive travel, offering unmatched comfort, privacy, and seamless riding experience."
        },
        {
            id: 'fleet_suv_premium',
            name: "Premium SUVs",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
            description: "Premium level comfort and presence. Perfect for corporate travel or VIP transfers that require extra space."
        },
        {
            id: 'fleet_suv_luxury',
            name: "Luxury SUVs",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Premium Suv.png",
            description: "Elite level comfort and presence. Perfect for corporate travel or VIP transfers that require extra space and sophistication."
        },
        {
            id: 'fleet_sprinter',
            name: "Executive Sprinter",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png",
            description: "Ideal for executive teams and small group corporate travel, with ample standing room and luggage space."
        },
        {
            id: 'fleet_limo',
            name: "Limousine",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
            description: "The epitome of luxury and sophistication for your most important events, weddings, or red-carpet arrivals."
        },
        {
            id: 'fleet_bus',
            name: "Party Bus",
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Party Bus.png",
            description: "The ultimate group travel experience. Equipped with premium sound systems and luxury lighting for your celebration."
        }
    ];

    useEffect(() => {
        const fetchAssets = async () => {
            const assets = await getPageAssets(pathname);
            setDynamicImages(assets);
        };
        fetchAssets();
    }, [pathname]);

    return (
        <section className="bg-white py-24">
            <div className="container-custom px-4 text-center">
                <h2 className="text-[28px] md:text-[40px] font-bold text-navy-primary font-taviraj mb-6 uppercase">
                    OUR FLEET <span className="text-navy-primary font-normal">AT Bayou Black Cars</span>
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                <p className="text-gray-600 text-[14px] md:text-[15px] max-w-4xl mx-auto leading-relaxed text-center mb-10">
                    Our Fleet at Bayou Black Cars offers a premium selection of luxury vehicles, ensuring elegance, comfort, and sophistication for every journey.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-8 py-3 rounded-md font-bold text-[14px] border transition-all duration-300 ${activeTab === index
                                ? "bg-gold border-gold text-white shadow-md"
                                : "bg-white border-gray-200 text-navy-primary hover:border-gold hover:text-gold"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto animate-in fade-in duration-500 flex flex-col items-center">
                    <div className="relative w-full max-w-3xl aspect-[21/9] mb-8 group">
                        <Image
                            src={dynamicImages[categories[activeTab].id] || categories[activeTab].image || "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"}
                            alt={`${categories[activeTab].name} Luxury Fleet - Bayou Black Cars`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1000px"
                        />
                    </div>
                    <p className="text-gray-600 text-[15px] italic mb-10 max-w-4xl mx-auto leading-relaxed text-center">
                        {categories[activeTab].description}
                    </p>
                    <a
                        href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy-primary text-white px-10 py-3 rounded-md font-bold text-[15px] hover:bg-gold transition-colors shadow-lg"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FleetTabs;
