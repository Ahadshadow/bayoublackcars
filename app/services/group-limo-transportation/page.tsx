import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import GroupLimoTravelTogether from '@/components/GroupLimoPage/GroupLimoTravelTogether';
import GroupLimoFleet from '@/components/GroupLimoPage/GroupLimoFleet';
import GroupLimoBenefits from '@/components/GroupLimoPage/GroupLimoBenefits';
import GroupLimoBanner from '@/components/GroupLimoPage/GroupLimoBanner';
import GroupLimoCommitment from '@/components/GroupLimoPage/GroupLimoCommitment';
import GroupLimoEnjoy from '@/components/GroupLimoPage/GroupLimoEnjoy';
import GroupLimoBookForm from '@/components/GroupLimoPage/GroupLimoBookForm';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Group Limo Transportation Service | Bayou Black Cars",
    description: "Reliable group limo transportation service. Bayou provides luxury vehicles and professional chauffeurs for group travel."
};

const groupFaqs = [
    {
        question: "What is the maximum group size Bayou can support?",
        answer: "Through our fleet of executive coaches and high-capacity buses, we can comfortably manage groups of up to 50 passengers in a single vehicle. For larger delegations, we deploy coordinated multi-vehicle convoys."
    },
    {
        question: "Is there sufficient cargo space for group luggage?",
        answer: "Yes, our specialized group vehicles like corporate Sprinter vans and mini-coaches feature dedicated high-capacity storage areas, ensuring ample room for equipment and travel gear."
    },
    {
        question: "Can our itinerary include multiple pickup locations?",
        answer: "Certainly. Our group logistics are fully customizable to include several departure and arrival points, allowing for seamless coordination of all your team members."
    },
    {
        question: "Do you facilitate transport for corporate team-building events?",
        answer: "Yes, we specialize in large-scale professional travel, providing reliable transit for company retreats, offsite workshops, and major corporate excursions."
    },
    {
        question: "Can our entire group travel within the same vehicle?",
        answer: "We prioritize keeping your group together. Our logistics team will recommend the most efficient vehicle class to ensure unified comfort for every passenger in your party."
    }
];

export default function GroupLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Seamless Group Travel Solutions"
                description="Coordinate your team or guest list with ease. Bayou provides professional, high-capacity transportation that ensures everyone arrives together, safely and in unified comfort."
                bgImage="/HERO section/servies/Group Limo Transportation hero.png"
            />
            <GroupLimoTravelTogether />
            <GroupLimoFleet />
            <GroupLimoBenefits />
            <GroupLimoBanner />
            <GroupLimoCommitment />
            <GroupLimoEnjoy />
            <GroupLimoBookForm />
            <FAQAccordion data={groupFaqs} />
        </main>
    );
}
