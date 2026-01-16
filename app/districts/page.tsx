'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Home, TrendingUp, Train, GraduationCap, ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { districtData } from '@/lib/data/districts'
import { formatPrice } from '@/lib/utils/format'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function DistrictsPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">
              Explore Tashkent
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Discover Districts
            </h1>
            <p className="text-xl text-white/80">
              Explore the diverse neighborhoods of Tashkent. Each district has its own 
              unique character, amenities, and lifestyle offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districtData.map((district, index) => (
              <motion.div
                key={district.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/search?district=${district.id}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={district.image}
                        alt={district.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-bold text-white mb-1">
                          {district.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {district.propertyCount} properties available
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-gray-600 text-sm mb-4">
                        {district.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {district.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 bg-sand-100 text-sand-700 text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-4 border-t border-sand-200">
                        <div>
                          <p className="text-xs text-gray-500">Average rent</p>
                          <p className="font-semibold text-primary-600">
                            {formatPrice(district.averagePrice)}/mo
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Listings
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Find Your Ideal Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our interactive search to find properties near metros, universities, 
              shopping centers, and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/search?nearMetro=true">
              <div className="p-6 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Train className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  Near Metro
                </h3>
                <p className="text-gray-600 text-sm">
                  Find apartments within walking distance of metro stations
                </p>
              </div>
            </Link>

            <Link href="/search?nearUniversity=true">
              <div className="p-6 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group">
                <div className="w-12 h-12 bg-terracotta-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-terracotta-400" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  Near Universities
                </h3>
                <p className="text-gray-600 text-sm">
                  Student-friendly housing close to major universities
                </p>
              </div>
            </Link>

            <Link href="/search">
              <div className="p-6 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  City Center
                </h3>
                <p className="text-gray-600 text-sm">
                  Live in the heart of Tashkent with easy access to everything
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Start your search now and discover verified properties in your preferred district.
          </p>
          <Link href="/search">
            <Button variant="secondary" size="lg">
              Browse All Properties
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
