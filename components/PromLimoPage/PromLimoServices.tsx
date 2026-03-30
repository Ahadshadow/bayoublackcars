import React from 'react';
import Image from 'next/image';

const services = [
    {
        title: "Elite Chauffeur Protocol",
        desc: "Our highly trained, professional chauffeurs provide a first-class experience from the moment they arrive. Dressed in formal attire, they offer door-to-door service, ensuring a smooth and elegant journey. Parents can rest assured knowing that their teens are in safe, responsible hands, as all our chauffeurs undergo background checks, extensive training, and safety certifications.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Ensemble Logistics & Split Rides",
        desc: "We know prom is better when celebrated with friends! Our group booking services allow you to split the ride cost while enjoying a luxury experience together. Whether it’s a small friend group or a large party, we can accommodate your needs.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    },
    {
        title: "Bespoke Milestone Packages",
        desc: "Every prom night is unique, and we believe your transportation should be too. We offer tailored prom limo packages based on your preferences and schedule. Some of our most popular package options include: Basic Package: Pick-up, prom drop-off, and final drop-off at home.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    },
    {
        title: "Pre-Prom Panoramic Photo Stops",
        desc: "Prom is not just about the event itself—it’s about capturing the memories! We offer custom scenic stops at iconic locations for professional or personal photos before arriving at the venue. Some popular pre-prom photo destinations include: Millennium Park, Buckingham Fountain, and Navy Pier.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        title: "Secure Post-Prom Coordination",
        desc: "The excitement doesn’t end when the prom does! Many students head to after-parties, late-night diners, or special post-prom events. Bayou Black Cars provides safe and convenient after-prom transportation options, ensuring that everyone gets home safely and comfortably.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        title: "Red Carpet VIP Arrival",
        desc: "Want to make a grand entrance at your prom venue? We offer a red carpet rollout experience where you step out in true celebrity style. Our VIP service ensures you feel like a Hollywood star from the moment you leave your home to your arrival at the venue.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
    }
];

const PromLimoServices = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                    Our Comprehensive Prom Limo Services
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    Arrive in style with our luxurious prom limo services, featuring elegant rides, professional chauffeurs, and VIP amenities. Make your prom night unforgettable with a safe, stylish, and stress-free experience!
                </p>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="relative h-64 w-full overflow-hidden group cursor-pointer shadow-md rounded-lg">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            {/* Dark Overlay Always Present */}
                            <div className="absolute inset-0 bg-navy-primary/60 transition-colors duration-500 group-hover:bg-navy-primary/80"></div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center z-10 overflow-hidden">
                                <div className="transform translate-y-[40%] group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                                    <h3 className="text-[17px] md:text-[19px] font-taviraj font-bold text-pure-white mb-4 border-b border-gold pb-2 w-full uppercase leading-tight group-hover:mb-5 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[11px] md:text-[12px] text-pure-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-4 leading-relaxed uppercase max-w-[280px] mx-auto">
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

export default PromLimoServices;
