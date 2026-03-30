import React from 'react';

const faqData = [
    {
        question: "How far in advance should I book my prom limo?",
        answer: "We recommend booking at least 4-6 weeks in advance, as prom season is one of the busiest times of the year."
    },
    {
        question: "Do you offer shared or group booking options?",
        answer: "Yes! We provide group bookings so you can split the cost with friends while enjoying a luxury experience together."
    },
    {
        question: "Can parents track the limo during prom night?",
        answer: "Yes, we offer real-time GPS tracking upon request, so parents can monitor the ride for peace of mind."
    },
    {
        question: "Do your chauffeurs undergo background checks?",
        answer: "Absolutely! Our chauffeurs are professionally trained, background-checked, and certified for safety and reliability."
    },
    {
        question: "What if our group wants to stop for photos before prom?",
        answer: "We offer pre-prom photo stops at iconic locations like Millennium Park, Navy Pier, and Buckingham Fountain."
    }
];

const PromLimoFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 pt-8 uppercase">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto pb-4 border-b border-navy-primary/10 uppercase">
                        Find questions and answers related to Bayou Black Cars.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-navy-primary border border-gold/40 rounded-md overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-md"
                        >
                            <summary className="flex items-center justify-between p-4 cursor-pointer text-pure-white hover:bg-navy-primary/80 transition-colors">
                                <h3 className="font-bold pr-8 text-[14px] uppercase tracking-wide">
                                    {faq.question}
                                </h3>
                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 transition-transform duration-300 group-open:rotate-180">
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

                            <div className="p-4 pt-1 pb-4 text-pure-white/80 text-[13px] leading-relaxed whitespace-pre-line border-t border-gold/20 bg-navy-primary/90 uppercase">
                                <p className="pt-2">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromLimoFAQ;
