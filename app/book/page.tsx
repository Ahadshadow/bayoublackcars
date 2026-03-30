import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Book Your Ride | Online Reservation",
    description: "Easily book your premium black car or limo ride online with Bayou Black Cars. Secure, instant quotes and effortless reservation for all your travel needs.",
};

export default function BookPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="w-full h-screen overflow-hidden">
                <iframe
                    src="https://customer.moovs.app/bayou-black-cars-llc/request/new?embed=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Book Your Ride"
                    className="w-full h-full border-0"
                ></iframe>
            </div>
        </main>
    );
}
