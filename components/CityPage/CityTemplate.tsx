import React from 'react';
import CityHero from './CityHero';
import ServiceHighlightGrid from './ServiceHighlightGrid';
import ServiceClasses from './ServiceClasses';
import BrandAuthority from './BrandAuthority';
import InformationalText from './InformationalText';
import CityEvents from './CityEvents';
import CityReviews from './CityReviews';
import { CityData } from '@/data/cities/houston';

interface CityTemplateProps {
    data: CityData;
}

const CityTemplate: React.FC<CityTemplateProps> = ({ data }) => {
    return (
        <main className="bg-white overflow-x-hidden min-h-[40vh]">
            {!data.isEmpty ? (
                <>
                    <CityHero data={data.hero} />
                    <ServiceHighlightGrid highlights={data.highlights} />
                    <ServiceClasses />
                    <BrandAuthority data={data.brandAuthority} />
                    <InformationalText data={data.informationalText} />
                    <CityReviews data={data.reviews} />
                    <CityEvents data={data.events} />
                </>
            ) : (
                <div className="py-20 flex items-center justify-center text-luxury-text-muted">
                    {/* Placeholder for empty state */}
                </div>
            )}
        </main>
    );
};

export default CityTemplate;
