"use client";

import React from 'react';
import { Heart, Gift, Star, Users, GraduationCap, Music, Trophy, GlassWater, Calendar } from 'lucide-react';

const eventServices = [
    {
        title: "Wedding Limo Service",
        description: "Create unforgettable wedding moments with a grand, luxurious ride. Our professional chauffeurs ensure timely arrival, elegance, and stress-free travel.",
        icon: <Heart className="w-10 h-10 text-gold" />
    },
    {
        title: "Birthday Limo Service",
        description: "Celebrate your birthday in ultimate style with a private luxury limousine. We make your special day even more exciting and memorable.",
        icon: <Gift className="w-10 h-10 text-gold" />
    },
    {
        title: "Quinceañera Limo Service",
        description: "Make her feel like royalty on her big day with our elegant limos. Spacious interiors and charming presentation add magic to every ride.",
        icon: <Calendar className="w-10 h-10 text-gold" />
    },
    {
        title: "Anniversary Limo Service",
        description: "Relive your romantic journey with a graceful and intimate limousine experience. Perfect for surprises, dinners, or a relaxing evening drive.",
        icon: <Star className="w-10 h-10 text-gold" />
    },
    {
        title: "Bachelor Party Limo Service",
        description: "Party starts the moment you enter the limo lights, music, and fun with your crew. We handle the driving while you enjoy the celebration.",
        icon: <GlassWater className="w-10 h-10 text-gold" />
    },
    {
        title: "Graduation Limo Service",
        description: "Mark academic achievements with a stylish limo ride for graduates. Safe, classy, and photo-worthy transportation for this big milestone.",
        icon: <GraduationCap className="w-10 h-10 text-gold" />
    },
    {
        title: "Concert Limo Services",
        description: "Avoid traffic and parking stress with our concert limo rides. Travel comfortably and arrive like a star at your favorite events.",
        icon: <Music className="w-10 h-10 text-gold" />
    },
    {
        title: "Prom Limo Services",
        description: "Enjoy a glamorous, secure ride to prom night with friends. Equipped with entertainment and mood lighting for a night to remember.",
        icon: <Users className="w-10 h-10 text-gold" />
    },
    {
        title: "Sporting Event Limo Service",
        description: "Support your team in style with group transport to the stadium. Skip parking hassles and enjoy the pre-game hype inside our luxury ride.",
        icon: <Trophy className="w-10 h-10 text-gold" />
    }
];

const EventServiceGrid = () => {
    return (
        <section className="py-24 bg-gray-50/50 font-poppins">
            <div className="container-custom">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[32px] md:text-[45px] font-bold text-black font-taviraj tracking-tight mb-3">
                        Event Services – The Right Ride for Every Occasion
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        At Bayou Black Cars, we offer a wide range of luxury vehicles perfectly suited for all kinds of events. Our stretch limousines add elegance to weddings and proms, while our sedans offer a refined option for formal dinners and special evenings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[30px] border border-gray-200 text-center flex flex-col items-center group hover:shadow-2xl hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-[22px] font-bold text-black mb-4 font-taviraj italic">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventServiceGrid;
