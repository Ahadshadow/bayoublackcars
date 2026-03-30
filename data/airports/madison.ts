import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const madisonAirportData = {
    slug: 'madison',
    cityName: 'Madison',
    hero: {
        title: 'Executive Black Car Service to and from MSN',
        highlightedCity: 'Premium Dane County Regional Airport (MSN) Transport',
        description: "<b>Dane County Regional Airport (MSN)</b> functions as the vital access node for Wisconsin's state capital and the eminent University of Wisconsin-Madison. Positioned only minutes from Capitol Square, MSN is highly regarded for its architectural elegance and rapid, friction-free passenger processing. Elite visitors and executives consistently select our <b>private black car service from MSN</b> to ensure a synchronized, luxurious departure. Whether your itinerary involves high-level legislative strategy, corporate research summits, or critical university engagements, <b>Madison Airport transportation</b> via Bayou Black Cars delivers unparalleled logistical precision.",
        backgroundImage: '/HERO section/Airport/photo-1558204692-5f402fe220b9.png'
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
        title: "Exclusive Madison Logistics – Bayou Black Cars",
        description: [
            "Why tolerate the delay of conventional airport transit or the uncertainty of ride-sharing networks? Bayou Black Cars provides a definitive upgrade, offering dedicated, executive-class transfers to and from Dane County Regional Airport (MSN), specifically configured to support the exacting requirements of VIPs, corporate teams, and political delegations.",
            "Our extensive fleet catalog ensures optimal deployment. Select a pristine executive sedan for rapid, discreet access to downtown Madison, or deploy our massive luxury SUVs and custom Sprinter vans for transporting comprehensive research or corporate teams. We proactively monitor your incoming aviation telemetry, guaranteeing a synchronized, zero-wait pickup.",
            "Whether you require immediate transit to Epic Systems, the Monona Terrace Convention Center, or overland, long-haul routing to Milwaukee or Chicago, Bayou Black Cars manages the full spectrum of your ground operation."
        ],
        extraText: "Our MSN private service caters explicitly to demanding logistical profiles. Visiting academics and families recognize the utility of our high-volume luxury SUVs, which safely secure heavy tech cases and provide necessary child safety seats upon demand. Discerning VIP couples rely on the acoustic privacy embedded in our executive sedans, while event organizers leverage our scaled executive vans for mass VIP simultaneous arrivals. Bayou Black Cars redefines the standard for Madison transportation."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at MSN for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Madison Airport (MSN)",
        sections: [
            {
                title: "Premium Sedans for Executives",
                paragraphs: ["Transition instantly into an ultra-quiet, secure environment immediately upon exiting MSN. Our elite dispatch service utilizes current-year luxury sedans, granting professionals optimal conditions to prepare for legislative reviews or decompress from international travel."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUVs & Transit Vans",
                paragraphs: ["Controlling logistics for an extended corporate team or coordinating a massive university event? Our MSN group operations feature elite luxury SUVs and tailored Sprinter vans. Leverage vast cabin spacing and dedicated payload areas to migrate your personnel and equipment seamlessly."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Optimized Safety via Infant Seating",
                paragraphs: [
                    "We reduce the friction native to traveling with small children. By stipulating your exact needs during checkout, our team will aggressively sanitize and pre-install proper child safety seats into your designated sedan or SUV.",
                    "Absolute Federal Mandate: Due to safety laws, child restraint structures cannot be deployed within stretch limousines. We strictly advise the procurement of our premium SUV class when safeguarding children."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at MSN",
        sections: [
            {
                title: "Bypass the Capital Transit Queues",
                paragraphs: ["Your high-level schedule should not be disrupted by common taxi wait times. Exert control over your deployment by arranging a private chauffeur with Bayou Black Cars, ensuring a distinguished, immediate exit from the MSN terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Precision Routing to Capitol Square",
                paragraphs: ["We excel at moving demanding executives. Rely on an expertly plotted, ultra-efficient route from the airport directly to Capitol Square, central tech hubs, or the university's research command centers."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Executive Grade Hotel & Campus Transfers",
                paragraphs: ["Whether your operation terminates at a luxury hotel near the lakes or requires immediate transit to an academic summit, our chauffeurs will execute a flawless, door-to-door ground protocol."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Madison Airport", to: "State Capitol Square" },
        { from: "Madison Airport", to: "University of Wisconsin-Madison" },
        { from: "Madison Airport", to: "Kohl Center" },
        { from: "Madison Airport", to: "Monona Terrace Convention Center" },
        { from: "Madison Airport", to: "Epic Systems Campus" },
        { from: "Madison Airport", to: "Sun Prairie, WI" },
        { from: "Madison Airport", to: "Middleton, WI" },
        { from: "Madison", to: "Milwaukee (MKE)" }
    ],
    faqs: [
        {
            question: "When should I execute my reservation for MSN arrivals?",
            answer: "To ensure full access to our premium vehicle segments, particularly during peak legislative or university events, we urge clients to book at least 24 hours prior. We also support urgent executive dispatch."
        },
        {
            question: "Is it possible to retain my preferred chauffeur?",
            answer: "Yes, preserving operational continuity is standard. Detail your preferred chauffeur's name when generating the new reservation, and our dispatchers will aggressively attempt to lock them into your itinerary."
        },
        {
            question: "How do I ensure secure child seating is provided?",
            answer: "Bayou Black Cars holds an array of sanitized, compliant safety seats. Dictate the precise age, weight, and necessary seat configuration of your child during booking to ensure flawless, immediate availability."
        },
        {
            question: "How do you mitigate unpredictable MSN flight delays?",
            answer: "We connect directly to live flight status APIs. The deployment of your vehicle is fundamentally synchronized to your aircraft's actual ground arrival time, neutralizing concerns over logistical decay."
        },
        {
            question: "Can I engineer a complex route with heavy multi-stop requirements?",
            answer: "Absolutely. Our 'As Directed' hourly structure is utilized extensively by executives charting multi-point paths across the capital region. Coordinate your specific drop points with our logistical planners."
        },
        {
            question: "Can your fleet accommodate massive legislative or corporate delegations?",
            answer: "Yes. For sweeping corporate seminars or heavy political maneuvers, our fleet contains modified luxury Sprinter vans and profound-capacity executive coaches ready to synchronize large-scale transit."
        },
        {
            question: "Is complete luggage curation included systematically?",
            answer: "Yes. Our white-glove mandate insists that chauffeurs fully commandeer your luggage, processing it from MSN carousels directly to the interior lobby of your final destination."
        },
        {
            question: "What is the penalty for sudden schedule or route updates?",
            answer: "Standard shifting of timelines is typically absorbed easily; however, complete cancellations initiated mere hours prior to deployment may intersect with the penalty framework outlined in our service contract."
        },
        {
            question: "Do you facilitate long-distance, intra-state transfers from Madison?",
            answer: "Yes, advanced overland transit is a massive sector of our capability. We routinely move clients completely via private luxury vehicle from Madison into Milwaukee or directly to Chicago environments. Contact logistics for quotes."
        },
        {
            question: "How do you process large-scale enterprise financial accounts?",
            answer: "We interface fluidly with corporate finance. We instantly authorize major elite credit platforms and build reliable, consolidated monthly billing architectures for regular enterprise partners."
        }
    ]
};
