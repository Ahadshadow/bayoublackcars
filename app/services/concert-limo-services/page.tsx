import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import ConcertLimoFleet from '@/components/ConcertLimoPage/ConcertLimoFleet';
import ConcertLimoServices from '@/components/ConcertLimoPage/ConcertLimoServices';
import ConcertLimoBanner from '@/components/ConcertLimoPage/ConcertLimoBanner';
import ConcertLimoProcess from '@/components/ConcertLimoPage/ConcertLimoProcess';
import ConcertLimoVenues from '@/components/ConcertLimoPage/ConcertLimoVenues';
import ConcertLimoPackages from '@/components/ConcertLimoPage/ConcertLimoPackages';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Concert Limo Service | Arrive in Luxury and Style | Bayou",
    description: "Elevate your concert night with our Concert Limo Service. Enjoy a luxurious, comfortable, and stylish ride to and from the venue."
};

const concertFaqs = [
    {
        question: "Will the vehicle wait for us during the event?",
        answer: "Yes, our event packages include inclusive standby time. Your chauffeur will remain on-site or nearby, ready for immediate pickup after the encore."
    },
    {
        question: "Which is better for a concert: a limo or a party bus?",
        answer: "For groups under 10, a stretch limo is a classic choice. For groups up to 40 who want to keep the energy high between venues, we recommend a party bus."
    },
    {
        question: "Can we bring our own refreshments?",
        answer: "Certainly! You are welcome to carry your own beverages. We supply ice and glassware to ensure your drinks stay chilled throughout the ride."
    },
    {
        question: "Where will the chauffeur drop us off at the venue?",
        answer: "We always aim for the most convenient access points permitted by venue security, ensuring you have the shortest possible walk to the entrance."
    },
    {
        question: "Do you provide transport to stadium venues outside the city?",
        answer: "Yes, we serve all major regional amphitheaters, stadiums, and concert halls, providing a seamless luxury link to any event location."
    }
];

export default function ConcertLimoPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Sophisticated Concert & Event Transportation"
                description="Bayou Black Cars elevates your concert experience with our premium event service. Bypass the frustration of event parking and traffic—arrive in luxury and absolute comfort with your entire group."
                bgImage="/HERO section/servies/Concert Limo Services hero.png"
            />
            <ConcertLimoFleet />
            <ConcertLimoServices />
            <ConcertLimoBanner />
            <ConcertLimoProcess />
            <ConcertLimoVenues />
            <ConcertLimoPackages />
            <FAQAccordion data={concertFaqs} />
        </main>
    );
}
