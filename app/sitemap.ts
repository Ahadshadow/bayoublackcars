import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bayoublackcars.com';

    const serviceRoutes = [
        'airport-limo-service', 'anniversary-limo-service', 'bachelor-party-limo-service',
        'birthday-limo-service', 'black-car-service', 'chauffeur-services',
        'city-to-city-rides', 'city-tours', 'client-partner-travel',
        'concert-limo-services', 'corporate-airport-transfers', 'corporate-event-transportation',
        'corporate-limo-service', 'funeral-limo-transportation', 'graduation-events',
        'group-limo-transportation', 'hourly-limo-service', 'limousine-service',
        'meetings-offsite-events', 'non-emergency-medical-transportation', 'party-bus-service',
        'point-to-point-car-service', 'prom-limo-services', 'quinceanera-limo-service',
        'round-trip-limo-service', 'special-event-limo-service', 'sporting-event-limo-service',
        'wedding-transportation'
    ];

    const cityRoutes = [
        'atlanta', 'chicago', 'dallas', 'houston', 'las-vegas',
        'los-angeles', 'miami', 'new-orleans', 'new-york-city',
        'san-francisco', 'state-louisiana'
    ];

    const airportRoutes = [
        'appleton', 'baton-rouge', 'chicago-midway', 'chicago-ohare',
        'green-bay', 'lafayette', 'madison', 'milwaukee', 'msy',
        'new-orleans-lakefront', 'new-orleans', 'peoria', 'rockford'
    ];

    const topLevelRoutes = [
        'about', 'contact', 'faqs', 'fleet', 'book', 'services', 'airports', 'vehicle-system'
    ];

    const legalRoutes = [
        'privacy-policy', 'terms-of-service'
    ];

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        ...topLevelRoutes.map(route => ({
            url: `${baseUrl}/${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        })),
        ...legalRoutes.map(route => ({
            url: `${baseUrl}/${route}`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3
        })),
        ...serviceRoutes.map(route => ({
            url: `${baseUrl}/services/${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        })),
        ...cityRoutes.map(route => ({
            url: `${baseUrl}/cities/${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        })),
        ...airportRoutes.map(route => ({
            url: `${baseUrl}/airports/${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        }))
    ];
}
