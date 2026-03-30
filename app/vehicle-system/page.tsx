import React from 'react';
import VehicleSystemSection from '@/components/VehicleSystemSection';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, MapPin, Star } from 'lucide-react';

export const metadata = {
    title: 'Corporate Travel | Bayou Black Cars',
    description: 'Experience the ultimate in luxury travel with our professional corporate travel system and transparent rates.',
};

export default function VehicleSystemPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Immersive Dark Hero */}
            <section className="relative py-28 md:py-40 overflow-hidden">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/HERO section/vehicle-system/vehicle-system hero.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pure-white/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="container-custom px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-pure-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-pure-white/10 mb-8">
                        <Star size={16} className="text-gold" fill="currentColor" />
                        <span className="text-pure-white text-[12px] font-bold tracking-[0.2em] uppercase">Premium Corporate Travel</span>
                    </div>

                    <h1 className="text-[42px] md:text-[68px] font-bold font-taviraj text-pure-white mb-6 leading-[1.1]">
                        Elite <span className="text-gold">Redefined</span> <br />
                        For Your Journey
                    </h1>

                    <p className="text-white/70 max-w-2xl mx-auto text-[16px] md:text-[19px] leading-relaxed mb-12 font-poppins">
                        Discover a seamless transportation experience where transparent pricing meets executive class comfort. Every mile driven with Bayou Black Cars is a testament to our dedication to excellence.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold text-pure-black px-12 py-5 rounded-full font-bold text-[16px] transition-all hover:bg-pure-white hover:text-navy-primary hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] shadow-lg"
                        >
                            RESERVE NOW
                        </a>
                        <nav className="flex items-center gap-2 text-[14px] font-bold text-pure-white/50 uppercase tracking-[0.1em]">
                            <Link href="/" className="hover:text-pure-white transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <span className="text-gold">Corporate Travel</span>
                        </nav>
                    </div>
                </div>

                {/* Subtle Bottom Pattern */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
            </section>

            {/* Premium Category Grid */}
            <VehicleSystemSection />

            {/* Service Excellence Section */}
            <section className="bg-gray-50 py-24 border-t border-gray-100">
                <div className="container-custom px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white rounded-[24px] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                <ShieldCheck size={32} className="text-gold" />
                            </div>
                            <h4 className="text-[20px] font-bold text-pure-black font-taviraj mb-3 uppercase tracking-wider">Safety First</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed">Continuous safety monitoring and expertly trained chauffeurs for your absolute peace of mind.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-pure-white rounded-[24px] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                <MapPin size={32} className="text-gold" />
                            </div>
                            <h4 className="text-[20px] font-bold text-pure-black font-taviraj mb-3 uppercase tracking-wider">Nationwide reach</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed">Providing high-end ground transportation services in all major cities across the USA.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-pure-white rounded-[24px] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                <Star size={32} className="text-gold" />
                            </div>
                            <h4 className="text-[20px] font-bold text-black font-taviraj mb-3 uppercase tracking-wider">VIP Experience</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed">Dedicated to providing a 5-star experience from the moment you book until you reach your destination.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
