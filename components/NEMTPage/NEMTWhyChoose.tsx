import React from 'react';
import { Sparkles, Clock, Calendar, Accessibility, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const reasons = [
    {
        icon: <Sparkles size={32} className="text-gold" />,
        title: "Experience a smooth",
        desc: "stress-free ride with our trained chauffeurs – no rushing, no hassle, just pure comfort and reliability"
    },
    {
        icon: <Clock size={32} className="text-gold" />,
        title: "Never worry about\nrunning late",
        desc: "our professional drivers ensure you arrive relaxed and on schedule."
    },
    {
        icon: <Calendar size={32} className="text-gold" />,
        title: "Flexible Booking\nOptions",
        desc: "Schedule rides in advance or request same-day service."
    },
    {
        icon: <Accessibility size={32} className="text-gold" />,
        title: "Wheelchair &\nStretcher Transport",
        desc: "Specialized vehicles for patients with mobility restrictions."
    },
    {
        icon: <ShieldCheck size={32} className="text-gold" />,
        title: "HIPAA-Compliant",
        desc: "Ensuring privacy and confidentiality for medical transportation."
    }
];

const NEMTWhyChoose = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-6 uppercase leading-tight">
                        Why Choose Our NEMT Services?
                    </h2>
                    <div className="relative w-full h-64 md:h-80 mb-12 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/HERO section/servies/Non-Emergency Medical Transportation hero.png"
                            alt="NEMT Service"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-luxury-text-muted text-[11px] md:text-[13px] max-w-3xl mx-auto leading-relaxed uppercase">
                        Reliable, safe, and timely Non-Emergency Medical Transportation (NEMT) with compassionate care. Your health and comfort are our priority!
                    </p>
                </div>

                {/* Icon Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {reasons.map((item, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] bg-navy-primary text-pure-white p-8 rounded-xl flex flex-col items-center shadow-lg border border-gold/20 hover:bg-navy-primary/95 transition-all">
                            <div className="mb-6 bg-white/10 p-4 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-[12px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-white/20 pb-4 w-full uppercase">
                                {item.title}
                            </h3>
                            <p className="text-[10px] leading-relaxed text-pure-white/80 uppercase">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NEMTWhyChoose;
