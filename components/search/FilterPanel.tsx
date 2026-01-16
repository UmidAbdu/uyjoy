'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/Button'
import { districtNames, District, amenityLabels, Amenity, PropertyType } from '@/lib/types'
import { formatPrice } from '@/lib/utils/format'

interface FilterPanelProps {
  filters: {
    district: string[]
    priceMin: number
    priceMax: number
    rooms: number[]
    type: string[]
    amenities: string[]
  }
  onFilterChange: (filters: FilterPanelProps['filters']) => void
  onClear: () => void
  isMobile?: boolean
  onClose?: () => void
}

const propertyTypes: { id: PropertyType; label: string }[] = [
  { id: 'apartment', label: 'Apartment' },
  { id: 'house', label: 'House' },
  { id: 'studio', label: 'Studio' },
  { id: 'room', label: 'Room' },
]

const roomOptions = [1, 2, 3, 4, 5]

const amenityOptions: { id: Amenity; label: string }[] = [
  { id: 'wifi', label: 'Wi-Fi' },
  { id: 'ac', label: 'Air Conditioning' },
  { id: 'heating', label: 'Heating' },
  { id: 'parking', label: 'Parking' },
  { id: 'elevator', label: 'Elevator' },
  { id: 'balcony', label: 'Balcony' },
  { id: 'washing-machine', label: 'Washing Machine' },
  { id: 'pet-friendly', label: 'Pet Friendly' },
  { id: 'gym', label: 'Gym' },
  { id: 'security', label: '24/7 Security' },
]

const priceRanges = [
  { min: 0, max: 3000000, label: 'Under 3M UZS' },
  { min: 3000000, max: 6000000, label: '3M - 6M UZS' },
  { min: 6000000, max: 10000000, label: '6M - 10M UZS' },
  { min: 10000000, max: 15000000, label: '10M - 15M UZS' },
  { min: 15000000, max: 25000000, label: '15M - 25M UZS' },
  { min: 25000000, max: 999999999, label: '25M+ UZS' },
]

export function FilterPanel({
  filters,
  onFilterChange,
  onClear,
  isMobile = false,
  onClose,
}: FilterPanelProps) {
  const [openSection, setOpenSection] = useState<string | null>('district')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const toggleArrayFilter = (
    key: 'district' | 'rooms' | 'type' | 'amenities',
    value: string | number
  ) => {
    const currentValues = filters[key] as (string | number)[]
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    onFilterChange({ ...filters, [key]: newValues })
  }

  const setPriceRange = (min: number, max: number) => {
    onFilterChange({ ...filters, priceMin: min, priceMax: max })
  }

  const activeFiltersCount =
    filters.district.length +
    filters.rooms.length +
    filters.type.length +
    filters.amenities.length +
    (filters.priceMin > 0 || filters.priceMax < 999999999 ? 1 : 0)

  const FilterSection = ({
    title,
    id,
    children,
  }: {
    title: string
    id: string
    children: React.ReactNode
  }) => (
    <div className="border-b border-sand-200 last:border-0">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-500 transition-transform',
            openSection === id && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {openSection === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const content = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-sand-200 mb-2">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary-500" />
          <h3 className="font-heading font-semibold text-lg">Filters</h3>
          {activeFiltersCount > 0 && (
            <span className="bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <button
              onClick={onClear}
              className="text-sm text-primary-500 hover:text-primary-600"
            >
              Clear all
            </button>
          )}
          {isMobile && onClose && (
            <button onClick={onClose} className="p-1">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
        </div>
      </div>

      {/* Districts */}
      <FilterSection title="District" id="district">
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(districtNames).map(([id, name]) => (
            <button
              key={id}
              onClick={() => toggleArrayFilter('district', id)}
              className={cn(
                'px-3 py-2 rounded-lg text-sm text-left transition-colors',
                filters.district.includes(id)
                  ? 'bg-primary-500 text-white'
                  : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range" id="price">
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={`${range.min}-${range.max}`}
              onClick={() => setPriceRange(range.min, range.max)}
              className={cn(
                'w-full px-3 py-2 rounded-lg text-sm text-left transition-colors',
                filters.priceMin === range.min && filters.priceMax === range.max
                  ? 'bg-primary-500 text-white'
                  : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Rooms */}
      <FilterSection title="Rooms" id="rooms">
        <div className="flex flex-wrap gap-2">
          {roomOptions.map((room) => (
            <button
              key={room}
              onClick={() => toggleArrayFilter('rooms', room)}
              className={cn(
                'w-12 h-12 rounded-xl text-sm font-medium transition-colors',
                filters.rooms.includes(room)
                  ? 'bg-primary-500 text-white'
                  : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
              )}
            >
              {room}+
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Property Type */}
      <FilterSection title="Property Type" id="type">
        <div className="grid grid-cols-2 gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => toggleArrayFilter('type', type.id)}
              className={cn(
                'px-3 py-2 rounded-lg text-sm transition-colors',
                filters.type.includes(type.id)
                  ? 'bg-primary-500 text-white'
                  : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
              )}
            >
              {type.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Amenities */}
      <FilterSection title="Amenities" id="amenities">
        <div className="grid grid-cols-2 gap-2">
          {amenityOptions.map((amenity) => (
            <button
              key={amenity.id}
              onClick={() => toggleArrayFilter('amenities', amenity.id)}
              className={cn(
                'px-3 py-2 rounded-lg text-sm text-left transition-colors',
                filters.amenities.includes(amenity.id)
                  ? 'bg-primary-500 text-white'
                  : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
              )}
            >
              {amenity.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Apply Button (Mobile) */}
      {isMobile && onClose && (
        <div className="pt-4 mt-4 border-t border-sand-200">
          <Button fullWidth onClick={onClose}>
            Show Results
          </Button>
        </div>
      )}
    </>
  )

  if (isMobile) {
    return (
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        className="fixed inset-y-0 left-0 w-80 bg-white shadow-float z-50 overflow-y-auto p-6"
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
      {content}
    </div>
  )
}
