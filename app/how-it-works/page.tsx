'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Search, 
  MessageCircle, 
  Calendar, 
  CreditCard, 
  Key, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Search & Discover',
    description: 'Browse through verified listings using our powerful search and filters. View photos, amenities, and neighborhood details.',
    color: 'bg-primary-500',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Contact Landlord',
    description: 'Send inquiries directly through our secure messaging system. Ask questions and get to know the property better.',
    color: 'bg-terracotta-400',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Schedule & Visit',
    description: 'Arrange a viewing at your convenience. See the property in person or request a video tour.',
    color: 'bg-emerald-500',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Book & Pay Securely',
    description: 'Submit your booking request with secure payment. Your money is held in escrow until you move in.',
    color: 'bg-blue-500',
  },
  {
    number: '05',
    icon: Key,
    title: 'Move In',
    description: 'Get the keys and settle into your new home. You have 48 hours to verify everything matches the listing.',
    color: 'bg-purple-500',
  },
]

const benefits = [
  'All listings verified by our team',
  'Secure escrow payment system',
  '48-hour move-in guarantee',
  'Full refund if listing misrepresented',
  '24/7 customer support',
  'Digital rental contracts',
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              Simple & Secure
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              How UyJoy Works
            </h1>
            <p className="text-xl text-white/80">
              Finding your perfect home in Uzbekistan has never been easier. 
              Follow these simple steps to secure your new place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-sand-200 hidden md:block" />
                )}
                
                <div className="flex gap-6 mb-12">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary-500">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Why Choose UyJoy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve built a platform that puts your safety and convenience first.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-sand-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Callout */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-12 h-12" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-2xl font-bold mb-3">
                Protected by UyJoy Tenant Protection
              </h2>
              <p className="text-white/80 mb-4">
                Every booking includes our comprehensive protection program. 
                Your payment is secure, and you&apos;re covered if anything goes wrong.
              </p>
              <Link href="/tenant-protection">
                <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join thousands of happy tenants who found their perfect home through UyJoy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/search">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Searching
              </Button>
            </Link>
            <Link href="/auth?mode=signup">
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
