import React from 'react';
import { Phone } from 'lucide-react';

const ChicagoHero = () => {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden font-poppins">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png')",
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Container */}
            <div className="container-custom relative z-10 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-pure-white font-taviraj font-bold flex flex-col items-center justify-center">
                        <span className="text-[40px] md:text-[56px] lg:text-[72px] leading-tight mb-2 drop-shadow-2xl">
                            Private Transportation
                        </span>
                        <span className="text-gold text-[45px] md:text-[65px] lg:text-[85px] leading-tight -mt-4 drop-shadow-2xl italic">
                            Chicago
                        </span>
                    </h1>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-navy-primary text-pure-white px-12 py-4 rounded-md font-bold text-[18px] transition-all hover:bg-navy-light hover:scale-105 shadow-xl min-w-[240px] text-center border-2 border-navy-primary"
                        >
                            Book Now
                        </a>

                        <a
                            href="tel:5045084831"
                            className="bg-pure-white text-navy-primary px-12 py-4 rounded-md font-bold text-[18px] flex items-center justify-center gap-3 transition-all hover:bg-gray-100 hover:scale-105 shadow-xl min-w-[240px] border-2 border-pure-white"
                        >
                            <Phone size={22} fill="currentColor" />
                            (504) 508-4831
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Border Highlight (similar to other pages) */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </section>
    );
};

export default ChicagoHero;
