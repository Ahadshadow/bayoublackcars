import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const msyAirportData = {
    slug: 'louis-armstrong-airport-msy',
    cityName: 'New Orleans',
    hero: {
        title: 'Executive Black Car Service to and from MSY',
        highlightedCity: 'Premium Louis Armstrong Airport (MSY) Transport',
        description: "<b>Louis Armstrong New Orleans International Airport (MSY)</b> operates as the primary aviation anchor for southeast Louisiana and the Gulf Coast. Situated approximately 15 miles west of the city’s center, MSY provides essential connectivity for discerning business travelers, tourists accessing the French Quarter, and convention demographics. Characterized by its modern, multi-concourse facility, MSY offers significant capacity and high-end amenities. Discerning executives and visitors prioritize our <b>private black car service from MSY</b> to secure an immediate, high-caliber transition to downtown hotels or the Ernest N. Morial Convention Center. Whether arriving for a major corporate summit, a luxury cruise departure, or exclusive leisure, <b>New Orleans Airport transportation</b> via Bayou Black Cars delivers a flawless experience.",
        backgroundImage: '/HERO section/Airport/photo-1561131668-f63504fc549d.png'
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
        title: "Exclusive New Orleans Logistics – Bayou Black Cars",
        description: [
            "Why tolerate the chaos of standard airport taxi queues or the unpredictable quality of app-based rideshares? Bayou Black Cars redefines ground transit by providing dedicated, executive-class transportation to and from Louis Armstrong New Orleans International Airport (MSY), deliberately structured to service corporate leaders, VIPs, and demanding families.",
            "Our distinguished vehicle fleet scales dynamically to meet your exact parameters. Schedule an immaculate luxury sedan for rapid, discreet access to the CBD, or leverage our high-capacity luxury SUVs and customized Sprinter vans to move entire executive teams or large families seamlessly. Our operations center constantly analyzes incoming flight telemetry, ensuring your chauffeur is precisely positioned the moment you land.",
            "Whether you require accelerated transit to a French Quarter boutique hotel, a strategic transfer out to Baton Rouge, or direct service spanning the Gulf Coast, Bayou Black Cars controls the entirety of your ground operations."
        ],
        extraText: "Our MSY executive service operates beyond standard business requirements. Families visiting the Crescent City rely on our extensive luxury SUVs to safely manage substantial luggage loads, with specialized child restraint seating deployed upon request. High-profile couples demand the acoustic sanctuary of our flagship sedans for romantic getaways, while corporate event managers depend on our scaled executive vans for synchronized mass arrivals at local convention spaces. Bayou Black Cars stands as the elite transit authority for New Orleans."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at MSY for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at New Orleans Airport (MSY)",
        sections: [
            {
                title: "Executive Sedans for Professionals",
                paragraphs: ["Enter immediately into a climate-controlled, flawless environment upon exiting MSY. Our premier private transfer service utilizes late-model luxury sedans, granting executives the necessary quiet to finalize strategy or decompress prior to entering the city."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Expansive SUVs for Groups",
                paragraphs: ["Coordinating logistics for a major corporate retreat or moving a large family? Our New Orleans group operations deploy elite luxury SUVs and tailored Sprinter vans. Rely on massive cabin spacing and dedicated payload zones to transit seamlessly."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Prioritized Safety via Child Seating",
                paragraphs: [
                    "We eliminate the logistical burden of flying with young children. Specify your exact requirements during your reservation, and our team will rigorously sanitize and pre-install appropriate child safety platforms within your selected luxury vehicle.",
                    "Crucial Precaution: Due to stringent federal safety mandates, child restraint structures cannot be installed within stretch limousines. We heavily advise booking our premium SUV class when safeguarding infants or toddlers."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at MSY",
        sections: [
            {
                title: "Bypass the Terminal Constraints",
                paragraphs: ["Your premium schedule cannot be subjected to the unpredictable variables of local taxi lines. Retain absolute control by reserving a private chauffeur with Bayou Black Cars, assuring a prestigious, immediate departure from the MSY complex."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Strategic Routing to the French Quarter",
                paragraphs: ["We specialize in high-efficiency transfers for demanding passengers. Benefit from our expertly navigated, direct routing from MSY straight into the heart of the French Quarter, avoiding common congestion zones."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Elite Corporate & Cruise Port Transfers",
                paragraphs: ["Whether your operation terminates at a luxury downtown hotel, a major corporate summit, or requires immediate drop-off at the New Orleans Cruise Port terminals, our highly trained chauffeurs execute flawless ground deployment."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
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
            question: "When should I execute my reservation for an MSY transfer?",
            answer: "To ensure unrestricted access to our top-tier vehicle categories—particularly during major city events—we strongly recommend booking at least 24 hours prior. We do, however, regularly manage rapid, same-day executive dispatch."
        },
        {
            question: "Is it possible to request my preferred chauffeur?",
            answer: "Yes, preserving high-end service continuity is vital. Detail your requested driver's name during the booking phase, and our dispatchers will aggressively attempt to assign them to your upcoming itinerary."
        },
        {
            question: "How do I secure proper child safety infrastructure?",
            answer: "Bayou Black Cars maintains fully sanitized, compliant safety seating. Clearly define the exact age, weight, and preferred seat style for your child during reservation to guarantee immediate, pre-arrival installation."
        },
        {
            question: "How does your system counter unpredictable MSY flight delays?",
            answer: "We connect directly with live aviation tracking interfaces. The deployment of your specialized vehicle is dynamically synchronized with your aircraft's actual runway touchdown, completely neutralizing missed connections."
        },
        {
            question: "Can I engineer a complex route with multi-stop demands?",
            answer: "Absolutely. Our 'As Directed' block service is precisely designed for executives managing multi-phase operations across the New Orleans metropolitan area. Plot your specific geographical stops with our booking agents."
        },
        {
            question: "Can your fleet accommodate massive corporate or wedding groups?",
            answer: "Yes. For overwhelming corporate seminars or large-scale private events, our fleet deploys heavily modified luxury Sprinter vans and profound-capacity executive coaches to flawlessly synchronize group movement."
        },
        {
            question: "Is comprehensive luggage processing included?",
            answer: "Yes. Our white-glove operating mandate requires that chauffeurs assume complete physical control of your luggage, extracting it from MSY carousels and delivering it seamlessly to your final destination lobby."
        },
        {
            question: "What protocols apply to sudden itinerary or route adjustments?",
            answer: "We accommodate the fluid realities of executive travel. Standard temporal shifting is processed easily; however, abrupt cancellations near the designated extraction hour may intersect with our standard fee structure."
        },
        {
            question: "Do you supply long-distance transit deep into neighboring regions?",
            answer: "Yes, advanced overland ground transit is a massive capability sector. We routinely execute private journeys from MSY to Baton Rouge, Lafayette, or even Gulfport, MS. Contact our logistics desk for specific routing quotes."
        },
        {
            question: "How do you manage enterprise-level financial accounts?",
            answer: "We interface smoothly with major corporate structures. We rapidly authorize all top-tier corporate credit platforms and construct reliable, automated monthly billing frameworks for our contracted enterprise partners."
        }
    ]
};
