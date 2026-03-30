import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Our Legacy of Excellence",
    description: "Learn about Bayou Black Cars's unwavering commitment to luxury, safety, and professional chauffeur standards. Discover our legacy of excellence in premium transportation.",
    keywords: ["about Bayou Black Cars", "luxury car service history", "professional chauffeurs", "executive travel standards"]
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
