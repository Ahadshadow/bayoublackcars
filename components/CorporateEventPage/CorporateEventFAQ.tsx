import React from 'react';

const faqData = [
    {
        question: "How far in advance should we book corporate event transportation?",
        answer: "We recommend booking at least 1-2 weeks in advance for standard corporate events. For large conferences or multi-vehicle requests, we advise reserving as early as possible to ensure availability and customized logistics planning."
    },
    {
        question: "Can you accommodate last-minute bookings for executive travel?",
        answer: "Yes, we offer last-minute and same-day bookings, subject to vehicle availability. Our 24/7 dispatch team ensures we can accommodate urgent transportation needs for executives and VIPs."
    },
    {
        question: "What types of corporate events do you provide transportation for?",
        answer: "We cater to all types of corporate events, including conferences, board meetings, business dinners, networking events, team retreats, product launches, and trade shows. We also offer airport transfers and VIP travel for executives."
    },
    {
        question: "Do you offer on-site transportation coordination for large corporate events?",
        answer: "Yes, we provide on-site coordinators for high-profile events to manage arrivals, departures, and multi-vehicle logistics, ensuring smooth transportation flow for all attendees."
    },
    {
        question: "Can you provide branded transportation for corporate clients?",
        answer: "Absolutely! We offer custom branding options, including vehicle signage, branded interiors, and personalized meet-and-greet services, to align with your company's identity."
    },
    {
        question: "Are your chauffeurs trained for executive-level service?",
        answer: "Yes, our professional chauffeurs undergo extensive corporate etiquette training, background checks, and regular performance evaluations to ensure the highest level of professionalism, discretion, and customer service."
    },
    {
        question: "How do you handle flight delays for executive airport transfers?",
        answer: "Our team tracks real-time flight statuses, and chauffeurs adjust pickup times accordingly. Whether a flight is delayed or arrives early, we ensure seamless airport pickups without additional stress."
    },
    {
        question: "Do you offer recurring transportation for corporate clients?",
        answer: "Yes, we offer corporate accounts with priority booking, flexible billing options, and dedicated account management for businesses requiring regular executive transportation services."
    },
    {
        question: "What safety measures are in place for corporate travelers?",
        answer: "All vehicles undergo rigorous maintenance checks, and our chauffeurs follow strict safety protocols, including GPS tracking, emergency response readiness, and sanitized interiors for a safe, secure ride."
    },
    {
        question: "How do we book transportation for a corporate event?",
        answer: "Booking is simple! You can reserve online, call our 24/7 customer support, or set up a corporate account for ongoing transportation needs. Our team will assist with logistics planning to ensure a flawless experience."
    }
];

const CorporateEventFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        To provide further clarity on our corporate event transportation services, we've answered some of the most frequently asked questions from our clients.
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

export default CorporateEventFAQ;
