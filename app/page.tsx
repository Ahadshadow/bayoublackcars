import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
    title: "Bayou Black Cars | Premium Black Limo & Car Service Nationwide",
    description: "Bayou Black Cars offers elite limousine and black car services for airport transfers, corporate travel, and special events across the USA. Elegant fleet, professional chauffeurs, and 24/7 support.",
    keywords: ["black car service", "limo rental", "airport transportation", "executive travel", "chauffeur service New Orleans", "luxury car service USA"]
};
import ServiceCards from '@/components/ServiceCards';
import TrustedService from '@/components/TrustedService';
import CityGuide from '@/components/CityGuide';
import FAQ from '@/components/FAQ';
import FleetService from '@/components/FleetService';
import LuxuryTransportation from '@/components/LuxuryTransportation';

import Link from 'next/link';
import Image from 'next/image';
import { MousePointerClick, UserCheck, ShieldCheck, Leaf, ReceiptText, Headset, Phone, ThumbsUp } from 'lucide-react';

export default function HomePage() {
    const travelFeatures = [
        {
            title: "Effortless Digital Booking",
            description: "Reserve your premium black car ride with ease through our intuitive online platform. Whether it's an executive sedan or a spacious SUV, our booking system is available 24/7 for your convenience.",
            icon: <MousePointerClick className="w-8 h-8 text-white" />
        },
        {
            title: "Expert Certified Drivers",
            description: "Travel with confidence alongside our elite team of professional chauffeurs. Every driver is background-checked and rigorously trained to provide a safe, punctual, and high-standard experience for any occasion.",
            icon: <UserCheck className="w-8 h-8 text-white" />
        },
        {
            title: "First-Class Fleet Experience",
            description: "Our fleet, ranging from luxury sedans to elegant limousines, is curated for ultimate comfort and sophistication. Enjoy premium leather seating, climate control, and a private atmosphere in every vehicle.",
            icon: <ShieldCheck className="w-8 h-8 text-white" />
        },
        {
            title: "Sustainable Luxury Travel",
            description: "We are committed to eco-conscious travel without sacrificing performance. Our executive-class fleet includes modern, fuel-efficient vehicles that provide a green yet premium transportation experience.",
            icon: <Leaf className="w-8 h-8 text-white" />
        },
        {
            title: "Fixed & Upfront Rates",
            description: "Experience the benefit of transparent, all-inclusive pricing with no hidden costs. From airport transfers to hourly services, we provide competitive and predictable rates for all your travel needs.",
            icon: <ReceiptText className="w-8 h-8 text-white" />
        },
        {
            title: "Round-the-Clock Support",
            description: "Our dedicated support team is here for you 24/7. Whether you need to modify a booking or have a last-minute request, we ensure your luxury travel experience remains smooth and stress-free.",
            icon: <Headset className="w-8 h-8 text-white" />
        }
    ];
    
    const testimonials = [
        {
            name: "James Anderson",
            date: "2 Months Ago",
            rating: 5,
            text: "The most reliable black car service in New Orleans. Punctual, professional, and the fleet is impeccable. Perfect for my business trips."
        },
        {
            name: "Emily Watson",
            date: "2 Weeks Ago",
            rating: 5,
            text: "Outstanding experience for our wedding anniversary. The chauffeur went above and beyond. Truly a 5-star service!"
        },
        {
            name: "Robert Miller",
            date: "3 Months Ago",
            rating: 5,
            text: "Easy booking process and the ride was extremely comfortable. I felt like a VIP the entire time. Will definitely use Bayou Black Cars again."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <ServiceCards />

            <TrustedService />

            <LuxuryTransportation />

            <CityGuide />

            {/* Redesigned CTA Bar - Moved here */}
            <section className="bg-navy-primary py-12 text-pure-white">
                <div className="container-custom flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-[32px] md:text-[40px] font-bold font-taviraj mb-3">
                            Reserve Your Luxury Ride Now!
                        </h2>
                        <div className="w-20 h-1 bg-gold mb-6"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Book Now Button Group */}
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gold bg-gold text-pure-black rounded-full px-16 py-3 font-bold text-[20px] transition-all hover:bg-pure-white hover:text-navy-primary hover:border-pure-white min-w-[280px] text-center"
                            >
                                Book Now
                            </a>
                            <span className="text-[14px] opacity-90 font-medium">Instant Quotes and Fleet Previews</span>
                        </div>

                        {/* Phone Button Group */}
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href="tel:5045084831"
                                className="border-2 border-pure-white rounded-full px-10 py-3 font-bold text-[20px] flex items-center justify-center gap-3 transition-all hover:bg-pure-white hover:text-navy-primary min-w-[280px]"
                            >
                                <Phone size={24} />
                                (504) 508-4831
                            </a>
                            <span className="text-[14px] opacity-90 font-medium text-center">Live reservation agents are available 365</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Travel Section */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <div className="text-center mb-20 relative">
                        <h2 className="text-[36px] md:text-[45px] font-bold text-pure-black font-taviraj italic inline-block">
                            How We Travel
                        </h2>
                        <div className="w-24 h-1 bg-gold mx-auto mt-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {travelFeatures.map((feature, index) => (
                            <div key={index} className="relative bg-white border-2 border-navy-primary/10 rounded-[40px] pt-16 pb-12 px-8 flex flex-col items-center text-center">
                                {/* Floating Icon */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-navy-primary rounded-full flex items-center justify-center border-[6px] border-pure-white shadow-lg">
                                    {feature.icon}
                                </div>

                                <h3 className="text-[22px] font-bold text-black mb-6 leading-tight min-h-[50px] flex items-center justify-center">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-[15px] leading-[1.7]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Testimonials of Trust Section - New */}
            <section className="py-16 bg-gray-50/50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gold/10 text-navy-primary px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest mb-3">
                            Client Experiences
                        </div>
                        <h2 className="text-[32px] md:text-[44px] font-bold text-pure-black font-taviraj leading-tight mb-4 text-center">
                            Testimonials of Trust
                        </h2>
                        <div className="w-24 h-1 bg-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((review, idx) => (
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

            <FleetService />

            <FAQ />
        </main>
    );
}
