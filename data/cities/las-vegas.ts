import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const lasVegasData: CityData = {
    slug: 'las-vegas',
    cityName: 'Las Vegas',
    hero: {
        title: 'Executive Vegas Transportation',
        highlightedCity: 'Las Vegas',
        description: "Control the chaos of the entertainment capital with elite ground logistics. Bayou Black Cars delivers a profoundly engineered travel experience designed specifically for high-net-worth individuals, massive convention delegations, and discerning VIPs moving through Las Vegas. By neutralizing the severe congestion of the Strip and executing rapid extractions from Harry Reid International (LAS) or private FBOs, we ensure your arrival is as spectacular and reliable as the city itself.",
        backgroundImage: '/HERO section/city/Las Vegas hero.png'
    },
    highlights: [
        {
            title: "LAS Terminal Elite",
            description: "Dedicated airport transfers with real-time flight tracking and professional meet-and-greets at all terminal points.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Transparent VIP Rates",
            description: "No surging, no surprises—fixed-rate luxury transit across the entire Las Vegas valley and major venues.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Security & Discretion",
            description: "Professional chauffeurs vetted and trained for the unique demands of executive, celebrity, and VIP guest travel.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        }
    ],
    brandAuthority: {
        title: "The Ultimate Las Vegas Transport Authority",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Aviation & FBO Dominance",
                description: "Completely bypass terminal gridlock at Harry Reid International. We execute precision arrivals and immediate extractions for commercial and private aviation.",
                icon: Plane
            },
            {
                title: "Convention Sector Logistics",
                description: "Delivering an ironclad logistical advantage to corporate teams navigating the intense schedules of CES and major trade events.",
                icon: Briefcase
            },
            {
                title: "VIP Arena & Strip Access",
                description: "Secure instant, elite-tier approaches to major venues like Allegiant Stadium and T-Mobile Arena, ignoring parking constraints entirely.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Mastering the Logistics of the Strip",
                paragraphs: [
                    "Conquering the immense density of Las Vegas demands zero hesitations. Bayou Black Cars operates as your dedicated logistical asset, architecting high-speed, deeply secure transfers between the absolute most critical regional epicenters, allowing executives and VIPs to maintain peak tempo while on the move.",
                    "If your mission dictates significant movement beyond the city—initiating an overland vector to Lake Las Vegas, Red Rock, or surrounding resorts—our private transport fleet serves as a rapid, climate-stabilized sanctuary away from the intense desert heat.",
                    "We regularly execute complex multi-unit deployments to handle intense corporate summits, CES delegations, and high-profile entertainment crews, orchestrating large-scale group logistics effortlessly across the entire valley."
                ]
            },
            {
                title: "The Bayou Signature of Power and Protocol",
                paragraphs: [
                    "For professionals demanding total discretion and undeniable power, Bayou Black Cars is the singular solution operating within Las Vegas today. We enforce the most rigid technical standards upon our massive luxury SUVs, sedans, and executive Sprinters to ensure absolute VIP comfort.",
                    "Whether you dictate an 'As Directed' hourly schedule for continuous venue hopping, or require a high-impact, single-vector drop into an exclusive nightclub or gala, we perform with global-tier precision.",
                    "Supported by an aggressive 24/7 command center, our highly vetted chauffeurs possess the live data necessary to instantly reroute and adapt to the volatile reality of Las Vegas traffic."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Elite Events in Las Vegas",
        items: [
            {
                category: "Conventions",
                title: "CES - Consumer Electronics Show",
                date: "January 6 - 9, 2026",
                location: "Las Vegas Convention Center",
                color: "text-blue-500"
            },
            {
                category: "Sports",
                title: "Las Vegas Grand Prix (Formula 1)",
                date: "November 2026",
                location: "Las Vegas Strip Circuit",
                color: "text-red-500"
            },
            {
                category: "Entertainment",
                title: "Super Bowl (Regional Legacy)",
                date: "February 2026",
                location: "Allegiant Stadium",
                color: "text-gray-600"
            }
        ]
    },
    reviews: {
        title: "Discerning Feedback",
        subtitle: "Vegas Client Experiences",
        rating: "4.9",
        totalReviews: "280+",
        items: [
            {
                name: "Anderson",
                date: "2 months ago",
                rating: 5,
                text: "The most reliable car service I've used in Vegas. Driver was early and very professional."
            },
            {
                name: "Lee",
                date: "4 months ago",
                rating: 5,
                text: "Exceptional transfer from the airport to the Strip. SUV was spotless."
            }
        ]
    }
};
