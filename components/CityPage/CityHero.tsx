import React from 'react';
import { Phone } from 'lucide-react';
import { CityData } from '@/data/cities/houston';
import QuoteForm from '@/components/QuoteForm';

interface CityHeroProps {
    data: CityData['hero'];
}

const CityHero: React.FC<CityHeroProps> = ({ data }) => {
    return (
        <section className="relative min-h-[290px] w-full flex items-center justify-center overflow-hidden font-poppins pt-8 pb-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                style={{
                    backgroundImage: `url('${data.backgroundImage}')`,
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="container-custom relative z-10 px-4 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {/* Left Column: Text Content (5% Margin Left) */}
                    <div className="w-full lg:w-[48%] text-left lg:pl-[5%] animate-fadeInLeft">
                        <h1 className="text-pure-white font-taviraj font-bold flex flex-col items-start">
                            <span className="text-[28px] md:text-[34px] lg:text-[42px] leading-tight mb-0 drop-shadow-2xl text-white uppercase tracking-tight">
                                {data.title}
                            </span>
                            <span className="text-gold text-[34px] md:text-[42px] lg:text-[54px] leading-none -mt-2 drop-shadow-2xl italic font-medium">
                                {data.highlightedCity}
                            </span>
                        </h1>

                        <p className="mt-2 text-pure-white text-[13.5px] md:text-[14.5px] leading-relaxed max-w-lg font-normal drop-shadow-lg opacity-95">
                            {data.description}
                        </p>

                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-start gap-3">
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-navy-primary text-pure-white px-5 py-2 rounded-md font-bold text-[12px] transition-all hover:bg-navy-light hover:scale-105 shadow-xl min-w-[140px] text-center border-2 border-navy-primary uppercase tracking-wider"
                            >
                                Book Now
                            </a>

                            <a
                                href="tel:5045084831"
                                className="bg-pure-white text-navy-primary px-5 py-2 rounded-md font-bold text-[12px] flex items-center justify-center gap-2 transition-all hover:bg-gray-100 hover:scale-105 shadow-xl min-w-[140px] border-2 border-pure-white"
                            >
                                <Phone size={13} fill="currentColor" />
                                (504) 508-4831
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Booking Form (Hidden on Mobile, 5% Margin Right) */}
                    <div className="hidden lg:flex w-full lg:w-[48%] justify-end lg:pr-[5%]">
                        <div className="w-full max-w-[400px] bg-white rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden animate-fadeInUp border border-white/10 scale-[0.8] origin-right -my-6">
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Border Highlight */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
        </section>
    );
};

export default CityHero;
