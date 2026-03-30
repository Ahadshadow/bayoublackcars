import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import QuinceaneraLimoFleet from '@/components/QuinceaneraLimoPage/QuinceaneraLimoFleet';
import QuinceaneraLimoBrideGroom from '@/components/QuinceaneraLimoPage/QuinceaneraLimoBrideGroom';
import QuinceaneraLimoBanner from '@/components/QuinceaneraLimoPage/QuinceaneraLimoBanner';
import QuinceaneraLimoProcess from '@/components/QuinceaneraLimoPage/QuinceaneraLimoProcess';
import QuinceaneraLimoVenues from '@/components/QuinceaneraLimoPage/QuinceaneraLimoVenues';
import QuinceaneraLimoWhyChoose from '@/components/QuinceaneraLimoPage/QuinceaneraLimoWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Quinceañera Limo Service | Bayou Black Cars",
    description: "Arrive in style with our Quinceañera limo service. Celebrate your special day with luxury, elegance, and unforgettable memories!"
};

const quinceFaqs = [
    {
        question: "What is the standard duration for a Quinceañera reservation?",
        answer: "Our tailored packages typically range from 4 to 6 hours, providing ample time for home pickup, church arrival, scenic photo sessions, and the final grand entry at the venue."
    },
    {
        question: "Are we permitted to add custom decorations to the interior?",
        answer: "Certainly. We can provide standard accents like ribbons or linens in your theme colors. For more personalized decor, please coordinate with our event planning team."
    },
    {
        question: "Can the vehicle accommodate a full Quinceañera ballgown?",
        answer: "Absolutely. We strongly recommend our stretch SUVs or large party buses, which feature spacious doors and high ceilings designed to manage larger dresses comfortably."
    },
    {
        question: "Is it possible to supply our own refreshments?",
        answer: "We provide chilled water and ice as standard. You are more than welcome to bring your favorite non-alcoholic drinks to stock the integrated bar area for your group."
    },
    {
        question: "Do you offer multi-vehicle support for the Court of Honor?",
        answer: "Yes, we can provide a lead limousine for the Quinceañera and separate executive SUVs or vans to ensure the entire court and family travel in unified style."
    }
];

export default function QuinceaneraLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Graceful Quinceañera Carriage & Limo Service"
                description="Make your 15th birthday a fairytale reality. Bayou Black Cars provides sophisticated, elegant transportation designed to make your Quinceañera truly magical and unforgettable."
                bgImage="/HERO section/servies/Quinceanera Limo Service hero.webp"
            />
            <QuinceaneraLimoFleet />
            <QuinceaneraLimoBrideGroom />
            <QuinceaneraLimoBanner />
            <QuinceaneraLimoProcess />
            <QuinceaneraLimoVenues />
            <QuinceaneraLimoWhyChoose />
            <FAQAccordion data={quinceFaqs} />
        </main>
    );
}
