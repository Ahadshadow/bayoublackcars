import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import CorporateEventFleet from '@/components/CorporateEventPage/CorporateEventFleet';
import CorporateEventHowItWorks from '@/components/CorporateEventPage/CorporateEventHowItWorks';
import CorporateEventBanner from '@/components/CorporateEventPage/CorporateEventBanner';
import CorporateEventWhyBook from '@/components/CorporateEventPage/CorporateEventWhyBook';
import CorporateEventWhyChoose from '@/components/CorporateEventPage/CorporateEventWhyChoose';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Corporate Event Transportation | Executive Travel Bayou",
    description: "Premium corporate event transportation by Bayou. Luxury vehicles, professional chauffeurs, and reliable group travel for business events."
};

const corporateEventFaqs = [
    {
        question: "Can Bayou manage logistics for groups exceeding 100 guests?",
        answer: "Yes, we specialize in large-scale corporate event coordination. Utilizing our luxury mini-coaches and executive SUVs, we efficiently manage high-volume group movements."
    },
    {
        question: "Do you provide dedicated on-site logistics coordinators?",
        answer: "For major conferences, we can provide professional on-site dispatchers to oversee all arrivals and departures, ensuring your event schedule is maintained perfectly."
    },
    {
        question: "Is connectivity available for teams on executive coaches?",
        answer: "The majority of our corporate coaches and Sprinter vans are equipped with WiFi, allowing teams to stay engaged and productive during transit to retreats or meetings."
    },
    {
        question: "How are multi-point pickups coordinated for international teams?",
        answer: "Our event logistics team works closely with you to map out precise windows and locations, managing the entire flow through our centralized dispatch system."
    },
    {
        question: "Is vehicle branding available for high-profile business events?",
        answer: "Yes, for long-term summits or high-visibility conferences, we can facilitate custom branding or magnetic signage to align with your corporate identity."
    }
];

export default function CorporateEventPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="The Professional Standard for Managed Event Logistics"
                description="Expert group transport for your critical business gatherings. From executive board meetings to large conferences, Bayou Black Cars delivers coordinated, high-end travel for your entire organization."
                bgImage="/HERO section/servies/Corporate Event Transportation hero.jpg"
            />
            <CorporateEventFleet />
            <CorporateEventHowItWorks />
            <CorporateEventBanner />
            <CorporateEventWhyBook />
            <CorporateEventWhyChoose />
            <FAQAccordion data={corporateEventFaqs} />
        </main>
    );
}
