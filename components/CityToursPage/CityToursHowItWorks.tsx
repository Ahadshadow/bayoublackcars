import React from 'react';
import { MapPin, UserCheck, Flag, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

const steps = [
    {
        title: "Bespoke Itinerary Planning",
        icon: <MapPin size={28} className="text-gold" />,
        description: "Collaborate with our travel experts to define your sightseeing priorities. Whether visiting historical landmarks or hidden gems, we customize every stop to your group's interests."
    },
    {
        title: "Elite Chauffeur Guidance",
        icon: <UserCheck size={28} className="text-gold" />,
        description: "Your professional chauffeur arrives in a meticulously maintained luxury vehicle. Experience the city's charm with a local expert who ensures both comfort and insightful navigation."
    },
    {
        title: "Immersive Sightseeing Journey",
        icon: <Flag size={28} className="text-gold" />,
        description: "Relax and enjoy the view as we navigate the city. Make spontaneous adjustments to your schedule and experience the best of the region without the stress of driving or parking."
    },
    {
        title: "Flexible Scheduling & Hassle-Free Experience",
        icon: <Clock size={28} className="text-gold" />,
        description: "Forget rigid tour schedules! Our private city tours let you explore at your own pace, making stops whenever you like. Whether you want a full-day experience or a quick city highlight tour, we cater to your preferences."
    },
    {
        title: "Enjoy a Luxurious & Comfortable Ride",
        icon: <ShieldCheck size={28} className="text-gold" />,
        description: "Relax in a spacious, climate-controlled cabin with Wi-Fi, bottled water, leather seating, and privacy features. Enjoy a stress-free journey while we handle the traffic and parking."
    },
    {
        title: "Effortless Booking & 24/7 Customer Support",
        icon: <HeartHandshake size={28} className="text-gold" />,
        description: "Book online, via phone, or email. Our concierge team is available 24/7 to assist with last-minute requests, custom itineraries, and special arrangements."
    }
];

const CityToursHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Bespoke Sightseeing Logistics
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Bayou Black Cars's City Tours are designed to provide a stress-free, comfortable, and immersive experience. Here's how our elite logistics flow:
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

export default CityToursHowItWorks;
