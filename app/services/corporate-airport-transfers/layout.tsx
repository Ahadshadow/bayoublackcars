import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Airport Transfers | Precision & Punctuality",
    description: "Specialized airport logistics for corporate teams and executives. Real-time flight tracking, professional chauffeurs, and seamless transfers for business travelers.",
    keywords: ["corporate airport transfer", "business airport limo", "executive airport car", "corporate travel airport"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
