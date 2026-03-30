import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Premium Limousine Service | Luxury & Style",
    description: "Experience the ultimate in luxury with Bayou's premium limousine service. mStretch limos, luxury sedans, and SUVs for weddings, events, and corporate travel.",
    keywords: ["limousine service", "luxury limo rental", "stretch limo service", "private limousine"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
