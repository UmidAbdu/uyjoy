'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
} from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils/cn'

type AuthMode = 'login' | 'signup' | 'verify'

function AuthContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login'

  const [mode, setMode] = useState<AuthMode>(initialMode)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(60)

  // OTP input handling
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0]
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  // Countdown timer for resend
  useEffect(() => {
    if (mode === 'verify' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [mode, countdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (mode === 'login' || mode === 'signup') {
      setMode('verify')
      setCountdown(60)
    } else if (mode === 'verify') {
      // Verify OTP and redirect
      router.push('/')
    }

    setIsLoading(false)
  }

  const resendOtp = async () => {
    setCountdown(60)
    // API call to resend OTP
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Back Button (for verify mode) */}
          {mode === 'verify' && (
            <button
              onClick={() => setMode('login')}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 mb-6 text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          )}

          {/* Logo */}
          <Logo size="lg" className="mb-8" />

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {mode === 'login' && (
                <>
                  <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">
                    Welcome back
                  </h1>
                  <p className="text-gray-600 mb-8">
                    Sign in to continue your housing search
                  </p>
                </>
              )}

              {mode === 'signup' && (
                <>
                  <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">
                    Create account
                  </h1>
                  <p className="text-gray-600 mb-8">
                    Join thousands finding their perfect home
                  </p>
                </>
              )}

              {mode === 'verify' && (
                <>
                  <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">
                    Verify your phone
                  </h1>
                  <p className="text-gray-600 mb-8">
                    We sent a 6-digit code to{' '}
                    <span className="font-medium text-gray-900">{phone}</span>
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {mode !== 'verify' && (
                <motion.div
                  key="form-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {mode === 'signup' && (
                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      leftIcon={<User className="w-5 h-5" />}
                      required
                    />
                  )}

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    leftIcon={<Phone className="w-5 h-5" />}
                    required
                  />

                  {mode === 'signup' && (
                    <Input
                      label="Email (optional)"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      leftIcon={<Mail className="w-5 h-5" />}
                    />
                  )}

                  <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    leftIcon={<Lock className="w-5 h-5" />}
                    required
                  />

                  {mode === 'login' && (
                    <div className="flex justify-end">
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary-500 hover:text-primary-600"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}

              {mode === 'verify' && (
                <motion.div
                  key="otp-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* OTP Inputs */}
                  <div className="flex justify-center gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className={cn(
                          'w-12 h-14 text-center text-xl font-bold rounded-xl border-2',
                          'focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500',
                          'transition-colors',
                          digit
                            ? 'border-primary-500 bg-primary-500/5'
                            : 'border-sand-300 bg-white'
                        )}
                      />
                    ))}
                  </div>

                  {/* Resend */}
                  <div className="text-center">
                    {countdown > 0 ? (
                      <p className="text-sm text-gray-500">
                        Resend code in {countdown}s
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={resendOtp}
                        className="text-sm text-primary-500 hover:text-primary-600 font-medium"
                      >
                        Resend code
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isLoading}
              rightIcon={mode !== 'verify' ? <ArrowRight className="w-5 h-5" /> : undefined}
            >
              {mode === 'login' && 'Sign In'}
              {mode === 'signup' && 'Create Account'}
              {mode === 'verify' && 'Verify'}
            </Button>
          </form>

          {/* Toggle Mode */}
          {mode !== 'verify' && (
            <p className="text-center mt-6 text-gray-600">
              {mode === 'login' ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          )}

          {/* Divider */}
          {mode !== 'verify' && (
            <>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-sand-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-cream-50 text-gray-500">
                    or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-3 border border-sand-200 rounded-xl hover:bg-sand-50 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0088cc] text-white rounded-xl hover:bg-[#007ab8] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-sm font-medium">Telegram</span>
                </button>
              </div>
            </>
          )}

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-8">
            By continuing, you agree to UyJoy&apos;s{' '}
            <Link href="/terms" className="text-primary-500 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=1600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ))}
              </div>
              <p className="text-white/90 text-sm">
                <span className="font-semibold">50,000+</span> happy tenants
              </p>
            </div>

            <blockquote className="text-white text-xl leading-relaxed mb-6">
              &quot;UyJoy made finding my apartment in Tashkent so easy. The
              verification process gave me confidence, and I found the perfect
              place within a week!&quot;
            </blockquote>

            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face)',
                }}
              />
              <div>
                <p className="text-white font-medium">Malika Alimova</p>
                <p className="text-white/70 text-sm">IT Professional, Yunusabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full" />
      </div>
    }>
      <AuthContent />
    </Suspense>
  )
}
