import React from 'react';
import { Phone } from 'lucide-react';
import { CityData } from '@/data/cities/houston';

interface AirportHeroProps {
    data: CityData['hero'];
}

const AirportHero: React.FC<AirportHeroProps> = ({ data }) => {
    return (
        <section className="relative w-full overflow-hidden font-poppins py-12">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${data.backgroundImage}')`,
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="container-custom relative z-10 px-4 w-full text-left">
                <div className="max-w-4xl">
                    <div className="space-y-2 mb-6 text-left">
                        <p className="text-white text-[18px] md:text-[22px] font-medium tracking-wide !text-left">
                            {data.title}
                        </p>
                        <h1
                            className="text-[32px] md:text-[44px] lg:text-[52px] font-bold font-taviraj leading-[1.1] drop-shadow-2xl !text-left"
                            style={{ color: '#cfa24b' }}
                        >
                            {data.highlightedCity}
                        </h1>
                    </div>

                    <div className="max-w-4xl mb-10 text-left">
                        <p
                            className="text-pure-white text-[15px] md:text-[16px] leading-relaxed font-normal drop-shadow-lg opacity-90 !text-left"
                            dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, '<br />') }}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start justify-start gap-5">
                        <a
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-navy-primary text-pure-white px-10 py-3 rounded-md font-bold text-[15px] transition-all hover:bg-gold hover:text-navy-primary shadow-xl min-w-[180px] text-center"
                        >
                            Book Now
                        </a>

                        <a
                            href="tel:5045084831"
                            className="bg-pure-white text-navy-primary px-10 py-3 rounded-md font-bold text-[15px] flex items-center justify-center gap-2 transition-all hover:bg-gray-100 shadow-xl min-w-[180px]"
                        >
                            (504) 508-4831
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Border Highlight */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-gold/80 to-transparent shadow-[0_0_30px_rgba(212,175,55,0.6)]"></div>
        </section>
    );
};

export default AirportHero;
