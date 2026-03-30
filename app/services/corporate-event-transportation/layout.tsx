import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Event Transportation | Group Logistics",
    description: "Professional transportation for corporate events, retreats, and meetings. Bayou Black Cars provides coordinated fleet logistics for groups of any size.",
    keywords: ["corporate event transport", "business event limo", "group corporate travel", "event shuttle service"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
