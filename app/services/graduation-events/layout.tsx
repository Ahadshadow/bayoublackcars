import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Memorable Graduation Limo Services | Celebrate Success",
    description: "Celebrate your academic achievement with Bayou Black Cars's graduation limo services. Safe, stylish, and professional transportation for graduates and families.",
    keywords: ["graduation limo service", "celebration car rental", "safe graduation transport", "luxury graduation car"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
