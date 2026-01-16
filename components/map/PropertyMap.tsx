'use client'

import { useEffect, useState } from 'react'
import { Property, districtNames } from '@/lib/types'
import { formatPrice } from '@/lib/utils/format'
import { cn } from '@/lib/utils/cn'

interface PropertyMapProps {
  properties: Property[]
  selectedProperty?: string | null
  onPropertySelect?: (id: string) => void
  className?: string
  center?: { lat: number; lng: number }
  zoom?: number
}

// Tashkent center coordinates
const TASHKENT_CENTER = { lat: 41.2995, lng: 69.2401 }
const DEFAULT_ZOOM = 12

export function PropertyMap({
  properties,
  selectedProperty,
  onPropertySelect,
  className,
  center = TASHKENT_CENTER,
  zoom = DEFAULT_ZOOM,
}: PropertyMapProps) {
  const [MapComponent, setMapComponent] = useState<React.ComponentType<any> | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Dynamically import Leaflet components
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
      import('leaflet/dist/leaflet.css'),
    ]).then(([reactLeaflet, L]) => {
      // Fix default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      // Create the map component
      const { MapContainer, TileLayer, Marker, Popup } = reactLeaflet

      const Map = () => (
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={zoom}
          className="w-full h-full rounded-2xl"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {properties.map((property) => (
            <Marker
              key={property.id}
              position={[property.coordinates.lat, property.coordinates.lng]}
              eventHandlers={{
                click: () => onPropertySelect?.(property.id),
              }}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <div
                    className="w-full h-24 bg-cover bg-center rounded-lg mb-2"
                    style={{ backgroundImage: `url(${property.images[0].url})` }}
                  />
                  <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    {districtNames[property.district]}
                  </p>
                  <p className="font-bold text-primary-600">
                    {formatPrice(property.price)}/mo
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )

      setMapComponent(() => Map)
    })
  }, [properties, center, zoom, onPropertySelect])

  if (!isClient) {
    return (
      <div className={cn('bg-sand-100 rounded-2xl animate-pulse', className)}>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Loading map...
        </div>
      </div>
    )
  }

  if (!MapComponent) {
    return (
      <div className={cn('bg-sand-100 rounded-2xl', className)}>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Loading map...
        </div>
      </div>
    )
  }

  return (
    <div className={cn('rounded-2xl overflow-hidden shadow-card', className)}>
      <MapComponent />
    </div>
  )
}

// Simple fallback map with markers as divs (no Leaflet required)
export function SimpleMap({
  properties,
  selectedProperty,
  onPropertySelect,
  className,
}: PropertyMapProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-primary-500/5 to-sand-200 rounded-2xl relative overflow-hidden',
        className
      )}
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,77,77,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,77,77,.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Map placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-8 h-8 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Interactive Map</p>
          <p className="text-sm text-gray-500">{properties.length} properties in this area</p>
        </div>
      </div>

      {/* Property markers simulation */}
      <div className="absolute inset-0 p-4">
        {properties.slice(0, 8).map((property, index) => {
          // Generate pseudo-random positions based on coordinates
          const left = ((property.coordinates.lng - 69.1) / 0.3) * 80 + 10
          const top = ((41.4 - property.coordinates.lat) / 0.2) * 80 + 10
          
          return (
            <button
              key={property.id}
              onClick={() => onPropertySelect?.(property.id)}
              style={{
                left: `${Math.max(10, Math.min(80, left))}%`,
                top: `${Math.max(10, Math.min(80, top))}%`,
              }}
              className={cn(
                'absolute transform -translate-x-1/2 -translate-y-1/2',
                'bg-white px-2 py-1 rounded-full shadow-md text-xs font-semibold',
                'hover:scale-110 transition-transform cursor-pointer',
                selectedProperty === property.id
                  ? 'bg-primary-500 text-white ring-2 ring-primary-300'
                  : 'text-primary-600 hover:bg-primary-50'
              )}
            >
              {formatPrice(property.price, 'UZS').replace(' UZS', '').replace(/\s/g, '')}
            </button>
          )
        })}
      </div>
    </div>
  )
}
