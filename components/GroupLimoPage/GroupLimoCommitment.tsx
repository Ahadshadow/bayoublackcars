import React from 'react';
import { Car, UserCheck, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

const commitments = [
    {
        icon: <Car size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Vehicle Cleanliness &\nComfort",
        desc: "Deep cleaned after every ride\nRegular inspections for safety and\nperformance"
    },
    {
        icon: <UserCheck size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Licensed, Professional\nChauffeurs",
        desc: "Trained for group logistics & safety\nCourteous, uniformed, GPS-\nequipped"
    },
    {
        icon: <Clock size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Timeliness &\nReliability",
        desc: "Chauffeurs arrive 15 minutes early\nComplimentary wait time for airport\npickups"
    },
    {
        icon: <ShieldCheck size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "No Surprise Charges",
        desc: "All-inclusive quotes with no hidden\nfees"
    },
    {
        icon: <PhoneCall size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "24/7 Customer\nSupport",
        desc: "Round-the-clock assistance for\nbooking or changes"
    }
];

const GroupLimoCommitment = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    Our Company's Commitment to Excellence
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto mb-16 leading-relaxed">
                    Every group deserves a seamless ride. That's why Bayou Black Cars upholds the highest standards for safety, professionalism, and comfort.
                </p>

                {/* Top Row: 3 items */}
                <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 sm:gap-x-12 mb-12">
                    {commitments.slice(0, 3).map((item, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-24px)] md:w-[calc(33.333%-32px)] flex flex-col items-center">
                            {item.icon}
                            <h3 className="text-[15px] font-bold font-taviraj text-navy-primary whitespace-pre-line leading-tight mb-3">
                                {item.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[11px] whitespace-pre-line leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: 2 items */}
                <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 sm:gap-x-24">
                    {commitments.slice(3, 5).map((item, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-48px)] md:w-[250px] flex flex-col items-center">
                            {item.icon}
                            <h3 className="text-[15px] font-bold font-taviraj text-navy-primary whitespace-pre-line leading-tight mb-3">
                                {item.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[11px] whitespace-pre-line leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupLimoCommitment;
