"use client";

import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Headset, MessageSquare, Globe } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/HERO section/contact/contact hero.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'scaleX(-1)',
                        zIndex: 0
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/75 z-0"></div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-[40px] md:text-[60px] font-bold text-pure-white font-taviraj tracking-tight leading-loose mb-2">
                        Contact <span className="text-gold">With Us</span>
                    </h1>
                    <div className="h-[2px] w-24 bg-gold mx-auto mb-8"></div>
                    <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto font-poppins font-light leading-relaxed tracking-wide">
                        Available 24/7 for all your premium transportation needs. Reach out to us <br className="hidden md:block" />
                        and experience excellence in every bit.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 bg-white relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 z-0 hidden lg:block skew-x-[-6deg] translate-x-1/2"></div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Side: Contact Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-[32px] font-bold text-pure-black font-taviraj mb-6 relative inline-block">
                                    Get In Touch
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold"></span>
                                </h2>
                                <p className="text-gray-600 font-poppins text-lg leading-relaxed">
                                    We're here to assist you with your booking, inquiries, or any special requests.
                                    Our dedicated team is just a call or message away.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Info Item: Phone */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-navy-primary rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:rotate-6 shadow-xl">
                                        <Phone className="text-pure-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gold uppercase tracking-widest mb-1">Call Us Now</p>
                                        <a href="tel:5045084831" className="text-2xl font-bold text-pure-black font-taviraj hover:text-gold transition-colors">
                                            (504) 508-4831
                                        </a>
                                        <p className="text-gray-500 text-sm mt-1">Available 24/7 for reservations</p>
                                    </div>
                                </div>

                                {/* Info Item: Email */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-navy-primary rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:rotate-6 shadow-xl">
                                        <Mail className="text-pure-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gold uppercase tracking-widest mb-1">Email Address</p>
                                        <a href="mailto:info@bayoublackcars.com" className="text-xl font-bold text-pure-black font-taviraj hover:text-gold transition-colors break-all">
                                            info@bayoublackcars.com
                                        </a>
                                        <p className="text-gray-500 text-sm mt-1">Typical response within 1 hour</p>
                                    </div>
                                </div>


                            </div>

                            {/* Additional Service Info */}
                            <div className="bg-navy-primary p-8 rounded-3xl text-pure-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <div className="relative z-10 flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                                        <Headset size={20} className="text-pure-black" />
                                    </div>
                                    <h4 className="text-xl font-bold font-taviraj">Premium Support</h4>
                                </div>
                                <p className="text-white/70 text-sm font-poppins leading-relaxed mb-6">
                                    Our support team is specially trained to handle high-profile executives and priority travel needs.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-xs font-medium text-gold">
                                        <div className="w-1 h-1 rounded-full bg-gold"></div>
                                        Fast Response
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-gold">
                                        <div className="w-1 h-1 rounded-full bg-gold"></div>
                                        Safe Travel
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-gold">
                                        <div className="w-1 h-1 rounded-full bg-gold"></div>
                                        Easy Booking
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-gold">
                                        <div className="w-1 h-1 rounded-full bg-gold"></div>
                                        Expert Chauffeurs
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
                            <div className="mb-10">
                                <h3 className="text-3xl font-bold text-pure-black font-taviraj mb-3">Send A Message</h3>
                                <p className="text-gray-500 text-base font-poppins">Fill out the form below and we'll get back to you immediately.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-pure-black uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Ex: John Doe"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all font-poppins text-pure-black"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-pure-black uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all font-poppins text-pure-black"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-pure-black uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all font-poppins text-pure-black"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-pure-black uppercase tracking-wider ml-1">Service Required</label>
                                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all font-poppins text-pure-black appearance-none cursor-pointer">
                                        <option>Airport Transfer</option>
                                        <option>Hourly Service</option>
                                        <option>Corporate Travel</option>
                                        <option>Wedding & Events</option>
                                        <option>Other / Question</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-pure-black uppercase tracking-wider ml-1">Your Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all font-poppins text-pure-black resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full group bg-navy-primary hover:bg-gold text-pure-white hover:text-pure-black font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                                    type="button"
                                >
                                    SEND MESSAGE
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="bg-navy-primary py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
                    style={{ backgroundImage: "url('/bayou-logo.png')", backgroundSize: '200px', backgroundRepeat: 'repeat' }}
                ></div>

                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-pure-white font-taviraj mb-8">
                        Ready for a <span className="text-gold">Luxury Experience?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="tel:5045084831" className="px-10 py-4 bg-pure-white text-navy-primary font-bold rounded-full hover:bg-gold hover:text-pure-white transition-all duration-300">
                            CALL NOW
                        </a>
                        <a
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border-2 border-pure-white text-pure-white font-bold rounded-full hover:bg-pure-white hover:text-pure-black transition-all duration-300"
                        >
                            ONLINE BOOKING
                        </a>
                    </div>
                </div>
            </section>
        </main >
    );
}
