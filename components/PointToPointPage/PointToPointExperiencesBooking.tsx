import React from 'react';
import { Check } from 'lucide-react';

const bookingSteps = [
    {
        number: "01",
        title: "Bespoke Reservation",
        details: "Define your exact journey requirements through our premium digital portal. Specify your vehicle class, itinerary, and any personalized amenities needed."
    },
    {
        number: "02",
        title: "Chauffeur Coordination",
        details: "Receive immediate confirmation and chauffeur details. Our elite team synchronizes with your schedule, monitoring traffic to ensure absolute punctuality."
    },
    {
        number: "03",
        title: "Premium Direct Transit",
        details: "Experience a seamless, door-to-door journey defined by comfort and discretion. Your professional chauffeur handles every detail until you arrive at your destination."
    }
];

const experiences = [
    {
        title: "The Ultimate Date Night Escape",
        intro: "Transform your evening into a cinematic experience with a private chauffeur dedicated to your itinerary.",
        bullets: [
            "Bespoke door-to-door transit in a meticulously detailed luxury sedan",
            "Effortless arrivals at the city's most exclusive dining destinations",
            "Chilled climate control and premium amenities for a serene atmosphere",
            "A seamless transition from dinner to cocktails without the distraction of traffic or parking"
        ]
    },
    {
        title: "Elite City Sightseeing",
        intro: "Rediscover the city from the comfort of a private lounge on wheels. Perfect for hosting VIP guests or exploring landmarks with absolute discretion.",
        bullets: [
            "Curated routes through architectural icons and historic districts",
            "Panoramic views from the quiet sanctuary of our premium SUVs",
            "The freedom to pause and explore at your own pace while your chauffeur waits",
            "Expert navigation that avoids the city's congestion for a smooth journey"
        ]
    },
    {
        title: "Glamorous Nightlife Transitions",
        intro: "The celebration begins the moment you enter the vehicle. Glide between the most vibrant venues with a dedicated chauffeur ensuring your night is as safe as it is stylish.",
        bullets: [
            "Coordinated logistics for group bar-hopping and nightclub tours",
            "A secure, reliable environment for you and your guests to enjoy the evening",
            "VIP curb-side drop-offs at the city's premier entertainment hubs"
        ]
    }
];

const PointToPointExperiencesBooking = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins relative">
            <div className="container-custom mx-auto px-4 max-w-7xl">

                {/* Header intro */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Elevating Every Destination
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        A Bayou Black Cars point-to-point transfer is more than a drive; it's a commitment to your comfort. Whether you're heading to a prestigious gala or simply need a direct, discreet ride across town, we turn every mile into a premium experience.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column - Experiences List */}
                    <div className="w-full lg:w-[55%] flex flex-col space-y-12">
                        {experiences.map((exp, expIndex) => (
                            <div key={expIndex}>
                                <h3 className="text-2xl font-taviraj text-navy-primary font-bold mb-4">
                                    {exp.title}
                                </h3>
                                <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mb-6">
                                    {exp.intro}
                                </p>
                                <ul className="space-y-4">
                                    {exp.bullets.map((bullet, bIndex) => (
                                        <li key={bIndex} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0">
                                                <Check size={16} className="text-gold" />
                                            </div>
                                            <span className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
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
                                    title="Book Point to Point Service"
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

export default PointToPointExperiencesBooking;
