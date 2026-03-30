"use client";

import React, { useEffect, useState } from 'react';
import {
    Search,
    Calendar,
    MapPin,
    User,
    Phone,
    Mail,
    Clock,
    CreditCard,
    ChevronRight,
    Filter,
    CheckCircle,
    XCircle,
    AlertCircle,
    Eye,
    CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { supabaseClient } from '@/lib/supabaseClient';
import { Booking } from '@/lib/types';

export default function BookingsManagement() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const client = supabaseClient;
            if (!client) {
                console.warn("Supabase client not initialized. Booking management features unavailable.");
                setLoading(false);
                return;
            }

            const { data, error } = await client
                .from('bookings')
                .select('*, vehicles(*)')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setBookings(data);
            }
        } catch (err) {
            console.error("Error fetching bookings:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const updateStatus = async (id: string, status: string) => {
        const client = supabaseClient;
        if (!client) {
            alert("Supabase client not initialized. Cannot update status.");
            return;
        }

        const { error } = await client
            .from('bookings')
            .update({ status })
            .eq('id', id);

        if (!error) {
            setBookings(bookings.map(b => b.id === id ? { ...b, status: status as any } : b));
        } else {
            alert("Error updating status");
        }
    };

    const filteredBookings = bookings.filter(b => {
        const matchesSearch = b.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.customer_email?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === "All" || b.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'CONFIRMED': return 'bg-green-50 text-green-600 border-green-100';
            case 'CANCELLED': return 'bg-red-50 text-red-600 border-red-100';
            case 'PENDING': return 'bg-amber-50 text-amber-600 border-amber-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-pure-black font-taviraj mb-1">Booking Management</h2>
                    <p className="text-gray-500 font-light">Monitor and manage all customer reservations.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
                        {['All', 'PENDING', 'CONFIRMED', 'CANCELLED'].map((s) => (
                            <button
                                key={s}
                                onClick={() => setStatusFilter(s)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${statusFilter === s
                                    ? 'bg-gold text-pure-black shadow-sm'
                                    : 'text-gray-400 hover:text-pure-black'
                                    }`}
                            >
                                {s.charAt(0) + s.slice(1).toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by customer name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold/50 focus:bg-white transition-all text-sm"
                    />
                </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase tracking-[0.15em] font-bold border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-5">Customer</th>
                                <th className="px-6 py-5">Vehicle & Service</th>
                                <th className="px-6 py-5">Route Details</th>
                                <th className="px-6 py-5">Date & Time</th>
                                <th className="px-6 py-5">Status</th>
                                <th className="px-6 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan={6} className="px-6 py-8 h-20 bg-gray-50/20"></td>
                                    </tr>
                                ))
                            ) : filteredBookings.length > 0 ? (
                                filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50/10 transition-colors group">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-pure-black/5 text-pure-black rounded-full flex items-center justify-center font-bold text-sm border border-pure-black/10">
                                                    {booking.customer_name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-pure-black">{booking.customer_name}</p>
                                                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                                                        <Mail size={10} />
                                                        <span>{booking.customer_email || 'No email'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-pure-black">{booking.vehicle?.models || 'Unknown Vehicle'}</span>
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    <CreditCard size={10} className="text-gold" />
                                                    ${booking.total_fare.toFixed(2)} Total
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col gap-1 max-w-[200px]">
                                                <div className="flex items-start gap-1.5 min-w-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                                                    <span className="text-[11px] text-gray-600 truncate" title={booking.pickup_location}>{booking.pickup_location}</span>
                                                </div>
                                                <div className="flex items-start gap-1.5 min-w-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                                                    <span className="text-[11px] text-gray-600 truncate" title={booking.dropoff_location}>{booking.dropoff_location}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-pure-black">
                                                    {new Date(booking.pickup_date).toLocaleDateString()}
                                                </span>
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    <Clock size={10} />
                                                    {new Date(booking.pickup_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex justify-end gap-2">
                                                {booking.status === 'PENDING' && (
                                                    <>
                                                        <button
                                                            onClick={() => updateStatus(booking.id, 'CONFIRMED')}
                                                            className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors border border-transparent hover:border-green-100"
                                                            title="Confirm Booking"
                                                        >
                                                            <CheckCircle size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(booking.id, 'CANCELLED')}
                                                            className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors border border-transparent hover:border-red-100"
                                                            title="Cancel Booking"
                                                        >
                                                            <XCircle size={18} />
                                                        </button>
                                                    </>
                                                )}
                                                <button
                                                    onClick={() => {
                                                        setSelectedBooking(booking);
                                                        setIsDetailsOpen(true);
                                                    }}
                                                    className="p-2 hover:bg-gray-100 text-gray-400 hover:text-pure-black rounded-lg transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-4 text-gray-400">
                                            <Calendar size={48} strokeWidth={1} />
                                            <p className="text-lg font-medium">No bookings found</p>
                                            <button onClick={() => setStatusFilter("All")} className="text-gold hover:underline text-sm font-bold uppercase">Clear filters</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Booking Details Modal */}
            {isDetailsOpen && selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDetailsOpen(false)}></div>
                    <div className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div>
                                <h3 className="text-2xl font-bold text-pure-black font-taviraj leading-tight">Booking Details</h3>
                                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">ID: {selectedBooking.id}</p>
                            </div>
                            <button onClick={() => setIsDetailsOpen(false)} className="text-gray-400 hover:text-pure-black transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                            {/* Customer Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest border-b border-gold/20 pb-2">Customer Information</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-pure-black/5 flex items-center justify-center text-pure-black"><User size={16} /></div>
                                            <span className="text-sm font-bold text-pure-black">{selectedBooking.customer_name}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-pure-black/5 flex items-center justify-center text-pure-black"><Mail size={16} /></div>
                                            <span className="text-sm text-gray-600">{selectedBooking.customer_email || 'No email provided'}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-pure-black/5 flex items-center justify-center text-pure-black"><Phone size={16} /></div>
                                            <span className="text-sm text-gray-600">{selectedBooking.customer_phone || 'No phone provided'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest border-b border-gold/20 pb-2">Service Details</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-pure-black/5 flex items-center justify-center text-pure-black"><Calendar size={16} /></div>
                                            <span className="text-sm font-bold text-pure-black">{new Date(selectedBooking.pickup_date).toLocaleDateString()} at {new Date(selectedBooking.pickup_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-pure-black/5 flex items-center justify-center text-pure-black"><CreditCard size={16} /></div>
                                            <span className="text-lg font-bold text-gold">${selectedBooking.total_fare.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(selectedBooking.status)}`}>
                                                {selectedBooking.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Route Info */}
                            <div className="space-y-4">
                                <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest border-b border-gold/20 pb-2">Route Information</h4>
                                <div className="bg-gray-50 rounded-2xl p-6 space-y-4 relative overflow-hidden">
                                    <div className="absolute left-[39px] top-10 bottom-10 w-0.5 border-l-2 border-dashed border-gray-200"></div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-pure-white shadow-sm mt-1"></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pickup Location</p>
                                            <p className="text-sm font-medium text-pure-black mt-0.5">{selectedBooking.pickup_location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="w-4 h-4 rounded-full bg-red-500 border-4 border-pure-white shadow-sm mt-1"></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dropoff Location</p>
                                            <p className="text-sm font-medium text-pure-black mt-0.5">{selectedBooking.dropoff_location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Info */}
                            {selectedBooking.vehicle && (
                                <div className="space-y-4">
                                    <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest border-b border-gold/20 pb-2">Assigned Vehicle</h4>
                                    <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-2xl">
                                        <div className="w-24 h-16 relative bg-white rounded-xl p-2 border border-gray-100 flex items-center justify-center shrink-0">
                                            <Image src={selectedBooking.vehicle.image} alt={selectedBooking.vehicle.models} fill className="object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-md font-bold text-pure-black">{selectedBooking.vehicle.models}</p>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest">{selectedBooking.vehicle.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex justify-end gap-4">
                            {selectedBooking.status === 'PENDING' && (
                                <>
                                    <button
                                        onClick={() => { updateStatus(selectedBooking.id, 'CANCELLED'); setIsDetailsOpen(false); }}
                                        className="px-6 py-3 rounded-xl border border-red-100 bg-white text-red-500 font-bold text-sm hover:bg-red-50 transition-all"
                                    >
                                        Cancel Booking
                                    </button>
                                    <button
                                        onClick={() => { updateStatus(selectedBooking.id, 'CONFIRMED'); setIsDetailsOpen(false); }}
                                        className="px-6 py-3 rounded-xl bg-navy-primary text-pure-white font-bold text-sm hover:bg-gold hover:text-pure-black transition-all shadow-lg uppercase"
                                    >
                                        Confirm Reservation
                                    </button>
                                </>
                            )}
                            {selectedBooking.status !== 'PENDING' && (
                                <button
                                    onClick={() => setIsDetailsOpen(false)}
                                    className="px-8 py-3 rounded-xl bg-navy-primary text-pure-white font-bold text-sm hover:bg-gold hover:text-pure-black transition-all uppercase"
                                >
                                    Close Window
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
