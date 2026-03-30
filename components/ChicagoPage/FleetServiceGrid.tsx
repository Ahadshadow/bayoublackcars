import React from 'react';
import Image from 'next/image';

const fleetClasses = [
    {
        title: "luxury Black Car",
        description: "Luxury black car for smooth, private, and comfortable travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Limousine",
        description: "Luxury limousine for stylish, comfortable, and private travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Sprinter Van",
        description: "Luxury Sprinter van for spacious, comfortable, and private group travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
    },
    {
        title: "Party Bus",
        description: "Luxury party bus for fun, spacious, and unforgettable group rides.",
        image: "/background remove/part_bus-removebg-preview.png"
    },
    {
        title: "Luxury SUV",
        description: "Luxury SUV for smooth, private, and comfortable travel.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    }
];

const FleetServiceGrid = () => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-navy-primary font-taviraj tracking-tight">
                        Discover our service classes
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fleetClasses.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] bg-navy-primary flex items-center justify-center overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Bottom weighted overlay for text readability if needed */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow items-start text-left">
                                <h3 className="text-black text-[24px] font-bold font-taviraj mb-3 capitalize">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <a
                                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-navy-primary text-pure-white px-8 py-2.5 rounded-md font-bold text-[14px] transition-all hover:bg-gold hover:shadow-lg active:scale-95 uppercase"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetServiceGrid;
