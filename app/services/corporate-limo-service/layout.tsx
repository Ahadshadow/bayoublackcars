import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elite Corporate Limo Service | Executive Transportation",
    description: "Elevate your business travel with Bayou Black Cars's premium corporate transportation. Punctual, discreet, and luxury services for executives and teams.",
    keywords: ["corporate limo service", "executive transportation", "business travel chauffeur", "corporate car service"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
