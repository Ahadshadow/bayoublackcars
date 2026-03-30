import React from 'react';
import { Briefcase, Users, Star } from 'lucide-react';

const packageData = [
    {
        icon: <Briefcase size={32} className="text-gold" />,
        title: "VIP Venue\nEnsembles",
        desc: "Perfect for corporate groups or gala outings. We provide executive-level transit that turns your concert arrival into a world-class event."
    },
    {
        icon: <Users size={32} className="text-gold" />,
        title: "Coordinated Group\nLogistics",
        desc: "Managing a large party? Our fleet solutions ensure your entire group stays together in total comfort, from the first pickup to the final encore."
    },
    {
        icon: <Star size={32} className="text-gold" />,
        title: "Personalized\nArtist Link Experience",
        desc: "Elevate your night with tailored interior amenities and signature red-carpet service, ensuring yours is the most distinguished arrival at any venue."
    }
];

const ConcertLimoPackages = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Group Packages & Corporate Entertainment Services
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto leading-relaxed">
                        We go beyond just transportation—we create memorable, luxury experiences tailored to your celebration.
                    </p>
                </div>

                {/* 3 Column Grid of Navy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packageData.map((pkg, index) => (
                        <div key={index} className="bg-navy-primary text-pure-white p-10 rounded-xl flex flex-col items-center shadow-lg border border-gold/20 hover:bg-navy-primary/95 transition-all">
                            <div className="mb-6 bg-white/10 p-4 rounded-full">
                                {pkg.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj whitespace-pre-line leading-tight mb-4 border-b border-white/20 pb-4 w-full uppercase">
                                {pkg.title}
                            </h3>
                            <p className="text-[12px] leading-relaxed text-pure-white/80 uppercase">
                                {pkg.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConcertLimoPackages;
