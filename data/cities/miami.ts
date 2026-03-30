import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const miamiData: CityData = {
    slug: 'miami',
    cityName: 'Miami',
    hero: {
        title: 'Bespoke Executive Transit',
        highlightedCity: 'Miami',
        description: "South Florida requires a transit strategy that matches its relentless energy and uncompromising style. From maneuvering through the dense financial grids of Brickell to orchestrating high-profile extractions from Miami International (MIA) and exclusive private jet centers, Bayou Black Cars delivers a profoundly superior travel standard. We elevate your Miami experience by replacing unpredictable traffic variables with a flawless, deeply luxurious, and hyper-punctual operational envelope.",
        backgroundImage: '/HERO section/city/Miami hero.png'
    },
    highlights: [
        {
            title: "Elite Airport Arrival",
            description: "Dedicated flight monitoring and terminal meet-and-greet for a smooth transition from MIA or FBOs.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Executive Transparency",
            description: "Fixed-rate pricing and all-inclusive quotes ensure your luxury travel remains within protocol.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Safety & Discretion",
            description: "Professional chauffeurs trained to the highest standards of security, privacy, and local navigation.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png"
        }
    ],
    brandAuthority: {
        title: "The Pinnacle of Miami Ground Logistics",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "MIA & Cruise Port Extractions",
                description: "Seamlessly bypassing the chaos of Miami International, regional FBOs, and PortMiami to guarantee an instant, dignified departure.",
                icon: Plane
            },
            {
                title: "Corporate & Financial Routing",
                description: "Providing an ironclad logistical advantage to executive teams operating within Brickell, Coral Gables, and Downtown.",
                icon: Briefcase
            },
            {
                title: "VIP Venue Insertions",
                description: "Execute flawless approaches to major art festivals, secluded island estates, and primary entertainment districts without delay.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Exacting South Florida Terminal Operations",
                paragraphs: [
                    "Bypassing the volatile congestion of Miami International (MIA) and Fort Lauderdale (FLL) requires absolute tactical awareness. Bayou Black Cars enforces immediate extractions, utilizing live flight telemetry to ensure your highly trained operative is staged precisely as your aircraft docks.",
                    "For executives or families pushing outward toward Palm Beach, the Florida Keys, or Naples, our sustained overland private transport replaces the unreliability of regional shuttles with deeply isolated, continuous luxury movement across the entire state.",
                    "We also execute highly specialized ground transition protocols for massive yacht charters and cruise departures via PortMiami, ensuring seamless continuity between land and sea."
                ]
            },
            {
                title: "The Standard of Metropolitan Excellence",
                paragraphs: [
                    "Operating within a city that demands perfection, Bayou Black Cars functions as your undeniable logistical anchor. Our Miami fleet is curated to the apex of luxury guidelines, delivering an impeccably sanitized, acoustic-isolated zone perfect for finalizing strategy or pure decompression.",
                    "Whether you engage our 'As Directed' hourly architecture for a multi-stop assault on the Design District, or request a single, high-profile insertion into a South Beach gala, we perform with global-tier precision and extreme discretion.",
                    "Deploying pristine tactical Sedans, massive executive SUVs, and luxury Sprinters, we mirror the professional power your enterprise commands."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Hub Events in Miami",
        items: [
            {
                category: "Art & Culture",
                title: "Art Basel Miami Beach",
                date: "December 3 - 6, 2026",
                location: "Miami Beach Convention Center",
                color: "text-blue-500"
            },
            {
                category: "Boating",
                title: "Miami International Boat Show",
                date: "February 12 - 16, 2026",
                location: "Herald Plaza & Museums",
                color: "text-cyan-500"
            },
            {
                category: "Sports",
                title: "Miami Grand Prix (Formula 1)",
                date: "May 2026",
                location: "Miami International Autodrome",
                color: "text-red-500"
            },
            {
                category: "Music",
                title: "Ultra Music Festival",
                date: "March 27 - 29, 2026",
                location: "Bayfront Park",
                color: "text-purple-500"
            }
        ]
    },
    reviews: {
        title: "Discerning Feedback",
        subtitle: "Miami Client Experiences",
        rating: "4.9",
        totalReviews: "210+",
        items: [
            {
                name: "Rodriguez",
                date: "3 months ago",
                rating: 5,
                text: "The most reliable car service I've used in Miami. Driver was early and very professional."
            },
            {
                name: "Smith",
                date: "5 months ago",
                rating: 5,
                text: "Exceptional service from the airport to South Beach. The SUV was spotless and the water was a nice touch."
            }
        ]
    }
};
