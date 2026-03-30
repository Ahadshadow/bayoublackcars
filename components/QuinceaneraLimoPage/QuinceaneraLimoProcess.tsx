import React from 'react';
import { Package, UserCheck, Clock, CalendarDays } from 'lucide-react';

const processData = [
    {
        icon: <Package size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Bespoke Celebration\nCustomization",
        desc: "We tailor our Quinceañera packages to the specific needs of the family. From vehicle decor to coordinated refreshments, every detail is designed to honor the celebrant."
    },
    {
        icon: <UserCheck size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Dedicated Chauffeur\nConcierge",
        desc: "Our professional chauffeurs act as personal assistants on the road, ensuring safe, elegant, and punctual transitions between every phase of the celebration."
    },
    {
        icon: <Clock size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Trustworthy & Reliable\nTiming",
        desc: "We understand the importance of punctuality for such a significant milestone. Our dispatch team monitors every route to ensure guests and family arrive exactly as scheduled."
    },
    {
        icon: <CalendarDays size={40} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Extended Celebration\nFlexibility",
        desc: "Quinceañeras are all-day events. We offer highly flexible service hours, ensuring your luxury transportation is available from the morning preparations until the final reception departure."
    }
];

const QuinceaneraLimoProcess = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Our Process for Managing the Quinceañera Limo Service
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    Having booked our Quinceañera limousine service, we make sure that your entrance on this memorable day is perfect. Just book the ride, and we will ensure that our professional driver picks you up promptly. Our chauffeurs guarantee that they deliver you on time.
                </p>

                {/* 2x2 Cards Grid Layout */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {processData.map((item, index) => (
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

export default QuinceaneraLimoProcess;
