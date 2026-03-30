import FleetHero from '@/components/FleetHero';
import FleetStats from '@/components/FleetStats';
import VehicleFleet from '@/components/VehicleFleet';

export const metadata = {
    title: "Our Luxury Fleet | Bayou Black Cars",
    description: "Explore our premium fleet of sedans, SUVs, limousines, and more. Bayou Black Cars offers luxury transportation for every occasion.",
};

export default function FleetPage() {
    return (
        <main className="min-h-screen">
            <FleetHero />
            <FleetStats />
            <VehicleFleet />
        </main>
    );
}
