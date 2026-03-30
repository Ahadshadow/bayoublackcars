import React from 'react';
import Image from 'next/image';

const reasonBlocks = [
    {
        title: "Executive-Grade Chauffeurs for Business Professionals",
        content: "Bayou delivers a seamless travel environment for industry leaders. Our chauffeurs are experts in professional etiquette, ensuring discretion, reliability, and precision. Through advanced route planning and live tracking, we guarantee your team arrives focused and exactly on schedule.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: true
    },
    {
        title: "Luxurious & Productivity-Optimized Travel Environment",
        content: "Our corporate vehicles are optimized for professional productivity. Featuring executive comforts, integrated WiFi, and power points, Bayou allows your team to remain productive in transit. Every mile is designed for focus, relaxation, and business readiness.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: false
    },
    {
        title: "Reliable Group Coordination & Event Logistics",
        content: "We simplify group travel for enterprise partners with scalable fleet solutions and expert logistics coordination. Whether managing executive retreats or large-scale conference shuttles, Bayou delivers synchronized and professional transport for your entire organization.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        imageRight: true
    }
];

const MeetingsOffsiteWhyChoose = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Corporate Partner Advantage
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        When it comes to corporate meetings and offsite event transportation, reliability, professionalism, and luxury are essential. Bayou Black Cars is the premier black car and chauffeur service, providing business professionals with a seamless, high-end travel experience. Whether you're organizing a board meeting, corporate retreat, training session, or offsite networking event, we ensure timely arrivals, absolute discretion, and unparalleled comfort.
                        <br /><br />
                        With years of experience in executive transportation, our service is tailored to meet the specific needs of corporate clients. Our dedicated chauffeurs and state-of-the-art luxury fleet allow business leaders to travel stress-free, maintain productivity, and arrive at every event fully prepared and relaxed.
                        <br /><br />
                        Here's what makes Bayou Black Cars the preferred choice for corporate meeting and offsite event transportation:
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
                                        className="object-contain p-6"
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

export default MeetingsOffsiteWhyChoose;
