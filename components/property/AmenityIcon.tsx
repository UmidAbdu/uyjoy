import {
  Wifi,
  Wind,
  Flame,
  WashingMachine,
  Tv,
  Columns,
  Car,
  Building,
  Shield,
  Dumbbell,
  Waves,
  PawPrint,
  Sofa,
  UtensilsCrossed,
  Refrigerator,
  LucideIcon,
} from 'lucide-react'
import { Amenity, amenityLabels } from '@/lib/types'
import { cn } from '@/lib/utils/cn'

const amenityIcons: Record<Amenity, LucideIcon> = {
  wifi: Wifi,
  ac: Wind,
  heating: Flame,
  'washing-machine': WashingMachine,
  dishwasher: Waves,
  tv: Tv,
  balcony: Columns,
  parking: Car,
  elevator: Building,
  security: Shield,
  gym: Dumbbell,
  pool: Waves,
  'pet-friendly': PawPrint,
  furnished: Sofa,
  kitchen: UtensilsCrossed,
  refrigerator: Refrigerator,
}

interface AmenityIconProps {
  amenity: Amenity
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: { icon: 'w-4 h-4', text: 'text-xs', container: 'gap-1.5' },
  md: { icon: 'w-5 h-5', text: 'text-sm', container: 'gap-2' },
  lg: { icon: 'w-6 h-6', text: 'text-base', container: 'gap-2.5' },
}

export function AmenityIcon({
  amenity,
  showLabel = true,
  size = 'md',
  className,
}: AmenityIconProps) {
  const Icon = amenityIcons[amenity]
  const label = amenityLabels[amenity]
  const { icon, text, container } = sizeClasses[size]

  return (
    <div
      className={cn(
        'flex items-center text-gray-600',
        container,
        className
      )}
    >
      <Icon className={cn(icon, 'text-primary-500')} />
      {showLabel && <span className={text}>{label}</span>}
    </div>
  )
}

interface AmenityGridProps {
  amenities: Amenity[]
  columns?: 2 | 3 | 4
  className?: string
}

export function AmenityGrid({
  amenities,
  columns = 2,
  className,
}: AmenityGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }

  return (
    <div className={cn('grid gap-4', gridCols[columns], className)}>
      {amenities.map((amenity) => (
        <div
          key={amenity}
          className="flex items-center gap-3 p-3 bg-sand-50 rounded-xl"
        >
          <AmenityIcon amenity={amenity} size="md" />
        </div>
      ))}
    </div>
  )
}
