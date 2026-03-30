import React from 'react';
import { LucideIcon } from 'lucide-react';
import { CityData } from '@/data/cities/houston';

interface BrandAuthorityProps {
    data: CityData['brandAuthority'];
}

const BrandAuthority: React.FC<BrandAuthorityProps> = ({ data }) => {
    return (
        <section className="bg-[#001233] py-12 font-poppins relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none text-white">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="container-custom px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Column: Large Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                            <img
                                src={data.mainImage}
                                alt={data.title}
                                className="w-full h-full object-contain min-h-[400px] transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="w-12 h-1 bg-gold mb-3"></div>
                                <p className="text-white font-taviraj text-xl italic font-medium leading-tight">
                                    Premium Service Excellence
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 text-left space-y-8">
                        <div>
                            <h2 className="text-pure-white text-[28px] md:text-[36px] font-bold font-taviraj leading-tight uppercase tracking-tight">
                                {data.title}
                            </h2>
                            <div className="w-20 h-1 bg-gold mt-4"></div>
                        </div>

                        <div className="space-y-6">
                            {data.columns.map((column, index) => (
                                <div key={index} className="flex gap-5 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-gold/30 transition-all group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-colors">
                                        <column.icon size={22} className="text-gold group-hover:text-navy-primary transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-pure-white text-[17px] font-bold font-taviraj uppercase tracking-wide">
                                            {column.title}
                                        </h3>
                                        <p className="text-gray-400 text-[13.5px] leading-relaxed">
                                            {column.description}
                                        </p>
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

export default BrandAuthority;
