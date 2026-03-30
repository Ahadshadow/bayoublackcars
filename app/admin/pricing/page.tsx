"use client";

import React, { useEffect, useState } from 'react';
import {
    DollarSign,
    Save,
    RefreshCcw,
    TrendingUp,
    Car,
    AlertCircle,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { supabaseClient } from '@/lib/supabaseClient';
import { Vehicle } from '@/lib/types';

export default function PricingManagement() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState<string | null>(null);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const fetchVehicles = async () => {
        setLoading(true);
        try {
            const client = supabaseClient;
            if (!client) {
                console.warn("Supabase client not initialized in fetchVehicles.");
                setLoading(false);
                return;
            }

            const { data, error } = await client
                .from('vehicles')
                .select('*')
                .order('category', { ascending: true });

            if (!error && data) {
                setVehicles(data);
            }
        } catch (err) {
            console.error("Error fetching vehicles:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleRateChange = (id: string, field: 'price_per_hour' | 'price_per_mile', value: string) => {
        const numValue = parseFloat(value) || 0;
        setVehicles(vehicles.map(v => v.id === id ? { ...v, [field]: numValue } : v));
    };

    const saveRates = async (vehicle: Vehicle) => {
        const client = supabaseClient;
        if (!client) {
            setMessage({ type: 'error', text: 'Supabase client not initialized' });
            return;
        }

        setSaving(vehicle.id);
        const { error } = await client
            .from('vehicles')
            .update({
                price_per_hour: vehicle.price_per_hour,
                price_per_mile: vehicle.price_per_mile
            })
            .eq('id', vehicle.id);

        setSaving(null);
        if (!error) {
            setMessage({ type: 'success', text: `Rates updated for ${vehicle.models}` });
            setTimeout(() => setMessage(null), 3000);
        } else {
            setMessage({ type: 'error', text: `Failed to update ${vehicle.models}` });
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-navy-primary font-taviraj mb-1">Pricing Strategy</h2>
                    <p className="text-gray-500 font-light">Manage hourly and distance-based rates across your fleet.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={fetchVehicles}
                        className="p-3 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-navy-primary transition-colors shadow-sm"
                    >
                        <RefreshCcw size={20} className={loading ? 'animate-spin' : ''} />
                    </button>
                </div>
            </div>

            {message && (
                <div className={`p-4 rounded-2xl flex items-center gap-3 border animate-in slide-in-from-top-2 duration-300 ${message.type === 'success' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
                    }`}>
                    {message.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    <span className="text-sm font-bold">{message.text}</span>
                </div>
            )}

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    Array(6).fill(0).map((_, i) => (
                        <div key={i} className="h-64 bg-gray-50 animate-pulse rounded-3xl border border-gray-100"></div>
                    ))
                ) : vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                        <div className="p-6 bg-gray-50/50 border-b border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-navy-primary/40 bg-white px-2 py-1 rounded-full uppercase tracking-widest border border-gray-100">
                                    {vehicle.category}
                                </span>
                                <TrendingUp size={18} className="text-gold-accent" />
                            </div>
                            <h3 className="text-lg font-bold text-navy-primary font-taviraj leading-tight">{vehicle.models}</h3>
                        </div>

                        <div className="p-6 flex-1 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Hourly Rate ($)</label>
                                    <div className="relative group">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold-accent transition-colors" size={16} />
                                        <input
                                            type="number"
                                            value={vehicle.price_per_hour}
                                            onChange={(e) => handleRateChange(vehicle.id, 'price_per_hour', e.target.value)}
                                            className="w-full bg-gray-50 border border-transparent focus:border-gold-accent/30 focus:bg-white rounded-xl py-3 pl-10 pr-4 text-sm font-bold text-navy-primary transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Per Mile Rate ($)</label>
                                    <div className="relative group">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold-accent transition-colors" size={16} />
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={vehicle.price_per_mile}
                                            onChange={(e) => handleRateChange(vehicle.id, 'price_per_mile', e.target.value)}
                                            className="w-full bg-gray-50 border border-transparent focus:border-gold-accent/30 focus:bg-white rounded-xl py-3 pl-10 pr-4 text-sm font-bold text-navy-primary transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50/30 border-t border-gray-100">
                            <button
                                onClick={() => saveRates(vehicle)}
                                disabled={saving === vehicle.id}
                                className="w-full bg-navy-primary hover:bg-navy-primary/90 disabled:opacity-50 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                            >
                                {saving === vehicle.id ? (
                                    <RefreshCcw size={18} className="animate-spin" />
                                ) : (
                                    <Save size={18} />
                                )}
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
