"use client";

import React from 'react';
import {
    LocateFixed,
    UserRoundCheck,
    CarFront,
    ShieldCheck,
    Clock,
    CalendarCheck,
    DollarSign,
    MapPin,
    UserPlus
} from 'lucide-react';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface FeaturesGridProps {
    title?: string;
    features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
    {
        title: "Instant Flight Monitoring",
        description: "We actively track your arrival to ensure your chauffeur is waiting, regardless of delays.",
        icon: <LocateFixed size={32} className="text-gold" />
    },
    {
        title: "Personalized Terminal Greeting",
        description: "Opt for a warm welcome inside the terminal or a swift curbside departure.",
        icon: <UserRoundCheck size={32} className="text-gold" />
    },
    {
        title: "Premium Vehicle Selection",
        description: "Choose from our high-end sedans, SUVs, and limos tailored for any group size.",
        icon: <CarFront size={32} className="text-gold" />
    },
    {
        title: "Elite Chauffeur Team",
        description: "Our certified drivers prioritize your safety, comfort, and precise schedule.",
        icon: <ShieldCheck size={32} className="text-gold" />
    },
    {
        title: "Included Waiting Period",
        description: "We provide a 60-minute grace period at the airport for a relaxed arrival experience.",
        icon: <Clock size={32} className="text-gold" />
    },
    {
        title: "Always On Standby",
        description: "Our services are available day and night to meet your travel requirements 24/7.",
        icon: <CalendarCheck size={32} className="text-gold" />
    }
];

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
    title = "Experience the Exclusive Benefits of Our Luxury Services",
    features = defaultFeatures
}) => {
    return (
        <section className="bg-navy-primary py-16 md:py-20">
            <div className="container-custom px-4 text-center">
                <h2 className="text-[28px] md:text-[40px] font-bold text-white font-taviraj mb-4 tracking-tight">
                    {title}
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 border border-gold/30 rounded-xl flex flex-col items-center text-center space-y-4 hover:border-gold transition-all duration-300 group"
                        >
                            <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-pure-white text-[20px] md:text-[22px] font-bold font-taviraj">
                                {feature.title}
                            </h3>
                            <p className="text-pure-white/70 text-[14px] leading-[1.6]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
