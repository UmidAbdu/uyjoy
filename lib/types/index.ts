// Property Types
export interface Property {
  id: string
  title: string
  slug: string
  description: string
  type: PropertyType
  status: PropertyStatus
  
  // Location
  address: string
  district: District
  city: string
  coordinates: {
    lat: number
    lng: number
  }
  nearbyPlaces: NearbyPlace[]
  
  // Details
  price: number
  pricePerSqm: number
  currency: 'UZS' | 'USD'
  area: number
  rooms: number
  bedrooms: number
  bathrooms: number
  floor: number
  totalFloors: number
  
  // Features
  amenities: Amenity[]
  furnished: FurnishedLevel
  renovationType: RenovationType
  
  // Media
  images: PropertyImage[]
  videoTour?: string
  virtualTour?: string
  
  // Landlord
  landlord: Landlord
  
  // Meta
  views: number
  favorites: number
  isVerified: boolean
  isFeatured: boolean
  availableFrom: string
  minimumStay: number // in months
  createdAt: string
  updatedAt: string
}

export type PropertyType = 'apartment' | 'house' | 'studio' | 'room'

export type PropertyStatus = 'available' | 'booked' | 'unavailable'

export type District = 
  | 'mirabad'
  | 'yunusabad'
  | 'chilanzar'
  | 'sergeli'
  | 'yakkasaray'
  | 'shayhontohur'
  | 'almazar'
  | 'bektemir'
  | 'mirzo-ulugbek'
  | 'olmazor'
  | 'uchtepa'

export const districtNames: Record<District, string> = {
  mirabad: 'Mirabad',
  yunusabad: 'Yunusabad',
  chilanzar: 'Chilanzar',
  sergeli: 'Sergeli',
  yakkasaray: 'Yakkasaray',
  shayhontohur: 'Shaykhontohur',
  almazar: 'Almazar',
  bektemir: 'Bektemir',
  'mirzo-ulugbek': 'Mirzo Ulugbek',
  olmazor: 'Olmazor',
  uchtepa: 'Uchtepa',
}

export interface NearbyPlace {
  name: string
  type: 'metro' | 'university' | 'park' | 'mall' | 'hospital' | 'school'
  distance: number // in meters
}

export type Amenity = 
  | 'wifi'
  | 'ac'
  | 'heating'
  | 'washing-machine'
  | 'dishwasher'
  | 'tv'
  | 'balcony'
  | 'parking'
  | 'elevator'
  | 'security'
  | 'gym'
  | 'pool'
  | 'pet-friendly'
  | 'furnished'
  | 'kitchen'
  | 'refrigerator'

export const amenityLabels: Record<Amenity, string> = {
  wifi: 'Wi-Fi',
  ac: 'Air Conditioning',
  heating: 'Heating',
  'washing-machine': 'Washing Machine',
  dishwasher: 'Dishwasher',
  tv: 'TV',
  balcony: 'Balcony',
  parking: 'Parking',
  elevator: 'Elevator',
  security: '24/7 Security',
  gym: 'Gym',
  pool: 'Pool',
  'pet-friendly': 'Pet Friendly',
  furnished: 'Furnished',
  kitchen: 'Kitchen',
  refrigerator: 'Refrigerator',
}

export type FurnishedLevel = 'unfurnished' | 'partially' | 'fully'

export type RenovationType = 'cosmetic' | 'euro' | 'designer' | 'needs-repair'

export interface PropertyImage {
  id: string
  url: string
  alt: string
  isPrimary: boolean
}

// Landlord Types
export interface Landlord {
  id: string
  name: string
  avatar?: string
  phone?: string
  isVerified: boolean
  responseRate: number // percentage
  responseTime: string // e.g., "within 1 hour"
  memberSince: string
  totalListings: number
  rating: number
  reviewCount: number
}

// Search & Filter Types
export interface SearchFilters {
  query?: string
  district?: District[]
  priceMin?: number
  priceMax?: number
  areaMin?: number
  areaMax?: number
  rooms?: number[]
  propertyType?: PropertyType[]
  amenities?: Amenity[]
  furnished?: FurnishedLevel[]
  availableFrom?: string
  nearMetro?: boolean
  nearUniversity?: boolean
}

export type SortOption = 
  | 'newest'
  | 'price-low'
  | 'price-high'
  | 'area-low'
  | 'area-high'
  | 'popular'

// Booking Types
export interface BookingRequest {
  propertyId: string
  moveInDate: string
  moveOutDate?: string
  duration: number // in months
  message: string
  tenant: {
    name: string
    email: string
    phone: string
  }
}

export interface PaymentMethod {
  id: string
  type: 'payme' | 'click' | 'uzcard' | 'visa' | 'mastercard'
  name: string
  icon: string
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  isVerified: boolean
  verificationLevel: 'basic' | 'standard' | 'premium'
  favorites: string[]
  createdAt: string
}
