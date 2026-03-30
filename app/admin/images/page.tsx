"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Upload, Loader2, CheckCircle2, AlertCircle, Search, Layers, MapPin, Plane, Car, Home, ChevronRight, LogOut, Image as ImageIcon } from 'lucide-react';
import { getPageAssets } from '@/lib/imageLoader';
import { useRouter } from 'next/navigation';

const SECTIONS_CONFIG: Record<string, { key: string; label: string; icon?: any }[]> = {
    "default": [
        { key: "hero", label: "Hero Background", icon: Home },
        { key: "intro", label: "Intro Section Image", icon: ImageIcon },
        { key: "cta_banner", label: "CTA Banner Background", icon: Layers },
    ],
    "/": [
        { key: "hero", label: "Hero Background", icon: Home },
        { key: "service_metropolitan", label: "Metropolitan Direct Transfers", icon: Car },
        { key: "service_hourly", label: "Executive Hourly Chauffeur", icon: Car },
        { key: "service_airport", label: "Premier Airport Logistics", icon: Plane },
        { key: "service_enterprise", label: "Enterprise Client Solutions", icon: Layers },
        { key: "service_milestone", label: "Signature Milestone Events", icon: Layers },
        { key: "service_regional", label: "Regional Executive Travel", icon: Layers },
        { key: "city_chicago", label: "City: Chicago", icon: MapPin },
        { key: "city_houston", label: "City: Houston", icon: MapPin },
        { key: "city_new_orleans", label: "City: New Orleans", icon: MapPin },
        { key: "city_nyc", label: "City: New York City", icon: MapPin },
        { key: "city_miami", label: "City: Miami", icon: MapPin },
        { key: "city_dallas", label: "City: Dallas", icon: MapPin },
        { key: "city_vegas", label: "City: Las Vegas", icon: MapPin },
        { key: "city_atlanta", label: "City: Atlanta", icon: MapPin },
        { key: "city_sf", label: "City: San Francisco", icon: MapPin },
        { key: "cta_banner", label: "CTA Banner Background", icon: Layers },
    ],
    "fleet": [
        { key: "hero", label: "Hero Background", icon: Car },
        { key: "fleet_sedan", label: "Fleet: Executive Sedan", icon: Car },
        { key: "fleet_suv_premium", label: "Fleet: Premium SUV", icon: Car },
        { key: "fleet_suv_luxury", label: "Fleet: Luxury SUV", icon: Car },
        { key: "fleet_sprinter", label: "Fleet: Executive Sprinter", icon: Car },
        { key: "fleet_shuttle", label: "Fleet: Luxury Shuttle", icon: Car },
        { key: "fleet_bus", label: "Fleet: Party Bus", icon: Car },
    ]
};

const PAGES = [
    {
        name: "Main Pages",
        base: "",
        items: ["/", "/about", "/contact", "/fleet", "/faqs", "/book", "/vehicle-system"]
    },
    {
        name: "Services",
        base: "/services",
        items: [
            "airport-limo-service",
            "executive-car-service",
            "corporate-airport-transfers",
            "wedding-limo-service",
            "private-chauffeur-service",
            "special-event-limo",
            "point-to-point-limo",
            "group-transportation",
            "party-bus-service",
            "concert-limo-service",
            "sporting-event-limo",
            "prom-limo-service",
            "quinceanera-limo-service",
            "funeral-limo-service",
            "graduation-limo-service",
            "night-out-service",
            "anniversary-limo-service",
            "birthday-limo-service",
            "bachelor-party-limo",
            "bachelorette-party-limo",
            "wine-tour-limo",
            "casino-limo-service",
            "cruise-port-transfer"
        ]
    },
    {
        name: "Cities",
        base: "/cities",
        items: [
            "new-orleans",
            "chicago",
            "houston",
            "new-york-city",
            "miami",
            "dallas",
            "las-vegas",
            "atlanta",
            "san-francisco"
        ]
    },
    {
        name: "Airports",
        base: "/airports",
        items: [
            "louis-armstrong-airport",
            "ohare-airport",
            "george-bush-airport",
            "jfk-airport",
            "miami-airport",
            "dfw-airport",
            "harry-reid-airport",
            "hartsfield-jackson-airport",
            "san-francisco-airport",
            "la-airport",
            "newark-airport",
            "boston-logan-airport"
        ]
    }
];

export default function ImageManagementPage() {
    const [selectedPage, setSelectedPage] = useState("/");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentAssets, setCurrentAssets] = useState<Record<string, string>>({});
    const [uploading, setUploading] = useState<string | null>(null);
    const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string, key: string } | null>(null);
    const router = useRouter();

    const fetchAssets = async () => {
        const assets = await getPageAssets(selectedPage);
        setCurrentAssets(assets);
    };

    useEffect(() => {
        fetchAssets();
    }, [selectedPage]);

    const handleUpload = async (sectionKey: string, file: File) => {
        setUploading(sectionKey);
        setStatus(null);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('pageRoute', selectedPage);
        formData.append('sectionKey', sectionKey);

        try {
            const res = await fetch('/api/admin/upload-image', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                setCurrentAssets(prev => ({ ...prev, [sectionKey]: data.url }));
                setStatus({ type: 'success', msg: 'Image updated successfully!', key: sectionKey });
            } else {
                const error = await res.json();
                setStatus({ type: 'error', msg: error.error || 'Upload failed', key: sectionKey });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Network error occurred', key: sectionKey });
        } finally {
            setUploading(null);
        }
    };

    const handleLogout = async () => {
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                body: JSON.stringify({ action: 'logout' }),
            });
            if (res.ok) {
                window.location.href = '/admin/login';
            }
        } catch (err) {
            console.error('Logout failed');
        }
    };

    const sections = useMemo(() => {
        if (selectedPage === "/") return SECTIONS_CONFIG["/"];
        if (selectedPage.includes("fleet")) return SECTIONS_CONFIG["fleet"];
        return SECTIONS_CONFIG["default"];
    }, [selectedPage]);

    const filteredPages = useMemo(() => {
        if (!searchQuery) return PAGES;
        return PAGES.map(category => ({
            ...category,
            items: category.items.filter(item => 
                item.toLowerCase().includes(searchQuery.toLowerCase()) || 
                category.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(category => category.items.length > 0);
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-poppins text-black">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#E2E8F0] flex flex-col fixed inset-y-0 shadow-sm z-20">
                <div className="p-6 border-b border-[#F1F5F9]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-navy-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                            <ImageIcon size={22} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-navy-primary">Media Asset Manager</h1>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Administrator Portal</p>
                        </div>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Find a page..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all text-black"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
                    {filteredPages.map(category => (
                        <div key={category.name} className="space-y-2">
                            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-3">{category.name}</h2>
                            <div className="space-y-[2px]">
                                {category.items.map(item => {
                                    const route = category.base === "" ? item : `${category.base}/${item}`;
                                    const isActive = selectedPage === route;
                                    return (
                                        <button
                                            key={item}
                                            onClick={() => setSelectedPage(route)}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all group ${
                                                isActive 
                                                ? 'bg-gold text-pure-black font-bold shadow-md' 
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-navy-primary'
                                            }`}
                                        >
                                            <span className="truncate">{item === "/" ? "Homepage" : item.replace(/^\//, '').replace(/-/g, ' ')}</span>
                                            {isActive && <ChevronRight size={14} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Redundant Logout removed - handled by Main Admin Layout */}
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-80 p-10 bg-[#F8FAFC]">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <span>Pages</span>
                            <ChevronRight size={14} />
                            <span className="text-gray-900 font-medium lowercase">
                                {selectedPage === "/" ? "Homepage" : selectedPage.split('/').filter(Boolean).map(s => s.replace(/-/g, ' ')).join(' / ')}
                            </span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-navy-primary tracking-tight">
                            Page Assets Configuration
                        </h1>
                    </div>
                    <button 
                        onClick={fetchAssets}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all shadow-sm active:scale-95"
                    >
                        <Loader2 className={`w-4 h-4 ${uploading ? 'animate-spin' : ''}`} />
                        Refresh Assets
                    </button>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
                    {sections.map(section => {
                        const Icon = section.icon || ImageIcon;
                        const hasCustomImage = !!currentAssets[section.key];

                        return (
                            <div key={section.key} className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500">
                                <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-navy-primary group-hover:bg-gold group-hover:text-white transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy-primary">{section.label}</h3>
                                            <p className="text-[10px] text-gray-400 font-mono">{section.key}</p>
                                        </div>
                                    </div>
                                    {hasCustomImage && (
                                        <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-100">Live</span>
                                    )}
                                </div>

                                <div className="relative aspect-video bg-[#F1F5F9] m-4 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
                                    {currentAssets[section.key] ? (
                                        <img 
                                            src={currentAssets[section.key]} 
                                            alt={section.label} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                        />
                                    ) : (
                                        <div className="text-center p-6">
                                            <ImageIcon size={40} className="mx-auto text-gray-300 mb-2 opacity-50" />
                                            <p className="text-xs text-gray-400 italic">No custom image uploaded.<br/>Website is using local fallback.</p>
                                        </div>
                                    )}

                                    {uploading === section.key && (
                                        <div className="absolute inset-0 bg-navy-primary/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-6 text-center animate-in fade-in duration-300">
                                            <Loader2 className="animate-spin mb-3 w-10 h-10 text-gold" />
                                            <p className="font-bold text-lg">Optimizing & Uploading</p>
                                            <p className="text-xs text-white/70">Building premium cache...</p>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 pt-0 mt-auto space-y-4">
                                    <div className="flex flex-col gap-3">
                                        <label className={`w-full cursor-pointer py-3.5 rounded-xl text-[14px] font-bold transition-all text-center flex items-center justify-center gap-2 active:scale-[0.98] ${
                                            uploading 
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                            : 'bg-navy-primary text-white hover:bg-navy-light shadow-lg hover:shadow-navy-primary/20'
                                        }`}>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => e.target.files?.[0] && handleUpload(section.key, e.target.files[0])}
                                                disabled={!!uploading}
                                            />
                                            <Upload size={18} />
                                            {hasCustomImage ? 'Replace Image' : 'Upload Image'}
                                        </label>

                                        {status?.key === section.key && (
                                            <div className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm animate-in slide-in-from-bottom-2 duration-300 ${
                                                status.type === 'success' 
                                                ? 'bg-green-50 border-green-100 text-green-700' 
                                                : 'bg-red-50 border-red-100 text-red-700'
                                            }`}>
                                                {status.type === 'success' ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}
                                                <span className="font-medium">{status.msg}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
