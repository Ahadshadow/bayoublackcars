import React from 'react';

const faqData = [
    {
        question: "Can I schedule multiple pickups and drop-offs for my team?",
        answer: "Yes! Our service is fully customizable, allowing multiple pickups and drop-offs for executives, employees, and clients across different locations."
    },
    {
        question: "How far in advance should I book transportation for an offsite event?",
        answer: "We recommend booking at least 48 hours in advance for guaranteed availability. However, we also offer last-minute bookings based on vehicle availability."
    },
    {
        question: "Do you offer executive buses or sprinter vans for group transportation?",
        answer: "Yes! We provide luxury SUVs, executive sprinter vans, and minibuses for corporate groups attending meetings, conferences, and team-building events."
    },
    {
        question: "Are your chauffeurs trained for executive and corporate travel?",
        answer: "Yes, all our chauffeurs undergo corporate etiquette training, advanced driving courses, and strict background checks, ensuring a professional and discreet experience."
    },
    {
        question: "What amenities are available in your executive vehicles?",
        answer: "Our fleet includes WiFi, leather seating, charging ports, bottled water, climate control, tinted windows, and premium sound systems to enhance your travel experience."
    },
    {
        question: "Can you accommodate last-minute itinerary changes for offsite meetings?",
        answer: "Yes! Our real-time booking system allows for flexible scheduling, and our chauffeurs adjust routes as needed to meet your evolving travel plans."
    },
    {
        question: "Do you provide travel support for large corporate conferences?",
        answer: "Yes, we specialize in coordinating large-scale transportation for corporate events, ensuring seamless travel for executives, speakers, and attendees."
    },
    {
        question: "Is your service available for after-hours corporate events?",
        answer: "Yes, we offer 24/7 executive transportation, ensuring safe and reliable travel for late-night business meetings, corporate dinners, and networking events."
    },
    {
        question: "How do I set up a corporate account for recurring bookings?",
        answer: "Setting up a corporate account is simple! Contact us to arrange priority booking, invoicing options, and seamless monthly billing for your business travel needs."
    }
];

const MeetingsOffsiteFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to this Bayou Black Carsusine.
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

export default MeetingsOffsiteFAQ;
