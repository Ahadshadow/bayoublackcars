import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elite Client & Partner Travel | Premium Logistics",
    description: "Impress your clients and partners with Bayou Black Cars's premium travel solutions. Professional, high-standard transportation for business guests and executive visitors.",
    keywords: ["client travel service", "business partner transport", "executive guest car", "premium business logistics"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
