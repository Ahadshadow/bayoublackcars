import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Private City Tours | Explore with a Chauffeur",
    description: "Discover the city's highlights with Bayou's private city tours. Professional chauffeurs, customized itineraries, and luxury vehicles for an elite sightseeing experience.",
    keywords: ["private city tour", "chauffeured sightseeing", "luxury tour guide", "custom city tours"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
