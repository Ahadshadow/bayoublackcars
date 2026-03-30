import React from 'react';
import { Calendar, User, ShieldCheck, HeartPulse } from 'lucide-react';

const steps = [
    {
        icon: <Calendar size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Convenient Booking &\nSchedule Arrangements",
        desc: "For a friend or yourself, simply call, book online or schedule a ride in advance. Our staff handles all logistics and ensures on-time pickups."
    },
    {
        icon: <User size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Professional &\nFriendly Drivers",
        desc: "We professionally train our chauffeurs to ensure maximum comfort and assist them in getting into and out of the vehicle."
    },
    {
        icon: <ShieldCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Comfortable And Clean\nVehicles For Stress Free Rides",
        desc: "Getting patients to and from a medical facility is made easier when they have a spacious, clean, luxury vehicle at their disposal."
    },
    {
        icon: <HeartPulse size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Personal and\nAdaptable Transportation",
        desc: "Be it a single trip or recurring rides for dialysis, physical therapy, or other appointments, we strive to be there when you need us."
    }
];

const NEMTProcess = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                    How We Provide Non-Emergency Medical Transportation
                </h2>
                <p className="text-luxury-text-muted text-[11px] md:text-[13px] max-w-4xl mx-auto mb-16 leading-relaxed uppercase">
                    We offer reliable and safe Non-Emergency Medical Transportation (NEMT) with professionally trained drivers and well-maintained vehicles.
                </p>

                {/* 4 Cards Grid Layout */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {services.map((step, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-[#c99736] text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-gold/50"
                        >
                            <div className="bg-pure-white/10 p-3 rounded-full mb-2">
                                {step.icon}
                            </div>
                            <h3 className="text-[13px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full uppercase">
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

// Fixed error in mapping
const services = steps;

export default NEMTProcess;
