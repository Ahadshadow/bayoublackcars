import { Plane, BadgeDollarSign, ShieldCheck, Building2, Car, Users, Briefcase, ShoppingBag, Clock, Headphones, CheckCircle, MapPin } from 'lucide-react';

export const greenBayAirportData = {
    slug: 'green-bay',
    cityName: 'Green Bay',
    hero: {
        title: 'Executive Black Car Service to and from GRB',
        highlightedCity: 'Premium Green Bay Austin Straubel International Airport (GRB) Transport',
        description: "<b>Green Bay Austin Straubel International Airport (GRB)</b> functions as the vital access point for Northeast Wisconsin and the undisputed home of the Green Bay Packers. Situated just a short drive from Lambeau Field, it processes high volumes of sports enthusiasts, corporate leaders, and regional commuters. GRB is known for its streamlined operations and welcoming environment. Strategic travelers rely on our <b>private black car service from GRB</b> to ensure a punctual, high-end transfer directly to corporate hubs or the stadium district. Whether attending a crucial home game, a business symposium, or exploring the Fox River Valley, <b>Green Bay Airport transportation</b> by Bayou Black Cars guarantees an elite arrival.",
        backgroundImage: '/HERO section/Airport/photo-1530521954074-e64f6810b32d.png'
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
        title: "Exclusive Green Bay Logistics – Bayou Black Cars",
        description: [
            "Why navigate crowded event parking or depend on scarce ride-hailing apps when you land? Bayou Black Cars provides a superior caliber of transportation, offering dedicated, luxury transfers to and from Green Bay Austin Straubel International Airport (GRB), meticulously planned for VIPs, corporate groups, and passionate sports fans.",
            "Our premium fleet is scaled to meet your needs. Select an executive sedan for a quiet solo ride, or dispatch our luxury SUVs and high-capacity Sprinter vans for coordinating team or fan group arrivals at GRB. Our dispatchers monitor your flight telemetry continuously, ensuring your chauffeur is staged for immediate departure upon your arrival.",
            "Whether you need an expedited transfer directly to downtown Green Bay, a specialized game-day route targeting Lambeau Field, or long-distance travel to neighboring Wisconsin cities, Bayou Black Cars manages your complete itinerary."
        ],
        extraText: "Our GRB private service is engineered for more than just corporate efficiency. Game-day groups frequently utilize our oversized SUVs and executive Sprinters to manage extensive tailgating gear and ensure a cohesive fan experience. Families appreciate our focus on safety, utilizing our available pre-installed child seats. Meanwhile, executives and couples value the acoustic privacy of our luxury sedans. Bayou Black Cars is the definitive transportation partner for Green Bay."
    },
    whyChooseUs: [
        {
            title: "Standard Curbside Pickup",
            description: "After collecting your luggage, simply call or text your driver. Your chauffeur will pull up curbside at the correct terminal at GRB for a smooth, no-wait departure.",
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
        title: "Bespoke Ground Management at Green Bay Airport (GRB)",
        sections: [
            {
                title: "Executive Sedans for Professionals & VIPs",
                paragraphs: ["Enter a climate-controlled sanctuary immediately exiting the GRB terminal. Our flagship private transit utilizes current-year luxury sedans, providing the essential privacy required to finalize a meeting agenda or decompress after a long flight."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png'
            },
            {
                title: "Spacious SUVs & Vans for Teams & Fans",
                paragraphs: ["Organizing logistics for a corporate retreat or a large group attending a Packers game? Our Green Bay group transit offers elite luxury SUVs and custom Sprinter vans. Enjoy massive cabin space engineered to transport your entire group and their luggage comfortably."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png'
            },
            {
                title: "Optimized Safety via Provided Child Seats",
                paragraphs: [
                    "We eliminate the burden of traveling with infants through GRB. Inform our team during the reservation phase, and we will secure fully sanitized, age-appropriate child safety seats inside your luxury sedan or SUV.",
                    "Crucial Safety Directive: Due to strict federal guidelines, child restraint systems cannot be deployed in our stretch limousines. We strongly recommend booking our premium SUV class when traveling with small children."
                ],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Escalade suv.png'
            }
        ]
    },
    premiumLimo: {
        title: "The Bayou Black Cars Advantage at GRB",
        sections: [
            {
                title: "Bypass the Game-Day Transportation Queues",
                paragraphs: ["Green Bay can be exceptionally crowded, especially during football season. Reclaim your time by securing a private chauffeur with Bayou Black Cars, ensuring an immediate, distinguished departure from the GRB terminal."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
            },
            {
                title: "Direct Routing Options to Lambeau Field",
                paragraphs: ["We specialize in efficient transfers for demanding travelers. Benefit from an expertly coordinated, direct route from GRB straight to Lambeau Field, the stadium district, or downtown corporate offices."],
                image: '/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png'
            },
            {
                title: "Executive Hotel & Regional Resort Transfers",
                paragraphs: ["Whether your journey concludes at a luxury hotel near the Fox River or an executive retreat, our elite chauffeurs guarantee flawless, door-to-door transit from Green Bay Airport."],
                image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
            }
        ]
    },
    routes: [
        { from: "Green Bay Airport", to: "Lambeau Field" },
        { from: "Green Bay Airport", to: "Downtown Green Bay" },
        { from: "Green Bay Airport", to: "St. Norbert College" },
        { from: "Green Bay Airport", to: "Resch Center" },
        { from: "Green Bay Airport", to: "KI Convention Center" },
        { from: "Green Bay Airport", to: "Oshkosh, WI" },
        { from: "Green Bay", to: "Appleton, WI" },
        { from: "Green Bay", to: "Milwaukee (MKE)" }
    ],
    faqs: [
        {
            question: "When should I submit my reservation for GRB transit?",
            answer: "To ensure availability within our premium fleet tiers—especially around sporting events—we advise securing your reservation at least 24 hours prior. Executive rapid dispatch is also supported."
        },
        {
            question: "May I request the continuity of the same chauffeur?",
            answer: "Yes, preserving client trust is our priority. Note your preferred driver during the booking process, and our logistics team will systematically prioritize assigning them to your schedule."
        },
        {
            question: "How are child restraint systems requested?",
            answer: "Bayou Black Cars supplies fully sanitized, premium child seats. Detail your child's age, weight, and specific seat requirements when booking to guarantee exact pre-installation prior to pickup."
        },
        {
            question: "How is dynamic flight tracking applied at GRB?",
            answer: "We employ direct integration with commercial flight tracking infrastructure. The dispatch of your vehicle is tied directly to the aircraft’s factual landing time, precluding any delays."
        },
        {
            question: "Are extensive game-day itineraries supported?",
            answer: "Absolutely. Our specialized block-hour service is engineered precisely for VIPs organizing multi-stop tailgates, stadium routes, and post-game logistics throughout Green Bay."
        },
        {
            question: "Does your fleet accommodate massive fan delegations?",
            answer: "Yes. For major sporting events or corporate stadium retreats, our fleet deploys elite customized Sprinter vans and heavy-capacity coaches engineered for group transit without sacrificing comfort."
        },
        {
            question: "Is complete baggage administration a standard service?",
            answer: "Yes. Our white-glove mandate requires that all chauffeurs manage your luggage entirely, retrieving it from GRB baggage claim and delivering it securely to the threshold of your hotel."
        },
        {
            question: "What rules dictate itinerary amendments?",
            answer: "We support a flexible operational posture. Standard timing updates are accommodated easily; however, definitive route cancellations made directly before dispatch may intersect with our service contract fees."
        },
        {
            question: "Do you facilitate long-distance drives across Wisconsin?",
            answer: "Yes, superior intercity transit is a core capability for Bayou Black Cars. We systematically execute private, long-distance journeys between Green Bay and major adjacent cities. Contact logistics for quotes."
        },
        {
            question: "How are enterprise financial accounts handled?",
            answer: "We prioritize seamless corporate operations. Our systems instantly authorize major corporate cards, and we provide consolidated, audited monthly billing frameworks for enterprise partners."
        }
    ]
};
