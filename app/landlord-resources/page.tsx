'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FileText, 
  Camera, 
  DollarSign, 
  Scale, 
  Users, 
  Shield,
  BookOpen,
  Video,
  Download,
  ArrowRight
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const guides = [
  {
    icon: Camera,
    title: 'Photography Guide',
    description: 'Learn how to take stunning photos that attract more tenants.',
    category: 'Getting Started',
    readTime: '5 min read',
  },
  {
    icon: DollarSign,
    title: 'Pricing Your Property',
    description: 'Set competitive prices using market data and our RentRadar tool.',
    category: 'Pricing',
    readTime: '8 min read',
  },
  {
    icon: FileText,
    title: 'Writing Great Listings',
    description: 'Craft compelling descriptions that convert views into bookings.',
    category: 'Getting Started',
    readTime: '6 min read',
  },
  {
    icon: Scale,
    title: 'Legal Requirements',
    description: 'Understanding rental contracts and Uzbekistan regulations.',
    category: 'Legal',
    readTime: '10 min read',
  },
  {
    icon: Users,
    title: 'Tenant Screening',
    description: 'How to evaluate and select the best tenants for your property.',
    category: 'Management',
    readTime: '7 min read',
  },
  {
    icon: Shield,
    title: 'Protecting Your Property',
    description: 'Best practices for security deposits and damage prevention.',
    category: 'Management',
    readTime: '5 min read',
  },
]

const resources = [
  {
    title: 'Rental Contract Template',
    description: 'Standard contract compliant with Uzbekistan Civil Code',
    type: 'PDF',
    icon: FileText,
  },
  {
    title: 'Property Checklist',
    description: 'Move-in/move-out inspection checklist',
    type: 'PDF',
    icon: FileText,
  },
  {
    title: 'Pricing Calculator',
    description: 'Calculate optimal rent based on market data',
    type: 'Tool',
    icon: DollarSign,
  },
]

const webinars = [
  {
    title: 'Maximizing Your Rental Income',
    date: 'January 25, 2026',
    duration: '45 min',
    status: 'upcoming',
  },
  {
    title: 'Legal Updates for Landlords 2026',
    date: 'January 18, 2026',
    duration: '30 min',
    status: 'recorded',
  },
  {
    title: 'Photography Masterclass',
    date: 'January 10, 2026',
    duration: '60 min',
    status: 'recorded',
  },
]

export default function LandlordResourcesPage() {
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
              Landlord Resources
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Succeed
            </h1>
            <p className="text-xl text-white/80">
              Guides, templates, and tools to help you manage your properties 
              and maximize your rental income.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                Landlord Guides
              </h2>
              <p className="text-gray-600">Expert advice to help you succeed</p>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <guide.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <Badge variant="secondary" size="sm">{guide.category}</Badge>
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>{guide.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-gray-900">
              Templates & Tools
            </h2>
            <p className="text-gray-600">Free resources to simplify your work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sand-50 rounded-2xl p-6 hover:bg-sand-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <resource.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <span className="text-xs font-medium text-primary-500 bg-primary-500/10 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center gap-1 text-primary-500 text-sm font-medium group-hover:gap-2 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-gray-900">
              Webinars & Training
            </h2>
            <p className="text-gray-600">Learn from property management experts</p>
          </motion.div>

          <div className="space-y-4 max-w-3xl">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{webinar.title}</h3>
                    <p className="text-sm text-gray-500">
                      {webinar.date} · {webinar.duration}
                    </p>
                  </div>
                </div>
                <Button 
                  variant={webinar.status === 'upcoming' ? 'primary' : 'outline'} 
                  size="sm"
                >
                  {webinar.status === 'upcoming' ? 'Register' : 'Watch'}
                </Button>
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
            Put these resources to work. Create your listing and start receiving bookings.
          </p>
          <Link href="/list-property">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              List Your Property
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
