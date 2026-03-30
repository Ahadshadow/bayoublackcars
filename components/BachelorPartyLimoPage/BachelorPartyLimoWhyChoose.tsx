import React from 'react';
import { Gift, UserCheck, Star, Clock } from 'lucide-react';

const whyChooseData = [
    {
        icon: <Gift size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Bespoke Celebration\nEnsembles",
        desc: "Transform your transition between venues into a highlight of the night. Our fleet features customized interiors designed for group celebration and total comfort."
    },
    {
        icon: <UserCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Elite Chauffeur\nConcierge",
        desc: "Every Bayou chauffeur is committed to professional logistics and group safety, allowing you to focus entirely on the celebration while we handle the route."
    },
    {
        icon: <Star size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Immersive Onboard\nAtmosphere",
        desc: "Our vehicles are equipped with synchronized lighting, premium audio systems, and curated refreshment suites to maintain the party energy during your journey."
    },
    {
        icon: <Clock size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Reliable Day-to-Night\nCoordination",
        desc: "From early afternoon excursions to late-night returns, we guarantee punctual pickups and safe transitions for every guest in your party."
    }
];

const BachelorPartyLimoWhyChoose = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                    Why Trust Bayou Black Cars for Your Celebration?
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    Coordinating a group celebration demands absolute reliability. Bayou Black Cars delivers the elite fleet, professional chauffeurs, and personalized logistics required to ensure your bachelor party is as safe as it is spectacular.
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
                            <p className="text-[12px] whitespace-pre-line leading-relaxed text-pure-white/90 uppercase">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BachelorPartyLimoWhyChoose;
