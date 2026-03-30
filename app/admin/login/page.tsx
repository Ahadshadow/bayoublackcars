"use client";

import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Loader2, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push('/admin/images');
            } else {
                setError('Incorrect password. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-poppins text-black">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-navy-primary rounded-2xl flex items-center justify-center text-white shadow-2xl mx-auto mb-6">
                        <ImageIcon size={32} />
                    </div>
                    <h1 className="text-3xl font-extrabold text-navy-primary tracking-tight mb-2">Admin Access</h1>
                    <p className="text-sm text-gray-500 font-medium">Manage your website assets securely</p>
                </div>

                <div className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                                Administrator Password
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[16px] focus:outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white transition-all text-black"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy-primary transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-xl animate-shake">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-2xl text-[16px] font-bold text-white shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${
                                loading 
                                ? 'bg-gray-200 cursor-not-allowed' 
                                : 'bg-navy-primary hover:bg-navy-light shadow-navy-primary/20'
                            }`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Unlock Dashboard'}
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400 font-medium">
                    Protected by Bayou Media Security Protocol
                </p>
            </div>
        </div>
    );
}
