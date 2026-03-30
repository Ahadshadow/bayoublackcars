import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elegant Wedding Transportation | Luxury Limo & Fleet",
    description: "Make your special day perfect with Bayou's elegant wedding transportation. Luxury limos, guest shuttles, and VIP getaway cars for a memorable wedding.",
    keywords: ["wedding limo service", "wedding transportation", "bridal car", "guest shuttle service"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
