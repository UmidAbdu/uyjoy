import { Property, Landlord } from '@/lib/types'

// Sample landlords
export const landlords: Landlord[] = [
  {
    id: 'l1',
    name: 'Aziza Karimova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    isVerified: true,
    responseRate: 98,
    responseTime: 'within 1 hour',
    memberSince: '2023-03-15',
    totalListings: 5,
    rating: 4.9,
    reviewCount: 47,
  },
  {
    id: 'l2',
    name: 'Rustam Aliyev',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    isVerified: true,
    responseRate: 95,
    responseTime: 'within 2 hours',
    memberSince: '2022-11-20',
    totalListings: 12,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: 'l3',
    name: 'Dilnoza Rahimova',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    isVerified: true,
    responseRate: 100,
    responseTime: 'within 30 minutes',
    memberSince: '2024-01-10',
    totalListings: 3,
    rating: 5.0,
    reviewCount: 12,
  },
  {
    id: 'l4',
    name: 'Bekzod Tursunov',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    isVerified: false,
    responseRate: 85,
    responseTime: 'within 1 day',
    memberSince: '2024-06-05',
    totalListings: 2,
    rating: 4.5,
    reviewCount: 8,
  },
  {
    id: 'l5',
    name: 'Nodira Usmanova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    isVerified: true,
    responseRate: 92,
    responseTime: 'within 3 hours',
    memberSince: '2023-08-22',
    totalListings: 8,
    rating: 4.7,
    reviewCount: 34,
  },
]

// Sample properties with real Tashkent locations
export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Modern Studio near IT Park',
    slug: 'modern-studio-near-it-park',
    description: 'Beautifully designed studio apartment with panoramic city views. Perfect for young professionals working at IT Park or nearby tech companies. Features smart home integration, high-speed fiber internet, and a fully equipped kitchen. The building has 24/7 security, underground parking, and a rooftop terrace.',
    type: 'studio',
    status: 'available',
    address: 'Mirzo Ulugbek district, Buyuk Ipak Yoli St, 105',
    district: 'mirzo-ulugbek',
    city: 'Tashkent',
    coordinates: { lat: 41.3385, lng: 69.3346 },
    nearbyPlaces: [
      { name: 'IT Park', type: 'mall', distance: 500 },
      { name: 'Mirzo Ulugbek Metro', type: 'metro', distance: 800 },
      { name: 'INHA University', type: 'university', distance: 1200 },
    ],
    price: 5500000,
    pricePerSqm: 137500,
    currency: 'UZS',
    area: 40,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    floor: 12,
    totalFloors: 16,
    amenities: ['wifi', 'ac', 'heating', 'tv', 'elevator', 'security', 'parking', 'kitchen', 'refrigerator'],
    furnished: 'fully',
    renovationType: 'euro',
    images: [
      { id: 'img1', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop', alt: 'Modern studio living area', isPrimary: true },
      { id: 'img2', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', alt: 'Kitchen area', isPrimary: false },
      { id: 'img3', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop', alt: 'City view from balcony', isPrimary: false },
      { id: 'img4', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop', alt: 'Modern bathroom', isPrimary: false },
    ],
    landlord: landlords[0],
    views: 342,
    favorites: 28,
    isVerified: true,
    isFeatured: true,
    availableFrom: '2026-02-01',
    minimumStay: 6,
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-01-15T14:30:00Z',
  },
  {
    id: 'p2',
    title: 'Spacious 3-Room Apartment in Yunusabad',
    slug: 'spacious-3-room-apartment-yunusabad',
    description: 'Elegant 3-room apartment in the prestigious Yunusabad district. Recently renovated with premium materials and designer furniture. Large windows provide excellent natural light. Perfect for families or professionals who appreciate quality and comfort. Walking distance to schools, parks, and shopping centers.',
    type: 'apartment',
    status: 'available',
    address: 'Yunusabad district, Amir Temur Shoh Kochasi, 45',
    district: 'yunusabad',
    city: 'Tashkent',
    coordinates: { lat: 41.3553, lng: 69.2868 },
    nearbyPlaces: [
      { name: 'Minor Metro', type: 'metro', distance: 600 },
      { name: 'Magic City Park', type: 'park', distance: 400 },
      { name: 'Tashkent State University', type: 'university', distance: 2000 },
    ],
    price: 12000000,
    pricePerSqm: 133333,
    currency: 'UZS',
    area: 90,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    floor: 7,
    totalFloors: 12,
    amenities: ['wifi', 'ac', 'heating', 'washing-machine', 'tv', 'balcony', 'elevator', 'security', 'kitchen', 'refrigerator'],
    furnished: 'fully',
    renovationType: 'designer',
    images: [
      { id: 'img5', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop', alt: 'Elegant living room', isPrimary: true },
      { id: 'img6', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop', alt: 'Master bedroom', isPrimary: false },
      { id: 'img7', url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop', alt: 'Modern kitchen', isPrimary: false },
      { id: 'img8', url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop', alt: 'Dining area', isPrimary: false },
    ],
    landlord: landlords[1],
    views: 567,
    favorites: 45,
    isVerified: true,
    isFeatured: true,
    availableFrom: '2026-01-20',
    minimumStay: 12,
    createdAt: '2026-01-05T08:00:00Z',
    updatedAt: '2026-01-14T16:45:00Z',
  },
  {
    id: 'p3',
    title: 'Cozy Room near Westminster University',
    slug: 'cozy-room-near-westminster',
    description: 'Comfortable private room in a shared apartment, ideal for students. Located just 10 minutes walk from Westminster International University. Shared kitchen and bathroom with one other tenant. Includes all utilities, high-speed internet, and access to common areas.',
    type: 'room',
    status: 'available',
    address: 'Sergeli district, Quruvchi Kochasi, 22',
    district: 'sergeli',
    city: 'Tashkent',
    coordinates: { lat: 41.2256, lng: 69.2189 },
    nearbyPlaces: [
      { name: 'Westminster University', type: 'university', distance: 800 },
      { name: 'Sergeli Bazaar', type: 'mall', distance: 500 },
    ],
    price: 2500000,
    pricePerSqm: 138889,
    currency: 'UZS',
    area: 18,
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    floor: 3,
    totalFloors: 5,
    amenities: ['wifi', 'heating', 'kitchen', 'refrigerator'],
    furnished: 'fully',
    renovationType: 'cosmetic',
    images: [
      { id: 'img9', url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop', alt: 'Cozy bedroom', isPrimary: true },
      { id: 'img10', url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop', alt: 'Shared kitchen', isPrimary: false },
    ],
    landlord: landlords[2],
    views: 234,
    favorites: 19,
    isVerified: true,
    isFeatured: false,
    availableFrom: '2026-01-25',
    minimumStay: 3,
    createdAt: '2026-01-12T11:00:00Z',
    updatedAt: '2026-01-15T09:20:00Z',
  },
  {
    id: 'p4',
    title: 'Premium 2-Room in Mirabad Center',
    slug: 'premium-2-room-mirabad-center',
    description: 'Luxurious 2-room apartment in the heart of Mirabad, the most prestigious district of Tashkent. Features floor-to-ceiling windows, premium appliances, marble bathroom, and smart home system. Building amenities include concierge, gym, and rooftop lounge with stunning views of the city.',
    type: 'apartment',
    status: 'available',
    address: 'Mirabad district, Shota Rustaveli Kochasi, 88',
    district: 'mirabad',
    city: 'Tashkent',
    coordinates: { lat: 41.3047, lng: 69.2478 },
    nearbyPlaces: [
      { name: 'Kosmonavtlar Metro', type: 'metro', distance: 300 },
      { name: 'Tashkent City Mall', type: 'mall', distance: 700 },
      { name: 'Central Park', type: 'park', distance: 500 },
    ],
    price: 18000000,
    pricePerSqm: 225000,
    currency: 'UZS',
    area: 80,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 2,
    floor: 18,
    totalFloors: 25,
    amenities: ['wifi', 'ac', 'heating', 'washing-machine', 'dishwasher', 'tv', 'balcony', 'parking', 'elevator', 'security', 'gym', 'kitchen', 'refrigerator'],
    furnished: 'fully',
    renovationType: 'designer',
    images: [
      { id: 'img11', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop', alt: 'Luxury living space', isPrimary: true },
      { id: 'img12', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop', alt: 'Premium bedroom', isPrimary: false },
      { id: 'img13', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Panoramic city view', isPrimary: false },
      { id: 'img14', url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop', alt: 'Modern bathroom', isPrimary: false },
      { id: 'img15', url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop', alt: 'Kitchen with island', isPrimary: false },
    ],
    landlord: landlords[0],
    views: 892,
    favorites: 78,
    isVerified: true,
    isFeatured: true,
    availableFrom: '2026-02-15',
    minimumStay: 12,
    createdAt: '2026-01-01T09:00:00Z',
    updatedAt: '2026-01-16T11:00:00Z',
  },
  {
    id: 'p5',
    title: 'Affordable Studio in Chilanzar',
    slug: 'affordable-studio-chilanzar',
    description: 'Clean and well-maintained studio apartment in the popular Chilanzar district. Perfect for students and young professionals on a budget. Recently repainted with new flooring. Includes basic furniture, air conditioning, and internet. Great public transport connections.',
    type: 'studio',
    status: 'available',
    address: 'Chilanzar district, 5-mavze, Block 12',
    district: 'chilanzar',
    city: 'Tashkent',
    coordinates: { lat: 41.2856, lng: 69.2145 },
    nearbyPlaces: [
      { name: 'Chilanzar Metro', type: 'metro', distance: 400 },
      { name: 'Chilanzar Park', type: 'park', distance: 600 },
      { name: 'Turin Polytechnic', type: 'university', distance: 1500 },
    ],
    price: 3500000,
    pricePerSqm: 116667,
    currency: 'UZS',
    area: 30,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    floor: 4,
    totalFloors: 9,
    amenities: ['wifi', 'ac', 'tv', 'elevator', 'kitchen', 'refrigerator'],
    furnished: 'partially',
    renovationType: 'cosmetic',
    images: [
      { id: 'img16', url: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop', alt: 'Studio living area', isPrimary: true },
      { id: 'img17', url: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop', alt: 'Kitchenette', isPrimary: false },
      { id: 'img18', url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop', alt: 'Bathroom', isPrimary: false },
    ],
    landlord: landlords[3],
    views: 456,
    favorites: 32,
    isVerified: false,
    isFeatured: false,
    availableFrom: '2026-01-18',
    minimumStay: 6,
    createdAt: '2026-01-08T14:00:00Z',
    updatedAt: '2026-01-15T10:30:00Z',
  },
  {
    id: 'p6',
    title: 'Family House with Garden in Yakkasaray',
    slug: 'family-house-garden-yakkasaray',
    description: 'Beautiful 4-room private house with a landscaped garden in quiet Yakkasaray neighborhood. Traditional Uzbek architecture meets modern comfort. Features include a courtyard with fruit trees, separate guest room, modern kitchen, and covered parking for 2 cars. Ideal for families seeking peace and privacy.',
    type: 'house',
    status: 'available',
    address: 'Yakkasaray district, Bobur Kochasi, 156',
    district: 'yakkasaray',
    city: 'Tashkent',
    coordinates: { lat: 41.2945, lng: 69.2689 },
    nearbyPlaces: [
      { name: 'Yakkasaray School #45', type: 'school', distance: 300 },
      { name: 'National Library', type: 'park', distance: 800 },
      { name: 'Bodomzor Metro', type: 'metro', distance: 1000 },
    ],
    price: 25000000,
    pricePerSqm: 138889,
    currency: 'UZS',
    area: 180,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    floor: 1,
    totalFloors: 2,
    amenities: ['wifi', 'ac', 'heating', 'washing-machine', 'dishwasher', 'tv', 'parking', 'security', 'pet-friendly', 'kitchen', 'refrigerator'],
    furnished: 'fully',
    renovationType: 'euro',
    images: [
      { id: 'img19', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'House exterior with garden', isPrimary: true },
      { id: 'img20', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&h=600&fit=crop', alt: 'Spacious living room', isPrimary: false },
      { id: 'img21', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop', alt: 'Master bedroom', isPrimary: false },
      { id: 'img22', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop', alt: 'Garden courtyard', isPrimary: false },
      { id: 'img23', url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop', alt: 'Modern kitchen', isPrimary: false },
    ],
    landlord: landlords[4],
    views: 678,
    favorites: 56,
    isVerified: true,
    isFeatured: true,
    availableFrom: '2026-03-01',
    minimumStay: 12,
    createdAt: '2025-12-20T12:00:00Z',
    updatedAt: '2026-01-14T08:00:00Z',
  },
  {
    id: 'p7',
    title: 'Modern 2-Room near Amir Temur Square',
    slug: 'modern-2-room-amir-temur-square',
    description: 'Contemporary apartment with stunning views of Amir Temur Square and the historic Hotel Uzbekistan. Walking distance to major attractions, restaurants, and business centers. Features minimalist Scandinavian design, smart TV, and high-speed internet. Perfect for business travelers and expats.',
    type: 'apartment',
    status: 'available',
    address: 'Shayhontohur district, Amir Temur Xiyoboni, 12',
    district: 'shayhontohur',
    city: 'Tashkent',
    coordinates: { lat: 41.3111, lng: 69.2797 },
    nearbyPlaces: [
      { name: 'Amir Temur Square', type: 'park', distance: 100 },
      { name: 'Amir Temur Hiyoboni Metro', type: 'metro', distance: 200 },
      { name: 'National Museum', type: 'mall', distance: 400 },
    ],
    price: 15000000,
    pricePerSqm: 214286,
    currency: 'UZS',
    area: 70,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    floor: 10,
    totalFloors: 14,
    amenities: ['wifi', 'ac', 'heating', 'washing-machine', 'tv', 'balcony', 'elevator', 'security', 'kitchen', 'refrigerator'],
    furnished: 'fully',
    renovationType: 'designer',
    images: [
      { id: 'img24', url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop', alt: 'Living room with view', isPrimary: true },
      { id: 'img25', url: 'https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop', alt: 'Modern bedroom', isPrimary: false },
      { id: 'img26', url: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&h=600&fit=crop', alt: 'Designer kitchen', isPrimary: false },
      { id: 'img27', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop', alt: 'City view balcony', isPrimary: false },
    ],
    landlord: landlords[1],
    views: 445,
    favorites: 38,
    isVerified: true,
    isFeatured: false,
    availableFrom: '2026-02-01',
    minimumStay: 6,
    createdAt: '2026-01-09T15:00:00Z',
    updatedAt: '2026-01-16T09:00:00Z',
  },
  {
    id: 'p8',
    title: 'Budget Room in Almazar District',
    slug: 'budget-room-almazar',
    description: 'Economical private room in a quiet residential area of Almazar. Suitable for students or budget-conscious tenants. Room includes a bed, wardrobe, and desk. Shared bathroom and kitchen with friendly roommates. Utilities included in rent.',
    type: 'room',
    status: 'available',
    address: 'Almazar district, Qoratosh Kochasi, 78',
    district: 'almazar',
    city: 'Tashkent',
    coordinates: { lat: 41.3289, lng: 69.2234 },
    nearbyPlaces: [
      { name: 'Almazar Bazaar', type: 'mall', distance: 600 },
      { name: 'Almazar Park', type: 'park', distance: 400 },
    ],
    price: 1800000,
    pricePerSqm: 128571,
    currency: 'UZS',
    area: 14,
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    floor: 2,
    totalFloors: 4,
    amenities: ['wifi', 'heating', 'kitchen'],
    furnished: 'partially',
    renovationType: 'cosmetic',
    images: [
      { id: 'img28', url: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop', alt: 'Simple bedroom', isPrimary: true },
      { id: 'img29', url: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop', alt: 'Shared space', isPrimary: false },
    ],
    landlord: landlords[3],
    views: 189,
    favorites: 12,
    isVerified: false,
    isFeatured: false,
    availableFrom: '2026-01-20',
    minimumStay: 3,
    createdAt: '2026-01-13T09:00:00Z',
    updatedAt: '2026-01-15T11:00:00Z',
  },
]

// Get featured properties
export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.isFeatured).slice(0, 6)
}

// Get property by ID
export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

// Get property by slug
export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

// Get properties by district
export function getPropertiesByDistrict(district: string): Property[] {
  return properties.filter((p) => p.district === district)
}

// Get latest properties
export function getLatestProperties(limit: number = 8): Property[] {
  return [...properties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}

// Search properties
export function searchProperties(filters: {
  query?: string
  district?: string[]
  priceMin?: number
  priceMax?: number
  rooms?: number[]
  type?: string[]
}): Property[] {
  return properties.filter((p) => {
    if (filters.query) {
      const query = filters.query.toLowerCase()
      const matchesQuery =
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query)
      if (!matchesQuery) return false
    }

    if (filters.district?.length && !filters.district.includes(p.district)) {
      return false
    }

    if (filters.priceMin && p.price < filters.priceMin) return false
    if (filters.priceMax && p.price > filters.priceMax) return false

    if (filters.rooms?.length && !filters.rooms.includes(p.rooms)) {
      return false
    }

    if (filters.type?.length && !filters.type.includes(p.type)) {
      return false
    }

    return true
  })
}
