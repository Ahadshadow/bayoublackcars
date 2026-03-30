import React from 'react';

const CityToCityBanner = () => {
    return (
        <section className="bg-black py-16 font-poppins text-center text-pure-white px-4 border-t border-b border-navy-primary/20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-taviraj font-bold mb-6 max-w-4xl mx-auto leading-tight">
                Upgrade Your Long-Distance Travel with Bayou Black Cars! –<br className="hidden md:block" />
                Book Your Luxury Ride to the Game with Bayou Today!
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-primary text-pure-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors border-2 border-transparent hover:border-gold"
                >
                    Book Now
                </a>
                <a
                    href="tel:5045084831"
                    className="bg-white text-navy-primary px-8 py-3 rounded text-sm font-bold tracking-wider hover:bg-gold hover:text-white transition-colors border-2 border-white hover:border-gold"
                >
                    (504) 508-4831
                </a>
            </div>
        </section>
    );
};

export default CityToCityBanner;
