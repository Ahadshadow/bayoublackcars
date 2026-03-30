"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "What services does Bayou Black Cars provide?",
        answer: "We offer a wide range of solutions including airport transfers, point-to-point journeys, hourly chauffeur services, and specialized rentals for weddings or corporate events."
    },
    {
        question: "Which areas do you serve?",
        answer: "Our premium services are available nationwide, covering major states such as Louisiana, Texas, New York, Florida, and California, among others."
    },
    {
        question: "What type of vehicles are in your fleet?",
        answer: "Our diverse fleet features executive sedans, spacious luxury SUVs, stretch limousines, and large-group options like Sprinter vans and party buses."
    },
    {
        question: "Are your chauffeurs professional and reliable?",
        answer: "Definitely. Every chauffeur undergoes rigorous background checks and professional training to ensure you receive safe, courteous, and punctual service."
    },
    {
        question: "Why should I choose Bayou Black Cars over other car services?",
        answer: "We focus on a total luxury experience, combining high-end vehicles with 24/7 client support and the highest standards of professionalism in the industry."
    },
    {
        question: "Do you handle special events like weddings or proms?",
        answer: "Yes, we specialize in event logistics. We ensure that you and your guests arrive in style and comfort for weddings, proms, or any major celebration."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-24 px-4 md:px-0">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[32px] md:text-[52px] font-bold text-pure-black font-taviraj tracking-tight mb-3 leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600 text-[16px] md:text-[18px] font-poppins">
                        Find questions and answers related to the Bayou Black Cars.
                    </p>
                </div>

                <div className="flex flex-col gap-0 border border-gray-100 rounded-[20px] overflow-hidden shadow-sm">
                    {faqData.map((faq, index) => (
                        <div key={index} className="w-full">
                            {/* Question Header */}
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

export default FAQ;
