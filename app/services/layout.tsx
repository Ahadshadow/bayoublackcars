import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Premium Services | Luxury Transportation",
    description: "Explore our comprehensive range of luxury transportation services, including airport transfers, corporate travel, event logistics, and private chauffeur services.",
    keywords: ["luxury transportation services", "corporate limo service", "event car rental", "private chauffeur services"]
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
