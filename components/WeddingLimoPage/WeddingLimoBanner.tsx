import React from 'react';

const WeddingLimoBanner = () => {
    return (
        <section className="bg-black py-16 font-poppins text-center text-pure-white px-4 border-t border-b border-navy-primary/20">
            <h2 className="text-2xl md:text-3xl font-taviraj font-bold mb-4 max-w-4xl mx-auto leading-tight">
                Book Your Wedding Limo Today!
            </h2>
            <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-3xl mx-auto mb-8">
                Your wedding transportation should be as elegant and stress-free as the rest of your special day. Let Bayou Black Cars handle the details while you focus on making unforgettable memories.
                <br /><br />
                📞 Call us now to discuss your wedding transportation needs or book online to reserve your luxury limo today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-primary text-pure-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors border-2 border-transparent hover:border-gold"
                >
                    Get a Quote
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

export default WeddingLimoBanner;
