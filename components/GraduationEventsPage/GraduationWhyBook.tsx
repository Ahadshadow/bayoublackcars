import React from 'react';
import { Clock, UserCheck, ShieldCheck, CheckCircle } from 'lucide-react';

const whyBookData = [
    {
        icon: <Clock size={32} className="text-gold" />,
        title: "Punctual Celebration\nCoordination",
        desc: "We prioritize your commencement schedule, ensuring punctual pickups for graduates and family members alike."
    },
    {
        icon: <UserCheck size={32} className="text-gold" />,
        title: "Elite Chauffeur\nWhite-Glove Service",
        desc: "Our professional chauffeurs provide a dignified and celebrated atmosphere, acting as personal assistants on your big day."
    },
    {
        icon: <ShieldCheck size={32} className="text-gold" />,
        title: "Executive Fleet &\nMilestone Comfort",
        desc: "Ceremonies deserve the best. Choose from our pristine selection of luxury sedans and stretch limousines featuring premium amenities."
    },
    {
        icon: <CheckCircle size={32} className="text-gold" />,
        title: "Seamless Arrival\nGuarantee",
        desc: "Avoid the chaos of venue parking. We provide direct entrance access, ensuring your family arrives relaxed and ready to celebrate."
    }
];

const GraduationWhyBook = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Why Book With Us?
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    At Bayou Black Cars, we redefine luxury transportation with our top-tier stretch limousine service. We ensure a first-class travel experience with:
                </p>

                {/* 4 Cards Row */}
                <div className="flex flex-wrap justify-center gap-6">
                    {whyBookData.map((item, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-[#c99736] text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border border-gold/50">
                            <div className="bg-pure-white/10 p-3 rounded-full mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-[15px] font-bold font-taviraj leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full uppercase">
                                {item.title}
                            </h3>
                            <p className="text-[12px] leading-relaxed text-pure-white/90">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GraduationWhyBook;
