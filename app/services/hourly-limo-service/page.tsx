import React from 'react';
import HeroSection from '@/components/reusable/HeroSection';
import IntroSection from '@/components/reusable/IntroSection';
import HourlyGrid from '@/components/reusable/HourlyGrid';
import FleetTabs from '@/components/reusable/FleetTabs';
import CTABanner from '@/components/reusable/CTABanner';
import ChauffeurFeatures from '@/components/reusable/ChauffeurFeatures';
import HowToBook from '@/components/reusable/HowToBook';
import BookingSection from '@/components/reusable/BookingSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Limo & Chauffeur Service | Bayou Black Cars",
    description: "Enjoy total flexibility with our premium hourly limo service. Reserve a private chauffeur for multi-stop itineraries, business meetings, or special occasions."
};

export default function HourlyLimoService() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <HeroSection
                title="Premium Hourly Limo Service"
                description="Your schedule, your route, our luxury. Maintain absolute control with our flexible hourly chauffeur service, designed for high-profile multi-phase itineraries and executive flexibility."
                bgImage="/HERO section/servies/Hourly Limo Service hero.jpg"
            />

            {/* 2. Intro Section 1: Matches Heading on Ref Site */}
            <IntroSection
                title="Unparalleled Autonomy on the Road"
                description={[
                    "Our hourly service is designed for those who value complete control over their schedule. Bayou Black Cars provides a sophisticated, multi-stop transportation solution that adapts dynamically to your changing plans, ensuring you move through your day with absolute efficiency and style.",
                    "From back-to-back corporate engagements to personalized city tours, our elite chauffeurs remain at your service for as long as required. Experience the tranquility of knowing a professional service awaits you at every stop, ready to depart whenever you are."
                ]}
                image="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />

            {/* 3. Hourly Grid: Bayou for Your Hourly Limo Service? */}
            <HourlyGrid />

            {/* 4. CTA Banner */}
            <CTABanner
                title="Ready to Ride in Style? Book Your Hourly Limo Today!"
                subtitle={
                    <>
                        Whether you're attending meetings, celebrating a special occasion, or simply exploring the city, our hourly limo service offers the perfect blend of luxury and flexibility. Reserve your chauffeured ride now and travel at your own pace — with comfort, elegance, and reliability every step of the way.
                    </>
                }
                bgImage="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
            />

            {/* 5. Why You'll Love Our Chauffeurs */}
            <ChauffeurFeatures />

            {/* 6. Fleet Tabs */}
            <FleetTabs />

            {/* 7. How to Book & Vehicles We Offer */}
            <HowToBook />

            {/* 8. Experience the Difference (Booking Section) */}
            <BookingSection />
        </main>
    );
}
