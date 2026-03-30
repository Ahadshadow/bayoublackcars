import { Briefcase, Plane, Mic2, Gem, Wine } from 'lucide-react';

const occasions = [
    {
        icon: <Briefcase className="w-8 h-8 text-gold" />,
        title: "Executive Business Transit",
        description: "Seamless door-to-door transport for corporate leaders, ensuring you arrive at your meetings focused and on time."
    },
    {
        icon: <Plane className="w-8 h-8 text-gold" />,
        title: "Premium Airport Punctuality",
        description: "Reliable transfers to and from all regional airports, featuring live flight tracking and professional meet-and-greet services."
    },
    {
        icon: <Mic2 className="w-8 h-8 text-gold" />,
        title: "Exclusive Event Access",
        description: "Arrive in style at galas, concerts, or sporting events, skipping the parking stress with a dedicated private chauffeur."
    },
    {
        icon: <Gem className="w-8 h-8 text-gold" />,
        title: "Bespoke Personal Travel",
        description: "Customized journeys for dining, shopping, or private outings, tailored to your specific schedule and luxury preferences."
    },
    {
        title: "Refined Nights Out",
        icon: <Wine className="w-8 h-8 text-gold" />,
        description: "Enjoy your evening without worrying about parking or navigation. Our chauffeurs ensure a safe, sophisticated ride all night long."
    }
];

const PointToPointOccasions = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Perfect Occasions for Point-to-Point Service
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto leading-relaxed">
                        Ideal for airport transfers or business meetings, point-to-point service ensures timely, direct travel. Perfect when you need reliable, hassle-free transportation between two fixed locations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {occasions.map((occasion, index) => (
                        <div key={index} className="border border-navy-primary/20 border-dashed rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-start space-y-4">
                            <div className="bg-navy-primary/5 p-3 rounded-lg mb-2 group-hover:bg-gold/10 transition-colors">
                                {occasion.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                {occasion.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {occasion.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PointToPointOccasions;
