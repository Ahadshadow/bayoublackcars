import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "VIP Concert Limo Services | Arrive in Style",
    description: "Skip the traffic and parking at your next concert. Bayou Black Cars offers VIP concert limo services for individuals and groups, ensuring a fun and stress-free night out.",
    keywords: ["concert limo service", "event transportation", "luxury concert car", "group concert transport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
