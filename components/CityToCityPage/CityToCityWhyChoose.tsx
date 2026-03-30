import React from 'react';
import Image from 'next/image';

const reasonBlocks = [
    {
        title: "Luxury & Comfort Beyond Compare",
        content: "Every journey with Bayou ensures elite comfort. Our curated fleet features executive sedans and premium SUVs, all providing:\n\n- Bespoke leather interiors for a first-class atmosphere\n- Precision climate control for your personalized temperature\n- Integrated WiFi to maintain connectivity during transit\n- Privacy partitions for total discretion on the road\n- Complimentary chilled water for a refreshed arrival",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: true
    },
    {
        title: "Professional Chauffeurs & Elite Etiquette",
        content: "Our highly trained chauffeurs are hospitality professionals. We pride ourselves on delivering:\n\n- Punctual, well-groomed, and courteous professional chauffeurs\n- Deep local knowledge of the most efficient regional routes\n- Proactive traffic monitoring to ensure seamless arrival times\n- Full assistance with luggage and specialized travel requests",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: false
    },
    {
        title: "Safe, Reliable & Customizable Intercity Travel",
        content: "Security and dependability are the foundations of our service. We provide:\n\n- Real-time vehicle monitoring for safety and efficiency\n- Meticulously maintained and fully insured luxury fleet\n- High flexibility for last-minute itinerary adjustments\n- Streamlined billing and payment options for your convenience\n\nWhether traveling for a high-stakes board meeting or a peaceful weekend getaway, our service is tailored perfectly to your requirements.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        imageRight: true
    }
];

const CityToCityWhyChoose = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Preferred Intercity Transportation
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        When it comes to long-distance travel, comfort, reliability, and exclusivity matter. Bayou Black Cars offers an unmatched city-to-city car service that redefines intercity travel. Whether you're a business traveler, VIP, or leisure client, we provide seamless, stress-free, and luxurious transportation across USA.
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
                                <div className="text-luxury-text-muted text-[13px] leading-relaxed whitespace-pre-wrap">
                                    {block.content.split(/\n- |\n\n- /).map((part, i) => {
                                        if (i === 0) return <p key={i} className="mb-4">{part}</p>;
                                        // Handle nested lists or paragraph text after a list
                                        const pBreak = part.split("\n\n");
                                        return (
                                            <React.Fragment key={i}>
                                                <ul className="list-disc pl-5 mb-2 space-y-1">
                                                    <li>{pBreak[0]}</li>
                                                </ul>
                                                {pBreak[1] && <p className="mt-4">{pBreak[1]}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
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

export default CityToCityWhyChoose;
