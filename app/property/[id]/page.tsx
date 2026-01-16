'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Share2,
  Heart,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Building,
  Calendar,
  Clock,
  Star,
  Train,
  GraduationCap,
  TreePine,
  ShoppingBag,
  Hospital,
  School,
} from 'lucide-react'
import { getPropertyById } from '@/lib/data/properties'
import { Property, districtNames, Amenity } from '@/lib/types'
import { formatPrice, formatArea, formatDistance } from '@/lib/utils/format'
import { PhotoGallery } from '@/components/property/PhotoGallery'
import { BookingWidget } from '@/components/property/BookingWidget'
import { AmenityGrid } from '@/components/property/AmenityIcon'
import { SimpleMap } from '@/components/map/PropertyMap'
import { Button } from '@/components/ui/Button'
import { Badge, VerifiedBadge, FeaturedBadge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

const nearbyIcons = {
  metro: Train,
  university: GraduationCap,
  park: TreePine,
  mall: ShoppingBag,
  hospital: Hospital,
  school: School,
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const { id } = params
  const property = getPropertyById(id)
  const [isFavorited, setIsFavorited] = useState(false)

  if (!property) {
    notFound()
  }

  const furnishedLabels = {
    unfurnished: 'Unfurnished',
    partially: 'Partially Furnished',
    fully: 'Fully Furnished',
  }

  const renovationLabels = {
    cosmetic: 'Cosmetic Repair',
    euro: 'Euro Renovation',
    designer: 'Designer Renovation',
    'needs-repair': 'Needs Repair',
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-sand-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/search"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to search</span>
            </Link>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-sand-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="p-2 hover:bg-sand-100 rounded-full transition-colors"
              >
                <Heart
                  className={cn(
                    'w-5 h-5 transition-colors',
                    isFavorited
                      ? 'fill-terracotta-400 text-terracotta-400'
                      : 'text-gray-600'
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="container-custom py-6">
        <PhotoGallery images={property.images} title={property.title} />
      </div>

      {/* Main Content */}
      <div className="container-custom pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {property.isVerified && <VerifiedBadge />}
                {property.isFeatured && <FeaturedBadge />}
                <Badge variant="secondary">{property.type}</Badge>
              </div>

              <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>
                  {property.address}, {districtNames[property.district]}
                </span>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Bed className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{property.rooms}</p>
                <p className="text-sm text-gray-500">Rooms</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Bath className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                <p className="text-sm text-gray-500">Bathrooms</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Maximize className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{property.area}</p>
                <p className="text-sm text-gray-500">m² Area</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Building className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">
                  {property.floor}/{property.totalFloors}
                </p>
                <p className="text-sm text-gray-500">Floor</p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                About this property
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-sand-200">
                <div>
                  <p className="text-sm text-gray-500">Furnished</p>
                  <p className="font-medium text-gray-900">
                    {furnishedLabels[property.furnished]}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Renovation</p>
                  <p className="font-medium text-gray-900">
                    {renovationLabels[property.renovationType]}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available from</p>
                  <p className="font-medium text-gray-900">
                    {new Date(property.availableFrom).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Minimum stay</p>
                  <p className="font-medium text-gray-900">
                    {property.minimumStay} months
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                Amenities
              </h2>
              <AmenityGrid amenities={property.amenities as Amenity[]} columns={3} />
            </motion.div>

            {/* Nearby Places */}
            {property.nearbyPlaces.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  What&apos;s Nearby
                </h2>
                <div className="space-y-3">
                  {property.nearbyPlaces.map((place, index) => {
                    const Icon = nearbyIcons[place.type]
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-sand-50 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <Icon className="w-5 h-5 text-primary-500" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{place.name}</p>
                            <p className="text-sm text-gray-500 capitalize">
                              {place.type}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {formatDistance(place.distance)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* Location Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                Location
              </h2>
              <SimpleMap
                properties={[property]}
                center={property.coordinates}
                zoom={15}
                className="h-64 md:h-80"
              />
              <p className="text-sm text-gray-500 mt-3">
                {property.address}, {districtNames[property.district]}, {property.city}
              </p>
            </motion.div>

            {/* Landlord Section (Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:hidden bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                About the Landlord
              </h2>
              <div className="flex items-center gap-4">
                <Avatar
                  src={property.landlord.avatar}
                  alt={property.landlord.name}
                  size="xl"
                  showBadge={property.landlord.isVerified}
                  badgeColor="bg-emerald-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      {property.landlord.name}
                    </span>
                    {property.landlord.isVerified && <VerifiedBadge />}
                  </div>
                  <p className="text-sm text-gray-500">
                    Member since{' '}
                    {new Date(property.landlord.memberSince).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{property.landlord.rating}</span>
                    <span className="text-gray-500">
                      ({property.landlord.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="text-center p-3 bg-sand-50 rounded-xl">
                  <p className="text-xl font-bold text-gray-900">
                    {property.landlord.responseRate}%
                  </p>
                  <p className="text-xs text-gray-500">Response rate</p>
                </div>
                <div className="text-center p-3 bg-sand-50 rounded-xl">
                  <p className="text-xl font-bold text-gray-900">
                    {property.landlord.totalListings}
                  </p>
                  <p className="text-xs text-gray-500">Properties</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingWidget property={property} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-sand-200 p-4 lg:hidden z-30">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-heading text-xl font-bold text-gray-900">
              {formatPrice(property.price)}
            </p>
            <p className="text-sm text-gray-500">per month</p>
          </div>
          <Link href={`/booking/${property.id}`} className="flex-1 max-w-xs">
            <Button fullWidth>Request to Book</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
