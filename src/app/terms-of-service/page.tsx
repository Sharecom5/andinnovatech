import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
    title: 'Terms of Service | AnD Innovatech',
    description: 'Read the terms and conditions for using AnD Innovatech services and our website.',
};

export default function TermsOfService() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Terms of <span className="gradient-text">Service</span></>}
                subtitle="Please read these terms carefully before using our services."
                badgeText="⚖️ Legal Department"
                showStats={false}
            />

            <section className="section-padding">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-grey dark:text-slate-400">
                        <p className="font-semibold text-primary">Last updated: February 21, 2026</p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using the site.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the site and all content (code, database, functionality, software, website designs, audio, video, text, photographs, and graphics) are our proprietary property and are protected by copyright and trademark laws.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">3. User Representations</h2>
                        <p>
                            By using the site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor; (3) you will not access the site through automated or non-human means; (4) you will not use the site for any illegal or unauthorized purpose.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">4. Services</h2>
                        <p>
                            AnD Innovatech provides IT, software development, and SEO services. Specific terms for project delivery, payment, and support will be outlined in individual service agreements or contracts.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">5. Limitation of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site or services.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. AnD Innovatech and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">7. Changes to Terms</h2>
                        <p>
                            We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
                        </p>

                        <h2 className="text-navy dark:text-white mt-12 mb-6">8. Contact Us</h2>
                        <p>
                            In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at hello@andinnovatech.com.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
