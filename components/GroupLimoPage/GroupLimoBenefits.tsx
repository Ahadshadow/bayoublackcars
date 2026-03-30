import React from 'react';
import { Users, Briefcase, Plane, GlassWater, Sparkles } from 'lucide-react';

const benefits = [
    {
        icon: <Users size={28} className="text-gold" />,
        title: "Coordinated Group\nUnity & Style",
        text: "Planning a major outing? Whether for milestones, gala events, or team celebrations, Bayou ensures your entire group travels together in a sophisticated, professionally-chauffeured environment."
    },
    {
        icon: <Briefcase size={28} className="text-gold" />,
        title: "Executive Presence for\nColleagues & Clients",
        text: "Make a world-class impression. Our executive fleet provides a refined environment that speaks to our commitment to absolute punctuality, professional protocol, and polished service."
    },
    {
        icon: <Plane size={28} className="text-gold" />,
        title: "Seamless High-Capacity\nAirport Transfers",
        text: "Bypass the friction of multiple bookings and disjointed arrivals. Bayou provides coordinated group transfers to all regional and private terminals, ensuring every member of your party arrives on time."
    },
    {
        icon: <GlassWater size={28} className="text-gold" />,
        title: "Safe & Sophisticated\nSocial Excursions",
        text: "Our luxury fleet offers the ideal combination of space, security, and premium amenities. Focus entirely on the celebration while we provide safe, expert navigation and absolute comfort for your whole crew."
    },
    {
        icon: <Sparkles size={28} className="text-gold" />,
        title: "Absolute VIP\nProtocol",
        text: "From signature red-carpet arrivals to personalized on-board amenities, your group receives elite treatment. Our dedicated chauffeurs manage every logistical detail so you can relax and focus on the journey."
    }
];

const GroupLimoBenefits = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Bayou Black Cars Group Advantage
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto leading-relaxed">
                        Luxury group transportation isn't just about getting from one point to another — it's about the experience. From business to leisure, Bayou Black Cars limousine group service ensures coordination, comfort, and a touch of class for every passenger.
                    </p>
                </div>

                {/* Grid matching the specific screenshot layout (3 top, 2 bottom) */}
                <div className="flex flex-wrap justify-center gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] border border-navy-primary/20 border-dashed rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-start space-y-4"
                        >
                            <div className="bg-navy-primary/5 p-3 rounded-lg mb-2 group-hover:bg-gold/10 transition-colors">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupLimoBenefits;
