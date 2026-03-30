import React from 'react';
import { Car, User, Clock, Star } from 'lucide-react';

const steps = [
    {
        icon: <Car size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Select Your\nSignature Ride",
        desc: "Elegance starts with the right vehicle. Choose from our curated selection of luxury stretch limousines, SUVs, and executive sedans to match your group size and style."
    },
    {
        icon: <User size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Professional Service &\nSafety Standard",
        desc: "Relax with absolute peace of mind. Our experienced chauffeurs prioritize both group safety and sophisticated service, ensuring a smooth and punctual evening."
    },
    {
        icon: <Clock size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Coordinated Reservation\nPlanning",
        desc: "We recommend early booking to secure your preferred vehicle. Our team handles every detail of the itinerary planning to ensure zero logistical friction."
    },
    {
        icon: <Star size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Elite Red Carpet\nArrival",
        desc: "Make your entrance unforgettable with our signature red-carpet service. We ensure yours is the most distinguished arrival of the night."
    }
];

const PromLimoProcess = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                    How Our Prom Limo Service Works
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    Enjoy a seamless, luxurious, and safe prom night with Bayou Black Cars. Here’s how our prom limo service works:
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

export default PromLimoProcess;
