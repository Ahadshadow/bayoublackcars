import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import MeetingsOffsiteFleet from '@/components/MeetingsOffsitePage/MeetingsOffsiteFleet';
import MeetingsOffsiteHowItWorks from '@/components/MeetingsOffsitePage/MeetingsOffsiteHowItWorks';
import MeetingsOffsiteBanner from '@/components/MeetingsOffsitePage/MeetingsOffsiteBanner';
import MeetingsOffsiteWhyBook from '@/components/MeetingsOffsitePage/MeetingsOffsiteWhyBook';
import MeetingsOffsiteWhyChoose from '@/components/MeetingsOffsitePage/MeetingsOffsiteWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Corporate Car Service for Meetings | Bayou Black Cars",
    description: "Reliable corporate car service for meetings and offsite events. Bayou provides luxury vehicles and professional chauffeurs for business travel."
};

const meetingsFaqs = [
    {
        question: "How do you coordinate group logistics for major enterprise offsites?",
        answer: "We rely on a sophisticated logistics system and a premium fleet of executive coaches to synchronize arrivals and departures for delegations of any size."
    },
    {
        question: "Is it possible to secure a chauffeur for a day of back-to-back summits?",
        answer: "Yes, our daily-rate as-directed service is specifically designed for high-intensity schedules, providing a dedicated vehicle and chauffeur for however long your agenda requires."
    },
    {
        question: "Do you accommodate specialized presentation gear and executive cargo?",
        answer: "Our luxury SUVs and corporate vans provide expansive storage solutions, making them perfect for transporting technical equipment, trade show materials, and baggage."
    },
    {
        question: "Does Bayou provide transfers to remote or rural offsite venues?",
        answer: "Absolutely. We offer long-distance coordination to any regional retreat or offsite location, ensuring your entire team travels together in executive comfort."
    },
    {
        question: "What is the procedure for rapid meeting schedule adjustments?",
        answer: "We understand that corporate timelines are fluid. Bayou offers maximum flexibility, with the ability to modify pickup windows instantly through our 24/7 coordination desk."
    }
];

export default function MeetingsOffsitePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Corporate Offsite & Meeting Logistics"
                description="Reliable transit for high-stakes business events. We manage the flow of your executive teams and board members, ensuring punctuality and productivity during every mile."
                bgImage="/HERO section/servies/Meetings & Offsite Events hero.png"
            />
            <MeetingsOffsiteFleet />
            <MeetingsOffsiteHowItWorks />
            <MeetingsOffsiteBanner />
            <MeetingsOffsiteWhyBook />
            <MeetingsOffsiteWhyChoose />
            <FAQAccordion data={meetingsFaqs} />
        </main>
    );
}
