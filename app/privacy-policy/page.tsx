import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Privacy Policy | Your Data Security",
    description: "Read Bayou Black Cars's privacy policy to understand how we collect, use, and protect your personal information when using our premium transportation services.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white py-24">
            <div className="container-custom max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold font-taviraj text-navy-primary mb-8">Privacy Policy</h1>
                <div className="w-20 h-1 bg-gold mb-12"></div>

                <div className="prose prose-lg max-w-none text-gray-600 font-poppins space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">1. Introduction</h2>
                        <p>At Bayou Black Cars, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">2. Information Collection</h2>
                        <p>We collect information you provide directly to us, such as when you create or modify your account, request transportation services, contact customer support, or otherwise communicate with us. This information may include name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other information you choose to provide.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">3. Use of Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, and send administrative and promotional communications.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">4. Sharing Information</h2>
                        <p>We may share the information we collect about you as described in this Policy or as described at the time of collection or sharing, including with third-party service providers who require access to such information to carry out work on our behalf.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">5. Security</h2>
                        <p>Bayou Black Cars takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@bayoublackcars.com" className="text-gold hover:underline">info@bayoublackcars.com</a>.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
