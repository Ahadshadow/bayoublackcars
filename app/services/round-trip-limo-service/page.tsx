import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import RoundTripFleet from '@/components/RoundTripPage/RoundTripFleet';
import RoundTripOccasions from '@/components/RoundTripPage/RoundTripOccasions';
import RoundTripDifferences from '@/components/RoundTripPage/RoundTripDifferences';
import RoundTripExperiencesBooking from '@/components/RoundTripPage/RoundTripExperiencesBooking';
import FAQAccordion from '@/components/reusable/FAQAccordion';

export const metadata = {
    title: "Luxury Round Trip Limo Service | Bayou",
    description: "Experience stress-free travel with our round-trip limo service. Seamless transportation to your destination and back."
};

const roundTripFaqs = [
    {
        question: "What are the core features of a round-trip coordination?",
        answer: "Our round-trip solution includes your initial premium pickup, direct transit to your destination, and a pre-booked return journey synchronized with your schedule."
    },
    {
        question: "Is it possible to adjust my return window spontaneously?",
        answer: "Yes, we offer high flexibility for our clients. While we appreciate advance notice, you can coordinate return time adjustments through our 24/7 dispatch desk or directly with your chauffeur."
    },
    {
        question: "Are there benefits to booking rount-trip over separate journeys?",
        answer: "Often, yes. Round-trip bookings provide superior value through flat-rate pricing and the fundamental peace-of-mind that your return transport is already prioritized."
    },
    {
        question: "Do you support round-trip logistics for regional travel?",
        answer: "Absolutely. We provide extensive support for long-distance round-trips, whether you're traveling for a corporate summit or a weekend retreat."
    },
    {
        question: "What happens if my event schedule exceeds the expected time?",
        answer: "Our team remains dedicated to your timeline. If your itinerary runs over, simply notify us. We will ensure your vehicle remains on standby to wait for your departure."
    }
];

export default function RoundTripServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Comprehensive Round-Trip Travel"
                description="Your total journey, coordinated. Enjoy the convenience of Bayou Black Cars's dedicated return service, ensuring your luxury transportation is ready exactly when you are, for a seamless home-and-back experience."
                bgImage="/HERO section/servies/Round Trip Limo Service hero .png"
            />
            <RoundTripFleet />
            <RoundTripOccasions />
            <RoundTripDifferences />
            <RoundTripExperiencesBooking />
            <FAQAccordion data={roundTripFaqs} />
        </main>
    );
}
