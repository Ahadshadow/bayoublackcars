import { Car, UserCheck, Coffee, Clock, Star } from 'lucide-react';

const features = [
    {
        icon: <Car size={48} className="text-gold" />,
        title: "Premium Vehicle Selection",
        description: "Our handpicked fleet includes refined sedans, spacious SUVs, and elegant stretch limousines—all detailed to perfection. Each vehicle offers high-end features such as soft leather seating, tinted privacy glass, climate control, and in-ride entertainment—ensuring every trip is as enjoyable as the destination."
    },
    {
        icon: <UserCheck size={48} className="text-gold" />,
        title: "Chauffeurs Who Redefine Professionalism",
        description: "Our chauffeurs are not just drivers—they're trained hospitality professionals. Fully vetted and road-tested, they combine discretion with courtesy, and punctuality with a deep understanding of local routes. You'll always be in capable and respectful hands."
    },
    {
        icon: <Coffee size={48} className="text-gold" />,
        title: "Travel, Your Way",
        description: "Your ride should reflect your preferences. Need a specific car model? Special pickup instructions? A certain playlist or temperature setting? We customize every detail so your journey feels personal, thoughtful, and seamless."
    },
    {
        icon: <Clock size={48} className="text-gold" />,
        title: "Service That Never Sleeps",
        description: "No matter the hour, we're ready to drive. Our team operates 24/7, including holidays, because convenience means nothing if it's not on your schedule. Early flight? Late-night event? We've got you covered."
    },
    {
        icon: <Star size={48} className="text-gold" />,
        title: "A Standard of Excellence",
        description: "From booking to drop-off, we hold ourselves to the highest standards. Expect fast confirmations, real-time updates, pristine vehicles, and attentive customer care. We obsess over the small things so you don't have to."
    }
];

const RoundTripDifferences = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        What Sets Bayou Apart
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        When you ride with Bayou Black Cars, you're not just booking a car—you're investing in an elevated travel experience defined by luxury, dependability, and personalized service. Every aspect of our operation, from the vehicles we offer to the professionalism of our chauffeurs, is built around your comfort, safety, and satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 justify-center">
                    {/* Top Row: 3 Items */}
                    {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 px-4 group">
                            <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-snug">
                                {feature.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                    {/* Bottom Row: 2 Items Centered */}
                    <div className="lg:col-span-3 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {features.slice(3, 5).map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-4 px-4 group">
                                <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoundTripDifferences;
