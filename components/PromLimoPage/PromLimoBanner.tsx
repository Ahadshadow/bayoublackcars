import React from 'react';

const PromLimoBanner = () => {
    return (
        <section className="bg-black py-16 font-poppins text-center text-pure-white px-4 border-t border-b border-navy-primary/20">
            <h2 className="text-2xl md:text-3xl font-taviraj font-bold mb-4 max-w-4xl mx-auto leading-tight uppercase">
                Make Your Prom Night Unforgettable - Book Your Luxury Limo Now!
            </h2>
            <p className="text-luxury-text-muted text-[13px] md:text-sm max-w-4xl mx-auto mb-8">
                Make your prom night truly special with our luxury limo services, featuring elegant rides and professional chauffeurs. Enjoy a safe, stylish, and VIP experience from pickup to drop-off!
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

export default PromLimoBanner;
