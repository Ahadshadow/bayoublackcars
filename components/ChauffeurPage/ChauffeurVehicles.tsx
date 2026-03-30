import React from 'react';
import Image from 'next/image';
import { Users, Briefcase, Snowflake, MonitorPlay, Wine, SplitSquareHorizontal } from 'lucide-react';

const vehicles = [
    {
        name: "Executive Luxury Sedan",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        description: "Sophisticated and discrete transport for individual city excursions and landmarks tours.",
        capacity: "Up to 3",
        luggage: "2-3",
        interior: "Leather",
        ac: "Dual-Zone",
        window: "Tinted",
        water: "Provided",
        wifi: "Yes",
        childSeat: "Upon Request"
    },
    {
        name: "Premium Executive SUV",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        description: "Luxurious and spacious enough for family groups and high-profile ensemble movement.",
        capacity: "Up to 6",
        luggage: "4-5",
        interior: "Leather",
        ac: "Dual-Zone",
        window: "Tinted",
        water: "Provided",
        wifi: "Yes",
        childSeat: "Upon Request"
    },
    {
        name: "Elite Milestone Sprinter",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        description: "High-capacity luxury for large groups and high-energy coordinated travel.",
        capacity: "Up to 14",
        luggage: "Large area",
        interior: "Leather",
        ac: "Premium",
        window: "Tinted",
        water: "Provided",
        wifi: "Yes",
        childSeat: "Upon Request"
    },
    {
        name: "Signature Stretch Limousine",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        description: "The ultimate choice for a grand arrival and red-carpet ensemble tours.",
        capacity: "Up to 8-10",
        luggage: "Limited",
        interior: "Leather",
        ac: "Bar",
        window: "Tinted",
        tv: "TV",
        water: "Provided",
        childSeat: "Upon Request"
    }
];

const ChauffeurVehicles = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                {/* Header text */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        The Executive Collection
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Bayou Black Cars specializes in a comprehensive range of elite passenger logistics, including corporate travel, private events, and bespoke regional tours. We provide a first-class alternative for travelers who demand opulent vehicles, skilled chauffeurs, and transparent, professional coordination. Experience the tranquility of a service that anticipates your every requirement. Our curated fleet includes:
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {vehicles.map((vehicle, index) => (
                        <div key={index} className="border border-luxury-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full group p-6">

                            {/* Image Header */}
                            <div className="relative h-32 w-full mb-4 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Name & Desc */}
                            <h3 className="text-xl font-bold font-taviraj text-navy-primary mb-2 line-clamp-1">{vehicle.name}</h3>
                            <p className="text-luxury-text-muted text-[11px] mb-6 flex-grow leading-relaxed min-h-[40px] italic">
                                {vehicle.description}
                            </p>

                            {/* Specs 2-Column List */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[11px] text-navy-primary font-medium mb-8">
                                <div className="flex items-center gap-2">
                                    <Users size={12} className="text-gold" />
                                    <span>{vehicle.capacity}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase size={12} className="text-gold" />
                                    <span>{vehicle.luggage}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <SplitSquareHorizontal size={12} className="text-gold" />
                                    <span>{vehicle.window}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {vehicle.tv ? <MonitorPlay size={12} className="text-gold" /> : <Snowflake size={12} className="text-gold" />}
                                    <span>{vehicle.tv ? vehicle.tv : vehicle.ac}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Wine size={12} className="text-gold" />
                                    <span>{vehicle.interior}</span>
                                </div>
                                <div className="flex items-center gap-2 text-luxury-text-muted italic">
                                    <span className="text-gold text-xs leading-none">•</span>
                                    <span>{vehicle.childSeat}</span>
                                </div>
                                <div className="flex items-center gap-2 text-luxury-text-muted italic">
                                    <span className="text-gold text-xs leading-none">•</span>
                                    <span>{vehicle.water}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="mt-auto flex justify-center">
                                <a
                                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-navy-primary text-pure-white px-8 py-2.5 rounded-lg text-xs font-bold uppercase transition-colors hover:bg-gold w-fit"
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

export default ChauffeurVehicles;
