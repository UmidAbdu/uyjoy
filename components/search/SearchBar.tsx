'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Search, MapPin, Calendar, ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { districtNames, District } from '@/lib/types'

interface SearchBarProps {
  variant?: 'hero' | 'compact' | 'inline'
  className?: string
  defaultValues?: {
    location?: string
    moveIn?: string
  }
}

const districts = Object.entries(districtNames).map(([id, name]) => ({
  id: id as District,
  name,
}))

export function SearchBar({
  variant = 'hero',
  className,
  defaultValues,
}: SearchBarProps) {
  const router = useRouter()
  const [location, setLocation] = useState(defaultValues?.location || '')
  const [moveIn, setMoveIn] = useState(defaultValues?.moveIn || '')
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location) params.set('district', location)
    if (moveIn) params.set('moveIn', moveIn)
    router.push(`/search?${params.toString()}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'flex items-center bg-white rounded-full shadow-card border border-sand-200 p-1.5',
          className
        )}
      >
        <div className="flex items-center gap-2 px-4 flex-1">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent text-sm outline-none w-full placeholder:text-gray-400"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors"
        >
          Search
        </button>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div
        className={cn(
          'flex items-center gap-4 bg-white rounded-xl shadow-card p-2',
          className
        )}
      >
        <div className="flex items-center gap-2 px-3 flex-1 border-r border-sand-200">
          <MapPin className="w-5 h-5 text-primary-500" />
          <input
            type="text"
            placeholder="Where do you want to live?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent outline-none w-full placeholder:text-gray-400"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center gap-2"
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    )
  }

  // Hero variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={cn(
        'bg-white/95 backdrop-blur-xl rounded-2xl shadow-float p-2 md:p-3',
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-0">
        {/* Location Input */}
        <div className="flex-1 relative">
          <div
            className={cn(
              'flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl cursor-pointer hover:bg-sand-50 transition-colors',
              isLocationOpen && 'bg-sand-50'
            )}
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Location
              </p>
              <div className="flex items-center justify-between">
                <span className={cn('text-gray-900', !location && 'text-gray-400')}>
                  {location
                    ? districts.find((d) => d.id === location)?.name
                    : 'Select district'}
                </span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-gray-400 transition-transform',
                    isLocationOpen && 'rotate-180'
                  )}
                />
              </div>
            </div>
          </div>

          {/* Dropdown */}
          {isLocationOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-float border border-sand-200 p-2 z-50 max-h-64 overflow-y-auto"
            >
              {location && (
                <button
                  onClick={() => {
                    setLocation('')
                    setIsLocationOpen(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-left hover:bg-sand-50 text-gray-500 text-sm"
                >
                  <X className="w-4 h-4" />
                  Clear selection
                </button>
              )}
              {districts.map((district) => (
                <button
                  key={district.id}
                  onClick={() => {
                    setLocation(district.id)
                    setIsLocationOpen(false)
                  }}
                  className={cn(
                    'w-full px-4 py-2.5 rounded-lg text-left hover:bg-sand-50 transition-colors',
                    location === district.id
                      ? 'bg-primary-500/5 text-primary-600 font-medium'
                      : 'text-gray-700'
                  )}
                >
                  {district.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-sand-200 my-3" />

        {/* Move-in Date */}
        <div className="flex-1">
          <div className="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl hover:bg-sand-50 transition-colors">
            <div className="w-10 h-10 bg-terracotta-400/10 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-terracotta-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Move-in Date
              </p>
              <input
                type="date"
                value={moveIn}
                onChange={(e) => setMoveIn(e.target.value)}
                className="bg-transparent outline-none text-gray-900 w-full cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="p-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSearch}
            className="w-full md:w-auto bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Search className="w-5 h-5" />
            Search
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
