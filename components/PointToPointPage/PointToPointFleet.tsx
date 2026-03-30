import React from 'react';
import Image from 'next/image';

const fleetVehicles = [
    {
        name: "Executive Luxury Sedan",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        name: "Premium Executive SUV",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        name: "Professional Sprinter Van",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        name: "Signature Stretch Limo",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        name: "Elite Milestone Party Bus",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    }
];

const PointToPointFleet = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl text-center">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                    A Fleet Tailored to Every Occasion
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed mb-12">
                    Bayou specializes in a wide range of passenger transport services including school, corporate or special event travel. We are a great option for tourists because of our opulent cars, skilled drivers, clear pricing, and easy booking procedures. Enjoy hassle-free business travel or airport transfers with friendly and reliable drivers who understand and accommodate your specific requirements. Our exclusive list of vehicles include:
                </p>

                {/* 5-Column Grid on lg screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {fleetVehicles.map((vehicle, index) => (
                        <div key={index} className="border border-luxury-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-center p-6 group">

                            {/* Image Header */}
                            <div className="relative h-28 w-full mb-6 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary mb-6 w-full text-center border-b border-luxury-border/30 pb-4">{vehicle.name}</h3>

                            {/* Button */}
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-navy-primary text-pure-white px-6 py-2 rounded-lg text-xs font-bold uppercase transition-colors hover:bg-gold w-fit mt-auto"
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

export default PointToPointFleet;
