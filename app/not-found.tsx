'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        {/* Animated House */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-primary-500/10 rounded-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 text-primary-500"
              fill="currentColor"
            >
              {/* House shape */}
              <path
                d="M50 15L10 45V85H40V60H60V85H90V45L50 15Z"
                className="opacity-20"
              />
              <path
                d="M50 15L10 45V85H40V60H60V85H90V45L50 15Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Question mark */}
              <text
                x="50"
                y="65"
                fontSize="30"
                textAnchor="middle"
                className="font-bold"
              >
                ?
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Text */}
        <h1 className="font-heading text-4xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you&apos;re looking for seems to have moved or doesn&apos;t
          exist. Let&apos;s help you find your way home.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button leftIcon={<Home className="w-4 h-4" />}>
              Go to Homepage
            </Button>
          </Link>
          <Link href="/search">
            <Button variant="outline" leftIcon={<Search className="w-4 h-4" />}>
              Browse Properties
            </Button>
          </Link>
        </div>

        {/* Back link */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 text-sm text-gray-500 hover:text-primary-500 transition-colors flex items-center justify-center gap-1 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back to previous page
        </button>
      </motion.div>
    </div>
  )
}
