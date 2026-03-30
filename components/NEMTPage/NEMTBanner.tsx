import React from 'react';

const NEMTBanner = () => {
    return (
        <section className="bg-black py-16 font-poppins text-center text-pure-white px-4 border-t border-b border-navy-primary/20">
            <h2 className="text-2xl md:text-3xl font-taviraj font-bold mb-4 max-w-4xl mx-auto leading-tight uppercase">
                Book Your Non-Emergency Medical Transportation Today
            </h2>
            <p className="text-luxury-text-muted text-[11px] md:text-[13px] max-w-4xl mx-auto mb-8 leading-relaxed uppercase">
                Whether you need a one-time ride, recurring medical transportation, or a long-distance journey, we’re here to provide a safe, luxurious, and hassle-free experience. Let us take care of your transportation needs so you can focus on your health.
            </p>

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

export default NEMTBanner;
