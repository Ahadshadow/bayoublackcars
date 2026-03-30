import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const dallasData: CityData = {
    slug: 'dallas',
    cityName: 'Dallas',
    hero: {
        title: 'Texas Executive Transport Elite',
        highlightedCity: 'Dallas',
        description: "Operating within the immense scale of the Lone Star State demands unyielding operational control. Bayou Black Cars constructs an elite transit framework designed to dominate the intense corridors of Dallas and Fort Worth. From rapid terminal extractions at DFW to high-stakes board meetings embedded deep in Victory Park, we deploy a sophisticated, hyper-punctual vehicle fleet that redefines the parameters of modern executive travel.",
        backgroundImage: '/HERO section/city/Dallas hero.png'
    },
    highlights: [
        {
            title: "DFW & Love Field Elite",
            description: "Priority pickup and real-time monitoring for Dallas/Fort Worth International and Love Field airport transfers.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Transparent Protocol",
            description: "Straightforward, all-inclusive pricing with no hidden surcharges—perfect for corporate compliance.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Certified Safety",
            description: "Our chauffeurs are extensively vetted and experts in North Texas navigation and executive protocol.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png"
        }
    ],
    brandAuthority: {
        title: "The Ultimate Metroplex Transport Authority",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "DFW & Love Field Dominance",
                description: "Completely bypass severe terminal congestion. We execute precision arrivals and immediate extractions across all major North Texas aviation nodes.",
                icon: Plane
            },
            {
                title: "Total Corporate Coverage",
                description: "Delivering an ironclad logistical advantage to executive teams moving through Plano, Frisco, and the primary Dallas Business District.",
                icon: Briefcase
            },
            {
                title: "Unrestricted Venue Access",
                description: "Secure instant, VIP-tier approaches to massive event hubs like AT&T Stadium and American Airlines Center, ignoring parking chaos entirely.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Mastering the Logistics of North Texas",
                paragraphs: [
                    "Conquering the sprawling Dallas-Fort Worth Metroplex requires zero hesitations. Bayou Black Cars operates as your dedicated logistical asset, architecting high-speed, deeply secure transfers between the absolute most critical regional business epicenters, allowing executives to maintain peak operational tempo while on the road.",
                    "If your mission dictates significant movement beyond the city limits—initiating a massive overland vector to Houston, Austin, or Oklahoma City—our private transport fleet serves as a rapid, climate-stabilized alternative to regional flight bottlenecks.",
                    "We regularly execute complex multi-unit deployments to handle intense corporate summits and executive off-sites, orchestrating large-scale group logistics effortlessly across the entire state."
                ]
            },
            {
                title: "The Bayou Signature of Power and Protocol",
                paragraphs: [
                    "For professionals demanding total discretion and undeniable power, Bayou Black Cars is the singular solution operating within Dallas today. We enforce the most rigid technical standards upon our massive luxury SUVs, sedans, and executive Sprinters.",
                    "Whether you dictate an 'As Directed' hourly schedule for continuous boardroom assaults across the metro, or require a high-impact, single-vector drop into an exclusive gala, we perform with global-tier precision.",
                    "Supported by an aggressive 24/7 command center, our chauffeurs possess the live data necessary to instantly reroute and adapt to the volatile reality of Texas traffic."
                ]
            }
        ]
    },
    events: {
        title: "Key Events Across the Metroplex",
        items: [
            {
                category: "Fairs",
                title: "State Fair of Texas",
                date: "September 25 - October 18, 2026",
                location: "Fair Park",
                color: "text-blue-600"
            },
            {
                category: "Sports",
                title: "AT&T Byron Nelson Golf Tournament",
                date: "May 2026",
                location: "TPC Craig Ranch",
                color: "text-green-600"
            },
            {
                category: "Business",
                title: "Dallas Tech Summit",
                date: "October 12 - 14, 2026",
                location: "Kay Bailey Hutchison Center",
                color: "text-gray-600"
            }
        ]
    },
    reviews: {
        title: "Executive Feedback",
        subtitle: "Dallas Client Reviews",
        rating: "4.8",
        totalReviews: "185+",
        items: [
            {
                name: "Miller",
                date: "2 months ago",
                rating: 5,
                text: "Flawless transfer from DFW. Chauffeur was professional and the car was immaculate."
            },
            {
                name: "Wilson",
                date: "4 months ago",
                rating: 5,
                text: "Best way to navigate Dallas. Highly recommend for business travel."
            }
        ]
    }
};
