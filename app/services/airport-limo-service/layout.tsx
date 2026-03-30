import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Premier Airport Limo Service | Nationwide Terminal Transfers",
    description: "Experience the pinnacle of airport travel with Bayou Black Cars. Dedicated chauffeurs, real-time flight tracking, and seamless terminal transfers at all major hubs.",
    keywords: ["airport limo service", "airport chauffeur", "terminal transfer", "luxury airport transport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
