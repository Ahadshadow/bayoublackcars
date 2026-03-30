"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Car,
    CalendarCheck,
    Settings,
    Users,
    LogOut,
    Menu,
    X,
    TrendingUp,
    DollarSign,
    SlidersHorizontal,
    Home,
    LayoutGrid
} from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navItems = [
        { name: 'View Website', href: '/', icon: Home },
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Manage Cars', href: '/admin/cars', icon: Car },
        { name: 'Fleet Services', href: '/admin/fleet', icon: LayoutGrid },
        { name: 'Bookings', href: '/admin/bookings', icon: CalendarCheck },
        { name: 'Pricing', href: '/admin/pricing', icon: DollarSign },
        { name: 'Categories', href: '/admin/categories', icon: SlidersHorizontal },
        { name: 'Customers', href: '/admin/customers', icon: Users },
        { name: 'Manage Images', href: '/admin/images', icon: LayoutGrid },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

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

    const isLoginPage = pathname === '/admin/login';

    if (isLoginPage) {
        return (
            <div className="min-h-screen bg-gray-50">
                {children}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex flex-col w-64 bg-navy-dark text-pure-white sticky top-0 h-screen shadow-xl">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold tracking-tight text-gold">Bayou Admin</h2>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Fleet Management v1.0</p>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-gold text-navy-primary font-bold shadow-lg shadow-gold/20'
                                    : 'hover:bg-white/5 text-gray-300 hover:text-gold'
                                    }`}
                            >
                                <item.icon size={20} className={isActive ? 'text-navy-primary' : 'text-gray-400 group-hover:text-gold'} />
                                <span className="text-sm font-poppins">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
                    >
                        <LogOut size={20} className="group-hover:text-red-400" />
                        <span className="text-sm font-poppins text-left">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Sidebar */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <aside className="absolute left-0 top-0 h-full w-72 bg-navy-dark text-pure-white p-6 shadow-2xl animate-in slide-in-from-left duration-300">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-gold">Admin Panel</h2>
                            <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
                        </div>
                        <nav className="space-y-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                            ? 'bg-gold text-navy-primary font-bold'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-gold'
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </aside>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-8 shrink-0">
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-500"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        <h1 className="text-lg font-bold text-black font-taviraj hidden md:block">
                            {navItems.find(item => item.href === pathname)?.name || 'Admin Panel'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Live System</span>
                        </div>
                        <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
                            AD
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50">
                    {children}
                </div>
            </main>
        </div>
    );
}
