import React from 'react';
import GroupedAirportGrid from '@/components/reusable/GroupedAirportGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Airport Transfer Services | Bayou Black Cars',
    description: 'Professional airport limo and car services across major airports. Book your first-class airport transfer today.',
};

const AirportsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Simple Hero Section */}
            <section className="bg-navy-primary py-16 md:py-24 text-center">
                <div className="container-custom px-4">
                    <h1 className="text-pure-white text-[32px] md:text-[52px] font-bold font-taviraj leading-tight uppercase tracking-wide">
                        Airport Transfer
                    </h1>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
                </div>
            </section>

            <GroupedAirportGrid />
        </main>
    );
};

export default AirportsPage;
