"use client";

import React from 'react';
import QuoteForm from '../QuoteForm';

const BookingSection = () => {
    return (
        <section className="bg-white py-24 font-poppins border-t border-gray-100">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-[32px] md:text-[45px] font-bold text-navy-primary font-taviraj italic leading-tight">
                                Experience the Bayou <br /> Excellence Difference
                            </h2>
                            <div className="w-20 h-1 bg-gold mt-6 mb-8"></div>
                            <p className="text-gray-600 text-[16px] leading-relaxed">
                                Bayou Black Cars is the definitive choice for those who value time and tranquility. Our service is a commitment to excellence, offering transparent, premium value across our entire executive fleet. From bespoke airport transfers to dedicated daily chauffeur hires, we provide a seamless extension of your professional and personal lifestyle.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[28px] md:text-[36px] font-bold text-navy-primary font-taviraj italic mb-4">
                                Contact Us Today
                            </h3>
                            <p className="text-gray-600 text-[16px] leading-relaxed">
                                We have a range of luxury vehicles to make your travel comfortable and stylish. <br />
                                We make sure all our vehicles are in great shape so you can get to your destination safely.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-100">
                        <QuoteForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
