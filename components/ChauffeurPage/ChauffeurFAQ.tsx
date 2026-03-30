import React from 'react';

const faqData = [
    {
        question: "How is a chauffeur different from a regular driver?",
        answer: "Chauffeurs are professionally trained, uniformed, and highly skilled in executive-level service. They focus on customer comfort, punctuality, and a premium experience."
    },
    {
        question: "Is your chauffeur service available 24/7?",
        answer: "Yes, we operate 24/7, 365 days a year, ensuring availability for early-morning airport transfers, late-night pickups, and last-minute bookings."
    },
    {
        question: "How much does a chauffeur service cost?",
        answer: "Pricing depends on the vehicle type, distance, duration, and service type. We offer fixed rates for airport transfers and custom pricing for hourly or long-distance services. Contact us for a personalized quote."
    },
    {
        question: "Do you offer hourly chauffeur services?",
        answer: "Yes! Our hourly service allows you to have a private chauffeur on standby, making multiple stops as needed."
    },
    {
        question: "Do you track flight delays?",
        answer: "Yes! We use real-time flight tracking to adjust your pickup time, ensuring no extra charges for flight delays."
    },
    {
        question: "Can the chauffeur meet me inside the airport?",
        answer: "Yes! We offer meet-and-greet service, where the chauffeur will be waiting at baggage claim with a personalized name sign."
    }
];

const ChauffeurFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Black Cars Chauffeur Services.
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

export default ChauffeurFAQ;
