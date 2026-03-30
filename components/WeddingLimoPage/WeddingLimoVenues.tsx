import React from 'react';
import Image from 'next/image';

const venues = [
    {
        title: "Premier Metropolitan Hotels & Historic Venues",
        text: "We provide elite coordination for celebrations at top-tier grand hotels and iconic metropolitan landmarks, ensuring your arrival is as distinguished as the venue itself.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
        imageRight: true
    },
    {
        title: "Serene Garden Estates & Scenic Retreats",
        text: "Arrive in style at sprawling botanical gardens, private estates, and waterfront manors. Our chauffeurs handle the navigation of winding paths and gated entries with precision.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageRight: false
    },
    {
        title: "Luxury Ballrooms & Boutique Banquet Spaces",
        text: "Synchronized group transport for large-scale receptions or intimate boutique gatherings, delivering your guests from hotel to venue with zero logistical friction.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageRight: true
    },
    {
        title: "Rustic Manors & Enchanted Outdoor Settings",
        text: "Whether your union is set in an elegant renovated barn or a tailored outdoor sanctuary, Bayou ensures your luxury vehicle is waiting to provide a tranquil return journey.",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png",
        imageRight: false
    }
];

const generalServicesList = [
    { name: "Priority Guest Shuttles", desc: "Reliable coordination for out-of-town guests arriving at regional airports." },
    { name: "Bridal Party Logistics", desc: "Coordinated transit for the wedding party and VIP family members." },
    { name: "Customized Event Routes", desc: "Bespoke itineraries for multi-stop wedding celebrations and pre-wedding events." }
];

const WeddingLimoVenues = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Bridging Every Venue with Elegance
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Bayou specializes in high-end coordination for the region's most exclusive wedding venues. From historic metropolitan landmarks to secluded garden estates, our team ensures that every mile of your processional is defined by serenity, punctuality, and first-class comfort.
                    </p>
                </div>

                <div className="flex flex-col space-y-16 mt-12 mb-16">
                    {venues.map((venue, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${venue.imageRight ? 'md:flex-row-reverse' : ''}`}>

                            {/* Text Sidebar */}
                            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                                <h3 className="text-2xl font-taviraj text-navy-primary font-bold">
                                    {venue.title}
                                </h3>
                                <p className="text-luxury-text-muted text-[13px] leading-relaxed whitespace-pre-wrap">
                                    {venue.text}
                                </p>
                            </div>

                            {/* Image Sidebar */}
                            <div className="w-full md:w-1/2">
                                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border border-navy-primary/10">
                                    <Image
                                        src={venue.image}
                                        alt={venue.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-navy-primary/5 mix-blend-multiply"></div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* General Service List at the bottom */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-navy-primary/10">
                    {generalServicesList.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-dashed border-navy-primary/20 hover:border-gold transition-colors text-center shadow-sm hover:shadow-md">
                            <h4 className="text-lg font-bold font-taviraj text-navy-primary mb-2">{service.name}</h4>
                            <p className="text-luxury-text-muted text-xs">{service.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WeddingLimoVenues;
