"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    data?: FAQItem[];
    title?: string;
    subtitle?: string;
}

const defaultFaqs = [
    {
        question: "How can I book an airport car service with Bayou?",
        answer: "Booking is easy through our secure online portal, mobile app, or by calling our 24/7 reservation line at (504) 508-4831."
    },
    {
        question: "How do you handle flight delays or early arrivals?",
        answer: "We monitor all flights in real-time. Your chauffeur will automatically adjust the pickup time according to your actual arrival status at no extra charge."
    },
    {
        question: "Will my driver wait for me at the airport?",
        answer: "Yes, we include complimentary wait time with every airport pickup (up to 60 minutes for international/domestic arrivals)."
    },
    {
        question: "What do you suggest for airport transfers?",
        answer: "We recommend booking at least 24 hours in advance and selecting a vehicle that comfortably accommodates your entire group and luggage count."
    },
    {
        question: "Can I book a ride for someone else?",
        answer: "Absolutely. You can book for colleagues, guests, or VIP partners, and we'll ensure they receive our signature first-class treatment."
    },
    {
        question: "Do you offer airport transfer for corporate clients?",
        answer: "Yes, we provide specialized corporate accounts with streamlined billing and priority attention for frequent business travelers."
    },
    {
        question: "Are your chauffeurs properly trained?",
        answer: "Every Bayou chauffeur undergoes rigorous training, background checks, and regular performance reviews to maintain our standard of excellence."
    }
];

const FAQAccordion = ({
    data = defaultFaqs,
    title = "Frequently Asked Questions",
    subtitle = "Find questions and answers related to our premium services."
}: FAQAccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 px-4 md:px-0">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[32px] md:text-[52px] font-bold text-pure-black font-taviraj tracking-tight mb-3 leading-tight">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600 text-[16px] md:text-[18px] font-poppins">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col gap-0 border border-gray-100 rounded-[20px] overflow-hidden shadow-sm">
                    {data.map((faq, index) => (
                        <div key={index} className="w-full">
                            {/* Question Header */}
                            <button
                                className={`w-full text-left px-6 md:px-8 py-5 flex justify-between items-center transition-all duration-300 outline-none focus:outline-none ${openIndex === index ? 'bg-navy-primary' : 'bg-navy-primary hover:bg-navy-dark'} border-b border-white/10`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`text-[18px] md:text-[20px] font-bold font-taviraj tracking-wide leading-snug ${openIndex === index ? 'text-pure-white' : 'text-pure-white'}`}>
                                    {faq.question}
                                </span>
                                <div className="text-pure-white transition-transform duration-300 ml-4">
                                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </div>
                            </button>

                            {/* Answer Content */}
                            {openIndex === index && (
                                <div className="bg-pure-white px-6 md:px-8 py-6 animate-in fade-in slide-in-from-top-2 duration-300 border-b border-gray-200 transition-all">
                                    <p className="text-navy-primary text-[16px] md:text-[17px] leading-relaxed font-poppins font-medium">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
