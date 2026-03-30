import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Exciting Bachelor Party Limo Service | Group Transport",
    description: "Celebrate your bachelor party in style with Bayou Black Cars. Luxury limousines, party buses, and professional chauffeurs for an unforgettable night out.",
    keywords: ["bachelor party limo", "party bus rental", "group night out transportation", "bachelor party car service"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
