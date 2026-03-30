"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiceCTA = () => {
    return (
        <section className="bg-navy-primary py-16 text-pure-white font-poppins">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-6">
                    <div className="relative w-20 h-20 opacity-80">
                        <Image
                            src="/by.png"
                            alt="Logo Icon"
                            fill
                            className="object-contain invert brightness-0"
                        />
                    </div>
                    <div>
                        <h2 className="text-[28px] md:text-[36px] font-bold font-taviraj italic leading-tight">
                            Explore Our Premium Limo Services
                        </h2>
                        <p className="opacity-80 text-sm max-w-xl mt-2 text-pure-white/80">
                            From airport transfers to wedding day rides — Bayou Black Cars delivers unmatched luxury, comfort, and punctuality. Choose the service that fits your occasion and ride with confidence.
                        </p>
                    </div>
                </div>

                <a
                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pure-white text-navy-primary px-12 py-3 rounded-lg font-bold text-[14px] uppercase tracking-widest hover:bg-gold hover:text-pure-white transition-all shadow-lg whitespace-nowrap text-center"
                >
                    Book Now
                </a>
            </div>
        </section>
    );
};

export default ServiceCTA;
