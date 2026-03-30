"use client";

import React from 'react';

const QuoteForm = () => {
    return (
        <div className="w-full h-full overflow-hidden rounded-[20px]">
            <iframe
                src="https://customer.moovs.app/bayou-black-cars-llc/iframe"
                className='min-h-[76vh] w-full border-0 block'
                title="Moovs App"
            ></iframe>
        </div>
        // <iframe src="https://customer.moovs.app/bayou-black-cars-llc/iframe" className='min-h-[76vh] min-w-[381px]' title="Moovs App"></iframe>
        // <div className="w-full bg-white rounded-[40px] p-8 md:p-10 shadow-3xl shadow-black/50 border border-white/10 animate-in slide-in-from-right-8 duration-1000">
        //     <div className="mb-8">
        //         <h3 className="text-2xl font-bold text-navy-primary font-taviraj italic mb-2">Get Instant Quote</h3>
        //         <p className="text-[13px] text-gray-400 font-medium">Book your chauffeur in seconds</p>
        //     </div>

        //     <div className="space-y-5">
        //         <div className="space-y-2">
        //             <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Pickup Address</label>
        //             <div className="relative">
        //                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-accent" size={16} />
        //                 <input
        //                     type="text"
        //                     placeholder="Enter origin..."
        //                     className="w-full bg-white border-2 border-gray-100 focus:border-gold-accent py-4 pl-12 pr-4 rounded-2xl text-sm font-medium text-navy-primary outline-none transition-all placeholder:text-gray-400"
        //                 />
        //             </div>
        //         </div>

        //         <div className="space-y-2">
        //             <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Dropoff Address</label>
        //             <div className="relative">
        //                 <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gold-accent"></div>
        //                 <input
        //                     type="text"
        //                     placeholder="Enter destination..."
        //                     className="w-full bg-white border-2 border-gray-100 focus:border-gold-accent py-4 pl-12 pr-4 rounded-2xl text-sm font-medium text-navy-primary outline-none transition-all placeholder:text-gray-400"
        //                 />
        //             </div>
        //         </div>

        //         <div className="grid grid-cols-2 gap-4">
        //             <div className="space-y-2">
        //                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Date</label>
        //                 <div className="relative">
        //                     <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-accent" size={16} />
        //                     <input
        //                         type="date"
        //                         className="w-full bg-white border-2 border-gray-100 focus:border-gold-accent py-4 pl-12 pr-4 rounded-2xl text-sm font-medium text-navy-primary outline-none transition-all"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="space-y-2">
        //                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Time</label>
        //                 <input
        //                     type="time"
        //                     className="w-full bg-white border-2 border-gray-100 focus:border-gold-accent py-4 px-4 rounded-2xl text-sm font-medium text-navy-primary outline-none transition-all"
        //                 />
        //             </div>
        //         </div>

        //         <Link
        //             href="/book"
        //             className="w-full bg-navy-primary text-white py-5 rounded-2xl font-bold text-[14px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold-accent hover:text-navy-primary transition-all duration-300 shadow-xl mt-4"
        //         >
        //             Quick Book
        //             <ArrowRight size={18} />
        //         </Link>
        //     </div>

        //     <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
        //         <div className="flex -space-x-2">
        //             {[1, 2, 3].map(i => (
        //                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
        //             ))}
        //             <div className="w-8 h-8 rounded-full border-2 border-white bg-gold-accent flex items-center justify-center text-[10px] font-bold">+12</div>
        //         </div>
        //         <p className="text-[11px] font-bold text-navy-primary/40 uppercase tracking-widest italic">15k+ Elite Travels</p>
        //     </div>
        // </div>
    );
};

export default QuoteForm;
