'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Building2,
  HelpCircle
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For general inquiries',
    value: 'hello@uyjoy.uz',
    action: 'mailto:hello@uyjoy.uz',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri, 9am-6pm',
    value: '+998 90 123 45 67',
    action: 'tel:+998901234567',
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    description: 'Quick responses',
    value: '@uyjoy_support',
    action: 'https://t.me/uyjoy_support',
  },
]

const departments = [
  {
    icon: HelpCircle,
    title: 'Customer Support',
    email: 'support@uyjoy.uz',
    description: 'Help with bookings, payments, and issues',
  },
  {
    icon: Building2,
    title: 'Landlord Support',
    email: 'landlords@uyjoy.uz',
    description: 'Listing help and business inquiries',
  },
  {
    icon: Mail,
    title: 'Press & Media',
    email: 'press@uyjoy.uz',
    description: 'Media inquiries and partnerships',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
              Contact Us
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              We&apos;re Here to Help
            </h1>
            <p className="text-xl text-white/80">
              Have questions? We&apos;d love to hear from you. Our team is available 
              24/7 to assist with any inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b border-sand-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <method.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{method.description}</p>
                  <p className="font-semibold text-gray-900">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Departments & Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Departments */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Departments
                </h2>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div
                      key={dept.title}
                      className="bg-white rounded-2xl p-5 shadow-card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <dept.icon className="w-5 h-5 text-primary-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{dept.title}</h3>
                          <p className="text-sm text-gray-500 mb-1">{dept.description}</p>
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-sm text-primary-500 hover:text-primary-600"
                          >
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Location */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Our Office
                </h2>
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">UyJoy Headquarters</p>
                      <p className="text-gray-600">
                        IT Park, Mirzo Ulugbek District<br />
                        Tashkent, Uzbekistan 100084
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Working Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 3:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-sand-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">Interactive map coming soon</p>
            <p className="text-sm text-gray-500">IT Park, Tashkent</p>
          </div>
        </div>
      </section>
    </div>
  )
}
