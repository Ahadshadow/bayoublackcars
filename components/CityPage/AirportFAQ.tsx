"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface AirportFAQProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
}

const AirportFAQ: React.FC<AirportFAQProps> = ({ faqs, title, subtitle }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-20 font-poppins">
            <div className="container-custom px-4 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[28px] md:text-[42px] font-bold text-navy-primary font-taviraj leading-tight mb-3 uppercase">
                        {title || "FAQs About New Orleans Airport Transportation"}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-600 text-[14px]">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-0 border border-gray-100 rounded-[20px] overflow-hidden shadow-sm">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full">
                            <button
                                className="w-full text-left px-6 md:px-8 py-5 flex justify-between items-center bg-navy-primary border-b border-white/10 outline-none focus:outline-none transition-all duration-300 hover:bg-navy-dark"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-pure-white text-[18px] md:text-[20px] font-bold font-taviraj tracking-wide leading-snug">
                                    {faq.question}
                                </span>
                                <div className="text-pure-white transition-transform duration-300 ml-4">
                                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </div>
                            </button>

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

export default AirportFAQ;
