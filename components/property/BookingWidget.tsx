'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, Shield, ChevronDown, Info } from 'lucide-react'
import { Property } from '@/lib/types'
import { formatPrice } from '@/lib/utils/format'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { VerifiedBadge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils/cn'

interface BookingWidgetProps {
  property: Property
  className?: string
}

export function BookingWidget({ property, className }: BookingWidgetProps) {
  const [moveInDate, setMoveInDate] = useState('')
  const [duration, setDuration] = useState(12)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const serviceFee = Math.round(property.price * 0.15)
  const total = property.price + serviceFee

  const durations = [
    { value: 3, label: '3 months' },
    { value: 6, label: '6 months' },
    { value: 12, label: '12 months' },
    { value: 24, label: '24 months' },
  ]

  return (
    <div className={cn('bg-white rounded-2xl shadow-card p-6', className)}>
      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-3xl font-bold text-gray-900">
            {formatPrice(property.price)}
          </span>
          <span className="text-gray-500">/month</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {formatPrice(property.pricePerSqm)}/m² · {property.area} m²
        </p>
      </div>

      {/* Move-in Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Move-in Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="date"
            value={moveInDate}
            onChange={(e) => setMoveInDate(e.target.value)}
            min={property.availableFrom}
            className="w-full pl-10 pr-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1.5">
          Available from {new Date(property.availableFrom).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rental Duration
        </label>
        <div className="grid grid-cols-4 gap-2">
          {durations.map((d) => (
            <button
              key={d.value}
              onClick={() => setDuration(d.value)}
              disabled={d.value < property.minimumStay}
              className={cn(
                'py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                duration === d.value
                  ? 'bg-primary-500 text-white'
                  : d.value < property.minimumStay
                  ? 'bg-sand-100 text-gray-400 cursor-not-allowed'
                  : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1.5">
          Minimum stay: {property.minimumStay} months
        </p>
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-sand-200 pt-4 mb-6">
        <button
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full flex items-center justify-between text-sm"
        >
          <span className="font-medium text-gray-700">Price breakdown</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 text-gray-500 transition-transform',
              isDetailsOpen && 'rotate-180'
            )}
          />
        </button>

        {isDetailsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-3 space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Monthly rent</span>
              <span className="text-gray-900">{formatPrice(property.price)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 flex items-center gap-1">
                UyJoy service fee
                <Info className="w-3.5 h-3.5 text-gray-400" />
              </span>
              <span className="text-gray-900">{formatPrice(serviceFee)}</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-sand-200">
              <span className="font-medium text-gray-900">First payment</span>
              <span className="font-bold text-gray-900">{formatPrice(total)}</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Book Button */}
      <Link href={`/booking/${property.id}`}>
        <Button fullWidth size="lg">
          Request to Book
        </Button>
      </Link>

      {/* Protection Notice */}
      <div className="mt-4 p-3 bg-primary-500/5 rounded-xl">
        <div className="flex items-start gap-2">
          <Shield className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-primary-700">
              Tenant Protection Included
            </p>
            <p className="text-xs text-primary-600/70 mt-0.5">
              Full refund if the property differs from listing
            </p>
          </div>
        </div>
      </div>

      {/* Landlord Info */}
      <div className="mt-6 pt-6 border-t border-sand-200">
        <div className="flex items-center gap-3">
          <Avatar
            src={property.landlord.avatar}
            alt={property.landlord.name}
            size="lg"
            showBadge={property.landlord.isVerified}
            badgeColor="bg-emerald-500"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">
                {property.landlord.name}
              </span>
              {property.landlord.isVerified && <VerifiedBadge />}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Responds {property.landlord.responseTime}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-sand-50 rounded-xl">
            <p className="text-2xl font-bold text-gray-900">
              {property.landlord.rating}
            </p>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
          <div className="text-center p-3 bg-sand-50 rounded-xl">
            <p className="text-2xl font-bold text-gray-900">
              {property.landlord.responseRate}%
            </p>
            <p className="text-xs text-gray-500">Response rate</p>
          </div>
        </div>

        <Button variant="outline" fullWidth className="mt-4">
          Contact Landlord
        </Button>
      </div>
    </div>
  )
}
