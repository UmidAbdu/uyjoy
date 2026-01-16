import { District, districtNames } from '@/lib/types'

export interface DistrictInfo {
  id: District
  name: string
  description: string
  averagePrice: number
  propertyCount: number
  coordinates: { lat: number; lng: number }
  highlights: string[]
  image: string
}

export const districtData: DistrictInfo[] = [
  {
    id: 'mirabad',
    name: districtNames.mirabad,
    description: 'Premium district with luxury apartments and business centers',
    averagePrice: 18000000,
    propertyCount: 245,
    coordinates: { lat: 41.3047, lng: 69.2478 },
    highlights: ['Business Center', 'High-End Shopping', 'International Schools'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
  },
  {
    id: 'yunusabad',
    name: districtNames.yunusabad,
    description: 'Popular residential area with parks and modern amenities',
    averagePrice: 12000000,
    propertyCount: 312,
    coordinates: { lat: 41.3553, lng: 69.2868 },
    highlights: ['Universities', 'Parks', 'Shopping Centers'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
  },
  {
    id: 'chilanzar',
    name: districtNames.chilanzar,
    description: 'Largest residential district with excellent metro access',
    averagePrice: 6500000,
    propertyCount: 534,
    coordinates: { lat: 41.2856, lng: 69.2145 },
    highlights: ['Metro Access', 'Affordable', 'Local Markets'],
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop',
  },
  {
    id: 'sergeli',
    name: districtNames.sergeli,
    description: 'Growing district with university campuses and new developments',
    averagePrice: 4500000,
    propertyCount: 189,
    coordinates: { lat: 41.2256, lng: 69.2189 },
    highlights: ['Westminster University', 'New Developments', 'Budget-Friendly'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop',
  },
  {
    id: 'yakkasaray',
    name: districtNames.yakkasaray,
    description: 'Historic district with traditional houses and cultural sites',
    averagePrice: 14000000,
    propertyCount: 156,
    coordinates: { lat: 41.2945, lng: 69.2689 },
    highlights: ['Historic Sites', 'Family Homes', 'Green Spaces'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  },
  {
    id: 'shayhontohur',
    name: districtNames.shayhontohur,
    description: 'Central district near Amir Temur Square and major landmarks',
    averagePrice: 15000000,
    propertyCount: 178,
    coordinates: { lat: 41.3111, lng: 69.2797 },
    highlights: ['City Center', 'Landmarks', 'Business District'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop',
  },
  {
    id: 'almazar',
    name: districtNames.almazar,
    description: 'Traditional neighborhood with local bazaars and community feel',
    averagePrice: 5000000,
    propertyCount: 223,
    coordinates: { lat: 41.3289, lng: 69.2234 },
    highlights: ['Local Bazaars', 'Traditional', 'Community'],
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=400&h=300&fit=crop',
  },
  {
    id: 'mirzo-ulugbek',
    name: districtNames['mirzo-ulugbek'],
    description: 'Tech hub with IT Park and modern office buildings',
    averagePrice: 8500000,
    propertyCount: 267,
    coordinates: { lat: 41.3385, lng: 69.3346 },
    highlights: ['IT Park', 'Tech Companies', 'INHA University'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
  },
]

export function getDistrictById(id: District): DistrictInfo | undefined {
  return districtData.find((d) => d.id === id)
}

export function getPopularDistricts(): DistrictInfo[] {
  return districtData
    .sort((a, b) => b.propertyCount - a.propertyCount)
    .slice(0, 4)
}
