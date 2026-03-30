import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const milwaukeeAirportData = {
    slug: 'milwaukee',
    cityName: 'Milwaukee',
    hero: {
        title: 'Executive Black Car Service to and from MKE',
        highlightedCity: 'Premium Milwaukee Mitchell International Airport (MKE) Transport',
        description: "<b>Milwaukee Mitchell International Airport (MKE)</b> operates as the sophisticated, dominant aviation gateway to Wisconsin while significantly servicing northern Illinois. Positioned immediately south of the downtown sector, MKE presents a highly streamlined entry point, favored heavily by executives avoiding extreme congestion. The facility is celebrated for progressive terminal design and rapid city integration. Elite travelers mandate our <b>private black car service from MKE</b> to establish a discrete, accelerated transition straight to corporate event centers or the Fiserv Forum. Whether deploying for massive summer festivals, high-stakes conventions, or regional business, <b>Milwaukee Airport transportation</b> by Bayou Black Cars yields uncompromising performance.",
        backgroundImage: '/HERO section/Airport/photo-1556388158-158ea5ccacbd.png'
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
        title: "Exclusive Milwaukee Logistics – Bayou Black Cars",
        description: [
            "Why endure unpredictable rideshare interfaces or navigate highly congested local transit networks? Bayou Black Cars defines an apex standard, launching dedicated, executive-class transportation to and from Milwaukee Mitchell International Airport (MKE), meticulously developed for industry leaders, VIP attendees, and corporate syndicates.",
            "Our extensive vehicular fleet scales precisely to your mandate. Select a flawless executive sedan for specialized, immediate entry into the city core, or leverage our high-volume luxury SUVs and VIP Sprinter vans to transition sweeping corporate teams seamlessly. We aggressively interrogate live flight radar, guaranteeing a perfectly timed, stationary chauffeur upon your arrival.",
            "Whether you need high-speed transit directly to a lakefront resort, a high-security route to the Wisconsin Center, or direct inter-state transfer pushing south toward Chicago, Bayou Black Cars controls the entire operational grid."
        ],
        extraText: "Our MKE executive infrastructure supports intense logistical scenarios. Large families routinely extract value from our cavernous luxury SUVs, utilizing deep cargo spaces while demanding sanitized child restraint systems. High-profile couples insist on the immense acoustic seclusion found inside our flagship sedans. Likewise, massive corporate event supervisors rely on our heavily scaled executive buses to execute flawless group arrivals. Bayou Black Cars operates as the singular, elite transit authority for Milwaukee."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at MKE for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Milwaukee Airport (MKE)",
        sections: [
            {
                title: "Elite Sedans for Professionals",
                paragraphs: ["Enter immediately into a climate-stabilized, flawless atmosphere after clearing MKE arrival logic. Our flagship transfer protocol utilizes pristine, late-model luxury sedans, granting executives the requisite sensory isolation to finish preparations or simply de-stress before city entry."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUVs & Sprinter Units",
                paragraphs: ["Directing logistics for a heavy corporate summit or large-scale family transit? Our MKE group operations arm commands elite luxury SUVs and tailored Sprinter vans. Rely on massive cabin expansion and dedicated cargo zones to move personnel seamlessly."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Regulated Safety via Premium Car Seats",
                paragraphs: [
                    "We obliterate the friction inherent in moving infants through airport networks. Specify your demands during reservations, and our technicians will aggressively sanitize and pre-install exact, age-appropriate child seating within your designated luxury vehicle.",
                    "Crucial Safety Parameter: Due to federal constraints, child safety systems cannot operate inside stretch limousines. We strictly mandate the booking of our premium SUV categories when securing little ones."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Advantage at MKE",
        sections: [
            {
                title: "Bypass the Regional Transit Network",
                paragraphs: ["Refuse to subject your premium itinerary to the vagaries of general public taxi ranks. Demand total control by utilizing a private chauffeur with Bayou Black Cars, guaranteeing an immediate, highly prestigious departure from the MKE complex."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Strategic Routing to Milwaukee's Center",
                paragraphs: ["We specialize in extreme efficiency for corporate elites. Leverage our expertly navigated, high-velocity routing straight from the terminal deep into the downtown core, the Fiserv Forum, or any major hotel."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Elite Hotel & Corporate Conference Transfers",
                paragraphs: ["Whether your operation terminates at a premier lakefront resort or requires immediate transit to the Wisconsin Center, our dedicated chauffeurs orchestrate perfect, door-to-door ground deployment."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            }
        ]
    },
    routes: [
        { from: "Milwaukee Mitchell", to: "Downtown Milwaukee" },
        { from: "Milwaukee Mitchell", to: "Fiserv Forum" },
        { from: "Milwaukee Mitchell", to: "Wisconsin Center" },
        { from: "Milwaukee Mitchell", to: "Summerfest Grounds" },
        { from: "Milwaukee Mitchell", to: "Kenosha, WI" },
        { from: "Milwaukee Mitchell", to: "Racine, WI" },
        { from: "Milwaukee Mitchell", to: "Madison, WI" },
        { from: "Milwaukee", to: "Chicago (ORD/MDW)" }
    ],
    faqs: [
        {
            question: "When should I execute my reservation for an MKE transfer?",
            answer: "To ensure full access to our elite vehicle tiers—especially during massive summer festivals or conventions—we assert booking at least 24 hours prior. Rapid executive dispatch remains available."
        },
        {
            question: "Is it possible to mandate the identical chauffeur for my return?",
            answer: "Absolutely. Consistency forms the bedrock of our high-end service. Specify your previous driver’s name during booking, and our dispatchers will aggressively attempt to assign them to your schedule."
        },
        {
            question: "How do I secure infant or child safety seating?",
            answer: "Bayou Black Cars holds fully sanitized, tested car seats. Detail the exact age, weight, and preferred style of seat for your child when reserving to ensure immediate, zero-delay installation."
        },
        {
            question: "How do you navigate chaotic MKE flight delays?",
            answer: "We employ live API hooks into global flight radar systems. The localized dispatch of your vehicle is tied totally to your aircraft's actual runway metrics, neutralizing any wait-time friction."
        },
        {
            question: "Can I plot a complex route with heavy multi-stop variables?",
            answer: "Yes. Our 'As Directed' block hours are designed specifically to empower executives executing heavy, multi-location agendas across the Milwaukee region. Plot your specific waypoints with our agents."
        },
        {
            question: "Do you maintain the capability to transport massive corporate delegations?",
            answer: "Yes. For overwhelming corporate retreats or intense festival movement, we inject heavily modified luxury Sprinter vans and massive-capacity executive coaches to synchronize your logistics."
        },
        {
            question: "Is aggressive luggage curation a standard inclusion?",
            answer: "Yes. Our absolute white-glove operating framework commands that chauffeurs assume total control of your bags, extracting them from MKE lines and landing them directly in your destination lobby."
        },
        {
            question: "What rules cover drastic itinerary or route changes?",
            answer: "We flow easily with shifting executive timelines. Standard adjustments present zero issue; however, catastrophic cancellations near the extraction hour may brush against our contract fee structure."
        },
        {
            question: "Do you supply long-distance transit deep into Illinois or Madison?",
            answer: "Yes, advanced overland movement is a heavy component of our operation. We systematically push elite transit from MKE straight down into Chicago or out to Madison. Consult logistics for precise figures."
        },
        {
            question: "How do you handle heavy corporate financial accounts?",
            answer: "We exist smoothly within enterprise accounting structures. We instantly process major corporate cards and generate ironclad, consolidated monthly billing systems for our sustained partners."
        }
    ]
};
