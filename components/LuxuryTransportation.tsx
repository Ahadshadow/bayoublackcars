import React from 'react';
import Link from 'next/link';
import QuoteForm from './QuoteForm';

const LuxuryTransportation = () => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-[32px] md:text-[42px] font-bold text-navy-primary font-taviraj leading-[1.2] mb-4">
                                Seamless Event Logistics with Bayou Black Cars
                            </h2>
                            <div className="w-20 h-1 bg-gold mb-6"></div>
                            <div className="space-y-6 text-gray-700 text-[16px] leading-[1.7]">
                                <p>
                                    Planning a celebration or a critical journey? Bayou Black Cars provides premium transportation solutions that transform every trip into an effortless, high-end experience. Whether it is a wedding, corporate conference, graduation, or a sophisticated night out, our luxury services are tailored for maximum comfort and style. We ensure that you and your guests travel together smoothly, with every detail managed by professionals.
                                </p>
                                <p>
                                    Our modern fleet is equipped to handle groups of all sizes, offering upscale interiors and a polished atmosphere for every mile of the journey. Every ride with us is thoughtfully designed to be elegant, stress-free, and perfectly timed to your schedule.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[32px] md:text-[42px] font-bold text-navy-primary font-taviraj leading-[1.2] mb-4">
                                Professionalism Beyond Compare
                            </h2>
                            <div className="w-20 h-1 bg-gold mb-6"></div>
                            <div className="text-gray-700 text-[16px] leading-[1.7]">
                                <p>
                                    Unlike average transport options, Bayou Black Cars is dedicated to delivering a complete luxury ecosystem. From the moment you enter our vehicle, you are greeted by a refined environment where comfort and professionalism meet. Our experienced chauffeurs handle every aspect of the drive, so you can relax and focus on what truly matters. We provide a reliable, premium travel experience focused on safety and sophistication for all your local or long-distance needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: CTA replaced with QuoteForm */}
                    <div className="hidden lg:block relative">
                        <QuoteForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryTransportation;
