import React from 'react';

const GroupLimoBookForm = () => {
    return (
        <section className="py-20 bg-luxury-bg font-poppins">
            <div className="container-custom mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-taviraj text-navy-primary font-bold leading-tight">
                            How to Book a Group Limo Transportation Service with Bayou Black Cars
                        </h2>

                        <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                            Booking is as easy as 1-2-3:
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary">Choose Your Ride:</h3>
                                <p className="text-luxury-text-muted text-[13px]">Explore our fleet and pick the perfect vehicle for your group size and vibe.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary">Enter Your Details:</h3>
                                <p className="text-luxury-text-muted text-[13px]">Provide your event date, time, and travel itinerary.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-taviraj text-navy-primary">Confirm & Ride:</h3>
                                <p className="text-luxury-text-muted text-[13px]">Secure your booking and get ready for luxury on wheels.</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-navy-primary/10">
                            <h3 className="text-xl font-bold font-taviraj text-navy-primary mb-3">Conclusion</h3>
                            <p className="text-luxury-text-muted text-[13px] leading-relaxed">
                                No matter the occasion — corporate, social, or family-related — Bayou Black Cars's Group Transportation Limo Service is designed to deliver style, comfort, and unforgettable memories. Trust Bayou Black Cars to take the hassle out of group coordination while elevating your travel to a luxurious experience.
                                <br /><br />
                                Book today and let us redefine your next group journey in style.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Moovs Booking Widget */}
                    <div className="w-full md:w-1/2">
                        {/* Wrapper styled to match the screenshot framing */}
                        <div className="bg-white rounded-xl shadow-xl border border-navy-primary/10 overflow-hidden min-h-[500px] w-full relative">
                            {/* Embedding the Moovs booking widget directly */}
                            <iframe
                                src="https://customer.moovs.app/bayou-black-cars-llc/iframe"
                                className="absolute inset-0 w-full h-full border-0"
                                title="Book your ride with Bayou"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GroupLimoBookForm;
