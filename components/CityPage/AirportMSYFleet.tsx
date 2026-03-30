import React from 'react';
import Image from 'next/image';
import { Users, Briefcase } from 'lucide-react';

const fleetVehicles = [
    {
        name: 'Luxury Sedans',
        image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png',
        description: 'Ideal for solo travelers or corporate travel, offering clean, quiet comfort.',
        passengers: '3',
        bags: '2-3',
    },
    {
        name: 'Premium SUVs',
        image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png',
        description: 'Perfect for families or small groups with plenty of luggage space.',
        passengers: '6',
        bags: '4-5',
    },
    {
        name: 'Sprinter Vans',
        image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png',
        description: 'Great for group airport transfers, providing roomy and relaxing interiors.',
        passengers: '14',
        bags: 'Large Area',
    }
];

interface AirportMSYFleetProps {
    cityName: string;
    title?: string;
    isAirport?: boolean;
}

const AirportMSYFleet: React.FC<AirportMSYFleetProps> = ({ cityName, title, isAirport = true }) => {
    return (
        <section className="bg-white py-20 font-poppins">
            <div className="container-custom px-4 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[35%] space-y-8">
                        <div className="space-y-4">
                            <span className="text-gold font-bold text-sm uppercase tracking-widest block">Our Fleet</span>
                            <h2 className="text-navy-primary text-2xl md:text-[34px] font-bold font-taviraj leading-[1.2]">
                                {title || `Luxury Vehicles for ${cityName} Airport Limo Service`}
                            </h2>
                        </div>

                        <p className="text-luxury-text-muted text-[14px] md:text-[15px] leading-6 opacity-90">
                            Our {cityName}{isAirport ? ' Airport' : ''} limo service features executive sedans, luxury black SUVs, and spacious Sprinter vans—maintained in top condition for comfort, safety, and style. Whether it's an early morning departure, a late-night international arrival, or group travel, your professional <span className="text-gold font-bold underline cursor-pointer hover:text-navy-primary transition-colors">chauffeur services</span> will track your flight, meet you at the correct terminal, and provide a ride perfectly timed to your schedule.
                        </p>

                        <a
                            href="/fleet"
                            className="inline-flex items-center justify-center bg-navy-primary text-white hover:bg-gold px-10 py-3.5 rounded-md font-bold text-[13px] uppercase tracking-widest transition-all shadow-lg border border-white/10"
                        >
                            View All Fleet
                        </a>
                    </div>

                    {/* Right Side: Vehicle Cards */}
                    <div className="w-full lg:w-[65%]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {fleetVehicles.map((vehicle, idx) => (
                                <div key={idx} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                                    {/* Image Wrapper */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            fill
                                            className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className="p-6 flex flex-col flex-grow items-center text-center space-y-5">
                                        <h3 className="text-navy-primary text-2xl font-bold font-taviraj">
                                            {vehicle.name}
                                        </h3>

                                        <p className="text-gray-600 text-[13px] leading-relaxed line-clamp-2 h-10">
                                            {vehicle.description}
                                        </p>

                                        {/* Specs */}
                                        <div className="flex items-center justify-center gap-6 py-3 border-t border-b border-luxury-border/30 w-full">
                                            <div className="flex items-center gap-2 text-luxury-text-muted font-bold">
                                                <Users size={16} className="text-gold" />
                                                <span className="text-xs">{vehicle.passengers}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-luxury-text-muted font-bold">
                                                <Briefcase size={16} className="text-gold" />
                                                <span className="text-xs">{vehicle.bags}</span>
                                            </div>
                                        </div>

                                        <a
                                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-auto bg-navy-primary text-white px-8 py-3 rounded font-bold text-xs hover:bg-gold transition-all w-full tracking-widest uppercase shadow-lg"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirportMSYFleet;
