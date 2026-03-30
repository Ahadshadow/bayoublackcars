import React from 'react';
import { ClipboardList, Car, UserCheck, Clock, CalendarCheck, MapPin } from 'lucide-react';

const steps = [
    {
        title: "Customized Event Transportation Plans",
        icon: <ClipboardList size={28} className="text-gold" />,
        description: "We work closely with event planners and corporate organizers to create tailored transportation solutions that meet your event's unique needs."
    },
    {
        title: "Premium Fleet for Executive Travel",
        icon: <Car size={28} className="text-gold" />,
        description: "Our luxury fleet includes executive sedans, SUVs, stretch limousines, and luxury vans, providing comfortable and elegant rides for corporate guests."
    },
    {
        title: "On-Time, Professional Chauffeurs",
        icon: <UserCheck size={28} className="text-gold" />,
        description: "Our highly trained, uniformed chauffeurs prioritize punctuality, discretion, and professionalism, ensuring a flawless transportation experience."
    },
    {
        title: "Punctuality & Real-Time Tracking", // It uses this exact title in the list for the multi-stop, though confusing with the icon title 6
        icon: <MapPin size={28} className="text-gold" />,
        description: "From hotel pickups to conference venues and after-event transfers, we offer flexible multi-stop itineraries for seamless corporate travel."
    },
    {
        title: "Effortless Scheduling & Priority Booking",
        icon: <CalendarCheck size={28} className="text-gold" />,
        description: "With our easy online booking system and dedicated corporate accounts, scheduling individual or group rides for your event is simple and efficient."
    },
    {
        title: "Reliable Service with Real-Time Tracking",
        icon: <Clock size={28} className="text-gold" />,
        description: "We use advanced GPS tracking and live updates to provide real-time ETA updates and ensure your executives arrive at their destinations promptly."
    }
];

const CorporateEventHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Managed Business Travel Logistics
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

export default CorporateEventHowItWorks;
