import React from 'react';
import Image from 'next/image';

const reasonBlocks = [
    {
        title: "Enterprise-Grade Logistic Solutions",
        content: "Bayou Black Cars delivers precision transport management for large-scale corporate gatherings. Our logistics team handles every detail, ensuring your delegates and executives move seamlessly between hotels, venues, and transit hubs.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageRight: true
    },
    {
        title: "Luxurious Productivity in Transit",
        content: "Our executive fleet is designed to serve as a mobile office. With premium seating, high-speed WiFi, and ample charging points, your team stays connected and productive while traveling in total comfort.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageRight: false
    },
    {
        title: "Uncompromising Reliability & Punctuality",
        content: "Precision is critical in the business world. Bayou Black Cars prioritizes timing above all else, utilizing sophisticated dispatch systems and seasoned chauffeurs to guarantee on-time arrivals for every guest on your list.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageRight: true
    }
];

const CorporateEventWhyChoose = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Precision Event Advantage
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        When it comes to corporate event transportation, every detail matters. At Bayou Black Cars, we offer a seamless, high-end travel experience that reflects your company's prestige and professionalism. Whether you're hosting a business conference, corporate gala, or executive retreat, we ensure your guests arrive on time, stress-free, and in absolute comfort.
                    </p>
                </div>

                <div className="flex flex-col space-y-16 mt-12">
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
                                        className="object-contain"
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

export default CorporateEventWhyChoose;
