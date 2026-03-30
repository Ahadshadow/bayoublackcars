import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Bespoke Special Event Limo Service | Any Occasion",
    description: "Customized limo services for all your special events. From anniversaries to gala nights, Bayou Black Cars provides the perfect luxury fleet for any occasion.",
    keywords: ["special event limo", "event car service", "bespoke transportation", "luxury gala transport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
