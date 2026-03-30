import React from 'react';
import Image from 'next/image';

const reasonBlocks = [
    {
        title: "Personalized Itineraries for an Exclusive Experience",
        content: "With our private excursions, you maintain absolute control over your schedule and sightseeing pace. Visit legendary landmarks, hidden cultural gems, and premier shopping districts without the restrictions of a preset route. We tailor every mile to match your specific group's interests.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageRight: true
    },
    {
        title: "Elite Fleet for Ultimate Style & Comfort",
        content: "Our premium vehicle collection features meticulously maintained sedans and SUVs, all providing professional-grade amenities including leather seating, WiFi, and advanced climate control. Whether traveling solo or with a group, we have the perfect luxury ride for your tour.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: false
    },
    {
        title: "Professional Chauffeurs with Deep Local Insight",
        content: "Our chauffeurs are local experts who pride themselves on area knowledge. They share historical context and reveal the city's best-kept secrets, ensuring your tour is an immersive and memorable cultural journey defined by punctuality and absolute discretion.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        imageRight: true
    }
];

const CityToursWhyChoose = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Choice for Discerning Travelers
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        When it comes to exploring cities in style and comfort, Bayou Black Cars stands out as the premier choice for luxury city tours. Whether you're a visitor discovering the sights for the first time or a local looking to experience your city in a new way, our private chauffeur-driven tours offer an unparalleled level of service, luxury, and convenience.
                    </p>
                </div>

                <div className="flex flex-col space-y-16">
                    {reasonBlocks.map((block, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${block.imageRight ? 'md:flex-row-reverse' : ''}`}>

                            {/* Text Sidebar */}
                            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                                <h3 className="text-2xl font-taviraj text-navy-primary font-bold">
                                    {block.title}
                                </h3>
                                <p className="text-luxury-text-muted text-[13px] leading-relaxed whitespace-pre-wrap">
                                    {block.content}
                                </p>
                            </div>

                            {/* Image Sidebar */}
                            <div className="w-full md:w-1/2">
                                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border border-navy-primary/10">
                                    <Image
                                        src={block.image}
                                        alt={block.title}
                                        fill
                                        className="object-contain p-8"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-navy-primary/5 mix-blend-multiply"></div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CityToursWhyChoose;
