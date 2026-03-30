import React from 'react';
import Image from 'next/image';

const fleetVehicles = [
    {
        name: "Executive Gala Sedan",
        subtitle: "Sophisticated and discrete transport for individual or couple arrivals.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        specs: [
            { label: "Up to 3", icon: "👤" },
            { label: "2-3", icon: "💼" },
            { label: "Leather", icon: "🛋️" },
            { label: "Yes", icon: "📶" },
            { label: "Tinted", icon: "🕶️" },
            { label: "Dual-Zone", icon: "❄️" },
            { label: "Provided", icon: "💧" },
            { label: "Upon Request", icon: "🍼" },
        ]
    },
    {
        name: "Premium Ceremony SUV",
        subtitle: "Perfect for small friend groups seeking comfort and group presence.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        specs: [
            { label: "Up to 6", icon: "👤" },
            { label: "4-5", icon: "💼" },
            { label: "Leather", icon: "🛋️" },
            { label: "Yes", icon: "📶" },
            { label: "Tinted", icon: "🕶️" },
            { label: "Dual-Zone", icon: "❄️" },
            { label: "Provided", icon: "💧" },
            { label: "Upon Request", icon: "🍼" },
        ]
    },
    {
        name: "Elite Milestone Sprinter",
        subtitle: "High-capacity luxury for the entire prom crew to travel together.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        specs: [
            { label: "Up to 14", icon: "👤" },
            { label: "Large area", icon: "💼" },
            { label: "Leather", icon: "🛋️" },
            { label: "Yes", icon: "📶" },
            { label: "Tinted", icon: "🕶️" },
            { label: "Premium", icon: "❄️" },
            { label: "Provided", icon: "💧" },
            { label: "Upon Request", icon: "🍼" },
        ]
    },
    {
        name: "Traditional Stretch Limousine",
        subtitle: "The ultimate prom classic for an iconic and grand ensemble arrival.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        specs: [
            { label: "Up to 8-10", icon: "👤" },
            { label: "Limited", icon: "💼" },
            { label: "Leather", icon: "🛋️" },
            { label: "Bar", icon: "🍷" },
            { label: "Tinted", icon: "🕶️" },
            { label: "TV", icon: "📺" },
            { label: "Provided", icon: "💧" },
            { label: "Upon Request", icon: "🍼" },
        ]
    }
];

const PromLimoFleet = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Our Luxury Fleets
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-6xl mx-auto leading-relaxed">
                        Bayou Black Cars excels in offering diverse transportation services which include but not limited to: airport transfers, general pickup and drop off transportation, business travel and many more. Our luxurious vehicles, professional drivers, affordable rates, and simple booking system, make us a perfect choice for tourists. Get competent and dependable services that can cater to your unique needs, be it business travel solutions or a journey to or from the airport.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {fleetVehicles.map((vehicle, index) => (
                        <div key={index} className="border border-navy-primary/10 rounded-xl overflow-hidden p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="relative h-40 w-full mb-6">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary mb-2 uppercase">{vehicle.name}</h3>
                            <p className="text-[11px] text-luxury-text-muted mb-6 h-12">{vehicle.subtitle}</p>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-left mb-8 flex-grow">
                                {vehicle.specs.map((spec, sIndex) => (
                                    <div key={sIndex} className="flex items-center gap-2">
                                        <span className="text-[14px]">{spec.icon}</span>
                                        <span className="text-[10px] text-navy-primary/80 font-medium">{spec.label}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-navy-primary text-white py-2 rounded text-[12px] font-bold uppercase transition-colors hover:bg-gold"
                            >
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromLimoFleet;
