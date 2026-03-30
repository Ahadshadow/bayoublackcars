import type { Metadata } from 'next';
import CityTemplate from '@/components/CityPage/CityTemplate';
import { getCityData } from '@/lib/cityDataUtils';

interface CityPageProps {
    params: {
        city: string;
    };
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const { city } = await params;
    const data = getCityData(city);
    const cityName = data.cityName || city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `Premium Limo & Black Car Service in ${cityName}`,
        description: `Book a professional chauffeur-driven black car or limousine in ${cityName}. Bayou Black Cars provides reliable airport transfers, executive travel, and luxury rides across ${cityName}.`,
        keywords: [`${cityName} limo service`, `${cityName} black car`, `${cityName} chauffeur`, `airport transfer ${cityName}`]
    };
}

export default async function CityPage({ params }: CityPageProps) {
    const { city } = await params;
    const data = getCityData(city);

    return <CityTemplate data={data} />;
}

export async function generateStaticParams() {
    const cities = [
        "chicago", "houston", "new-orleans", "new-york-city", "los-angeles",
        "miami", "dallas", "las-vegas", "atlanta", "san-francisco"
    ];

    return cities.map((city) => ({
        city: city,
    }));
}
