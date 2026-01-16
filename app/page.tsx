'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, Clock, Star, Building2, Users, TrendingUp } from 'lucide-react'
import { SearchBar } from '@/components/search/SearchBar'
import { PropertyCard } from '@/components/property/PropertyCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { getFeaturedProperties, getLatestProperties } from '@/lib/data/properties'
import { getPopularDistricts } from '@/lib/data/districts'
import { formatPrice } from '@/lib/utils/format'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const trustFeatures = [
  {
    icon: Shield,
    title: 'Tenant Protection',
    description: 'Full refund if the property differs from the listing',
  },
  {
    icon: CheckCircle,
    title: 'Verified Listings',
    description: 'All properties verified by our team',
  },
  {
    icon: Clock,
    title: '48h Guarantee',
    description: 'Move-in verification with payment protection',
  },
]

const stats = [
  { value: '10,000+', label: 'Active Listings', icon: Building2 },
  { value: '50,000+', label: 'Happy Tenants', icon: Users },
  { value: '98%', label: 'Satisfaction Rate', icon: TrendingUp },
]

export default function HomePage() {
  const featuredProperties = getFeaturedProperties()
  const latestProperties = getLatestProperties(4)
  const popularDistricts = getPopularDistricts()

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-sand-100 to-cream-100" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-terracotta-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="terracotta" className="mb-6">
                  <Star className="w-3 h-3" />
                  #1 Housing Platform in Uzbekistan
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Find Your Perfect
                <span className="text-gradient block">Home in Tashkent</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
              >
                Discover verified apartments, houses, and rooms with secure payments
                and tenant protection. Your dream home is just a click away.
              </motion.p>

              {/* Search Bar */}
              <motion.div variants={fadeInUp} className="mb-8">
                <SearchBar variant="hero" />
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-6"
              >
                {trustFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative h-[600px]">
                {/* Main Image */}
                <div className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-float">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=800&fit=crop"
                    alt="Modern apartment interior"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary Image */}
                <div className="absolute bottom-0 left-0 w-72 h-80 rounded-3xl overflow-hidden shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=600&fit=crop"
                    alt="Luxury living room"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute top-1/2 left-1/4 bg-white rounded-2xl shadow-card p-4 w-64"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Booking Confirmed!</p>
                      <p className="text-xs text-gray-500">2-room apartment, Yunusabad</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Just now</div>
                </motion.div>

                {/* Stats Card */}
                <div className="absolute bottom-20 right-20 bg-primary-500 text-white rounded-2xl p-4 shadow-float">
                  <p className="text-3xl font-bold">4.9</p>
                  <div className="flex gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">2,000+ reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-sand-200">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-primary-500" />
                </div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <Badge variant="primary" className="mb-3">Featured</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                Hand-Picked Properties
              </h2>
              <p className="text-gray-600 mt-2">
                Curated selection of the best rentals in Tashkent
              </p>
            </div>
            <Link href="/search?featured=true" className="hidden md:block">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 6).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/search?featured=true">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Districts */}
      <section id="districts" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">Explore</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Districts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the best neighborhoods in Tashkent, each with its unique character and amenities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDistricts.map((district, index) => (
              <motion.div
                key={district.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/search?district=${district.id}`}>
                  <div className="group relative h-72 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                    <Image
                      src={district.image}
                      alt={district.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-heading font-bold text-xl mb-1">
                        {district.name}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">
                        {district.propertyCount} properties
                      </p>
                      <p className="text-white/60 text-sm">
                        From {formatPrice(district.averagePrice * 0.5)}/mo
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Your Safety is Our Priority
              </h2>
              <p className="text-white/80 text-lg mb-8">
                UyJoy&apos;s Tenant Protection Program ensures every booking is secure.
                We verify all listings and hold payments in escrow until you&apos;re
                happy with your new home.
              </p>

              <div className="space-y-4">
                {[
                  'ID verification for all landlords',
                  'Property documents checked',
                  '48-hour move-in guarantee',
                  'Full refund if listing misrepresented',
                  '24/7 support in Uzbek, Russian & English',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-terracotta-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/tenant-protection" className="inline-block mt-8">
                <Button
                  variant="secondary"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl">
                      Tenant Protection
                    </h3>
                    <p className="text-white/70">Included with every booking</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Payment Protection</span>
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-sm text-white/60">
                      Money held safely until you move in
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Verified Listing</span>
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-sm text-white/60">
                      Property details confirmed by our team
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">48h Guarantee</span>
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-sm text-white/60">
                      Report issues within 48 hours of move-in
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Properties */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <Badge variant="success" className="mb-3">New</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                Just Listed
              </h2>
              <p className="text-gray-600 mt-2">
                Fresh properties added to UyJoy
              </p>
            </div>
            <Link href="/search?sort=newest" className="hidden md:block">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {latestProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} variant="horizontal" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sand-200 to-cream-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Find Your New Home?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join thousands of happy tenants who found their perfect place through UyJoy.
              Start your search today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/search">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Searching
                </Button>
              </Link>
              <Link href="/auth?mode=signup">
                <Button variant="outline" size="lg">
                  List Your Property
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
