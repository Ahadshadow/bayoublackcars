import React from 'react';
import Image from 'next/image';
import { Users, Briefcase } from 'lucide-react';

const serviceClasses = [
    {
        name: "Business Class",
        subtitle: "Sedan",
        passengers: 3,
        luggage: 2,
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        name: "Business SUV",
        subtitle: "SUV",
        passengers: 6,
        luggage: 6,
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Premium Suv.png"
    },
    {
        name: "First Class",
        subtitle: "Sedan",
        passengers: 3,
        luggage: 2,
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/First class.png"
    },
    {
        name: "Electric Class",
        subtitle: "Tesla Model X",
        passengers: 3,
        luggage: 2,
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        name: "Business Van",
        subtitle: "Sprinter",
        passengers: 14,
        luggage: 14,
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
    }
];

const ServiceClasses = () => {
    return (
        <section className="bg-white py-12 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-10">
                    <h2 className="text-[32px] md:text-[42px] font-bold text-navy-primary font-taviraj leading-tight uppercase tracking-tight">
                        Discover our service classes
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-3"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {serviceClasses.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center p-5">
                            <div className="relative w-full h-[140px] mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="space-y-1 mb-4 flex-grow">
                                <h3 className="text-navy-primary text-[20px] font-bold font-taviraj leading-tight uppercase">
                                    {item.name}
                                </h3>
                                <p className="text-gold text-[13px] font-medium tracking-widest uppercase italic">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-6 mb-6 w-full py-3 border-y border-gray-50">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users size={18} className="text-navy-primary/60" />
                                    <span className="text-[14px] font-semibold">{item.passengers}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Briefcase size={18} className="text-navy-primary/60" />
                                    <span className="text-[14px] font-semibold">{item.luggage}</span>
                                </div>
                            </div>

                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-navy-primary text-pure-white py-2.5 rounded-lg font-bold text-[12px] tracking-widest hover:bg-gold hover:text-navy-primary transition-all uppercase shadow-md active:scale-95"
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

export default ServiceClasses;
