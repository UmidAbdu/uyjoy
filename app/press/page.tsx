'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Newspaper, 
  Download, 
  Mail, 
  ExternalLink,
  Calendar,
  ArrowRight
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

const pressReleases = [
  {
    date: 'January 10, 2026',
    title: 'UyJoy Launches RentRadar Analytics for Landlords',
    description: 'New AI-powered tool helps property owners optimize pricing and maximize rental income.',
  },
  {
    date: 'December 15, 2025',
    title: 'UyJoy Reaches 50,000 Registered Users',
    description: 'Uzbekistan\'s leading rental platform celebrates major milestone in its growth journey.',
  },
  {
    date: 'November 1, 2025',
    title: 'UyJoy Introduces Tenant Protection Program',
    description: 'New escrow-based payment system ensures secure transactions for all bookings.',
  },
  {
    date: 'September 5, 2025',
    title: 'UyJoy Officially Launches in Tashkent',
    description: 'Platform goes live with 2,000+ verified listings across all 11 districts.',
  },
]

const mediaFeatures = [
  {
    outlet: 'Spot.uz',
    title: 'How UyJoy is Transforming Uzbekistan\'s Rental Market',
    date: 'December 2025',
  },
  {
    outlet: 'Daryo.uz',
    title: 'Interview with UyJoy Co-founders on the Future of PropTech',
    date: 'November 2025',
  },
  {
    outlet: 'Kun.uz',
    title: 'Top 10 Startups to Watch in Uzbekistan',
    date: 'October 2025',
  },
]

const brandAssets = [
  { name: 'Logo Package (SVG, PNG)', size: '2.4 MB' },
  { name: 'Brand Guidelines', size: '1.8 MB' },
  { name: 'Product Screenshots', size: '5.2 MB' },
  { name: 'Founder Photos', size: '3.1 MB' },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Press & Media
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              UyJoy in the News
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Find the latest news, press releases, and media resources about 
              Uzbekistan&apos;s leading rental marketplace.
            </p>
            <a href="mailto:press@uyjoy.uz">
              <Button variant="secondary" leftIcon={<Mail className="w-5 h-5" />}>
                Contact Press Team
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Newspaper className="w-6 h-6 text-primary-500" />
            <h2 className="font-heading text-2xl font-bold text-gray-900">
              Press Releases
            </h2>
          </motion.div>

          <div className="space-y-4 max-w-3xl">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-600">{release.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-gray-900">
              Featured In
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sand-50 rounded-2xl p-6 hover:bg-sand-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-primary-500">{feature.outlet}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Logo Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Brand Assets
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-card mb-6">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center justify-center p-6 bg-cream-50 rounded-xl">
                    <Logo size="lg" />
                  </div>
                  <div className="flex items-center justify-center p-6 bg-primary-500 rounded-xl">
                    <Logo size="lg" variant="white" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Please use our official logos and follow our brand guidelines 
                when featuring UyJoy in your publications.
              </p>
            </motion.div>

            {/* Downloads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Downloads
              </h2>
              <div className="space-y-3">
                {brandAssets.map((asset, index) => (
                  <div
                    key={asset.name}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                        <Download className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{asset.name}</p>
                        <p className="text-xs text-gray-500">{asset.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Media Inquiries
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            For press inquiries, interviews, or additional information, 
            please contact our communications team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:press@uyjoy.uz">
              <Button variant="secondary" size="lg" leftIcon={<Mail className="w-5 h-5" />}>
                press@uyjoy.uz
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
