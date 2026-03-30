import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import FuneralLimoFleet from '@/components/FuneralLimoPage/FuneralLimoFleet';
import FuneralLimoServices from '@/components/FuneralLimoPage/FuneralLimoServices';
import FuneralLimoBanner from '@/components/FuneralLimoPage/FuneralLimoBanner';
import FuneralLimoProcess from '@/components/FuneralLimoPage/FuneralLimoProcess';
import FuneralLimoServiceCoverage from '@/components/FuneralLimoPage/FuneralLimoServiceCoverage';
import FuneralLimoDetails from '@/components/FuneralLimoPage/FuneralLimoDetails';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Funeral Limo Service | Professional limo hire for funerals | Bayou",
    description: "Comfortable, dignified transportation with our limo funeral car, funeral limo service, and Mercedes funeral limo. Compassionate and reliable service."
};

const funeralFaqs = [
    {
        question: "What is the guest capacity of your funeral limousines?",
        answer: "Our standard funeral vehicles typically provide comfortable seating for 8 to 10 passengers, allowing the immediate family to journey together in privacy."
    },
    {
        question: "Do you support transport for the entire funeral procession?",
        answer: "Yes, we can coordinate multiple vehicles—including executive sedans and luxury vans—to accommodate the broader family and close associates."
    },
    {
        question: "Are your chauffeurs trained in funeral service protocol?",
        answer: "Absolutely. Our professional chauffeurs are experienced in funeral etiquette, providing a quiet, compassionate, and highly respectful service."
    },
    {
        question: "What vehicle color options are available for these services?",
        answer: "We provide immaculate black vehicles, as is traditional and appropriate for funeral services. Please contact us for any specific fleet requests."
    },
    {
        question: "How is coordination managed with the funeral home?",
        answer: "We work directly with your chosen funeral director or family lead to coordinate exact timing, route planning, and procession order for a seamless experience."
    }
];

export default function FuneralLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Dignified Funeral Transportation"
                description="Providing quiet, respectful, and reliable support during difficult times. Bayou ensures your family travels together in comfort and dignity as you honor your loved ones."
                bgImage="/HERO section/servies/Funeral Limo Transportation hero.webp"
            />
            <FuneralLimoFleet />
            <FuneralLimoServices />
            <FuneralLimoBanner />
            <FuneralLimoProcess />
            <FuneralLimoServiceCoverage />
            <FuneralLimoDetails />
            <FAQAccordion data={funeralFaqs} />
        </main>
    );
}
