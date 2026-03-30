import React from 'react';
import Image from 'next/image';

interface Section {
    title: string;
    paragraphs: string[];
    image: string;
}

interface AirportPremiumLimoProps {
    title: string;
    sections: Section[];
}

const AirportPremiumLimo: React.FC<AirportPremiumLimoProps> = ({ title, sections }) => {
    return (
        <section className="bg-white py-24 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-16">
                    <h2 className="text-navy-primary text-[28px] md:text-[42px] font-bold font-taviraj uppercase tracking-tight">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
                    <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-[15px]">
                        Traveling to or from Louis Armstrong New Orleans International Airport (MSY)? Our New Orleans Airport Limo Service gives you a first-class experience.
                    </p>
                </div>

                <div className="space-y-24">
                    {sections.map((section, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-20 items-center animate-in fade-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-12 duration-1000`}>
                            <div className="lg:w-1/2">
                                <h3 className="text-navy-primary text-[24px] md:text-[32px] font-bold font-taviraj mb-6 tracking-tight leading-tight">
                                    {section.title}
                                </h3>
                                <div className="w-16 h-1 bg-gold mb-6 opacity-30"></div>
                                <div className="space-y-4">
                                    {section.paragraphs.map((p, pIndex) => (
                                        <p key={pIndex} className="text-gray-600 text-[16px] leading-relaxed">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirportPremiumLimo;
