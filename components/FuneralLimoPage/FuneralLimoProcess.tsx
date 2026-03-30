import React from 'react';
import { Heart, Car, Clock, ShieldCheck } from 'lucide-react';

const steps = [
    {
        icon: <Heart size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Dignity &\nCompassionate Care",
        desc: "Our chauffeurs are specialized in funeral etiquette, providing a quiet, supportive, and respectful atmosphere for grieving families."
    },
    {
        icon: <Car size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Serene & Meticulous\nFleet Standards",
        desc: "We maintain a selection of pristine black sedans and luxury SUVs, each providing a peaceful environment and absolute privacy during transit."
    },
    {
        icon: <Clock size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Precision Logistic\nSynchronization",
        desc: "We prioritize timing above all else. Our team coordinates directly with funeral directors to ensure synchronized arrivals for every service phase."
    },
    {
        icon: <ShieldCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Bespoke Processional\nCoordination",
        desc: "Every family's needs are unique. We offer high flexibility for multi-stop routes, handling all coordination with care and attention to detail."
    }
];

const FuneralLimoProcess = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                    Our Process for Funeral Limo Transportation Services
                </h2>
                <p className="text-luxury-text-muted text-[11px] md:text-[13px] max-w-4xl mx-auto mb-16 leading-relaxed">
                    A dignified experience is guaranteed when you book our funeral limo services. Here’s what to expect:
                </p>

                {/* 4 Cards Grid Layout */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-[#c99736] text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-gold/50"
                        >
                            <div className="bg-pure-white/10 p-3 rounded-full mb-2">
                                {step.icon}
                            </div>
                            <h3 className="text-[14px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full uppercase">
                                {step.title}
                            </h3>
                            <p className="text-[11px] whitespace-pre-line leading-relaxed text-pure-white/90 uppercase">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FuneralLimoProcess;
