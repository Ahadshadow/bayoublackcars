import React from 'react';
import { CalendarCheck, Car, UserCheck, Clock, ShieldCheck, Headphones } from 'lucide-react';

const steps = [
    {
        title: "Effortless Booking & Scheduling",
        icon: <CalendarCheck size={28} className="text-gold" />,
        description: "Easily schedule a ride online, via phone, or through corporate accounts with priority reservations. We accommodate last-minute bookings and flexible scheduling for business needs."
    },
    {
        title: "Premium Black Car & Chauffeur Service",
        icon: <Car size={28} className="text-gold" />,
        description: "Your clients and partners travel in luxury black cars with spacious interiors, leather seating, and top-tier amenities—ensuring a first-class travel experience."
    },
    {
        title: "Professional Chauffeurs for Business-Class Rides",
        icon: <UserCheck size={28} className="text-gold" />,
        description: "Our highly trained, background-checked chauffeurs offer a discreet, courteous, and efficient ride experience—ideal for corporate guests, executives, and VIPs."
    },
    {
        title: "Punctuality & Real-Time Tracking",
        icon: <Clock size={28} className="text-gold" />,
        description: "We guarantee on-time arrivals and departures, utilizing real-time GPS tracking to ensure smooth transfers with no delays or missed appointments."
    },
    {
        title: "Private & Secure Business Travel",
        icon: <ShieldCheck size={28} className="text-gold" />,
        description: "Your business partners and clients enjoy discreet, private, and secure rides, allowing them to focus on work while we handle the road."
    },
    {
        title: "24/7 Availability for Corporate Clients",
        icon: <Headphones size={28} className="text-gold" />,
        description: "No matter when you arrive or leave, our 24-hour airport car service gives peace of mind to business travelers."
    }
];

const ClientPartnerHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Elite Guest Protocol
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        At Bayou Black Cars, we provide a seamless, professional, and luxurious travel experience for corporate clients, executives, and business partners. Our dedicated chauffeur service ensures that your guests enjoy a stress-free ride with punctual pickups, premium comfort, and absolute discretion.
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

export default ClientPartnerHowItWorks;
