import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import FeaturesGrid from '@/components/reusable/FeaturesGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import WhyTrust from '@/components/reusable/WhyTrust';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Party Bus Service | Bayou Black Cars",
    description: "The ultimate party bus experience for your special events. Bayou offers high-capacity, feature-rich party buses with professional chauffeurs for unforgettable celebrations."
};

const partyBusFaqs = [
    {
        question: "What is the guest limit for your largest event bus?",
        answer: "Our flagship celebration bus can comfortably serve up to 40 passengers, featuring expansive lounge-style seating and a layout designed for social interaction."
    },
    {
        question: "What amenities are featured in the celebration buses?",
        answer: "Every bus is outfitted with high-performance audio systems, immersive LED lighting, integrated bars, and multiple media screens for the ultimate mobile venue experience."
    },
    {
        question: "Are we allowed to manage our own media and refreshments?",
        answer: "Definitely. You are welcome to carry your own refreshments (legal age requirements apply), and our media systems are fully compatible with Bluetooth and AUX inputs."
    },
    {
        question: "Is there a minimum reservation time for group outings?",
        answer: "Typically, we have a 4-hour minimum for weekend evening events. We offer enhanced flexibility for weekday or daytime itineraries—contact us for a bespoke quote."
    },
    {
        question: "Do you provide group transport for regional tours?",
        answer: "Yes, our buses are perfect for coordinated multi-stop tours of regional landmarks or specialized event circuits, ensuring your group travels together in unified comfort."
    }
];

export default function PartyBusServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Ultimate Mobile Celebration Experience"
                description="Transform your journey into the main event. Bayou Black Cars's feature-rich luxury buses provide a high-end venue on wheels, perfect for milestones, group celebrations, and grand outings."
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
            />
            <IntroSection
                title="Your Private Venue for Group Travel"
                description={[
                    "Why wait for the destination when the party starts as soon as you step on board? Our celebration buses are designed to be the highlight of your schedule, featuring immersive entertainment and sophisticated interiors.",
                    "Whether coordinating a grand night out or a refined group tour, Bayou Black Cars provides a safe, elegant, and high-energy environment for you and your guests to enjoy together."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
            />
            <FeaturesGrid />
            <FleetTabs />
            <CTABanner
                title="Turn Your Journey Into an Event"
                subtitle="Book your Bayou party bus today and experience the best in group celebration transportation."
            />
            <WhyTrust />
            <FAQAccordion data={partyBusFaqs} />
        </main>
    );
}
