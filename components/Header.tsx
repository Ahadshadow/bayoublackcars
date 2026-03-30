"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Mail, Phone, Menu, X, ChevronDown, ChevronRight, Check, Tag, Car, Plane, Clock, User, MapPin, ArrowRightLeft, Navigation, Briefcase, Users, Heart, Gift, Star, GraduationCap, Music, Stethoscope, Cross, Map, GlassWater, Crown } from 'lucide-react';

const getServiceIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('airport')) return <Plane size={14} />;
    if (n.includes('hourly')) return <Clock size={14} />;
    if (n.includes('chauffeur')) return <User size={14} />;
    if (n.includes('point to point')) return <MapPin size={14} />;
    if (n.includes('round trip')) return <ArrowRightLeft size={14} />;
    if (n.includes('city to city')) return <Navigation size={14} />;
    if (n.includes('city tours') || n.includes('cities')) return <Map size={14} />;
    if (n.includes('corporate') || n.includes('client')) return <Briefcase size={14} />;
    if (n.includes('group') || n.includes('meetings') || n.includes('events')) return <Users size={14} />;
    if (n.includes('wedding')) return <Heart size={14} />;
    if (n.includes('birthday')) return <Gift size={14} />;
    if (n.includes('anniversary')) return <Star size={14} />;
    if (n.includes('graduation')) return <GraduationCap size={14} />;
    if (n.includes('concert') || n.includes('prom')) return <Music size={14} />;
    if (n.includes('medical')) return <Stethoscope size={14} />;
    if (n.includes('funeral')) return <Cross size={14} />;
    if (n.includes('bachelor')) return <GlassWater size={14} />;
    if (n.includes('quinceanera')) return <Crown size={14} />;
    return <ChevronRight size={14} />;
};

import { airportGroups } from '@/data/airports-list';

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

const citiesList = [
    "New Orleans", "Chicago", "Houston", "New York City",
    "Miami", "Dallas", "Las Vegas", "Atlanta", "San Francisco"
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAirportOpen, setIsAirportOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
    const [expandedServiceCategory, setExpandedServiceCategory] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();


    const toggleMobileMenu = (menuName: string) => {
        if (expandedMobileMenu === menuName) {
            setExpandedMobileMenu(null);
            setExpandedServiceCategory(null);
        } else {
            setExpandedMobileMenu(menuName);
            setExpandedServiceCategory(null);
        }
    };

    const toggleServiceCategory = (categoryTitle: string) => {
        setExpandedServiceCategory(expandedServiceCategory === categoryTitle ? null : categoryTitle);
    };

    return (
        <>
            {/* Top Bar - This will scroll away naturally with the page */}
            <div className="w-full font-poppins bg-navy-primary text-pure-white py-4 hidden xl:block relative z-50">
                <div className="container-custom flex justify-between items-center text-[13px] font-semibold tracking-wide">
                    <div className="flex items-center gap-2">
                        <span>New Orleans Executive Car Service at its Finest</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@bayoublackcars.com" className="flex items-center gap-2 hover:text-gold transition-colors group text-[14px] font-bold">
                            <Mail size={16} className="text-gold group-hover:scale-110 transition-transform" />
                            info@bayoublackcars.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header (Solid White) - This becomes sticky once it reaches the top (after top bar scrolls away) */}
            <header className="w-full font-poppins bg-luxury-bg border-b border-luxury-border shadow-md sticky top-0 z-40 bg-white">
                <div className="container-custom py-1 flex justify-between items-center">
                    <div className="flex items-center -ml-5">
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/by.png"
                                alt="Bayou Black Cars Logo"
                                width={180}
                                height={68}
                                className="object-contain object-left h-18 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden xl:flex items-center gap-4 xl:gap-8 font-medium text-[13px] text-luxury-text whitespace-nowrap">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Services', href: '/services', type: 'megamenu', isOpen: isServicesOpen, setIsOpen: setIsServicesOpen },
                            { name: 'Airport Transfer', href: '/airports', type: 'list', isOpen: isAirportOpen, setIsOpen: setIsAirportOpen },
                            { name: 'Fleet', href: '/fleet' },
                            { name: 'Corporate Travel', href: '/vehicle-system' },
                            { name: 'Top Cities', href: '#cities', type: 'list', isOpen: isCitiesOpen, setIsOpen: setIsCitiesOpen },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' },

                        ].map((item) => {
                            const isActive = pathname === item.href;
                            if (item.type === 'megamenu') {
                                return (
                                    <div
                                        key={item.name}
                                        className="group py-3 relative"
                                        onMouseEnter={() => item.setIsOpen(true)}
                                        onMouseLeave={() => item.setIsOpen(false)}
                                    >
                                        <Link href="/services" className="flex items-center gap-1 cursor-pointer text-luxury-text hover:text-gold transition-colors font-bold">
                                            <span className={item.isOpen ? 'text-gold' : ''}>{item.name}</span>
                                            <ChevronDown size={14} className={`transition-transform duration-200 ${item.isOpen ? 'rotate-180 text-gold' : ''}`} />
                                        </Link>

                                        <div className={`absolute top-full left-0 w-[880px] max-w-[calc(100vw-2rem)] transition-all duration-300 z-50 pt-4 ${item.isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
                                            <div className="bg-luxury-bg shadow-2xl rounded-b-2xl border-t-2 border-gold p-8">
                                                <div className="grid grid-cols-3 gap-12">
                                                    {serviceCategories.map((cat) => (
                                                        <div key={cat.title}>
                                                            <h3 className="text-navy-primary font-bold text-base mb-4 border-b border-luxury-border pb-2">{cat.title}</h3>
                                                            <ul className="space-y-3">
                                                                {cat.services.map((service) => (
                                                                    <li key={service} className="group/item">
                                                                        <Link
                                                                            href={
                                                                                service === 'Airport Limo Service' ? '/services/airport-limo-service' :
                                                                                    service === 'Hourly Limo Service' ? '/services/hourly-limo-service' :
                                                                                        service === 'Client & Partner Travel' ? '/services/client-partner-travel' :
                                                                                            `/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
                                                                            }
                                                                            onClick={() => item.setIsOpen(false)}
                                                                            className="flex items-center gap-2 text-luxury-text-muted hover:text-gold transition-colors text-[13px]"
                                                                        >
                                                                            <span className="text-gold">{getServiceIcon(service)}</span>
                                                                            {service}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            if (item.type === 'list') {
                                const isCities = item.name === 'Top Cities';
                                return (
                                    <div
                                        key={item.name}
                                        className="relative group py-3"
                                        onMouseEnter={() => item.setIsOpen(true)}
                                        onMouseLeave={() => item.setIsOpen(false)}
                                    >
                                        <Link href={item.href} className="flex items-center gap-1 cursor-pointer text-luxury-text hover:text-gold transition-colors font-bold">
                                            <span className={item.isOpen ? 'text-gold' : ''}>{item.name}</span>
                                            <ChevronDown size={14} className={`transition-transform duration-200 ${item.isOpen ? 'rotate-180 text-gold' : ''}`} />
                                        </Link>

                                        <div className={`absolute top-full left-0 ${isCities ? 'w-[300px]' : 'w-[400px]'} max-w-[calc(100vw-2rem)] transition-all duration-300 z-50 pt-4 ${item.isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
                                            <div className="bg-luxury-bg shadow-2xl rounded-b-2xl border-t-2 border-gold p-6">
                                                <h3 className="text-navy-primary font-bold text-base mb-3 border-b border-luxury-border pb-2">{isCities ? 'Our Cities' : 'Our Airports'}</h3>
                                                <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                                    {isCities ? (
                                                        <ul className="space-y-3">
                                                            {citiesList.map((city) => (
                                                                <li key={city} className="group/item">
                                                                    <Link 
                                                                        href={`/cities/${city.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                                                                        onClick={() => item.setIsOpen(false)}
                                                                        className="flex items-center gap-2 text-luxury-text-muted hover:text-gold transition-colors text-[13px] font-medium"
                                                                    >
                                                                        <span className="text-gold"><MapPin size={16} /></span>
                                                                        {city}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <div className="space-y-4">
                                                            {airportGroups.map((group) => (
                                                                <div key={group.state}>
                                                                    <h4 className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1.5 opacity-80">{group.state}</h4>
                                                                    <ul className="space-y-1.5">
                                                                        {group.airports.map((airport) => (
                                                                            <li key={airport.code} className="group/item">
                                                                                <Link 
                                                                                    href={airport.href} 
                                                                                    onClick={() => item.setIsOpen(false)}
                                                                                    className="flex items-center gap-2 text-luxury-text-muted hover:text-gold transition-colors text-[13px]"
                                                                                >
                                                                                    <span className="text-gold"><Plane size={14} /></span>
                                                                                    {airport.name} ({airport.code})
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div key={item.name} className="relative group py-2">
                                    <Link
                                        href={item.href}
                                        className={`${isActive ? 'text-gold' : 'text-luxury-text'} hover:text-gold transition-colors`}
                                    >
                                        {item.name}
                                    </Link>
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold"></div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-1 sm:gap-4 -mr-1">
                        {/* Desktop Buttons */}
                        <div className="hidden xl:flex items-center gap-2">
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-navy-primary text-pure-white px-5 py-2 rounded-lg font-bold text-[11px] tracking-wide hover:bg-gold hover:text-pure-white transition-all border-2 border-navy-primary hover:border-gold shadow-sm uppercase cursor-pointer text-center"
                            >
                                Book Now
                            </a>

                            <a href="tel:5045084831" className="bg-navy-primary text-pure-white px-5 py-2 rounded-lg font-bold text-[11px] hover:bg-gold hover:text-pure-white transition-all border-2 border-navy-primary hover:border-gold shadow-sm flex items-center gap-2">
                                <Phone size={12} fill="currentColor" />
                                (504) 508-4831
                            </a>
                        </div>

                        {/* Mobile Quick Actions (Call & Book) */}
                        <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
                            <a
                                href="tel:5045084831"
                                className="bg-navy-primary text-gold p-2 rounded-lg border border-navy-primary hover:bg-gold hover:text-pure-white transition-colors flex items-center justify-center shrink-0"
                                aria-label="Call Us"
                            >
                                <Phone size={18} fill="currentColor" />
                            </a>
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-navy-primary text-pure-white px-3 sm:px-4 py-2 rounded-lg font-bold text-[12px] tracking-wide hover:bg-gold hover:border-gold transition-colors border border-navy-primary flex items-center justify-center whitespace-nowrap shadow-sm"
                            >
                                Book Now
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button className="xl:hidden text-luxury-text p-1.5 sm:p-2 hover:bg-luxury-card rounded-lg transition-colors border border-luxury-border flex items-center justify-center shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav */}
            {/* Mobile Nav Drawer */}
            {isMenuOpen && (
                <div className="xl:hidden fixed inset-0 top-[70px] sm:top-[80px] bg-luxury-bg z-[60] overflow-y-auto px-6 py-8 pb-32">
                    <div className="flex flex-col gap-2 font-semibold text-luxury-text">
                        {[
                            { name: 'Home', href: '/', type: 'link' },
                            { name: 'Services', type: 'accordion_nested' },
                            { name: 'Airport Transfer', href: '/airports', type: 'accordion_simple', items: airportGroups.flatMap(g => g.airports).map(a => ({ label: `${a.name} (${a.code})`, href: a.href })) },
                            { name: 'Fleet', href: '/fleet', type: 'link' },
                            { name: 'Corporate Travel', href: '/vehicle-system', type: 'link' },
                            { name: 'Top Cities', href: '#cities', type: 'accordion_simple', items: citiesList.map(c => ({ label: c, href: `/cities/${c.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}` })) },
                            { name: 'About', href: '/about', type: 'link' },
                            { name: 'Contact', href: '/contact', type: 'link' },
                        ].map((item) => {
                            const isAccordionOpen = expandedMobileMenu === item.name;

                            // 1. Standard Link
                            if (item.type === 'link') {
                                return (
                                    <div key={item.name} className="border-b border-luxury-border/50 py-3">
                                        <Link
                                            href={item.href || '#'}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`text-[17px] ${pathname === item.href ? 'text-gold' : 'text-navy-primary'} hover:text-gold transition-colors block`}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                );
                            }

                            // 2. Simple Accordion (Cities & Airports)
                            if (item.type === 'accordion_simple') {
                                return (
                                    <div key={item.name} className="border-b border-luxury-border/50 py-3 flex flex-col">
                                        <button
                                            onClick={() => toggleMobileMenu(item.name)}
                                            className="flex items-center justify-between text-[17px] w-full text-left text-navy-primary hover:text-gold transition-colors"
                                        >
                                            {item.name}
                                            <ChevronDown size={20} className={`transition-transform duration-300 ${isAccordionOpen ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                                        </button>

                                        {/* Dropdown Content */}
                                        <div className={`overflow-hidden transition-all duration-300 ${isAccordionOpen ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-4 border-l-2 border-gold/30 flex flex-col gap-3 py-2">
                                                {item.items?.map(sub => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="text-[14px] text-luxury-text-muted font-medium hover:text-gold py-1 block"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                                <Link href={item.href || '#'} onClick={() => setIsMenuOpen(false)} className="text-[13px] text-gold font-bold mt-2">
                                                    View All {item.name} &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            // 3. Nested Accordion (Services)
                            if (item.type === 'accordion_nested') {
                                return (
                                    <div key={item.name} className="border-b border-luxury-border/50 py-3 flex flex-col">
                                        <button
                                            onClick={() => toggleMobileMenu(item.name)}
                                            className="flex items-center justify-between text-[17px] w-full text-left text-navy-primary hover:text-gold transition-colors outline-none"
                                        >
                                            {item.name}
                                            <ChevronDown size={20} className={`transition-transform duration-300 ${isAccordionOpen ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                                        </button>

                                        {/* Dropdown Content (Categories) */}
                                        <div className={`overflow-hidden transition-all duration-300 ${isAccordionOpen ? 'max-h-[1200px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-2 flex flex-col gap-2">
                                                <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-gold font-bold mb-2 uppercase tracking-wide">
                                                    View All Services &rarr;
                                                </Link>

                                                {serviceCategories.map((category) => {
                                                    const isCategoryOpen = expandedServiceCategory === category.title;

                                                    return (
                                                        <div key={category.title} className="bg-white rounded-lg border border-gray-100 mb-2 overflow-hidden shadow-sm">
                                                            <button
                                                                onClick={() => toggleServiceCategory(category.title)}
                                                                className={`w-full text-left px-4 py-3 flex items-center justify-between font-bold text-[15px] transition-colors ${isCategoryOpen ? 'bg-navy-primary text-white' : 'text-navy-primary hover:bg-gray-50'}`}
                                                            >
                                                                {category.title}
                                                                {isCategoryOpen ? <X size={16} /> : <ChevronDown size={16} />}
                                                            </button>

                                                            {/* Actual Service Links within Category */}
                                                            <div className={`transition-all duration-300 bg-gray-50/50 ${isCategoryOpen ? 'max-h-[600px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
                                                                <ul className="py-2 px-4 flex flex-col gap-0.5">
                                                                    {category.services.map((service) => {
                                                                        const href = service === 'Airport Limo Service' ? '/services/airport-limo-service'
                                                                            : service === 'Hourly Limo Service' ? '/services/hourly-limo-service'
                                                                                : service === 'Client & Partner Travel' ? '/services/client-partner-travel'
                                                                                    : `/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                                                                        return (
                                                                            <li key={service}>
                                                                                <Link
                                                                                    href={href}
                                                                                    onClick={() => setIsMenuOpen(false)}
                                                                                    className="flex items-center gap-2.5 py-2.5 text-[13px] text-gray-600 hover:text-gold font-medium border-b border-gray-100 last:border-0"
                                                                                >
                                                                                    <span className="text-gold opacity-80 shrink-0">{getServiceIcon(service)}</span>
                                                                                    <span className="leading-tight">{service}</span>
                                                                                </Link>
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
