import React from 'react';
import QuoteForm from '../QuoteForm';

interface AirportBookingSectionProps {
    title: string;
    description: string[];
    extraText?: string;
}

const AirportBookingSection: React.FC<AirportBookingSectionProps> = ({ title, description, extraText }) => {
    return (
        <section className="bg-white py-16 font-poppins overflow-hidden">
            <div className="container-custom px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Side: Content */}
                    <div className="lg:w-7/12 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <h2 className="text-navy-primary text-[28px] md:text-[34px] font-bold font-taviraj tracking-tight leading-tight mb-8">
                            {title}
                        </h2>
                        <div className="space-y-6">
                            {description.map((para, index) => (
                                <p key={index} className="text-gray-600 text-[15px] leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                        {extraText && (
                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <h3 className="text-navy-primary text-[24px] font-bold font-taviraj mb-4">Travel Made Comfortable for Every Occasion</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {extraText}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Booking Form */}
                    <div className="lg:w-5/12 w-full lg:sticky lg:top-24 animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                            <div className="bg-navy-primary py-4 px-6 text-center">
                                <h3 className="text-white font-taviraj font-bold text-[18px]">Instant Quote: Get Upfront Pricing!</h3>
                            </div>
                            <div className="p-2 bg-gray-50 flex justify-center">
                                <QuoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirportBookingSection;
