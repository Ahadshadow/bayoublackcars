import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import CityToursFleet from '@/components/CityToursPage/CityToursFleet';
import CityToursHowItWorks from '@/components/CityToursPage/CityToursHowItWorks';
import CityToursBanner from '@/components/CityToursPage/CityToursBanner';
import CityToursWhyBook from '@/components/CityToursPage/CityToursWhyBook';
import CityToursWhyChoose from '@/components/CityToursPage/CityToursWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury City Tours | Bayou",
    description: "Explore top attractions with luxury city tours by Bayou. Private chauffeurs, premium vehicles, and customized sightseeing experiences."
};

const cityTourFaqs = [
    {
        question: "Which regions are covered by your private sightseeing tours?",
        answer: "We deliver elite city excursions across Chicago, New Orleans, Baton Rouge, and other major hubs in IL and LA. Custom regions can be arranged upon request."
    },
    {
        question: "Can I personalize the route according to my interests?",
        answer: "Absolutely! Our sightseeing tours are fully bespoke. Share your preferred landmarks with us, and we will design a route that matches your specific curiosity."
    },
    {
        question: "Which vehicle classes are suited for city exploration?",
        answer: "Our fleet ranges from intimate executive sedans to grand stretch limos and corporate Sprinter vans, ensuring the right fit for couples or large touring groups."
    },
    {
        question: "What is the typical duration of a private tour?",
        answer: "Our excursions range from a 3-hour highlight reel to full-day immersive experiences. We also provide multi-day tour support for deeper exploration."
    },
    {
        question: "Do chauffeurs provide local insights and history?",
        answer: "Yes, our professional chauffeurs possess deep local knowledge and are happy to share insights on architecture, history, and the city's best-kept secrets."
    },
    {
        question: "Are we allowed to pause for photography or dining?",
        answer: "Of course! Our tours are designed for your enjoyment. You can stop whenever you wish for the perfect photo, a shopping break, or a refined dining experience."
    },
    {
        question: "Is this service appropriate for high-profile VIPS?",
        answer: "Yes, we specialize in discreet, high-tier transport for executives and VIPS who require a secure and private sightseeing environment."
    },
    {
        question: "How can I secure a booking for a Bayou City Tour?",
        answer: "Reservations can be made via our digital portal, by phone, or through email. Our dispatch team is available 24/7 to help you coordinate your perfect outing."
    },
    {
        question: "What in-vehicle amenities are provided?",
        answer: "Expect a premium environment with integrated WiFi, climate control, leather interiors, privacy partitions, and complimentary chilled water for all guests."
    }
];

export default function CityToursPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Bespoke Private City Excursions"
                description="Rediscover the city's landmarks in absolute luxury with Bayou Black Cars. Our customized sightseeing tours provide a sophisticated way to explore iconic skylines and local culture with a private chauffeur."
                bgImage="/HERO section/servies/city tours hero .png"
            />
            <CityToursFleet />
            <CityToursHowItWorks />
            <CityToursBanner />
            <CityToursWhyBook />
            <CityToursWhyChoose />
            <FAQAccordion data={cityTourFaqs} />
        </main>
    );
}
