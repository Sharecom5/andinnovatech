import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
    title: 'Privacy Policy | AnD Innovatech',
    description: 'Learn how AnD Innovatech collects, uses, and protects your personal information. Your privacy is our priority.',
};

export default function PrivacyPolicy() {
    return (
        <main className="overflow-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Privacy <span className="gradient-text">Policy</span></>}
                subtitle="Your privacy is critical to our mission. This policy outlines how we handle and protect your data."
                badgeText="🔒 Data Protection"
                showStats={false}
            />

            <section className="section-padding">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-grey dark:text-slate-400">
                        <p className="font-semibold text-primary">Last updated: February 21, 2026</p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">1. Introduction</h2>
                        <p>
                            Welcome to AnD Innovatech. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at andinnovatech@gmail.com.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and Contact Data (Email address, phone number).</li>
                            <li>Business Information (Company name, service requirements).</li>
                        </ul>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">3. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our website for a variety of business purposes, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To facilitate communication and consultation requests.</li>
                            <li>To send you relevant insights and promotional updates.</li>
                            <li>To respond to user inquiries and offer technical support.</li>
                            <li>To deliver and optimize services requested by the user.</li>
                        </ul>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">4. Will Your Information Be Shared?</h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your data to third parties.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">5. Cookies and Tracking</h2>
                        <p>
                            We may use cookies and similar tracking technologies to access or store information. You can set your browser to refuse all or some browser cookies, but this may affect certain features of the website.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">6. Security of Your Information</h2>
                        <p>
                            We use appropriate technical and organizational security measures designed to protect the security of any personal information we process. Data is stored on secure, encrypted servers.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">7. Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at andinnovatech@gmail.com.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
