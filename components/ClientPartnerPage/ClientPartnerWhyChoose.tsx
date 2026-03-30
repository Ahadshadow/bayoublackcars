import React from 'react';
import Image from 'next/image';

const reasonBlocks = [
    {
        title: "Tailored Corporate Travel Solutions",
        content: "Bayou Black Cars delivers selective corporate transportation across the region, ensuring peak efficiency and world-class luxury. Whether for executive transfers, business meetings, or high-stakes corporate events, our services are designed for seamless movement. With 24/7 availability and flexible booking, we make business logistics effortless.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: true
    },
    {
        title: "Exclusive VIP & Executive Treatment",
        content: "Bayou Black Cars's luxury black car service ensures executives and VIPs travel with absolute style, professionalism, and comfort. Our fleet includes high-end sedans and SUVs with plush seating, climate control, and privacy tinting. With expert chauffeurs, punctual pickups, and discrete service, we provide a seamless and secure travel experience.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        imageRight: false
    },
    {
        title: "Simplified Billing & Corporate Management",
        content: "Bayou Black Cars streamlines corporate travel with sophisticated billing and account management. Our corporate accounts offer flexible payments, itemized invoices, priority booking, and multi-user access for seamless scheduling. With dedicated support and specialized partner rates, we ensure organized executive transportation.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        imageRight: true
    }
];

const ClientPartnerWhyChoose = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Premier Partner Advantage
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        When it comes to executive transportation, every detail matters. Whether you're arranging travel for high-profile clients, business partners, or corporate executives, the quality of their journey directly reflects your company's standards. At Bayou Black Cars, we go above and beyond to ensure that every ride is seamless, punctual, and professionally handled—giving your guests the VIP experience they deserve.
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

export default ClientPartnerWhyChoose;
