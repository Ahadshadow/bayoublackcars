import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import GraduationFleet from '@/components/GraduationEventsPage/GraduationFleet';
import GraduationHowItWorks from '@/components/GraduationEventsPage/GraduationHowItWorks';
import GraduationCTA from '@/components/GraduationEventsPage/GraduationCTA';
import GraduationWhyBook from '@/components/GraduationEventsPage/GraduationWhyBook';
import GraduationWhyChoose from '@/components/GraduationEventsPage/GraduationWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Graduation Limo Service | Bayou Black Cars",
    description: "Make your graduation day unforgettable with our luxury limo service. Elegant and safe transportation for graduates and their families with Bayou Black Cars."
};

const graduationFaqs = [
    {
        question: "How far in advance should I secure a graduation rental?",
        answer: "We suggest reserving your vehicle at least 1-2 months ahead, as graduation season is one of our busiest times and availability fills up rapidly."
    },
    {
        question: "Can we reserve a limousine for a short photo session?",
        answer: "Yes, we offer flexible time-based packages that are perfect for pre-ceremony pictures, the main event, and your post-graduation dinner or party."
    },
    {
        question: "Is sharing a party bus a good option for a graduate group?",
        answer: "Absolutely! Sharing a party bus is a popular and cost-effective way for a group of graduates to travel together safely while maintaining a festive atmosphere."
    },
    {
        question: "Are there specific packages tailored for graduation day?",
        answer: "Yes, our graduation-specific services often include multi-stop itineraries, extended standby times, and complimentary chilled water for all guests."
    },
    {
        question: "Do you provide luxury transport to university campuses?",
        answer: "Yes, we provide elegant transportation services to all major high schools, colleges, and university campuses throughout the entire regional area."
    }
];

export default function GraduationEventsPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Celebratory Graduation Limo Rentals"
                description="Honor your hard-earned milestone with a journey that reflects your achievement. From private sedans for families to high-capacity buses for the whole class, Bayou ensures a safe and memorable graduation transit."
                bgImage="/HERO section/servies/Graduation Events hero.webp"
            />
            <GraduationFleet />
            <GraduationHowItWorks />
            <GraduationCTA />
            <GraduationWhyBook />
            <GraduationWhyChoose />
            <FAQAccordion data={graduationFaqs} />
        </main>
    );
}
