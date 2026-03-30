import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const chicagoOhareAirportData = {
    slug: 'chicago-ohare',
    cityName: 'Chicago',
    hero: {
        title: 'Elite Black Car Service to and from ORD',
        highlightedCity: "Premium Chicago O'Hare International Airport (ORD) Transport",
        description: "<b>Chicago O'Hare International Airport (ORD)</b> ranks among the most critical aviation hubs globally, facilitating high-volume transit for the greater Chicago region. Positioned northwest of the downtown core, it serves as the ultimate gateway for executive and international arrivals. O'Hare’s vast infrastructure requires experienced navigation. High-level executives and international visitors consistently select our <b>private black car service from ORD</b> to bypass the intense crowds and secure an immediate, luxurious departure. Whether you're traveling for a pivotal convention at McCormick Place or an exclusive event down the Magnificent Mile, <b>Chicago O'Hare transportation</b> from Bayou Black Cars guarantees flawless execution.",
        backgroundImage: '/HERO section/Airport/photo-1583330357508-1864f8e57785.png'
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
        title: "Exclusive Chicago O'Hare Logistics – Bayou Black Cars",
        description: [
            "Why subject your itinerary to the notorious congestion of public transit or the inconsistency of mobile ride platforms? Bayou Black Cars established a superior standard, offering dedicated, executive-tier ground transportation to and from Chicago O'Hare International Airport (ORD), specifically engineered for executives, large delegations, and VIP travelers.",
            "Our extensive, late-model fleet scales to your requirements. Choose an immaculate executive sedan for a discreet, fast transfer into the city, or command our vast luxury SUVs and executive Sprinter vans for transporting entire corporate teams. We proactively monitor arrival telemetry to execute flawless, zero-wait terminal pickups.",
            "Whether you need an immediate, private ride to a luxury hotel in The Loop, an inter-airport transfer from ORD to Midway, or an overland route to the distant suburbs, Bayou Black Cars manages your complete logistical footprint."
        ],
        extraText: "Our ORD private service accommodates sophisticated requirements beyond standard business travel. Extensive families navigating O'Hare prefer our high-capacity luxury SUVs, which easily secure oversized luggage while providing requested child safety restraints. Elite vacationers value the acoustic isolation of our black sedans, while corporate event coordinators rely heavily on our scalable executive coaches for simultaneous group arrivals. Bayou Black Cars is the definitive choice for mastering arrival logistics in Chicago."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at ORD for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Chicago O'Hare (ORD)",
        sections: [
            {
                title: "Executive Sedans for Individuals & VIPs",
                paragraphs: ["Enter a climate-controlled, ultra-quiet environment immediately after clearing customs at ORD. Our flagship private service operates current-year luxury sedans, granting high-level professionals the required sanctuary to finalize negotiations or decompress during the drive into Chicago."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUV & Sprinter Fleet for Delegations",
                paragraphs: ["Coordinating a complex arrival for a trade show team or extended family? Our O'Hare group logistics utilize premier luxury SUVs and custom Sprinter vans. Rely on expansive legroom and cavernous cargo bays to move your group without compromising comfort."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Uncompromised Safety with Child Restraints",
                paragraphs: [
                    "We remove the friction of traveling with infants through O'Hare. Simply indicate your needs during reservation, and our team will pre-install fully sanitized, age-appropriate child safety seats in your selected sedan or SUV.",
                    "Crucial Policy Note: Because of rigid safety regulations, child restraint systems cannot be utilized in our stretch limousines. We strongly advise booking our premium SUV class when traveling with young dependents."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at ORD",
        sections: [
            {
                title: "Bypass the Intense O'Hare Ground Traffic",
                paragraphs: ["O'Hare's taxi lines are notoriously time-consuming. Reclaim your schedule by securing a private chauffeur with Bayou Black Cars, guaranteeing an immediate, distinguished exit the moment you clear the terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Strategic Routing to Chicago's Core",
                paragraphs: ["We specialize in efficient transfers for demanding professionals. Utilize our expertly coordinated routing directly from ORD to your downtown headquarters, board meetings, or engagements in The Loop."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "VIP Transfers to Luxury Hotels & Venues",
                paragraphs: ["Whether your journey concludes at a five-star property on the Magnificent Mile or begins immediately at a corporate retreat, our elite chauffeurs execute flawless, door-to-door ground transit from O'Hare."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Chicago O'Hare", to: "The Loop" },
        { from: "Chicago O'Hare", to: "McCormick Place" },
        { from: "Chicago O'Hare", to: "Magnificent Mile" },
        { from: "Chicago O'Hare", to: "United Center" },
        { from: "Chicago O'Hare", to: "Evanston" },
        { from: "Chicago O'Hare", to: "Schaumburg" },
        { from: "Chicago O'Hare", to: "Rosemont Convention Center" },
        { from: "Chicago O'Hare", to: "Milwaukee, WI" }
    ],
    faqs: [
        {
            question: "What is the recommended booking window for ORD transfers?",
            answer: "Given the immense volume at O'Hare, we strongly advise securing your vehicle at least 24 hours prior. This guarantees access to our premium fleet, though we do retain capacity for rapid, executive dispatch."
        },
        {
            question: "Can corporate clients request specific drivers?",
            answer: "Indeed. Establishing a reliable rhythm is vital. If you prefer a chauffeur from a previous ride, denote this during the reservation, and our dispatchers will prioritize assigning them to your manifest."
        },
        {
            question: "How do I secure child restraints for family travel?",
            answer: "Bayou Black Cars maintains a stock of immaculate, compliance-tested child seats. Carefully note your child's age, weight, and necessary seat style when booking to ensure accurate pre-installation."
        },
        {
            question: "How does the dispatch system manage O'Hare flight delays?",
            answer: "We utilize direct API integration with aviation tracking networks. Your chauffeur's arrival is tethered dynamically to the aircraft’s factual 'wheels-down' metric, eliminating friction during delays or early arrivals."
        },
        {
            question: "Can I orchestrate multiple drop-offs in the Chicago area?",
            answer: "Absolutely. Our 'As Directed' hourly block service is engineered precisely for executives executing multi-phase schedules throughout the city. Plan your exact route with our booking specialists."
        },
        {
            question: "Do you have the capacity for large convention groups?",
            answer: "Yes. For major events at McCormick Place or massive corporate movements, our fleet boasts luxury Sprinter vans and heavy-capacity executive coaches for flawless group logistics."
        },
        {
            question: "Is comprehensive luggage handling standard procedure?",
            answer: "Yes. Our white-glove protocol dictates that chauffeurs manage all luggage, extracting it from the ORD carousels or curbside and delivering it directly to the concierge or threshold of your destination."
        },
        {
            question: "How flexible are you with itinerary changes?",
            answer: "We accommodate the shifting nature of travel. Standard adjustments are routinely handled, however, complete cancellations or severe route alterations made close to dispatch may be subject to our terms of service."
        },
        {
            question: "Do you provide sustained overland transfers outside the state?",
            answer: "Yes, elite long-haul transit is fully available. We frequently execute private, secure transfers from O'Hare to neighboring midwestern states. Please engage our team for a tailored logistical quote."
        },
        {
            question: "How are enterprise billing accounts managed?",
            answer: "We optimize for corporate efficiency. We instantly process all luxury corporate cards and establish secure, consolidated monthly billing infrastructures for our regular enterprise affiliates."
        }
    ]
};
