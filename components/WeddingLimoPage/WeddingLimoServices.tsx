import React from 'react';
import { Heart, Users, PlaneTakeoff, GlassWater } from 'lucide-react';

const services = [
    {
        title: "Bride & Groom Luxury Limo Service",
        icon: <Heart size={28} className="text-gold" />,
        description: "Make a grand entrance in a beautifully decorated limo by using our bride and groom transportation service. And also complete with a red-carpet service and complimentary champagne. Our luxury wedding limo rental with our professional chauffeurs, will ensure that you arrive on time, stress-free, and in style."
    },
    {
        title: "Bridal Party & Groomsmen Transportation",
        icon: <Users size={28} className="text-gold" />,
        description: "Our wedding limousine service ensures that your entire wedding party arrives at the venue together and on time. Our spacious luxury wedding limo rentals can accommodate groups of all sizes, allowing you to enjoy the ride with your closest friends and family."
    },
    {
        title: "Guest & Family Transportation",
        icon: <PlaneTakeoff size={28} className="text-gold" />,
        description: "Avoid parking hassles and transportation logistics by arranging group transportation for your guests. We provide shuttle services and luxury vans to ensure that everyone arrives safely and comfortably. For out-of-town guests, we provide seamless airport transfers to and from O'Hare and Midway, ensuring a smooth arrival."
    },
    {
        title: "Reception & After-Party Transportation",
        icon: <GlassWater size={28} className="text-gold" />,
        description: "Keep the celebration going with our after-party transportation services. Whether you're heading to a secondary venue, hotel, or airport, our chauffeur-driven wedding limo will get you there in comfort and safety."
    }
];

const WeddingLimoServices = () => {
    return (
        <section className="py-16 md:py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Our Wedding Limo Services
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        We offer a wide range of wedding limo services tailored to meet your specific needs. Whether you require transportation for the bride and groom, the wedding party, or special guests, we have the perfect solution for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="border border-navy-primary/20 border-dashed rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-start space-y-4">
                            <div className="bg-navy-primary/5 p-3 rounded-lg mb-2 group-hover:bg-gold/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold font-taviraj text-navy-primary leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingLimoServices;
