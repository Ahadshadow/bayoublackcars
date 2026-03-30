import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Vibrant Party Bus Service | Group Celebration Transport",
    description: "Experience the ultimate mobile celebration with Bayou's party bus service. Premium sound systems, lighting, and spacious interiors for any group event.",
    keywords: ["party bus service", "luxury party bus", "group celebration transport", "party bus rental"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
