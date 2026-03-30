import React from 'react';

const faqData = [
    {
        question: "When Should I Book My Wedding Limo for the Best Availability?", // The scraper showed these questions even though it's the birthday page, adhering to "same to same"
        answer: "It's best to book your wedding limo at least 3–6 months in advance, especially during peak wedding season. This ensures you get your preferred vehicle and service package."
    },
    {
        question: "What types of wedding limousines do you offer?",
        answer: "We offer a range of luxury vehicles, including stretch limousines, classic sedans, SUVs, and party buses. Each is equipped with premium amenities to make your wedding transportation stylish and comfortable."
    },
    {
        question: "Can the wedding limo be decorated?",
        answer: "Absolutely! We allow tasteful decorations inside and outside the limo to match your wedding theme. Let us know in advance, and we'll coordinate with you."
    },
    {
        question: "What is included in the wedding limo package?",
        answer: "Our wedding limo service includes a professional chauffeur, red carpet treatment, complimentary champagne (where permitted), premium sound system, and customizable options to make your big day extra special."
    },
    {
        question: "Can You Accommodate Large Wedding Parties & Guest Groups?",
        answer: "Yes! We provide group transportation options, including shuttle services for guests, bridal party limos, and getaway cars for the newlyweds."
    },
    {
        question: "Can you accommodate last-minute changes to our group plans?",
        answer: "Yes, Bayou Black Cars understands that plans evolve. We offer flexible scheduling, and our dispatch team is available 24/7 to adjust pickup times, locations, or vehicle types — just give us a call and we'll make it happen."
    },
    {
        question: "Do you offer airport pick-up/drop-off services for groups?",
        answer: "Definitely. Bayou Black Cars provides coordinated airport transportation for groups arriving at or departing from O'Hare, Midway, or private terminals. Our chauffeurs monitor flight status in real-time and offer meet-and-greet service, luggage assistance, and smooth group loading."
    }
];

const BirthdayLimoFAQ = () => {
    return (
        <section className="py-20 bg-navy-primary font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 pt-8">
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
                            className="group bg-navy-primary border border-gold/40 rounded-md overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex items-center justify-between p-4 cursor-pointer text-pure-white hover:bg-navy-primary/80 transition-colors">
                                <h3 className="font-bold pr-8 text-[14px]">
                                    {faq.question}
                                </h3>
                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 transition-transform duration-300 group-open:rotate-180">
                                    {/* Plus/minus SVG toggle */}
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

                            {/* Inside the accordion */}
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

export default BirthdayLimoFAQ;
