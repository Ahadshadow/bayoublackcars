import React from 'react';
import Image from 'next/image';
import { Plane, Bus, Car, Users, Timer, Info } from 'lucide-react';

interface ContentSection {
    title: string;
    paragraphs: string[];
    image: string;
    imageSide: 'left' | 'right';
    isGrid?: boolean;
}

interface AirportAlternatingSectionsProps {
    sections: ContentSection[];
}

const AirportAlternatingSections: React.FC<AirportAlternatingSectionsProps> = ({ sections }) => {
    return (
        <section className="bg-white py-12 font-poppins">
            <div className="container-custom px-4 space-y-24">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-12 ${section.imageSide === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            }`}
                    >
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-navy-primary text-[28px] md:text-[34px] font-bold font-taviraj leading-tight uppercase">
                                {section.title}
                            </h2>
                            <div className="space-y-4 text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
                                {section.paragraphs.map((p, pIndex) => (
                                    <p key={pIndex}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="w-full lg:w-1/2">
                            {section.isGrid ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { label: "Employ Shuttle", icon: <Bus className="text-gold" size={48} /> },
                                        { label: "Airport transfer", icon: <Plane className="text-gold" size={48} /> },
                                        { label: "Executive Sprinter", icon: <Users className="text-gold" size={48} /> },
                                        { label: "Charter Bus", icon: <Bus className="text-gold" size={48} /> },
                                        { label: "Luxury SUVs", icon: <Car className="text-gold" size={48} /> },
                                        { label: "Hourly Chauffeur", icon: <Timer className="text-gold" size={48} /> }
                                    ].map((item, i) => (
                                        <div key={i} className="relative bg-white border-t-2 border-b-2 border-gold/40 flex flex-col items-center justify-center p-10 group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 h-[220px]">
                                            <div className="mb-6">
                                                {item.icon}
                                            </div>
                                            <span className="text-[13px] md:text-[14px] font-bold text-navy-primary uppercase text-center font-taviraj tracking-widest leading-tight">
                                                {item.label}
                                            </span>
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        className="object-contain hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AirportAlternatingSections;
