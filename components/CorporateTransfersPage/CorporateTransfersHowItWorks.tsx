import React from 'react';
import { CalendarCheck, Plane, UserCheck, Car, Map, Clock } from 'lucide-react';

const steps = [
    {
        title: "Easy Online & Corporate Account Booking",
        icon: <CalendarCheck size={28} className="text-gold" />,
        description: "Business travelers can book instantly online or set up a corporate account for streamlined, recurring reservations with priority service."
    },
    {
        title: "Flight Tracking for Real-Time Adjustments",
        icon: <Plane size={28} className="text-gold" />,
        description: "We keep track of flight schedules in real time. This way, your professional chauffeur is ready when you arrive, even if your flight is early or late."
    },
    {
        title: "Professional Chauffeurs with Meet & Greet Service",
        icon: <UserCheck size={28} className="text-gold" />,
        description: "Your professional chauffeur will be waiting at baggage claim or curbside. They will hold a sign with your name for a VIP airport transportation welcome."
    },
    {
        title: "Executive Fleet for Maximum Comfort & Productivity",
        icon: <Car size={28} className="text-gold" />,
        description: "Pick from a luxury sedan, SUVs, and private airport limo service. Each vehicle has Wi-Fi, bottled water, and state-of-the-art privacy features for your business meetings and comfort."
    },
    {
        title: "Direct, Non-Stop Transfers to Any Destination",
        icon: <Map size={28} className="text-gold" />,
        description: "We offer a private car service that picks you up and drops you off. We take you to hotels, offices, and corporate venues. You can count on us for no delays."
    },
    {
        title: "24/7 Availability for Corporate Clients",
        icon: <Clock size={28} className="text-gold" />,
        description: "No matter when you arrive or leave, our 24-hour airport car service gives peace of mind to business travelers."
    }
];

const CorporateTransfersHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Enterprise Transit Logistics
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Bayou Black Cars delivers a seamless, high-end airport car service experience for global business travelers. Here's how our elite transportation solution works:
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

export default CorporateTransfersHowItWorks;
