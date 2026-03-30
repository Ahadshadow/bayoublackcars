import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const newOrleansLakefrontAirportData = {
    slug: 'new-orleans-lakefront',
    cityName: 'New Orleans',
    hero: {
        title: 'Executive Black Car Service to and from NEW',
        highlightedCity: 'Premium New Orleans Lakefront Airport (NEW) Transport',
        description: "<b>New Orleans Lakefront Airport (NEW)</b> stands as the definitive hub for private, corporate, and chartered aviation within the Gulf Coast region. Positioned uniquely along the edge of Lake Pontchartrain, this historically significant facility bypasses commercial congestion, offering executives unprecedented speed. NEW delivers elite FBO operations, high-security aprons, and immediate, streamlined access to the central business district. Uncompromising travelers demand our <b>private black car service from Lakefront Airport</b> to execute a flawless, discrete transition directly from the tarmac to their final engagement. Whether deploying for rapid corporate action, VIP entertainment, or high-stakes summits, <b>Lakefront Airport transportation</b> via Bayou Black Cars operates with absolute precision.",
        backgroundImage: '/HERO section/Airport/photo-1569154941061-e231b4725ef1.png'
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
        title: "Exclusive Lakefront Logistics – Bayou Black Cars",
        description: [
            "Why compromise a premium private aviation experience by relying on standard ground transit? Bayou Black Cars matches the exclusivity of NEW by providing dedicated, executive-class transportation to and from New Orleans Lakefront Airport, meticulously structured for high-net-worth individuals, corporate officers, and VIP entourages.",
            "Our distinguished vehicle matrix scales dynamically to your security and personnel requirements. Select an armored-equivalent luxury sedan for highly discreet access to downtown logic centers, or leverage our heavily expanded luxury SUVs and VIP Sprinter vans to extract large teams immediately. Our dispatchers monitor incoming flight trajectories, guaranteeing your chauffeur is locked into position as you deplane.",
            "Whether you need accelerated transit traversing directly to the French Quarter, a quiet transfer to local corporate headquarters, or overland service pushing outward across Louisiana, Bayou Black Cars controls the entire operational footprint."
        ],
        extraText: "Our NEW executive capability serves extreme logistical demands. Privacy-focused groups heavily utilize our volume-focused luxury SUVs, maximizing cargo capability while requesting sanitized child restraint systems for high-priority families. Prominent figures rely entirely on the profound acoustic isolation native to our flagship sedans. Simultaneously, corporate event planners deploy our scaled executive vans for synchronized, multi-vehicle arrivals. Bayou Black Cars operates as the ultimate transit authority for Lakefront."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at NEW for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Lakefront Airport (NEW)",
        sections: [
            {
                title: "Elite Sedans for Private Aviation",
                paragraphs: ["Transition seamlessly from your private aircraft into a secure, climate-stabilized environment. Our primary transfer operations utilize pristine, late-model luxury sedans, granting VIPs total isolation to finalize operations or rest prior to entering the city core."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUVs & VIP Vans",
                paragraphs: ["Managing logistics for an incoming board of directors or heavy VIP entourage? Our NEW group transit arm commands elite luxury SUVs and tailored Sprinter vans. Exploit massive cabin expansion and dedicated payload zones to transition massive teams flawlessly."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Mission-Critical Child Safety",
                paragraphs: [
                    "We obliterate the friction inherent in moving infants securely. Specify exact demands during the reservation phase, and our technical team will intensely sanitize and pre-install precise child seating within your designated luxury vehicle.",
                    "Crucial Precaution: Driven by federal safety laws, child restraint structures are forbidden inside stretch limousines. We strictly mandate the booking of our premium SUV class when guaranteeing child safety."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at NEW",
        sections: [
            {
                title: "Immediate Tarmac Transition",
                paragraphs: ["Your exacting timeline cannot be delayed by inefficient ground operations. Assume total control by mobilizing a private chauffeur with Bayou Black Cars, verifying a prestigious, immediate departure from the NEW FBO complex."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Precision Routing to New Orleans",
                paragraphs: ["We exist to execute extreme efficiency for demanding actors. Benefit from our expertly navigated, high-velocity routing directly from the Lakefront into the French Quarter, avoiding central city congestion zones."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Elite Corporate Hotel Transfers",
                paragraphs: ["Whether your mission concludes at a supreme downtown resort or demands immediate transit to the CBD, our dedicated chauffeurs orchestrate flawless, door-to-door ground deployment from your aircraft."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            }
        ]
    },
    routes: [
        { from: "New Orleans", to: "French Quarter" },
        { from: "New Orleans", to: "Downtown New Orleans" },
        { from: "New Orleans", to: "Garden District" },
        { from: "New Orleans", to: "Ernest N. Morial Convention Center" },
        { from: "New Orleans", to: "Metairie" },
        { from: "New Orleans", to: "New Orleans Cruise Port" },
        { from: "New Orleans", to: "Kenner, LA" },
        { from: "New Orleans", to: "Baton Rouge" }
    ],
    faqs: [
        {
            question: "When should I execute my reservation for a NEW transfer?",
            answer: "Given the specialized nature of FBO arrivals, we strongly recommend defining your reservation at least 24 hours prior to wheels-down. Nevertheless, we maintain rapid-response executive dispatch capabilities."
        },
        {
            question: "Is it possible to mandate my preferred chauffeur for FBO pickup?",
            answer: "Absolutely. We view continuity as a pillar of luxury. Specify your driver’s name when initiating the booking, and our dispatchers will aggressively move to assign them to your Lakefront arrival."
        },
        {
            question: "How do I secure compliant infant or child safety seating?",
            answer: "Bayou Black Cars holds an array of sanitized, federally verified car seats. Detail the exact age and weight of your child when reserving to ensure immediate, zero-delay installation inside your vehicle."
        },
        {
            question: "How do you integrate with private aviation arrival variances?",
            answer: "We communicate directly with FBO coordinators and employ live aviation tracking. The local dispatch of your vehicle is tied entirely to your jet's actual runway touchdown, destroying any threat of wait-time friction."
        },
        {
            question: "Can I plot an intricate route with heavy multi-stop variables?",
            answer: "Yes. Our 'As Directed' block structure empowers executives executing intense, multi-location agendas immediately upon leaving Lakefront Airport. Simply map your necessary waypoints with our agents."
        },
        {
            question: "Do you maintain structural capability for massive VIP entourages?",
            answer: "Yes. For overwhelming corporate movement or high-profile event transit, we insert heavily modified luxury Sprinter vans and massive-capacity executive buses to perfectly synchronize your logistics."
        },
        {
            question: "Is aggressive luggage and equipment processing an absolute standard?",
            answer: "Yes. Our white-glove operating framework decrees that chauffeurs assume total control of all luggage immediately at the FBO, moving it securely and landing it directly in your final destination."
        },
        {
            question: "What protocols govern severe itinerary or route recalibrations?",
            answer: "We flow dynamically with shifting executive trajectories. Standard timeline adjustments present zero issue; however, catastrophic cancellations near the extraction hour may activate our contract fee structure."
        },
        {
            question: "Do you supply long-distance transit stretching out of NEW into neighboring zones?",
            answer: "Yes, advanced overland ground movement is a fundamental capability. We rapidly deploy elite transit from NEW straight into Baton Rouge, Slidell, or Gulfport. Contact logistics for exact duration and pricing."
        },
        {
            question: "How do you interface with heavy corporate and family office accounts?",
            answer: "We exist smoothly within high-level accounting structures. We instantly process major corporate cards and construct ironclad, consolidated monthly billing systems for our sustained partners."
        }
    ]
};
