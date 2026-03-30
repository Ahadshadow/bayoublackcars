import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elegant Quinceañera Limo Service | A Royal Celebration",
    description: "Make her Quinceañera unforgettable with Bayou's elegant limo service. Luxury vehicles and professional chauffeurs for an extraordinary milestone celebration.",
    keywords: ["Quinceanera limo service", "luxury Quinceanera transport", "Quinceanera party bus", "celebration limo"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
