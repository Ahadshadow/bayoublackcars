import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const sanFranciscoData: CityData = {
    slug: 'san-francisco',
    cityName: 'San Francisco',
    hero: {
        title: 'Pinnacle Bay Area Transit',
        highlightedCity: 'San Francisco',
        description: "The speed of technological innovation requires ground transit that can match its velocity. From navigating the vertical intensity of Nob Hill to executing precise inter-campus transfers across Silicon Valley, Bayou Black Cars provides an elite logistical advantage. Bypass the unpredictability of regional commuting and secure a tactically flawless, deeply luxurious travel environment designed specifically for top-tier executives and tech leaders operating in Northern California.",
        backgroundImage: '/HERO section/city/San Francisco hero.png'
    },
    highlights: [
        {
            title: "SFO & SJC Terminal Elite",
            description: "Dedicated airport transfers for San Francisco International and San Jose, featuring real-time flight tracking and terminal meet-and-greet.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Transparent Executive Rates",
            description: "No surging, no surprises—fixed-rate luxury transit across the entire Bay Area and Silicon Valley hubs.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Safety & Discretion",
            description: "Professional chauffeurs vetted and trained for the unique demands of executive, celebrity, and private tech-sector travel.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png"
        }
    ],
    brandAuthority: {
        title: "The Dominant Force in Silicon Valley Transport",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Rapid SFO, SJC & OAK Extractions",
                description: "Overpowering the delays of Bay Area aviation hubs. We guarantee a rapid, dignified ground transition immediately upon landing.",
                icon: Plane
            },
            {
                title: "Tech Corridor & Financial Ops",
                description: "Deploying flawlessly executed transit schedules throughout Palo Alto, Cupertino, and the primary Downtown San Francisco grids.",
                icon: Briefcase
            },
            {
                title: "Elevated Regional Movements",
                description: "Execute flawless approaches to Napa Valley wine regions and Monterey business retreats with commanding ease.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Exacting Northern California Aviation Transfers",
                paragraphs: [
                    "Bypassing the immense volume at SFO or SJC demands true operational superiority. Bayou Black Cars enforces absolute punctuality, utilizing live-tracking arrays to guarantee your designated chauffeur is anchored and waiting exactly when your aircraft hits the tarmac, instantly neutralizing terminal friction.",
                    "If your mission requires expanding beyond the immediate city—perhaps pushing into Sacramento or deep into the coastal ranges—our sustained overland private transport replaces the unreliability of regional flights with deeply isolated, continuous luxury movement.",
                    "We frequently manage the highly complex logistical demands of major tech acquisitions, VIP board retreats, and prominent product launches with extreme care and zero delays."
                ]
            },
            {
                title: "The Bayou Signature of Innovation and Protocol",
                paragraphs: [
                    "Within an economic powerhouse driven by technology and finance, you require a transit platform that operates flawlessly under intense demands. We maintain our Northern California fleet to the absolute pinnacle of luxury guidelines, offering an impeccably sanitized, acoustic-isolated zone perfect for finalizing strategy or coding en route.",
                    "Whether you actuate our hourly directive service for a brutal, multi-stop Silicon Valley campus schedule, or request a high-profile insertion into a local gala, Bayou Black Cars executes with lethal efficiency and uncompromising grace.",
                    "Our sedans and heavy SUVs are inherently equipped to reflect absolute corporate power, delivering a distinguished atmosphere the moment you engage the door handle."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Elite Events in the Bay Area",
        items: [
            {
                category: "Tech",
                title: "Dreamforce (Salesforce)",
                date: "September 2026",
                location: "Moscone Center",
                color: "text-blue-600"
            },
            {
                category: "Sports",
                title: "Golden State Warriors Home Game",
                date: "Varies",
                location: "Chase Center",
                color: "text-yellow-600"
            },
            {
                category: "Cultural",
                title: "Outside Lands Music & Arts",
                date: "August 2026",
                location: "Golden Gate Park",
                color: "text-green-600"
            }
        ]
    },
    reviews: {
        title: "Executive Feedback",
        subtitle: "Bay Area Client Experiences",
        rating: "4.9",
        totalReviews: "190+",
        items: [
            {
                name: "Fisher",
                date: "2 months ago",
                rating: 5,
                text: "The most reliable car service I've used in San Francisco. Driver was early and very professional."
            },
            {
                name: "Patterson",
                date: "4 months ago",
                rating: 5,
                text: "Exceptional transfer from SFO to Palo Alto. The SUV was spotless and extremely quiet."
            }
        ]
    }
};
