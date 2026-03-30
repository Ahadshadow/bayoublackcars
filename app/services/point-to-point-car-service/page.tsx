import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import PointToPointFleet from '@/components/PointToPointPage/PointToPointFleet';
import PointToPointOccasions from '@/components/PointToPointPage/PointToPointOccasions';
import PointToPointWhyChooseUs from '@/components/PointToPointPage/PointToPointWhyChooseUs';
import PointToPointExperiencesBooking from '@/components/PointToPointPage/PointToPointExperiencesBooking';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Point-to-Point Limo Service | Bayou",
    description: "Travel effortlessly between destinations with Bayou point-to-point Limo service. Direct, private, and comfortable transportation for any occasion."
};

const pointToPointFaqs = [
    {
        question: "What is point-to-point limousine service?",
        answer: "Point-to-point service is a direct transfer from one specific location to another. Unlike hourly service, you are billed based on the distance and route between your pickup and drop-off points."
    },
    {
        question: "Is point-to-point service better than a rideshare?",
        answer: "Yes, our service offers guaranteed luxury, professional chauffeurs, a meticulously maintained fleet, and the certainty of a scheduled pickup, which rideshares cannot always provide."
    },
    {
        question: "Can I book a point-to-point ride for a late-night event?",
        answer: "Yes, we operate 24/7. Whether you need a ride home from a gala or a transfer to a late-night flight, our chauffeurs are available around the clock."
    },
    {
        question: "How do you handle wait times for point-to-point transfers?",
        answer: "We include a complimentary wait time window for all pickups. If you require a longer wait, we recommend our hourly service for better flexibility and value."
    },
    {
        question: "Can I choose my vehicle for a point-to-point transfer?",
        answer: "Definitely. You can select from our range of executive sedans, luxury SUVs, or even a stretch limousine depending on your group size and style preference."
    }
];

export default function PointToPointServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Discrete Point-to-Point Direct Transit"
                description="Experience the most efficient and elegant way to navigate between destinations. Bayou Black Cars provides precise, private transfers between any two locations, ensuring you arrive with absolute punctuality and unparalleled style."
                bgImage="/HERO section/servies/Point to Point Car Service hero.png"
            />
            <PointToPointFleet />
            <PointToPointOccasions />
            <PointToPointWhyChooseUs />
            <PointToPointExperiencesBooking />
            <FAQAccordion data={pointToPointFaqs} />
        </main>
    );
}
