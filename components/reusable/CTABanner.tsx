"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

interface CTABannerProps {
    title?: string;
    subtitle?: string | React.ReactNode;
    bgImage?: string;
    sectionKey?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
    title = "Reserve Your Premium Service Today",
    subtitle = (
        <>
            Choose Bayou Black Cars for sophisticated travel solutions. Whether you need an airport shuttle or a private executive chauffeur, we offer a high-standard experience tailored to your needs. <br /> <span className="font-bold mt-4 block">Ready to travel in style?</span>
        </>
    ),
    bgImage: initialBgImage = "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
    sectionKey = "cta_banner"
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
        <section className="relative py-24 overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black z-0"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="container-custom px-4 relative z-10 text-center">
                <h2 className="text-[28px] md:text-[45px] font-bold text-white font-taviraj mb-4 tracking-tight">
                    {title}
                </h2>
                <div className="text-white/80 text-[15px] md:text-[17px] max-w-3xl mx-auto mb-12 leading-relaxed">
                    {subtitle}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy-primary text-white px-12 py-4 rounded-md font-bold text-[16px] hover:bg-gold transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        Book Now
                    </a>
                    <a
                        href="tel:5045084831"
                        className="bg-white text-black px-12 py-4 rounded-md font-bold text-[16px] hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        (504) 508-4831
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
