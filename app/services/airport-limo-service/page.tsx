import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import FeaturesGrid from '@/components/reusable/FeaturesGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import WhyTrust from '@/components/reusable/WhyTrust';
import CityAirportGrid from '@/components/reusable/CityAirportGrid';
import InfoSection from '@/components/reusable/InfoSection';
import FAQAccordion from '@/components/reusable/FAQAccordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Premier Airport Limo Service | Bayou Black Cars",
    description: "Experience the pinnacle of airport travel with Bayou Black Cars. Professional chauffeurs, real-time flight tracking, and luxury terminal transfers nationwide."
};

export default function AirportLimoService() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <HeroSection
                title="Premier Airport Limo Service"
                description="Experience the pinnacle of airport travel with Bayou Black Cars. Our dedicated chauffeurs provide seamless, high-touch terminal transfers across the nation, ensuring you arrive in absolute comfort and precision."
                bgImage="/HERO section/servies/Airport Limo Service hero .jpg"
            />

            {/* 2. Intro Section */}
            <IntroSection
                title="A Superior Standard of Airport Transfers"
                description={[
                    "Navigating the complexities of air travel requires a partner who understands the value of time. Our airport chauffeur service provides a quiet sanctuary of luxury, ensuring you remain productive or relaxed between flights. From real-time flight tracking to professional meet-and-greet services, every aspect of your transit is meticulously managed."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            />

            {/* 3. Features Grid */}
            <FeaturesGrid />

            {/* 4. Fleet Tabs */}
            <FleetTabs />

            {/* 5. CTA Banner */}
            <CTABanner />

            {/* 6. Why Trust Section */}
            <WhyTrust />

            {/* 7. City Airport Grid */}
            <CityAirportGrid
                title="Global Connectivity, Local Expertise"
                description="We provide a consistent standard of excellence across a network of premier airport hubs. Wherever your journey takes you, Bayou Black Cars is there to ensure your transition is seamless, professional, and entirely stress-free."
            />

            {/* 8. Detailed Content (InfoSection) */}
            <InfoSection />

            {/* 9. FAQs */}
            <FAQAccordion />
        </main>
    );
}
