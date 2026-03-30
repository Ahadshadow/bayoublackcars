import React from 'react';
import Image from 'next/image';

const GroupLimoTravelTogether = () => {
    return (
        <section className="py-16 md:py-20 bg-pure-white font-poppins text-center">
            <div className="container-custom mx-auto px-4 max-w-3xl flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold mb-6">
                    Travel Together — In Comfort, Style, and Class
                </h2>

                {/* Image matching the rounded border styling of the reference */}
                <div className="relative w-full max-w-md aspect-video mb-8 mx-auto p-1 border-2 border-dashed border-navy-primary/30 rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                            src="/img pj/Luxury Chauffeur Services Tailored for Every Journey/Motorcoach.png"
                            alt="Group traveling together in a luxury vehicle"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <p className="text-luxury-text-muted text-[13px] md:text-sm leading-relaxed">
                    From team retreats and conference transfers to family celebrations and city tours, travelling as a group should be as enjoyable as the destination itself. At Bayou Black Cars, we specialize in luxury group limo transportation that blends elegance with convenience. Whether it's a large family trip, executive group movement, or special event, our group limo services ensure an extraordinary experience from pick-up to drop-off. Let's explore why Bayou Black Cars's group limo transportation service is the ideal choice for any group occasion — and how we make luxury group travel truly unforgettable.
                </p>
            </div>
        </section>
    );
};

export default GroupLimoTravelTogether;
