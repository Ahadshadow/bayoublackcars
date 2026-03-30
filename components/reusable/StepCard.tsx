"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    stepNumber?: number;
    className?: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, stepNumber, className = "" }) => {
    return (
        <div className={`group bg-white border border-gray-100 rounded-[24px] md:rounded-[32px] p-6 md:p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5 flex flex-col items-start text-left relative overflow-hidden ${className}`}>
            {/* Background Step Number (Subtle) */}
            {stepNumber && (
                <span className="absolute -top-2 -right-2 text-[80px] font-bold text-gray-50 group-hover:text-gold/10 transition-colors duration-700 select-none z-0">
                    {stepNumber}
                </span>
            )}

            {/* Icon Container */}
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-pure-white transition-all duration-500 relative z-10">
                <Icon className="w-7 h-7 text-gold group-hover:text-pure-white group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-[20px] md:text-[22px] font-bold text-black font-taviraj leading-tight mb-3 group-hover:text-gold transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-[1.6] opacity-90">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default StepCard;
