import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';

export interface CityData {
    slug: string;
    cityName: string;
    hero: {
        title: string;
        highlightedCity: string;
        description: string;
        backgroundImage: string;
    };
    highlights: {
        title: string;
        description: string;
        icon: any;
        image?: string;
    }[];
    brandAuthority: {
        title: string;
        mainImage: string;
        columns: {
            title: string;
            description: string;
            icon: any;
        }[];
    };
    informationalText: {
        image?: string;
        columns: {
            title: string;
            paragraphs: string[];
        }[];
    };
    events: {
        title: string;
        items: {
            category: string;
            title: string;
            date: string;
            location: string;
            color: string;
        }[];
    };
    reviews: {
        title: string;
        subtitle: string;
        rating: string;
        totalReviews: string;
        items: {
            name: string;
            date: string;
            rating: number;
            text: string;
        }[];
    };
    isEmpty?: boolean;
}

export const houstonData: CityData = {
    slug: 'houston',
    cityName: 'Houston',
    hero: {
        title: 'Elite Houston Executive Transport',
        highlightedCity: 'Houston',
        description: "Operating within the massive scale of Greater Houston demands logistical supremacy. From executing high-velocity extractions at George Bush Intercontinental (IAH) to coordinating secure transit for energy sector executives downtown, Bayou Black Cars delivers a profoundly engineered travel experience. We neutralize regional traffic and provide a deeply isolated, highly punctual environment, allowing professionals and discerning families to maneuver through Texas with absolute control.",
        backgroundImage: '/HERO section/city/Houston hero.png'
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
            description: "Know your fare upfront with fixed rates specifically for you and no surprises.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Sprinter Van",
            description: "Our drivers are vetted and highly trained. You can trust that your journey is with the safest chauffeurs.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
        }
    ],
    brandAuthority: {
        title: "Houston’s Dominant Force in Luxury Logistics",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Accelerated IAH & HOU Operations",
                description: "Mastering the massive footprint of Houston's aviation networks. We guarantee your ground exit is as rapid as your flight.",
                icon: Plane
            },
            {
                title: "Corporate Sector Dominance",
                description: "Deploying flawlessly executed transit schedules throughout the Energy Corridor, The Galleria, and the primary Downtown business district.",
                icon: Car
            },
            {
                title: "Elevated Medical & Private Transit",
                description: "Providing secure, highly discreet transportation to the Texas Medical Center and elite private institutions across the region.",
                icon: Building2
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "High-Tier Houston Aviation Transfers",
                paragraphs: [
                    "Conquering the immense volume at George Bush Intercontinental (IAH) or William P. Hobby (HOU) demands an operational specialist. Bayou Black Cars enforces absolute punctuality, utilizing live-tracking arrays to guarantee your designated chauffeur is anchored and waiting exactly when your aircraft hits the tarmac, instantly neutralizing delay-related friction.",
                    "If your mission requires expanding beyond the immediate city—perhaps pushing into Austin, Dallas, or San Antonio—our sustained overland private transport replaces the unreliability of regional flights with deeply isolated, continuous luxury movement.",
                    "We frequently manage the highly complex logistical demands of the Texas Medical Center, delivering patients, specialized staff, and sensitive personnel with extreme care and zero delays."
                ]
            },
            {
                title: "The Standard of Corporate Excellence",
                paragraphs: [
                    "Within an economic powerhouse driven by the energy and aerospace sectors, you require a transit platform that operates flawlessly under pressure. We maintain our Houston fleet to the absolute pinnacle of luxury guidelines, offering an impeccably sanitized, acoustic-isolated zone perfect for finalizing strategy.",
                    "Whether you actuate our hourly directive service for a brutal, multi-stop boardroom schedule connecting The Woodlands to Downtown, or request a high-profile insertion into a local gala, Bayou Black Cars executes with lethal efficiency and uncompromising grace.",
                    "Our sedans and heavy SUVs are inherently equipped to reflect absolute corporate power, delivering a distinguished atmosphere the moment you engage the door handle."
                ]
            },
            {
                title: "Mastering the Urban Landscape",
                paragraphs: [
                    "Houston's sprawling geography requires a chauffeur who is a master tactician of the local roadways. Bypassing the severe congestion of I-45 and the Loop, we shoulder the full weight of urban navigation, allowing you absolute focus whether you are heading to a major game at NRG Stadium or a private dinner in River Oaks.",
                    "Deploy our premium Sprinter vans to launch high-impact executive outings or massive family movements without splintering your party across uncoordinated rideshares. Our chauffeurs deliver total operational control for intense, multi-venue itineraries."
                ]
            }
        ]
    },
    events: {
        title: "UpComing Events in Houston",
        items: [
            {
                category: "Music & Arts",
                title: "Houston Livestock Show & Rodeo",
                date: "March 1 - 20, 2026",
                location: "NRG Park",
                color: "text-pink-500"
            },
            {
                category: "Cultural",
                title: "Houston Art Car Parade",
                date: "October 9, 2026",
                location: "Downtown Houston",
                color: "text-purple-500"
            },
            {
                category: "Food & Drink",
                title: "Houston Restaurant Weeks",
                date: "August 1 - September 4, 2026",
                location: "Citywide",
                color: "text-orange-500"
            },
            {
                category: "Community",
                title: "Bayou City Art Festival",
                date: "December 19 - 20, 2026",
                location: "Memorial Park",
                color: "text-cyan-500"
            }
        ]
    },
    reviews: {
        title: "Customer Reviews",
        subtitle: "What Our Clients Say",
        rating: "4.9",
        totalReviews: "198+",
        items: [
            {
                name: "Stroup",
                date: "8 months ago",
                rating: 5,
                text: "Seamless convenient ride to the airport, thanks!"
            },
            {
                name: "Delaney",
                date: "8 months ago",
                rating: 5,
                text: "Everything about our experience was above and beyond. Our driver was prompt, communicative and super friendly. The car was super clean and we had a great time."
            },
            {
                name: "Thortvedt",
                date: "8 months ago",
                rating: 5,
                text: "Very professional! Made our 1 hour drive feel like 15 minutes thanks again!"
            }
        ]
    }
};
