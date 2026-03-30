import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const chicagoMidwayAirportData = {
    slug: 'chicago-midway',
    cityName: 'Chicago',
    hero: {
        title: 'Executive Black Car Service to and from MDW',
        highlightedCity: 'Premium Chicago Midway International Airport (MDW) Transport',
        description: "<b>Chicago Midway International Airport (MDW)</b> stands as a critical and highly efficient transit node for the greater Chicago area. Positioned on the southwest edge of the city, it provides rapid, unimpeded access to downtown business districts, McCormick Place, and surrounding South Side conventions. MDW is highly regarded for its streamlined layout and fast passenger processing. Corporate travelers frequently select our <b>private black car service from MDW</b> to ensure an uninterrupted, dignified arrival in the city. Whether your itinerary involves an international trade exhibition, a high-stakes board meeting, or a distinguished event, <b>Chicago Midway transportation</b> via Bayou Black Cars delivers unmatched precision.",
        backgroundImage: '/HERO section/Airport/photo-1436491865332-7a61a109cc05.png'
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
        title: "Exclusive Chicago Midway Logistics – Bayou Black Cars",
        description: [
            "Why tolerate the uncertainty of local taxi queues or surge-priced digital networks? Bayou Black Cars provides an elevated standard of ground continuity, supplying dedicated, luxury transfer services to and from Chicago Midway International Airport (MDW), meticulously calibrated for executives, extensive family groups, and VIPs.",
            "Our world-class fleet adapts to your passenger count. Reserve an elegant executive sedan for swift solo runs into the Loop, or deploy our high-capacity luxury SUVs and customized Sprinter vans for transporting corporate teams. We proactively monitor your inbound aviation schedule and execute precise, on-time terminal pickups.",
            "Whether you require an immediate, seamless transit to a downtown Chicago hotel, a long-distance transfer to O'Hare from MDW, or managed transport to the extended suburbs, Bayou Black Cars controls every variable of your journey."
        ],
        extraText: "Our MDW executive service caters to diverse high-end demands. Large families frequenting Chicago appreciate our expansive luxury SUVs, capable of safely managing heavy luggage and accommodating necessary child car seats upon request. Discerning couples prefer the sophisticated privacy of our black sedans, while corporate organizers rely on our scalable executive coaches for synchronized team arrivals. Bayou Black Cars is committed to making your descent into Chicago physically and mentally effortless."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at MDW for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Chicago Midway (MDW)",
        sections: [
            {
                title: "Premium Sedans for Executives & Duos",
                paragraphs: ["Step into an acoustic sanctuary immediately upon leaving MDW. Our elite transfer service utilizes late-model luxury sedans, offering a discreet, immaculate environment for executives requiring focus or relaxation while transiting Chicago traffic."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUV & Sprinter Fleet for Groups",
                paragraphs: ["Organizing logistics for a convention team or a multi-generational family? Our Chicago Airport group transit provides top-tier luxury SUVs and premium Sprinter vans. Benefit from exceptional headroom and dedicated cargo compartments for maximum comfort."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Prioritized Safety with Child Restraint Systems",
                paragraphs: [
                    "We remove the stress associated with family travel logistics. By specifying your requirements during checkout, our chauffeurs will securely install sanitized infant or toddler seats in your chosen sedan or SUV.",
                    "Important Compliance Note: Federal safety standards prohibit the use of child seats in stretch limousines. We strongly recommend selecting our premium SUV category to ensure family safety."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Advantage at MDW",
        sections: [
            {
                title: "Evade the Chicago Transit Gridlock",
                paragraphs: ["Your professional schedule shouldn't be subjected to public transit unpredictability. Pre-arrange your private chauffeur with Bayou Black Cars to guarantee an expedited, sophisticated exit from the Midway terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
            },
            {
                title: "Optimized Routing to The Loop & Downtown",
                paragraphs: ["We cater to executives demanding precise timing. Take advantage of an expertly navigated, direct route from MDW straight to your corporate headquarters in the Loop or any central business district."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Executive Hotel & Conference Center Transfers",
                paragraphs: ["Whether your agenda ends at a luxury hotel on the Magnificent Mile or begins immediately at a McCormick Place trade show, our chauffeurs execute flawless, door-to-door ground transit."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Chicago Midway", to: "The Loop" },
        { from: "Chicago Midway", to: "McCormick Place" },
        { from: "Chicago Midway", to: "Magnificent Mile" },
        { from: "Chicago Midway", to: "United Center" },
        { from: "Chicago Midway", to: "Hyde Park" },
        { from: "Chicago Midway", to: "Chicago Cruise Port" },
        { from: "Chicago Midway", to: "Naperville" },
        { from: "Chicago Midway", to: "Oak Brook" }
    ],
    faqs: [
        {
            question: "When should I finalize my MDW airport transfer?",
            answer: "To guarantee access to our elite vehicle tiers during peak Chicago travel times, we recommend submitting your reservation a minimum of 24 hours in advance. However, Bayou Black Cars frequently accommodates urgent, executive dispatch requests."
        },
        {
            question: "Can I retain the same chauffeur for my entire stay?",
            answer: "We strongly encourage it. Reliability is a cornerstone of our VIP service. Please name your preferred driver during booking, and we will prioritize scheduling them for your complete itinerary."
        },
        {
            question: "How do I ensure child safety seats are provided?",
            answer: "Bayou Black Cars supplies fully sanitized, premium child restraints. Note the age, weight, and seat type requirements for your children during the booking process so our staff can prepare the vehicle correctly."
        },
        {
            question: "How does Bayou Black Cars handle unpredictable flight delays at Midway?",
            answer: "We utilize commercial aviation tracking APIs. Your vehicle dispatch is dynamically tied to the aircraft’s actual ground arrival time, guaranteeing your chauffeur is present whether you land early or experience severe delays."
        },
        {
            question: "Can I coordinate a complex route with multiple Chicago stops?",
            answer: "Absolutely. Our 'As Directed' hourly service is designed for executives needing to traverse multiple corporate locations throughout the city. Outline your specific route with our dispatchers for flawless execution."
        },
        {
            question: "Are your vehicles capable of handling large corporate delegations?",
            answer: "Yes. For trade shows, conventions, and large staff movements, our fleet includes luxury Sprinter vans and high-capacity executive coaches engineered for group efficiency without sacrificing comfort."
        },
        {
            question: "Is comprehensive baggage handling included?",
            answer: "Yes. Our chauffeurs deliver a full white-glove experience, managing all luggage retrieval from the MDW carousels or curbside directly to the lobby of your destination."
        },
        {
            question: "What is your policy regarding itinerary adjustments?",
            answer: "We maintain a flexible operational stance. Routine adjustments are easily managed, though sweeping route alterations or zero-hour cancellations are subject to the terms outlined in our service agreement."
        },
        {
            question: "Do you offer private, long-haul transit to destinations outside Illinois?",
            answer: "Yes, sustained intercity transit is a core capability. We routinely execute private, long-distance transfers from the Chicago area to neighboring states. Contact our logistics team for a tailored quote."
        },
        {
            question: "What payment and invoicing structures exist for corporate clients?",
            answer: "We interface seamlessly with enterprise accounting. We accept all major corporate cards and provide established business partners with custom, consolidated monthly billing accounts."
        }
    ]
};
