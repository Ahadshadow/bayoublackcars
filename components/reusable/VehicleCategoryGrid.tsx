"use client";

import React from 'react';
import CategoryCard from './CategoryCard';

interface SliderItem {
    name: string;
    image: string;
    href?: string;
}

const defaultItems: SliderItem[] = [
    { name: "Sedans", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png", href: "https://customer.moovs.app/bayou-black-cars-llc/request/new" },
    { name: "SUVs", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png", href: "https://customer.moovs.app/bayou-black-cars-llc/request/new" },
    { name: "Limousines", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png", href: "https://customer.moovs.app/bayou-black-cars-llc/request/new" },
    { name: "Sprinter Van", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png", href: "https://customer.moovs.app/bayou-black-cars-llc/request/new" },
    { name: "Party Bus", image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png", href: "https://customer.moovs.app/bayou-black-cars-llc/request/new" }
];

const VehicleCategoryGrid = () => {
    return (
        <section className="bg-white py-12 md:py-16 font-poppins overflow-hidden">
            <div className="container-custom">
                {/* Static Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                    {defaultItems.map((item, index) => (
                        <div key={index} className="w-full">
                            <CategoryCard
                                name={item.name}
                                image={item.image}
                                href={item.href}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VehicleCategoryGrid;
