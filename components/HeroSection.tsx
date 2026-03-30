import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const HeroSection = () => {
    return (
        <section
            className="relative min-h-[95vh] w-full flex items-center font-poppins overflow-hidden"
        >
            {/* Background Image Layer with Priority Loading */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/replace img/1 Homepage Hero Image.png"
                    alt="Bayou Black Cars - Luxury Limo Service"
                    fill
                    priority
                    className="object-cover object-center transform -scale-x-100"
                    sizes="100vw"
                />
            </div>

            {/* Dark Overlay - Left Weighted Gradient using Navy Primary */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'linear-gradient(to right, var(--color-navy-primary) 0%, rgba(10, 25, 47, 0.95) 35%, rgba(10, 25, 47, 0.6) 55%, rgba(10, 25, 47, 0) 100%)'
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 w-full px-[20px] lg:px-[80px] py-28 flex flex-col items-start">

                {/* Text Content */}
                <div className="w-full max-w-[900px] flex flex-col items-start text-left">
                    <p className="text-gold text-[14px] font-bold uppercase tracking-[0.4em] mb-6">
                        Bayou Black Cars
                    </p>

                    <h1 className="font-taviraj font-bold text-[36px] md:text-[52px] leading-[1.1] text-pure-white mb-6 italic">
                        Excellence in <br />
                        Premium Chauffeur <span className="text-gold">Services</span>
                    </h1>

                    <div className="text-pure-white/80 text-[17px] leading-[1.7] max-w-[650px] mb-10 font-light">
                        Discover the pinnacle of sophisticated travel throughout the country. Our dedicated
                        chauffeurs and top-of-the-line fleet ensure safety, style, and absolute reliability
                        for every milestone.
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Explore Fleet Button Group */}
                        <div className="flex flex-col items-start gap-2">
                            <Link
                                href="/fleet"
                                className="border-2 border-gold bg-gold rounded-full px-16 py-3 font-bold text-[20px] text-pure-white transition-all hover:bg-pure-white hover:text-pure-black hover:border-pure-white min-w-[280px] text-center"
                            >
                                Explore Fleet
                            </Link>
                            <span className="text-[14px] text-pure-white opacity-90 font-medium">View Our Luxury Vehicle Collection</span>
                        </div>

                        {/* Phone Button Group */}
                        <div className="flex flex-col items-start gap-2">
                            <a
                                href="tel:5045084831"
                                className="border-2 border-pure-white text-pure-white rounded-full px-10 py-3 font-bold text-[20px] flex items-center justify-center gap-3 transition-all hover:bg-pure-white hover:text-pure-black min-w-[280px]"
                            >
                                <Phone size={24} />
                                (504) 508-4831
                            </a>
                            <span className="text-[14px] text-pure-white opacity-90 font-medium text-center">Live reservation agents available 24/7</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
