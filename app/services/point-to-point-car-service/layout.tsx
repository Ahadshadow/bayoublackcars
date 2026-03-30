import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Point-to-Point Car Service | Efficient One-Way Travel",
    description: "Reliable and efficient point-to-point car service with Bayou Black Cars. Skip the hassle of parking and enjoy a direct, luxury ride to your destination.",
    keywords: ["point to point car service", "one way black car", "direct transfer service", "private car transport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
