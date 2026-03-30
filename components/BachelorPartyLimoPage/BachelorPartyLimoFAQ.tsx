import React from 'react';

const faqData = [
    {
        question: "Why should I book a limo for my bachelor party?",
        answer: "A limo adds luxury, convenience, and safety, allowing your group to enjoy the night without worrying about transportation or parking."
    },
    {
        question: "How many people can fit in a limo?",
        answer: "Our stretch limos accommodate 8-20 passengers, while party buses can fit even larger groups."
    },
    {
        question: "What’s included in the limo service?",
        answer: "Premium sound system, LED lighting, leather seats, mini bar (BYOB options), and a professional chauffeur."
    },
    {
        question: "Can we make multiple stops?",
        answer: "Yes! We offer custom routes with stops at clubs, bars, casinos, and more."
    },
    {
        question: "Do you provide transportation to and from casinos?",
        answer: "Absolutely! We serve Rivers Casino, Horseshoe Casino, Hard Rock Casino, and more."
    },
    {
        question: "Can we bring our own alcohol?",
        answer: "Yes, if everyone is 21+, you can bring your own drinks."
    },
    {
        question: "Do you offer bachelor party packages?",
        answer: "Yes! We have hourly, point-to-point, and all-night packages tailored to your needs."
    }
];

const BachelorPartyLimoFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 pt-8 uppercase">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto pb-4">
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
                                <h3 className="font-bold pr-8 text-[14px] uppercase">
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

export default BachelorPartyLimoFAQ;
