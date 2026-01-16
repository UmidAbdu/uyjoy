'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  Camera, 
  DollarSign, 
  Users, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const benefits = [
  {
    icon: Users,
    title: 'Reach Thousands of Tenants',
    description: 'Access our growing community of verified tenants actively searching for housing.',
  },
  {
    icon: Shield,
    title: 'Verified Tenants Only',
    description: 'All tenants go through ID verification. Know who you\'re renting to.',
  },
  {
    icon: DollarSign,
    title: 'Secure Payments',
    description: 'Receive payments directly to your bank account. No cash handling.',
  },
  {
    icon: TrendingUp,
    title: 'RentRadar Analytics',
    description: 'Get market insights and pricing recommendations to maximize your income.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Create Your Listing',
    description: 'Add photos, description, amenities, and set your price.',
  },
  {
    number: '2',
    title: 'Get Verified',
    description: 'Submit property documents for quick verification.',
  },
  {
    number: '3',
    title: 'Receive Inquiries',
    description: 'Connect with interested tenants through our platform.',
  },
  {
    number: '4',
    title: 'Accept Bookings',
    description: 'Review tenant profiles and accept booking requests.',
  },
]

const testimonials = [
  {
    name: 'Rustam A.',
    role: 'Property Owner, Mirabad',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'UyJoy helped me find reliable tenants quickly. The verification process gives me peace of mind.',
    rating: 5,
  },
  {
    name: 'Nodira U.',
    role: 'Property Manager, Yunusabad',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    text: 'Managing 8 properties has never been easier. The dashboard and analytics are fantastic.',
    rating: 5,
  },
]

export default function ListPropertyPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="secondary" className="mb-4">
                For Landlords
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                List Your Property on UyJoy
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Reach thousands of verified tenants. Secure payments, easy management, 
                and professional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth?mode=signup">
                  <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <p className="text-4xl font-bold">10K+</p>
                    <p className="text-white/70 text-sm">Active Tenants</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <p className="text-4xl font-bold">2K+</p>
                    <p className="text-white/70 text-sm">Monthly Bookings</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <p className="text-4xl font-bold">98%</p>
                    <p className="text-white/70 text-sm">Payment Success</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <p className="text-4xl font-bold">4.9</p>
                    <p className="text-white/70 text-sm">Landlord Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Why List on UyJoy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of landlords who trust UyJoy to find quality tenants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
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
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              How to List Your Property
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Trusted by Landlords
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to List Your Property?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Create your free account and start receiving booking requests today.
          </p>
          <Link href="/auth?mode=signup">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
