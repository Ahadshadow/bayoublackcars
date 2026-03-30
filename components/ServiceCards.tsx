"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

const initialServices = [
    {
        id: 'service_metropolitan',
        title: "Metropolitan Direct Transfers",
        description: "Seamless city-to-city and local transfers designed for absolute punctuality. Bayou Black Cars manages every logistical detail so you can arrive focused and on time.",
        image: "/replace img/12_Metropolitan_Direct_Transfers.jpeg",
    },
    {
        id: 'service_hourly',
        title: "Executive Hourly Chauffeur",
        description: "Reserved professional transportation at your command. Maintain a dedicated chauffeur and premium vehicle for multi-stop itineraries and flexible business schedules.",
        image: "/replace img/13_Executive_Hourly_Chauffeur.jpg",
    },
    {
        id: 'service_airport',
        title: "Premier Airport Transfers",
        description: "Premium airport transportation featuring real-time flight tracking and door-to-door service. Our chauffeurs ensure a stress-free transition from the terminal to your destination.",
        image: "/replace img/14_Premier_Airport_Logistics.jpeg",
    },
    {
        id: 'service_enterprise',
        title: "Enterprise Client Solutions",
        description: "Sophisticated logistics for corporate partners and large-scale operations. Bayou Black Cars provides dedicated account management and seamless coordination for your professional team.",
        image: "/replace img/18_Wedding_Limo_Service.jpeg",
    },
    {
        id: 'service_milestone',
        title: "Signature Milestone Events",
        description: "Elevate your most significant occasions with our premium event fleet. From grand weddings to high-profile galas, we provide the perfect aesthetic for a world-class arrival.",
        image: "/replace img/16_Signature_Milestone_Events.jpg",
    },
    {
        id: 'service_regional',
        title: "Regional Executive Travel",
        description: "Bypass the constraints of regional air travel with our private long-distance solutions. Enjoy executive comfort and productivity on the move across state lines.",
        image: "/replace img/17_Regional_Executive.jpeg",
    }
];

const ServiceCards = () => {
    const pathname = usePathname();
    const [services, setServices] = useState(initialServices);

    useEffect(() => {
        const fetchAssets = async () => {
            const assets = await getPageAssets(pathname);
            const updatedServices = initialServices.map(service => ({
                ...service,
                image: assets[service.id] || service.image
            }));
            setServices(updatedServices);
        };
        fetchAssets();
    }, [pathname]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev < services.length - cardsToShow ? prev + 1 : prev));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = (distance > minSwipeDistance);
        const isRightSwipe = (distance < -minSwipeDistance);
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    const isAtEnd = currentIndex >= services.length - cardsToShow;

    return (
        <section className="bg-luxury-bg py-24 font-poppins relative overflow-hidden">
            <div className="container-custom lg:px-16">
                {/* Section Heading */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[32px] md:text-[45px] font-bold text-luxury-text font-taviraj tracking-tight mb-3 leading-tight">
                        Luxury Chauffeur Services Tailored for Every Journey
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-full z-20 w-12 h-12 rounded-full hidden lg:flex items-center justify-center shadow-lg transition-all duration-300 ${currentIndex === 0
                            ? 'bg-luxury-card text-luxury-text-muted/50 cursor-not-allowed'
                            : 'bg-pure-black text-pure-white hover:bg-gold'
                            }`}
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isAtEnd}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-full z-20 w-12 h-12 rounded-full hidden lg:flex items-center justify-center shadow-lg transition-all duration-300 ${isAtEnd
                            ? 'bg-luxury-card text-luxury-text-muted/50 cursor-not-allowed'
                            : 'bg-pure-black text-pure-white hover:bg-gold'
                            }`}
                        aria-label="Next Slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Cards Wrapper */}
                    <div 
                        className="overflow-hidden touch-pan-y"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-6 cursor-grab active:cursor-grabbing"
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${cardsToShow}))`,
                            }}
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                >
                                    <div className="bg-luxury-card rounded-[30px] overflow-hidden flex flex-col items-center text-center h-full border border-luxury-border">
                                        {/* Image Area */}
                                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover object-center"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8 flex flex-col flex-grow items-center">
                                            <h3 className="text-[26px] font-bold text-navy-primary mb-4 font-taviraj leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-700 text-[16px] leading-[1.6] mb-8 flex-grow w-full">
                                                {service.description}
                                            </p>
                                            <a
                                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-navy-primary text-pure-white px-10 py-3 rounded-xl font-bold text-[18px] transition-all hover:bg-gold shadow-md hover:shadow-lg active:scale-95 text-center"
                                            >
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {Array.from({ length: services.length - cardsToShow + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`transition-all duration-300 rounded-full h-2.5 ${currentIndex === i ? 'bg-pure-black w-8' : 'bg-luxury-border w-2.5 hover:bg-gold/30'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
