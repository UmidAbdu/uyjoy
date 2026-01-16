'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, User, Globe, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: '/search', label: 'Find Housing' },
  { href: '/search?featured=true', label: 'Featured' },
  { href: '#districts', label: 'Districts' },
]

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'uz', label: 'O\'zbekcha' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-sand-200/50" />
      
      <nav className="relative container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{currentLang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-card border border-sand-200 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code)
                          setIsLanguageOpen(false)
                        }}
                        className={cn(
                          'w-full px-4 py-2.5 text-left text-sm hover:bg-sand-100 transition-colors',
                          currentLang === lang.code
                            ? 'text-primary-500 font-medium bg-primary-500/5'
                            : 'text-gray-700'
                        )}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Favorites */}
            <Link
              href="/favorites"
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-terracotta-400 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Auth Buttons */}
            <Link href="/auth">
              <Button variant="ghost" size="sm" leftIcon={<User className="w-4 h-4" />}>
                Sign In
              </Button>
            </Link>
            <Link href="/auth?mode=signup">
              <Button size="sm">List Property</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative bg-white border-t border-sand-200"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-primary-500 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-sand-200 space-y-3">
                <Link href="/auth" className="block">
                  <Button variant="outline" fullWidth>
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth?mode=signup" className="block">
                  <Button fullWidth>List Property</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
