"use client";

import React from 'react';
import { ArrowRight, ArrowRightLeft, Clock } from 'lucide-react';

const transfers = [
    {
        title: "One-Way Transfer",
        icon: <ArrowRight className="w-8 h-8 text-gold" />,
        href: "https://customer.moovs.app/bayou-black-cars-llc/request/new"
    },
    {
        title: "Round-Trip Transfer",
        icon: <ArrowRightLeft className="w-8 h-8 text-gold" />,
        href: "https://customer.moovs.app/bayou-black-cars-llc/request/new"
    },
    {
        title: "Hourly Limo Service",
        icon: <Clock className="w-8 h-8 text-gold" />,
        href: "https://customer.moovs.app/bayou-black-cars-llc/request/new"
    }
];

const TransferTypes = () => {
    return (
        <section className="py-20 bg-white font-poppins">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {transfers.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-6 p-8 border-2 border-gray-100 rounded-2xl hover:border-gold hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="bg-gray-50 p-4 rounded-xl group-hover:bg-gold/10 transition-colors">
                                {item.icon}
                            </div>
                            <span className="text-[20px] font-bold text-pure-black font-taviraj group-hover:text-gold transition-colors">
                                {item.title}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransferTypes;
