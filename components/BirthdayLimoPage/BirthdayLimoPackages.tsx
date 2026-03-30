import React from 'react';
import { Clock, Calendar, PartyPopper, Users } from 'lucide-react';

const packages = [
    {
        icon: <Clock size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Flexible Hourly\nCelebration Rental",
        desc: "Ideal for surprise pickups, custom dinner routes, or elegant transitions between birthday destinations."
    },
    {
        icon: <Calendar size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "All-Day Milestone\nSuites",
        desc: "Comprehensive service covering multiple stops, ensuring your group stays together and celebrates in total safety and style."
    },
    {
        icon: <PartyPopper size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Bespoke Themed\nInternal Decor",
        desc: "Tailor the atmosphere of your vehicle with custom lighting, coordinated refreshements, and personalized birthday decor syncronized to your theme."
    },
    {
        icon: <Users size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />,
        title: "Priority Large\nGroup Coordination",
        desc: "Scalable fleet solutions with tailored logistics for anniversary parties, large family gatherings, and VIP groups."
    }
];

const BirthdayLimoPackages = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold md:w-1/3 text-right">
                        Milestone Birthday\nPackages & Suites
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm md:w-2/3 text-left leading-relaxed">
                        Transform your celebration with Bayou's exclusive birthday suites. Whether honoring a debut milestone, a gala celebration, or a private family gathering, we provide the luxury and safety you deserve.
                    </p>
                </div>

                {/* 4 Cards Row Layout */}
                <div className="flex flex-wrap justify-center gap-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-navy-primary text-pure-white p-8 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md"
                        >
                            <div className="bg-white/10 p-4 rounded-full mb-2">
                                {pkg.icon}
                            </div>
                            <h3 className="text-[15px] font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-pure-white/20 pb-3 w-full">
                                {pkg.title}
                            </h3>
                            <p className="text-[12px] whitespace-pre-line leading-relaxed text-pure-white/80">
                                {pkg.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BirthdayLimoPackages;
