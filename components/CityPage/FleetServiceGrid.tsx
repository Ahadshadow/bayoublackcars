import React from 'react';
import Image from 'next/image';

const fleetItems = [
    {
        name: "Luxury Black Car",
        description: "Luxury black car for smooth, private, and comfortable travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        name: "Luxury SUV",
        description: "Luxury SUV for spacious, comfortable, and private travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        name: "Stretch Limousine",
        description: "Luxury limousine for stylish, comfortable, and private travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        name: "Party Bus",
        description: "Luxury party bus for fun, spacious, and unforgettable group rides.",
        image: "/background remove/part_bus-removebg-preview.png"
    }
];

const FleetServiceGrid = () => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[45px] font-bold text-navy-primary font-taviraj leading-tight">
                        Discover our service classes
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fleetItems.map((item, index) => (
                        <a
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="relative bg-navy-primary rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group aspect-[4/5] flex flex-col border border-white/5"
                        >
                            {/* Subtle Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.05] bg-[url('/stats_bg.png')] bg-cover" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                            {/* Image Section - Centered and Large */}
                            <div className="relative flex-grow flex items-center justify-center p-6 pb-24">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-4 mix-blend-lighten transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                                />
                            </div>

                            {/* Content Overlays */}
                            <div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col overflow-hidden">
                                <div className="transform translate-y-[30%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-white text-[22px] font-bold font-taviraj tracking-tight leading-tight group-hover:text-gold transition-colors duration-300 mb-2 group-hover:mb-3">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-300 text-[13px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 mb-3">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center text-gold font-bold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span>Book Now</span>
                                        <div className="ml-2 w-8 h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetServiceGrid;
