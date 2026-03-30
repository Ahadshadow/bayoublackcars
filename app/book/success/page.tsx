"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    CheckCircle2,
    Download,
    Mail,
    ArrowRight,
    Calendar,
    MapPin,
    Car,
    ShieldCheck
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { generateBookingPDF } from '@/lib/notifications';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

function BookingSuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [loading, setLoading] = useState(true);
    const [bookingDetails, setBookingDetails] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const finalizeBooking = async () => {
            if (!sessionId) {
                setLoading(false);
                return;
            }

            try {
                // 1. Fetch Session from our API
                const sessionRes = await fetch(`/api/checkout/session?session_id=${sessionId}`);
                const { session, error: sessionError } = await sessionRes.json();

                if (sessionError || !session) throw new Error(sessionError || "Failed to fetch session");

                const meta = session.metadata;

                // 2. Prepare Booking Data
                const bookingData = {
                    customer_name: meta.customerName,
                    customer_email: meta.customerEmail,
                    customer_phone: meta.customerPhone,
                    pickup_location: meta.pickup,
                    dropoff_location: meta.dropoff,
                    vehicle_id: meta.vehicleId,
                    pickup_date: `${meta.date} ${meta.time}`,
                    total_fare: parseFloat(meta.totalFare),
                    status: 'CONFIRMED'
                };

                setBookingDetails({
                    ...bookingData,
                    vehicleName: meta.vehicleName
                });

                // 3. Save to Supabase via our API
                await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookingData)
                });

            } catch (err: any) {
                console.error("Success Page Error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        finalizeBooking();
    }, [sessionId]);

    const handleDownloadPDF = () => {
        if (!bookingDetails) return;

        const data = {
            customerName: bookingDetails.customer_name,
            customerPhone: bookingDetails.customer_phone,
            customerEmail: bookingDetails.customer_email,
            pickup: bookingDetails.pickup_location,
            dropoff: bookingDetails.dropoff_location,
            date: bookingDetails.pickup_date.split(' ')[0],
            time: bookingDetails.pickup_date.split(' ').slice(1).join(' '),
            vehicleName: bookingDetails.vehicleName,
            price: bookingDetails.total_fare.toFixed(2),
            mode: "distance"
        };
        const doc = generateBookingPDF(data);
        doc.save(`Bayou_Receipt_${sessionId?.slice(-8) || 'Reservation'}.pdf`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 border-4 border-navy-primary/10 border-t-gold-accent rounded-full animate-spin mb-8"></div>
                <h2 className="text-2xl font-bold text-navy-primary font-taviraj italic">Finalizing Your Elite Journey...</h2>
                <p className="text-gray-500 mt-2 font-light">Securing your luxury reservation and preparing your details.</p>
            </div>
        );
    }

    if (error && !bookingDetails) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="opacity-20" />
                </div>
                <h2 className="text-2xl font-bold text-navy-primary font-taviraj">Something went wrong</h2>
                <p className="text-gray-500 mt-2 font-light">We couldn't verify your booking details, but your payment was successful. Please contact support.</p>
                <Link href="/" className="mt-8 bg-navy-primary text-white px-8 py-3 rounded-xl font-bold">Back to Home</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50/50 py-20 px-4 font-poppins">
            <div className="max-w-3xl mx-auto">
                {/* Success Card */}
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-2xl shadow-navy-primary/5 overflow-hidden animate-in zoom-in-95 fade-in duration-700">

                    {/* Header Banner */}
                    <div className="bg-navy-primary p-12 text-center text-white relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/20 to-transparent"></div>
                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-gold-accent text-navy-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gold-accent/20 border-4 border-white/10">
                                <CheckCircle2 size={40} />
                            </div>
                            <h1 className="text-4xl font-bold font-taviraj mb-2 italic tracking-tight">Reservation Confirmed</h1>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em]">Thank you for choosing Bayou Black Cars</p>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-12 space-y-10">

                        {/* Summary Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                        <Calendar size={18} className="text-navy-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Schedule</p>
                                        <p className="text-sm font-bold text-navy-primary">{bookingDetails?.pickup_date || 'TBD'}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                        <MapPin size={18} className="text-navy-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Route</p>
                                        <p className="text-sm font-bold text-navy-primary truncate max-w-[200px]" title={bookingDetails?.pickup_location}>
                                            {bookingDetails?.pickup_location || 'TBD'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                        <Car size={18} className="text-navy-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Vehicle</p>
                                        <p className="text-sm font-bold text-navy-primary">{bookingDetails?.vehicleName || 'Professional Fleet'}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                        <ShieldCheck size={18} className="text-navy-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                        <p className="text-sm font-bold text-green-600 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                            Payment Verified
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDownloadPDF}
                                className="flex-1 group flex items-center justify-center gap-2 bg-navy-primary text-white py-4 rounded-2xl font-bold text-sm hover:bg-gold-accent hover:text-navy-primary transition-all shadow-xl shadow-navy-primary/10"
                            >
                                <Download size={18} />
                                Download PDF Receipt
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 text-navy-primary py-4 rounded-2xl font-bold text-sm hover:bg-gray-100 transition-all border border-gray-100">
                                <Mail size={18} />
                                Resend Email
                            </button>
                        </div>

                        {/* Note */}
                        <div className="bg-gold-accent/5 p-6 rounded-3xl border border-gold-accent/10">
                            <p className="text-center text-xs text-navy-primary/60 font-medium leading-relaxed italic">
                                A confirmation email has been sent to your inbox. For immediate assistance, contact our 24/7 support at (504) 508-4831.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Return Home */}
                <div className="mt-12 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-navy-primary font-bold text-sm hover:text-gold-accent transition-colors group">
                        Back to Website
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function BookingSuccessPage() {
    return (
        <React.Suspense fallback={
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 border-4 border-navy-primary/10 border-t-gold-accent rounded-full animate-spin mb-8"></div>
            </div>
        }>
            <BookingSuccessContent />
        </React.Suspense>
    );
}
