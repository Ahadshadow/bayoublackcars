import React from 'react';
import { Sparkles, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

const reasons = [
    {
        icon: <Sparkles size={32} className="text-gold" />,
        title: "Distinguished\nPresence",
        desc: "Make a high-impact entrance with our meticulously maintained fleet of stretch limousines and feature-rich luxury vehicles, designed for an unforgettable celebration."
    },
    {
        icon: <ShieldCheck size={32} className="text-gold" />,
        title: "Uncompromising\nSafety Standards",
        desc: "We provide a secure and monitored environment, with professional chauffeurs prioritizing the well-being and safety of every student throughout the evening."
    },
    {
        icon: <Star size={32} className="text-gold" />,
        title: "Executive VIP\nExperience",
        desc: "With premium seating, immersive sound systems, and customizable lighting, Bayou creates a sophisticated atmosphere that makes prom night truly extraordinary."
    }
];

const PromLimoWhyChoose = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6 pt-12 uppercase leading-tight">
                        Why Bayou is the Premier Choice for Prom
                    </h2>
                    <div className="relative w-full h-64 md:h-80 mb-12 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
                            alt="Elite Prom Transit"
                            fill
                            className="object-contain p-8"
                            unoptimized
                        />
                    </div>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto leading-relaxed uppercase">
                        For a night this significant, Bayou delivers unmatched luxury and absolute reliability. Our specialized prom services are defined by professional coordination and first-class comfort.
                    </p>
                </div>

                {/* 3 Column Grid of Navy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reasons.map((pkg, index) => (
                        <div key={index} className="bg-navy-primary text-pure-white p-10 rounded-xl flex flex-col items-center shadow-lg border border-gold/20 hover:bg-navy-primary/95 transition-all">
                            <div className="mb-6 bg-white/10 p-4 rounded-full">
                                {pkg.icon}
                            </div>
                            <h3 className="text-[14px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-white/20 pb-4 w-full uppercase">
                                {pkg.title}
                            </h3>
                            <p className="text-[11px] leading-relaxed text-pure-white/80 uppercase">
                                {pkg.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromLimoWhyChoose;
