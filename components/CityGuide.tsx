"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Clock, MapPin, ArrowRightLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getPageAssets } from '@/lib/imageLoader';

interface Route {
    from: string;
    destination: string;
    time: string;
    distance: string;
}

interface CityData {
    id: string;
    name: string;
    image: string;
    description: string;
    airports: string[];
    routes: Route[];
}

const initialCityData: Record<string, CityData> = {
    "Chicago": {
        id: "city_chicago",
        name: "Chicago",
        image: "/Top Cities Iconic Destinations Await/Chicago hero.png",
        description: "Experience the ultimate in Chicago luxury with Bayou Black Cars. Our expert chauffeurs provide elegant transit from the iconic skyline to the Magnificent Mile, ensuring every trip is refined and perfectly timed.",
        airports: [
            "Chicago O'Hare International Airport (ORD)",
            "Chicago Midway International Airport (MDW)"
        ],
        routes: [
            { from: "ORD", destination: "Downtown Chicago", time: "40-50 min", distance: "28 mi" },
            { from: "ORD", destination: "The Loop", time: "35-45 min", distance: "25 mi" },
            { from: "MDW", destination: "Downtown Chicago", time: "30-40 min", distance: "15 mi" }
        ]
    },
    "Houston": {
        id: "city_houston",
        name: "Houston",
        image: "/Top Cities Iconic Destinations Await/Houston hero.png",
        description: "From the Space Center to the bustling Energy Corridor, navigate the vast Houston landscape in comfort. Our professional black car service ensures seamless travel through the fourth largest city in the US.",
        airports: [
            "George Bush Intercontinental Airport (IAH)",
            "William P. Hobby Airport (HOU)"
        ],
        routes: [
            { from: "IAH", destination: "Downtown Houston", time: "35-45 min", distance: "25 mi" },
            { from: "IAH", destination: "The Galleria", time: "30-40 min", distance: "23 mi" },
            { from: "HOU", destination: "Downtown Houston", time: "35-45 min", distance: "22 mi" }
        ]
    },
    "New Orleans": {
        id: "city_new_orleans",
        name: "New Orleans",
        image: "/Top Cities Iconic Destinations Await/New Orleans hero.png",
        description: "Discover the soul of the Crescent City with our premium chauffeur solutions. From the historic French Quarter to the Garden District, we offer the best in local luxury travel.",
        airports: [
            "Louis Armstrong New Orleans International Airport (MSY)"
        ],
        routes: [
            { from: "MSY", destination: "French Quarter", time: "25-35 min", distance: "15 mi" },
            { from: "MSY", destination: "Garden District", time: "20-30 min", distance: "12 mi" },
            { from: "MSY", destination: "Metairie", time: "15-20 min", distance: "8 mi" }
        ]
    },
    "New York City": {
        id: "city_nyc",
        name: "New York City",
        image: "/Top Cities Iconic Destinations Await/New York City hero.png",
        description: "Move through the Big Apple in style. Whether it is a gala on Broadway or a meeting on Wall Street, our NYC chauffeurs provide punctual, premium comfort in the city that never sleeps.",
        airports: [
            "John F. Kennedy International Airport (JFK)",
            "LaGuardia Airport (LGA)",
            "Newark Liberty International Airport (EWR)"
        ],
        routes: [
            { from: "JFK", destination: "Midtown Manhattan", time: "45-70 min", distance: "15 mi" },
            { from: "LGA", destination: "Midtown Manhattan", time: "35-55 min", distance: "12 mi" },
            { from: "EWR", destination: "Downtown Manhattan", time: "50-80 min", distance: "20 mi" }
        ]
    },

    "Miami": {
        id: "city_miami",
        name: "Miami",
        image: "/Top Cities Iconic Destinations Await/Miami hero.png",
        description: "Experience the vibrant energy of South Beach or the professional pulse of Brickell with our elite Miami fleet. We bring sophisticated travel to the Magic City.",
        airports: [
            "Miami International Airport (MIA)",
            "Fort Lauderdale-Hollywood International (FLL)"
        ],
        routes: [
            { from: "MIA", destination: "South Beach", time: "20-30 min", distance: "12 mi" },
            { from: "MIA", destination: "Key Biscayne", time: "30-40 min", distance: "12 mi" },
            { from: "MIA", destination: "Fort Lauderdale", time: "40-55 min", distance: "30 mi" }
        ]
    },
    "Dallas": {
        id: "city_dallas",
        name: "Dallas",
        image: "/Top Cities Iconic Destinations Await/Dallas hero.png",
        description: "Travel through the Big D with unmatched comfort. From the Arts District to the bustling high-rises of Uptown, our Dallas service defines reliability and Texas hospitality.",
        airports: [
            "Dallas/Fort Worth International Airport (DFW)",
            "Dallas Love Field (DAL)"
        ],
        routes: [
            { from: "DFW", destination: "Downtown Dallas", time: "20-30 min", distance: "18 mi" },
            { from: "DAL", destination: "Downtown Dallas", time: "20-30 min", distance: "13 mi" },
            { from: "DFW", destination: "Plano", time: "25-35 min", distance: "19 mi" }
        ]
    },
    "Las Vegas": {
        id: "city_vegas",
        name: "Las Vegas",
        image: "/Top Cities Iconic Destinations Await/Las Vegas hero.png",
        description: "Arrive in style at any luxury resort on the Strip. Our Las Vegas chauffeur service provides world-class VIP transportation for the ultimate desert city experience.",
        airports: [
            "Harry Reid International Airport (LAS)"
        ],
        routes: [
            { from: "LAS", destination: "The Strip", time: "15-20 min", distance: "5 mi" },
            { from: "LAS", destination: "Downtown (Fremont)", time: "20-25 min", distance: "10 mi" },
            { from: "LAS", destination: "Henderson", time: "20-30 min", distance: "12 mi" }
        ]
    },
    "Atlanta": {
        id: "city_atlanta",
        name: "Atlanta",
        image: "/Top Cities Iconic Destinations Await/atlante hero.jpg",
        description: "Navigate the ATL with total ease. Our professional staff provides seamless transfers from Hartsfield-Jackson to Buckhead, ensuring you stay on schedule in the Gate City.",
        airports: [
            "Hartsfield-Jackson Atlanta International Airport (ATL)"
        ],
        routes: [
            { from: "ATL", destination: "Buckhead", time: "30-45 min", distance: "18 mi" },
            { from: "ATL", destination: "Downtown Atlanta", time: "20-30 min", distance: "10 mi" },
            { from: "ATL", destination: "Alpharetta", time: "45-60 min", distance: "30 mi" }
        ]
    },
    "San Francisco": {
        id: "city_sf",
        name: "San Francisco",
        image: "/Top Cities Iconic Destinations Await/San Francisco hero.png",
        description: "Discover the charm of the City by the Bay. From Nob Hill to the Golden Gate Bridge, our car service offers a sophisticated way to experience San Francisco’s iconic landscapes.",
        airports: [
            "San Francisco International Airport (SFO)",
            "Oakland International Airport (OAK)"
        ],
        routes: [
            { from: "SFO", destination: "Financial District", time: "25-35 min", distance: "14 mi" },
            { from: "SFO", destination: "San Jose", time: "45-60 min", distance: "50 mi" },
            { from: "SFO", destination: "Palo Alto (Stanford)", time: "30-45 min", distance: "28 mi" }
        ]
    }
};

const cities = [
    "New Orleans", "Chicago", "Houston", "New York City", "Miami", "Dallas", "Las Vegas", "Atlanta", "San Francisco"
];

const CityGuide = () => {
    const pathname = usePathname();
    const [cityData, setCityData] = useState<Record<string, CityData>>(initialCityData);
    const [activeCityName, setActiveCityName] = useState("New Orleans");
    const activeCity = cityData[activeCityName] || cityData["New Orleans"];

    useEffect(() => {
        const fetchAssets = async () => {
            const assets = await getPageAssets(pathname);
            const updatedData = { ...initialCityData };
            Object.keys(updatedData).forEach(key => {
                const city = updatedData[key];
                if (assets[city.id]) {
                    updatedData[key] = { ...city, image: assets[city.id] };
                }
            });
            setCityData(updatedData);
        };
        fetchAssets();
    }, [pathname]);


    return (
        <section className="bg-white py-24 font-poppins">
            <div className="container-custom">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-[36px] md:text-[45px] font-bold text-navy-primary font-taviraj mb-3">
                        Top Cities Iconic Destinations Await
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600 text-[15px] leading-[1.7] max-w-4xl mx-auto">
                        Experience the gold standard of luxury transportation in the world's most iconic destinations. Bayou Black Cars provides sophisticated travel tailored to your itinerary, ensuring every city journey is smooth, stylish, and entirely stress-free.
                    </p>
                </div>

                {/* City Selection Tabs - Wrapped Grid */}
                <div className="flex justify-center mb-12 w-full">
                    <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4 md:px-8 overflow-visible">
                        {cities.map((city) => (
                            <button
                                key={city}
                                onClick={() => cityData[city] && setActiveCityName(city)}
                                className={`px-6 py-2 rounded-full text-[14px] font-bold whitespace-nowrap transition-all duration-300 border ${activeCityName === city
                                    ? 'bg-gold text-pure-black border-gold scale-105 shadow-md'
                                    : 'bg-gray-100 text-pure-black border-gray-200 hover:bg-gray-200'
                                    } ${!cityData[city] ? 'cursor-not-allowed opacity-70' : ''}`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-sm">
                    {/* Left Column: Image, Heading, Description, Button */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="relative w-full aspect-[16/9] lg:aspect-[1.8/1] overflow-hidden rounded-[30px]">
                            <Image
                                src={activeCity.image || "/img pj/Luxury Chauffeur Services Tailored for Every Journey/Limousine.png"}
                                alt={`${activeCity.name} Skyline`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[32px] md:text-[38px] font-bold text-navy-primary font-taviraj">
                                {activeCity.name} City Guide
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-[1.8]">
                                {activeCity.description}
                            </p>
                            <Link
                                href={`/cities/${activeCity.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="inline-block border border-navy-primary text-navy-primary px-8 py-3 rounded-[15px] text-[16px] font-bold transition-all hover:bg-navy-primary hover:text-pure-white text-center"
                            >
                                {activeCity.name} Car Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Airports & Routes */}
                    <div className="lg:w-1/2 w-full space-y-12">
                        {/* Airports Section */}
                        <div className="space-y-6">
                            <h4 className="text-[28px] font-bold text-navy-primary font-taviraj border-b border-gray-200 pb-2">
                                {activeCity.name} Airports
                            </h4>
                            <div className="space-y-0">
                                {activeCity.airports.map((airport, index) => (
                                    <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                                        <div className="text-gold">
                                            <Plane size={24} className="rotate-45" />
                                        </div>
                                        <span className="text-[17px] font-medium text-gray-800">{airport}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Routes Section */}
                        <div className="space-y-6">
                            <h4 className="text-[28px] font-bold text-navy-primary font-taviraj border-b border-gray-200 pb-2">
                                {activeCity.name} Routes
                            </h4>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <tbody>
                                        {activeCity.routes.map((route, index) => (
                                            <tr key={index} className="border-b border-gray-100 last:border-0">
                                                <td className="py-4 pr-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-gray-800 text-[15px]">{route.from}</span>
                                                        <ArrowRightLeft size={16} className="text-gold" />
                                                        <span className="font-bold text-gray-800 text-[15px]">{route.destination}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex items-center gap-2">
                                                        <Clock size={24} className="text-navy-primary bg-navy-light/10 rounded-full p-1" />
                                                        <span className="text-gray-700 font-medium text-[15px] whitespace-nowrap">{route.time}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 pl-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <MapPin size={24} className="text-gold" />
                                                        <span className="text-gray-700 font-medium text-[15px] whitespace-nowrap">{route.distance}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityGuide;


