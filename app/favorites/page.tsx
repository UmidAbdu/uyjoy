'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Heart, 
  Trash2, 
  Search, 
  ArrowRight,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Bell,
  Share2
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PropertyCard } from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'
import { Property, districtNames } from '@/lib/types'
import { formatPrice, formatArea } from '@/lib/utils/format'
import { cn } from '@/lib/utils/cn'

// Simulated favorites (in real app, this would come from user data/API)
const initialFavorites = [properties[0], properties[1], properties[3], properties[5]]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Property[]>(initialFavorites)
  const [removingId, setRemovingId] = useState<string | null>(null)

  const removeFavorite = (id: string) => {
    setRemovingId(id)
    setTimeout(() => {
      setFavorites(favorites.filter(f => f.id !== id))
      setRemovingId(null)
    }, 300)
  }

  const clearAll = () => {
    setFavorites([])
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <section className="bg-white border-b border-sand-200">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-terracotta-400/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-terracotta-400" />
              </div>
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
                  My Favorites
                </h1>
                <p className="text-gray-500">
                  {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved
                </p>
              </div>
            </div>

            {favorites.length > 0 && (
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" leftIcon={<Share2 className="w-4 h-4" />}>
                  Share List
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAll}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  Clear All
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {favorites.length > 0 ? (
            <>
              {/* Price Alert Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary-500/5 border border-primary-500/20 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Get notified about price drops</p>
                    <p className="text-sm text-gray-500">We&apos;ll alert you when prices change on your favorites</p>
                  </div>
                </div>
                <Button size="sm">Enable Alerts</Button>
              </motion.div>

              {/* Favorites Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {favorites.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        'relative group',
                        removingId === property.id && 'opacity-50 scale-95'
                      )}
                    >
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFavorite(property.id)}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>

                      <Link href={`/property/${property.id}`}>
                        <div className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-shadow">
                          {/* Image */}
                          <div className="relative aspect-property">
                            <Image
                              src={property.images[0].url}
                              alt={property.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            
                            {/* Heart Icon */}
                            <div className="absolute top-3 left-3">
                              <Heart className="w-6 h-6 fill-terracotta-400 text-terracotta-400" />
                            </div>

                            {/* Price */}
                            <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg">
                              <span className="font-heading font-bold text-primary-600">
                                {formatPrice(property.price)}
                              </span>
                              <span className="text-gray-500 text-sm"> /mo</span>
                            </div>

                            {/* Badges */}
                            <div className="absolute bottom-3 right-3 flex gap-2">
                              {property.isVerified && (
                                <Badge variant="success" size="sm">Verified</Badge>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1 line-clamp-1">
                              {property.title}
                            </h3>
                            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
                              <MapPin className="w-4 h-4" />
                              <span>{districtNames[property.district]}</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600 text-sm pt-3 border-t border-sand-200">
                              <span className="flex items-center gap-1">
                                <Bed className="w-4 h-4" />
                                {property.rooms}
                              </span>
                              <span className="flex items-center gap-1">
                                <Bath className="w-4 h-4" />
                                {property.bathrooms}
                              </span>
                              <span className="flex items-center gap-1">
                                <Maximize className="w-4 h-4" />
                                {formatArea(property.area)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Compare Section */}
              {favorites.length >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12 bg-white rounded-2xl p-6 shadow-card"
                >
                  <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                    Compare Your Favorites
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="border-b border-sand-200">
                          <th className="text-left py-3 pr-4 text-sm font-medium text-gray-500">Property</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Price</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Area</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Rooms</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">District</th>
                          <th className="text-left py-3 pl-4 text-sm font-medium text-gray-500">Price/m²</th>
                        </tr>
                      </thead>
                      <tbody>
                        {favorites.slice(0, 4).map((property) => (
                          <tr key={property.id} className="border-b border-sand-100 hover:bg-sand-50">
                            <td className="py-3 pr-4">
                              <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                  <Image
                                    src={property.images[0].url}
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span className="font-medium text-gray-900 line-clamp-1 max-w-[150px]">
                                  {property.title}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-semibold text-primary-600">
                              {formatPrice(property.price)}
                            </td>
                            <td className="py-3 px-4 text-gray-600">{formatArea(property.area)}</td>
                            <td className="py-3 px-4 text-gray-600">{property.rooms}</td>
                            <td className="py-3 px-4 text-gray-600">{districtNames[property.district]}</td>
                            <td className="py-3 pl-4 text-gray-600">{formatPrice(property.pricePerSqm)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-sand-400" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                No favorites yet
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start exploring properties and save your favorites by clicking the heart icon. 
                They&apos;ll appear here for easy comparison.
              </p>
              <Link href="/search">
                <Button size="lg" rightIcon={<Search className="w-5 h-5" />}>
                  Browse Properties
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Recently Viewed (if favorites exist) */}
      {favorites.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                You Might Also Like
              </h2>
              <Link href="/search">
                <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View All
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties
                .filter(p => !favorites.find(f => f.id === p.id))
                .slice(0, 4)
                .map((property, index) => (
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
          </div>
        </section>
      )}
    </div>
  )
}
