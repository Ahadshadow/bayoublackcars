import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import ChauffeurVehicles from '@/components/ChauffeurPage/ChauffeurVehicles';
import ChauffeurServiceTypes from '@/components/ChauffeurPage/ChauffeurServiceTypes';
import ChauffeurHowItWorks from '@/components/ChauffeurPage/ChauffeurHowItWorks';
import ChauffeurDiscretionBooking from '@/components/ChauffeurPage/ChauffeurDiscretionBooking';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Professional Chauffeur Service | Bayou Black Cars",
    description: "Discover a new standard of travel with Bayou premium chauffeur service. Luxury private chauffeurs for airport transfers, business travel, events, and VIP transportation."
};

const chauffeurFaqs = [
    {
        question: "How is a chauffeur different from a regular driver?",
        answer: "Chauffeurs are professionally trained, uniformed, and highly skilled in executive-level service. They focus on customer comfort, punctuality, and a premium experience."
    },
    {
        question: "Is your chauffeur service available 24/7?",
        answer: "Yes, we operate 24/7, 365 days a year, ensuring availability for early-morning airport transfers, late-night pickups, and last-minute bookings."
    },
    {
        question: "How much does a chauffeur service cost?",
        answer: "Pricing depends on the vehicle type, distance, duration, and service type. We offer fixed rates for airport transfers and custom pricing for hourly or long-distance services."
    },
    {
        question: "Do you offer hourly chauffeur services?",
        answer: "Yes! Our hourly service allows you to have a private chauffeur on standby, making multiple stops as needed."
    },
    {
        question: "Do you track flight delays?",
        answer: "Yes! We use real-time flight tracking to adjust your pickup time, ensuring no extra charges for flight delays."
    },
    {
        question: "Can the chauffeur meet me inside the airport?",
        answer: "Yes! We offer meet-and-greet service, where the chauffeur will be waiting at baggage claim with a personalized name sign."
    }
];

export default function ChauffeurServicesPage() {
    return (
        <main className="min-h-screen bg-white text-navy-primary">
            <HeroSection
                title="The Signature Private Chauffeur Experience"
                description="Discover a superior standard of global travel with Bayou Black Cars's professional chauffeur service. Our immaculate executive fleet, managed by discreet service professionals, ensures every destination is reached with absolute comfort and refined punctuality."
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />
            <ChauffeurVehicles />
            <ChauffeurServiceTypes />
            <ChauffeurHowItWorks />
            <ChauffeurDiscretionBooking />
            <FAQAccordion data={chauffeurFaqs} />
        </main>
    );
}
