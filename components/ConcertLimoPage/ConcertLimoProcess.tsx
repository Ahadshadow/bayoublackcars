import React from 'react';
import { MapPin, MousePointer2, ShieldCheck, UserCheck } from 'lucide-react';

const steps = [
    {
        icon: <MapPin size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Punctual Door-to-Door\nPickup",
        desc: "Your dedicated chauffeur arrives exactly as scheduled, ensuring your group stays together and focused on the excitement of the night ahead."
    },
    {
        icon: <MousePointer2 size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Seamless Reservation\nPlanning",
        desc: "Secure your luxury transport effortlessly via our digital portal. Our team handles every itinerary detail to ensure a friction-free evening."
    },
    {
        icon: <ShieldCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Zero Traffic &\nParking Friction",
        desc: "Bypass the chaos of venue parking and congestion. We provide direct entrance access, allowing you to walk straight into the show."
    },
    {
        icon: <UserCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Professional Service &\nSafety Protocol",
        desc: "Our highly-trained chauffeurs prioritize your group's safety and comfort, providing a discreet and attentive atmosphere for the entire journey."
    }
];

const ConcertLimoProcess = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    The Bayou Black Cars Protocol
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    Planning a milestone event? Trust Bayou Black Cars's elite concert service to handle the logistics while you focus on the music. Here’s how our world-class experience flows:
                </p>

                {/* 2x2 Cards Grid Layout */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] bg-[#c99736] text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-gold/50"
                        >
                            <div className="bg-pure-white/10 p-3 rounded-full mb-2">
                                {step.icon}
                            </div>
                            <h3 className="text-[15px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full uppercase">
                                {step.title}
                            </h3>
                            <p className="text-[12px] whitespace-pre-line leading-relaxed text-pure-white/90 uppercase">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConcertLimoProcess;
