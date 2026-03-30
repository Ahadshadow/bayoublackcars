import React from 'react';
import { Briefcase, Plane, GlassWater, Landmark, Clock } from 'lucide-react';

const serviceTypes = [
    {
        title: "Corporate Chauffeur Service",
        icon: <Briefcase size={28} className="text-gold group-hover:-translate-y-1 transition-transform" />,
        description: "For business executives, punctuality and professionalism are non-negotiable. Our executive black car service ensures smooth, reliable transportation for: Board meetings, client visits, and corporate events. Roadshows, conferences, and business travel. Hourly chauffeur service for multiple stops. Our discreet, professional chauffeurs handle every detail, so you can focus on your business while enjoying a first-class travel experience."
    },
    {
        title: "Airport Chauffeur Service",
        icon: <Plane size={28} className="text-gold group-hover:-translate-y-1 transition-transform" />,
        description: "Bypass the complexities of airport transit with our elite chauffeur service, available at MSY, O'Hare, Midway, and all major regional terminals. We provide personalized meet-and-greet support, real-time flight monitoring, and seamless door-to-door transitions for business and leisure travelers who demand absolute reliability."
    },
    {
        title: "Luxury Event Chauffeur Service",
        icon: <GlassWater size={28} className="text-gold group-hover:-translate-y-1 transition-transform" />,
        description: "Make your special events truly memorable with a chauffeur-driven luxury vehicle. Perfect for: Weddings & Anniversaries – Elegant arrivals in stretch limos or luxury sedans. Proms & Graduations – Safe, stylish, and unforgettable experiences. Concerts & Sports Events – Avoid parking and traffic hassles with VIP transportation. Night Out & Parties – Enjoy a night on the town with a private chauffeur."
    },
    {
        title: "Private Chauffeur for Tours & Leisure",
        icon: <Landmark size={28} className="text-gold group-hover:-translate-y-1 transition-transform" />,
        description: "Explore the most vibrant landmarks and hidden cultural gems of New Orleans, Chicago, or Houston in total comfort. Our private sightseeing excursions are fully bespoke, allowing you to design a custom itinerary while we manage the navigation and luxury logistics for your perfect day out."
    },
    {
        title: "Hourly & As-Directed Chauffeur Service",
        icon: <Clock size={28} className="text-gold group-hover:-translate-y-1 transition-transform" />,
        description: "Need flexibility? Our hourly chauffeur service gives you the convenience of a private driver for as long as you need. Perfect for shopping trips, multiple meetings, or unpredictable schedules. Stop anywhere at your convenience. Ultimate privacy, comfort, and professionalism."
    }
];

const ChauffeurServiceTypes = () => {
    return (
        <section className="py-16 md:py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Signature Chauffeur Solutions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-[14px] max-w-4xl mx-auto leading-relaxed">
                        At Bayou Black Cars, we take pride in delivering a premium chauffeur experience that prioritizes your comfort and total peace of mind. Our professional chauffeurs are more than just drivers; they are hospitality experts dedicated to ensuring your journey is as refined and efficient as possible. From executive hub-to-hub transfers to personalized local excursions, Bayou Black Cars is your partner for elite transportation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {/* Top 3 Cards */}
                    {serviceTypes.slice(0, 3).map((service, index) => (
                        <div key={index} className="border border-navy-primary/20 rounded-2xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center space-y-4">
                            <div className="bg-navy-primary/5 p-4 rounded-full mb-2">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}

                    {/* Bottom 2 Cards Centered */}
                    <div className="lg:col-span-3 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        {serviceTypes.slice(3, 5).map((service, index) => (
                            <div key={index} className="border border-navy-primary/20 rounded-2xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center space-y-4">
                                <div className="bg-navy-primary/5 p-4 rounded-full mb-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChauffeurServiceTypes;
