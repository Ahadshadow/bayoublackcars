import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import NEMTFleet from '@/components/NEMTPage/NEMTFleet';
import NEMTServices from '@/components/NEMTPage/NEMTServices';
import NEMTBanner from '@/components/NEMTPage/NEMTBanner';
import NEMTProcess from '@/components/NEMTPage/NEMTProcess';
import NEMTHospitals from '@/components/NEMTPage/NEMTHospitals';
import NEMTWhyChoose from '@/components/NEMTPage/NEMTWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Safe Non-Emergency Medical Transportation | Bayou Black Cars",
    description: "Dependable non-emergency medical transportation for safe, timely, and comfortable rides to medical appointments with Bayou Black Cars expert care."
};

const nemtFaqs = [
    {
        question: "What is the scope of Non-Emergency Medical Transit (NEMT)?",
        answer: "NEMT is a dedicated service for individuals attending medical appointments, rehabilitation, or therapy sessions who require professional transit but do not need emergency medical intervention during the trip."
    },
    {
        question: "Can our loved ones or caregivers join the journey?",
        answer: "Yes, we prioritize patient comfort. One family member or designated caregiver is encouraged to accompany the patient at no additional cost for added support."
    },
    {
        question: "Are your transit vehicles equipped for wheelchair access?",
        answer: "We provide a range of specialized vehicles, some including professional ramps or lift systems. Please indicate your specific accessibility needs during booking."
    },
    {
        question: "How can I coordinate travel for a series of recurring treatments?",
        answer: "Scheduling recurring appointments is easy. Our platform or dispatch team can lock in your preferred schedule for weekly or monthly visits to ensure total reliability."
    },
    {
        question: "Do chauffeurs provide door-through-door assistance?",
        answer: "Yes, our trained professionals are happy to provide bedside-to-facility support, assisting patients from their home directly into their medical appointment if requested."
    }
];

export default function NEMTPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Compassionate Medical Transit Services"
                description="Safe and reliable transportation for your healthcare appointments. Bayou Black Cars provides a respectful, door-to-door environment for patients requiring assistance during their journey."
                bgImage="/HERO section/servies/Non-Emergency Medical Transportation hero.png"
            />
            <NEMTFleet />
            <NEMTServices />
            <NEMTBanner />
            <NEMTProcess />
            <NEMTHospitals />
            <NEMTWhyChoose />
            <FAQAccordion data={nemtFaqs} />
        </main>
    );
}
