import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Support",
    description: "Find answers to common questions about Bayou Black Cars's services, fleet, airport transfers, and travel policies. Read our FAQs for technical details and booking info.",
    keywords: ["Bayou Black Cars FAQs", "limo service help", "airport transfer rules", "cancellation policy"]
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
