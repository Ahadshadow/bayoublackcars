import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const newOrleansData: CityData = {
    slug: 'new-orleans',
    cityName: 'New Orleans',
    hero: {
        title: 'Premium NOLA Executive Transport',
        highlightedCity: 'New Orleans',
        description: "Experience the vibrant complexity of New Orleans with a transit partner dedicated to absolute reliability and southern refinement. From the historic energy of the French Quarter to crucial corporate operations in the CBD, Bayou Black Cars delivers a flawless, deeply luxurious travel standard. We substitute the uncertainty of regional rideshares with a highly engineered, meticulously punctual chauffeur service designed for elite professionals and discerning visitors.",
        backgroundImage: '/HERO section/city/New Orleans hero.png'
    },
    highlights: [
        {
            title: "Luxury Black Car",
            description: "Relax with 1 hour of complimentary wait time and flight tracking.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Limousine",
            description: "Access premium service at distance-based prices that are fair to you and our chauffeurs.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Sprinter Van",
            description: "Travel confidently knowing your safety is our top priority. We handle every detail with care to make sure your journey is nothing short of exceptional.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
        }
    ],
    brandAuthority: {
        title: "The Ultimate Standard in Crescent City Transit",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Accelerated MSY Operations",
                description: "Overpowering the delays of Louis Armstrong International. We guarantee a rapid, dignified ground transition identical to the quality of your flight.",
                icon: Briefcase
            },
            {
                title: "CBD & Warehouse District Control",
                description: "Providing superior logistical advantage to executive teams operating deep within the Central Business District.",
                icon: Car
            },
            {
                title: "Curated Cultural Navigation",
                description: "Execute flawless approaches to world-class dining, secluded Garden District estates, and vital entertainment corridors.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Precision Aviation Transfers in NOLA",
                paragraphs: [
                    "Bypassing the high-friction environment of Louis Armstrong New Orleans International Airport (MSY) requires a dedicated specialist. Bayou Black Cars enforces absolute punctuality, utilizing constant flight telemetry to ensure your assigned operative is positioned and waiting the second you land, instantly neutralizing baggage claim delays.",
                    "If your schedule requires pushing outward to Baton Rouge, Lafayette, or the Gulf Coast, our sustained overland private transport replaces the chaos of regional travel with highly isolated, continuous luxury movement.",
                    "We also execute highly specialized operations connecting VIPs to the cruise terminals and massive convention floors with extreme care and zero delays."
                ]
            },
            {
                title: "The Bayou Signature of Executive Dominance",
                paragraphs: [
                    "Within a city defined by robust hospitality, you require a transit platform that operates flawlessly under pressure. We maintain our New Orleans fleet to the highest luxury guidelines, offering an impeccably sanitized, acoustic-isolated zone perfect for finalizing corporate strategy or pure decompression.",
                    "Whether you actuate our hourly directive service for a multi-stop boardroom schedule connecting the Warehouse District to Metairie, or request a high-profile insertion into a French Quarter gala, we execute with lethal efficiency and uncompromising grace.",
                    "Our sedans and heavy SUVs are distinctly equipped to reflect absolute corporate power, delivering a distinguished atmosphere the moment you enter the vehicle."
                ]
            },
            {
                title: "Mastering the Urban Cultural Landscape",
                paragraphs: [
                    "New Orleans possesses a notoriously complex historical architecture. Bypassing the severe congestion of the CBD and navigating the ancient streets of the Marigny requires true local tactical knowledge. We shoulder the full weight of urban navigation, allowing you absolute focus.",
                    "Deploy our premium group vehicles to launch high-impact executive outings or orchestrated family tours—from the National WWII Museum to the Garden District—without splintering your party across uncoordinated rideshares.",
                    "We also extend our operational security to high-net-worth families, delivering precise, intensely protected transport for private academy commutes or critical university movements near Tulane and Loyola."
                ]
            }
        ]
    },
    events: {
        title: "UpComing Events in New Orleans",
        items: [
            {
                category: "Music & Arts",
                title: "Satchmo SummerFest",
                date: "July 31 - August 2, 2026",
                location: "French Quarter",
                color: "text-pink-500"
            },
            {
                category: "Cultural",
                title: "White Linen Night",
                date: "August 8, 2026",
                location: "Arts District",
                color: "text-purple-500"
            },
            {
                category: "Food & Drink",
                title: "COOLinary New Orleans",
                date: "August 1 - 16, 2026",
                location: "Citywide",
                color: "text-orange-500"
            },
            {
                category: "Community",
                title: "Red Dress Run",
                date: "August 12, 2026",
                location: "Downtown New Orleans",
                color: "text-red-500"
            }
        ]
    },
    reviews: {
        title: "Customer Reviews",
        subtitle: "What Our Clients Say",
        rating: "5.0",
        totalReviews: "145+",
        items: [
            {
                name: "Thortvedt",
                date: "9 months ago",
                rating: 5,
                text: "Very professional! Made our 1 hour drive feel like 15 minutes thanks again!"
            },
            {
                name: "kell",
                date: "9 months ago",
                rating: 5,
                text: "My driver was very professional. He arrives in time and got us to our destination very safely. The car was super nice and provided a..."
            },
            {
                name: "Whyte",
                date: "8 months ago",
                rating: 5,
                text: "Muhammad was a great driver! He was kind, arrived early, had great communication skills and even had cold waters for us. Easil..."
            }
        ]
    }
};
