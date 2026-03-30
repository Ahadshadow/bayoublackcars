import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import BachelorPartyLimoFleet from '@/components/BachelorPartyLimoPage/BachelorPartyLimoFleet';
import BachelorPartyLimoServices from '@/components/BachelorPartyLimoPage/BachelorPartyLimoServices';
import BachelorPartyLimoBanner from '@/components/BachelorPartyLimoPage/BachelorPartyLimoBanner';
import BachelorPartyLimoWhyChoose from '@/components/BachelorPartyLimoPage/BachelorPartyLimoWhyChoose';
import BachelorPartyLimoServiceAreas from '@/components/BachelorPartyLimoPage/BachelorPartyLimoServiceAreas';
import BachelorPartyLimoTopChoice from '@/components/BachelorPartyLimoPage/BachelorPartyLimoTopChoice';
import BachelorPartyLimoIconCards from '@/components/BachelorPartyLimoPage/BachelorPartyLimoIconCards';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Bachelor Party Limo Service | Bayou Black Cars",
    description: "Make your bachelor party unforgettable with our luxury limo service. Enjoy luxury, comfort, and VIP treatment for the ultimate night out!"
};

const bachelorFaqs = [
    {
        question: "Can we bring our own beverages on the ride?",
        answer: "Yes, you are welcome to bring your choice of drinks. We provide a prepared minibar area with ice and glassware for your convenience."
    },
    {
        question: "What is the guest capacity for bachelor group transport?",
        answer: "We offer a range of vehicles, from 6-passenger premium SUVs to 40-passenger high-capacity party buses, ensuring everyone can travel together."
    },
    {
        question: "When should I secure a booking for a celebration?",
        answer: "We recommend reserving at least 2-4 weeks in advance, particularly for weekend events during peak celebration seasons."
    },
    {
        question: "Is it possible to visit multiple venues throughout the night?",
        answer: "Absolutely. Our service is designed for flexibility. Your chauffeur will handle the logistics of the road, taking you between clubs or bars as you wish."
    },
    {
        question: "Are the vehicles equipped with integrated entertainment?",
        answer: "Yes, our celebration fleet features high-end sound systems, Bluetooth support, and dynamic atmospheric lighting to keep the party moving."
    }
];

export default function BachelorPartyLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Elite Bachelor & Bachelorette Celebration Logistics"
                description="Define your final night of freedom with the undisputed leader in celebration transport. Bayou Black Cars delivers a private, high-energy sanctuary on wheels, managed by elite chauffeurs to ensure your group travels with absolute safety and unparalleled style."
                bgImage="/HERO section/servies/Bachelor Party Limo Service hero.jpg"
            />
            <BachelorPartyLimoFleet />
            <BachelorPartyLimoServices />
            <BachelorPartyLimoBanner />
            <BachelorPartyLimoWhyChoose />
            <BachelorPartyLimoServiceAreas />
            <BachelorPartyLimoTopChoice />
            <BachelorPartyLimoIconCards />
            <FAQAccordion data={bachelorFaqs} />
        </main>
    );
}
