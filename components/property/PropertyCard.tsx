'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, MapPin, Bed, Bath, Maximize, ChevronLeft, ChevronRight } from 'lucide-react'
import { Property, districtNames } from '@/lib/types'
import { formatPrice, formatArea } from '@/lib/utils/format'
import { cn } from '@/lib/utils/cn'
import { VerifiedBadge, FeaturedBadge } from '@/components/ui/Badge'

interface PropertyCardProps {
  property: Property
  variant?: 'default' | 'compact' | 'horizontal'
  className?: string
}

export function PropertyCard({
  property,
  variant = 'default',
  className,
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorited(!isFavorited)
  }

  if (variant === 'horizontal') {
    return (
      <Link href={`/property/${property.id}`}>
        <motion.article
          whileHover={{ y: -2 }}
          className={cn(
            'flex bg-white rounded-2xl shadow-card overflow-hidden group',
            className
          )}
        >
          {/* Image */}
          <div className="relative w-72 h-48 flex-shrink-0">
            <Image
              src={property.images[0].url}
              alt={property.images[0].alt}
              fill
              className="object-cover"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {property.isVerified && <VerifiedBadge />}
              {property.isFeatured && <FeaturedBadge />}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-primary-500 transition-colors line-clamp-1">
                {property.title}
              </h3>
              <button
                onClick={toggleFavorite}
                className="p-1.5 rounded-full hover:bg-sand-100 transition-colors"
              >
                <Heart
                  className={cn(
                    'w-5 h-5 transition-colors',
                    isFavorited
                      ? 'fill-terracotta-400 text-terracotta-400'
                      : 'text-gray-400'
                  )}
                />
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
              <MapPin className="w-4 h-4" />
              <span>{districtNames[property.district]}, {property.city}</span>
            </div>

            <div className="flex items-center gap-4 text-gray-600 text-sm mb-auto">
              <span className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                {property.bedrooms} bed
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                {property.bathrooms} bath
              </span>
              <span className="flex items-center gap-1">
                <Maximize className="w-4 h-4" />
                {formatArea(property.area)}
              </span>
            </div>

            <div className="pt-3 border-t border-sand-200 mt-3">
              <span className="font-heading font-bold text-xl text-primary-600">
                {formatPrice(property.price)}
              </span>
              <span className="text-gray-500 text-sm"> /month</span>
            </div>
          </div>
        </motion.article>
      </Link>
    )
  }

  return (
    <Link href={`/property/${property.id}`}>
      <motion.article
        whileHover={{ y: -4 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(
          'bg-white rounded-2xl shadow-card overflow-hidden group',
          'transition-shadow duration-300 hover:shadow-card-hover',
          className
        )}
      >
        {/* Image Carousel */}
        <div className="relative aspect-property overflow-hidden">
          <Image
            src={property.images[currentImageIndex].url}
            alt={property.images[currentImageIndex].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Navigation Arrows */}
          {property.images.length > 1 && isHovered && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {property.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {property.images.map((_, idx) => (
                <span
                  key={idx}
                  className={cn(
                    'w-1.5 h-1.5 rounded-full transition-all',
                    idx === currentImageIndex
                      ? 'bg-white w-4'
                      : 'bg-white/60'
                  )}
                />
              ))}
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {property.isVerified && <VerifiedBadge />}
            {property.isFeatured && <FeaturedBadge />}
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
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

          {/* Price Tag */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md">
            <span className="font-heading font-bold text-primary-600">
              {formatPrice(property.price)}
            </span>
            <span className="text-gray-500 text-sm"> /mo</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1 group-hover:text-primary-500 transition-colors line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">
              {districtNames[property.district]}, {property.address.split(',')[1]}
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-600 text-sm pt-3 border-t border-sand-200">
            <span className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              {property.rooms} {property.rooms === 1 ? 'room' : 'rooms'}
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
      </motion.article>
    </Link>
  )
}
