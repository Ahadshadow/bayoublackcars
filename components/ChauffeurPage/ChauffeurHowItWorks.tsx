import { Calendar, Car, UserCheck, Coffee, Clock } from 'lucide-react';

const steps = [
    {
        icon: <Calendar size={48} className="text-gold" />,
        title: "Effortless Booking Process",
        description: "Securing your professional chauffeur is simple. Use our streamlined digital reservation system or speak with our 24/7 support team. Simply provide your schedule and vehicle preference, and we handle the routing and logistics for you."
    },
    {
        icon: <Car size={48} className="text-gold" />,
        title: "Choose Your Luxury Ride",
        description: "Browse our expansive collection of premium vehicles, including executive sedans, spacious SUVs, and corporate Sprinters. We ensure the perfect vehicle matches your specific travel requirements and group size."
    },
    {
        icon: <UserCheck size={48} className="text-gold" />,
        title: "Dedicated Service Professional",
        description: "Your chauffeur will arrive on time, impeccably presented and ready to assist. Our team members undergo rigorous vetting and training to provide a safe, efficient, and highly professional experience throughout your journey."
    },
    {
        icon: <Coffee size={48} className="text-gold" />,
        title: "Relax in Sophisticated Comfort",
        description: "Once inside, you can focus on your work or simply enjoy the ride. Our vehicles offer a quiet, climate-controlled environment with modern amenities, allowing for a productive and stress-free travel experience."
    },
    {
        icon: <Clock size={48} className="text-gold" />,
        title: "Punctual Delivery and Logistics",
        description: "We prioritize your time above all else. Our team monitors traffic and flight statuses in real-time, choosing the most efficient paths to ensure you arrive at your destination refreshed and exactly on schedule."
    }
];

const ChauffeurHowItWorks = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        The Bayou Black Cars Experience
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-5xl mx-auto leading-relaxed">
                        With Bayou Black Cars's luxury chauffeur services, we deliver a seamless and sophisticated approach to high-end transportation catered exactly to your requirements. Whether traveling for corporate logistics, leisure excursions, or signature events, we guarantee an efficient and elegant experience from arrival to departure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 mt-12 justify-center">
                    {/* Top Row: 3 Items */}
                    {steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-5 px-2 group">
                            <div className="w-16 h-16 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-snug">
                                {step.title}
                            </h3>
                            <p className="text-luxury-text-muted text-xs leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}

                    {/* Bottom Row: 2 Items Centered */}
                    <div className="lg:col-span-3 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {steps.slice(3, 5).map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-5 px-2 group">
                                <div className="w-16 h-16 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-luxury-text-muted text-xs leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChauffeurHowItWorks;
