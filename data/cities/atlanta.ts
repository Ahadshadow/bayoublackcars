import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const atlantaData: CityData = {
    slug: 'atlanta',
    cityName: 'Atlanta',
    hero: {
        title: 'Premium Ground Logistics in Atlanta',
        highlightedCity: 'Atlanta',
        description: "Operating within the dynamic center of the Southeast requires a transportation partner built for uncompromising precision. Whether you are navigating the critical financial corridors of Buckhead or orchestrating a seamless extraction from Hartsfield-Jackson International (ATL), Bayou Black Cars delivers a profoundly superior travel standard. Our highly trained driving operatives master the intricate Atlanta infrastructure, guaranteeing rapid, elegant, and perfectly synchronized movements across the metropolis.",
        backgroundImage: '/HERO section/city/atlante hero.jpg'
    },
    highlights: [
        {
            title: "ATL Aviation Support",
            description: "Tactical terminal greetings and immediate luxury deployments directly from Hartsfield-Jackson.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Guaranteed Structural Rates",
            description: "Execute your itineraries with absolute financial clarity through our locked, premium pricing models.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Ironclad Discretion",
            description: "Deploying strictly vetted professionals trained in high-level corporate and private security protocols.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        }
    ],
    brandAuthority: {
        title: "Atlanta's Definitive Executive Transit Solution",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Accelerated ATL Operations",
                description: "Mastering the massive footprint of Hartsfield-Jackson. We guarantee your ground exit is as rapid as your flight.",
                icon: Plane
            },
            {
                title: "Tech Sector & Finance Routing",
                description: "Deploying flawlessly executed transit schedules throughout Alpharetta, Midtown, and the Buckhead corporate network.",
                icon: Briefcase
            },
            {
                title: "VIP Venue Insertions",
                description: "Execute flawless approaches to Truist Park and Mercedes-Benz Stadium, bypassing aggressive parking environments entirely.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "High-Tier Atlanta Aviation Transfers",
                paragraphs: [
                    "Conquering the intense velocity of Hartsfield-Jackson (ATL) demands an operational specialist. Bayou Black Cars enforces absolute punctuality, utilizing live-tracking arrays to guarantee your designated chauffeur is anchored and waiting exactly when your aircraft hits the tarmac, instantly neutralizing delay-related friction.",
                    "If your mission requires expanding beyond the immediate city—perhaps pushing into the North Georgia ranges, Savannah, or Birmingham—our sustained overland private transport replaces the unreliability of regional flights with deeply isolated, continuous luxury movement.",
                    "We frequently manage the highly complex logistical demands of major entertainment productions, diplomatic movements, and critical corporate summits, guaranteeing an airtight operational envelope for every VIP passenger."
                ]
            },
            {
                title: "The Bayou Standard of Southern Distinction",
                paragraphs: [
                    "Within an economic hub that never decelerates, you require a transit platform that operates flawlessly under pressure. We maintain our Atlanta fleet to the absolute pinnacle of luxury guidelines, offering an impeccably sanitized, acoustic-isolated zone perfect for finalizing strategy or pure decompression.",
                    "Whether you actuate our hourly directive service for a brutal, multi-stop boardroom schedule, or request a single, high-profile insertion into a local gala, Bayou Black Cars executes with lethal efficiency and uncompromising grace.",
                    "Our sedans and heavy SUVs are inherently equipped to reflect absolute corporate power, delivering a distinguished atmosphere the moment you engage the door handle."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Elite Events in Atlanta",
        items: [
            {
                category: "Sports",
                title: "The Masters (Regional Hub Logistics)",
                date: "April 2026",
                location: "Augusta National (Via Atlanta Hub)",
                color: "text-green-600"
            },
            {
                category: "Business",
                title: "Atlanta Tech Summit",
                date: "October 2026",
                location: "Midtown Atlanta",
                color: "text-blue-500"
            },
            {
                category: "Music",
                title: "Music Midtown",
                date: "September 2026",
                location: "Piedmont Park",
                color: "text-pink-600"
            }
        ]
    },
    reviews: {
        title: "Metropolitan Feedback",
        subtitle: "Atlanta Client Experiences",
        rating: "4.8",
        totalReviews: "160+",
        items: [
            {
                name: "Jackson",
                date: "2 months ago",
                rating: 5,
                text: "The most reliable car service I've used in Atlanta. Chauffeur was professional and early."
            },
            {
                name: "Green",
                date: "4 months ago",
                rating: 5,
                text: "Exceptional transfer from ATL to Buckhead. The SUV was spotless."
            }
        ]
    }
};
