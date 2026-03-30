import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import FeaturesGrid from '@/components/reusable/FeaturesGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import WhyTrust from '@/components/reusable/WhyTrust';
import InfoSection from '@/components/reusable/InfoSection';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Limousine Service | Bayou Black Cars",
    description: "Premium limousine service for all occasions. Bayou offers a world-class fleet, professional chauffeurs, and personalized luxury transportation."
};

const limoFaqs = [
    {
        question: "Which vehicle classes are available in your limousine fleet?",
        answer: "Our diverse inventory includes high-tier executive sedans, spacious luxury SUVs, traditional stretch limousines, and high-capacity coaches, perfectly suited for any event requirements."
    },
    {
        question: "What is the recommended lead time for a limousine booking?",
        answer: "We suggest securing your reservation 1-2 weeks ahead for major events. For regular business travel or airport transfers, a 24-48 hour window is typically sufficient to guarantee your preferred vehicle."
    },
    {
        question: "Are Bayou chauffeurs rigorously certified?",
        answer: "Yes, every Bayou chauffeur undergoes comprehensive background checks and specialized training in professional etiquette and defensive driving to ensure your total security."
    },
    {
        question: "Do you provide decor coordination for wedding transport?",
        answer: "Absolutely. We offer professional 'Just Married' signage and are happy to coordinate with your preferred vendors for custom floral or ribbon arrangements that match your theme."
    },
    {
        question: "Can I request specific in-vehicle amenities?",
        answer: "Yes, we pride ourselves on bespoke service. You can specify beverage preferences, climate settings, and even specific media options during your reservation process."
    }
];

export default function LimousineServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Premium Chauffeur-Driven Limousines"
                description="The ultimate expression of luxury travel. Our bespoke limousine services provide more than just transit—we deliver a curated journey defined by elegance and meticulous attention to detail."
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />
            <IntroSection
                title="Redefining Excellence in Limousine Travel"
                description={[
                    "At Bayou, we believe that true luxury resides in the details. From our flawlessly maintained fleet to our elite chauffeurs, every facet of our service is engineered to exceed the highest international standards.",
                    "Whether attending a high-stakes corporate summit, celebrating a milestone, or requiring the finest in private transit, we are dedicated to providing a sophisticated and seamless experience."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />
            <FeaturesGrid />
            <FleetTabs />
            <CTABanner
                title="Arrive in Style and Sophistication"
                subtitle="Book your premium limousine experience today and discover why Bayou is the preferred choice for discerning travelers."
            />
            <WhyTrust />
            <InfoSection
                title="Your Trusted Partner for Luxury Travel"
                description="With years of experience in the luxury transport industry, Bayou understands the unique needs of our clients. We combine tradition with innovation to deliver a service that is both timeless and modern."
            />
            <FAQAccordion data={limoFaqs} />
        </main>
    );
}
