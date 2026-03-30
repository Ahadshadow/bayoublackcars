import { CityData, houstonData } from '@/data/cities/houston';
import { chicagoData } from '@/data/cities/chicago';
import { newOrleansData } from '@/data/cities/new-orleans';
import { stateLouisianaData } from '@/data/cities/state-louisiana';
import { newOrleansAirportData, routesData, faqData, fleetData, contentSections } from '@/data/airports/new-orleans';
import { msyAirportData } from '@/data/airports/msy';
import { chicagoMidwayAirportData } from '@/data/airports/chicago-midway';
import { chicagoOhareAirportData } from '@/data/airports/chicago-ohare';
import { peoriaAirportData } from '@/data/airports/peoria';
import { rockfordAirportData } from '@/data/airports/rockford';
import { batonRougeAirportData } from '@/data/airports/baton-rouge';
import { lafayetteAirportData } from '@/data/airports/lafayette';
import { newOrleansLakefrontAirportData } from '@/data/airports/new-orleans-lakefront';
import { appletonAirportData } from '@/data/airports/appleton';
import { greenBayAirportData } from '@/data/airports/green-bay';
import { madisonAirportData } from '@/data/airports/madison';
import { milwaukeeAirportData } from '@/data/airports/milwaukee';

import { miamiData } from '@/data/cities/miami';
import { dallasData } from '@/data/cities/dallas';
import { newYorkCityData } from '@/data/cities/new-york-city';
import { losAngelesData } from '@/data/cities/los-angeles';
import { lasVegasData } from '@/data/cities/las-vegas';
import { atlantaData } from '@/data/cities/atlanta';
import { sanFranciscoData } from '@/data/cities/san-francisco';

const cityDataMap: Record<string, CityData> = {
    houston: houstonData,
    chicago: chicagoData,
    'new-orleans': newOrleansData,
    'state-louisiana': stateLouisianaData,
    miami: miamiData,
    dallas: dallasData,
    'new-york-city': newYorkCityData,
    'los-angeles': losAngelesData,
    'las-vegas': lasVegasData,
    atlanta: atlantaData,
    'san-francisco': sanFranciscoData,
};

const airportDataMap: Record<string, any> = {
    'chicago-midway': chicagoMidwayAirportData,
    'chicago-ohare': chicagoOhareAirportData,
    'peoria': peoriaAirportData,
    'rockford': rockfordAirportData,
    'baton-rouge': batonRougeAirportData,
    'lafayette': lafayetteAirportData,
    'new-orleans-lakefront': newOrleansLakefrontAirportData,
    'louis-armstrong-airport-msy': msyAirportData,
    'appleton': appletonAirportData,
    'green-bay': greenBayAirportData,
    'madison': madisonAirportData,
    'milwaukee': milwaukeeAirportData,
};

export function getCityData(slug: string): CityData {
    const lowerSlug = slug.toLowerCase();

    // Check if we have specific data for this city
    if (cityDataMap[lowerSlug]) {
        return cityDataMap[lowerSlug];
    }

    const cityName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Deep clone the Houston data to avoid mutations
    const data: CityData = JSON.parse(JSON.stringify(houstonData));

    // Restore icons (JSON.stringify loses them)
    data.highlights.forEach((h, i) => { h.icon = houstonData.highlights[i].icon; });
    data.brandAuthority.columns.forEach((c, i) => { c.icon = houstonData.brandAuthority.columns[i].icon; });

    data.slug = lowerSlug;
    data.cityName = cityName;

    // Update Hero
    data.hero.highlightedCity = cityName;
    data.hero.description = data.hero.description.replace(/Houston/g, cityName);

    // Update Brand Authority
    data.brandAuthority.title = data.brandAuthority.title.replace(/Houston/g, cityName);
    data.brandAuthority.columns.forEach(col => {
        col.title = col.title.replace(/Houston/g, cityName);
        col.description = col.description.replace(/Houston/g, cityName);
    });

    // Update Informational Text
    data.informationalText.columns.forEach(col => {
        col.title = col.title.replace(/Houston/g, cityName);
        col.paragraphs = col.paragraphs.map(p => p.replace(/Houston/g, cityName));
    });

    // Update Events
    data.events.title = `Upcoming Events in ${cityName}`;
    data.events.items.forEach(item => {
        item.location = item.location.replace(/Houston/g, cityName);
    });

    return data;
}

export function getAirportData(slug: string): CityData & {
    routes?: any[];
    faqs?: any[];
    fleet?: any[];
    contentSections?: any[];
    bookingSection?: any;
    whyChooseUs?: any[];
    groundTransport?: any;
    premiumLimo?: any;
} {
    const lowerSlug = slug.toLowerCase();

    if (lowerSlug === 'new-orleans') {
        return {
            ...newOrleansAirportData,
            routes: routesData,
            faqs: faqData,
            fleet: fleetData,
            contentSections: contentSections
        };
    }

    if (airportDataMap[lowerSlug]) {
        const airportData = airportDataMap[lowerSlug];
        return {
            ...airportData,
            routes: airportData.routes,
            faqs: airportData.faqs,
            fleet: airportData.fleet,
            bookingSection: airportData.bookingSection,
            whyChooseUs: airportData.whyChooseUs,
            groundTransport: airportData.groundTransport,
            premiumLimo: airportData.premiumLimo
        };
    }

    const data = getCityData(lowerSlug);

    return {
        ...data,
        isEmpty: true,
        hero: { ...data.hero, title: '', description: '', highlightedCity: data.cityName },
        highlights: [],
        brandAuthority: { ...data.brandAuthority, title: '', columns: [] },
        informationalText: { ...data.informationalText, columns: [] },
        events: { ...data.events, title: '', items: [] },
        reviews: { ...data.reviews, title: '', subtitle: '', items: [] }
    };
}
