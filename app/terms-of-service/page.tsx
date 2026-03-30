import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Terms of Service | Legal Agreements",
    description: "Review the terms and conditions for using Bayou Black Cars's services. Professional, transparent, and fair legal guidelines for all our clients.",
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white py-24">
            <div className="container-custom max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold font-taviraj text-navy-primary mb-8">Terms of Service</h1>
                <div className="w-20 h-1 bg-gold mb-12"></div>

                <div className="prose prose-lg max-w-none text-gray-600 font-poppins space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using Bayou Black Cars services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">2. Services</h2>
                        <p>Bayou Black Cars provides premium transportation and chauffeur services. We reserve the right to modify or discontinue any service with or without notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">3. User Obligations</h2>
                        <p>Users must provide accurate information when booking and must comply with all local laws and regulations. Any inappropriate behavior toward our chauffeurs may result in immediate termination of service without refund.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">4. Payments and Cancellations</h2>
                        <p>All payments are subject to our standard billing rates. Cancellations must be made within the specified timeframes to qualify for a refund. Bayou Black Cars reserves the right to charge for no-shows or late cancellations.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">5. Limitation of Liability</h2>
                        <p>Bayou Black Cars shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pure-black font-taviraj mb-4">6. Governing Law</h2>
                        <p>These terms shall be governed by and construed in accordance with the laws of the State of Louisiana, without regard to its conflict of law principles.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
