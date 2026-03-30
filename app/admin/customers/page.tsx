"use client";

import React from 'react';
import { Users, Search, Filter, Download } from 'lucide-react';

export default function CustomersManagement() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-navy-primary font-taviraj mb-1">Customer Relationship</h2>
                    <p className="text-gray-500 font-light">Monitor and manage your elite clientele database.</p>
                </div>
                <button className="bg-navy-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gold-accent hover:text-navy-primary transition-all flex items-center gap-2 shadow-lg shadow-navy-primary/10">
                    <Download size={18} />
                    Export Data
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Clients', value: '1,284', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Active This Month', value: '432', icon: Users, color: 'text-gold-accent', bg: 'bg-gold-accent/10' },
                    { label: 'New Registrations', value: '56', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-2xl font-bold text-navy-primary font-taviraj leading-tight">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder Table */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
                    <Users size={40} />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-2">Customer Data Integration In Progress</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8 font-light">
                    The customer management system is currently being integrated with our central CRM. Full profile views and booking histories will be available shortly.
                </p>
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-gray-50 rounded-lg text-xs font-bold text-gray-400 uppercase tracking-widest">v1.2 Secure Access</div>
                </div>
            </div>
        </div>
    );
}
