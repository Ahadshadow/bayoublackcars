"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Phone, Mail, MapPin, Car, Route, ThumbsUp, ChevronDown, ChevronUp, Check } from 'lucide-react';

export default function AboutPage() {
    const stats = [
        { label: "Elite Fleet", value: "50+" },
        { label: "Client Milestones", value: "10k+" },
        { label: "Superior Ratings", value: "4.9/5" }
    ];

    const highlights = [
        "Bayou Black Cars delivers premier, fully-vetted transportation at industry-leading rates.",
        "Our chauffeurs undergo meticulous screening and elite defensive driving training.",
        "Deep local expertise ensures every route is optimized for punctuality and ease.",
        "Our philosophy centers on an unwavering commitment to client comfort.",
        "Rigorous maintenance schedules and premium insurance cover every vehicle in our fleet.",
        "We maintain peak hygiene standards to ensure a safe, pristine environment for every passenger.",
        "Extended grace periods are standard for all airport arrivals.",
        "Sophisticated flight monitoring allows us to adapt to your schedule in real-time.",
        "Specialized group logistics for corporate delegations and grand celebrations.",
        "Premium child safety seats available to accommodate every family member.",
        "Seamless digital and contactless payment solutions for a modern travel experience."
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/HERO section/about/about hero.png"
                    alt="Bayou Black Cars Executive Fleet"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="container-custom relative z-10 text-center text-white px-4">
                    <h1 className="text-[32px] md:text-[48px] font-bold font-taviraj tracking-tight leading-tight">
                        Our Legacy of Excellence
                    </h1>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-10 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Image Side with Overlapping Box */}
                        <div className="relative">
                            <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/intro_service.png"
                                    alt="Bayou Black Cars Professionalism"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlapping Info Box */}
                                <div className="absolute bottom-0 right-0 w-[260px] bg-navy-primary p-6 rounded-tl-[40px] text-pure-white z-20">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                            <Car size={28} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-gold font-bold text-[13px] uppercase tracking-widest leading-none mb-1">Elite Standard</h4>
                                            <p className="text-[10px] leading-relaxed opacity-90">
                                                Defining the pinnacle of chauffeured travel with 24/7 nationwide coverage and bespoke service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:pl-6">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-pure-black font-taviraj leading-tight mb-3">
                                A Sophisticated Blend of Luxury and Integrity
                            </h2>
                            <div className="w-16 h-1 bg-gold mb-6"></div>

                            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                                <p>
                                    For over a decade, Bayou Black Cars has been the trusted partner for travelers who demand more than just a ride. We provide a tailored logistical experience, supported by a fleet of high-performance vehicles and a team of career chauffeurs dedicated to your safety.
                                </p>

                                <div className="space-y-3 pt-2">
                                    {[
                                        "Bayou Black Cars is a premier, fully licensed transportation provider offering transparent, elite-tier pricing.",
                                        "Comprehensive airport logistics including high-touch 'Meet & Greet' and VIP terminal assistance.",
                                        "Dedicated concierge support available at (504) 508-4831 to assist with any itinerary changes.",
                                        "Punctuality and reliability at the core of our 'Precision-First' travel philosophy."
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 group">
                                            <div className="mt-1 bg-pure-white border-2 border-gold/20 p-0.5 rounded-lg group-hover:bg-gold/10 transition-colors">
                                                <CheckCircle className="text-gold" size={16} />
                                            </div>
                                            <p className="text-pure-black font-medium leading-normal text-[14px]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner Section */}
            <section className="relative py-10 overflow-hidden">
                <Image
                    src="/stats_bg.png"
                    alt="Luxury Interior Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-navy-primary/85 z-10"></div>

                <div className="container-custom relative z-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-md text-white">
                            <h2 className="text-[28px] md:text-[38px] font-bold font-taviraj leading-tight mb-3">
                                Elevating Every Mile with Premium Chauffeur Standards
                            </h2>
                            <div className="w-20 h-1 bg-white"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                            {[
                                { label: "Luxury Models", value: "10+", icon: <Car size={18} className="text-gold" /> },
                                { label: "Perfect Arrivals", value: "100+", icon: <Route size={18} className="text-gold" /> },
                                { label: "Global Reviews", value: "5", icon: <ThumbsUp size={18} className="text-gold" /> }
                            ].map((stat, i) => (
                                <div key={i} className="relative">
                                    <div className="w-[140px] h-[140px] rounded-full border border-pure-white/30 flex flex-col items-center justify-center text-pure-white bg-pure-black/40 backdrop-blur-sm">
                                        <div className="text-[24px] font-bold mb-1">{stat.value}</div>
                                        <div className="text-[10px] uppercase tracking-wider font-medium opacity-80">{stat.label}</div>
                                    </div>
                                    {/* Overlapping Icon Circle */}
                                    <div className="absolute top-1 right-1 w-9 h-9 bg-pure-black rounded-full flex items-center justify-center border border-gold/30 shadow-lg">
                                        {stat.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-16 bg-gray-50/50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gold/10 text-navy-primary px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest mb-3">
                            Client Experiences
                        </div>
                        <h2 className="text-[32px] md:text-[44px] font-bold text-pure-black font-taviraj leading-tight mb-4">
                            Testimonials of Trust
                        </h2>
                        <div className="w-24 h-1 bg-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                name: "Michael Richardson",
                                date: "2 Weeks Ago",
                                rating: 5,
                                text: "The service was exceptional! The driver arrived early, the vehicle was spotless, and the ride to the airport was smooth and stress-free. Highly recommend Bayou Black Cars for anyone seeking professional transportation."
                            },
                            {
                                name: "Sarah Jennifer",
                                date: "1 Month Ago",
                                rating: 5,
                                text: "We used their service for our corporate event and were thoroughly impressed. The level of professionalism and the quality of the vehicles are unmatched. They are now our go-to for all business travel."
                            },
                            {
                                name: "David Thompson",
                                date: "3 Weeks Ago",
                                rating: 5,
                                text: "Excellent experience from booking to drop-off. The real-time tracking and professional chauffeur made our night out in New Orleans perfect. The luxury and comfort provided surpassed all our expectations."
                            }
                        ].map((review, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[25px] shadow-lg border border-gray-100 flex flex-col relative group hover:shadow-2xl transition-all duration-300">
                                <div className="absolute -top-4 -right-2 transform group-hover:-translate-y-1 transition-transform">
                                    <div className="bg-gold p-3 rounded-2xl shadow-lg">
                                        <ThumbsUp size={20} className="text-pure-black" />
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4 text-gold">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic text-[15px] leading-relaxed mb-6 flex-grow">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                    <div className="w-12 h-12 bg-navy-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-pure-black text-[16px]">{review.name}</div>
                                        <div className="text-gray-400 text-[12px] uppercase font-medium tracking-wider">{review.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Google Rating Banner */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-navy-primary rounded-[30px] p-1 shadow-2xl overflow-hidden">
                            <div className="bg-white/5 backdrop-blur-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 rounded-[29px]">
                                <div className="flex items-center gap-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-inner">
                                        <Image
                                            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                                            alt="Google Verification"
                                            width={100}
                                            height={32}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <div className="text-[12px] text-gold font-bold uppercase tracking-[2px] mb-1">Elite Verification</div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[32px] font-bold leading-none">5.0</span>
                                            <div className="flex text-gold">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-xl">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-white/20"></div>
                                <div className="text-center md:text-left">
                                    <p className="text-white/80 text-[14px] leading-relaxed mb-1">Trusted by discerning travelers</p>
                                    <p className="text-white font-bold text-[18px]">100% Quality Assurance</p>
                                </div>
                                <a
                                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                    target="_blank"
                                    className="bg-gold text-pure-black px-8 py-3 rounded-full font-bold text-[14px] uppercase tracking-wider hover:bg-white transition-all shadow-lg"
                                >
                                    Share Your Journey
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 bg-white border-t border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Side: Title & Description */}
                        <div className="lg:col-span-12 mb-10 text-center">
                            <h2 className="text-[32px] md:text-[42px] font-bold text-pure-black font-taviraj leading-tight mb-4">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                            <p className="text-gray-600 text-[16px] leading-relaxed max-w-3xl mx-auto">
                                At Bayou Black Cars, we believe in complete transparency. Below are answers to frequent inquiries about our premium logistics and chauffeur standards.
                            </p>
                        </div>

                        {/* Centered Interactive Accordion */}
                        <div className="lg:col-span-12 max-w-4xl mx-auto w-full">
                            <FAQAccordionItems />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Highlight Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        {/* Left Column: Heading & Button */}
                        <div className="lg:w-1/3">
                            <h2 className="text-[32px] md:text-[42px] font-bold font-taviraj text-pure-black leading-tight mb-4">
                                Unrivaled Luxury and Seamless Execution
                            </h2>
                            <div className="w-20 h-1 bg-gold mb-6"></div>
                            <p className="text-gray-700 text-[14px] leading-relaxed mb-6">
                                We go beyond simple transit to deliver a first-class experience defined by safety, sophistication, and relentless attention to detail.
                            </p>

                            {/* Main CTA Button with Subtext */}
                            <div className="flex flex-col items-start gap-2">
                                <a
                                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gold border-2 border-gold text-pure-black px-12 py-3.5 rounded-full font-bold text-[18px] transition-all hover:bg-pure-white hover:text-navy-primary hover:border-navy-primary shadow-lg min-w-[240px] text-center"
                                >
                                    Experience Bayou
                                </a>
                                <span className="text-[12px] text-gray-500 font-medium pl-4 italic">Instant Quotes and Vehicle Gallery</span>
                            </div>
                        </div>

                        {/* Middle Column */}
                        <div className="lg:w-[30%] border-2 border-dotted border-pure-black/20 rounded-[20px] p-6">
                            <ul className="space-y-4">
                                {[
                                    "Licensed, premium transportation with competitive, transparent pricing.",
                                    "Elite-tier chauffeurs with complete background clearance and professional certification.",
                                    "Sophisticated route optimization using local and digital navigational intelligence.",
                                    "A client-centric approach where satisfaction is the only metric of success.",
                                    "Meticulous maintenance and high-limit insurance for every luxury asset."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="shrink-0 mt-0.5">
                                            <div className="w-5 h-5 border border-gold rounded flex items-center justify-center">
                                                <Check size={14} className="text-gold" strokeWidth={4} />
                                            </div>
                                        </div>
                                        <span className="text-[13px] text-pure-black leading-snug font-medium">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div className="lg:w-[35%] border-2 border-dotted border-pure-black/20 rounded-[20px] p-6">
                            <ul className="space-y-4">
                                {[
                                    "Elite sanitation and hygiene protocols for every individual journey.",
                                    "Complimentary one-hour wait time for all terminal arrivals.",
                                    "Real-time flight tracking for synchronized pickups and departures.",
                                    "Bespoke group options for high-profile events and corporate travel.",
                                    "Pre-installed child safety seats for elegant family excursions.",
                                    "Modern digital payment integration for a frictionless checkout."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="shrink-0 mt-0.5">
                                            <div className="w-5 h-5 border border-gold rounded flex items-center justify-center">
                                                <Check size={14} className="text-gold" strokeWidth={4} />
                                            </div>
                                        </div>
                                        <span className="text-[13px] text-pure-black leading-snug font-medium">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-12 bg-pure-black text-pure-white text-center overflow-hidden">
                <div className="container-custom relative z-10">
                    <h2 className="text-[28px] md:text-[38px] font-bold font-taviraj mb-3">
                        Bayou Black Cars – Luxury Travel, Redefined
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto font-light">
                        Offering elite limousine services across the USA with unmatched elegance, comfort, and 24/7 reliability.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Link
                                href="/contact"
                                className="bg-gold border-2 border-gold text-pure-black px-12 py-4 rounded-full font-bold text-[18px] hover:bg-pure-white hover:text-navy-primary hover:border-pure-white transition-all shadow-2xl min-w-[240px]"
                            >
                                Talk To Support
                            </Link>
                            <span className="text-[12px] opacity-80 italic">Get in touch with our team</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href="tel:5045084831"
                                className="border-2 border-pure-white rounded-full px-10 py-4 font-bold text-[18px] flex items-center justify-center gap-2 transition-all hover:bg-pure-white hover:text-navy-primary min-w-[240px]"
                            >
                                <Phone size={20} fill="currentColor" />
                                (504) 508-4831
                            </a>
                            <span className="text-[12px] opacity-80 italic">Live agents available 24/7</span>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </section>
        </main>
    );
}

// Separate component for Accordion to handle its own state
function FAQAccordionItems() {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            q: "What makes Bayou Black Cars different from other car services?",
            a: "Bayou Black Cars stands out with its commitment to luxury, reliability, and professionalism. Our fleet consists of top-tier, well-maintained vehicles, and our chauffeurs are highly trained to provide a seamless and sophisticated travel experience."
        },
        {
            q: "Are your chauffeurs professionally trained?",
            a: "Yes, all our chauffeurs undergo rigorous training, background checks, and continuous assessments to ensure they meet the highest standards of safety, professionalism, and customer service."
        },
        {
            q: "Can I book a limo for special events?",
            a: "Absolutely! We provide luxury transportation for weddings, corporate events, airport transfers, proms, nights out, and more. Whether it’s a grand celebration or an executive ride, we tailor our services to meet your needs."
        }
    ];

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-0 border border-gray-100 rounded-[20px] overflow-hidden shadow-sm">
            {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                    <div key={idx} className="w-full">
                        {/* Question Header - Matching FAQ.tsx Refined */}
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full text-left px-6 md:px-8 py-5 flex justify-between items-center bg-gold border-b border-pure-white/20 outline-none transition-all duration-300 hover:brightness-105"
                        >
                            <span className="text-pure-black text-[17px] md:text-[20px] font-bold font-taviraj tracking-wide leading-snug pr-4">
                                {faq.q}
                            </span>
                            <div className="text-pure-black shrink-0 transition-transform duration-300">
                                {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </div>
                        </button>

                        {/* Answer Content - Matching FAQ.tsx Refined */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden bg-white/50">
                                <p className="text-navy-primary text-[15px] md:text-[17px] leading-relaxed font-poppins font-medium px-6 md:px-8 py-6">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
