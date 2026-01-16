'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X, Star, Zap, Building2, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    listings: 1,
    features: [
      { name: 'Basic listing', included: true },
      { name: '5 photos per listing', included: true },
      { name: 'Secure messaging', included: true },
      { name: 'Basic support', included: true },
      { name: 'Priority placement', included: false },
      { name: 'Analytics dashboard', included: false },
      { name: 'RentRadar insights', included: false },
      { name: 'API access', included: false },
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 150000,
    description: 'For active landlords',
    listings: 5,
    features: [
      { name: 'Up to 5 listings', included: true },
      { name: '20 photos per listing', included: true },
      { name: 'Secure messaging', included: true },
      { name: 'Priority support', included: true },
      { name: 'Priority placement', included: true },
      { name: 'Analytics dashboard', included: true },
      { name: 'RentRadar insights', included: false },
      { name: 'API access', included: false },
    ],
    popular: true,
    cta: 'Start Pro Trial',
  },
  {
    name: 'Business',
    price: 400000,
    description: 'For property managers',
    listings: 20,
    features: [
      { name: 'Up to 20 listings', included: true },
      { name: 'Unlimited photos', included: true },
      { name: 'Secure messaging', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Premium placement', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'RentRadar insights', included: true },
      { name: 'API access', included: true },
    ],
    popular: false,
    cta: 'Contact Sales',
  },
]

const faqs = [
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes! You can change your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, your new rate starts at the next billing cycle.',
  },
  {
    question: 'Is there a contract or commitment?',
    answer: 'No long-term contracts. All plans are month-to-month and you can cancel anytime.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Payme, Click, Uzcard, Humo, and international Visa/Mastercard.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! Pay annually and get 2 months free on Pro and Business plans.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="secondary" className="mb-4">
              Pricing Plans
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free and upgrade as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding -mt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'bg-white rounded-2xl shadow-card overflow-hidden relative',
                  plan.popular && 'ring-2 ring-primary-500 shadow-card-hover'
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-1.5 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className={cn('p-6', plan.popular && 'pt-12')}>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    {plan.price === 0 ? (
                      <span className="font-heading text-4xl font-bold text-gray-900">Free</span>
                    ) : (
                      <>
                        <span className="font-heading text-4xl font-bold text-gray-900">
                          {(plan.price / 1000).toFixed(0)}K
                        </span>
                        <span className="text-gray-500 ml-1">UZS/mo</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Up to {plan.listings} {plan.listings === 1 ? 'listing' : 'listings'}</span>
                  </div>

                  <Link href="/auth?mode=signup">
                    <Button
                      fullWidth
                      variant={plan.popular ? 'primary' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>

                <div className="border-t border-sand-200 p-6">
                  <p className="text-sm font-medium text-gray-900 mb-4">Features included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-3 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">Enterprise</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-white/80 mb-6">
                  For large property management companies and real estate agencies. 
                  Get unlimited listings, white-label options, custom integrations, and dedicated account management.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Contact Sales
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold">∞</p>
                  <p className="text-sm text-white/70">Listings</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold">API</p>
                  <p className="text-sm text-white/70">Full Access</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-white/70">Support</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold">SLA</p>
                  <p className="text-sm text-white/70">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
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

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
