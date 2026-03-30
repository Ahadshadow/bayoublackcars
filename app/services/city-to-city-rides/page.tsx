import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import CityToCityFleet from '@/components/CityToCityPage/CityToCityFleet';
import CityToCityHowItWorks from '@/components/CityToCityPage/CityToCityHowItWorks';
import CityToCityBanner from '@/components/CityToCityPage/CityToCityBanner';
import CityToCityWhyBook from '@/components/CityToCityPage/CityToCityWhyBook';
import CityToCityWhyChoose from '@/components/CityToCityPage/CityToCityWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury City-to-City Rides | Long Distance | Bayou Black Cars",
    description: "Travel in comfort with premium city to city limo rides by Bayou Black Cars. Professional chauffeurs and luxury vehicles for stress-free long-distance transfers."
};

const cityToCityFaqs = [
    {
        question: "How far can a regional intercity trip extend?",
        answer: "We offer long-distance chauffeur travel across any distance. Whether it's a 2-hour commute to a nearby city or an extensive 6-hour journey across states, we provide a relaxing and premium experience."
    },
    {
        question: "Is there a specific baggage limit for long-distance travel?",
        answer: "Capacity depends on your vehicle selection. Our luxury SUVs and high-capacity Sprinter vans provide significant space for multiple suitcases and personal gear."
    },
    {
        question: "Can we incorporate scheduled stops during the journey?",
        answer: "Yes, our city-to-city service is highly flexible. You can arrange scheduled breaks for meals, rest, or sightseeing throughout your trip."
    },
    {
        question: "Is high-speed connectivity available for longer journeys?",
        answer: "Most of our executive fleet is equipped with dedicated WiFi, enabling you to remain productive or entertained during your entire intercity ride."
    },
    {
        question: "How are the rates determined for intercity transfers?",
        answer: "Pricing is calculated based on the total distance between zip codes, the specific vehicle class chosen, and any specialized stops or extras requested."
    }
];

export default function CityToCityServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Elite City to City Executive Travel"
                description="Bypass terminal stress and unpredictable transfers. Bayou Black Cars provides seamless, door-to-door regional transit in a climate-controlled, high-performance environment, allowing you to focus on strategy while we manage the miles."
                bgImage="/HERO section/servies/City to City Rides.webp"
            />
            <CityToCityFleet />
            <CityToCityHowItWorks />
            <CityToCityBanner />
            <CityToCityWhyBook />
            <CityToCityWhyChoose />
            <FAQAccordion data={cityToCityFaqs} />
        </main>
    );
}
