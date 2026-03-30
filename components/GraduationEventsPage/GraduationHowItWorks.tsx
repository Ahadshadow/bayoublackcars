import React from 'react';
import { Laptop, Plane, UserCheck, Star, ArrowRight, Clock } from 'lucide-react';

const steps = [
    {
        icon: <Laptop size={32} className="text-gold" />,
        title: "Bespoke Graduation\nPlanning",
        desc: "Easily secure your celebration transit through our digital portal. Our team coordinates every detail from commencement times to reception stops."
    },
    {
        icon: <Plane size={32} className="text-gold" />,
        title: "Punctual Group\nCoordination",
        desc: "We ensure all graduates and family members are picked up exactly as scheduled, providing a stress-free transition to the ceremony venue."
    },
    {
        icon: <UserCheck size={32} className="text-gold" />,
        title: "Elite Chauffeur\nWhite-Glove Service",
        desc: "Our professional chauffeurs provide a dignified and celebratory atmosphere, acting as dedicated assistants for your family on this significant day."
    },
    {
        icon: <Star size={32} className="text-gold" />,
        title: "Executive Fleet for\nMilestone Comfort",
        desc: "Select from our curated luxury sedans, stretch limousines, or executive SUVs, all featuring climate control and premium amenities for your group."
    },
    {
        icon: <ArrowRight size={32} className="text-gold" />,
        title: "Direct Ceremony &\nReception Links",
        desc: "Bypass the chaos of graduation parking. We provide direct venue access, allowing your family to transition seamlessly between life's big moments."
    },
    {
        icon: <Clock size={32} className="text-gold" />,
        title: "24/7 Celebration\nSupport",
        desc: "Whether your graduation gala runs into the late evening or you have early morning preparations, our elite fleet is available around the clock."
    }
];

const GraduationHowItWorks = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Bayou's Graduation Logistics Protocol
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    We ensure a smooth, celebratory, and dignified transit experience for graduates and their families. Here's how we coordinate your milestone day:
                </p>

                {/* 3x2 Grid of White Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white border border-navy-primary/30 border-dashed p-8 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                            <div className="mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary whitespace-pre-line leading-tight mb-4 border-b border-navy-primary/10 pb-3 w-full uppercase">
                                {step.title}
                            </h3>
                            <p className="text-[12px] leading-relaxed text-luxury-text-muted">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GraduationHowItWorks;
