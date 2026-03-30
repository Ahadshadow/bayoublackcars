import React from 'react';

const faqData = [
    {
        question: "Can I decorate the limo for a surprise?",
        answer: "Yes! We offer personalized decorations like flowers, balloons, and love messages."
    },
    {
        question: "Do you provide champagne or drinks in the limo?",
        answer: "Yes, we offer complimentary champagne with our anniversary packages. You can also request other beverages."
    },
    {
        question: "Can we make multiple stops during our ride?",
        answer: "Absolutely! Let us know your itinerary, and we’ll plan a seamless ride with all your preferred stops."
    },
    {
        question: "What types of limos are available for anniversaries?",
        answer: "We have luxury sedans, stretch limos, SUVs, and party buses to fit your style and group size."
    },
    {
        question: "How do I book my anniversary limo?",
        answer: "Simply call us or book online through our website. We’ll handle the rest to make your night special!"
    }
];

const AnniversaryLimoFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4 pt-8">
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
                                <h3 className="font-bold pr-8 text-[14px]">
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

export default AnniversaryLimoFAQ;
