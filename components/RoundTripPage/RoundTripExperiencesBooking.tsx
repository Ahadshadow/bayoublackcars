import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

const experiences = [
    {
        title: "Bespoke Sightseeing Tours",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        bullets: [
            "Consistent vehicle and chauffeur throughout your itinerary",
            "Seamless logistics—focus entirely on your milestones",
            "Personalized touches: surprise amenities upon request",
            "Experience the journey as a world-class destination"
        ]
    },
    {
        title: "Weddings, Proms & Milestones",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        bullets: [
            "Meticulous arrival and departure synchronization",
            "Guaranteed punctuality for brides, grooms, and graduates",
            "Absolute professional protocol for your celebratory transit"
        ]
    },
    {
        title: "Elite Events & Urban Nightlife",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        bullets: [
            "Bypass regional logistics and urban transit constraints",
            "Scheduled chauffeur coordination at every venue stop",
            "Secure, premium return transport available at your command"
        ]
    }
];

const RoundTripExperiencesBooking = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins relative">
            <div className="container-custom mx-auto px-4 max-w-7xl">

                {/* Header intro */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        How to Enjoy a Round Trip Limo with Your Loved Ones
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Turn your two-way trip into a luxury experience you'll remember. Whether it's a romantic night, sightseeing tour, or event day out—travel there and back in comfort, safety, and style.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column - Experiences List & Images */}
                    <div className="w-full lg:w-[55%] flex flex-col space-y-12">
                        {experiences.map((exp, expIndex) => (
                            <div key={expIndex} className="flex flex-col sm:flex-row gap-6 items-start">
                                {/* Text Content */}
                                <div className="sm:w-1/2">
                                    <h3 className="text-2xl font-taviraj text-navy-primary font-bold mb-4">
                                        {exp.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <Check size={16} className="text-gold" />
                                                </div>
                                                <span className="text-luxury-text-muted text-[13px] leading-relaxed">
                                                    {bullet}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image Content */}
                                <div className="sm:w-1/2 relative h-48 sm:h-auto sm:min-h-[160px] w-full rounded-xl overflow-hidden shadow-md">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-contain p-4"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 25vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Booking System */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-32 relative z-10 hidden md:block">
                        <div className="bg-white rounded-xl shadow-2xl border border-navy-primary/10 relative overflow-hidden">
                            {/* Decorative Gold Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

                            <div className="text-center p-6 md:p-8 pb-0">
                                <h3 className="text-2xl font-taviraj text-navy-primary font-bold">Book Your Ride</h3>
                                <p className="text-luxury-text-muted text-xs mt-2">Experience seamless luxury transportation</p>
                            </div>

                            {/* Moovs iframe block mimicking existing form logic */}
                            <div className="moovs-container w-full h-[700px]">
                                <iframe
                                    src="https://customer.moovs.app/bayou-black-cars-llc/iframe"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Book Round Trip Service"
                                    className="bg-gray-50/50"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RoundTripExperiencesBooking;
