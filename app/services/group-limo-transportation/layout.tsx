import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Reliable Group Limo Transportation | Vans & Shuttles",
    description: "Coordinated group transportation for any occasion. Bayou Black Cars offers luxury shuttle vans, executive Sprinters, and mini-coaches for seamless group logistics.",
    keywords: ["group limo transportation", "luxury shuttle service", "executive Sprinter rental", "group travel logistics"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
