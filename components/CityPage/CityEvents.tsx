import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { CityData } from '@/data/cities/houston';

interface CityEventsProps {
    data: CityData['events'];
}

const CityEvents: React.FC<CityEventsProps> = ({ data }) => {
    return (
        <section className="bg-gray-50 py-10 font-poppins text-black">
            <div className="container-custom px-4">
                <div className="text-center mb-8">
                    <h2 className="text-[28px] md:text-[34px] font-bold text-navy-primary font-taviraj tracking-tight">
                        {data.title}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mt-3"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.items.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col space-y-4 hover:shadow-md transition-shadow h-full"
                        >
                            <span className={`text-[12px] font-bold uppercase tracking-wider ${event.color}`}>
                                {event.category}
                            </span>
                            <h3 className="text-navy-primary text-[18px] font-bold font-taviraj leading-tight h-12 flex items-center">
                                {event.title}
                            </h3>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-gray-500 text-[13.5px]">
                                    <Calendar size={14} />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-[13.5px]">
                                    <MapPin size={14} />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <button className="mt-auto border border-gray-200 text-gray-600 px-4 py-1.5 rounded-md text-[13px] font-bold hover:bg-gray-50 transition-colors w-fit">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityEvents;
