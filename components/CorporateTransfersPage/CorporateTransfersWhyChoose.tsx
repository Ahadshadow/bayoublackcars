import React from 'react';
import Image from 'next/image';

const reasonBlocks = [
    {
        title: "Precision Airport Connectivity",
        content: "Bayou Black Cars specializes in high-stakes airport logistics. We coordinate every arrival and departure using real-time flight data, ensuring your corporate guests never wait and always travel in premium comfort.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: true
    },
    {
        title: "Elite Fleet for Executive Travelers",
        content: "Our vehicle collection features top-tier sedans and SUVs tailored for the modern executive. Enjoy a quiet, polished environment with professional amenities designed to facilitate business on the move.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: false
    },
    {
        title: "Dedicated Corporate Account Management",
        content: "Experience streamlined booking and reporting for your entire organization. Bayou Black Cars provides dedicated support to handle multi-passenger itineraries and complex billing requirements with total transparency.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: true
    }
];

const CorporateTransfersWhyChoose = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Professional Corporate Choice
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed space-y-4">
                        <span className="block mb-4">
                            At Bayou Black Cars, we redefine corporate airport transfer with a commitment to high-quality, reliable transportation, and professionalism. We tailor our service for corporate event planners, business executives, and VIP clients who require first-class ground transportation.
                        </span>
                        <span className="block mb-4">
                            We understand that time is money, and punctuality is non-negotiable in the corporate transportation world. We offer carefully planned airport black car service, ensuring you never miss a flight or a business meeting. Our professional drivers arrive early, track your flight in real-time, and adjust schedules accordingly for a seamless experience.
                        </span>
                        <span className="block">
                            We designed our premium black car service for maximum comfort and productivity. You can choose a luxury sedan, a spacious SUV, or a corporate airport limousine. Each vehicle has modern amenities.
                        </span>
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

export default CorporateTransfersWhyChoose;
