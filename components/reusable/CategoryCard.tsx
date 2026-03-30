import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
    name: string;
    image: string;
    href?: string;
    className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    name,
    image,
    href = "https://customer.moovs.app/bayou-black-cars-llc/request/new",
    className = ""
}) => {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className={`block group cursor-pointer transition-all ${className}`}
        >
            <div className="bg-navy-dark rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col items-center pt-6 px-4 pb-8 aspect-[4/3] justify-between transition-all hover:bg-navy-primary border border-pure-white/10 relative shadow-2xl h-full">
                {/* Vehicle Image */}
                <div className="relative w-full h-[60%] flex items-center justify-center">
                    <Image
                        src={image}
                        alt={`${name} - Bayou Black Cars Premium Vehicle Category`}
                        fill
                        className="object-contain px-2 transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Vehicle Name */}
                <h3 className="text-pure-white text-[18px] md:text-[22px] font-bold font-taviraj text-center tracking-wide group-hover:text-gold transition-colors mt-auto relative z-10">
                    {name}
                </h3>

                {/* Premium Subtle Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none opacity-60"></div>
            </div>
        </a>
    );
};

export default CategoryCard;
