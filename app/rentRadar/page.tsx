'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, 
  BarChart3, 
  MapPin, 
  Target,
  Zap,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils/format'

const features = [
  {
    icon: BarChart3,
    title: 'Market Price Analysis',
    description: 'See average rental prices by district, property type, and size. Know exactly where your property stands.',
  },
  {
    icon: TrendingUp,
    title: 'Demand Forecasting',
    description: 'Predict seasonal demand trends and optimize your pricing for maximum occupancy.',
  },
  {
    icon: Target,
    title: 'Pricing Recommendations',
    description: 'Get AI-powered price suggestions based on your property features and market conditions.',
  },
  {
    icon: MapPin,
    title: 'Location Insights',
    description: 'Understand how proximity to metros, universities, and amenities affects rental value.',
  },
]

const districtData = [
  { name: 'Mirabad', avgPrice: 18000000, trend: 5.2, listings: 245 },
  { name: 'Yunusabad', avgPrice: 12000000, trend: 3.8, listings: 312 },
  { name: 'Chilanzar', avgPrice: 6500000, trend: -1.2, listings: 534 },
  { name: 'Sergeli', avgPrice: 4500000, trend: 7.5, listings: 189 },
  { name: 'Shaykhontohur', avgPrice: 15000000, trend: 2.1, listings: 178 },
]

export default function RentRadarPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <Badge variant="secondary">RentRadar Analytics</Badge>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Data-Driven Rental Insights
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Make smarter pricing decisions with real-time market data, 
                demand forecasts, and AI-powered recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth?mode=signup">
                  <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Get Started
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                    View Plans
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Sample Analytics Card */}
              <div className="bg-white rounded-3xl p-6 shadow-float">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Market Overview</h3>
                  <span className="text-sm text-gray-500">Tashkent</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-sand-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">Avg. Rent</p>
                    <p className="text-2xl font-bold text-gray-900">8.5M</p>
                    <p className="text-xs text-emerald-500 flex items-center gap-1">
                      <ArrowUp className="w-3 h-3" /> 3.2% this month
                    </p>
                  </div>
                  <div className="bg-sand-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">Active Listings</p>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
                    <p className="text-xs text-emerald-500 flex items-center gap-1">
                      <ArrowUp className="w-3 h-3" /> 12% this month
                    </p>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-32 bg-gradient-to-t from-primary-500/10 to-transparent rounded-xl flex items-end justify-around px-4 pb-2">
                  {[40, 55, 45, 65, 50, 70, 60, 80, 75, 85, 78, 90].map((height, i) => (
                    <div
                      key={i}
                      className="w-4 bg-primary-500 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">Monthly trend (12 months)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand the market and optimize your rental income.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Data Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="primary" className="mb-4">Live Data</Badge>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Current Market Snapshot
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time rental market data from Tashkent districts.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-sand-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-sand-100 font-medium text-gray-700 text-sm">
                <div>District</div>
                <div>Avg. Rent/mo</div>
                <div>Trend</div>
                <div>Listings</div>
              </div>
              {districtData.map((district, index) => (
                <motion.div
                  key={district.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-4 gap-4 p-4 border-t border-sand-200 hover:bg-sand-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">{district.name}</div>
                  <div className="text-gray-700">{formatPrice(district.avgPrice)}</div>
                  <div className={`flex items-center gap-1 ${district.trend >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {district.trend >= 0 ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    {Math.abs(district.trend)}%
                  </div>
                  <div className="text-gray-600">{district.listings}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Data updated in real-time from UyJoy marketplace
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Unlock Full Analytics Access
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            RentRadar is available on Pro and Business plans. Upgrade now to access 
            detailed insights and pricing recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View Pricing
              </Button>
            </Link>
            <Link href="/auth?mode=signup">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
