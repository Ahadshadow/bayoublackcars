import React from 'react';
import { Star, Quote } from 'lucide-react';
import { CityData } from '@/data/cities/houston';

interface CityReviewsProps {
    data: CityData['reviews'];
}

const CityReviews: React.FC<CityReviewsProps> = ({ data }) => {
    return (
        <section className="bg-white py-10 font-poppins text-black">
            <div className="container-custom px-4">
                <div className="text-center mb-8">
                    <h2 className="text-[28px] md:text-[34px] font-bold text-navy-primary font-taviraj tracking-tight">
                        {data.title}
                    </h2>
                    <p className="text-gray-500 text-[16px] mt-2 font-medium">
                        {data.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-gold mx-auto mt-3"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.items.map((review, index) => (
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

                            <p className="text-gray-600 italic text-[14px] leading-relaxed relative z-10 flex-grow">
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
                        <span>Excellent {data.rating}/5 based on {data.totalReviews} Google Reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityReviews;
