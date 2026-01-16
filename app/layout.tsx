import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'UyJoy - Find Your Perfect Home in Uzbekistan',
  description: 'Uzbekistan\'s premier housing marketplace. Find apartments, houses, and rooms for rent in Tashkent and beyond. Secure, verified listings with tenant protection.',
  keywords: 'rent apartment Tashkent, housing Uzbekistan, rental Tashkent, UyJoy, квартира аренда Ташкент',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
