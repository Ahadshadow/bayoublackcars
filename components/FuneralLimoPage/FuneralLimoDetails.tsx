import React from 'react';
import Image from 'next/image';

const FuneralLimoDetails = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">

                {/* Row 1: Regional Transitions */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 animate-fadeIn">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
                                alt="Compassionate Airport Logistics"
                                fill
                                className="object-contain p-8"
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-6 tracking-tight">
                            Respectful Logistics for Arriving Guests
                        </h2>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mb-6">
                            For out-of-town family and friends arriving to honor a loved one, we provide dedicated airport meet-and-greet services. Bayou ensures seamless transitions from the terminal directly to memorial services, hotels, or private residences with total discretion and care.
                        </p>
                        <p className="text-[13px] md:text-sm text-navy-primary/90 font-medium leading-relaxed">
                            We understand the weight of these moments. Let us manage the transportation logistics so you can focus on being with your family. Our team is dedicated to providing a serene and professional environment throughout the journey.
                        </p>
                    </div>
                </div>

                {/* Row 2: Custom Processional Routes */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 animate-fadeIn">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
                                alt="Custom Processional Coordination"
                                fill
                                className="object-contain object-center"
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-6 tracking-tight">
                            Coordinate Multi-Stop Processions
                        </h2>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mb-6">
                            Whether your itinerary involves church services, traditional burial sites, or post-funeral gatherings, we arrange customized routes that ensure a unified and dignified journey for the entire family.
                        </p>
                        <p className="text-[13px] md:text-sm text-navy-primary/90 font-medium leading-relaxed">
                            Our team collaborates directly with funeral directors to synchronize arrivals and departures. Bayou provides the reliability and composure needed to navigate these complex logistics with dignity and grace.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FuneralLimoDetails;
