"use client";

import React from 'react';
import { Settings, Shield, Bell, Globe, Mail } from 'lucide-react';

export default function AdminSettings() {
    const settingsGroups = [
        { title: 'Security', icon: Shield, desc: 'Manage administrative roles and system permissions.' },
        { title: 'Notifications', icon: Bell, desc: 'Configure SMS and Email alerts for new reservations.' },
        { title: 'API Configuration', icon: Globe, desc: 'Setup Google Maps and Supabase integration keys.' },
        { title: 'Communication', icon: Mail, desc: 'Edit email templates for customer confirmations.' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Page Header */}
            <div>
                <h2 className="text-3xl font-bold text-navy-primary font-taviraj mb-1">System Configuration</h2>
                <p className="text-gray-500 font-light">Fine-tune the operational parameters of your platform.</p>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {settingsGroups.map((group, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-4 rounded-2xl bg-gray-50 text-navy-primary group-hover:bg-gold-accent/10 group-hover:text-gold-accent transition-colors">
                                <group.icon size={24} />
                            </div>
                            <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest group-hover:text-gold-accent/50 transition-colors pt-2">Configure</div>
                        </div>
                        <h3 className="text-lg font-bold text-navy-primary mb-2">{group.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">{group.desc}</p>
                    </div>
                ))}
            </div>

            {/* Global Settings Placeholder */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden p-12 text-center bg-gradient-to-br from-white to-gray-50/50">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-primary/5 text-navy-primary rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border border-navy-primary/5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    System Online
                </div>
                <h3 className="text-2xl font-bold text-navy-primary font-taviraj mb-3 leading-tight">Elite Performance Optimized</h3>
                <p className="text-gray-500 max-w-lg mx-auto mb-2 font-light">
                    The core engine is running with specialized optimizations for the Midnight Elite color palette and SEO structure.
                </p>
                <p className="text-[11px] text-gray-300 uppercase tracking-[0.2em] font-bold">Midnight Elite v2.0.4</p>
            </div>
        </div>
    );
}
