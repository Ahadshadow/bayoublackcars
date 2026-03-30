import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import FeaturesGrid from '@/components/reusable/FeaturesGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import WhyTrust from '@/components/reusable/WhyTrust';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Special Event Limo Service | Bayou",
    description: "Premium limousine service for any special event. From birthdays and anniversaries to galas and grand openings, Bayou provides the perfect luxury transport."
};

const specialEventFaqs = [
    {
        question: "Which variety of special occasions do you support?",
        answer: "We accommodate an extensive range of events, including refined red-carpet galas, corporate grand openings, sporting championships, concert tours, and significant personal milestones."
    },
    {
        question: "Can we coordinate multiple drop-off points for our guests?",
        answer: "Yes, our bespoke 'as-directed' hourly service is ideal for events with complex logistics, ensuring your group travels together while allowing for individual arrivals at different locations."
    },
    {
        question: "Is formal red-carpet service available upon request?",
        answer: "Absolutely. We provide a professional red-carpet rollout for high-stakes arrivals, ensuring a grand entrance that matches the prestige of your event."
    },
    {
        question: "How do you manage transport for high-volume guest lists?",
        answer: "For major summits or large galas, we provide dedicated on-site dispatchers and a scalable fleet to manage hundreds of arrivals and departures with total precision."
    },
    {
        question: "Are vehicle branding options available for corporate launches?",
        answer: "Yes, we offer professional branding solutions, including magnetic signage or custom wraps for high-visibility events. Contact our team to discuss your brand identity needs."
    }
];

export default function SpecialEventServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Bespoke Event Transportation"
                description="Elevate any milestone with tailored luxury. From grand openings to private galas, Bayou Black Cars coordinates every detail of your transport to ensure a flawless arrival and a lasting impression."
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />
            <IntroSection
                title="Your Event, Our Exceptional Service"
                description={[
                    "At Bayou Black Cars, we believe that every extraordinary event begins with a flawless journey. Whether you are attending a high-profile auction, a film premiere, or an intimate family celebration, we deliver a service level that honors the significance of the day.",
                    "Our event specialists collaborate with you to understand your specific logistics and aesthetic preferences, providing a seamless transportation plan that reflects your unique style."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />
            <FeaturesGrid />
            <FleetTabs />
            <CTABanner
                title="Elevate Your Next Special Occasion"
                subtitle="Book your Bayou special event service today and experience the difference that true luxury makes."
            />
            <WhyTrust />
            <FAQAccordion data={specialEventFaqs} />
        </main>
    );
}
