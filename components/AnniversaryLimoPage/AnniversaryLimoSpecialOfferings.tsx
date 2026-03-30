import React from 'react';
import Image from 'next/image';
import { Gift, Sparkles, Camera, BarChart3, Users } from 'lucide-react';

const offerings = [
    {
        icon: <Gift size={24} className="mb-2" />,
        title: "Signature Celebration\nEnsembles",
        desc: "Indulge in our curated anniversary perks, featuring premium refreshments and a journey designed for romance."
    },
    {
        icon: <Sparkles size={24} className="mb-2" />,
        title: "Atmospheric\nPersonalization",
        desc: "Transform your ride with custom floral arrangements, balloons, and mood lighting tailored to your relationship."
    },
    {
        icon: <Camera size={24} className="mb-2" />,
        title: "Memorable Moment\nCaptures",
        desc: "Optional photography support to document your special arrival and the highlights of your anniversary evening."
    },
    {
        icon: <BarChart3 size={24} className="mb-2" />,
        title: "Tailored\nSensory Ambiance",
        desc: "Select your own music, climate, and media to create the ultimate private sanctuary for you and your partner."
    },
    {
        icon: <Users size={24} className="mb-2" />,
        title: "Shared Anniversary\nExcursions",
        desc: "Invite friends and family to join the milestone with our high-capacity luxury SUVs and elegant local transit options."
    }
];

const AnniversaryLimoSpecialOfferings = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                {/* Top Half: Image on Left, Text on Right */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-navy-primary/10">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
                                alt="Bespoke Anniversary Offerings"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6 leading-tight">
                            Bespoke Anniversary Enhancements
                        </h2>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                            At Bayou, we believe in creating an atmosphere as unique as your relationship. Our curated enhancements are designed to turn your transit into a cherished memory.
                        </p>
                    </div>
                </div>

                {/* Bottom Half: 5 Icon Cards */}
                <div className="flex flex-wrap justify-center gap-4">
                    {offerings.map((card, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(20%-13px)] bg-navy-primary text-pure-white p-6 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-navy-primary"
                        >
                            <div className="bg-white/10 p-3 rounded-full mb-3 text-white">
                                {card.icon}
                            </div>
                            <h3 className="text-[12px] font-bold font-taviraj whitespace-pre-line leading-tight mb-3 border-b border-pure-white/20 pb-2 w-full uppercase">
                                {card.title}
                            </h3>
                            <p className="text-[10px] whitespace-pre-line leading-relaxed text-pure-white/80">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AnniversaryLimoSpecialOfferings;
