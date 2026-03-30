import React from 'react';

const faqData = [
    {
        question: "What cities do you offer city-to-city rides between?",
        answer: "We provide private chauffeur service between major cities in Illinois & Louisiana, including Chicago, Springfield, Champaign, Peoria, New Orleans, Baton Rouge, Shreveport, and more. Contact us for custom routes!"
    },
    {
        question: "How far in advance should I book a city-to-city ride?",
        answer: "We recommend booking at least 24 hours in advance to ensure availability. However, we do accommodate last-minute reservations based on availability."
    },
    {
        question: "Can I make stops along the way during my city-to-city ride?",
        answer: "Absolutely! Whether you need a rest stop, meal break, or quick detour, we offer customizable rides to suit your schedule and preferences."
    },
    {
        question: "What types of vehicles are available for city-to-city rides?",
        answer: "We offer a luxury fleet, including executive sedans, SUVs, stretch limousines, and sprinter vans for group travel. All vehicles are equipped with Wi-Fi, climate control, and plush leather seating."
    },
    {
        question: "Are your chauffeurs professionally trained?",
        answer: "Yes! All our chauffeurs are highly experienced, professionally trained, and background-checked to ensure your safety and comfort."
    },
    {
        question: "How do you ensure safety during long-distance trips?",
        answer: "Safety is our priority. Our vehicles are regularly maintained, and equipped with real-time GPS tracking, and our chauffeurs follow strict safety protocols for a smooth journey."
    },
    {
        question: "Is there a surcharge for late-night or early-morning trips?",
        answer: "We offer 24/7 service with transparent pricing. There may be a slight surcharge for late-night or early-morning rides, which will be communicated at booking."
    },
    {
        question: "Do you provide round-trip city-to-city rides?",
        answer: "Yes! We offer both one-way and round-trip options, allowing you to enjoy a seamless return journey at your convenience."
    }
];

const CityToCityFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Black Cars City to City Rides.
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

export default CityToCityFAQ;
