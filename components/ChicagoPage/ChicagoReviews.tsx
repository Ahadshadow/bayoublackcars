import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "James Wilson",
        date: "2 weeks ago",
        rating: 5,
        text: "Bayou Black Cars provided an exceptional experience for our corporate event in Chicago. The chauffeur was professional, the SUV was spotless, and the service was perfectly on time."
    },
    {
        name: "Sarah Miller",
        date: "1 month ago",
        rating: 5,
        text: "Best airport transfer service I've used in Chicago. They tracked my flight and were waiting at O'Hare as soon as I landed. Highly recommend for stress-free travel."
    },
    {
        name: "Robert Davis",
        date: "3 weeks ago",
        rating: 5,
        text: "We rented a Sprinter van for a group outing to a Cubs game. The vehicle was luxurious and our driver was fantastic. A truly first-class way to see the city."
    }
];

const ChicagoReviews = () => {
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-navy-primary font-taviraj tracking-tight">
                        Customer Reviews
                    </h2>
                    <p className="text-gray-500 text-[18px] mt-2 font-medium">
                        What Our Clients Say
                    </p>
                    <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100 flex flex-col space-y-4 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                        >
                            <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12 group-hover:text-gold/40 transition-colors" />

                            <div className="flex gap-1 text-gold">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic text-[15px] leading-relaxed relative z-10">
                                "{review.text}"
                            </p>

                            <div className="pt-4 border-t border-gray-200">
                                <p className="font-bold text-navy-primary">{review.name}</p>
                                <p className="text-[12px] text-gray-400 uppercase tracking-wider">{review.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-navy-primary text-pure-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        <Star size={16} fill="currentColor" className="text-gold" />
                        <span>Excellent 4.9/5 based on 250+ Google Reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChicagoReviews;
