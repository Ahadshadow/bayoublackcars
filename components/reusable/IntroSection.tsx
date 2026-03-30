"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

interface IntroSectionProps {
    title: string;
    subtitle?: string;
    description: string[];
    image: string;
    sectionKey?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ 
    title, 
    subtitle, 
    description, 
    image: initialImage,
    sectionKey = "intro" 
}) => {
    const pathname = usePathname();
    const [image, setImage] = useState(initialImage);

    useEffect(() => {
        const fetchAssets = async () => {
            const assets = await getPageAssets(pathname);
            if (assets[sectionKey]) {
                setImage(assets[sectionKey]);
            } else if (initialImage) {
                setImage(initialImage);
            }
        };
        fetchAssets();
    }, [pathname, sectionKey, initialImage]);
    return (
        <section className="bg-white py-12 md:py-20 overflow-hidden">
            <div className="container-custom px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 space-y-6">
                        {subtitle && (
                            <span className="text-gold font-bold text-xs md:text-sm uppercase tracking-[0.3em] block">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="text-[32px] md:text-[45px] font-bold text-black font-taviraj leading-tight">
                            {title}
                        </h2>
                        <div className="w-20 h-1 bg-gold"></div>
                        <div className="space-y-4">
                            {description.map((p, i) => (
                                <p key={i} className="text-gray-600 text-[16px] md:text-[17px] leading-[1.8]">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm bg-gray-50/50 border border-navy-primary/5 group">
                        <Image
                            src={image}
                            alt={`${title} - Bayou Black Cars Premium Transportation`}
                            fill
                            className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
