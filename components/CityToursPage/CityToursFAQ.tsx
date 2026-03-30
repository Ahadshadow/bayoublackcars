import React from 'react';

const faqData = [
    {
        question: "What cities do you offer private tours in?",
        answer: "We provide luxury city tours in Chicago, New Orleans, Baton Rouge, and other major cities in Illinois & Louisiana. If you need a custom tour in a different location, contact us, and we'll accommodate your request."
    },
    {
        question: "Can I customize my itinerary?",
        answer: "Absolutely! Our private city tours are fully customizable. Let us know the places you'd like to visit, and we'll create a personalized itinerary tailored to your interests."
    },
    {
        question: "What types of vehicles are available for city tours?",
        answer: "We offer a luxurious fleet including executive sedans, stretch limousines, luxury SUVs, and Sprinter vans. Whether you need a romantic ride for two or a spacious vehicle for a group, we have the perfect option."
    },
    {
        question: "How long do city tours usually last?",
        answer: "Our city tours range from a few hours to a full day, depending on your preference. We also offer multi-day excursions for an extended, in-depth experience."
    },
    {
        question: "Do your chauffeurs provide guided commentary?",
        answer: "Yes! Our highly trained chauffeurs are knowledgeable about the city and can provide insights into landmarks, history, and hidden gems along the way."
    },
    {
        question: "Can I make stops for shopping, dining, or photos?",
        answer: "Of course! Our tours are completely flexible. You can stop for photo opportunities, shopping, dining, or any other activities you prefer."
    },
    {
        question: "Is your city tour service available for corporate or VIP clients?",
        answer: "Yes, we offer discreet, high-end transportation for corporate executives, VIPs, and special guests looking for a private, luxury tour experience."
    },
    {
        question: "How do I book a city tour with Bayou?",
        answer: "You can book online, call us, or email our team. We offer 24/7 customer support to help you arrange the perfect luxury city tour."
    },
    {
        question: "What amenities are included in the vehicle?",
        answer: "Our high-end vehicles come with Wi-Fi, premium leather seating, climate control, privacy features, bottled water, and entertainment systems for your comfort."
    }
];

const CityToursFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Black Cars City Tours.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-luxury-bg border border-navy-primary/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex items-center justify-between p-5 cursor-pointer bg-navy-primary transition-colors hover:bg-navy-primary/90 text-pure-white">
                                <h3 className="font-bold pr-8 text-[14px]">
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

export default CityToursFAQ;
