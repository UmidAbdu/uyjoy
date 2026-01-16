'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2, Grid } from 'lucide-react'
import { PropertyImage } from '@/lib/types'
import { cn } from '@/lib/utils/cn'

interface PhotoGalleryProps {
  images: PropertyImage[]
  title: string
}

export function PhotoGallery({ images, title }: PhotoGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrev()
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 rounded-2xl overflow-hidden">
          {/* Main Image */}
          <button
            onClick={() => openLightbox(0)}
            className="md:col-span-2 md:row-span-2 relative aspect-property md:aspect-auto md:h-full group"
          >
            <Image
              src={images[0].url}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              <Maximize2 className="w-4 h-4" />
              View Photos
            </div>
          </button>

          {/* Secondary Images */}
          {images.slice(1, 5).map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index + 1)}
              className={cn(
                'relative aspect-property group',
                index >= 2 && 'hidden md:block'
              )}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          ))}

          {/* View All Photos Button */}
          {images.length > 5 && (
            <button
              onClick={() => openLightbox(0)}
              className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-medium shadow-md hover:bg-white transition-colors flex items-center gap-2"
            >
              <Grid className="w-4 h-4" />
              View all {images.length} photos
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
              <h3 className="text-white font-medium">{title}</h3>
              <div className="flex items-center gap-4">
                <span className="text-white/70 text-sm">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-16">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex justify-center gap-2 overflow-x-auto hide-scrollbar pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all',
                      currentIndex === index
                        ? 'ring-2 ring-white opacity-100'
                        : 'opacity-50 hover:opacity-75'
                    )}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
