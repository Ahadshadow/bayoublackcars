import React from 'react';
import { Plane, Car, Building2 } from 'lucide-react';

const BrandAuthority = () => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-navy-primary font-taviraj tracking-tight leading-tight">
                        Experience the Luxury of Private Transportation in Chicago
                    </h2>
                    <p className="text-gray-500 text-[18px] mt-4 font-medium uppercase tracking-widest">
                        Chicago Airport Transfer & Executive Private Car Service
                    </p>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start">
                    {/* Column 1: Airport Transfer */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-navy-primary rounded-full flex items-center justify-center shadow-lg transform rotate-45 transform-gpu transition-transform hover:rotate-90 duration-500">
                            <Plane size={48} className="text-pure-white -rotate-45" />
                        </div>
                        <h3 className="text-navy-primary text-[22px] font-bold font-taviraj leading-tight px-4">
                            Luxury Airport Transfer with Bayou Black Cars
                        </h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Chicago is a city that blends power, culture, and history like no other. From the edge of Lake Michigan to the heart of The Loop, the Windy City is known for its bold skyline, award-winning restaurants, legendary sports teams, and world-class museums. Whether you're here for business, sightseeing, or a weekend escape, Bayou Black Cars offers a more refined and relaxing experience than a regular taxi or rideshare.
                        </p>
                    </div>

                    {/* Column 2: Business or Leisure */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-navy-primary rounded-full flex items-center justify-center shadow-lg transform-gpu transition-transform hover:scale-110 duration-500">
                            <Car size={48} className="text-pure-white" />
                        </div>
                        <h3 className="text-navy-primary text-[22px] font-bold font-taviraj leading-tight px-4">
                            Bayou Rides for Business or Leisure
                        </h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Chicago moves fast, and business never slows down. From the convention halls of McCormick Place to high-rise boardrooms in Streeterville, our executive black car service in Chicago is built for those who need more than just a ride—they need a private, punctual, and professional way to travel. Our chauffeurs know the city inside and out. Whether you need an early morning airport transfer O’Hare, a client pickup in River North, or a ride to your hotel in the Gold Coast, Bayou makes your experience seamless.
                        </p>
                    </div>

                    {/* Column 3: Corporate/Personal Explore */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-navy-primary rounded-full flex items-center justify-center shadow-lg transform-gpu transition-transform hover:-translate-y-2 duration-500">
                            <Building2 size={48} className="text-pure-white" />
                        </div>
                        <h3 className="text-navy-primary text-[22px] font-bold font-taviraj leading-tight px-4">
                            Explore the Windy City in Bayou Way
                        </h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Chicago is a city of endless experiences—from world-famous architecture to lakefront parks, street festivals, and iconic cultural landmarks. Bayou Black Cars is here to elevate the way you move through the city, ensuring you explore with style. Want to stroll through Millennium Park, take in the skyline at 360 Chicago, or shop on the Magnificent Mile? Leave the logistics to us. Our chauffeurs handle traffic, parking, and navigation while you focus on enjoying every moment in the third-largest city in the United States.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandAuthority;
