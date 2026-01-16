# UyJoy - Uzbekistan Housing Marketplace

UyJoy (meaning "Home Joy" in Uzbek) is a modern housing marketplace platform for Uzbekistan, built with Next.js 14, TypeScript, and Tailwind CSS.

![UyJoy Preview](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop)

## Features

### For Tenants
- **Property Discovery** - Browse and search through verified listings
- **Advanced Filters** - Filter by district, price, rooms, amenities
- **Map View** - Interactive map showing property locations
- **Tenant Protection** - Secure bookings with escrow payments
- **Photo Gallery** - Full-screen image viewing with lightbox

### For Landlords (Coming Soon)
- Property listing management
- Booking requests dashboard
- RentRadar analytics
- Rent collection tools

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Leaflet with OpenStreetMap
- **Icons**: Lucide React
- **Fonts**: Instrument Sans, DM Sans

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd uyjoy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
uyjoy/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── search/            # Search results page
│   ├── property/[id]/     # Property details page
│   ├── booking/[id]/      # Booking flow page
│   └── auth/              # Authentication page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── property/          # Property-related components
│   ├── search/            # Search and filter components
│   ├── map/               # Map components
│   └── layout/            # Layout components (Navbar, Footer)
├── lib/
│   ├── data/              # Mock data for properties
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
└── public/                # Static assets
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, featured properties, districts |
| Search | `/search` | Property listing with filters and map |
| Property | `/property/[id]` | Full property details and booking widget |
| Booking | `/booking/[id]` | Multi-step booking flow |
| Auth | `/auth` | Login and signup with OTP verification |

## Design System

### Colors
- **Primary (Teal)**: `#0D4D4D` - Trust and professionalism
- **Sand**: `#E8DDD4` - Warmth and comfort
- **Terracotta**: `#C17F59` - Accent and highlights
- **Cream**: `#FFFDF9` - Clean backgrounds

### Typography
- **Headings**: Instrument Sans - Modern and geometric
- **Body**: DM Sans - Clean and readable

## Environment Variables

No environment variables are required for the MVP. The app uses mock data for demonstration.

For production, you would need:
```env
# Payment Gateways
PAYME_API_KEY=
CLICK_API_KEY=

# Maps
YANDEX_MAPS_API_KEY=

# Database
DATABASE_URL=

# Auth
NEXTAUTH_SECRET=
```

## Contributing

This is an MVP demonstration project. For production deployment, additional features and security measures would be needed.

## License

This project is for demonstration purposes only.

---

Built with ❤️ for the people of Uzbekistan
