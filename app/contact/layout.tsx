import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | 24/7 Premium Support",
    description: "Get in touch with Bayou Black Cars for reservations, inquiries, or special requests. Our dedicated support team is available 24/7 to assist with your luxury transportation needs.",
    keywords: ["contact Bayou Black Cars", "limo service phone number", "book a black car", "customer support"]
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
