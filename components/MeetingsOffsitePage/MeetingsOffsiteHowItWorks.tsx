import React from 'react';
import { UserCircle, Settings, FastForward, Lock, Coffee, Map } from 'lucide-react';

const steps = [
    {
        title: "Premium Chauffeur Service for Business Meetings",
        icon: <UserCircle size={28} className="text-gold" />,
        description: "Experience luxury travel with our highly trained chauffeurs who prioritize professionalism, discretion, and efficiency. Our chauffeurs arrive promptly, assisting with route planning, luggage handling, and any special requests to provide a seamless travel experience."
    },
    {
        title: "Flexible & Scalable Corporate Travel Solutions",
        icon: <Settings size={28} className="text-gold" />,
        description: "Whether you need a single black car for an executive VIP or a fleet for an entire team, we offer customized travel solutions that adapt to your business size and requirements. Enjoy point-to-point service, hourly bookings, and multi-stop rides for total flexibility."
    },
    {
        title: "On-Time Guarantee & Real-Time Tracking",
        icon: <FastForward size={28} className="text-gold" />,
        description: "Never worry about delays—we ensure punctual pickups and drop-offs with real-time GPS tracking and live updates. Our dedicated support team actively monitors routes and traffic conditions to optimize travel time for your convenience."
    },
    {
        title: "Private & Secure Transportation for Confidential Meetings",
        icon: <Lock size={28} className="text-gold" />,
        description: "We understand the importance of confidentiality in corporate travel. Our vehicles feature tinted windows, soundproof interiors, and professional chauffeurs trained in discretion, ensuring a secure and private environment for discussions."
    },
    {
        title: "Comfort & Productivity On the Go",
        icon: <Coffee size={28} className="text-gold" />,
        description: "Turn travel time into productive time with WiFi-equipped vehicles, plush leather seating, climate control, and complimentary refreshments. Whether you need to prepare for a meeting or relax after an event, our vehicles offer the perfect setting."
    },
    {
        title: "Custom Routes & Multi-Stop Convenience",
        icon: <Map size={28} className="text-gold" />,
        description: "Hosting an offsite meeting at multiple venues? Our service includes custom routes with multiple stops, allowing your team to move effortlessly from one location to another without any logistical hassle."
    }
];

const MeetingsOffsiteHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Enterprise Offsite Logistics
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Seamless, punctual, and luxurious – Bayou Black Cars offers a hassle-free corporate event transportation experience designed for business executives, event planners, and corporate groups. Whether you're coordinating transportation for a large corporate function or an exclusive VIP event, our service ensures smooth logistics and impeccable service from start to finish.
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

export default MeetingsOffsiteHowItWorks;
