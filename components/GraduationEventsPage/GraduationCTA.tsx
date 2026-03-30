import React from 'react';

const GraduationCTA = () => {
    return (
        <section className="bg-black py-12 font-poppins text-center text-pure-white px-4 border-t border-b border-navy-primary/20">
            <h2 className="text-xl md:text-2xl font-taviraj font-bold mb-4 max-w-4xl mx-auto leading-tight uppercase">
                Don't Miss a Second of the Celebration – Book Your Luxury Ride with Bayou Black Cars Today!
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                    className="bg-navy-primary text-pure-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors border-2 border-transparent hover:border-gold"
                >
                    Get a Quote
                </a>
                <a
                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                    className="bg-white text-navy-primary px-8 py-3 rounded text-sm font-bold tracking-wider hover:bg-gold hover:text-white transition-colors border-2 border-white hover:border-gold"
                >
                    Book Now
                </a>
            </div>
        </section>
    );
};

export default GraduationCTA;
