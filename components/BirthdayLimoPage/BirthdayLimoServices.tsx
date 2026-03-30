import React from 'react';
import Image from 'next/image';

const birthdayServices = [
    {
        title: "Vibrant Nightlife Excursions",
        desc: "Celebrate your birthday by hitting the city's premier hotspots. Our professional chauffeurs provide a seamless door-to-door experience, ensuring your group stays together and focuses entirely on the festivities.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Elite Gala & Red Carpet Arrivals",
        desc: "Make a world-class entrance at your chosen venue. From sleek executive sedans to grand stretch limousines, we provide the perfect aesthetic for your milestone celebration.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Themed Milestone Packages",
        desc: "Whether it's a Sweet 16, a 21st, or a significant decade, we tailor our service with personalized touches that reflect the unique importance of your achievement.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Curated Culinary Tours",
        desc: "Coordinate a seamless evening across multiple dining destinations or tasting galleries. Our executive fleet ensures your group travels in absolute comfort between every stop.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Scenic Regional Getaways",
        desc: "Escape the city for a refined birthday retreat. Our professional chauffeurs manage the regional logistics while you relax in our executive-class interiors.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Signature Family Celebrations",
        desc: "Create lasting memories with your closest family. We provide reliable and dignified transit that prioritizes the comfort of every passenger, from children to elders.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    }
];

const BirthdayLimoServices = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    The Signature Birthday Experience
                </h2>
                <p className="text-luxury-text-muted text-[15px] md:text-[16px] max-w-3xl mx-auto mb-12 leading-relaxed">
                    Celebrate another year with a world-class journey. Bayou Black Cars provides bespoke transportation solutions tailored to the unique energy and style of your milestone event.
                </p>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {birthdayServices.map((service, index) => (
                        <div key={index} className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md group cursor-pointer">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark Overlay Always Present */}
                            <div className="absolute inset-0 bg-navy-primary/60 transition-colors duration-500 group-hover:bg-navy-primary/80"></div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center z-10 overflow-hidden">
                                <div className="transform translate-y-[45%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-[18px] md:text-[21px] font-taviraj font-bold text-pure-white mb-3 group-hover:mb-4 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-pure-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-4 leading-relaxed max-w-[280px]">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BirthdayLimoServices;
