'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  Lock, 
  Clock, 
  RefreshCw, 
  CheckCircle, 
  Phone,
  FileText,
  AlertCircle,
  ArrowRight
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const protections = [
  {
    icon: Lock,
    title: 'Secure Escrow Payments',
    description: 'Your payment is held securely and only released to the landlord after you confirm successful move-in.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Listings',
    description: 'All properties are verified by our team. We check ownership documents and ensure listing accuracy.',
  },
  {
    icon: Clock,
    title: '48-Hour Guarantee',
    description: 'You have 48 hours after move-in to report any issues. If the property doesn\'t match, get a full refund.',
  },
  {
    icon: RefreshCw,
    title: 'Full Refund Policy',
    description: 'If the property significantly differs from the listing, we\'ll refund your entire payment.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Our support team is available around the clock in Uzbek, Russian, and English.',
  },
  {
    icon: FileText,
    title: 'Standardized Contracts',
    description: 'Use our legally compliant rental contracts that protect both tenants and landlords.',
  },
]

const faqs = [
  {
    question: 'What happens if the property is different from the listing?',
    answer: 'If you arrive and the property significantly differs from what was advertised (wrong location, missing amenities, poor condition), contact us within 48 hours. We\'ll investigate and provide a full refund if your claim is valid.',
  },
  {
    question: 'How does the escrow payment work?',
    answer: 'When you book, your payment goes into a secure escrow account. The landlord only receives the money after you move in and confirm everything is as expected, or after 48 hours pass without any reported issues.',
  },
  {
    question: 'What if the landlord cancels my booking?',
    answer: 'If a landlord cancels your confirmed booking, you\'ll receive a full refund immediately. We\'ll also help you find alternative accommodation.',
  },
  {
    question: 'How do I report an issue?',
    answer: 'You can report issues through the app, by email at support@uyjoy.uz, or by calling our 24/7 hotline. We respond to all reports within 2 hours.',
  },
]

export default function TenantProtectionPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center flex-shrink-0"
            >
              <Shield className="w-16 h-16" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="secondary" className="mb-4">
                Your Safety First
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Tenant Protection Program
              </h1>
              <p className="text-xl text-white/80">
                Book with confidence. Every UyJoy booking is protected by our 
                comprehensive guarantee program.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              What&apos;s Covered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our protection program is included with every booking at no extra cost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              How Protection Works
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Book with Secure Payment</h3>
                  <p className="text-gray-600">Your payment is held in escrow, not sent directly to the landlord.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Move In & Verify</h3>
                  <p className="text-gray-600">Check that everything matches the listing. You have 48 hours to report issues.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Confirm or Report</h3>
                  <p className="text-gray-600">Confirm successful move-in, or report issues for investigation and refund.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Payment Released</h3>
                  <p className="text-gray-600">Once confirmed, the payment is securely transferred to the landlord.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Book with Confidence
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Every booking is protected. Start your search and find your new home today.
          </p>
          <Link href="/search">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start Searching
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
