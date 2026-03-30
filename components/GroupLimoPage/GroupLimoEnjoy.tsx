import React from 'react';
import Image from 'next/image';

const enjoyBlocks = [
    {
        title: "Luxury Metropolitan Excursions",
        content: "Experience the city's iconic landmarks and panoramic views from the refined sanctuary of our luxury fleet. Our professional chauffeurs navigate curated routes, allowing your group to focus entirely on shared moments and celebration without the logistical friction of urban transit or parking.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        imageRight: true
    },
    {
        title: "Elite Social Transit & Gala Nights",
        content: "Turn your evening into a world-class event with Bayou's group transit solutions. We provide sophisticated logistics for gallery openings, gala dinners, and social excursions, ensuring every member of your party arrives in coordinated style and total comfort.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        imageRight: false
    },
    {
        title: "Scenic Regional Wine & Vineyard Tours",
        content: "Our executive fleet provides the ideal environment for regional vineyard explorations. Enjoy a safe, seamless, and luxurious journey through the countryside while our team handles the coordination of multiple stops and scenic routes.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        imageRight: true
    }
];

const GroupLimoEnjoy = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Elevate Your Group Experience with Bayou
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        A Bayou transit experience turns an ordinary group outing into a coordinated world-class event. Here are a few ways we specialize in making your group travel safe and sophisticated.
                    </p>
                </div>

                <div className="flex flex-col space-y-16 mt-12">
                    {enjoyBlocks.map((block, index) => (
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
                                        className="object-contain p-4"
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

export default GroupLimoEnjoy;
