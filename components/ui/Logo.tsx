import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

interface LogoProps {
  variant?: 'default' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showText?: boolean
}

const sizeStyles = {
  sm: { icon: 'w-7 h-7', text: 'text-lg' },
  md: { icon: 'w-9 h-9', text: 'text-xl' },
  lg: { icon: 'w-12 h-12', text: 'text-2xl' },
}

const variantStyles = {
  default: { icon: 'text-primary-500', text: 'text-primary-600' },
  white: { icon: 'text-white', text: 'text-white' },
  dark: { icon: 'text-gray-900', text: 'text-gray-900' },
}

export function Logo({
  variant = 'default',
  size = 'md',
  className,
  showText = true,
}: LogoProps) {
  const { icon, text } = sizeStyles[size]
  const colors = variantStyles[variant]

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2 group', className)}
    >
      {/* Logo Icon - House with heart */}
      <div className={cn('relative', icon)}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className={cn('w-full h-full transition-transform group-hover:scale-105', colors.icon)}
        >
          {/* House base */}
          <path
            d="M20 4L4 16V36H16V26C16 24.9 16.9 24 18 24H22C23.1 24 24 24.9 24 26V36H36V16L20 4Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          {/* House outline */}
          <path
            d="M20 4L4 16V36H16V26C16 24.9 16.9 24 18 24H22C23.1 24 24 24.9 24 26V36H36V16L20 4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Heart in the middle */}
          <path
            d="M20 15C18.5 13.5 16 13.5 14.5 15C13 16.5 13 19 14.5 20.5L20 26L25.5 20.5C27 19 27 16.5 25.5 15C24 13.5 21.5 13.5 20 15Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {showText && (
        <span className={cn('font-heading font-bold tracking-tight', text, colors.text)}>
          UyJoy
        </span>
      )}
    </Link>
  )
}
