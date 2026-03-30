import React from 'react';
import Image from 'next/image';
import { MapPin, LayoutList, Fingerprint, Award, ShieldAlert } from 'lucide-react';

const chooseCards = [
    {
        icon: <MapPin size={24} className="mb-2" />,
        title: "Regional Milestone\nExperts",
        desc: "We provide specialized coordination for traditional celebrations across the entire metropolitan region."
    },
    {
        icon: <LayoutList size={24} className="mb-2" />,
        title: "Curated Luxury\nFleet Selection",
        desc: "From elegant stretch limousines to high-capacity party buses, we have the ideal vehicle for your specific group."
    },
    {
        icon: <Fingerprint size={24} className="mb-2" />,
        title: "Bespoke Cultural\nPersonalization",
        desc: "Custom interior decor and coordinated refreshments tailored to the Quinceañera's vision and themes."
    },
    {
        icon: <Award size={24} className="mb-2" />,
        title: "Specialized Event\nChauffeurs",
        desc: "Our professional drivers act as personal assistants, ensuring a dignified and seamless experience."
    },
    {
        icon: <ShieldAlert size={24} className="mb-2" />,
        title: "Absolute Safety &\nReliability",
        desc: "We prioritize safety with a meticulously maintained fleet and strict professional standards for every ride."
    }
];

const QuinceaneraLimoWhyChoose = () => {
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
                                alt="Dignified Quinceañera Transit"
                                fill
                                className="object-contain p-8"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6 leading-tight">
                            Why Choose Bayou for Your Quinceañera?
                        </h2>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                            Bayou provides the elegance and specialized coordination needed for this significant cultural milestone. Our dedicated team ensures that every transit phase is handled with respect, punctuality, and first-class luxury.
                        </p>
                    </div>
                </div>

                {/* Bottom Half: 5 Icon Cards */}
                <div className="flex flex-wrap justify-center gap-4">
                    {chooseCards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(20%-13px)] bg-navy-primary text-pure-white p-6 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-navy-primary"
                        >
                            <div className="bg-white/10 p-3 rounded-full mb-3 text-white">
                                {card.icon}
                            </div>
                            <h3 className="text-[13px] font-bold font-taviraj whitespace-pre-line leading-tight mb-3 border-b border-pure-white/20 pb-2 w-full uppercase">
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

export default QuinceaneraLimoWhyChoose;
