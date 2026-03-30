import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const events = [
    {
        category: "Community",
        title: "Lincolnwood Fest",
        date: "July 24–27, 2026",
        location: "Henry A. Proesel Park",
        color: "text-blue-500"
    },
    {
        category: "Food & Drink",
        title: "Taste of Lincoln Avenue",
        date: "July 25–26, 2026",
        location: "N. Lincoln Avenue",
        color: "text-orange-500"
    },
    {
        category: "Cultural",
        title: "Chinatown Summer Fair",
        date: "July 26–27, 2026",
        location: "Chinatown",
        color: "text-red-500"
    },
    {
        category: "Music & Arts",
        title: "Wicker Park Fest",
        date: "July 25–27, 2026",
        location: "Wicker Park",
        color: "text-purple-500"
    }
];

const ChicagoEvents = () => {
    return (
        <section className="bg-gray-50 py-16 font-poppins">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-navy-primary font-taviraj tracking-tight">
                        UpComing Events in Chicago
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col space-y-4 hover:shadow-md transition-shadow"
                        >
                            <span className={`text-[12px] font-bold uppercase tracking-wider ${event.color}`}>
                                {event.category}
                            </span>
                            <h3 className="text-navy-primary text-[20px] font-bold font-taviraj leading-tight h-14 flex items-center">
                                {event.title}
                            </h3>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                                    <Calendar size={16} />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                                    <MapPin size={16} />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <button className="mt-4 border border-gray-200 text-gray-600 px-4 py-1.5 rounded-md text-[13px] font-bold hover:bg-gray-50 transition-colors w-fit">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChicagoEvents;
