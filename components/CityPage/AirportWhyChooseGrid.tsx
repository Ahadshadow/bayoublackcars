import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WhyChooseItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface AirportWhyChooseGridProps {
    items: WhyChooseItem[];
    title?: string;
    subtitle?: string;
}

const AirportWhyChooseGrid: React.FC<AirportWhyChooseGridProps> = ({ items, title, subtitle }) => {
    return (
        <section className="bg-navy-primary py-24 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-white text-[28px] md:text-[40px] font-bold font-taviraj leading-tight mb-4">
                        {title || "Why Travelers Choose Our New Orleans Airport Limo Service"}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-white/80 text-[15px] leading-relaxed">
                        {subtitle || "From curbside pickups to private jet transfers, our New Orleans Airport limo service is built around convenience, comfort, and reliability."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gold/30 rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-500 flex flex-col text-left group animate-in fade-in slide-in-from-bottom-8"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="mb-6 p-4 border border-gold/20 rounded-lg w-fit group-hover:bg-gold transition-colors duration-500">
                                <item.icon className="text-gold group-hover:text-navy-primary" size={32} />
                            </div>
                            <h3 className="text-white text-[20px] font-bold font-taviraj mb-3 uppercase tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-white/70 text-[14px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirportWhyChooseGrid;
