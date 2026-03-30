import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Highlight {
    title: string;
    description: string;
    icon: LucideIcon;
    image?: string;
}

interface ServiceHighlightGridProps {
    highlights: Highlight[];
    showTitle?: boolean;
}

const ServiceHighlightGrid: React.FC<ServiceHighlightGridProps> = ({ highlights, showTitle = true }) => {
    return (
        <section className="bg-white py-8 font-poppins text-black">
            <div className="container-custom px-4">
                {showTitle && (
                    <div className="text-center mb-8">
                        <h2 className="text-navy-primary text-[28px] md:text-[34px] font-bold font-taviraj tracking-tight uppercase">
                            Discover our service classes
                        </h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-2"></div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#FBFBFB] rounded-xl overflow-hidden flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 group"
                        >
                            {/* Vehicle Image */}
                            {item.image && (
                                <div className="w-full h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                </div>
                            )}

                            <div className="p-6 flex flex-col items-center space-y-3">
                                <div className="bg-white p-3 rounded-full shadow-md -mt-12 relative z-10 border border-gold/20">
                                    <item.icon size={24} className="text-navy-primary" />
                                </div>
                                <h3 className="text-navy-primary text-[19px] font-bold font-taviraj tracking-tight uppercase mt-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-[13.5px] leading-relaxed max-w-[280px]">
                                    {item.description}
                                </p>
                                <a
                                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-navy-primary text-white px-6 py-2 rounded-md text-[13px] font-bold uppercase tracking-wider hover:bg-gold transition-colors shadow-md text-center block"
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

export default ServiceHighlightGrid;
