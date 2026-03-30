import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const batonRougeAirportData = {
    slug: 'baton-rouge',
    cityName: 'Baton Rouge',
    hero: {
        title: 'Executive Black Car Service to and from BTR',
        highlightedCity: 'Premium Baton Rouge Metropolitan Airport (BTR) Transport',
        description: "<b>Baton Rouge Metropolitan Airport (BTR)</b> serves as a vital corporate and political access point for Louisiana's capital. Situated conveniently north of the downtown district, it ensures rapid transit for government officials, executives, and university guests. BTR prioritizes swift connections and passenger ease. Discerning professionals consistently book our <b>private black car service from BTR</b> to secure a quiet, sophisticated transfer directly to their engagements. Whether your visit involves state legislation, LSU athletics, or corporate strategy, <b>Baton Rouge Airport transportation</b> provided by Bayou Black Cars guarantees an optimal travel experience.",
        backgroundImage: '/HERO section/Airport/photo-1503365194569-df4e1d04cec1.png'
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
        title: "Exclusive Baton Rouge Airport Logistics – Bayou Black Cars",
        description: [
            "Why risk your schedule relying on crowded shuttles or unpredictable ride apps? Bayou Black Cars offers a superior standard of ground transit, delivering high-end, dedicated transportation to and from Baton Rouge Metropolitan Airport (BTR), specifically designed to meet the demands of corporate figures, large groups, and VIPs.",
            "Our extensive luxury fleet offers the perfect vehicle for any itinerary. Select an executive sedan for swift solo travel to the Capitol, or reserve our spacious premium SUVs and Sprinter vans for coordinating team movements out of BTR. We continuously monitor your flight details and organize precise terminal pickups to ensure absolute efficiency.",
            "Whether you require an immediate ride to downtown Baton Rouge, a seamless transfer from New Orleans to BTR, or specialized routed service to surrounding parishes, Bayou Black Cars manages your entire journey."
        ],
        extraText: "Our BTR executive service is not limited to corporate affairs. Large families frequenting the area value our high-capacity SUVs, which handle excessive luggage with ease and provide child safety seating upon request. Vacationing couples prefer the understated elegance of our luxury sedans, while alumni and corporate groups rely on our executive coaches for unified transportation during LSU events. Bayou Black Cars is dedicated to making your arrival in the capital flawless."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at BTR for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Baton Rouge Airport (BTR)",
        sections: [
            {
                title: "Executive Sedans for Solo Travelers & VIPs",
                paragraphs: ["Enter an environment of complete tranquility immediately after arriving at BTR. Our private transfer service operates immaculate, latest-model sedans, granting professionals the necessary privacy to conduct business or relax post-flight."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Spacious SUV & Sprinter Fleet for Groups",
                paragraphs: ["Managing transit for a corporate delegation or a large family gathering? Our Baton Rouge Airport group transport utilizes high-tier SUVs and customized Sprinter vans. Enjoy expansive legroom and dedicated luggage compartments for a highly comfortable group ride."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Ensured Safety with Provided Child Seats",
                paragraphs: [
                    "We alleviate the logistical challenges of family travel. Simply request child safety configurations during booking, and our chauffeurs will professionally install premium infant or booster seats in your sedan or SUV.",
                    "Safety Note: Compliance mandates specify that child restraint systems cannot be deployed in stretch limousines. We strongly advise selecting our luxury SUV tier for family airport transfers."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Standard at BTR",
        sections: [
            {
                title: "Bypass the Transportation Gridlock",
                paragraphs: ["Your itinerary shouldn't include waiting in a taxi queue. Secure your private chauffeur with Bayou Black Cars to guarantee an immediate, sophisticated departure from the BTR terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Efficient Routing to Downtown Baton Rouge",
                paragraphs: ["We cater to executives demanding precision logistics. Benefit from a direct, expertly navigated route from the airport directly to downtown Baton Rouge, the Capitol, or LSU."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Executive Hotel & Regional Event Transfers",
                paragraphs: ["Whether your destination is a luxury hotel along the river or a major event venue within the parish, our professional chauffeurs deliver seamless, door-to-door ground transit from Baton Rouge Airport."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Baton Rouge Airport", to: "Downtown Baton Rouge" },
        { from: "Baton Rouge Airport", to: "Louisiana State University" },
        { from: "Baton Rouge Airport", to: "State Capitol Building" },
        { from: "Baton Rouge Airport", to: "Raising Cane's River Center" },
        { from: "Baton Rouge", to: "Metairie" },
        { from: "Baton Rouge", to: "New Orleans" },
        { from: "Baton Rouge", to: "Lafayette, LA" },
        { from: "Baton Rouge", to: "Gonzales, LA" }
    ],
    faqs: [
        {
            question: "When should I establish my reservation for BTR?",
            answer: "To ensure full access to our premium vehicle categories, we suggest submitting your booking a minimum of 24 hours prior to travel. However, Bayou Black Cars routinely manages urgent, same-day executive requests."
        },
        {
            question: "Is chauffeur continuity available for corporate clients?",
            answer: "We highly encourage it. Consistency is vital to our executive service. When booking, please indicate your preferred driver, and we will make every effort to schedule them for your itinerary."
        },
        {
            question: "How do I request child restraint systems?",
            answer: "Bayou Black Cars supplies fully sanitized, premium child seats upon request. Please note the age and weight of the children during the booking phase so our chauffeurs can pre-install the correct equipment."
        },
        {
            question: "How are unexpected flight delays managed at BTR?",
            answer: "We utilize advanced aviation tracking systems. Your dispatch time is dynamically synchronized with the aircraft’s actual wheels-down time, ensuring your chauffeur is waiting regardless of early arrivals or delays."
        },
        {
            question: "Can I coordinate multiple drop-offs from the airport?",
            answer: "Certainly. Our specialized hourly service is perfectly structured for executives requiring multi-stop itineraries throughout the capital. Outline your route with our agents for seamless execution."
        },
        {
            question: "Are your vehicles equipped to handle large delegations?",
            answer: "Yes. For corporate events, conventions, or VIP entourages, our fleet features luxury Sprinter vans and high-capacity executive coaches designed for maximum comfort and efficiency."
        },
        {
            question: "Do chauffeurs provide complete luggage management?",
            answer: "Absolutely. Our chauffeurs offer a comprehensive white-glove experience, managing all luggage from the baggage claim carousel or curbside directly to the threshold of your destination."
        },
        {
            question: "What is your protocol for modifying a reservation?",
            answer: "We prioritize flexibility. Standard adjustments are easily accommodated, though comprehensive route changes or immediate cancellations governed by our terms of service may involve specific fees."
        },
        {
            question: "Do you facilitate long-distance transfers to New Orleans?",
            answer: "Yes, elite intercity transit is a core service. We regularly execute private, long-distance transfers from BTR to MSY or downtown New Orleans. Please consult our team for bespoke routing."
        },
        {
            question: "What invoicing options exist for business accounts?",
            answer: "We integrate smoothly with corporate finance systems. All major credit cards are accepted, and established enterprise partners can utilize custom monthly billing accounts for streamlined operations."
        }
    ]
};
