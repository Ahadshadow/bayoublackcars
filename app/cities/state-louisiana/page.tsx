import type { Metadata } from 'next';
import CityTemplate from '@/components/CityPage/CityTemplate';
import { getCityData } from '@/lib/cityDataUtils';

export const metadata: Metadata = {
    title: "Premium Limo Service in Louisiana | Bayou Black Cars",
    description: "Experience the ultimate in luxury transportation across the state of Louisiana. Professional chauffeur services, airport transfers, and executive travel in all major cities.",
    keywords: ["Louisiana limo service", "black car service Louisiana", "Louisiana chauffeur", "airport transfer Louisiana"]
};

export default async function StateLouisianaPage() {
    const data = getCityData('state-louisiana');

    return <CityTemplate data={data} />;
}
