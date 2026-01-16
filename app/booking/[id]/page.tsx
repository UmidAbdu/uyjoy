'use client'

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Shield,
  CheckCircle,
  CreditCard,
  ChevronRight,
  Info,
  Lock,
  Smartphone,
} from 'lucide-react'
import { getPropertyById } from '@/lib/data/properties'
import { districtNames } from '@/lib/types'
import { formatPrice } from '@/lib/utils/format'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils/cn'

const paymentMethods = [
  {
    id: 'payme',
    name: 'Payme',
    icon: '💳',
    description: 'Pay with Uzcard, Humo, or Visa',
    popular: true,
  },
  {
    id: 'click',
    name: 'Click',
    icon: '📱',
    description: 'Mobile banking payment',
    popular: false,
  },
  {
    id: 'uzcard',
    name: 'Uzcard/Humo',
    icon: '💳',
    description: 'Direct card payment',
    popular: false,
  },
  {
    id: 'visa',
    name: 'Visa/Mastercard',
    icon: '💳',
    description: 'International cards',
    popular: false,
  },
]

export default function BookingPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()
  const property = getPropertyById(id)

  const [step, setStep] = useState(1)
  const [moveInDate, setMoveInDate] = useState('')
  const [duration, setDuration] = useState(12)
  const [message, setMessage] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('payme')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  if (!property) {
    notFound()
  }

  const serviceFee = Math.round(property.price * 0.15)
  const total = property.price + serviceFee

  const durations = [
    { value: 6, label: '6 months' },
    { value: 12, label: '12 months' },
    { value: 24, label: '24 months' },
  ]

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-cream-50 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-4 bg-white rounded-2xl p-8 shadow-card text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </motion.div>

          <h1 className="font-heading text-2xl font-bold text-gray-900 mb-3">
            Booking Request Sent!
          </h1>
          <p className="text-gray-600 mb-6">
            Your booking request has been sent to the landlord. They will respond
            within 48 hours.
          </p>

          <div className="bg-sand-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Booking Reference</p>
            <p className="font-mono font-bold text-lg text-gray-900">
              UJ-{Date.now().toString().slice(-8)}
            </p>
          </div>

          <div className="space-y-3">
            <Link href={`/property/${property.id}`}>
              <Button fullWidth variant="outline">
                View Property
              </Button>
            </Link>
            <Link href="/search">
              <Button fullWidth>Browse More Properties</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-sand-200">
        <div className="container-custom py-4">
          <Link
            href={`/property/${property.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to property
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors',
                    step >= s
                      ? 'bg-primary-500 text-white'
                      : 'bg-sand-200 text-gray-500'
                  )}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      'w-16 md:w-24 h-1 mx-2 rounded-full transition-colors',
                      step > s ? 'bg-primary-500' : 'bg-sand-200'
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Booking Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h2 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Booking Details
                  </h2>

                  {/* Move-in Date */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When would you like to move in?
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={moveInDate}
                        onChange={(e) => setMoveInDate(e.target.value)}
                        min={property.availableFrom}
                        className="w-full pl-10 pr-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                      Available from{' '}
                      {new Date(property.availableFrom).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How long do you plan to stay?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {durations.map((d) => (
                        <button
                          key={d.value}
                          onClick={() => setDuration(d.value)}
                          disabled={d.value < property.minimumStay}
                          className={cn(
                            'py-3 px-4 rounded-xl font-medium transition-colors',
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

                  {/* Message */}
                  <div className="mb-6">
                    <Textarea
                      label="Message to landlord (optional)"
                      placeholder="Introduce yourself and tell the landlord why you're interested in this property..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button
                    fullWidth
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!moveInDate}
                    rightIcon={<ChevronRight className="w-5 h-5" />}
                  >
                    Continue
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Personal Info */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h2 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Your Information
                  </h2>

                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      leftIcon={<Smartphone className="w-5 h-5" />}
                      required
                    />
                  </div>

                  <div className="mt-6 p-4 bg-sand-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Verification required
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          You&apos;ll need to verify your phone number and ID before
                          the booking is confirmed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      fullWidth
                      size="lg"
                      onClick={() => setStep(3)}
                      disabled={!formData.name || !formData.email || !formData.phone}
                      rightIcon={<ChevronRight className="w-5 h-5" />}
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h2 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Payment Method
                  </h2>

                  <div className="space-y-3 mb-6">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={cn(
                          'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors text-left',
                          paymentMethod === method.id
                            ? 'border-primary-500 bg-primary-500/5'
                            : 'border-sand-200 hover:border-sand-300'
                        )}
                      >
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {method.name}
                            </span>
                            {method.popular && (
                              <Badge variant="primary" size="sm">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                        <div
                          className={cn(
                            'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                            paymentMethod === method.id
                              ? 'border-primary-500'
                              : 'border-sand-300'
                          )}
                        >
                          {paymentMethod === method.id && (
                            <div className="w-3 h-3 rounded-full bg-primary-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Security Notice */}
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl mb-6">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-emerald-700">
                          Secure Payment
                        </p>
                        <p className="text-xs text-emerald-600 mt-1">
                          Your payment is protected by UyJoy&apos;s escrow system.
                          Funds are only released to the landlord after you confirm
                          successful move-in.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 mb-6">
                    By clicking &quot;Confirm Booking&quot;, you agree to UyJoy&apos;s{' '}
                    <Link href="/terms" className="text-primary-500 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      fullWidth
                      size="lg"
                      onClick={handleSubmit}
                      isLoading={isSubmitting}
                      leftIcon={<Lock className="w-5 h-5" />}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-heading font-semibold text-gray-900 mb-4">
                  Order Summary
                </h3>

                {/* Property Preview */}
                <div className="flex gap-3 pb-4 border-b border-sand-200 mb-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={property.images[0].url}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                      {property.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {districtNames[property.district]}
                    </p>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-3 pb-4 border-b border-sand-200 mb-4">
                  {moveInDate && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Move-in date</span>
                      <span className="text-gray-900">
                        {new Date(moveInDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="text-gray-900">{duration} months</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pb-4 border-b border-sand-200 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly rent</span>
                    <span className="text-gray-900">{formatPrice(property.price)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-1">
                      Service fee (15%)
                      <Info className="w-3.5 h-3.5 text-gray-400" />
                    </span>
                    <span className="text-gray-900">{formatPrice(serviceFee)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">First payment</span>
                  <span className="font-heading text-xl font-bold text-primary-600">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* Protection Badge */}
                <div className="mt-4 p-3 bg-primary-500/5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-medium text-primary-700">
                      Tenant Protection Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
