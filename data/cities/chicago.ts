import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const chicagoData: CityData = {
    slug: 'chicago',
    cityName: 'Chicago',
    hero: {
        title: 'Executive Chicago Ground Transport',
        highlightedCity: 'Chicago',
        description: "Chicago forces momentum. From the sweeping magnitude of Lake Michigan to the intense corporate gravity of The Loop, this city rewards precision. Whether engaging the international business sector, navigating exclusive dining along Fulton Market, or orchestrating high-level executive movements, Bayou Black Cars engineers an environment of total control. Abandon the erratic variables of standard rideshares and secure a tactically flawless, deeply luxurious transit experience throughout the greater Chicago metropolitan theater.",
        backgroundImage: '/HERO section/city/Chicago hero.png'
    },
    highlights: [
        {
            title: "Pinnacle Airport Management",
            description: "Seamless ORD and MDW extractions, featuring real-time flight telemetry and complimentary staging periods.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Calculated Rate Structures",
            description: "Eliminate unpredictable surging with our transparent, fixed-cost pricing models designed for corporate ledgers.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Elite Chauffeur Corps",
            description: "Deploying operatives thoroughly vetted and tactically trained to navigate Chicago's demanding infrastructure.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        }
    ],
    brandAuthority: {
        title: "Chicago's Apex Private Transport Architecture",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Rapid O’Hare & Midway Extractions",
                description: "Executing flawless transitions into and out of Chicago's primary aviation hubs. We neutralize terminal chaos instantly.",
                icon: Plane
            },
            {
                title: "Corporate Loop Dominance",
                description: "From massive McCormick Place summits to Streeterville boardrooms, we supply the logistical backbone for Chicago business.",
                icon: Briefcase
            },
            {
                title: "Elevated Urban Navigation",
                description: "Subdue city traffic and access Chicago's architectural and cultural milestones with commanding ease and deep comfort.",
                icon: MapPin
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "Elite Aviation Terminal Operations",
                paragraphs: [
                    "Entering the Chicago airspace introduces immediate logistical challenges. Bayou Black Cars overrides runway delays and baggage terminal friction by actively syncing with live global flight telemetry. Whether inbound to O'Hare (ORD) or touching down at Midway (MDW), we ensure your specialized operative is prepositioned perfectly.",
                    "Discerning travelers leverage our pristine, acoustic-isolated sedans for rapid, highly focused urban entry, while massive corporate delegations or touring families engage our customized Sprinter and heavy SUV models to guarantee zero-defect group movement.",
                    "With absolute cost transparency and zero hidden variables, we translate complex aviation schedules into a perfectly calm, deeply luxurious final mile."
                ]
            },
            {
                title: "Commercial & Executive Deployment",
                paragraphs: [
                    "Business within the Chicago Loop or the massive convention halls of McCormick Place requires uninterrupted execution. We engineer our transit operations specifically for the executive class, transforming every idle minute in transit into a highly secure, productive extension of your boardroom.",
                    "If your operational theater shifts into suburban sectors like Naperville, Oak Brook, or Schaumburg, we stretch our logistical umbrella to guarantee punctual, high-speed regional travel.",
                    "Utilize our 'As Directed' hourly architecture to retain total control over a fluid daily schedule. Your dedicated chauffeur remains on standby, adjusting vectors dynamically as your enterprise demands evolve."
                ]
            },
            {
                title: "Mastering the Urban Landscape",
                paragraphs: [
                    "Chicago represents a massive cultural matrix. Accessing Navy Pier, the Museum Campus, or exclusive venues along the Magnificent Mile should not be hindered by aggressive traffic or parking degradation. We shoulder the full weight of urban navigation, allowing you absolute focus.",
                    "Deploy our premium group vehicles to launch high-impact bachelor events, corporate outings to Wrigley Field, or major municipal tours without splintering your party across uncoordinated rideshares.",
                    "We also extend our operational security to high-net-worth families, delivering precise, intensely protected transport for private academy commutes or critical university movements near Hyde Park and Evanston."
                ]
            }
        ]
    },
    events: {
        title: "UpComing Events in Chicago",
        items: [
            {
                category: "Community",
                title: "Lincolnwood Fest",
                date: "July 24–27, 2026",
                location: "Henry A. Proesel Park",
                color: "text-blue-500"
            },
            {
                category: "Food & Drink",
                title: "Taste of Lincoln Avenue",
                date: "July 25–26, 2026",
                location: "N. Lincoln Avenue",
                color: "text-orange-500"
            },
            {
                category: "Cultural",
                title: "Chinatown Summer Fair",
                date: "July 26–27, 2026",
                location: "Chinatown",
                color: "text-red-500"
            },
            {
                category: "Music & Arts",
                title: "Wicker Park Fest",
                date: "July 25–27, 2026",
                location: "Wicker Park",
                color: "text-purple-500"
            }
        ]
    },
    reviews: {
        title: "Customer Reviews",
        subtitle: "What Our Clients Say",
        rating: "4.9",
        totalReviews: "250+",
        items: [
            {
                name: "James Wilson",
                date: "2 weeks ago",
                rating: 5,
                text: "Bayou Black Cars provided an exceptional experience for our corporate event in Chicago. The chauffeur was professional, the SUV was spotless, and the service was perfectly on time."
            },
            {
                name: "Sarah Miller",
                date: "1 month ago",
                rating: 5,
                text: "Best airport transfer service I've used in Chicago. They tracked my flight and were waiting at O'Hare as soon as I landed. Highly recommend for stress-free travel."
            },
            {
                name: "Robert Davis",
                date: "3 weeks ago",
                rating: 5,
                text: "We rented a Sprinter van for a group outing to a Cubs game. The vehicle was luxurious and our driver was fantastic. A truly first-class way to see the city."
            }
        ]
    }
};
