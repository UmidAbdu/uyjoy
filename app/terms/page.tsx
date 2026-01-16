'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <section className="bg-white border-b border-sand-200 py-12">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-500 mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-primary-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-gray-900">
                Terms of Service
              </h1>
              <p className="text-gray-500">Last updated: January 1, 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto prose prose-gray"
          >
            <div className="bg-white rounded-2xl p-8 shadow-card space-y-8">
              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using UyJoy (&quot;the Platform&quot;), you agree to be bound by these 
                  Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do 
                  not use our services. These Terms apply to all users of the Platform, including 
                  tenants, landlords, and visitors.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  UyJoy provides an online marketplace that connects tenants seeking rental 
                  properties with landlords offering properties for rent in Uzbekistan. Our 
                  services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Property listing and search functionality</li>
                  <li>Secure messaging between tenants and landlords</li>
                  <li>Booking and payment processing</li>
                  <li>Tenant and landlord verification services</li>
                  <li>Tenant Protection Program</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  3. User Accounts
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To use certain features of our Platform, you must create an account. When 
                  creating an account, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  4. Tenant Obligations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As a tenant using UyJoy, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide truthful information in your profile and communications</li>
                  <li>Complete identity verification as required</li>
                  <li>Pay all fees and charges as agreed</li>
                  <li>Treat properties with care and respect</li>
                  <li>Comply with rental agreements and local laws</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  5. Landlord Obligations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As a landlord using UyJoy, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate property descriptions and photos</li>
                  <li>Maintain properties in safe and habitable condition</li>
                  <li>Respond to booking requests within 48 hours</li>
                  <li>Honor confirmed bookings</li>
                  <li>Comply with all applicable rental and tax laws</li>
                  <li>Provide proof of property ownership or management rights</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  6. Payments and Fees
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  UyJoy charges service fees for facilitating transactions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Tenant Service Fee: 15% of first month&apos;s rent (minimum 200,000 UZS)</li>
                  <li>Landlord Subscription: Based on selected plan</li>
                  <li>All payments are processed through secure payment partners</li>
                  <li>Payments are held in escrow until move-in verification</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  7. Tenant Protection Program
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our Tenant Protection Program provides coverage for verified bookings. If a 
                  property significantly differs from its listing, tenants may be eligible 
                  for a full refund. Claims must be submitted within 48 hours of the move-in 
                  date. See our Tenant Protection page for full details.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  8. Cancellation Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cancellation terms vary based on timing:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>More than 14 days before move-in: Full refund</li>
                  <li>7-14 days before move-in: 50% refund</li>
                  <li>Less than 7 days before move-in: No refund</li>
                  <li>Landlord cancellations: Full refund to tenant</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  9. Prohibited Activities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The following activities are strictly prohibited:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Posting false or misleading information</li>
                  <li>Circumventing the Platform to avoid fees</li>
                  <li>Harassment or discrimination</li>
                  <li>Fraudulent transactions or identity theft</li>
                  <li>Violation of any applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  UyJoy provides a platform for connecting tenants and landlords but is not 
                  a party to rental agreements. We are not liable for the actions of users, 
                  property conditions, or disputes between parties except as covered by our 
                  Tenant Protection Program. Our maximum liability is limited to fees paid 
                  to UyJoy in the preceding 12 months.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  11. Governing Law
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of the Republic of Uzbekistan. Any 
                  disputes shall be resolved in the courts of Tashkent, Uzbekistan.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update these Terms from time to time. We will notify users of 
                  significant changes via email or Platform notification. Continued use of 
                  the Platform after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  13. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@uyjoy.uz" className="text-primary-500 hover:underline">
                    legal@uyjoy.uz
                  </a>
                  .
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
