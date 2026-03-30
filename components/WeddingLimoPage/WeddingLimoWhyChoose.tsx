import React from 'react';
import { Gem, UserCheck, Settings, Clock } from 'lucide-react';

const whyChooseUs = [
    {
        icon: <Gem size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Bespoke Luxury & Comfort",
        desc: "Our wedding collection features pristine luxury vehicles equipped with curated amenities, ambient lighting, and premium leather seating, ensuring your transition between venues is a highlight of your celebration."
    },
    {
        icon: <UserCheck size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Expert Chauffeurs with\nWedding Protocol Training",
        desc: "Bayou chauffeurs are specialized in wedding logistics, providing a synchronized and supportive presence. They handle everything from red-carpet assistance to coordinating with your photography team."
    },
    {
        icon: <Settings size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Personalized Celebration Packages",
        desc: "We understand that every union is unique. Our wedding concierge works with you to tailor every detail, including specialized vehicle decor, chilled refreshments, and customized processional routes."
    },
    {
        icon: <Clock size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Absolute Punctuality & Coordination",
        desc: "Timing is the foundation of a perfect ceremony. Bayou utilizes advanced dispatch synchronization and real-time route monitoring to guarantee your arrival is flawlessly timed and entirely stress-free."
    }
];

const WeddingLimoWhyChoose = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                    Luxury Transportation for Your Union
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    At Bayou, we believe your wedding journey should be as memorable as the destination. We provide more than transit; we deliver a serene and sophisticated haven where you can enjoy your first moments as a married couple.
                </p>

                {/* 4-column balanced layout on md+ screens */}
                <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 sm:gap-x-12">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-24px)] lg:w-[calc(25%-36px)] flex flex-col items-center">
                            {item.icon}
                            <h3 className="text-[16px] font-bold font-taviraj text-navy-primary whitespace-pre-line leading-tight mb-3">
                                {item.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingLimoWhyChoose;
