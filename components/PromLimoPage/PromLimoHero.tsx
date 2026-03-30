import React from 'react';

const PromLimoHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] max-h-[700px] w-full bg-slate-black overflow-hidden flex items-center justify-center font-poppins">
            {/* Background Image / Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/HERO section/servies/Prom Limo Services hero.webp')" }} // Prom/Limo/Suit themed image
            >
                {/* Background overlay combining an image and dark overlay */}
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container-custom mx-auto px-4 h-full flex flex-col justify-center items-center text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-taviraj text-gold font-bold leading-tight uppercase max-w-5xl">
                    Luxury Prom Limo Service - Prom VIP Arrival at its Best
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-pure-white max-w-4xl leading-relaxed">
                    Prom night is one of the most exciting and memorable events in a teenager’s life. It marks the culmination of years of hard work, friendships, and unforgettable moments. At Bayou Black Cars, we ensure that your prom experience is nothing short of extraordinary by offering premium, stress-free, and stylish transportation services. We go beyond just providing a ride—we deliver a red-carpet experience, ensuring safety, luxury, and seamless coordination for an unforgettable night.
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
                        className="bg-pure-white text-navy-primary px-8 py-3 rounded text-sm font-bold tracking-wider hover:bg-gold hover:text-white transition-colors border-2 border-white hover:border-gold"
                    >
                        (504) 508-4831
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PromLimoHero;
