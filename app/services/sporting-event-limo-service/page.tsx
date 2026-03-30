import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import FeaturesGrid from '@/components/reusable/FeaturesGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import WhyTrust from '@/components/reusable/WhyTrust';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Sporting Event Limo Service | Bayou",
    description: "Premium limousine service for game days. Bayou provides safe, stylish, and stress-free transportation to all major sporting events."
};

const sportsFaqs = [
    {
        question: "Do you provide coordination for regional stadium venues?",
        answer: "Yes, we deliver premium transit to all major sports arenas, including professional football stadiums, baseball parks, and regional racetracks."
    },
    {
        question: "Is tailgating supported with our reserved vehicle?",
        answer: "Absolutely. Our specialized party buses and high-capacity SUVs are perfect for pre-game tailgating, featuring integrated bars and professional sound systems for an elite game day experience."
    },
    {
        question: "How do you manage post-match traffic congestion?",
        answer: "Our seasoned chauffeurs utilize real-time traffic data and local knowledge of stadium exit routes to ensure you bypass the crowds and depart as efficiently as possible."
    },
    {
        question: "What happens if a game extends into overtime?",
        answer: "There is no need to rush. Our chauffeurs remain on standby until you are ready to depart, ensuring you never miss a critical play or victory celebration."
    },
    {
        question: "Can we reserve transport for an entire alumni or fan group?",
        answer: "Yes, we offer high-capacity executive coaches that are ideal for corporate hospitality groups, alumni associations, or large parties of fans looking for unified transit."
    }
];

export default function SportingEventLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Elite Game Day & Arena Transport"
                description="Arrive at the stadium like a VIP. Skip the parking gridlock and crowd stress with Bayou Black Cars's dedicated sporting event service, designed for enthusiasts who appreciate premium comfort."
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />
            <IntroSection
                title="The Ultimate Game Day Experience"
                description={[
                    "Whether you are attending the championship playoffs or a local rivalry match, Bayou Black Cars ensures your game day travel is a win. Our professional chauffeurs provide elite access to the venue, allowing you to focus on the action.",
                    "Journey with your fellow fans in a luxury SUV or a high-energy group coach, equipped with everything you need for a legendary game day celebration."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
            />
            <FeaturesGrid />
            <FleetTabs />
            <CTABanner
                title="Get Ready for the Big Game"
                subtitle="Book your Bayou sporting event service today and arrive at the stadium in style."
            />
            <WhyTrust />
            <FAQAccordion data={sportsFaqs} />
        </main>
    );
}
