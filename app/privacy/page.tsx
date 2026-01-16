'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
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
              <Shield className="w-7 h-7 text-primary-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-gray-900">
                Privacy Policy
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
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-card space-y-8">
              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  UyJoy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our platform. Please read this policy carefully.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Name, email, phone number, password</li>
                  <li><strong>Identity Verification:</strong> Government ID, selfie photos</li>
                  <li><strong>Profile Information:</strong> Profile photo, bio, preferences</li>
                  <li><strong>Payment Information:</strong> Bank details, payment card information</li>
                  <li><strong>Communications:</strong> Messages, support requests, feedback</li>
                  <li><strong>Property Information:</strong> Photos, descriptions, addresses (for landlords)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We automatically collect certain information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Device information (type, operating system, browser)</li>
                  <li>Log data (IP address, access times, pages viewed)</li>
                  <li>Location data (with your permission)</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Verify user identities and prevent fraud</li>
                  <li>Send notifications, updates, and marketing communications</li>
                  <li>Respond to your comments, questions, and support requests</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  4. Information Sharing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Other Users:</strong> Profile information visible to facilitate bookings</li>
                  <li><strong>Service Providers:</strong> Payment processors, verification services, cloud hosting</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement industry-standard security measures to protect your information, 
                  including encryption (SSL/TLS), secure data storage, access controls, and 
                  regular security audits. However, no method of transmission over the Internet 
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  6. Data Retention
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information for as long as your account is active 
                  or as needed to provide services. We may retain certain information as 
                  required by law or for legitimate business purposes, such as fraud prevention 
                  and dispute resolution.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  7. Your Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:privacy@uyjoy.uz" className="text-primary-500 hover:underline">
                    privacy@uyjoy.uz
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  8. International Users
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  UyJoy is based in Uzbekistan. If you access our services from outside 
                  Uzbekistan, please be aware that your information may be transferred to 
                  and processed in Uzbekistan. We comply with applicable data protection 
                  laws, including GDPR for EU users.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  9. Children&apos;s Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for users under 18 years of age. We do not 
                  knowingly collect personal information from children. If we discover that 
                  we have collected information from a child, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  10. Third-Party Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our platform may contain links to third-party websites. We are not 
                  responsible for the privacy practices of these sites. We encourage you 
                  to review their privacy policies before providing any information.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you 
                  of any changes by posting the new policy on this page and updating the 
                  &quot;Last updated&quot; date. Your continued use of the platform after changes 
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  12. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-sand-50 rounded-xl">
                  <p className="text-gray-700">
                    <strong>UyJoy Privacy Team</strong><br />
                    Email:{' '}
                    <a href="mailto:privacy@uyjoy.uz" className="text-primary-500 hover:underline">
                      privacy@uyjoy.uz
                    </a><br />
                    Address: IT Park, Mirzo Ulugbek District, Tashkent, Uzbekistan
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
