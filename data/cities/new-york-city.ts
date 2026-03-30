import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const newYorkCityData: CityData = {
    slug: 'new-york-city',
    cityName: 'New York City',
    hero: {
        title: 'Apex Manhattan Ground Transportation',
        highlightedCity: 'New York City',
        description: "Dominate the pace of the global capital with a transit partner engineered for extreme precision. From the massive corporate density of the Financial District to rapid extractions from high-visibility Midtown avenues, Bayou Black Cars formulates the definitive New York movement strategy. Our elite chauffeurs dismantle the friction of Tri-State navigation, guaranteeing that you wield total logistical control while shifting between boardrooms and exclusive venues.",
        backgroundImage: '/HERO section/city/New York City hero.png'
    },
    highlights: [
        {
            title: "Tri-State Terminal Elite",
            description: "Seamless transfers between JFK, LGA, EWR, and private FBOs with dedicated meet-and-greet support.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Fixed Manhattan Pricing",
            description: "Transparent, distance-based rates for all borough-to-borough and regional transfers—no surging.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Protocol & Discretion",
            description: "Professional chauffeurs trained for the unique demands of executive, celebrity, and diplomatic travel.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        }
    ],
    brandAuthority: {
        title: "The Absolute Standard in NYC Executive Transit",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Rapid JFK, LGA & EWR Deployments",
                description: "Mastering the massive footprint of the Tri-State aviation networks to guarantee your ground exit is completely uninterrupted.",
                icon: Plane
            },
            {
                title: "Wall Street & Midtown Ops",
                description: "Delivering an ironclad logistical advantage to executive teams conducting high-frequency roadshows across Manhattan.",
                icon: Briefcase
            },
            {
                title: "Borough-to-Borough Supremacy",
                description: "Secure, highly comfortable, and perfectly timed transit linking Manhattan, Brooklyn, Queens, and the broader metropolitan region.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "High-Tier Tri-State Aviation Transfers",
                paragraphs: [
                    "Conquering the intense velocity of John F. Kennedy (JFK), LaGuardia (LGA), and Newark Liberty (EWR) demands an operational specialist. Bayou Black Cars enforces absolute punctuality, utilizing live-tracking arrays to guarantee your designated chauffeur is anchored and waiting exactly when your aircraft hits the tarmac, instantly neutralizing delay-related friction.",
                    "If your mission requires expanding beyond the immediate city—perhaps pushing into the Hamptons, Greenwich, or the Jersey coastline—our sustained overland private transport replaces the unreliability of regional trains with highly isolated, continuous luxury movement.",
                    "We frequently manage the highly complex logistical demands of diplomatic missions and global summits, delivering VIP personnel with extreme care, absolute privacy, and zero delays."
                ]
            },
            {
                title: "The Bayou Signature of Metropolitan Power",
                paragraphs: [
                    "Within the premier economic hub of the planet, you require a transit platform that operates flawlessly under intense pressure. We maintain our New York fleet to the absolute pinnacle of luxury guidelines, offering an impeccably sanitized, acoustic-isolated zone perfect for finalizing corporate strategy.",
                    "Whether you actuate our hourly directive service for a brutal, multi-stop boardroom schedule from Wall Street to Hudson Yards, or request a high-profile insertion into a local gala, Bayou Black Cars executes with lethal efficiency.",
                    "Our sedans and heavy SUVs are inherently equipped to reflect absolute corporate dominance, delivering a distinguished atmosphere the moment you engage the door handle."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Elite Events in New York City",
        items: [
            {
                category: "Fashion",
                title: "New York Fashion Week",
                date: "September 2026",
                location: "Varies - Manhattan",
                color: "text-purple-600"
            },
            {
                category: "Sports",
                title: "US Open Tennis Championships",
                date: "August - September 2026",
                location: "USTA Billie Jean King National Tennis Center",
                color: "text-blue-600"
            },
            {
                category: "Business",
                title: "United Nations General Assembly",
                date: "September 2026",
                location: "UN Headquarters",
                color: "text-gray-600"
            },
            {
                category: "Holiday",
                title: "New Year's Eve in Times Square",
                date: "December 31, 2026",
                location: "Times Square",
                color: "text-red-600"
            }
        ]
    },
    reviews: {
        title: "Metropolitan Feedback",
        subtitle: "NYC Client Experiences",
        rating: "5.0",
        totalReviews: "320+",
        items: [
            {
                name: "Goldman",
                date: "2 months ago",
                rating: 5,
                text: "The only car service I trust for my team. Punctual, professional, and consistent."
            },
            {
                name: "Chen",
                date: "4 months ago",
                rating: 5,
                text: "Exceptional transfer from JFK to Midtown. The driver knew exactly how to avoid the tunnel traffic."
            }
        ]
    }
};
