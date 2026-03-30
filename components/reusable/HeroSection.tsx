"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

interface HeroSectionProps {
    title: string;
    description: string | React.ReactNode;
    bgImage?: string;
    bookNowHref?: string;
    phoneHref?: string;
    phoneNumber?: string;
    className?: string;
    sectionKey?: string; // Key to identify this hero in the DB
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    bgImage: initialBgImage = "/suv-dark.jpg", 
    bookNowHref = "https://customer.moovs.app/bayou-black-cars-llc/request/new",
    phoneHref = "tel:5045084831",
    phoneNumber = "(504) 508-4831",
    className = "",
    sectionKey = "hero"
}) => {
    const pathname = usePathname();
    const [bgImage, setBgImage] = useState(initialBgImage);

    useEffect(() => {
        const fetchAssets = async () => {
            const assets = await getPageAssets(pathname);
            if (assets[sectionKey]) {
                setBgImage(assets[sectionKey]);
            } else if (initialBgImage) {
                setBgImage(initialBgImage);
            }
        };
        fetchAssets();
    }, [pathname, sectionKey, initialBgImage]);

    return (
        <section className={`relative w-full py-12 md:py-20 overflow-hidden flex items-center justify-center text-center ${className}`}>
            {/* Background Image with Priority Loading */}
            <div className="absolute inset-0 z-0">
                <NextImage
                    src={bgImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/75"></div>
            </div>

            <div className="container-custom relative z-10 px-4">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    {/* Title */}
                    <h1 className="text-[36px] md:text-[64px] font-bold text-gold font-taviraj leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
                        {title}
                    </h1>

                    {/* Description */}
                    <div className="text-gray-200 text-[16px] md:text-[18px] leading-[1.8] mb-12 max-w-4xl opacity-90 font-medium">
                        {typeof description === 'string' ? (
                            <p className="whitespace-pre-line">{description}</p>
                        ) : (
                            description
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href={bookNowHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-navy-primary text-pure-white px-12 py-4 rounded-md font-bold text-[18px] transition-all hover:bg-navy-light hover:scale-105 shadow-xl min-w-[240px] text-center"
                        >
                            Book Now
                        </a>

                        <a
                            href={phoneHref}
                            className="bg-pure-white text-navy-primary px-12 py-4 rounded-md font-bold text-[18px] flex items-center justify-center gap-3 transition-all hover:bg-gray-100 hover:scale-105 shadow-xl min-w-[240px]"
                        >
                            <Phone size={22} fill="currentColor" />
                            {phoneNumber}
                        </a>
                    </div>
                </div>
            </div>

            {/* Subtle bottom border highlight */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </section>
    );
};

export default HeroSection;
