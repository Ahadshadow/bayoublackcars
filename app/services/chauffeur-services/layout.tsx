import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Chauffeur Services | Personal & Corporate",
    description: "Hire a professional chauffeur for your personal or corporate needs. Bayou Black Cars provides background-checked, elite drivers for safe and comfortable travel.",
    keywords: ["professional chauffeur", "private driver service", "executive chauffeur", "personal driver"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
