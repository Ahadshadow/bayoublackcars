import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import AnniversaryLimoFleet from '@/components/AnniversaryLimoPage/AnniversaryLimoFleet';
import AnniversaryLimoServices from '@/components/AnniversaryLimoPage/AnniversaryLimoServices';
import AnniversaryLimoBanner from '@/components/AnniversaryLimoPage/AnniversaryLimoBanner';
import AnniversaryLimoWhyChoose from '@/components/AnniversaryLimoPage/AnniversaryLimoWhyChoose';
import AnniversaryLimoDestinations from '@/components/AnniversaryLimoPage/AnniversaryLimoDestinations';
import AnniversaryLimoSpecialOfferings from '@/components/AnniversaryLimoPage/AnniversaryLimoSpecialOfferings';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Anniversary Limo Service | Bayou Black Cars",
    description: "Celebrate your anniversary in luxury with our premium limousine service. Elegant vehicles, professional chauffeurs, and VIP treatment."
};

const anniversaryFaqs = [
    {
        question: "Can I customize the limo for a surprise celebration?",
        answer: "Certainly! We provide personalized options such as floral arrangements, balloons, and custom messages to make your surprise truly special."
    },
    {
        question: "Are refreshments provided during the ride?",
        answer: "Yes, our anniversary packages include complimentary champagne. We are also happy to accommodate specific beverage requests to suit your taste."
    },
    {
        question: "Is it possible to visit multiple locations during the evening?",
        answer: "Absolutely. Simply share your planned itinerary with us, and we will coordinate a smooth and elegant journey with any number of stops."
    },
    {
        question: "Which vehicles are available for anniversary bookings?",
        answer: "We offer a curated selection of luxury sedans, stretch limousines, premium SUVs, and party buses to match your style and preference."
    },
    {
        question: "How can I secure my anniversary reservation?",
        answer: "You can easily book online or via our dedicated support line. We take care of all the logistics so you can focus on celebrating your relationship."
    }
];

export default function AnniversaryLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Bespoke Anniversary Chauffeur Excellence"
                description="Commemorate your milestone with the ultimate in romantic luxury. Bayou Black Cars provides a quiet sanctuary of elegance, featuring meticulously detailed vehicles and professional chauffeurs dedicated to making your anniversary unforgettable."
                bgImage="/HERO section/servies/Anniversary Limo Service hero.jpg"
            />
            <AnniversaryLimoFleet />
            <AnniversaryLimoServices />
            <AnniversaryLimoBanner />
            <AnniversaryLimoWhyChoose />
            <AnniversaryLimoDestinations />
            <AnniversaryLimoSpecialOfferings />
            <FAQAccordion data={anniversaryFaqs} />
        </main>
    );
}
