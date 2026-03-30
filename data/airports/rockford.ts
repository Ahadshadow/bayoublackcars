import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const rockfordAirportData = {
    slug: 'rockford',
    cityName: 'Rockford',
    hero: {
        title: 'Executive Black Car Operations at RFD',
        highlightedCity: 'Premium Chicago Rockford Airport (RFD) Transport',
        description: "<b>Chicago Rockford International Airport (RFD)</b> serves as a highly efficient, low-friction access point for northern Illinois and the greater Chicago logistics corridor. Positioned effectively outside heavy urban congestion zones, RFD grants executives and private travelers accelerated entry into regional business hubs and industrial centers. Navigating the surrounding geography requires precision; discerning clients rely on our <b>private black car service from Rockford Airport</b> to secure an immediate, high-caliber transfer directly to the boardroom or their final estate. Whether touching down for a specialized corporate summit, coordinating a massive logistics operation, or executing a private visit, <b>Rockford Airport transportation</b> deployed by Bayou Black Cars guarantees a tactically flawless transition.",
        backgroundImage: '/HERO section/Airport/premium_photo-1661962354730-cda54fa4f9f1.png'
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
        title: "Elite Rockford Logistics – Bayou Black Cars",
        description: [
            "Why tolerate the inefficiency of standard taxi ranks or the unpredictable variables of local rideshares? Bayou Black Cars re-engineers ground transit by delivering dedicated, executive-class transportation to and from Chicago Rockford International Airport (RFD), meticulously crafted for high-level corporate officers, heavy logistics teams, and demanding families.",
            "Our extensive vehicle matrix scales dynamically to your exact operational parameters. Order a pristine luxury sedan for an isolated, high-speed vector into downtown Rockford, or deploy our expanded luxury SUVs and VIP Sprinter vans to extract massive teams seamlessly. Our dispatch core maintains live telemetry on all RFD arrivals, guaranteeing your chauffeur is locked into position as you enter the terminal.",
            "Whether you demand a rapid transfer to a local corporate headquarters, a strategic overland route deep into Chicago, or a quiet transition into the surrounding suburbs, Bayou Black Cars governs your entire transit footprint."
        ],
        extraText: "Our RFD executive capability extends massively beyond standard business requirements. Regional families actively request our extended-capacity luxury SUVs to smoothly manage significant luggage loads, with fully sanitized child restraint platforms installed upon demand. Executive pairs utilize the profound acoustic isolation of our flagship sedans for unbothered travel, while large-scale event directors deploy our specialized executive vans to guarantee perfectly synchronized arrivals. Bayou Black Cars is the definitive transportation authority for the Rockford network."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at RFD for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Rockford Airport (RFD)",
        sections: [
            {
                title: "Executive Sedans for Professionals",
                paragraphs: ["Enter immediately into a climate-stabilized, flawless environment upon leaving RFD. Our pinnacle private transfer operations rely on late-model luxury sedans, granting executives the deep isolation needed to finalize strategy or decompress prior to municipal entry."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUVs & VIP Vans",
                paragraphs: ["Coordinating transit for a regional board of directors or moving a massive family? Our Rockford group operations deploy elite luxury SUVs and customized Sprinter vans. Leverage extreme cabin spacing and dedicated payload zones to transit your group flawlessly."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Mission-Critical Child Safety",
                paragraphs: [
                    "We obliterate the severe tactical friction of flying with infants. Specify your exact child safety demands during the booking phase, and our technical crews will heavily sanitize and pre-install the precise restraint platform inside your chosen luxury vehicle.",
                    "Crucial Precaution: Driven by federal safety laws, child restraint structures are forbidden within stretch limousines. We forcefully advise reserving our premium SUV class when guaranteeing infant security."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at RFD",
        sections: [
            {
                title: "Bypass the Terminal Constraints",
                paragraphs: ["Your exacting timeline cannot be interrupted by inefficient local transport queues. Assume absolute control by mobilizing a private chauffeur with Bayou Black Cars, verifying a prestigious, immediate deployment directly from the RFD complex."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Precision Routing to Rockford CBD",
                paragraphs: ["We exist to execute extreme efficiency for demanding actors. Benefit from our expertly navigated, high-velocity routing straight from RFD into corporate Rockford, bypassing any localized congestion vectors."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Elite Corporate Intercity Transfers",
                paragraphs: ["Whether your operation concludes at a major hotel, demands an immediate drop-off at local industrial centers, or requires a massive overland vector into downtown Chicago, our highly trained operatives orchestrate flawless ground movement."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Rockford Airport", to: "Downtown Rockford" },
        { from: "Rockford Airport", to: "BMO Center" },
        { from: "Rockford Airport", to: "Anderson Japanese Gardens" },
        { from: "Rockford Airport", to: "Discovery Center Museum" },
        { from: "Rockford Airport", to: "Belvidere, IL" },
        { from: "Rockford Airport", to: "Freeport, IL" },
        { from: "Rockford Airport", to: "Loves Park, IL" },
        { from: "Rockford", to: "Chicago (ORD/MDW)" }
    ],
    faqs: [
        {
            question: "When should I execute my reservation for an RFD transport?",
            answer: "To guarantee unrestricted access to our highest-tier vehicle classifications, we strongly recommend defining your reservation at least 24 hours prior to touchdown. We do, however, regularly execute rapid-response, same-day deployments."
        },
        {
            question: "Is it possible to mandate my preferred chauffeur?",
            answer: "Absolutely. We view service continuity as a core pillar of luxury. Specify your requested driver’s name when initiating the booking, and our dispatchers will aggressively attempt to lock them into your RFD arrival."
        },
        {
            question: "How do I secure compliant infant or child safety platforms?",
            answer: "Bayou Black Cars holds an array of intensely sanitized, federally compliant car seats. Detail the exact age and structural weight of your child when reserving to ensure immediate, zero-delay installation within your vehicle."
        },
        {
            question: "How do you neutralize the threat of unpredictable flight delays?",
            answer: "We connect directly with live aviation network interfaces. The local deployment of your vehicle is bound directly to your aircraft's actual runway touchdown, destroying any threat of wait-time friction."
        },
        {
            question: "Can I plot a highly complex route with heavy multi-stop variables?",
            answer: "Yes. Our 'As Directed' block architecture empowers executives to execute intense, multi-location operational agendas immediately upon leaving RFD. Simply map your necessary waypoints with our agents."
        },
        {
            question: "Do you maintain structural capability for massive corporate or family groups?",
            answer: "Yes. For overwhelming corporate movement or high-profile event transit out of Rockford, we insert heavily modified luxury Sprinter vans and massive-capacity executive coaches to flawlessly synchronize your logistics."
        },
        {
            question: "Is aggressive luggage processing an absolute guarantee?",
            answer: "Yes. Our white-glove operating framework decrees that chauffeurs assume total physical control of all luggage immediately at the RFD carousel, moving it securely and landing it directly in your final destination."
        },
        {
            question: "What protocols govern severe itinerary or route recalibrations?",
            answer: "We accommodate the fluid realities of executive trajectories. Standard timeline adjustments present zero issue; however, catastrophic cancellations near the extraction hour may activate our contracted fee structure."
        },
        {
            question: "Do you supply heavy overland transit stretching out of Rockford into Chicago?",
            answer: "Yes, advanced intercity ground movement is a fundamental operational capability. We rapidly deploy elite transit vectors from RFD straight into Chicago (ORD/MDW) or deep into suburban zones. Contact logistics for exact duration and pricing."
        },
        {
            question: "How do you interface with heavy enterprise and family office accounts?",
            answer: "We exist smoothly within high-level corporate accounting structures. We instantly process major commercial cards and construct ironclad, consolidated monthly billing systems for our sustained partners."
        }
    ]
};
