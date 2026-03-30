"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageSquare, Phone, Mail } from 'lucide-react';

const categories = [
    {
        name: "General",
        faqs: [
            {
                question: "What is Bayou Black Cars?",
                answer: "Bayou Black Cars is a premier luxury transportation provider offering elite chauffeur services across major US hubs. We specialize in airport transfers, corporate travel, and special event logistics with a focus on punctuality, safety, and a premium guest experience."
            },
            {
                question: "How do I make a reservation?",
                answer: "You can book directly through our secure online platform, via our mobile-responsive site, or by calling our 24/7 reservation desk at (504) 508-4831. For corporate accounts and recurring travel, please contact our business relations team."
            },
            {
                question: "Are your services available 24/7?",
                answer: "Yes, we operate 24 hours a day, 365 days a year. Our reservation and support teams are always available to assist with last-minute bookings or schedule adjustments."
            }
        ]
    },
    {
        name: "Airport Transfers",
        faqs: [
            {
                question: "Do you provide flight tracking?",
                answer: "Absolutely. We monitor all commercial and private flights in real-time. Your chauffeur will adjust the pickup time based on your actual arrival, ensuring they are positioned the moment you land, regardless of delays."
            },
            {
                question: "Where do I meet my chauffeur at the airport?",
                answer: "We offer both Curbside and Meet & Greet services. For Meet & Greet, your chauffeur will wait at the designated arrivals area or baggage claim with a personalized digital sign. Specific instructions are sent via SMS upon your arrival."
            },
            {
                question: "How much wait time is included for airport pickups?",
                answer: "We provide 60 minutes of complimentary wait time for all international and domestic airport arrivals, giving you ample time to clear customs and collect your luggage."
            }
        ]
    },
    {
        name: "Fleet & Safety",
        faqs: [
            {
                question: "What types of vehicles are available?",
                answer: "Our meticulously maintained fleet includes late-model executive sedans, luxury SUVs, corporate Sprinter vans, and elegant stretch limousines. All vehicles are equipped with premium amenities and climate control."
            },
            {
                question: "How are your chauffeurs vetted?",
                answer: "Our chauffeurs undergo rigorous background checks, regular drug screenings, and ongoing professional training in defensive driving and executive protocol. We prioritize your safety and privacy above all else."
            },
            {
                question: "Do you provide child safety seats?",
                answer: "Yes, we can provide car seats upon request. Please specify the age/weight of the child during the booking process to ensure the correct seat is prepared for your journey."
            }
        ]
    },
    {
        name: "Policies",
        faqs: [
            {
                question: "What is your cancellation policy?",
                answer: "Cancellations made at least 24 hours in advance receive a full refund. Specific terms may vary for large-group bookings and special event charters. Please refer to your booking confirmation for detailed terms."
            },
            {
                question: "Are there hidden fees or surcharges?",
                answer: "No. We believe in transparent, all-inclusive pricing. Your quoted rate includes all taxes, tolls, and standard fees. Gratuity is completely at the client's discretion."
            }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("General-0");
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFaq = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-gray-50/50">
            {/* Simple Hero */}
            <section className="bg-navy-primary py-20 md:py-32 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold rounded-full blur-[120px]"></div>
                </div>

                <div className="container-custom relative z-10 px-4">
                    <h1 className="text-[36px] md:text-[64px] font-bold text-pure-white font-taviraj tracking-tight leading-tight mb-6">
                        Support <span className="text-gold">& FAQs</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-poppins font-light leading-relaxed">
                        Find everything you need to know about our premium chauffeur services, fleet protocols, and travel policies.
                    </p>
                </div>
            </section>

            <div className="container-custom py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Side: Contact Shortcuts */}
                    <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
                        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-pure-black font-taviraj mb-6">Still Have Questions?</h3>
                            <div className="space-y-6">
                                <a href="tel:5045084831" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gold/10">
                                    <div className="w-12 h-12 bg-navy-primary rounded-xl flex items-center justify-center text-pure-white group-hover:bg-gold group-hover:text-pure-black transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                                        <p className="text-lg font-bold text-pure-black font-taviraj">(504) 508-4831</p>
                                    </div>
                                </a>

                                <a href="mailto:info@bayoublackcars.com" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gold/10">
                                    <div className="w-12 h-12 bg-navy-primary rounded-xl flex items-center justify-center text-pure-white group-hover:bg-gold group-hover:text-pure-black transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Support</p>
                                        <p className="text-base font-bold text-pure-black font-taviraj break-all">info@bayoublackcars.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 group p-4 rounded-2xl bg-gold/5 border border-gold/10">
                                    <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-pure-black">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Response Time</p>
                                        <p className="text-sm font-bold text-pure-black font-taviraj">Typically Under 1 Hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-navy-primary p-8 rounded-[32px] text-pure-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-gold/20 transition-all"></div>
                            <h4 className="text-xl font-bold font-taviraj mb-4 relative z-10">Premium Experience</h4>
                            <p className="text-white/70 text-sm font-poppins leading-relaxed mb-6 block">
                                Ready to experience the Bayou difference? Book your premium ride today and let us handle the road.
                            </p>
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gold text-pure-black font-bold py-4 rounded-xl text-center block hover:bg-pure-white transition-all shadow-lg"
                            >
                                BOOK NOW
                            </a>
                        </div>
                    </div>

                    {/* Right Side: FAQs */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <div className="space-y-12">
                            {categories.map((category) => (
                                <div key={category.name}>
                                    <h2 className="text-2xl font-bold text-navy-primary font-taviraj mb-6 flex items-center gap-3">
                                        <span className="w-8 h-1 bg-gold rounded-full"></span>
                                        {category.name}
                                    </h2>
                                    <div className="space-y-4">
                                        {category.faqs.map((faq, fIndex) => {
                                            const id = `${category.name}-${fIndex}`;
                                            const isOpen = openIndex === id;
                                            return (
                                                <div key={id} className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-gold shadow-md' : 'border-gray-100'}`}>
                                                    <button
                                                        onClick={() => toggleFaq(id)}
                                                        className={`w-full text-left px-6 py-5 flex justify-between items-center transition-colors ${isOpen ? 'bg-navy-primary' : 'hover:bg-gray-50'}`}
                                                    >
                                                        <span className={`text-[17px] font-bold font-taviraj tracking-wide ${isOpen ? 'text-pure-white' : 'text-pure-black'}`}>
                                                            {faq.question}
                                                        </span>
                                                        <div className={`transition-transform duration-500 ${isOpen ? 'text-gold rotate-180' : 'text-gray-400'}`}>
                                                            <ChevronDown size={20} />
                                                        </div>
                                                    </button>

                                                    {isOpen && (
                                                        <div className="px-6 py-5 bg-white border-t border-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                                            <p className="text-gray-600 text-base leading-relaxed font-poppins">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
