import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const appletonAirportData = {
    slug: 'appleton',
    cityName: 'Appleton',
    hero: {
        title: 'Elite Black Car Service to and from ATW',
        highlightedCity: 'Premium Appleton International Airport (ATW) Transport',
        description: "<b>Appleton International Airport (ATW)</b> stands as the premier entry point to the Fox Cities region and Northeast Wisconsin. Situated in Greenville, it delivers a highly efficient, stress-free travel experience favored by executives heading to Appleton, Oshkosh, and Green Bay. The terminal is designed for rapid transit without compromising on modern amenities. Elite travelers consistently choose our <b>private black car service from ATW</b> to maintain their productivity and secure a discreet, luxurious ride. Whether arriving for the massive EAA AirVenture convention, a critical board meeting, or a private retreat, <b>Appleton Airport transportation</b> from Bayou Black Cars sets the highest standard.",
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
        title: "Exclusive Appleton Airport Logistics – Bayou Black Cars",
        description: [
            "Why risk your schedule relying on unpredictable ride apps or navigating rental car lines? Bayou Black Cars offers a superior alternative, providing dedicated, luxury transportation directly to and from Appleton International Airport (ATW), crafted for discerning executives and sophisticated groups.",
            "Our fleet is curated for maximum comfort. Select an understated executive sedan for urgent business travel, or deploy one of our high-end luxury SUVs and Sprinter vans for team offsites and family events. We proactively track flight statuses, coordinate directly at the ATW terminal, and handle all ground logistics gracefully.",
            "Whether you require an immediate transfer to downtown Appleton, a managed route to Oshkosh, or a long-distance private ride across Wisconsin, Bayou Black Cars is your definitive partner for ground transit."
        ],
        extraText: "Our ATW executive service caters to diverse travel needs beyond the boardroom. Large families rely on our expansive SUVs to accommodate extensive luggage and ensure a safe ride with available child seats. Leisure travelers seeking a luxurious start to their vacation appreciate the refined ambiance of our black fleet, while corporate groups utilize our executive coaches to begin their offsite meetings the moment they leave ATW. Bayou Black Cars guarantees your arrival in Wisconsin is flawless."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at ATW for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Appleton Airport (ATW)",
        sections: [
            {
                title: "Premium Sedans for Executives and VIPs",
                paragraphs: ["Retreat into the quiet luxury of an executive sedan after touching down at ATW. Our private transfer service offers a meticulously maintained cabin, providing the ideal space for making confidential calls or relaxing in complete privacy."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Executive SUV & Sprinter Fleet for Groups",
                paragraphs: ["For delegations attending Fox Cities conventions or family gatherings, our high-capacity SUVs and luxury Sprinters provide unmatched comfort. Experience a spacious environment built to handle significant luggage without compromising on legroom."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Secure Transit with Provided Child Seats",
                paragraphs: [
                    "Traveling with infants shouldn't mean sacrificing luxury or safety. We can outfit our sedans and SUVs with top-tier child safety seats upon your request.",
                    "Important Policy: Due to passenger safety regulations, child seats cannot be secured within stretch limousines. We recommend our premium SUV class for families requiring this service."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at ATW",
        sections: [
            {
                title: "Evade the Transportation Gridlock",
                paragraphs: ["Your time is too valuable to spend in a taxi queue. Pre-arrange your private chauffeur with Bayou Black Cars and ensure an elegant, immediate departure the moment you exit the ATW terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Seamless Routing to Appleton & the Fox Cities",
                paragraphs: ["We specialize in efficient logistics for busy executives. Enjoy a direct, meticulously planned route from ATW to downtown Appleton or any corporate headquarters in the surrounding valley."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Executive Hotel & Event Venue Transfers",
                paragraphs: ["Whether your agenda includes checking into a premium hotel or arriving directly at a major convention center, our chauffeurs provide professional, door-to-door transit from Appleton Airport without delay."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Appleton Airport", to: "Downtown Appleton" },
        { from: "Appleton Airport", to: "Lawrence University" },
        { from: "Appleton Airport", to: "Fox Cities Exhibition Center" },
        { from: "Appleton Airport", to: "Oshkosh, WI" },
        { from: "Appleton Airport", to: "Neenah, WI" },
        { from: "Appleton Airport", to: "Green Bay, WI" },
        { from: "Appleton Airport", to: "EAA AirVenture Grounds" },
        { from: "Appleton", to: "Milwaukee" }
    ],
    faqs: [
        {
            question: "When is the optimal time to secure my ATW transfer?",
            answer: "For guaranteed access to our premium fleet categories, we advise booking a minimum of 24 hours in advance. We do, however, regularly fulfill prompt, same-day executive transport requests."
        },
        {
            question: "May I request a specific chauffeur for recurring travel?",
            answer: "We encourage it. Building trust is a core aspect of our brand. Please specify your preference when reserving your vehicle, and we will prioritize scheduling that particular chauffeur."
        },
        {
            question: "Are child restraint systems available for families?",
            answer: "Yes, Bayou Black Cars offers sanitized, safety-compliant child seats. Indicate the age and requirements of your child on the reservation form so the correct equipment is pre-installed."
        },
        {
            question: "How does Bayou Black Cars manage flight delays at ATW?",
            answer: "We employ real-time aviation tracking. Your chauffeur's dispatch is synchronized dynamically with your flight’s actual touchdown time at Appleton Airport, eliminating any wait-time concerns during delays."
        },
        {
            question: "Does your service accommodate complex itineraries?",
            answer: "Absolutely. Our 'As Directed' hourly service is designed explicitly for multi-stop corporate itineraries or extensive city travel. Discuss your schedule with our agents for precise coordination."
        },
        {
            question: "Can your fleet handle a large executive delegation?",
            answer: "Yes, our luxury Sprinter vans and high-tier mini-coaches are meticulously maintained to transport corporate groups, VIP entourages, and event VIPs with supreme comfort."
        },
        {
            question: "Is comprehensive luggage assistance included?",
            answer: "Yes. From meeting you at the baggage claim or curbside to loading the vehicle and delivering luggage to your hotel threshold, our chauffeurs handle everything."
        },
        {
            question: "What rules govern altering my reservation?",
            answer: "We support flexible travel. Minor adjustments can typically be accommodated freely, though cancellations or significant route changes made immediately prior to pickup may be subject to our terms."
        },
        {
            question: "Do you offer private transfers to events like EAA AirVenture?",
            answer: "Providing elite transit to top-tier regional events is our specialty. We frequently arrange complex logistics for guests traveling from ATW straight to the Oshkosh grounds."
        },
        {
            question: "How does corporate billing function?",
            answer: "Professional management expects streamlined finances. We accept all major cards and provide secure invoicing, along with customized corporate billing accounts for our enterprise partners."
        }
    ]
};
