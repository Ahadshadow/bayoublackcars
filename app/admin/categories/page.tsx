"use client";

import React, { useState, useEffect } from 'react';
import { supabaseClient } from '@/lib/supabaseClient';
import { Plus, Trash2, Loader2, Save, AlertCircle } from 'lucide-react';

interface Category {
    id: string;
    name: string;
    created_at: string;
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setIsLoading(true);
        try {
            const client = supabaseClient;
            if (!client) throw "Supabase client not initialized";

            const { data, error } = await client
                .from('vehicle_categories')
                .select('*')
                .order('name');

            if (error) throw error;
            setCategories(data || []);
        } catch (error: any) {
            console.error('Error fetching categories:', error);
            setMessage({ type: 'error', text: 'Failed to load categories. Please ensure the "vehicle_categories" table exists.' });

            // Fallback to local storage if DB fails
            const localCats = localStorage.getItem('vehicle_categories');
            if (localCats) {
                setCategories(JSON.parse(localCats));
            } else {
                // Sample data if everything fails
                setCategories([
                    { id: '1', name: 'SEDAN', created_at: '' },
                    { id: '2', name: 'SUV', created_at: '' },
                    { id: '3', name: 'LUXURY', created_at: '' }
                ]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategoryName.trim()) return;

        setIsSaving(true);
        setMessage({ type: '', text: '' });

        try {
            const client = supabaseClient;
            if (!client) throw "Supabase client not initialized";

            const { data, error } = await client
                .from('vehicle_categories')
                .insert([{ name: newCategoryName.trim().toUpperCase() }])
                .select();

            if (error) throw error;

            if (data) {
                const updatedCategories = [...categories, data[0]].sort((a, b) => a.name.localeCompare(b.name));
                setCategories(updatedCategories);
                localStorage.setItem('vehicle_categories', JSON.stringify(updatedCategories));
                setNewCategoryName('');
                setMessage({ type: 'success', text: 'Category added successfully.' });
            }
        } catch (error: any) {
            console.error('Error adding category:', error);
            setMessage({ type: 'error', text: error.message || 'Failed to add category.' });

            // Local fallback for demo
            const pseudoId = Math.random().toString(36).substr(2, 9);
            const newCat = { id: pseudoId, name: newCategoryName.trim().toUpperCase(), created_at: new Date().toISOString() };
            const updated = [...categories, newCat].sort((a, b) => a.name.localeCompare(b.name));
            setCategories(updated);
            localStorage.setItem('vehicle_categories', JSON.stringify(updated));
            setNewCategoryName('');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteCategory = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete the category "${name}"?`)) return;

        setIsSaving(true);
        try {
            const client = supabaseClient;
            if (!client) throw "Supabase client not initialized";

            const { error } = await client
                .from('vehicle_categories')
                .delete()
                .eq('id', id);

            if (error) throw error;

            const updatedCategories = categories.filter(cat => cat.id !== id);
            setCategories(updatedCategories);
            localStorage.setItem('vehicle_categories', JSON.stringify(updatedCategories));
            setMessage({ type: 'success', text: 'Category deleted successfully.' });
        } catch (error: any) {
            console.error('Error deleting category:', error);
            setMessage({ type: 'error', text: error.message || 'Failed to delete category.' });

            // Local fallback
            const updated = categories.filter(cat => cat.id !== id);
            setCategories(updated);
            localStorage.setItem('vehicle_categories', JSON.stringify(updated));
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-pure-black mb-2">Manage Categories</h1>
                <p className="text-gray-600">Add or remove vehicle categories used in filters and car listings.</p>
            </div>

            {message.text && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'
                    }`}>
                    {message.type === 'error' ? <AlertCircle size={20} /> : <Save size={20} />}
                    <p className="text-sm font-medium">{message.text}</p>
                </div>
            )}

            {/* Add Category Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                <form onSubmit={handleAddCategory} className="flex gap-4">
                    <div className="flex-1">
                        <label htmlFor="categoryName" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            New Category Name
                        </label>
                        <input
                            id="categoryName"
                            type="text"
                            placeholder="e.g. LUXURY SEDAN"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-gold transition-all text-pure-black"
                            disabled={isSaving}
                        />
                    </div>
                    <div className="flex items-end">
                        <button
                            type="submit"
                            disabled={isSaving || !newCategoryName.trim()}
                            className="bg-gold text-pure-black font-bold py-3 px-6 rounded-xl hover:bg-gold-hover transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? <Loader2 size={20} className="animate-spin" /> : <Plus size={20} />}
                            Add Category
                        </button>
                    </div>
                </form>
            </div>

            {/* Categories List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-600">Current Categories</h2>
                </div>

                <div className="divide-y divide-gray-100">
                    {isLoading ? (
                        <div className="p-12 flex flex-col items-center justify-center text-gray-400">
                            <Loader2 size={40} className="animate-spin mb-4" />
                            <p>Loading categories...</p>
                        </div>
                    ) : categories.length === 0 ? (
                        <div className="p-12 text-center text-gray-400">
                            <Plus size={40} className="mx-auto mb-4 opacity-20" />
                            <p>No categories found. Add your first one above.</p>
                        </div>
                    ) : (
                        categories.map((category) => (
                            <div key={category.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                <div>
                                    <h3 className="font-bold text-pure-black">{category.name}</h3>
                                    {category.created_at && (
                                        <p className="text-[10px] text-gray-500 mt-0.5">
                                            Added on {new Date(category.created_at).toLocaleDateString()}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleDeleteCategory(category.id, category.name)}
                                    disabled={isSaving}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                    title="Delete Category"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Database Setup Required
                </h4>
                <p className="text-xs text-blue-700 leading-relaxed">
                    To make these categories persistent, please run the following SQL script in your Supabase SQL Editor:
                </p>
                <pre className="mt-3 p-3 bg-white/80 rounded-lg text-[10px] font-mono text-blue-900 border border-blue-200 overflow-x-auto">
                    {`CREATE TABLE IF NOT EXISTS vehicle_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL UNIQUE
);`}
                </pre>
            </div>
        </div>
    );
}
