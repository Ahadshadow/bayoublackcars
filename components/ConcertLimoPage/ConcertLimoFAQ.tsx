import React from 'react';

const faqData = [
    {
        question: "Can I bring food and drinks inside the limo?",
        answer: "Absolutely! You're welcome to bring your own beverages and snacks. Select vehicles also include a mini-bar and complimentary bottled water. For alcohol consumption, all passengers must be 21+."
    },
    {
        question: "How do I find my limo after the concert?",
        answer: "Your chauffeur will coordinate with you in advance and provide a designated pick-up location near the venue. We use real-time tracking to ensure a smooth pickup, avoiding high-traffic areas when possible."
    },
    {
        question: "How much does a concert limo cost?",
        answer: "Pricing depends on the vehicle type, distance, and duration of your rental. Contact us for a customized quote, and ask about our group discounts or special packages."
    },
    {
        question: "Do you charge extra for wait time after the concert?",
        answer: "No! We offer grace periods after the event to allow for delays. However, if your wait time exceeds the agreed-upon duration, additional hourly charges may apply."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, cash, and corporate accounts. Prepayment or a deposit may be required for certain bookings."
    }
];

const ConcertLimoFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 pt-8 uppercase">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto pb-4 border-b border-navy-primary/10">
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

                            <div className="p-4 pt-1 pb-4 text-pure-white/80 text-[13px] leading-relaxed whitespace-pre-line border-t border-gold/20 bg-navy-primary/90">
                                <p className="pt-2">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConcertLimoFAQ;
