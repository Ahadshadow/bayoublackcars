import React from 'react';
import Image from 'next/image';

const AirportLogoTransfer = () => {
    return (
        <section className="bg-[#f8f9fa] py-16 md:py-24 relative overflow-hidden">
            <div className="container-custom px-4 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
                    <span className="text-navy-primary text-[24px] md:text-[42px] font-bold font-taviraj uppercase tracking-tighter">New Orleans</span>
                    <div className="w-[120px] md:w-[160px] h-[50px] md:h-[70px] bg-navy-primary flex flex-col items-center justify-center p-2 rounded-sm shadow-xl border-2 border-white/10 group hover:bg-navy-dark transition-all duration-500">
                        <span className="text-white text-[10px] md:text-[14px] font-bold tracking-[0.3em] leading-tight">Bayou</span>
                        <span className="text-white text-[12px] md:text-[18px] font-extrabold tracking-widest leading-tight">BLACK LIMO</span>
                    </div>
                    <span className="text-navy-primary text-[24px] md:text-[42px] font-bold font-taviraj uppercase tracking-tighter">Transfer</span>
                </div>

                <div className="relative w-full max-w-5xl h-[250px] md:h-[500px] hover:scale-[1.02] transition-transform duration-700">
                    <Image
                        src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
                        alt="Bayou Black Cars Fleet"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-primary/5 -skew-x-12 translate-x-1/2"></div>
        </section>
    );
};

export default AirportLogoTransfer;
