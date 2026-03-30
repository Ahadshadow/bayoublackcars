import React from 'react';

const faqData = [
    {
        question: "When should I schedule my round trip limo service?",
        answer: "We recommend booking at least 24–48 hours in advance. For events and airport transfers, earlier bookings ensure the best availability and planning."
    },
    {
        question: "Do I have to use the same vehicle and chauffeur for both legs?",
        answer: "You can request it, and we'll do our best to provide the same chauffeur and vehicle for your full round trip, depending on availability."
    },
    {
        question: "Can I make changes to the return trip later?",
        answer: "Yes! Just let us know at least a few hours in advance. We're flexible and can adjust your return time or route based on your updated plans."
    },
    {
        question: "What if I need to make multiple stops?",
        answer: "Our round trip and hourly service options are perfect for customized itineraries. Add as many stops as you'd like—we'll structure the route accordingly."
    },
    {
        question: "Do you offer round trip airport transfers?",
        answer: "Absolutely. We specialize in airport round trip service—our chauffeurs track flights and ensure timely pick-up and drop-off both ways."
    },
    {
        question: "What amenities are included during round trip rides?",
        answer: "All vehicles offer climate control, complimentary bottled water, comfortable leather seating, and entertainment systems. Additional options can be arranged on request."
    }
];

const RoundTripFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Round Trip Limo Service.
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

export default RoundTripFAQ;
