import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Flexible Hourly Limo Service | On-Demand Chauffeur",
    description: "Maintain absolute control with Bayou's flexible hourly limo service. Perfect for multi-stop itineraries, business meetings, and personalized city tours.",
    keywords: ["hourly limo service", "chauffeur by the hour", "as-directed car service", "flexible black car"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
