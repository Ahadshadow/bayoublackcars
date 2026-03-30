"use client";

import React from 'react';
import { Settings, Clock, Star, Calendar } from 'lucide-react';

const cards = [
    {
        title: "Adaptive Hourly Precision",
        description: "Your schedule is our mandate. Whether navigating a tight series of executive meetings or enjoying a spontaneous evening out, our chauffeurs provide the ultimate flexibility, remaining on standby to ensure every transition is seamless.",
        icon: <Settings size={32} className="text-gold" />
    },
    {
        title: "Transparent Value Structure",
        description: "At Bayou Black Cars, we offer elite transportation defined by clarity. Our hourly rates are competitive and upfront, reflecting the premium class of our fleet and the expertise of our professional chauffeurs.",
        icon: <Clock size={32} className="text-gold" />
    },
    {
        title: "Commitment to Excellence",
        description: "Every hour spent with us is a testament to our standards. From the immaculate detailing of our vehicles to the professional etiquette of our drivers, we manage every detail to ensure your journey is flawless.",
        icon: <Star size={32} className="text-gold" />
    },
    {
        title: "Effortless Coordination",
        description: "Securing your dedicated chauffeur is a stress-free process. We pair you with an elite service professional who handles all logistics, allowing you to focus entirely on your priorities while we manage the road.",
        icon: <Calendar size={32} className="text-gold" />
    }
];

const HourlyGrid = () => {
    return (
        <section className="bg-navy-primary py-24 font-poppins text-pure-white">
            <div className="container-custom px-4 text-center">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[28px] md:text-[40px] font-bold text-pure-white font-taviraj mb-6 uppercase">
                        The Luxury of <span className="text-gold font-normal">Time & Flexibility</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                    <p className="text-pure-white/80 text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        Our hourly chauffeur service is engineered for those who demand autonomy over their itinerary. Whether attending a sequence of high-stakes corporate engagements or celebrating a milestone occasion, Bayou Black Cars provides a quiet sanctuary of luxury that adapts to your pace, ensuring you arrive in style, every time.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-pure-white/70 text-[16px] max-w-4xl mx-auto mb-16 leading-relaxed">
                    <p>
                        We provide a sophisticated extension of your workspace or lounge, allowing you to maximize productivity or relaxation between destinations. Our 24-hour availability ensures that elite transportation is always within reach.
                    </p>
                    <p>
                        Experience the difference of a service that anticipates your needs. From international airport connections to localized city travel, we guarantee a first-class experience defined by reliability and discretion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {cards.slice(0, 3).map((card, index) => (
                        <div key={index} className="bg-white/5 border border-gold/20 p-8 rounded-3xl hover:border-gold/50 transition-all group">
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-[22px] font-bold font-taviraj mb-4 text-gold">
                                {card.title}
                            </h3>
                            <p className="text-pure-white/70 text-[15px] leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-[400px] mx-auto">
                    <div className="bg-white/5 border border-gold/20 p-8 rounded-3xl hover:border-gold/50 transition-all group">
                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                            {cards[3].icon}
                        </div>
                        <h3 className="text-[22px] font-bold font-taviraj mb-4 text-gold">
                            {cards[3].title}
                        </h3>
                        <p className="text-pure-white/70 text-[15px] leading-relaxed">
                            {cards[3].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HourlyGrid;
