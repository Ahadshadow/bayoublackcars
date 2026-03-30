import React from 'react';
import { Clock, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const reasons = [
    {
        icon: <Clock size={24} className="text-gold" />,
        title: "24/7 Availability",
        text: "Need a ride at any hour? Our professional chauffeurs are ready to serve you day and night."
    },
    {
        icon: <UserCheck size={24} className="text-gold" />,
        title: "Professional Chauffeurs",
        text: "Our experienced, background-checked drivers provide a safe, courteous, and seamless journey."
    },
    {
        icon: <Sparkles size={24} className="text-gold" />,
        title: "Clean & Luxury Fleet",
        text: "Travel in a meticulously maintained stretch limousine, featuring plush interiors, tinted windows, and premium amenities."
    },
    {
        icon: <CheckCircle2 size={24} className="text-gold" />,
        title: "On-Time Guarantee",
        text: "Punctuality is our priority. Whether it's an airport transfer or event pickup, we guarantee timely service."
    }
];

const CorporateTransfersWhyBook = () => {
    return (
        <section className="bg-[#f8f9fc] py-16 font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-taviraj text-navy-primary font-bold mb-4">
                        Why Book With Us?
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        We ensure a smooth, hassle-free airport black car service transfer experience for corporate travelers. Here's how our transportation solution works:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3 px-2">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                                {reason.icon}
                            </div>
                            <h3 className="text-[15px] font-bold font-taviraj text-navy-primary leading-tight">
                                {reason.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[12px] leading-relaxed">
                                {reason.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateTransfersWhyBook;
