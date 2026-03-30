import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Safe & Stylish Prom Limo Services | Group Transport",
    description: "Arrive at prom in style and safety with Bayou Black Cars. Luxury limos and SUVs for a memorable night, backed by professional, background-checked chauffeurs.",
    keywords: ["prom limo service", "safe prom transport", "luxury prom car", "prom party bus"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
