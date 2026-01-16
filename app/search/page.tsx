'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, Grid, List, Map, X, ArrowUpDown } from 'lucide-react'
import { SearchBar } from '@/components/search/SearchBar'
import { FilterPanel } from '@/components/search/FilterPanel'
import { PropertyCard } from '@/components/property/PropertyCard'
import { SimpleMap } from '@/components/map/PropertyMap'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { properties as allProperties } from '@/lib/data/properties'
import { Property, districtNames, SortOption } from '@/lib/types'
import { cn } from '@/lib/utils/cn'

type ViewMode = 'grid' | 'list' | 'map'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'area-high', label: 'Size: Largest' },
  { value: 'popular', label: 'Most Popular' },
]

const defaultFilters = {
  district: [] as string[],
  priceMin: 0,
  priceMax: 999999999,
  rooms: [] as number[],
  type: [] as string[],
  amenities: [] as string[],
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  
  const [filters, setFilters] = useState(() => {
    const district = searchParams.get('district')
    return {
      ...defaultFilters,
      district: district ? [district] : [],
    }
  })

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...allProperties]

    // Apply filters
    if (filters.district.length > 0) {
      result = result.filter((p) => filters.district.includes(p.district))
    }

    if (filters.priceMin > 0) {
      result = result.filter((p) => p.price >= filters.priceMin)
    }

    if (filters.priceMax < 999999999) {
      result = result.filter((p) => p.price <= filters.priceMax)
    }

    if (filters.rooms.length > 0) {
      result = result.filter((p) => filters.rooms.some((r) => p.rooms >= r))
    }

    if (filters.type.length > 0) {
      result = result.filter((p) => filters.type.includes(p.type))
    }

    if (filters.amenities.length > 0) {
      result = result.filter((p) =>
        filters.amenities.every((a) => p.amenities.includes(a as any))
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'area-high':
        result.sort((a, b) => b.area - a.area)
        break
      case 'popular':
        result.sort((a, b) => b.views - a.views)
        break
      case 'newest':
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    }

    return result
  }, [filters, sortBy])

  const activeFiltersCount =
    filters.district.length +
    filters.rooms.length +
    filters.type.length +
    filters.amenities.length +
    (filters.priceMin > 0 || filters.priceMax < 999999999 ? 1 : 0)

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Search Header */}
      <div className="bg-white border-b border-sand-200 sticky top-16 md:top-20 z-30">
        <div className="container-custom py-4">
          {/* Search Bar */}
          <div className="mb-4">
            <SearchBar
              variant="inline"
              defaultValues={{
                location: filters.district[0] || '',
              }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-sand-100 rounded-xl text-sm font-medium"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="bg-primary-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Results Count */}
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredProperties.length}
                </span>{' '}
                properties found
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-sand-200 rounded-xl text-sm font-medium hover:bg-sand-50 transition-colors"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {sortOptions.find((o) => o.value === sortBy)?.label}
                  </span>
                </button>

                <AnimatePresence>
                  {isSortOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsSortOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-card border border-sand-200 overflow-hidden z-20"
                      >
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value)
                              setIsSortOpen(false)
                            }}
                            className={cn(
                              'w-full px-4 py-2.5 text-left text-sm hover:bg-sand-50 transition-colors',
                              sortBy === option.value
                                ? 'text-primary-500 font-medium bg-primary-500/5'
                                : 'text-gray-700'
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-sand-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    viewMode === 'grid'
                      ? 'bg-white shadow-sm text-primary-500'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    viewMode === 'list'
                      ? 'bg-white shadow-sm text-primary-500'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    viewMode === 'map'
                      ? 'bg-white shadow-sm text-primary-500'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {filters.district.map((d) => (
                <Badge
                  key={d}
                  variant="primary"
                  className="cursor-pointer"
                  icon={
                    <X
                      className="w-3 h-3"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          district: filters.district.filter((x) => x !== d),
                        })
                      }
                    />
                  }
                >
                  {districtNames[d as keyof typeof districtNames]}
                </Badge>
              ))}
              {filters.type.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="cursor-pointer"
                  icon={
                    <X
                      className="w-3 h-3"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          type: filters.type.filter((x) => x !== t),
                        })
                      }
                    />
                  }
                >
                  {t}
                </Badge>
              ))}
              {filters.rooms.map((r) => (
                <Badge
                  key={r}
                  variant="secondary"
                  className="cursor-pointer"
                  icon={
                    <X
                      className="w-3 h-3"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          rooms: filters.rooms.filter((x) => x !== r),
                        })
                      }
                    />
                  }
                >
                  {r}+ rooms
                </Badge>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-primary-500 hover:text-primary-600 font-medium"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar (Desktop) */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              onClear={clearFilters}
            />
          </aside>

          {/* Results */}
          <main className="flex-1">
            {viewMode === 'map' ? (
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto hide-scrollbar pr-2">
                  {filteredProperties.map((property) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <PropertyCard
                        property={property}
                        variant="horizontal"
                        className={cn(
                          selectedProperty === property.id &&
                            'ring-2 ring-primary-500'
                        )}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="sticky top-32 h-[calc(100vh-200px)]">
                  <SimpleMap
                    properties={filteredProperties}
                    selectedProperty={selectedProperty}
                    onPropertySelect={setSelectedProperty}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <div
                className={cn(
                  'grid gap-6',
                  viewMode === 'grid'
                    ? 'md:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-1'
                )}
              >
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <PropertyCard
                        property={property}
                        variant={viewMode === 'list' ? 'horizontal' : 'default'}
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center">
                    <div className="w-20 h-20 bg-sand-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SlidersHorizontal className="w-8 h-8 text-sand-500" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                      No properties found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your filters or search criteria
                    </p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              onClear={clearFilters}
              isMobile
              onClose={() => setIsFilterOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
