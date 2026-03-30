import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "VIP Sporting Event Limo Service | Game Day Luxury",
    description: "Arrive at the stadium in VIP style. Bayou's sporting event limo services offer comfortable group transport for fans, avoiding game-day traffic and parking.",
    keywords: ["sporting event limo", "stadium transfer service", "game day car service", "group sports transport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
