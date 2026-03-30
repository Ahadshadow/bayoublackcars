"use client";

import React, { useState, useEffect } from 'react';
import {
    Plus, Search, Filter, MoreVertical, Edit, Trash2,
    Car, CheckCircle2, XCircle, RefreshCcw, Gauge, Fuel, Users, Package
} from 'lucide-react';
import Image from 'next/image';
import { supabaseClient } from '@/lib/supabaseClient';
import { Vehicle } from '@/lib/types';

interface VehicleFormData {
    models: string;
    category: string;
    description: string;
    price_per_hour: number;
    price_per_mile: number;
    passengers: number;
    bags: number;
    image: string;
    transmission: string;
    fuel: string;
    available: boolean;
    features: string[];
    highlight: string;
}

const initialForm: VehicleFormData = {
    models: "",
    category: "SEDAN",
    description: "",
    price_per_hour: 0,
    price_per_mile: 0,
    passengers: 4,
    bags: 3,
    image: "",
    transmission: "Automatic",
    fuel: "Petrol",
    available: true,
    features: [],
    highlight: ""
};

export default function ManageCars() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
    const [formData, setFormData] = useState<VehicleFormData>(initialForm);
    const [submitting, setSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const fetchVehicles = async () => {
        setLoading(true);
        try {
            const client = supabaseClient;
            if (!client) {
                // Fallback to local storage or mock data if Supabase is missing
                const localData = localStorage.getItem('mock_vehicles');
                if (localData) {
                    setVehicles(JSON.parse(localData));
                }
                setLoading(false);
                return;
            }

            const { data, error } = await client
                .from('vehicles')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setVehicles(data);
                // Also update local storage for persistence across demo sessions
                localStorage.setItem('mock_vehicles', JSON.stringify(data));
            }
        } catch (err) {
            console.error("Fetch error:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleEdit = (vehicle: Vehicle) => {
        setEditingVehicle(vehicle);
        setFormData({
            models: vehicle.models,
            category: vehicle.category,
            description: vehicle.description,
            price_per_hour: vehicle.price_per_hour,
            price_per_mile: vehicle.price_per_mile,
            passengers: vehicle.passengers,
            bags: vehicle.bags,
            image: vehicle.image,
            transmission: vehicle.transmission,
            fuel: vehicle.fuel,
            available: vehicle.available,
            features: vehicle.features || [],
            highlight: vehicle.highlight || ""
        });
        setImagePreview(vehicle.image);
        setIsModalOpen(true);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setImagePreview(base64String);
                setFormData(prev => ({ ...prev, image: base64String }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAdd = () => {
        setEditingVehicle(null);
        setFormData(initialForm);
        setImagePreview(null);
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const client = supabaseClient;
            if (!client) {
                // Mock behavior if Supabase is missing
                const newVehicle: Vehicle = {
                    ...formData,
                    id: editingVehicle?.id || Math.random().toString(36).substr(2, 9),
                    created_at: new Date().toISOString()
                };

                let updatedVehicles;
                if (editingVehicle) {
                    updatedVehicles = vehicles.map(v => v.id === editingVehicle.id ? newVehicle : v);
                } else {
                    updatedVehicles = [newVehicle, ...vehicles];
                }

                setVehicles(updatedVehicles);
                localStorage.setItem('mock_vehicles', JSON.stringify(updatedVehicles));

                // Allow some delay to show the "Saving" state
                await new Promise(resolve => setTimeout(resolve, 800));

                setIsModalOpen(false);
                setSubmitting(false);
                return;
            }

            if (editingVehicle) {
                const { error } = await client
                    .from('vehicles')
                    .update(formData)
                    .eq('id', editingVehicle.id);
                if (error) throw error;
            } else {
                const { error } = await client
                    .from('vehicles')
                    .insert(formData);
                if (error) throw error;
            }

            setIsModalOpen(false);
            fetchVehicles();
        } catch (error) {
            console.error("Error saving vehicle:", error);
            alert("Error saving vehicle. Please check console.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this vehicle?")) {
            const client = supabaseClient;
            if (!client) {
                const updated = vehicles.filter(v => v.id !== id);
                setVehicles(updated);
                localStorage.setItem('mock_vehicles', JSON.stringify(updated));
                return;
            }

            const { error } = await client
                .from('vehicles')
                .delete()
                .eq('id', id);

            if (!error) {
                setVehicles(vehicles.filter(v => v.id !== id));
            } else {
                alert("Error deleting vehicle. Please try again.");
            }
        }
    };

    const filteredCars = vehicles.filter(car =>
        car.models.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-navy-primary font-taviraj tracking-tight">Vehicle Fleet</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage your luxury vehicles and their availability</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold-accent/20 active:scale-95"
                >
                    <Plus size={20} />
                    <span>Add New Vehicle</span>
                </button>
            </div>

            {/* Filters Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by model or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-gold-accent rounded-xl py-3 pl-12 pr-4 transition-all text-sm outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Vehicle</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Price (H/M)</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Capacity</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan={6} className="px-6 py-8">
                                            <div className="h-12 bg-gray-50 rounded-xl w-full"></div>
                                        </td>
                                    </tr>
                                ))
                            ) : filteredCars.map((car) => (
                                <tr key={car.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-12 relative bg-gray-100 rounded-lg p-1 overflow-hidden">
                                                <Image
                                                    src={car.image || 'https://via.placeholder.com/150'}
                                                    alt={car.models}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-navy-primary text-sm">{car.models}</div>
                                                <div className="text-[11px] text-gray-400 flex items-center gap-2 mt-0.5">
                                                    <span className="flex items-center gap-1"><Gauge size={10} /> {car.transmission}</span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                    <span className="flex items-center gap-1"><Fuel size={10} /> {car.fuel}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                                            {car.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm">
                                            <div className="font-bold text-navy-primary">${car.price_per_hour}/hr</div>
                                            <div className="text-xs text-gray-400">${car.price_per_mile}/mi</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <div className="flex items-center gap-1 text-xs" title="Passengers">
                                                <Users size={14} className="text-gold-accent" />
                                                <span>{car.passengers}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs" title="Bags">
                                                <Package size={14} className="text-gold-accent" />
                                                <span>{car.bags}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        {car.available ? (
                                            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-bold bg-green-50 text-green-600 uppercase tracking-wider">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                Available
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-400 uppercase tracking-wider">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                Maintenance
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5 text-right md:text-left">
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                className="p-2 hover:bg-gold-accent/10 text-gray-400 hover:text-gold-accent rounded-lg transition-colors"
                                                title="Edit"
                                                onClick={() => handleEdit(car)}
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                                                title="Delete"
                                                onClick={() => handleDelete(car.id)}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 text-gray-400 rounded-lg transition-colors md:hidden">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
                        <div className="p-8 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <h3 className="text-2xl font-bold text-navy-primary font-taviraj text-gold-accent">
                                {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-navy-primary transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Model Name</label>
                                    <input
                                        type="text" required
                                        value={formData.models}
                                        onChange={e => setFormData({ ...formData, models: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all text-navy-primary font-medium"
                                        placeholder="e.g. Mercedes S-Class"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all cursor-pointer text-navy-primary font-medium"
                                    >
                                        <option value="SEDAN">SEDAN</option>
                                        <option value="FIRST CLASS SEDAN">FIRST CLASS SEDAN</option>
                                        <option value="SUV">SUV</option>
                                        <option value="STRETCH LIMO">STRETCH LIMO</option>
                                        <option value="SHUTTLE SPRINTER">SHUTTLE SPRINTER</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all h-24 resize-none text-navy-primary font-medium"
                                    placeholder="Enter vehicle description..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Hourly Rate ($)</label>
                                    <input
                                        type="number" required
                                        value={formData.price_per_hour || ''}
                                        onChange={e => setFormData({ ...formData, price_per_hour: e.target.value === '' ? 0 : parseFloat(e.target.value) })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all text-navy-primary font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Per Mile Rate ($)</label>
                                    <input
                                        type="number" step="0.01" required
                                        value={formData.price_per_mile || ''}
                                        onChange={e => setFormData({ ...formData, price_per_mile: e.target.value === '' ? 0 : parseFloat(e.target.value) })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all text-navy-primary font-medium"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Passengers</label>
                                    <input
                                        type="number"
                                        value={formData.passengers || ''}
                                        onChange={e => setFormData({ ...formData, passengers: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all text-navy-primary font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Bags</label>
                                    <input
                                        type="number"
                                        value={formData.bags || ''}
                                        onChange={e => setFormData({ ...formData, bags: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-accent transition-all text-navy-primary font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Available</label>
                                    <div className="flex items-center h-[46px]">
                                        <input
                                            type="checkbox"
                                            checked={formData.available}
                                            onChange={e => setFormData({ ...formData, available: e.target.checked })}
                                            className="w-5 h-5 accent-gold-accent"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Vehicle Image</label>
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-full md:w-48 h-32 relative bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl overflow-hidden flex items-center justify-center group">
                                        {imagePreview ? (
                                            <Image src={imagePreview} alt="Preview" fill className="object-contain p-2" />
                                        ) : (
                                            <div className="text-center p-4">
                                                <Car size={24} className="text-gray-300 mx-auto mb-2" />
                                                <span className="text-[10px] text-gray-400">No Image</span>
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold pointer-events-none">
                                            CHANGE IMAGE
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="text-xs text-gray-400 leading-relaxed italic">
                                            Upload a clear image of the luxury vehicle. <br />
                                            Accepted formats: JPG, PNG, WEBP.
                                        </p>
                                        <div className="text-[10px] font-mono text-gray-300 truncate w-full max-w-xs">
                                            {formData.image ? 'Image Data Loaded' : 'No image selected'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-navy-primary hover:bg-gold-accent hover:text-navy-primary text-white font-bold py-4 rounded-xl transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {submitting ? <RefreshCcw className="animate-spin" size={20} /> : <CheckCircle2 size={20} />}
                                <span>{editingVehicle ? 'Update Vehicle' : 'Create Vehicle'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
