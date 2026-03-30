"use client";

import React from 'react';
import {
    Users,
    Car,
    CalendarCheck,
    TrendingUp,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    MapPin
} from 'lucide-react';

const stats = [
    { name: 'Total Bookings', value: '1,280', icon: CalendarCheck, change: '+12.5%', trend: 'up' },
    { name: 'Active Fleet', value: '45', icon: Car, change: '+3', trend: 'up' },
    { name: 'Monthly Revenue', value: '$24,500', icon: DollarSign, change: '+18.2%', trend: 'up' },
    { name: 'Total Customers', value: '892', icon: Users, change: '-2.4%', trend: 'down' },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Greeting */}
            <div>
                <h2 className="text-3xl font-bold text-navy-primary font-taviraj mb-2">Dashboard Overview</h2>
                <p className="text-gray-500 font-light">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${stat.name.includes('Revenue') ? 'bg-green-50 text-green-600' :
                                stat.name.includes('Fleet') ? 'bg-blue-50 text-blue-600' :
                                    stat.name.includes('Bookings') ? 'bg-gold/10 text-gold' :
                                        'bg-purple-50 text-purple-600'
                                }`}>
                                <stat.icon size={24} />
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                }`}>
                                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.change}
                            </div>
                        </div>
                        <h3 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">{stat.name}</h3>
                        <p className="text-2xl font-bold text-navy-primary">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Bookings Card */}
                <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-navy-primary font-taviraj text-gold">Recent Bookings</h3>
                        <button className="text-sm font-bold text-gold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase tracking-[0.15em] font-bold">
                                <tr>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Vehicle</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-xs">
                                                    JD
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-navy-primary group-hover:text-gold transition-colors">John Doe {i}</p>
                                                    <p className="text-[11px] text-gray-400">john@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-gray-600">Mercedes S-Class</p>
                                            <p className="text-[11px] text-gray-400">Hourly - 4 hours</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${i % 3 === 0 ? 'bg-amber-50 text-amber-600' :
                                                i % 2 === 0 ? 'bg-green-50 text-green-600' :
                                                    'bg-blue-50 text-blue-600'
                                                }`}>
                                                {i % 3 === 0 ? 'Pending' : i % 2 === 0 ? 'Confirmed' : 'Completed'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-navy-primary">$450.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Activity */}
                <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
                    <h3 className="text-xl font-bold text-navy-primary font-taviraj mb-6 text-gold">System Updates</h3>
                    <div className="space-y-6">
                        {[
                            { time: '2 mins ago', action: 'New vehicle "Audi A8" added to fleet', icon: Car, color: 'text-blue-500' },
                            { time: '1 hour ago', action: 'Booking #8293 status updated to Completed', icon: CalendarCheck, color: 'text-green-500' },
                            { time: '3 hours ago', action: 'Pricing rules for "Holiday Season" updated', icon: DollarSign, color: 'text-gold' },
                            { time: '5 hours ago', action: 'System cleanup performed successfully', icon: Clock, color: 'text-gray-400' },
                        ].map((activity, idx) => (
                            <div key={idx} className="flex gap-4 items-start relative pb-6 last:pb-0">
                                {idx !== 3 && <div className="absolute left-[19px] top-8 bottom-0 w-[1px] bg-gray-100"></div>}
                                <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 ${activity.color}`}>
                                    <activity.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 leading-snug">{activity.action}</p>
                                    <p className="text-[11px] text-gray-400 mt-1 font-medium">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
