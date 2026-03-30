import React from 'react';
import ServiceHero from '@/components/Services/ServiceHero';
import TransferTypes from '@/components/Services/TransferTypes';
import EventServiceGrid from '@/components/Services/EventServiceGrid';
import CorporateServices from '@/components/Services/CorporateServices';
import AirportGrid from '@/components/Services/AirportGrid';
import LeisureServices from '@/components/Services/LeisureServices';
import ServiceCTA from '@/components/Services/ServiceCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Premium Luxury Services | Bayou Black Cars",
    description: "Discover a world-class range of luxury transportation services. From executive airport transfers to wedding limousines, Bayou Black Cars delivers excellence nationwide."
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHero />
            <TransferTypes />
            <EventServiceGrid />
            <CorporateServices />
            <AirportGrid />
            <LeisureServices />
            <ServiceCTA />
        </main>
    );
}
