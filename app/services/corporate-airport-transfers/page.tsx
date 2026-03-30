import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import CorporateTransfersFleet from '@/components/CorporateTransfersPage/CorporateTransfersFleet';
import CorporateTransfersHowItWorks from '@/components/CorporateTransfersPage/CorporateTransfersHowItWorks';
import CorporateTransfersBanner from '@/components/CorporateTransfersPage/CorporateTransfersBanner';
import CorporateTransfersWhyBook from '@/components/CorporateTransfersPage/CorporateTransfersWhyBook';
import CorporateTransfersWhyChoose from '@/components/CorporateTransfersPage/CorporateTransfersWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Corporate Airport Transfers | Executive Travel Bayou",
    description: "Professional corporate airport transfers by Bayou. Executive vehicles, punctual chauffeurs, flight tracking, and seamless business travel."
};

const corporateTransfersFaqs = [
    {
        question: "Do you provide real-time flight tracking for corporate arrivals?",
        answer: "Yes, we monitor all arriving flights using live data systems. If your arrival is ahead of schedule or delayed, your chauffeur will be waiting precisely when you land."
    },
    {
        question: "Is Meet & Greet service standard for executive travelers?",
        answer: "Absolutely. We offer a premium meet-and-greet option where our chauffeur welcomes the passenger at baggage claim or arrivals with a professional name board."
    },
    {
        question: "Can our organization establish a frequent traveler account?",
        answer: "Yes, we prioritize corporate partnerships. Setting up an account provides access to simplified booking, priority dispatch, and consolidated monthly billing."
    },
    {
        question: "How do you manage last-minute itinerary changes for executives?",
        answer: "We understand that business plans evolve. Bayou offers enhanced flexibility for rescheduling or adjusting pickup times to ensure your transit remains seamless."
    },
    {
        question: "Do chauffeurs provide full assistance with corporate baggage?",
        answer: "Our professional chauffeurs are trained to manage all luggage logistics, providing full support from the terminal hall directly to your final destination."
    }
];

export default function CorporateTransfersPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Signature Enterprise Airport Transit"
                description="The Bayou Black Cars standard for airport logistics. Enjoy punctual, private, and streamlined transfers that integrate seamlessly with your corporate travel schedule."
                bgImage="/HERO section/servies/Corporate Airport Transfers heero .webp"
            />
            <CorporateTransfersFleet />
            <CorporateTransfersHowItWorks />
            <CorporateTransfersBanner />
            <CorporateTransfersWhyBook />
            <CorporateTransfersWhyChoose />
            <FAQAccordion data={corporateTransfersFaqs} />
        </main>
    );
}
