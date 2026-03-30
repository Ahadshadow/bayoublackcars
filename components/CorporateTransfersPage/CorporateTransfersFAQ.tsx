import React from 'react';

const faqData = [
    {
        question: "How do I book a corporate airport transfer with Bayou Black Cars?",
        answer: "You can easily book online through our booking portal, via our corporate account dashboard, or by contacting our 24/7 customer support team."
    },
    {
        question: "Do you provide meet & greet services at the airport?",
        answer: "Yes, our chauffeurs offer a professional meet and greet service. They will wait for you at the baggage claim or arrivals hall with a personalized sign, assist with luggage, and escort you to your luxury vehicle."
    },
    {
        question: "What happens if my flight is delayed?",
        answer: "We use advanced flight tracking technology to monitor your flight's status in real-time. If your flight is delayed or early, we adjust the pickup time automatically, ensuring your driver is there exactly when you land, with no extra waiting fees."
    },
    {
        question: "Can I book transportation for multiple corporate employees?",
        answer: "Absolutely! We offer dedicated corporate accounts that make it easy to manage bookings for teams, executives, and event attendees. We provide consolidated billing and customizable corporate packages."
    },
    {
        question: "What types of vehicles are available for corporate transfers?",
        answer: "Our executive fleet includes luxury sedans, premium SUVs, Mercedes Sprinter vans, and stretch limousines, all equipped with high-end amenities like Wi-Fi and leather seating."
    },
    {
        question: "Do your vehicles have Wi-Fi and other business amenities?",
        answer: "Yes, our corporate fleet features Wi-Fi, charging ports, climate control, and privacy options, allowing you to prepare for your meeting or relax comfortably on the way to your destination."
    },
    {
        question: "Can I set up a corporate account for recurring bookings?",
        answer: "Yes! Setting up a corporate account provides priority booking, streamlined invoicing, dedicated account management, and exclusive access to our premium fleet."
    },
    {
        question: "How far in advance should I book my airport transfer?",
        answer: "While we can accommodate last-minute bookings depending on availability, we recommend reserving your corporate transfer at least 24 hours in advance to guarantee your preferred vehicle and schedule."
    },
    {
        question: "Are your chauffeurs professionally trained?",
        answer: "Yes. Every chauffeur undergoes extensive background checks, rigorous safety training, and professional etiquette orientation to ensure a completely safe and luxurious experience."
    }
];

const CorporateTransfersFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Black Cars Corporate Airport Transfers.
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

export default CorporateTransfersFAQ;
