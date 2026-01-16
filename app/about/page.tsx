'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  Shield, 
  Users, 
  Globe,
  Target,
  Lightbulb,
  ArrowRight
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const values = [
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'We verify every listing and protect every transaction to ensure a safe experience.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make is guided by what\'s best for our tenants and landlords.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'We understand Uzbekistan\'s unique rental market and cultural nuances.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously improve our platform to make housing search easier.',
  },
]

const stats = [
  { value: '2024', label: 'Founded' },
  { value: '50K+', label: 'Happy Users' },
  { value: '10K+', label: 'Listings' },
  { value: '11', label: 'Tashkent Districts' },
]

const team = [
  {
    name: 'Jasur Kholmatov',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Madina Saidova',
    role: 'COO & Co-founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Timur Rahimov',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Zilola Karimova',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              About UyJoy
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Making Housing Search Joyful
            </h1>
            <p className="text-xl text-white/80">
              UyJoy (meaning &quot;Home Joy&quot; in Uzbek) is Uzbekistan&apos;s first dedicated 
              rental marketplace, connecting tenants with verified landlords through 
              a secure, transparent platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-sand-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-4xl font-bold text-primary-500 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-primary-500" />
                <span className="font-semibold text-primary-500">Our Mission</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Transforming Uzbekistan&apos;s Rental Market
              </h2>
              <p className="text-gray-600 mb-4">
                We believe everyone deserves a safe, transparent, and stress-free 
                experience when searching for a home. The traditional rental market 
                in Uzbekistan was fragmented, risky, and inefficient.
              </p>
              <p className="text-gray-600 mb-4">
                UyJoy was born to solve these problems. We&apos;ve built a platform that 
                verifies listings, protects payments, and connects tenants with 
                trustworthy landlords.
              </p>
              <p className="text-gray-600">
                Our goal is to become the #1 housing platform in Central Asia, 
                expanding beyond Tashkent to serve all of Uzbekistan and eventually 
                neighboring countries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop"
                  alt="Modern apartment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-float">
                <p className="text-3xl font-bold text-primary-500 mb-1">2026</p>
                <p className="text-gray-600">Expanding to 5 more cities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at UyJoy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sand-50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people building the future of housing in Uzbekistan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Join the UyJoy Community
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Whether you&apos;re looking for a home or have a property to rent, 
            we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/search">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Find a Home
              </Button>
            </Link>
            <Link href="/list-property">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                List Property
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
