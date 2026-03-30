import React from 'react';
import Image from 'next/image';
import { Users, Briefcase, ShoppingBag } from 'lucide-react';

interface FleetItem {
    name: string;
    subtitle: string;
    passengers: string;
    largeBags: string;
    smallBags: string;
    image: string;
}

interface AirportFleetProps {
    fleet: FleetItem[];
}

const AirportFleet: React.FC<AirportFleetProps> = ({ fleet }) => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom px-4">
                {/* Header is now managed by the parent Template for better flexibility */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fleet.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-dashed border-navy-primary/30 p-6 flex flex-col items-center text-center group hover:border-gold transition-all duration-500"
                        >
                            <div className="relative w-full h-[140px] mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="mb-6 flex-grow">
                                <h4 className="text-navy-primary text-[18px] font-bold font-taviraj uppercase mb-1">{item.name}</h4>
                                <p className="text-gray-600 text-[13px] leading-tight">{item.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-2 w-full mb-8">
                                <div className="flex flex-col items-center gap-1 border border-gold/30 rounded-lg py-2 bg-white group-hover:bg-gold/5 transition-colors">
                                    <Users size={20} className="text-[#cfa24b]" />
                                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-tighter">passengers</span>
                                    <span className="text-[14px] font-black text-navy-primary">{item.passengers}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 border border-gold/30 rounded-lg py-2 bg-white group-hover:bg-gold/5 transition-colors">
                                    <Briefcase size={20} className="text-[#cfa24b]" />
                                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-tighter leading-tight">large<br />bags</span>
                                    <span className="text-[14px] font-black text-navy-primary">{item.largeBags}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 border border-gold/30 rounded-lg py-2 bg-white group-hover:bg-gold/5 transition-colors">
                                    <ShoppingBag size={20} className="text-[#cfa24b]" />
                                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-tighter leading-tight">small<br />bags</span>
                                    <span className="text-[14px] font-black text-navy-primary">{item.smallBags}</span>
                                </div>
                            </div>

                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-navy-primary text-white py-2.5 font-bold text-[13px] uppercase tracking-widest hover:bg-gold transition-all"
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

export default AirportFleet;
