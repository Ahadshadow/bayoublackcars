import type { Metadata } from "next";
import { Taviraj, Poppins, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";

const taviraj = Taviraj({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-taviraj'
});

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-poppins'
});

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bayou Black Cars",
    "url": "https://bayou-rental-car.vercel.app",
    "logo": "https://bayoublackcars.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-504-508-4831",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
    },
    "sameAs": [
        "https://www.facebook.com/bayoublackcars",
        "https://twitter.com/bayoublackcars",
        "https://www.instagram.com/bayoublackcars"
    ]
};

const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LimoService",
    "name": "Bayou Black Cars",
    "image": "https://bayoublackcars.com/suv-dark.jpg",
    "telePhone": "+1-504-508-4831",
    "url": "https://bayoublackcars.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving Nationwide",
        "addressLocality": "New Orleans",
        "addressRegion": "LA",
        "postalCode": "70130",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.9511,
        "longitude": -90.0715
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
    }
};

export const metadata: Metadata = {
    title: {
        default: "Premium Black Limo Service | Bayou Black Cars",
        template: "%s | Bayou Black Cars"
    },
    description: "Bayou Black Cars provides premium black car and limousine services nationwide. From executive corporate travel to luxury wedding transportation, enjoy first-class comfort with professional chauffeurs.",
    keywords: [
        "limo service",
        "black car service",
        "luxury transport",
        "airport transfer",
        "chauffeur service",
        "Bayou Black Cars",
        "executive car service",
        "luxury SUV rental",
        "private chauffeur",
        "wedding limo service",
        "corporate travel"
    ],
    icons: {
        icon: '/by.png',
    },
    authors: [{ name: "Bayou Black Cars Team" }],
    creator: "Bayou Black Cars",
    metadataBase: new URL('https://bayoublackcars.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Premium Black Limo Service | Bayou Black Cars",
        description: "Professional, reliable, and luxury transportation across the USA. Book your executive ride today.",
        url: '/',
        siteName: 'Bayou Black Cars',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Premium Black Limo Service | Bayou Black Cars",
        description: "Professional, reliable, and luxury transportation across the USA.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};


import Script from "next/script";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${taviraj.variable} ${poppins.variable}`}>
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-18053496129"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-18053496129');
                    `}
                </Script>
            </head>
            <body className="antialiased font-poppins">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
                />
                <ClientLayoutWrapper>
                    {children}
                </ClientLayoutWrapper>
            </body>
        </html>
    );
}
