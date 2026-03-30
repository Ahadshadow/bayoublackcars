import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Meetings & Offsite Event Transport | Corporate Logistics",
    description: "Efficient transportation for business meetings and offsite events. Bayou Black Cars ensures your team arrives together and on time for every corporate engagement.",
    keywords: ["meeting transportation", "offsite event car service", "corporate group transport", "business meeting shuttle"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
