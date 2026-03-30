"use client";

import React, { useState, useEffect } from 'react';
import { supabaseClient } from '@/lib/supabaseClient';
import {
    Plus, Trash2, Loader2, Save, AlertCircle,
    LayoutGrid, Image as ImageIcon, Star,
    DollarSign, Type, FileText, BarChart3,
    Edit3, Info, Globe, ChevronRight
} from 'lucide-react';
import Image from 'next/image';

// Types
interface FleetServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    stars: number;
    price: string;
}

interface FleetCategory {
    id: string;
    name: string;
    image: string;
}

interface FleetStat {
    id: string;
    label: string;
    value: string;
}

interface PageContent {
    key: string;
    value: string;
}

export default function FleetAdminPage() {
    const [activeTab, setActiveTab] = useState<'cards' | 'categories' | 'stats' | 'content'>('cards');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Data States
    const [fleetItems, setFleetItems] = useState<FleetServiceItem[]>([]);
    const [categories, setCategories] = useState<FleetCategory[]>([]);
    const [stats, setStats] = useState<FleetStat[]>([]);
    const [pageContent, setPageContent] = useState<Record<string, string>>({});

    // Form States
    const [cardForm, setCardForm] = useState({ title: '', description: '', image: '', stars: 5, price: 'Call For Price' });
    const [catForm, setCatForm] = useState({ name: '', image: '' });
    const [statForm, setStatForm] = useState({ label: '', value: '' });

    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        setIsLoading(true);
        try {
            const client = supabaseClient;
            if (!client) {
                setMessage({ type: 'error', text: 'Supabase client not initialized. Please check the SQL setup.' });
                return;
            }

            const [cardsRes, catsRes, statsRes, contentRes] = await Promise.all([
                client.from('fleet_services').select('*').order('created_at', { ascending: false }),
                client.from('fleet_categories').select('*').order('created_at', { ascending: true }),
                client.from('fleet_stats').select('*').order('created_at', { ascending: true }),
                client.from('page_content').select('*')
            ]);

            setFleetItems(cardsRes.data || []);
            setCategories(catsRes.data || []);
            setStats(statsRes.data || []);

            const contentMap: Record<string, string> = {};
            (contentRes.data || []).forEach((item: any) => {
                contentMap[item.key] = item.value;
            });
            setPageContent(contentMap);

        } catch (error: any) {
            console.error('Error fetching data:', error);
            setMessage({ type: 'error', text: 'Some data could not be loaded. Please check the SQL setup.' });
        } finally {
            setIsLoading(false);
        }
    };

    // Generic Add Handler
    const handleAdd = async (table: string, data: any, setter: any, current: any[], reset: any) => {
        setIsSaving(true);
        try {
            const { data: result, error } = await supabaseClient!.from(table).insert([data]).select();
            if (error) throw error;
            setter([result[0], ...current]);
            reset();
            setMessage({ type: 'success', text: 'Added successfully!' });
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message });
        } finally {
            setIsSaving(false);
        }
    };

    // Generic Delete Handler
    const handleDelete = async (table: string, id: string, setter: any, current: any[]) => {
        if (!confirm('Are you sure?')) return;
        try {
            const { error } = await supabaseClient!.from(table).delete().eq('id', id);
            if (error) throw error;
            setter(current.filter(item => item.id !== id));
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message });
        }
    };

    // Save Page Content (Bulk)
    const handleSaveContent = async (key: string, value: string) => {
        try {
            const { error } = await supabaseClient!.from('page_content').upsert({ key, value });
            if (error) throw error;
            setPageContent(prev => ({ ...prev, [key]: value }));
            setMessage({ type: 'success', text: `${key} updated!` });
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message });
        }
    };

    return (
        <div className="max-w-6xl mx-auto pb-20">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-pure-black mb-2 flex items-center gap-3 font-taviraj italic">
                        <Edit3 size={36} className="text-gold" />
                        Fleet Page CMS
                    </h1>
                    <p className="text-gray-500 font-medium">Manage every section of the fleet page dynamically.</p>
                </div>

                <div className="flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
                    {[
                        { id: 'cards', label: 'Service Cards', icon: LayoutGrid },
                        { id: 'categories', label: 'Hero Boxes', icon: ImageIcon },
                        { id: 'stats', label: 'Statistics', icon: BarChart3 },
                        { id: 'content', label: 'General Text', icon: Type }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-navy-primary text-pure-white shadow-lg' : 'text-gray-400 hover:text-pure-black hover:bg-gray-50'
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {message.text && (
                <div className={`mb-8 p-4 rounded-2xl flex items-center justify-between border ${message.type === 'error' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-green-50 text-green-700 border-green-100'
                    }`}>
                    <div className="flex items-center gap-3">
                        {message.type === 'error' ? <AlertCircle size={20} /> : <Save size={20} />}
                        <p className="text-sm font-bold">{message.text}</p>
                    </div>
                    <button onClick={() => setMessage({ type: '', text: '' })} className="opacity-50 hover:opacity-100">✕</button>
                </div>
            )}

            {/* Content Sections */}
            {activeTab === 'cards' && (
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 animate-in fade-in duration-500">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl h-fit">
                        <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-6">Add Highlight Card</h3>
                        <div className="space-y-4">
                            <input placeholder="Title" value={cardForm.title} onChange={e => setCardForm({ ...cardForm, title: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <input placeholder="Image URL" value={cardForm.image} onChange={e => setCardForm({ ...cardForm, image: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <input placeholder="Price Label (e.g. From $90)" value={cardForm.price} onChange={e => setCardForm({ ...cardForm, price: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <select value={cardForm.stars} onChange={e => setCardForm({ ...cardForm, stars: parseInt(e.target.value) })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none appearance-none">
                                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Stars</option>)}
                            </select>
                            <textarea placeholder="Description" rows={3} value={cardForm.description} onChange={e => setCardForm({ ...cardForm, description: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none resize-none" />
                            <button
                                onClick={() => handleAdd('fleet_services', cardForm, setFleetItems, fleetItems, () => setCardForm({ title: '', description: '', image: '', stars: 5, price: 'Call For Price' }))}
                                className="w-full bg-gold text-pure-black font-black py-4 rounded-xl shadow-lg hover:bg-navy-primary hover:text-pure-white transition-all uppercase tracking-widest text-xs"
                            >
                                {isSaving ? 'Saving...' : 'Add Service Card'}
                            </button>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {fleetItems.map(item => (
                            <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 group relative shadow-sm">
                                <div className="aspect-video rounded-xl overflow-hidden relative mb-4">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <h4 className="font-black text-pure-black">{item.title}</h4>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-[10px] bg-gold/10 text-gold px-2 py-1 rounded-full font-bold">{item.price}</span>
                                    <button onClick={() => handleDelete('fleet_services', item.id, setFleetItems, fleetItems)} className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'categories' && (
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 animate-in fade-in duration-500">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl h-fit">
                        <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-6">Add Hero Box</h3>
                        <div className="space-y-4">
                            <input placeholder="Box Title (e.g. Sedans)" value={catForm.name} onChange={e => setCatForm({ ...catForm, name: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <input placeholder="Image URL" value={catForm.image} onChange={e => setCatForm({ ...catForm, image: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <button
                                onClick={() => handleAdd('fleet_categories', catForm, setCategories, categories, () => setCatForm({ name: '', image: '' }))}
                                className="w-full bg-navy-primary text-pure-white font-black py-4 rounded-xl shadow-lg hover:bg-gold hover:text-pure-black transition-all uppercase tracking-widest text-xs"
                            >
                                {isSaving ? 'Saving...' : 'Add Category Box'}
                            </button>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {categories.map(cat => (
                            <div key={cat.id} className="bg-black p-4 rounded-2xl aspect-square flex flex-col justify-between group overflow-hidden border border-white/5">
                                <div className="relative w-full aspect-video">
                                    <Image src={cat.image} alt={cat.name} fill className="object-contain" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-pure-white font-bold text-sm">{cat.name}</span>
                                    <button onClick={() => handleDelete('fleet_categories', cat.id, setCategories, categories)} className="text-white/20 hover:text-red-500"><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'stats' && (
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 animate-in fade-in duration-500">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl h-fit">
                        <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-6">Add Statistic</h3>
                        <div className="space-y-4">
                            <input placeholder="Value (e.g. 2,000+)" value={statForm.value} onChange={e => setStatForm({ ...statForm, value: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <input placeholder="Label (e.g. Journeys)" value={statForm.label} onChange={e => setStatForm({ ...statForm, label: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-pure-black border-transparent border-2 focus:border-gold outline-none" />
                            <button
                                onClick={() => handleAdd('fleet_stats', statForm, setStats, stats, () => setStatForm({ label: '', value: '' }))}
                                className="w-full bg-navy-primary text-pure-white font-black py-4 rounded-xl shadow-lg hover:bg-gold hover:text-pure-black transition-all uppercase tracking-widest text-xs"
                            >
                                {isSaving ? 'Saving...' : 'Add Stat'}
                            </button>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {stats.map(stat => (
                            <div key={stat.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gold"><LayoutGrid size={20} /></div>
                                    <div>
                                        <p className="text-3xl font-black text-pure-black leading-none">{stat.value}</p>
                                        <p className="text-gold text-xs font-black uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete('fleet_stats', stat.id, setStats, stats)} className="text-gray-300 hover:text-red-500"><Trash2 size={24} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'content' && (
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl animate-in fade-in duration-500">
                    <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-8">Page Text & Global Content</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ContentEditor
                            label="Hero Description"
                            id="fleet_hero_description"
                            current={pageContent.fleet_hero_description || 'Loading...'}
                            onSave={handleSaveContent}
                        />
                        <ContentEditor
                            label="Main Highlight Title"
                            id="fleet_main_title"
                            current={pageContent.fleet_main_title || 'Premium Luxury Fleet Service'}
                            onSave={handleSaveContent}
                        />
                        <ContentEditor
                            label="Highlight Intro Paragraph 1"
                            id="fleet_intro_1"
                            current={pageContent.fleet_intro_1 || ''}
                            onSave={handleSaveContent}
                        />
                        <ContentEditor
                            label="Highlight Intro Paragraph 2"
                            id="fleet_intro_2"
                            current={pageContent.fleet_intro_2 || ''}
                            onSave={handleSaveContent}
                        />
                    </div>
                </div>
            )}

            {/* SQL Setup Box */}
            <div className="mt-20 p-10 bg-navy-primary rounded-[40px] text-pure-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gold p-3 rounded-2xl"><Globe size={24} className="text-pure-black" /></div>
                        <h2 className="text-2xl font-black font-taviraj italic">Supabase Setup Required</h2>
                    </div>
                    <p className="text-gray-400 font-medium mb-8 max-w-2xl leading-relaxed">
                        To make your entire fleet page dynamic, you must create these tables in your Supabase SQL Editor.
                        This only needs to be done once.
                    </p>
                    <pre className="bg-white/5 p-8 rounded-3xl border border-white/10 text-[11px] font-mono text-gold overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                        {` -- 1. Fleet Highlight Cards
CREATE TABLE IF NOT EXISTS fleet_services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT,
  stars INTEGER DEFAULT 5,
  price TEXT DEFAULT 'Call For Price'
);

-- 2. Hero Category Boxes
CREATE TABLE IF NOT EXISTS fleet_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  image TEXT NOT NULL
);

-- 3. Statistics
CREATE TABLE IF NOT EXISTS fleet_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  label TEXT NOT NULL,
  value TEXT NOT NULL
);

-- 4. Global Page Content
CREATE TABLE IF NOT EXISTS page_content (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`}
                    </pre>
                </div>
            </div>
        </div>
    );
}

function ContentEditor({ label, id, current, onSave }: { label: string, id: string, current: string, onSave: any }) {
    const [val, setVal] = useState(current);
    useEffect(() => setVal(current), [current]);

    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">{label}</label>
            <div className="relative flex flex-col gap-2">
                <textarea
                    value={val}
                    onChange={e => setVal(e.target.value)}
                    className="w-full bg-gray-50 p-4 rounded-2xl text-pure-black border-transparent border-2 focus:border-gold outline-none resize-none text-sm font-medium leading-relaxed"
                    rows={4}
                />
                <button
                    onClick={() => onSave(id, val)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold hover:text-pure-black transition-colors self-end"
                >
                    Update {label} <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
}
