import React from 'react';

const MeetingsOffsiteHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] max-h-[700px] w-full bg-slate-black overflow-hidden flex items-center justify-center">
            {/* Background Image / Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/HERO section/servies/Meetings & Offsite Events hero.png')" }} // Using a generic business meeting / conference image
            >
                {/* Background overlay combining an image and dark overlay */}
                <div className="absolute inset-0 bg-pure-black/70 mix-blend-multiply"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container-custom mx-auto px-4 h-full flex flex-col justify-center items-center text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-taviraj text-pure-white font-bold leading-tight">
                    Meetings & Offsite Events
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-luxury-text-muted max-w-4xl leading-relaxed">
                    Business meetings and offsite events require seamless, punctual, and professional transportation. Whether you're hosting a corporate retreat, team-building event, or executive meeting, Bayou Black Cars ensures your travel is as efficient and refined as your business operations. Our luxury chauffeur service offers impeccable reliability, comfort, and discretion, making a lasting impression on your executives, partners, and clients.
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

export default MeetingsOffsiteHero;
