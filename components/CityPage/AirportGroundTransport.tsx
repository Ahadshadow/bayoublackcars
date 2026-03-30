import React from 'react';
import Image from 'next/image';
import { AlertCircle } from 'lucide-react';

interface GroundTransportSection {
    title: string;
    paragraphs: string[];
    image: string;
}

interface AirportGroundTransportProps {
    title: string;
    sections: GroundTransportSection[];
}

const AirportGroundTransport: React.FC<AirportGroundTransportProps> = ({ title, sections }) => {
    return (
        <section className="bg-white py-24 font-poppins overflow-hidden">
            <div className="container-custom px-4">
                <div className="animate-in fade-in slide-in-from-top-8 duration-1000">
                    <h2 className="text-navy-primary text-[28px] md:text-[38px] font-bold font-taviraj text-center mb-16 max-w-5xl mx-auto leading-tight">
                        {title}
                    </h2>
                </div>

                <div className="space-y-24">
                    {/* Solo/Group Sections */}
                    {sections.slice(0, 2).map((section, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-in fade-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-12 duration-1000`}>
                            <div className="lg:w-1/2">
                                <h3 className="text-navy-primary text-[24px] md:text-[28px] font-bold font-taviraj mb-6 tracking-tight">
                                    {section.title}
                                </h3>
                                <div className="space-y-4">
                                    {section.paragraphs.map((p, pIndex) => (
                                        <p key={pIndex} className="text-gray-600 text-[15px] leading-relaxed">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Child Car Seats Section */}
                    {sections[2] && (
                        <div className="flex flex-col lg:flex-row gap-12 items-start mt-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <div className="lg:w-1/2">
                                <h3 className="text-navy-primary text-[24px] md:text-[28px] font-bold font-taviraj mb-6 tracking-tight">
                                    {sections[2].title}
                                </h3>
                                <div className="space-y-4 mb-10">
                                    {sections[2].paragraphs.map((p, pIndex) => (
                                        <p key={pIndex} className="text-gray-600 text-[15px] leading-relaxed">
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                {/* Seat Type Cards */}
                                <div className="grid grid-cols-3 gap-4 mb-10">
                                    {[
                                        { name: 'Infant Seats' },
                                        { name: 'Toddler Seats' },
                                        { name: 'Booster Seats' }
                                    ].map((seat, i) => (
                                        <div key={i} className="flex flex-col items-center gap-3 p-4 border border-navy-primary/10 rounded-xl bg-gray-50/50 hover:bg-gold/5 transition-colors duration-300 group">
                                            <div className="text-navy-primary">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300 text-gold">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 8v8" />
                                                    <path d="M8 12h8" />
                                                </svg>
                                            </div>
                                            <span className="text-[11px] md:text-[13px] font-bold text-navy-primary uppercase text-center">{seat.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Warning Box */}
                                <div className="bg-navy-primary/5 border-l-4 border-gold p-6 rounded-r-xl flex gap-5 items-start">
                                    <div className="bg-gold p-2 rounded-lg text-white">
                                        <AlertCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-navy-primary font-bold text-[18px] font-taviraj mb-1">Important Note About Stretch Limousines</h4>
                                        <p className="text-gray-600 text-[14px]">
                                            Child car seats cannot be installed in stretch limousines due to custom seating and a lack of standard seat belts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={sections[2].image}
                                    alt={sections[2].title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AirportGroundTransport;
