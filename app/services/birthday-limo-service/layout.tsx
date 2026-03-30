import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Birthday Limo Service | Celebrate in Style",
    description: "Make your birthday special with a luxury limousine from Bayou Black Cars. Elegant travel for all ages, featuring premium amenities and professional service.",
    keywords: ["birthday limo service", "luxury birthday transport", "celebration car rental", "birthday party bus"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
