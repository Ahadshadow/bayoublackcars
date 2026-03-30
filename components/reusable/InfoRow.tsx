"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

interface InfoRowProps {
    title: string;
    description: string | string[];
    image: string;
    imagePosition: 'left' | 'right';
    className?: string;
    sectionKey?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({
    title,
    description,
    image: initialImage,
    imagePosition,
    className = "",
    sectionKey
}) => {
    const pathname = usePathname();
    const [image, setImage] = useState(initialImage);

    useEffect(() => {
        if (!sectionKey) return; // Only fetch if a key is provided
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
    const isImageLeft = imagePosition === 'left';

    return (
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 py-12 md:py-16 ${className}`}>
            {/* Image Content */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] shadow-sm bg-gray-50/50 border border-navy-primary/5 group">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-left">
                <h2 className="text-[28px] md:text-[36px] font-bold text-navy-primary font-taviraj leading-tight mb-8">
                    {title}
                </h2>
                <div className="space-y-6">
                    {Array.isArray(description) ? (
                        description.map((para, i) => (
                            <p key={i} className="text-gray-600 text-[15px] md:text-[16px] leading-[1.8]">
                                {para}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.8]">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfoRow;
