import React from 'react';
import { Car, CheckSquare, UserCheck, ShieldCheck } from 'lucide-react';

const howItWorksData = [
    {
        icon: <Car size={36} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Unmatched Luxury &\nComfort",
        desc: "Spacious leather seating, LED\nmood lighting, and premium\nsound system. Options for\nchampagne service, mini bar,\nand entertainment screens.\nArrive like a celebrity with\ntinted windows and VIP\ntreatment."
    },
    {
        icon: <CheckSquare size={36} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Flexible & Customizable\nPackages",
        desc: "Choose from hourly rentals,\npoint-to-point service, or full-\nday packages. Custom decor.\nred carpet service, or any\nspecial requests\naccommodated. Group\npackages available for friends\n& family celebrations."
    },
    {
        icon: <UserCheck size={36} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Dedicated Professional\nChauffeurs",
        desc: "Our professional chauffeur will\nmeet you at the agreed\nlocation right on schedule,\nproperly dressed to give you a\nfeel of style and class, while\nensuring you have a smooth\nride. With our VIP birthday\nlimos. Your birthday\nexperience will be luxurious,\nsafe, and stress-free\nthroughout."
    },
    {
        icon: <ShieldCheck size={36} className="text-pure-white mb-4" strokeWidth={1.5} />,
        title: "Safety & Reliability\nGuarantee",
        desc: "Background-checked,\nprofessional chauffeurs for a\nstress-free ride. On-time\npickups & drop-offs so you\ncan enjoy every moment of\nyour birthday. Sanitized, well-\nmaintained vehicles for a safe,\npristine experience."
    }
];

const BirthdayLimoHowItWorks = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                    How Our Birthday Limo Service Works
                </h2>
                <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
                    From the time you book a ride to the latter part of your celebration, our birthday limo chauffeur service will take care of everything. And enhance the celebration to make it effortless and luxurious. Just book the ride, and our proficient chauffeur will be at your doorstep on time. It will provide you with a streamlined experience. Our party bus rentals include premium features to keep all passengers entertained throughout the trip. Regardless of whether you're attending a party venue. We take pride in delivering exceptional birthday experiences with unmatched luxury transportation and customer service.
                </p>

                {/* 4 Cards Row Layout */}
                <div className="flex flex-wrap justify-center gap-6">
                    {howItWorksData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-gold text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-gold/50"
                        >
                            <div className="bg-navy-primary/10 p-3 rounded-full mb-2">
                                {item.icon}
                            </div>
                            <h3 className="text-[14px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full">
                                {item.title}
                            </h3>
                            <p className="text-[11px] whitespace-pre-line leading-relaxed text-pure-white/90">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BirthdayLimoHowItWorks;
