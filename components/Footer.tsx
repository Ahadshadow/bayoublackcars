import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Plane, Clock, User, ArrowRightLeft, Navigation, Briefcase, Users, Heart, Gift, Star, GraduationCap, Music, Stethoscope, Cross, Map, ChevronRight, GlassWater, Crown } from 'lucide-react';

const getServiceIcon = (name: string, className = "") => {
    const n = name.toLowerCase();
    if (n.includes('airport')) return <Plane className={className} />;
    if (n.includes('hourly')) return <Clock className={className} />;
    if (n.includes('chauffeur')) return <User className={className} />;
    if (n.includes('point to point')) return <MapPin className={className} />;
    if (n.includes('round trip')) return <ArrowRightLeft className={className} />;
    if (n.includes('city to city')) return <Navigation className={className} />;
    if (n.includes('city tours') || n.includes('cities')) return <Map className={className} />;
    if (n.includes('corporate') || n.includes('client')) return <Briefcase className={className} />;
    if (n.includes('group') || n.includes('meetings') || n.includes('events')) return <Users className={className} />;
    if (n.includes('wedding')) return <Heart className={className} />;
    if (n.includes('birthday')) return <Gift className={className} />;
    if (n.includes('anniversary')) return <Star className={className} />;
    if (n.includes('graduation')) return <GraduationCap className={className} />;
    if (n.includes('concert') || n.includes('prom')) return <Music className={className} />;
    if (n.includes('medical')) return <Stethoscope className={className} />;
    if (n.includes('funeral')) return <Cross className={className} />;
    if (n.includes('bachelor')) return <GlassWater className={className} />;
    if (n.includes('quinceanera')) return <Crown className={className} />;
    return <ChevronRight className={className} />;
};

const serviceCategories = [
    {
        title: "Consumer Services",
        services: [
            "Airport Limo Service",
            "Hourly Limo Service",
            "Chauffeur Services",
            "Point to Point Car Service",
            "Round Trip Limo Service",
            "City to City Rides",
            "City Tours"
        ]
    },
    {
        title: "Corporate Services",
        services: [
            "Corporate Airport Transfers",
            "Client & Partner Travel",
            "Corporate Event Transportation",
            "Meetings & Offsite Events",
            "Corporate Limo Service",
            "Group Limo Transportation"
        ]
    },
    {
        title: "Event Services",
        services: [
            "Wedding Transportation",
            "Birthday Limo Service",
            "Quinceanera Limo Service",
            "Anniversary Limo Service",
            "Bachelor Party Limo Service",
            "Graduation Events",
            "Concert limo services",
            "Prom limo services",
            "Funeral limo transportation",
            "Non-Emergency Medical Transportation"
        ]
    }
];

const Footer = () => {
    return (
        <footer className="bg-slate-black text-pure-white pt-12 xl:pt-20 pb-10 font-poppins mt-auto">
            <div className="container-custom">

                {/* ---------- DESKTOP LAYOUT (5 Columns) ---------- */}
                <div className="hidden xl:grid grid-cols-5 gap-6 mb-16">
                    {/* Column 1: Branding */}
                    <div className="flex flex-col gap-6 pr-4">
                        <Link href="/" className="inline-block group w-fit">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/by.png"
                                    alt="Bayou Black Cars Logo"
                                    width={220}
                                    height={80}
                                    className="object-contain h-24 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-luxury-text-muted text-[13px] leading-relaxed mt-4">
                            Bayou Black Cars provides premium chauffeur services nationwide. We specialize in luxury airport transfers, corporate travel, and special event transportation.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="#" className="w-9 h-9 bg-navy-dark rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Facebook size={16} fill="white" /></Link>
                            <Link href="#" className="w-9 h-9 bg-navy-dark rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Twitter size={16} fill="white" /></Link>
                            <Link href="#" className="w-9 h-9 bg-navy-dark rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Instagram size={16} fill="white" /></Link>
                        </div>
                    </div>

                    {/* Service Columns */}
                    {serviceCategories.map((cat, idx) => (
                        <div key={cat.title} className="flex flex-col">
                            <h3 className="text-lg font-bold font-taviraj text-pure-white mb-6 border-b border-luxury-border/10 pb-4 text-[16px]">{cat.title}</h3>
                            <ul className="flex flex-col gap-3 text-[13px] text-gray-300">
                                {cat.services.map((service) => (
                                    <li key={service} className="group/item">
                                        <Link
                                            href={
                                                service === 'Airport Limo Service' ? '/services/airport-limo-service' :
                                                    service === 'Hourly Limo Service' ? '/services/hourly-limo-service' :
                                                        service === 'Client & Partner Travel' ? '/services/client-partner-travel' :
                                                            `/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
                                            }
                                            className="flex items-center gap-3 text-luxury-text-muted hover:text-gold transition-colors"
                                        >
                                            <span className="text-gold opacity-80 group-hover/item:opacity-100 transition-opacity">
                                                {getServiceIcon(service, "w-4 h-4")}
                                            </span>
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 5: Contact */}
                    <div className="pl-2">
                        <h3 className="text-lg font-bold font-taviraj text-pure-white mb-6 border-b border-luxury-border/10 pb-4 tracking-wider text-[16px]">Contact Us</h3>
                        <div className="flex flex-col gap-5 text-[13px]">
                            <div className="flex gap-3 items-start">
                                <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-pure-white mb-0.5">Phone</p>
                                    <p className="text-luxury-text-muted">(504) 508-4831</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-pure-white mb-0.5">Email</p>
                                    <p className="text-luxury-text-muted flex flex-wrap"><span className="break-all">info@bayoublackcars.com</span></p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start opacity-0 pointer-events-none">
                                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                                <div className="space-y-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- MOBILE / TABLET LAYOUT ---------- */}
                <div className="xl:hidden flex flex-col gap-10 mb-12">
                    {/* Top Section: Branding & Contact */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start border-b border-luxury-border/10 pb-8">

                        {/* Branding */}
                        <div className="flex flex-col gap-4 md:flex-1 md:max-w-[50%]">
                            <Link href="/" className="inline-block group w-fit">
                                <div className="flex items-center -ml-2">
                                    <Image
                                        src="/by.png"
                                        alt="Bayou Black Cars Logo"
                                        width={180}
                                        height={60}
                                        className="object-contain h-20 w-auto"
                                    />
                                </div>
                            </Link>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                Premium chauffeur services nationwide. Luxury airport transfers, corporate travel, and special event transportation.
                            </p>
                            <div className="flex gap-4 mt-1">
                                <Link href="#" className="w-9 h-9 bg-navy-dark rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Facebook size={16} fill="white" /></Link>
                                <Link href="#" className="w-9 h-9 bg-navy-dark rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Twitter size={16} fill="white" /></Link>
                                <Link href="#" className="w-9 h-9 bg-navy-dark rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Instagram size={16} fill="white" /></Link>
                            </div>
                        </div>

                        {/* Core Contact Info */}
                        <div className="flex flex-col gap-4 md:flex-1 md:max-w-[40%] md:pt-4">
                            <h3 className="text-lg font-bold font-taviraj text-pure-white mb-2 tracking-wider">Contact Us</h3>
                            <div className="flex gap-3 items-center">
                                <Phone size={18} className="text-gold shrink-0" />
                                <div>
                                    <a href="tel:5045084831" className="text-luxury-text-muted hover:text-gold text-[14px] font-medium">(504) 508-4831</a>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail size={18} className="text-gold shrink-0" />
                                <div>
                                    <a href="mailto:info@bayoublackcars.com" className="text-luxury-text-muted hover:text-gold text-[14px] font-medium break-all">info@bayoublackcars.com</a>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start mt-2 opacity-0 pointer-events-none">
                                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                                <div className="text-[13px] text-luxury-text-muted font-medium flex flex-wrap gap-x-4 gap-y-1">
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Streamlined Services List */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-taviraj text-pure-white mb-6 border-b border-luxury-border/10 pb-4 tracking-wider">Quick Links</h3>

                        {/* We pick alternating services from categories to show a combined, diverse list without it being overwhelmingly long */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-[13px] text-gray-300">
                            {[
                                "Airport Limo Service",
                                "Corporate Limo Service",
                                "Wedding Transportation",
                                "Point to Point Car Service",
                                "Meetings & Offsite Events",
                                "Graduation Events",
                                "Hourly Limo Service",
                                "Group Limo Transportation",
                                "Concert limo services"
                            ].map((service) => (
                                <li key={service} className="group/item">
                                    <Link
                                        href={
                                            service === 'Airport Limo Service' ? '/services/airport-limo-service' :
                                                service === 'Hourly Limo Service' ? '/services/hourly-limo-service' :
                                                    service === 'Client & Partner Travel' ? '/services/client-partner-travel' :
                                                        `/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
                                        }
                                        className="flex items-center gap-3 text-luxury-text-muted hover:text-gold transition-colors font-medium border-b border-gray-800/50 pb-2 sm:border-b-0 sm:pb-0"
                                    >
                                        <span className="text-gold opacity-80 group-hover/item:opacity-100 transition-opacity">
                                            {getServiceIcon(service, "w-4 h-4")}
                                        </span>
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Link href="/services" className="inline-flex items-center gap-2 text-gold text-[13px] font-bold uppercase tracking-wider hover:text-pure-white transition-colors bg-navy-dark px-5 py-2.5 rounded-lg border border-gold/30 hover:bg-gold">
                                View Full Service Menu &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="container-custom pt-8 border-t border-luxury-border/10 text-center text-xs text-luxury-text-muted flex flex-col items-center justify-center gap-4">
                <p>Copyright © 2026 Bayou Black Cars. All Rights Reserved. | Managed by Blue Digital Media</p>
                <div className="flex gap-6">
                    <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
