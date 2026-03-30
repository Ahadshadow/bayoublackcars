import React from 'react';

const faqData = [
    {
        question: "What is Non-Emergency Medical Transportation (NEMT)?",
        answer: "NEMT provides safe, reliable transportation for individuals who need assistance getting to medical appointments, therapy sessions, or other healthcare-related visits without requiring an ambulance."
    },
    {
        question: "Who can use Non-Emergency Medical Transportation?",
        answer: "NEMT is ideal for seniors, disabled individuals, patients recovering from surgery, or anyone needing transportation to hospitals, clinics, rehabilitation centers, or routine check-ups."
    },
    {
        question: "What types of vehicles are available for NEMT services?",
        answer: "Our fleet includes luxury sedans, SUVs, wheelchair-accessible vans, and non-emergency ambulatory vehicles to accommodate different mobility needs."
    },
    {
        question: "How do I book a Non-Emergency Medical Transportation service?",
        answer: "You can book online through our website, call our 24/7 customer service, or schedule in advance for regular transportation needs."
    },
    {
        question: "Is NEMT covered by insurance or Medicare?",
        answer: "Coverage varies by provider and plan. Some Medicaid and private insurance plans cover NEMT for eligible patients. Contact your insurance provider for details."
    },
    {
        question: "Can you accommodate last-minute changes to our group plans?",
        answer: "Yes, Bayou Black Cars understands that plans evolve. We offer flexible scheduling, and our dispatch team is available 24/7 to adjust pickup times, locations, or vehicle types."
    },
    {
        question: "Do you offer airport pick-up/drop-off services for groups?",
        answer: "Definitely. Bayou Black Cars provides coordinated airport transportation for groups arriving at or departing from O’Hare, Midway, or private terminals."
    }
];

const NEMTFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-taviraj text-navy-primary font-bold mb-4 uppercase">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[11px] md:text-[13px] max-w-2xl mx-auto pb-4 border-b border-navy-primary/10 uppercase">
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
                                <h3 className="font-bold pr-8 text-[12px] md:text-[14px] uppercase tracking-wide">
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

                            <div className="p-4 pt-1 pb-4 text-pure-white/80 text-[11px] md:text-[13px] leading-relaxed whitespace-pre-line border-t border-gold/20 bg-navy-primary/90 uppercase">
                                <p className="pt-2">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NEMTFAQ;
