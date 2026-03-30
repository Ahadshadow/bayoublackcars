import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Non-Emergency Medical Transportation | Safe & Reliable",
    description: "Comfortable and professional non-emergency medical transport. We provide safe, reliable rides for medical appointments, therapy sessions, and wellness check-ups.",
    keywords: ["non-emergency medical transport", "medical appointment car service", "safe patient transport", "healthcare transportation"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
