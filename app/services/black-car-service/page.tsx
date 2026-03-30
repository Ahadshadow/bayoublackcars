import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import FeaturesGrid from '@/components/reusable/FeaturesGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import WhyTrust from '@/components/reusable/WhyTrust';
import CityAirportGrid from '@/components/reusable/CityAirportGrid';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Premium Black Car Service | Bayou Black Cars",
    description: "Experience the ultimate in luxury and reliability with Bayou's black car service. Executive transportation for corporate travel, airport transfers, and private events."
};

export default function BlackCarServicePage() {
    const blackCarFaqs = [
        {
            question: "What defines a 'Black Car' service at Bayou?",
            answer: "Our Black Car service represents the gold standard of private transit. It features late-model executive sedans and SUVs, professional chauffeurs in business attire, and a focus on absolute punctuality and discretion."
        },
        {
            question: "Is this service suitable for corporate executives?",
            answer: "Absolutely. We specialize in executive logistics, providing a quiet, productive environment for professionals to work or relax between appointments."
        },
        {
            question: "Are child seats available for private car bookings?",
            answer: "Yes, we provide premium booster and child seats upon request to ensure the safety of every family member during their journey."
        },
        {
            question: "Can I book a black car for a point-to-point transfer?",
            answer: "Yes, we offer flexible point-to-point bookings across the entire region, allowing you to secure luxury transit for any individual trip."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="The Definitive Executive Black Car Service"
                description="Experience the pinnacle of professional transit with Bayou Black Cars. We provide a seamless fusion of luxury, discretion, and absolute punctuality for the world's most discerning travelers."
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            />

            <IntroSection
                title="A Legacy of Executive Transit Excellence"
                description={[
                    "Bayou Black Cars's signature service is engineered for those who demand absolute reliability. Whether coordinating high-stakes corporate movements or requiring a dependable, quiet sanctuary between meetings, our executive black car service delivers unparalleled peace of mind.",
                    "With a fleet of meticulously detailed late-model vehicles and a team of career professionals, we ensure every mile of your journey is a masterclass in precision and poise."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            />

            <FeaturesGrid title="Why Bayou Black Cars Service?" />
            <FleetTabs />
            <CTABanner />
            <WhyTrust />
            <CityAirportGrid />
            <FAQAccordion data={blackCarFaqs} />
        </main>
    );
}
