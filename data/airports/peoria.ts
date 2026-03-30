import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const peoriaAirportData = {
    slug: 'peoria',
    cityName: 'Peoria',
    hero: {
        title: 'Executive Black Car Service to and from PIA',
        highlightedCity: 'Premium Peoria International Airport (PIA) Transport',
        description: "<b>Peoria International Airport (PIA)</b> is a vital transportation hub for Central Illinois, serving corporate executives and local residents alike. Positioned strategically west of downtown, it provides streamlined connections to major national airports without the typical big-city congestion. Many professionals and vacationers depend on our <b>private black car service from PIA</b> for a seamless, punctual transfer to Peoria's corporate headquarters, Bradley University, or the surrounding riverfront communities. Whether traveling for a healthcare conference, corporate retreat, or personal visit, <b>Peoria Airport transportation</b> powered by Bayou Black Cars guarantees an effortless journey.",
        backgroundImage: '/HERO section/Airport/premium_photo-1661501562127-a8bb26defb35.png'
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
            image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png',
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
        title: "Exclusive Peoria Airport Limo Logistics – Bayou Black Cars",
        description: [
            "Why navigate parking shortages or wait for unpredictable rideshares when you can enjoy a guaranteed, punctual arrival? At Bayou Black Cars, we deliver high-end, private transportation to Peoria International Airport (PIA), perfectly suited for business delegations, families, and solo flyers.",
            "Select an executive sedan or spacious luxury SUV for individual or corporate trips, or book a premium Sprinter van for group transit to PIA. Our professional chauffeurs actively monitor your inbound flight, manage your luggage, and coordinate your terminal pickup, ensuring absolute peace of mind.",
            "Whether you require a direct transfer to PIA from downtown Peoria, a long-distance ride from the Chicago area, or point-to-point service across Central Illinois, our network handles it all. We also accommodate specialized multi-city routes for corporate roadshows connecting through the region."
        ],
        extraText: "Our PIA car service is designed for more than just corporate efficiency. Traveling families value our high-capacity SUVs, which accommodate extra luggage and offer child safety seats upon request. Couples embarking on vacations prefer the quiet luxury of our black sedans, while larger parties book our executive coaches for a unified, comfortable start to their journey out of Peoria. At Bayou Black Cars, we synchronize with your itinerary to deliver a flawless travel experience."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at PIA for a smooth, no-wait departure.",
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
        title: "Tailored Ground Transportation at Peoria Regional (PIA)",
        sections: [
            {
                title: "Executive Car Service for Individuals & Executive Pairs",
                paragraphs: ["Experience an uncompromised, quiet cabin environment with our PIA transfer service. Our elite sedans offer the perfect setting for busy professionals to prepare for a meeting or simply unwind after a demanding flight."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "High-Capacity SUV & Van Service for Teams",
                paragraphs: ["Coordinating travel for a corporate team or extended family? Our Peoria Airport group service provides late-model luxury SUVs and Sprinter vans featuring abundant headroom, spacious seating, and generous room for oversized luggage."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png'
            },
            {
                title: "Family-Focused Travel with Provided Safety Seats",
                paragraphs: [
                    "We remove the logistical burden of flying with young children by providing pre-installed, sanitized child safety seats in our luxury sedans and SUVs.",
                    "Safety Note: Due to strict compliance standards, child seats are not available in stretch limousines. We advise families to reserve our premium SUV tier for optimal safety and comfort."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Advantage at PIA",
        sections: [
            {
                title: "Bypass the Rideshare Queue Completely",
                paragraphs: ["Step off the plane and straight into luxury. Avoid the uncertainty of taxi lines or surge-priced apps by booking a guaranteed private chauffeur ready upon your arrival at PIA."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            },
            {
                title: "Direct Connectivity to Peoria's Business District",
                paragraphs: ["Time is a critical asset. Our professional chauffeurs utilize the most efficient routing from PIA to downtown Peoria, ensuring you arrive at your corporate engagements promptly and relaxed."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Full size SUV.png'
            },
            {
                title: "Comprehensive Regional Hospitality Transfers",
                paragraphs: ["Whether your final stop is a luxury hotel along the riverfront, an elite golf resort, or an ongoing overland journey to Chicago, our network provides uninterrupted premium transportation from the Peoria terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Peoria Airport", to: "Downtown Peoria" },
        { from: "Peoria Airport", to: "Bradley University" },
        { from: "Peoria Airport", to: "Caterpillar Inc. World HQ" },
        { from: "Peoria Airport", to: "Peoria Civic Center" },
        { from: "Peoria Airport", to: "OSF St. Francis Medical Center" },
        { from: "Peoria Airport", to: "East Peoria" },
        { from: "Peoria", to: "Bloomington, IL" },
        { from: "Peoria", to: "Chicago (ORD/MDW)" }
    ],
    faqs: [
        {
            question: "How much buffer time should I allow when booking my PIA transfer?",
            answer: "We strongly advise reserving your chauffeured vehicle at least 24 hours prior to departure to secure your desired vehicle class, though we frequently accommodate rapid, same-day requests."
        },
        {
            question: "Is it possible to retain the same chauffeur for my return flight?",
            answer: "Absolutely. We pride ourselves on building client relationships. Simply indicate your request during the reservation process, and we will prioritize dispatching your preferred driver."
        },
        {
            question: "Do you supply child safety equipment?",
            answer: "Yes, Bayou Black Cars can provide high-quality infant, toddler, or booster seats. Please notify our dispatch team of your child’s specifications when finalizing your booking."
        },
        {
            question: "How do you handle unexpected flight schedule changes?",
            answer: "Our operations center tracks all commercial and private flights in real time. Pickup schedules are automatically adjusted to match early arrivals or lengthy delays, ensuring your driver is there exactly when you land."
        },
        {
            question: "Are intermediate stops permitted during an airport transfer?",
            answer: "Yes. We offer fully customizable itineraries, including point-to-point routing with multiple stops. Please communicate these requirements when booking to ensure accurate timing."
        },
        {
            question: "Can your fleet accommodate a large executive retreat?",
            answer: "Certainly. Our extensive fleet includes luxury Mercedes Sprinters and premium group transport vehicles designed specifically to move large teams efficiently from the airport."
        },
        {
            question: "Will the chauffeur assist with heavy baggage?",
            answer: "Yes, total luggage management is a standard part of our white-glove service. Your driver will carefully load and unload all belongings."
        },
        {
            question: "What is your policy regarding reservation changes?",
            answer: "We offer flexible modification options. Please refer to our official cancellation policy during booking, as alterations made very close to the pickup time may be subject to limitations."
        },
        {
            question: "Do you offer long-haul transit from Peoria to Chicago airports?",
            answer: "Yes, intercity and long-haul transfers, including private rides from Peoria to O'Hare or Midway, are a specialty of Bayou Black Cars. Contact our reservation team for a bespoke quote."
        },
        {
            question: "Which billing methods are available for corporate riders?",
            answer: "We accept all major corporate credit cards and digital secure payments. For frequent travelers and businesses, we also offer integrated corporate account billing."
        }
    ]
};
