import React from 'react';
import { Clock, CalendarDays, Plane, Users } from 'lucide-react';

const packages = [
    {
        title: "Hourly Processional Rental",
        icon: <Clock size={40} className="text-gold mb-4" strokeWidth={1.5} />,
        desc: "A focused and elegant solution for short-distance transitions or single-venue ceremonies."
    },
    {
        title: "Comprehensive Celebration Suite",
        icon: <CalendarDays size={40} className="text-gold mb-4" strokeWidth={1.5} />,
        desc: "All-day elite support covering multiple locations, from early preparations to the final reception departure."
    },
    {
        title: "Honeymoon Departure Transit",
        icon: <Plane size={40} className="text-gold mb-4" strokeWidth={1.5} />,
        desc: "Begin your honeymoon in luxury with our prioritized airport transit, featuring meet-and-greet service."
    },
    {
        title: "Bridal Party & Group Coordination",
        icon: <Users size={40} className="text-gold mb-4" strokeWidth={1.5} />,
        desc: "Scalable fleet solutions with tailored rates for transporting family, bridal parties, and VIP guests."
    }
];

const WeddingLimoPackages = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Special Wedding Packages & Offers
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    From intimate ceremonies to grand celebrations, our tailored wedding limo packages ensure a seamless, elegant, and stress-free experience, including:
                </p>

                {/* 2x2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="flex flex-col items-center bg-navy-primary/5 p-8 rounded-xl border border-transparent hover:border-gold/50 transition-all duration-300">
                            {pkg.icon}
                            <h3 className="text-xl font-bold font-taviraj text-navy-primary mb-3">
                                {pkg.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {pkg.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingLimoPackages;
