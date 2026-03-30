import React from 'react';

const RoundTripHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] max-h-[700px] w-full bg-slate-black overflow-hidden flex items-center justify-center">
            {/* Background Image / Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/HERO section/servies/Round Trip Limo Service hero .png')" }}
            >
                {/* Background overlay combining an image and dark overlay */}
                <div className="absolute inset-0 bg-pure-black/70 mix-blend-multiply"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container-custom mx-auto px-4 h-full flex flex-col justify-center items-center text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-taviraj text-pure-white font-bold leading-tight">
                    Luxury Round Trip Limo Service
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-luxury-text-muted max-w-4xl leading-relaxed">
                    Experience stress-free travel with Bayou Black Cars's round-trip limo service.
                    Our professional chauffeurs and luxury black car fleet provide seamless transportation
                    to your destination and back, perfect for airport transfers, corporate events, weddings,
                    and special occasions. Enjoy punctual service, plush interiors, and the comfort of knowing
                    your return ride is ready when you are. Travel in style, elegance, and complete convenience every time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
                        className="bg-transparent text-pure-white px-8 py-3 rounded text-sm font-bold tracking-wider hover:text-gold transition-colors border-2 border-white hover:border-gold"
                    >
                        (504) 508-4831
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RoundTripHero;
