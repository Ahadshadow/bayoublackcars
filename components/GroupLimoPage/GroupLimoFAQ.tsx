import React from 'react';

const faqData = [
    {
        question: "How far in advance should we book group limo services?",
        answer: "We recommend booking at least 1–2 weeks in advance to ensure your preferred vehicle is available, especially during peak seasons (weddings, proms, holidays). However, Bayou Black Cars also accepts last-minute bookings based on fleet availability — so don't hesitate to reach out!"
    },
    {
        question: "Do you provide multiple vehicle options for large groups? Come with entertainment options?",
        answer: "Yes! Bayou Black Cars offers a diverse fleet including stretch limos, sprinter vans, SUVs, party buses, and luxury sedans. Whether you're transporting 6 or 60 guests, we can provide a single large vehicle or coordinate multiple vehicles for your group."
    },
    {
        question: "Can we book round-trip services for the group?",
        answer: "Absolutely. Bayou Black Cars offers both one-way and round-trip bookings, as well as hourly charters if your group needs a dedicated vehicle throughout the event. Just let us know your itinerary — we'll handle the rest."
    },
    {
        question: "Are refreshments or entertainment available in the vehicle?",
        answer: "Yes, many of Bayou Black Cars's group vehicles come equipped with premium entertainment systems, Bluetooth or AUX audio, LED party lighting, and coolers or bottle holders. For special requests like bottled water, champagne, or snacks, let us know in advance and we'll personalize the ride."
    },
    {
        question: "What safety measures are in place for large groups or teen riders?",
        answer: "Your group's safety is Bayou Black Cars's priority.\n• All chauffeurs are licensed, background-checked, and professionally trained.\n• Vehicles are regularly inspected, sanitized, and GPS-tracked.\n• Zero-tolerance policy for underage drinking during teen events.\n• Emergency equipment (first-aid kits, fire extinguishers) onboard."
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

const GroupLimoFAQ = () => {
    return (
        <section className="py-20 bg-navy-primary font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-pure-white font-bold mb-4 pt-8">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto pb-4">
                        Find questions and answers related to this group limo transportation service.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-gold border border-gold/50 rounded-md overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex items-center justify-between p-4 cursor-pointer text-navy-primary hover:bg-gold/90 transition-colors">
                                <h3 className="font-bold pr-8 text-[14px]">
                                    {faq.question}
                                </h3>
                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 transition-transform duration-300 group-open:rotate-180">
                                    {/* Using a simple plus/minus SVG or chevron */}
                                    <svg
                                        className="absolute inset-0 w-full h-full text-navy-primary"
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
                            <div className="p-4 pt-1 pb-4 text-navy-primary/80 text-[13px] leading-relaxed whitespace-pre-line border-t border-navy-primary/10 bg-gold/50">
                                <p className="pt-2">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupLimoFAQ;
