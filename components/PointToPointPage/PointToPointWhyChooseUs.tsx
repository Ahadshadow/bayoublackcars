import { Car, UserCheck, Coffee, Star, Clock } from 'lucide-react';

const features = [
    {
        icon: <Car size={48} className="text-gold" />,
        title: "Elite Vehicle Collection",
        description: "Our fleet presents a curated selection of premium vehicles for every requirement—from executive sedans for solo business trips to spacious SUVs for families and groups. Each car is maintained to the highest standards, offering a polished interior and modern features to ensure a superior travel atmosphere."
    },
    {
        icon: <UserCheck size={48} className="text-gold" />,
        title: "Expert Private Chauffeurs",
        description: "Every Bayou chauffeur is a dedicated professional committed to safety and hospitality. Beyond driving, they provide a discreet and attentive service, ensuring your route is efficient and your experience is pleasant from the moment they open your door."
    },
    {
        icon: <Coffee size={48} className="text-gold" />,
        title: "Bespoke Journey Planning",
        description: "We believe travel should be as unique as your destination. Our point-to-point service can be tailored with specific amenities, seating arrangements, and scheduling to match your personal or professional needs perfectly."
    },
    {
        icon: <Star size={48} className="text-gold" />,
        title: "Uncompromising Service Standards",
        description: "We sets a high bar for ground transportation. From the ease of booking to the final arrival, we focus on the small details that matter—cleanliness, punctuality, and proactive communication."
    },
    {
        icon: <Clock size={48} className="text-gold" />,
        title: "Round-the-Clock Support",
        description: "Travel happens at all hours, and we are always ready. Our 24/7 availability ensures that whether you have a pre-dawn flight or a late-night event, a reliable professional chauffeur is always just a reservation away."
    }
];

const PointToPointWhyChooseUs = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Why Choose Bayou for Private Transit?
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Whether you are a corporate leader or a private traveler, our bespoke service and meticulous attention to detail ensure every journey is refined, secure, and perfectly synchronized with your schedule.
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

export default PointToPointWhyChooseUs;
