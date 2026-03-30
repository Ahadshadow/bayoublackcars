import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import WeddingLimoFleet from '@/components/WeddingLimoPage/WeddingLimoFleet';
import WeddingLimoServices from '@/components/WeddingLimoPage/WeddingLimoServices';
import WeddingLimoBanner from '@/components/WeddingLimoPage/WeddingLimoBanner';
import WeddingLimoWhyChoose from '@/components/WeddingLimoPage/WeddingLimoWhyChoose';
import WeddingLimoVenues from '@/components/WeddingLimoPage/WeddingLimoVenues';
import WeddingLimoPackages from '@/components/WeddingLimoPage/WeddingLimoPackages';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Wedding Limo Service | Bayou Black Cars",
    description: "Make your big day unforgettable with our luxury wedding limo service. Elegant transportation for the bride, groom, and bridal party."
};

const weddingFaqs = [
    {
        question: "When should I reserve my wedding limousine?",
        answer: "To ensure your preferred vehicle is available, we suggest booking your wedding transportation at least 6 to 12 months ahead of time, particularly during the high season from May to October."
    },
    {
        question: "Is it possible to decorate the limousine for our wedding theme?",
        answer: "Yes, we welcome tasteful decorations that align with your wedding aesthetic. Please coordinate with us in advance so we can ensure everything is ready for your big day."
    },
    {
        question: "Does the chauffeur provide assistance with the wedding dress?",
        answer: "Our professional chauffeurs are experts in wedding etiquette. They are happy to assist with the bridal gown and ensure a perfect, red-carpet-style entrance at your venue."
    },
    {
        question: "Do you provide shuttle services for our guests?",
        answer: "Yes, we offer premium Sprinter vans and luxury mini-coaches that are ideal for moving guests between hotels, ceremonies, and reception locations seamlessly."
    },
    {
        question: "What items are included in your wedding transportation package?",
        answer: "Our standard wedding packages often feature a 'Just Married' sign, a literal red carpet service, chilled non-alcoholic refreshments, and a tuxedo-attired professional chauffeur."
    }
];

export default function WeddingLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Exquisite Wedding Limo Service"
                description="Trust Bayou Black Cars for sophisticated wedding transfers. We provide immaculate vehicles and professional chauffeurs to ensure your celebration starts with elegance and absolute reliability."
                bgImage="/HERO section/servies/Wedding Transportation hero.webp"
            />
            <WeddingLimoFleet />
            <WeddingLimoServices />
            <WeddingLimoBanner />
            <WeddingLimoWhyChoose />
            <WeddingLimoVenues />
            <WeddingLimoPackages />
            <FAQAccordion data={weddingFaqs} />
        </main>
    );
}
