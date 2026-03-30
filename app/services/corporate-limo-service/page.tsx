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
    title: "Executive Corporate Limo Service | Bayou Black Cars",
    description: "Elevate your business presence with Bayou professional corporate transportation. Reliable executive car services for meetings, events, and airport transfers."
};

export default function CorporateLimoServicePage() {
    const corporateFaqs = [
        {
            question: "Do you offer corporate accounts?",
            answer: "Yes, we provide specialized corporate accounts with streamlined booking, monthly billing options, and priority support for our business clients."
        },
        {
            question: "Is your corporate limo service available for group transportation?",
            answer: "Absolutely. Our fleet includes luxury SUVs, Sprinter vans, and executive mini-coaches perfect for corporate retreats, meetings, and team events."
        },
        {
            question: "Do your chauffeurs undergo background checks?",
            answer: "Every Bayou chauffeur undergoes rigorous background checks, regular drug testing, and professional training to ensure the highest safety and service standards."
        },
        {
            question: "Can I request a specific vehicle for my corporate transfer?",
            answer: "Yes, you can select your preferred vehicle type during the booking process, from premium sedans to executive SUVs."
        },
        {
            question: "How do you handle flight delays for corporate airport transfers?",
            answer: "We monitor all flights in real-time. If your flight is delayed or early, your chauffeur will adjust the pickup time accordingly at no extra cost to you."
        }
    ];

    const corporateInfoItems = [
        {
            title: "Seamless Executive Airport Transfers",
            description: [
                "In the business world, timing is everything. Our corporate airport limo service ensures you and your executives are never left waiting. We monitor your flights in real-time and provide on-time pickups across all major hubs.",
                "Travel in a quiet, climate-controlled environment where you can conduct business or relax before your flight. With premium amenities and professional chauffeurs, your airport transfer becomes a productive part of your workday."
            ],
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
            position: 'right' as const
        },
        {
            title: "Executive Chauffeur for Full-Day Meetings",
            description: [
                "For busy executives with back-to-back meetings across the city, our as-directed corporate service is the ultimate solution. Your dedicated chauffeur stays with you all day, providing a mobile office between appointments.",
                "Skip the stress of navigation and parking. Our chauffeurs take the most efficient routes, allowing you to focus entirely on your business. With Bayou, you have a reliable partner for every mile of your executive journey."
            ],
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png",
            position: 'left' as const
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <HeroSection
                title="Elite Executive Transportation for Global Professionals"
                description="Elevate your business travel with Bayou Black Cars's premium corporate transportation. We provide punctual, discreet, and luxury limo services designed for executives and global corporate teams."
                bgImage="/HERO section/servies/Corporate Limo Service hero.png"
            />

            {/* 2. Intro Section */}
            <IntroSection
                title="The Benchmark for Global Corporate Travel"
                description={[
                    "In the competitive world of global business, reliable travel is essential. Bayou Black Cars offers dedicated corporate travel solutions that prioritize efficiency and professional excellence for every executive journey.",
                    "Whether attending high-stakes board meetings or coordinating large-scale group event transport, our chauffeurs and fleet provide a consistent standard of refinement that reflects your company's commitment to quality."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            />

            {/* 3. Features Grid */}
            <FeaturesGrid
                title="Premier Corporate Travel Excellence"
            />

            {/* 4. Fleet Tabs */}
            <FleetTabs />

            {/* 5. CTA Banner */}
            <CTABanner />

            {/* 6. Why Trust Section */}
            <WhyTrust />

            {/* 7. City Airport Grid */}
            <CityAirportGrid />

            {/* 8. Detailed Content (InfoSection) */}
            <InfoSection
                title="Customized Travel for Corporate Needs"
                description="We understand the demands of the modern executive. Bayou provides flexible, dependable transportation that serves as a mobile office for your business travel."
                items={corporateInfoItems}
            />

            {/* 9. FAQs */}
            <FAQAccordion data={corporateFaqs} />
        </main>
    );
}
