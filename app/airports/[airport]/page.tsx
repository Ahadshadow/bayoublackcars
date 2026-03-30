import type { Metadata } from 'next';
import AirportTemplate from '@/components/CityPage/AirportTemplate';
import { getAirportData } from '@/lib/cityDataUtils';

interface AirportPageProps {
    params: {
        airport: string;
    };
}

export async function generateMetadata({ params }: AirportPageProps): Promise<Metadata> {
    const { airport } = await params;
    const data = getAirportData(airport);
    const airportName = data.cityName || airport.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `Premium Airport Limo & Car Service: ${airportName}`,
        description: `Experience stress-free travel with Bayou Black Cars's premium airport transfers at ${airportName}. Professional chauffeurs, real-time tracking, and luxury fleet at your service.`,
        keywords: [`${airportName} airport limo`, `${airportName} car service`, `${airportName} transfer`, `chauffeur ${airportName}`]
    };
}

export default async function AirportPage({ params }: AirportPageProps) {
    const { airport } = await params;
    const data = getAirportData(airport);

    return (
        <AirportTemplate
            data={data}
            routes={data.routes}
            faqs={data.faqs}
            fleet={data.fleet}
            contentSections={data.contentSections}
            bookingSection={data.bookingSection}
            whyChooseUs={data.whyChooseUs}
            groundTransport={data.groundTransport}
            premiumLimo={data.premiumLimo}
        />
    );
}

export async function generateStaticParams() {
    const airports = [
        "new-orleans",
        "louis-armstrong-airport-msy",
        "chicago-midway",
        "chicago-ohare",
        "peoria",
        "rockford",
        "baton-rouge",
        "lafayette",
        "new-orleans-lakefront",
        "appleton",
        "green-bay",
        "madison",
        "milwaukee"
    ];

    return airports.map((airport) => ({
        airport: airport,
    }));
}
