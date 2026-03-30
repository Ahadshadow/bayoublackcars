import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import BirthdayLimoFleet from '@/components/BirthdayLimoPage/BirthdayLimoFleet';
import BirthdayLimoServices from '@/components/BirthdayLimoPage/BirthdayLimoServices';
import BirthdayLimoBanner from '@/components/BirthdayLimoPage/BirthdayLimoBanner';
import BirthdayLimoHowItWorks from '@/components/BirthdayLimoPage/BirthdayLimoHowItWorks';
import BirthdayLimoVenues from '@/components/BirthdayLimoPage/BirthdayLimoVenues';
import BirthdayLimoPackages from '@/components/BirthdayLimoPage/BirthdayLimoPackages';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Birthday Limo Service | Bayou Black Cars",
    description: "Celebrate in style with our Birthday Limo Service! Enjoy luxury rides in custom-themed, decorated VIP vehicles, both limousines and party buses."
};

const birthdayFaqs = [
    {
        question: "Is it possible to decorate the birthday vehicle?",
        answer: "Absolutely! We welcome tasteful decorations that match your party theme. Just inform us in advance so we can assist with the arrangements."
    },
    {
        question: "Do you offer tailored birthday packages?",
        answer: "Yes, we have a variety of birthday celebration packages that can include balloons, non-alcoholic drinks, and customized routes to make your day memorable."
    },
    {
        question: "What is the minimum rental period for birthdays?",
        answer: "Usually, there is a 3-hour minimum for weekend evening events, but we offer flexibility based on the specific vehicle and date you choose."
    },
    {
        question: "Which vehicles work best for large groups?",
        answer: "For bigger parties, we recommend our luxury Sprinter vans or high-capacity party buses, which can hold up to 40 guests with premium sound and lighting."
    },
    {
        question: "Can we update our pickup points at the last minute?",
        answer: "Yes, we understand that celebration plans can be dynamic. Our 24/7 dispatch team is ready to adjust your itinerary whenever needed."
    }
];

export default function BirthdayLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Exquisite Birthday Celebration Transportation"
                description="Elevate your birthday festivities with our signature blend of luxury and logistics. From curated themed environments to our elite executive fleet, Bayou Black Cars transforms your special day into an unforgettable journey of comfort and celebration."
                bgImage="/HERO section/servies/Birthday Limo Service hero.webp"
            />
            <BirthdayLimoFleet />
            <BirthdayLimoServices />
            <BirthdayLimoBanner />
            <BirthdayLimoHowItWorks />
            <BirthdayLimoVenues />
            <BirthdayLimoPackages />
            <FAQAccordion data={birthdayFaqs} />
        </main>
    );
}
