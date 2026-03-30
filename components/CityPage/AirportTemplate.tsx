import React from 'react';
import Image from 'next/image';
import AirportHero from './AirportHero';
import ServiceHighlightGrid from './ServiceHighlightGrid';
import BrandAuthority from './BrandAuthority';
import AirportRoutes from './AirportRoutes';
import AirportFAQ from './AirportFAQ';
import AirportFleet from './AirportFleet';
import AirportAlternatingSections from './AirportAlternatingSections';
import AirportBookingSection from './AirportBookingSection';
import AirportWhyChooseGrid from './AirportWhyChooseGrid';
import AirportGroundTransport from './AirportGroundTransport';
import AirportPremiumLimo from './AirportPremiumLimo';
import AirportMSYFleet from './AirportMSYFleet';
import { CityData } from '@/data/cities/houston';

interface AirportTemplateProps {
    data: CityData;
    fleet?: any[];
    contentSections?: any[];
    routes?: { from: string; to: string }[];
    faqs?: { question: string; answer: string }[];
    bookingSection?: { title: string; description: string[]; extraText?: string };
    whyChooseUs?: any[];
    groundTransport?: any;
    premiumLimo?: any;
}

const AirportTemplate: React.FC<AirportTemplateProps> = ({
    data,
    fleet,
    contentSections,
    routes,
    faqs,
    bookingSection,
    whyChooseUs,
    groundTransport,
    premiumLimo
}) => {
    const isAirportPage = data.slug.includes('airport') || data.slug.includes('chicago') || data.slug.includes('milwaukee') || data.slug.includes('madison') || data.slug.includes('green-bay') || data.slug.includes('appleton') || data.slug.includes('peoria') || data.slug.includes('rockford') || data.slug.includes('baton-rouge') || data.slug.includes('lafayette');
    const isMSY = data.slug === 'louis-armstrong-airport-msy';

    return (
        <main className="bg-white overflow-x-hidden">
            <AirportHero data={data.hero} />

            {/* Section 2: Fleet */}
            {(fleet && fleet.length > 0 || isAirportPage) && (
                <AirportMSYFleet
                    cityName={data.cityName}
                    title={`Luxury Vehicles for ${data.cityName}${isAirportPage ? ' Airport' : ''} Limo Service`}
                    isAirport={isAirportPage}
                />
            )}

            {/* Section 3: Booking/Intro */}
            {bookingSection && (
                <AirportBookingSection
                    title={bookingSection.title}
                    description={bookingSection.description}
                    extraText={bookingSection.extraText}
                />
            )}



            {/* Section 5: Why Choose Us */}
            {whyChooseUs && whyChooseUs.length > 0 && (
                <AirportWhyChooseGrid items={whyChooseUs} />
            )}

            {/* Section 6: Ground Transport */}
            {groundTransport && (
                <AirportGroundTransport title={groundTransport.title} sections={groundTransport.sections} />
            )}



            {/* Section 8: Routes */}
            {routes && routes.length > 0 && (
                <AirportRoutes
                    routes={routes}
                    title={`TRAVEL DISTANCES & TIMES FROM ${data.cityName.toUpperCase()} AIRPORT:`}
                    subtitle={`Travel in style and comfort with our ${data.cityName} Airport Limo and Car Service. Whether you're heading to a hotel or a suburban home, enjoy door-to-door service from experienced chauffeurs.`}
                />
            )}

            {/* Section 7: Premium Details */}
            {premiumLimo && (
                <AirportPremiumLimo title={premiumLimo.title} sections={premiumLimo.sections} />
            )}

            {/* Section 10: FAQS */}
            {faqs && faqs.length > 0 && (
                <AirportFAQ faqs={faqs} />
            )}

            {/* Non-MSY Sections */}
            {!isMSY && data.highlights?.length > 0 && (
                <section className="bg-gray-50/30">
                    <div className="container-custom pt-16 px-4">
                        <div className="text-center mb-4">
                            <h2 className="text-navy-primary text-[28px] md:text-[34px] font-bold font-taviraj tracking-tight uppercase">
                                Stress-Free {data.cityName} Airport Car Service
                            </h2>
                            <div className="w-20 h-1 bg-gold mx-auto mt-2"></div>
                        </div>
                        <p className="text-gray-600 text-[13px] max-w-5xl leading-relaxed text-left">
                            Travel shouldn’t feel hurried or stressful. With Bayou Black Cars’s {data.cityName} airport car service, everything is taken care of before you arrive. Your chauffeur keeps an eye on your flight, helps with your bags, and makes sure the ride to or from the airport is smooth. Whether you’re traveling alone, heading out with family, or moving a group in a Sprinter van, the experience feels easy from the start. You step in, settle back, and enjoy a comfortable ride with no pressure or rush.
                        </p>
                    </div>
                    <ServiceHighlightGrid highlights={data.highlights} showTitle={false} />
                </section>
            )}

            {!isMSY && data.brandAuthority?.columns?.length > 0 && (
                <BrandAuthority data={data.brandAuthority} />
            )}

            {!isMSY && contentSections && contentSections.length > 0 && (
                <AirportAlternatingSections sections={contentSections} />
            )}

            {!isMSY && (
                <section className="bg-navy-primary py-12 text-white">
                    <div className="container-custom px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <h2 className="text-[24px] md:text-[32px] font-bold font-taviraj uppercase">Book Now Today!</h2>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <a
                                href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border-2 border-white text-white px-8 py-2.5 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-white hover:text-navy-primary transition-all"
                            >
                                Book Now
                            </a>
                            <a
                                href="tel:5045084831"
                                className="bg-white text-navy-primary border-2 border-white px-8 py-2.5 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-transparent hover:text-white transition-all"
                            >
                                (504) 508-4831
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default AirportTemplate;
