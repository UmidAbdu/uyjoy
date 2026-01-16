import { cn } from '@/lib/utils/cn'

type BadgeVariant = 'primary' | 'secondary' | 'terracotta' | 'success' | 'warning' | 'danger'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary-500/10 text-primary-600 border-primary-500/20',
  secondary: 'bg-sand-200 text-sand-700 border-sand-300',
  terracotta: 'bg-terracotta-400/10 text-terracotta-500 border-terracotta-400/20',
  success: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  danger: 'bg-red-500/10 text-red-600 border-red-500/20',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
}

export function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full border',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

// Specialized badges
export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="success"
      size="sm"
      className={cn('font-semibold', className)}
    >
      <svg
        className="w-3 h-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      Verified
    </Badge>
  )
}

export function FeaturedBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="terracotta"
      size="sm"
      className={cn('font-semibold', className)}
    >
      <svg
        className="w-3 h-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      Featured
    </Badge>
  )
}

export function NewBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="primary"
      size="sm"
      className={cn('font-semibold', className)}
    >
      New
    </Badge>
  )
}
