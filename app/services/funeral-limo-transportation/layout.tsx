import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dignified Funeral Limo Transportation | Bayou Black Cars",
    description: "Providing respectful and dignified transportation during difficult times. Our professional chauffeurs ensure prompt and quiet service for funeral processions and family travel.",
    keywords: ["funeral limo service", "dignified wedding transport", "funeral procession car", "respectful chauffeur service"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
