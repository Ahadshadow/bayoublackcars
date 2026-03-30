import { Plane, BadgeDollarSign, ShieldCheck, Heart } from 'lucide-react';
import { CityData } from '../cities/houston';

export const newOrleansAirportData: CityData = {
    slug: 'new-orleans',
    cityName: 'New Orleans Airport Transfer',
    hero: {
        title: 'Executive Ground Dispatch connecting MSY, local commerce, and private celebrations.',
        highlightedCity: 'New Orleans Airport Transfer – Bayou Black Cars',
        description: "New Orleans operates as a global epicenter for culture, heavy industry, and mass tourism. Every arrival dictates a different tempo, whether you are landing for an energy summit, a major event downtown, or a private retreat. Executing a flawless airport transition establishes the baseline for a successful trip.\n\nDeploying <b>Bayou Black Cars’s New Orleans Airport Transfer</b> guarantees precise, elite ground logistics that never deviate from schedule. Our infrastructure is engineered to absorb the friction of air travel, granting you complete focus upon arrival. From <b>Louis Armstrong New Orleans International Airport (MSY)</b> outward to the French Quarter, the Garden District, or beyond, our chauffeurs process every variable so you don't have to.",
        backgroundImage: '/HERO section/Airport/photo-1561131668-f63504fc549d.png'
    },
    highlights: [
        {
            title: "Executive Transit to Lakefront Airport (NEW)",
            description: "Operating within private aviation parameters? Bayou Black Cars executes elite Lakefront Airport transfers. Our chauffeurs deliver highly secure, immediate transit from Lakefront Airport (NEW) straight to corporate command centers, the French Quarter, or any regional coordinate.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Long-Range Transfers from Baton Rouge (BTR)",
            description: "Routing through Baton Rouge? Utilize our Baton Rouge Metropolitan Airport transfer command for a high-speed vector into New Orleans. Bayou Black Cars seamlessly bridges BTR with MSY or the CBD, managing long-haul airport logistics with uncompromising luxury.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
        },
        {
            title: "Core Logistics at Louis Armstrong Airport (MSY)",
            description: "Entering via MSY? Bayou Black Cars launches strictly reliable airport extractions to central hotels, the Convention Center, and primary cruise ports. Your vehicle is stationed prior to your landing, eliminating any terminal wait.\n\nDeparting the city? We calculate your extraction window against live traffic data, ensuring you hit the terminal with time to spare. We also execute extended routes, seamlessly connecting Baton Rouge, Gulfport, or Biloxi directly to MSY.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        }
    ],
    brandAuthority: {
        title: "The Bayou Black Cars Standard",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "Uncompromising Fleet",
                description: "Deploy in our pristine luxury sedans, VIP SUVs, massive Sprinters, and stretch units—all subjected to rigorous mechanical and aesthetic standards.",
                icon: Heart
            },
            {
                title: "Strategic Value",
                description: "Secure elite chauffeur capabilities in New Orleans without the variable pricing of gig-economy apps—optimized for corporate summits or global events.",
                icon: BadgeDollarSign
            },
            {
                title: "Absolute Precision",
                description: "Our professional chauffeurs operate with military-grade punctuality. We deliver a highly secure, private transit environment, never just a ride.",
                icon: ShieldCheck
            }
        ]
    },
    informationalText: {
        columns: [] // Placeholder, we use contentSections now
    },
    events: {
        title: "",
        items: []
    },
    reviews: {
        title: "Customer Reviews",
        subtitle: "What Our Clients Say",
        rating: "4.9",
        totalReviews: "198+",
        items: []
    }
};

export const fleetData = [
    {
        name: "Executive sedans",
        subtitle: "ideal for business travelers or couples.",
        passengers: "3",
        largeBags: "2",
        smallBags: "2",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
    },
    {
        name: "Luxury black SUVs",
        subtitle: "perfect for families or small groups with extra luggage.",
        passengers: "6-7",
        largeBags: "5",
        smallBags: "2",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png"
    },
    {
        name: "SPRINTER VANS",
        subtitle: "Shuttle Sprinter Executive Sprinter & Limo Party Bus Sprinter",
        passengers: "14-16",
        largeBags: "8",
        smallBags: "6",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
    },
    {
        name: "STRETCH LIMO & BUSES",
        subtitle: "Stretch Limousine, Mini Coach , Motor Coach & Party Bus",
        passengers: "10/24",
        largeBags: "N/A",
        smallBags: "N/A",
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
    }
];

export const contentSections = [
    {
        title: "Corporate & Executive Aviation Logistics",
        paragraphs: [
            "Operating at the highest levels demands total privacy and exact timing. Our executive airport transit division in New Orleans serves global corporate officers, VIPs, and convention delegates requiring a zero-failure transit environment.",
            "Deploying armored-equivalent sedans and luxury SUVs, Bayou Black Cars executes immediate extractions to the Ernest N. Morial Convention Center, CBD towers, and premier hotels. We engineer every route to guarantee your summit begins precisely on schedule.",
            "We further provide 'As Directed' hourly chauffeur blocks, rapid point-to-point hops across New Orleans, and high-speed regional transfers out to Baton Rouge or Gulfport. We adapt instantly to your shifting executive agenda."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageSide: 'right' as const,
        isGrid: true
    },
    {
        title: "Festival, Cruise & Private Event Extraction",
        paragraphs: [
            "Elite events mandate an elite arrival profile. We coordinate massive wedding airport logistics, ensuring your guests and VIPs move together flawlessly. Boarding a luxury liner? Our chauffeurs bypass congestion for direct cruise port transfers to the Port of New Orleans. Operating during peak season? From Mardi Gras to Jazz Fest, we secure your transit vector long before the city gridlocks."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageSide: 'left' as const
    },
    {
        title: "Dynamic Hourly Airport Commands",
        paragraphs: [
            "Executive travel is inherently fluid. Utilizing our block-hour airport service gives you total command over an entirely dedicated vehicle and chauffeur for as long as your mission dictates. Highly efficient for multi-stop corporate tours, rapid meetings, or intense flight delays.",
            "Maintain absolute control over your transit environment without the pressure of single-destination constraints."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png",
        imageSide: 'right' as const
    },
    {
        title: "Seamless Tarmac-to-Lobby Deployment",
        paragraphs: [
            "Eliminate the risk and friction of massive shuttle queues or public parking sectors. Bayou Black Cars operates pure door-to-door transit within New Orleans. We extract you directly from your estate, hotel lobby, or boardroom and deposit you at your precise terminal gate. Disembarking? Our chauffeurs intercept you at baggage claim, commandeer your luggage, and instantly move you to your waiting vehicle."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageSide: 'left' as const
    },
    {
        title: "Dedicated Private Aviation Chauffeurs",
        paragraphs: [
            "Elite ground movement is no longer restricted to ultra-high-net-worth individuals. We offer heavily optimized, affordable airport transport alongside our pinnacle stretch limousine and VIP SUV operations. True private chauffeur service means locking in a dedicated operative who treats your itinerary as their primary mission.",
            "Whether executing a rapid MSY hop or a profound long-haul transfer, we guarantee comfort, extreme security, and absolute reliability."
        ],
        image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png",
        imageSide: 'right' as const
    }
];

export const routesData = [
    { from: "New Orleans", to: "Metairie" },
    { from: "New Orleans", to: "Kenner" },
    { from: "New Orleans", to: "Slidell" },
    { from: "New Orleans", to: "MSY Airport" },
    { from: "New Orleans", to: "Baton Rouge" },
    { from: "New Orleans", to: "Gulfport" }
];

export const faqData = [
    {
        question: "How do I secure an airport dispatch via Bayou Black Cars?",
        answer: "Reservations can be executed through our secure online portal or via direct telephone contact. Our logistics center validates your parameters and guarantees your vehicle's deployment upon structural arrival."
    },
    {
        question: "Is your transit footprint capable of reaching Baton Rouge?",
        answer: "Yes, Bayou Black Cars routinely executes long-haul operations connecting MSY with Baton Rouge, Metairie, Kenner, Gulfport, and the Biloxi casino sectors."
    },
    {
        question: "How does your system react to chaotic flight delays?",
        answer: "We deploy aggressive, real-time flight telemetry monitoring. Your chauffeur's arrival is perpetually synced with actual runway data, overriding any delays without penalty."
    },
    {
        question: "What vehicle classes exist within your airport transit arm?",
        answer: "Our extensive motor pool contains current-year luxury sedans, VIP SUVs, Sprinter transports, stretch limousines, and heavy-capacity motor coaches."
    },
    {
        question: "Do you maintain infrastructure for sustained corporate accounts?",
        answer: "Yes, Bayou Black Cars governs elite corporate airport transportation across New Orleans, providing prioritized logistics and consolidated billing platforms for heavy-volume enterprise clients."
    }
];
