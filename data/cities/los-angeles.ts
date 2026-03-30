import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const losAngelesData: CityData = {
    slug: 'los-angeles',
    cityName: 'Los Angeles',
    hero: {
        title: 'Premiere LA Chauffeur Service',
        highlightedCity: 'Los Angeles',
        description: "Arrive in the entertainment capital of the world with the presence your arrival deserves. From the high-profile gates of LAX to the exclusive corridors of Beverly Hills and Century City, Bayou Black Cars delivers a seamless, luxury transportation experience designed for those who demand the absolute best in privacy, comfort, and professional protocol.",
        backgroundImage: '/HERO section/city/Los Angeles hero.png'
    },
    highlights: [
        {
            title: "LAX & Van Nuys Elite",
            description: "Specialized terminal meet-and-greets and private FBO coordination for a seamless SoCal arrival.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
        },
        {
            title: "Transparent Executive Rates",
            description: "No surging, no surprises—fixed-rate luxury transit across the entire Los Angeles basin.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Discretion & Security",
            description: "Highly trained professional chauffeurs who prioritize your privacy and absolute safety in all conditions.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        }
    ],
    brandAuthority: {
        title: "The Gold Standard for Southern California Luxury Transit",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Strategic Airport & Harbor Logistics",
                description: "Efficient transfers between LAX, Burbank, and the Port of LA. We manage the Southern California traffic so you don't have to.",
                icon: Plane
            },
            {
                title: "High-Profile Executive Travel",
                description: "Bespoke ground transportation for the entertainment industry, corporate summits, and private itineraries in Malibu and Bel Air.",
                icon: Briefcase
            },
            {
                title: "Regional Milestone Tours",
                description: "Experience the Hollywood Hills, Santa Monica, and beyond with a personal chauffeur who understands the city's unique geography.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Seamless Los Angeles Airport & FBO Connectivity",
                paragraphs: [
                    "Navigating the complexes of Los Angeles International (LAX) or private terminals like Van Nuys (VNY) requires a level of professional coordination that Bayou lives by. Our commitment to punctuality means your chauffeur is positioned and ready the moment you land, with real-time flight tracking to adjust for any delays.",
                    "For those traveling to Santa Barbara, Palm Springs, or San Diego, our long-distance private transportation offers an executive-class alternative to regional air travel. Enjoy the absolute privacy and comfort of a late-model luxury SUV or sedan as we manage the 405 for you.",
                    "We provide specialized support for major award shows and high-visibility industry events, ensuring a dignified arrival and departure every time."
                ]
            },
            {
                title: "The Standard of Chauffeur Professionalism in SoCal",
                paragraphs: [
                    "In a city defined by style and performance, Bayou Black Cars acts as your reliable anchor. Our Los Angeles fleet is maintained to the highest luxury transport industry standards, ensuring a pristine environment for work or relaxation.",
                    "Whether you need an hourly chauffeur for a full day of production meetings or a single point-to-point transfer for an evening gala, our team delivers with the consistency of a global brand and the care of a local expert.",
                    "Every vehicle is equipped with premium leather seating, climate control, and a private atmosphere, reflecting the professionalism your brand requires."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Hub Events in Los Angeles",
        items: [
            {
                category: "Awards",
                title: "The Academy Awards (The Oscars)",
                date: "March 2026",
                location: "Dolby Theatre",
                color: "text-yellow-600"
            },
            {
                category: "Entertainment",
                title: "E3 Expo",
                date: "June 2026",
                location: "LA Convention Center",
                color: "text-blue-600"
            },
            {
                category: "Sports",
                title: "Dodgers Home Opener",
                date: "April 2026",
                location: "Dodger Stadium",
                color: "text-blue-800"
            },
            {
                category: "Music",
                title: "Coachella Music Festival",
                date: "April 2026",
                location: "Indio, CA (Regional)",
                color: "text-orange-500"
            }
        ]
    },
    reviews: {
        title: "Studio-Grade Feedback",
        subtitle: "LA Client Experiences",
        rating: "4.9",
        totalReviews: "240+",
        items: [
            {
                name: "Thompson",
                date: "2 months ago",
                rating: 5,
                text: "The only way to travel across LA. Professional, discreet, and always on time."
            },
            {
                name: "Davis",
                date: "4 months ago",
                rating: 5,
                text: "Exceptional service to LAX. The driver knew all the shortcuts to avoid the morning rush."
            }
        ]
    }
};
