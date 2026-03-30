import React from 'react';
import { Plane, BadgeDollarSign, ShieldCheck } from 'lucide-react';

const highlights = [
    {
        title: "Seamless airport travel",
        description: "Relax with 1 hour of complimentary wait time and flight tracking.",
        icon: <Plane size={32} className="text-navy-primary" />
    },
    {
        title: "Competitive rates",
        description: "Know your fare upfront with fixed rates specifically for you and no surprises.",
        icon: <BadgeDollarSign size={32} className="text-navy-primary" />
    },
    {
        title: "Safety first",
        description: "Our drivers are vetted and highly trained. You can trust that your journey is with the safest chauffeurs.",
        icon: <ShieldCheck size={32} className="text-navy-primary" />
    }
];

const ServiceHighlightGrid = () => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F9FA] p-8 rounded-xl flex flex-col items-center text-center space-y-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="bg-white p-4 rounded-full shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-navy-primary text-[20px] font-bold font-taviraj tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceHighlightGrid;
