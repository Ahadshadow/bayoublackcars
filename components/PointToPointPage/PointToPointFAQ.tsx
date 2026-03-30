import React from 'react';

const faqData = [
    {
        question: "When should I schedule my point-to-point limo service?",
        answer: "We recommend booking at least 24 hours in advance to ensure availability, especially during weekends or peak seasons. However, we also accommodate same-day requests whenever possible."
    },
    {
        question: "Do your limousines come with entertainment options?",
        answer: "Yes! All our vehicles are equipped with premium sound systems, mood lighting, and climate control. Stretch limos and some SUVs also offer LCD screens and Bluetooth connectivity."
    },
    {
        question: "Can I make stops along the way during my city-to-city ride?",
        answer: "Yes, you can customize your journey by adding multiple stops. Just inform us during booking, and we'll plan your route accordingly. Additional stops may incur a small fee based on time or distance."
    },
    {
        question: "What protection features are provided for teenagers (e.g., prom night)?",
        answer: "Safety is our top priority. Our chauffeurs are background-checked, licensed, and trained to handle teen clients with care. We also offer GPS tracking for parents, strict no-alcohol policies for underage riders, and direct communication before and after the ride."
    },
    {
        question: "Is it possible to modify my package after booking?",
        answer: "Absolutely. Need to change your pickup time, vehicle type, or add a stop? Just call us, and we'll do our best to accommodate any changes—even at the last minute."
    },
    {
        question: "What if my event or meeting is running late?",
        answer: "No problem! Our chauffeurs monitor live traffic and remain flexible. If your event runs late, we'll adjust pickup times accordingly. We also offer an hourly booking option for extended availability."
    },
    {
        question: "Do you provide transfers to the airport from my location?",
        answer: "Yes. Our point-to-point service is perfect for direct airport transfers from any location—home, office, or hotel. You'll be picked up on time, helped with luggage, and dropped right at the terminal door."
    }
];

const PointToPointFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Point-to-Point Limo Service.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-luxury-bg border border-navy-primary/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex items-center justify-between p-5 cursor-pointer bg-white transition-colors hover:bg-gray-50/50">
                                <h3 className="font-bold text-navy-primary pr-8 text-[14px]">
                                    {faq.question}
                                </h3>
                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 group-open:rotate-180 transition-transform duration-300">
                                    <svg
                                        className="absolute inset-0 w-full h-full text-gold"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="p-5 pt-0 text-luxury-text-muted text-[13px] leading-relaxed border-t border-navy-primary/5 bg-white">
                                <p className="pt-3">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PointToPointFAQ;
