export interface Airport {
    code: string;
    name: string;
    city: string;
    href: string;
}

export interface StateAirportGroup {
    state: string;
    airports: Airport[];
}

export const airportGroups: StateAirportGroup[] = [
    {
        state: "LOUISIANA AIRPORTS",
        airports: [
            { code: "BTR", name: "Baton Rouge Metropolitan Airport", city: "Baton Rouge", href: "/airports/baton-rouge" },
            { code: "LFT", name: "Lafayette Regional Airport", city: "Lafayette", href: "/airports/lafayette" },
            { code: "NEW", name: "New Orleans Lakefront Airport", city: "New Orleans", href: "/airports/new-orleans-lakefront" },
            { code: "MSY", name: "New Orleans Int'l Airport", city: "New Orleans", href: "/airports/louis-armstrong-airport-msy" },
        ]
    },
    {
        state: "ILLINOIS AIRPORTS",
        airports: [
            { code: "MDW", name: "Chicago Midway International Airport", city: "Midway", href: "/airports/chicago-midway" },
            { code: "ORD", name: "Chicago O'Hare International Airport", city: "O'Hare", href: "/airports/chicago-ohare" },
            { code: "PIA", name: "Peoria International Airport", city: "Peoria", href: "/airports/peoria" },
            { code: "RFD", name: "Chicago Rockford International Airport", city: "Rockford", href: "/airports/rockford" },
        ]
    },
    {
        state: "WISCONSIN AIRPORTS",
        airports: [
            { code: "ATW", name: "Appleton International Airport", city: "Appleton", href: "/airports/appleton" },
            { code: "GRB", name: "Green Bay - Austin Straubel International Airport", city: "Green Bay", href: "/airports/green-bay" },
            { code: "MSN", name: "Dane County Regional Airport", city: "Madison", href: "/airports/madison" },
            { code: "MKE", name: "Milwaukee Mitchell International Airport", city: "Milwaukee", href: "/airports/milwaukee" },
        ]
    }
];
