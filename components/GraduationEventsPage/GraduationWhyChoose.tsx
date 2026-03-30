import React from 'react';
import Image from 'next/image';

const GraduationWhyChoose = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                        Why Choose Bayou for Your Graduation Celebration?
                    </h2>
                    <p className="text-luxury-text-muted text-[15px] md:text-[16px] max-w-5xl mx-auto leading-relaxed">
                        At Bayou Black Cars, we believe your graduation is a milestone that deserves the highest level of celebration. We provide reliable, stylish, and premium transportation for graduates and their families, ensuring your achievement is recognized with the elegance it deserves.
                    </p>
                </div>

                {/* Row 1: Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl font-bold font-taviraj text-navy-primary">
                            Celebrate Your Achievement with Unmatched Elegance
                        </h3>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                            Graduation is a defining milestone. Arriving in a Bayou luxury sedan or stretch limousine adds a layer of prestige and significance to your achievement. Our elite chauffeurs ensure you are treated with the highest level of respect and attention from the moment we arrive.
                            <br /><br />
                            Avoid the logistical friction of crowded ceremony venues and complex parking. We handle the coordination so your family can focus entirely on honoring the graduate.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
                                alt="Dignified Graduation Transit"
                                fill
                                className="object-contain p-8"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl font-bold font-taviraj text-navy-primary">
                            A Fleet Designed for Family & Group Milestones
                        </h3>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                            Whether celebrating with immediate family or a larger party of graduates, our versatile fleet provides the ideal solution. From sleek executive sedans to spacious luxury SUVs and stretch limousines, we accommodate groups with absolute comfort.
                            <br /><br />
                            Our vehicles feature climate control, premium audio, and quiet interiors, providing a refined sanctuary for your family as you transition between the ceremony and graduation festivities.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
                                alt="Executive Celebration Fleet"
                                fill
                                className="object-contain p-8"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Row 3: Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl font-bold font-taviraj text-navy-primary">
                            Professional Protocol and Trustworthy Safety
                        </h3>
                        <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                            At Bayou, safety and professional protocol are our highest priorities. Our chauffeurs are elite professionals who prioritize the well-being and security of every passenger, providing peace of mind for parents and families alike.
                            <br /><br />
                            We deliver punctual, discreet, and reliable service, ensuring that your graduation schedule proceeds with absolute precision. Experience the Bayou standard for your family's big day.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
                                alt="Professional Chauffeur Service"
                                fill
                                className="object-contain p-8"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GraduationWhyChoose;
