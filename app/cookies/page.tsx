'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cookie, ArrowLeft } from 'lucide-react'

export default function CookiesPage() {
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
              <Cookie className="w-7 h-7 text-primary-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-gray-900">
                Cookie Policy
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
                  1. What Are Cookies?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are placed on your device when you 
                  visit a website. They are widely used to make websites work more 
                  efficiently and provide information to the owners of the site. Cookies 
                  help us improve your experience on UyJoy.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To enable essential website functionality</li>
                  <li>To remember your preferences and settings</li>
                  <li>To keep you signed in to your account</li>
                  <li>To analyze how our website is used</li>
                  <li>To personalize content and advertisements</li>
                  <li>To improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  3. Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-sand-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-600 text-sm">
                      These cookies are necessary for the website to function properly. 
                      They enable core functionality such as security, account access, 
                      and payment processing. You cannot opt out of these cookies.
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      Examples: session cookies, authentication cookies, security cookies
                    </div>
                  </div>

                  <div className="p-4 bg-sand-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                    <p className="text-gray-600 text-sm">
                      These cookies enable enhanced functionality and personalization, 
                      such as remembering your language preference, search history, and 
                      saved properties.
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      Examples: language preference, recent searches, favorites
                    </div>
                  </div>

                  <div className="p-4 bg-sand-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600 text-sm">
                      These cookies help us understand how visitors interact with our 
                      website by collecting anonymous information. This helps us improve 
                      our services.
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      Examples: Google Analytics, page views, session duration
                    </div>
                  </div>

                  <div className="p-4 bg-sand-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-600 text-sm">
                      These cookies are used to track visitors across websites to display 
                      relevant advertisements. They help us measure the effectiveness of 
                      our marketing campaigns.
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      Examples: Facebook Pixel, Google Ads, retargeting cookies
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  4. Third-Party Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use services from the following third parties that may set cookies:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-sand-200">
                        <th className="text-left py-2 font-semibold text-gray-900">Provider</th>
                        <th className="text-left py-2 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left py-2 font-semibold text-gray-900">Privacy Policy</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-sand-100">
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">Analytics</td>
                        <td className="py-2">
                          <a href="https://policies.google.com/privacy" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            Link
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b border-sand-100">
                        <td className="py-2">Payme</td>
                        <td className="py-2">Payments</td>
                        <td className="py-2">
                          <a href="https://payme.uz/privacy" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            Link
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b border-sand-100">
                        <td className="py-2">Yandex Maps</td>
                        <td className="py-2">Maps</td>
                        <td className="py-2">
                          <a href="https://yandex.com/legal/privacy" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            Link
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  5. Managing Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you to refuse 
                    or delete cookies through settings. Note that disabling cookies may 
                    affect website functionality.
                  </li>
                  <li>
                    <strong>Cookie Banner:</strong> When you first visit our site, you can 
                    choose which cookie categories to accept.
                  </li>
                  <li>
                    <strong>Opt-Out Links:</strong> Some third-party services provide 
                    opt-out mechanisms (e.g., Google Analytics Opt-out).
                  </li>
                </ul>
                
                <div className="mt-4 p-4 bg-primary-500/5 rounded-xl">
                  <p className="text-sm text-primary-700">
                    <strong>Note:</strong> If you disable essential cookies, some features 
                    of UyJoy may not function properly, including login and payment processing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  6. Cookie Retention
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookie retention periods vary based on their purpose:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain for a set period (typically 1-12 months)</li>
                  <li><strong>Authentication cookies:</strong> Valid until you log out or 30 days</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  7. Updates to This Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes 
                  in our practices or for other operational, legal, or regulatory reasons. 
                  Please revisit this page periodically to stay informed about our use of 
                  cookies.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  8. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about our use of cookies, please contact us:
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

              <section>
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  9. Related Policies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For more information about how we handle your data, please see:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/privacy" className="text-primary-500 hover:underline">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/terms" className="text-primary-500 hover:underline">
                    Terms of Service
                  </Link>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
