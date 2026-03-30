import React from 'react';
import { Sparkles, ShieldCheck, Ticket } from 'lucide-react';

const cardData = [
    {
        icon: <Sparkles size={32} className="text-gold" />,
        title: "Premier Celebration\nEnvironment",
        desc: "Designed for groups who demand the best. Our fleet features immersive audio-visual systems and executive lounge seating to keep the party energy alive between every destination."
    },
    {
        icon: <ShieldCheck size={32} className="text-gold" />,
        title: "Absolute Safety &\nElite Service",
        desc: "Focus entirely on the celebration while our highly-trained chauffeurs handle the logistics. We prioritize your group's safety and punctuality with absolute professional standard."
    },
    {
        icon: <Ticket size={32} className="text-gold" />,
        title: "Curated Bachelor\nEnsembles",
        desc: "From personalized refreshment suites to VIP venue coordination, we tailor every aspect of your transit to match your group's unique itinerary and style."
    }
];

const BachelorPartyLimoIconCards = () => {
    return (
        <section className="pb-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-navy-primary text-pure-white p-8 rounded-xl flex flex-col items-center text-center hover:bg-navy-primary/95 transition-all shadow-lg border border-gold/20">
                            <div className="mb-6 bg-white/10 p-4 rounded-full">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-white/20 pb-3 w-full uppercase">
                                {card.title}
                            </h3>
                            <p className="text-[12px] leading-relaxed text-pure-white/80">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BachelorPartyLimoIconCards;
