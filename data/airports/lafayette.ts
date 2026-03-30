import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const lafayetteAirportData = {
    slug: 'lafayette',
    cityName: 'Lafayette',
    hero: {
        title: 'Executive Black Car Service to and from LFT',
        highlightedCity: 'Premium Lafayette Regional Airport (LFT) Transport',
        description: "<b>Lafayette Regional Airport (LFT)</b> functions as the vital conduit to Acadiana and its surrounding regions. Positioned efficiently in Lafayette's southeast quadrant, it is a crucial logistical hub for the energy sector, regional commerce, and academic visitors tied to the University of Louisiana at Lafayette. LFT is renowned for its modernized facilities and expedient passenger flow. Discerning professionals and visitors rely on our <b>private black car service from LFT</b> to secure a seamless, high-caliber transfer directly to their commitments. Whether your itinerary involves an industry symposium, a university function, or exploring Acadiana's rich heritage, <b>Lafayette Airport transportation</b> via Bayou Black Cars ensures a sophisticated arrival.",
        backgroundImage: '/HERO section/Airport/photo-1542296332-2e4473faf563.png'
    },
    fleet: [
        {
            name: 'Luxury Sedans',
            subtitle: 'Ideal for solo travelers or couples.',
            image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png',
            passengers: '3',
            largeBags: '2',
            smallBags: '2'
        },
        {
            name: 'Premium SUVs',
            subtitle: 'Perfect for families or small groups.',
            image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png',
            passengers: '6',
            largeBags: '5',
            smallBags: '5'
        },
        {
            name: 'Sprinter Vans',
            subtitle: 'Great for group airport transfers.',
            image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png',
            passengers: '14',
            largeBags: '10',
            smallBags: '10'
        }
    ],
    bookingSection: {
        title: "Exclusive Lafayette Logistics – Bayou Black Cars",
        description: [
            "Why tolerate the unreliability of local taxis or the variable quality of mobile ride-booking apps? Bayou Black Cars establishes a superior standard of ground transit, offering dedicated, executive-class transfers to and from Lafayette Regional Airport (LFT), meticulously configured for business leaders, VIPs, and traveling families.",
            "Our elite vehicle fleet scales according to your requirements. Specify an impeccable executive sedan for a swift, private ride to the Oil Center, or deploy our extensive luxury SUVs and custom Sprinter vans to transport entire production teams or extended families. We actively monitor your flight’s incoming telemetry to guarantee a precise, immediate pickup.",
            "Whether you need accelerated transit to a downtown Lafayette hotel, an overland transfer linking Lafayette with Baton Rouge, or managed service out to Lake Charles, Bayou Black Cars controls every phase of your journey."
        ],
        extraText: "Our LFT executive service is designed purely for exceptional outcomes. Families visiting Acadiana utilize our high-capacity luxury SUVs to manage extensive luggage safely, with pre-installed child restraint systems available upon request. High-profile couples favor the acoustic isolation of our black sedans, while corporate logistical planners rely on our scaled executive vans for synchronized team movements. Bayou Black Cars is the definitive ground partner for Lafayette."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at LFT for a smooth, no-wait departure.",
            icon: Car
        },
        {
            title: "Meet & Greet Service",
            description: "Looking for a more personalized experience? Book our Meet & Greet option. Your uniformed chauffeur will greet you inside the terminal with a sign bearing your name.",
            icon: Users
        },
        {
            title: "FBO & Private Jet Pickups",
            description: "Flying private? Your driver will coordinate directly with FBO staff to meet you at your jet. Share your flight details for a seamless transfer.",
            icon: Plane
        },
        {
            title: "Real-Time Flight Tracking",
            description: "Our service includes real-time flight monitoring. If your flight is early or delayed, pickup is adjusted automatically—no extra calls or hidden fees.",
            icon: Clock
        },
        {
            title: "Free Wait Time",
            description: "Every booking comes with complimentary wait time: 45 minutes for domestic flights and 60 minutes for international flights.",
            icon: BadgeDollarSign
        },
        {
            title: "24/7 Availability & Support",
            description: "We operate 24/7. Whether your flight lands at dawn or after midnight, you’ll always have a professional chauffeur waiting.",
            icon: Headphones
        }
    ],
    groundTransport: {
        title: "Bespoke Ground Management at Lafayette Airport (LFT)",
        sections: [
            {
                title: "Executive Sedans for Professionals",
                paragraphs: ["Enter a climate-controlled, immaculate environment immediately upon exiting LFT. Our primary private service utilizes current-year luxury sedans, granting executives the required peace to finalize negotiations or relax during transit."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUVs for Teams & Families",
                paragraphs: ["Organizing logistics for an energy sector crew or an extended family vacation? Our Lafayette group logistics deploy premier luxury SUVs and customized Sprinter vans. Leverage substantial cabin dimensions and dedicated cargo spaces for uncompromising comfort."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png'
            },
            {
                title: "Prioritized Safety via Child Restraints",
                paragraphs: [
                    "We remove the tactical difficulties of traveling with small children. Indicate your requirements during your reservation, and our team will pre-install fully sanitized, age-appropriate car seats in your selected sedan or SUV.",
                    "Crucial Compliance Directive: Because of rigorous federal standards, child restraint systems cannot be utilized in our stretch limousines. We strongly advise booking our premium SUV class to guarantee safety."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Advantage at LFT",
        sections: [
            {
                title: "Bypass the Regional Airport Wait",
                paragraphs: ["Your professional schedule shouldn't depend on unpredictable regional taxi queues. Assert control over your itinerary by securing a private chauffeur with Bayou Black Cars, guaranteeing an immediate, distinguished departure from LFT."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
            },
            {
                title: "Strategic Routing to Lafayette's Core",
                paragraphs: ["We specialize in efficient transfers for demanding corporate travelers. Utilize our expertly coordinated, direct routing from LFT straight to your headquarters, the Oil Center, or downtown municipal buildings."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Executive Hotel & Conference Transfers",
                paragraphs: ["Whether your journey concludes at a premier hotel or begins immediately at the Cajundome Convention Center, our elite chauffeurs guarantee flawless, door-to-door ground transit throughout the region."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Lafayette Airport", to: "Downtown Lafayette" },
        { from: "Lafayette Airport", to: "University of Louisiana at Lafayette" },
        { from: "Lafayette Airport", to: "Cajundome & Convention Center" },
        { from: "Lafayette Airport", to: "Oil Center" },
        { from: "Lafayette", to: "Baton Rouge" },
        { from: "Lafayette", to: "New Orleans (MSY)" },
        { from: "Lafayette", to: "Lake Charles, LA" },
        { from: "Lafayette", to: "Broussard, LA" }
    ],
    faqs: [
        {
            question: "When should I execute my reservation for LFT transfers?",
            answer: "To ensure access to our upper-tier vehicles, we strongly recommend submitting your request at least 24 hours prior to arrival. We do, however, regularly manage rapid, executive dispatch scenarios."
        },
        {
            question: "Can I mandate a specific chauffeur for my visit?",
            answer: "Yes, we encourage establishing a reliable rhythm. If you prefer a driver from a prior engagement, note this during booking, and our dispatch desk will work to pair them with your itinerary."
        },
        {
            question: "How do I secure child safety infrastructure?",
            answer: "Bayou Black Cars supplies fully sanitized, compliance-verified child seats. Clearly define your child's age, weight, and specific seat needs when booking to guarantee accurate, pre-arrival installation."
        },
        {
            question: "How does your system react to Lafayette flight delays?",
            answer: "We deploy strict API integration with commercial aviation networks. Your vehicle's dispatch is synchronized dynamically with the actual wheels-down time of your aircraft, preempting missed connections."
        },
        {
            question: "Do you support complex, multi-appointment itineraries?",
            answer: "Absolutely. Our 'As Directed' block service is precisely engineered for executives executing multi-phase schedules throughout the Acadiana region. Outline your expected locations with our booking agents."
        },
        {
            question: "Is your fleet equipped to handle extensive corporate teams?",
            answer: "Yes. For major energy conferences or corporate retreats, our fleet marshals elite luxury Sprinter vans and heavy-capacity coaches engineered for group transit without sacrificing corporate standards."
        },
        {
            question: "Is complete luggage processing included?",
            answer: "Yes. Our white-glove operating principle mandates that our chauffeurs manage all luggage entirely, extracting it from LFT claims and delivering it directly to the lobby of your final destination."
        },
        {
            question: "What policies apply to route or schedule changes?",
            answer: "We adapt to the fluid nature of executive travel. Standard timeline adjustments are handled smoothly; however, abrupt route cancellations near the dispatch window may incur fees per our service agreement."
        },
        {
            question: "Are private, inter-state transfers out of Lafayette available?",
            answer: "Yes, elite long-haul ground transit is a primary capability. We frequently execute private journeys from LFT to Houston, New Orleans, or Jackson. Contact our team for a bespoke logistical quote."
        },
        {
            question: "How do you manage enterprise-level billing?",
            answer: "We interface fluidly with corporate finance departments. We process all top-tier corporate cards immediately and establish secure, automated monthly billing frameworks for our contracted enterprise partners."
        }
    ]
};
