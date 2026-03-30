import React from 'react';

const faqData = [
    {
        question: "How do I book a corporate airport transfer with Bayou Black Cars?",
        answer: "You can book online, call our customer service, or set up a corporate account for streamlined reservations and billing."
    },
    {
        question: "Do you provide meet & greet services at the airport?",
        answer: "Yes! Our professional chauffeurs will meet you at baggage claim or curbside, holding a personalized sign for easy identification."
    },
    {
        question: "What happens if my flight is delayed?",
        answer: "We track your flight in real time and adjust pickup times accordingly, ensuring your chauffeur is ready when you land."
    },
    {
        question: "Can I book transportation for multiple corporate employees?",
        answer: "Absolutely! We offer group corporate airport transfers for executives, teams, and VIP guests, with luxury vehicles to accommodate any group size."
    },
    {
        question: "What types of vehicles are available for corporate transfers?",
        answer: "Our fleet includes luxury sedans, executive SUVs, and stretch limos, all designed for comfort, privacy, and business productivity."
    },
    {
        question: "Do your vehicles have Wi-Fi and other business amenities?",
        answer: "Yes! Our executive fleet includes Wi-Fi, bottled water, leather seating, climate control, and privacy features to enhance your travel experience."
    },
    {
        question: "Can I set up a corporate account for recurring bookings?",
        answer: "Yes! Our corporate accounts allow for priority scheduling, invoicing, and seamless booking for business professionals."
    },
    {
        question: "How far in advance should I book my airport transfer?",
        answer: "For the best availability, we recommend booking at least 24 hours in advance, but we also accommodate last-minute reservations whenever possible."
    },
    {
        question: "Are your chauffeurs professionally trained?",
        answer: "Yes! All our chauffeurs undergo rigorous training, background checks, and customer service coaching to provide a first-class corporate travel experience."
    }
];

const GraduationFAQ = () => {
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

export default GraduationFAQ;
