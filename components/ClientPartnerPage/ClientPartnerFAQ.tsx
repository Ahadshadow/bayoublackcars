import React from 'react';

const faqData = [
    {
        question: "What makes Bayou Black Cars the best choice for client and partner travel?",
        answer: "Bayou Black Cars stands out for its luxury fleet, professional chauffeurs, and unmatched reliability. We ensure that your clients, business partners, and executives receive first-class, discreet, and on-time transportation, enhancing your corporate image."
    },
    {
        question: "Do you offer on-demand bookings for last-minute business travel?",
        answer: "Yes! We understand that business schedules can change quickly. That's why we offer flexible, last-minute booking options, ensuring that your clients or executives always have a reliable black car service at their disposal."
    },
    {
        question: "Can I set up a corporate account for easy billing and scheduling?",
        answer: "Absolutely! We offer corporate accounts with priority booking, flexible billing, and detailed invoices, making executive transportation easier to manage for businesses."
    },
    {
        question: "Do your chauffeurs have experience with corporate and VIP travel?",
        answer: "Yes! Our professional chauffeurs are highly trained in corporate etiquette, confidentiality, and executive-level service, ensuring a seamless and comfortable ride for VIP clients and business executives."
    },
    {
        question: "What cities do you serve for corporate travel in Illinois and Louisiana?",
        answer: "We provide executive black car services across major business hubs in Illinois and Louisiana, including Chicago, Naperville, Springfield, Baton Rouge, New Orleans, and more."
    },
    {
        question: "Do you offer multi-stop business travel for meetings and corporate events?",
        answer: "Yes, we provide customized multi-stop itineraries, allowing executives and business professionals to attend meetings, conferences, and corporate events without hassle."
    },
    {
        question: "What types of vehicles are available for corporate travel?",
        answer: "Our luxury fleet includes premium sedans, executive SUVs, stretch limousines, and luxury vans, ensuring that your clients and partners travel in the utmost comfort and style."
    },
    {
        question: "How do you ensure on-time pickups for business travelers?",
        answer: "We use advanced GPS tracking, real-time traffic monitoring, and flight tracking for airport pickups, ensuring that our chauffeurs always arrive on time."
    },
    {
        question: "Can I schedule recurring rides for my company's executives?",
        answer: "Yes! We offer scheduled and recurring bookings for companies that need regular client and executive transportation, ensuring a hassle-free travel experience every time."
    },
    {
        question: "How do I book a ride for my business clients or partners?",
        answer: "You can book online, via phone, or through our corporate account portal. Simply provide the pickup location, destination, and any special requests, and we'll handle the rest!"
    }
];

const ClientPartnerFAQ = () => {
    return (
        <section className="py-20 bg-pure-white font-poppins">
            <div className="container-custom mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-2xl mx-auto">
                        Find questions and answers related to Bayou Black Cars Client & Partner Travel.
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

export default ClientPartnerFAQ;
