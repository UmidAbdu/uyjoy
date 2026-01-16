import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const footerLinks = {
  forTenants: [
    { href: '/search', label: 'Find Housing' },
    { href: '/districts', label: 'Browse Districts' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/tenant-protection', label: 'Tenant Protection' },
  ],
  forLandlords: [
    { href: '/list-property', label: 'List Your Property' },
    { href: '/pricing', label: 'Pricing Plans' },
    { href: '/landlord-resources', label: 'Resources' },
    { href: '/rentRadar', label: 'RentRadar Analytics' },
  ],
  company: [
    { href: '/about', label: 'About UyJoy' },
    { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
}

const socialLinks = [
  { href: 'https://t.me/uyjoy', icon: Send, label: 'Telegram' },
]

export function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo variant="white" size="lg" className="mb-4" />
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              Uzbekistan&apos;s premier housing marketplace. Find your perfect home with trust and transparency.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                +998 90 123 45 67
              </a>
              <a
                href="mailto:hello@uyjoy.uz"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@uyjoy.uz
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          {/* For Tenants */}
          <div>
            <h4 className="font-heading font-semibold mb-4">For Tenants</h4>
            <ul className="space-y-2.5">
              {footerLinks.forTenants.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Landlords */}
          <div>
            <h4 className="font-heading font-semibold mb-4">For Landlords</h4>
            <ul className="space-y-2.5">
              {footerLinks.forLandlords.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} UyJoy. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs">
            <span>Accepted payments:</span>
            <span className="font-semibold">Payme</span>
            <span className="font-semibold">Click</span>
            <span className="font-semibold">Uzcard</span>
            <span className="font-semibold">Humo</span>
            <span className="font-semibold">Visa</span>
            <span className="font-semibold">Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
