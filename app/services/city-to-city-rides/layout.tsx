import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Long Distance City-to-City Rides | Premium Transfers",
    description: "Comfortable and efficient city-to-city transportation with Bayou Black Cars. Skip the airport and travel between cities in a luxury sedan or SUV.",
    keywords: ["city to city car service", "long distance chauffeur", "intercity transfer", "luxury city-to-city transport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
