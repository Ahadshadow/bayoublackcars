import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Reliable Round-trip Limo Service | Stress-Free Returns",
    description: "Book a reliable round-trip limo service for any occasion. Bayou Black Cars ensures safe and punctual transportation for your entire journey, both ways.",
    keywords: ["round trip limo service", "return ride car service", "two way black car", "round-trip transportation"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
