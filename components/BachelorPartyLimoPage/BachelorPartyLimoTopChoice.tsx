import React from 'react';
import Image from 'next/image';

const BachelorPartyLimoTopChoice = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-primary/10">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
                                alt="Bachelor Party Celebration"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="w-full lg:w-1/2 text-left">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6 leading-tight">
                            Elevate Your Bachelor Celebration with Bayou
                        </h2>
                        <div className="space-y-4 text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                            <p>
                                Your milestone celebration should be defined by group enjoyment, not logistical stress. Bayou handles the complexities of regional transit, allowing you to focus entirely on the experience while we provide a refined and safe sanctuary on the road.
                            </p>
                            <p>
                                We ensure every phase of your itinerary—from premium dining stops to late-night lounge arrivals—is handled with executive protocol and absolute punctuality.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BachelorPartyLimoTopChoice;
