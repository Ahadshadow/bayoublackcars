import React from 'react';
import { CalendarCheck, MapPin, Armchair, ShieldCheck, UserCheck, Flag } from 'lucide-react';

const steps = [
    {
        title: "Elite Digital Reservation",
        icon: <CalendarCheck size={28} className="text-gold" />,
        description: "Coordinate your regional journey through our digital concierge. Specify your city-to-city route, vehicle requirements, and preferred departure window."
    },
    {
        title: "Advanced Route Logistics",
        icon: <MapPin size={28} className="text-gold" />,
        description: "Our dispatch team calculates the most efficient route and assigns an elite chauffeur, ensuring your long-distance transit is smooth and synchronized."
    },
    {
        title: "Luxury Intercity Comfort",
        icon: <Armchair size={28} className="text-gold" />,
        description: "Relax in executive comfort as we bridge the gap between cities. Arrive at your destination refreshed, having skipped the stress of regional flights or driving."
    }
];

const CityToCityHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Intercity Chauffeur Experience
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Traveling between cities should be seamless, comfortable, and stress-free. With Bayou Black Cars, you get a premium intercity transportation experience designed for efficiency, luxury, and reliability. Here's how our service works:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="border border-navy-primary/20 border-dashed rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-start space-y-4">
                            <div className="bg-navy-primary/5 p-3 rounded-lg mb-2 group-hover:bg-gold/10 transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                {step.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityToCityHowItWorks;
