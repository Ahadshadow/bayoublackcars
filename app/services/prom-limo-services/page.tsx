import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import PromLimoFleet from '@/components/PromLimoPage/PromLimoFleet';
import PromLimoServices from '@/components/PromLimoPage/PromLimoServices';
import PromLimoBanner from '@/components/PromLimoPage/PromLimoBanner';
import PromLimoProcess from '@/components/PromLimoPage/PromLimoProcess';
import PromLimoVenues from '@/components/PromLimoPage/PromLimoVenues';
import PromLimoWhyChoose from '@/components/PromLimoPage/PromLimoWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Prom Limo Service - Prom VIP Arrival at its Best | Bayou",
    description: "Arrive at prom in VIP style with our luxury Prom limo service. Experience elegance, comfort, and unforgettable memories. Book your ride today!"
};

const promFaqs = [
    {
        question: "What is the guest capacity for a prom limousine?",
        answer: "Our elegant stretch limousines typically serve 8 to 10 guests, while our premium party buses and high-capacity Sprinters can accommodate groups up to 40, ensuring friends can celebrate together."
    },
    {
        question: "What safety protocols are in place for prom night chauffeurs?",
        answer: "Safety is our absolute priority. Each chauffeur undergoes comprehensive background checks and specialized training. We maintain a strict parent-friendly policy, ensuring a safe and responsible environment for all students."
    },
    {
        question: "Can we reserve a vehicle for simple pickup and drop-off?",
        answer: "For prom night, we offer dedicated hourly packages. This guarantees that your vehicle and chauffeur remain exclusive to your group for the entire evening, providing a reliable link between photos, dinner, and the dance."
    },
    {
        question: "Is there sufficient interior space for formal attire?",
        answer: "Definitely. Our vehicles are selected for their spacious cabins and easy-entry doors, comfortably accommodating even the most voluminous gowns and formalwear."
    },
    {
        question: "Are we permitted to use our own music systems?",
        answer: "Yes, our entire prom fleet features high-quality sound systems with integrated Bluetooth support, allowing you to control the atmosphere with your own curated playlists."
    }
];

export default function PromLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Stunning Prom Night Limousine Service"
                description="Create memories that last a lifetime. Arrive at your once-in-a-lifetime event with absolute style, elegance, and peace of mind with Bayou Black Cars's premium prom chauffeur services."
                bgImage="/HERO section/servies/Prom Limo Services hero.webp"
            />
            <PromLimoFleet />
            <PromLimoServices />
            <PromLimoBanner />
            <PromLimoProcess />
            <PromLimoVenues />
            <PromLimoWhyChoose />
            <FAQAccordion data={promFaqs} />
        </main>
    );
}
