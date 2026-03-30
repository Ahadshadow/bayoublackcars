import React from 'react';
import { Gift, UserCheck, Star, Clock } from 'lucide-react';

const whyChooseData = [
    {
        icon: <Gift size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Bespoke Romance\nPackages",
        desc: "From elegant interior floral decor to personalized amenity selections, we curate every detail to reflect the uniqueness of your relationship and milestone."
    },
    {
        icon: <UserCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Discreet &\nElite Chauffeurs",
        desc: "Our professional chauffeurs provide a seamless and private atmosphere, ensuring your romantic evening is defined by absolute comfort and attentive, quiet service."
    },
    {
        icon: <Star size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Refined Fleet &\nExecutive Comfort",
        desc: "Experience the evening in our selection of pristine luxury sedans or stretch limousines, featuring climate control, premium sound, and curated refreshments."
    },
    {
        icon: <Clock size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Reliable &\nPunctual Coordination",
        desc: "We prioritize your schedule above all else, utilizing real-time route monitoring to ensure every stop of your anniversary celebration is perfectly timed."
    }
];

const AnniversaryLimoWhyChoose = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    The Bayou Black Cars Difference
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    Commemorating your relationship requires a partner dedicated to the finer details. Bayou Black Cars provides the discretion, luxury, and meticulous coordination necessary to turn a simple evening into a legacy memory.
                </p>

                {/* 2x2 Cards Grid Layout */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {whyChooseData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] bg-[#c99736] text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-gold/50"
                        >
                            <div className="bg-pure-white/10 p-3 rounded-full mb-2">
                                {item.icon}
                            </div>
                            <h3 className="text-[15px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full">
                                {item.title}
                            </h3>
                            <p className="text-[12px] whitespace-pre-line leading-relaxed text-pure-white/90">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnniversaryLimoWhyChoose;
