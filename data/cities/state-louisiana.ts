import { Plane, BadgeDollarSign, ShieldCheck, Building2, MapPin, Car, Briefcase, Users, Heart } from 'lucide-react';
import { CityData } from './houston';

export const stateLouisianaData: CityData = {
    slug: 'state-louisiana',
    cityName: 'State Louisiana',
    hero: {
        title: 'Private Transportation',
        highlightedCity: 'State Louisiana',
        description: "Getting around State Louisiana doesn’t have to be stressful. Our private transportation in State Louisiana offers a reliable, comfortable, and professional way to travel across the city and beyond. Whether you need an airport transfer, executive car service, or long-distance ride, we prioritize your experience, punctuality, and comfort for your needs. From business travel to family transportation, we handle the road so you can focus what matters the most.",
        backgroundImage: '/HERO section/city/New Orleans hero.png'
    },
    highlights: [
        {
            title: "Luxury Black Car",
            description: "Relax with 1 hour of complimentary wait time and flight tracking.",
            icon: Plane,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/sedan.png"
        },
        {
            title: "Limousine",
            description: "Know your fare upfront with fixed rates specifically for you and no surprises.",
            icon: BadgeDollarSign,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"
        },
        {
            title: "Sprinter Van",
            description: "Our drivers are vetted and highly trained. You can trust that your journey is with the safest chauffeurs.",
            icon: ShieldCheck,
            image: "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Sprinter.png"
        }
    ],
    brandAuthority: {
        title: "Luxury State Louisiana Airport & Private Car Service You Can Trust",
        mainImage: "/background remove/image-removebg-preview (5).png",
        columns: [
            {
                title: "State Louisiana Airport & Long-Distance Car Service",
                description: "Skip the hassle of unreliable rides and crowded shuttles. We offer MSY airport limo service and private transportation State Louisiana across the area to keep every trip smooth and reliable.",
                icon: Plane
            },
            {
                title: "Executive Private Car Service State Louisiana",
                description: "Bayou Black Cars is ideal for executives, frequent travelers, and professionals who value comfort, discretion, and efficiency. This premium alternative to traditional taxis or rideshares blends reliability, privacy, and refined travel into one seamless experience.",
                icon: Car
            },
            {
                title: "Effortless State Louisiana Private Transport",
                description: "Getting around State Louisiana can feel overwhelming. Between heavy traffic, long distances, and unpredictable rideshares, even experienced travelers can feel the strain. That's where our private transportation services in State Louisiana provide a calmer, more refined alternative.",
                icon: Building2
            }
        ]
    },
    informationalText: {
        columns: [
            {
                title: "State Louisiana Airport & Long-Distance Car Service",
                paragraphs: [
                    "Skip the hassle of unreliable rides and crowded shuttles. We offer MSY airport limo service and private transportation State Louisiana across the area to keep every trip smooth and reliable.",
                    "For a business trip, medical visit, or returning home after travel. Our professional chauffeurs ensure a smooth, punctual, and stress-free ride every time.",
                    "Traveling beyond State Louisiana? We provide long-distance private transportation from State Louisiana to surrounding cities and states. That is offering a comfortable, door-to-door alternative to flights or trains. Relax in a luxury sedan, SUV, or Sprinter while we handle the road, timing, and details.",
                    "We serve a wide range of needs, from private medical transportation in State Louisiana to regional transit hubs. Also, we provide private car service as well as ground transportation for group travel.",
                    "For families, a common question is: \"Does State Louisiana provide transportation for private school students?\"",
                    "For daily school pickups, drop-offs, and special schedules. Many parents choose our safe, reliable Limo Service State Louisiana. While public options exist, we value consistency, comfort, and peace of mind."
                ]
            },
            {
                title: "Executive Private Car Service State Louisiana",
                paragraphs: [
                    "Bayou Black Cars is ideal for executives, frequent travelers, and professionals who value comfort, discretion, and efficiency. This premium alternative to traditional taxis or rideshares blends reliability, privacy, and refined travel into one seamless experience.",
                    "When you choose our Car Service State Louisiana, you’re choosing a smarter, more comfortable way to travel through Louisiana.",
                    "Available by the hour or for full-day bookings, our executive black car service in State Louisiana is perfectly suited for business schedules, client meetings, and flexible travel needs. Whether you’re heading to a corporate lunch, attending an evening event, or enjoying an evening in the city, your private chauffeur in State Louisiana remains on standby—ready to move when you are.",
                    "With Bayou Black Cars, every ride is calm, punctual, and polished, allowing you to focus on business or relaxation while we take care of the road."
                ]
            },
            {
                title: "Effortless State Louisiana Private Transport",
                paragraphs: [
                    "Getting around State Louisiana can feel overwhelming. Between heavy traffic, long distances, and unpredictable rideshares, even experienced travelers can feel the strain. That's where our private transportation services in State Louisiana provide a calmer, more refined alternative for those who expect reliability, comfort and a professional chauffeur throughout their travel.",
                    "Whether you’re flying in and need a dependable State Louisiana Airport Transfer from MSY or heading to an evening event after meetings, our professional chauffeur service in State Louisiana delivers seamless transportation throughout the region. With expertly trained, discreet chauffeurs and a spotless fleet of black cars, sedans, and limousines, you experience State Louisiana the way it should be: comfortable, smooth, and completely stress-free."
                ]
            }
        ]
    },
    events: {
        title: "Upcoming Events in State Louisiana",
        items: [
            {
                category: "Music & Cultural",
                title: "New Orleans Jazz & Heritage Festival",
                date: "April 24 - May 3, 2026",
                location: "Fair Grounds Race Course",
                color: "text-purple-500"
            },
            {
                category: "Cultural",
                title: "Mardi Gras Celebration",
                date: "February 17, 2026",
                location: "Statewide",
                color: "text-green-500"
            },
            {
                category: "Festival",
                title: "French Quarter Festival",
                date: "April 16 - 19, 2026",
                location: "French Quarter",
                color: "text-orange-500"
            },
            {
                category: "Community",
                title: "Louisiana Seafood Festival",
                date: "October 2026",
                location: "Metairie",
                color: "text-cyan-500"
            }
        ]
    },
    reviews: {
        title: "Customer Reviews",
        subtitle: "What Our Clients Say",
        rating: "4.9",
        totalReviews: "150+",
        items: [
            {
                name: "Anderson",
                date: "2 months ago",
                rating: 5,
                text: "Best limo service in Louisiana! On time and very professional."
            },
            {
                name: "Gomez",
                date: "5 months ago",
                rating: 5,
                text: "The chauffeur was excellent and the car was immaculate. Highly recommend for MSY transfers."
            },
            {
                name: "Thompson",
                date: "1 year ago",
                rating: 5,
                text: "Reliable and luxury service. We used them for a corporate event and everything was perfect."
            }
        ]
    }
};
