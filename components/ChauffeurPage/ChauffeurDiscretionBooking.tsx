import React from 'react';
import Image from 'next/image';

const ChauffeurDiscretionBooking = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins relative">
            <div className="container-custom mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column - Content & Image */}
                    <div className="w-full lg:w-[55%] flex flex-col space-y-12">

                        {/* 1. Personalized & On-Demand Service */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-6 text-left">
                                Personalized & On-Demand Service
                            </h2>
                            <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mb-4 text-left">
                                Your ride should be as unique as your needs. We offer:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 text-[13px] md:text-sm text-luxury-text-muted mt-2 text-left">
                                <li><strong>Flexible bookings –</strong> Choose from hourly, one-way, or long-distance service</li>
                                <li>Last-minute & on-demand chauffeur services</li>
                                <li>Custom travel experiences, from luxury tours to VIP city rides</li>
                                <li>Flight tracking & real-time ride adjustments for seamless airport transfers</li>
                            </ul>
                            <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mt-6 text-left">
                                Whether you're attending a corporate conference, gala event, or an intimate dinner, we adapt our chauffeur service to provide an experience tailored just for you.
                            </p>
                        </div>

                        {/* Image Divider (Optional padding between sections) */}
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg mt-8 mb-8 border border-navy-primary/10 group">
                            <Image
                                src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
                                alt="Professional Chauffeur Service"
                                fill
                                className="object-contain object-center group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* 2. Chauffeurs Trained with a Keen Sense of Discretion */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-6 text-left">
                                Chauffeurs Trained with a Keen Sense of Discretion
                            </h2>
                            <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mb-4 text-left">
                                The chauffeurs at Bayou Black Cars go through extensive training to appreciate the finer details of etiquette, discretion and customer service. Each chauffeur is required to undergo:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 text-[13px] md:text-sm text-luxury-text-muted mt-2 text-left">
                                <li>Luxury service training to provide white-glove service</li>
                                <li>Extensive background checks and advanced driver training</li>
                                <li>In-depth knowledge of local roads, traffic and possible detours</li>
                                <li>An unwavering pledge of VIP treatment with utmost professionalism</li>
                            </ul>
                            <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed mt-6 text-left font-medium text-navy-primary italic border-l-4 border-gold pl-4 py-1">
                                Our private chauffeurs are well trained and professional, guaranteeing confidentiality and amazing service to CEOs, diplomats, celebrities and executive travellers.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Booking System */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-32 relative z-10 hidden md:block">
                        <div className="bg-white rounded-xl shadow-2xl border border-navy-primary/10 relative overflow-hidden">
                            {/* Decorative Gold Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

                            <div className="text-center p-6 md:p-8 pb-0">
                                <h3 className="text-2xl font-taviraj text-navy-primary font-bold">Book Your Ride</h3>
                                <p className="text-luxury-text-muted text-xs mt-2">Experience seamless luxury transportation</p>
                            </div>

                            {/* Moovs iframe block mimicking existing form logic */}
                            <div className="moovs-container w-full h-[700px]">
                                <iframe
                                    src="https://customer.moovs.app/bayou-black-cars-llc/iframe"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Book Chauffeur Service"
                                    className="bg-gray-50/50"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChauffeurDiscretionBooking;
