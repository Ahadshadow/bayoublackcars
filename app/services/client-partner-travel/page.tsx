import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import ClientPartnerFleet from '@/components/ClientPartnerPage/ClientPartnerFleet';
import ClientPartnerHowItWorks from '@/components/ClientPartnerPage/ClientPartnerHowItWorks';
import ClientPartnerBanner from '@/components/ClientPartnerPage/ClientPartnerBanner';
import ClientPartnerWhyBook from '@/components/ClientPartnerPage/ClientPartnerWhyBook';
import ClientPartnerWhyChoose from '@/components/ClientPartnerPage/ClientPartnerWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Client & Partner Travel | Executive Chauffeur Service Bayou",
    description: "Impress clients and partners with luxury chauffeur travel by Bayou. Executive vehicles, professional drivers, and seamless VIP transportation."
};

const clientPartnerFaqs = [
    {
        question: "How do I facilitate transport for our business associates?",
        answer: "Arranging travel for partners is seamless. Use our digital reservation platform or speak with your dedicated account manager for priority coordination, even for urgent requests."
    },
    {
        question: "Do you support complex multi-stop tour itineraries?",
        answer: "Yes, our executive chauffeur service is tailored for multi-destination visits, site inspections, and back-to-back dinner engagements, with chauffeurs remaining on standby."
    },
    {
        question: "Can we request a chauffeur with specific linguistic skills?",
        answer: "We employ a versatile team of professionals. While subject to availability, please specify your language preferences during booking, and we will strive to match your requirement."
    },
    {
        question: "What defines the Bayou executive VIP standard?",
        answer: "Our VIP assurance includes meticulously prepared vehicles, adherence to professional corporate etiquette, bespoke amenities, and our most seasoned chauffeurs."
    },
    {
        question: "What are your policies regarding privacy and security?",
        answer: "Confidentiality is paramount. All Bayou chauffeurs are bound by non-disclosure agreements to protect the privacy of your business discussions and personal data."
    }
];

export default function ClientPartnerPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Elite Guest & Partner Travel Logistics"
                description="Reinforce your professional image with luxury transport for your most valued guests. Bayou Black Cars provides discreet, top-tier travel solutions that reflect your commitment to quality."
                bgImage="/HERO section/servies/Client & Partner Travel  hero.png"
            />
            <ClientPartnerFleet />
            <ClientPartnerHowItWorks />
            <ClientPartnerBanner />
            <ClientPartnerWhyBook />
            <ClientPartnerWhyChoose />
            <FAQAccordion data={clientPartnerFaqs} />
        </main>
    );
}
