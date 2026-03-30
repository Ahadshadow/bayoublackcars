import React from 'react';
import { Plane, CalendarDays, Briefcase, Clock, Map, Music } from 'lucide-react';

const occasions = [
    {
        title: "Effortless Airport Transfers",
        icon: <Plane size={24} className="text-gold" />,
        description: "Traveling to and from O'Hare, Midway, or private FBOs has never been easier. Avoid parking stress and unreliable ride-shares—our chauffeurs ensure on-time pickups, flight monitoring, and smooth drop-offs. Book once and we'll handle both directions."
    },
    {
        title: "Special Events",
        icon: <CalendarDays size={24} className="text-gold" />,
        description: "Make your entrance and exit memorable. Whether it's a wedding, anniversary, gala, or VIP party—our round trip service ensures your luxurious ride is waiting when you're ready to head back."
    },
    {
        title: "Corporate Meetings",
        icon: <Briefcase size={24} className="text-gold" />,
        description: "Arrive and return in professional style. Our vehicles are equipped with Wi-Fi, power outlets, and quiet interiors—perfect for executives and professionals who value productivity and peace."
    },
    {
        title: "Flexible Hourly Service",
        icon: <Clock size={24} className="text-gold" />,
        description: "Need the freedom to come and go as you please? Our hourly round-trip limo service gives you full control over your schedule with the added luxury of a professional chauffeur."
    },
    {
        title: "Explore Chicago in Style",
        icon: <Map size={24} className="text-gold" />,
        description: "From the Magnificent Mile to the Theater District and lakefront sights, our chauffeurs know the best routes to every iconic spot. Book a round trip and explore Chicago without ever needing to worry about traffic, timing, or parking."
    },
    {
        title: "Concerts & Sporting Events",
        icon: <Music size={24} className="text-gold" />,
        description: "Forget crowded parking lots and post-event traffic jams. Travel in comfort to and from Chicago's top venues with our spacious SUVs and sedans—ready and waiting to whisk you home after the excitement."
    }
];

const RoundTripOccasions = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Perfect Occasions for Round Trip Service
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto leading-relaxed">
                        Our diverse range of black car services caters to business executives, travelers, VIPs, and anyone who values luxury and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {occasions.map((occasion, index) => (
                        <div key={index} className="border border-navy-primary/20 border-dashed rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-start space-y-4">
                            <div className="bg-navy-primary/5 p-3 rounded-lg mb-2 group-hover:bg-gold/10 transition-colors">
                                {occasion.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                {occasion.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {occasion.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoundTripOccasions;
