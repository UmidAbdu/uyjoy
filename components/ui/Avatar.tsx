import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import { getInitials } from '@/lib/utils/format'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps {
  src?: string
  alt: string
  size?: AvatarSize
  className?: string
  showBadge?: boolean
  badgeColor?: string
}

const sizeStyles: Record<AvatarSize, { container: string; text: string; badge: string }> = {
  xs: { container: 'w-6 h-6', text: 'text-xs', badge: 'w-2 h-2' },
  sm: { container: 'w-8 h-8', text: 'text-xs', badge: 'w-2.5 h-2.5' },
  md: { container: 'w-10 h-10', text: 'text-sm', badge: 'w-3 h-3' },
  lg: { container: 'w-12 h-12', text: 'text-base', badge: 'w-3.5 h-3.5' },
  xl: { container: 'w-16 h-16', text: 'text-lg', badge: 'w-4 h-4' },
}

export function Avatar({
  src,
  alt,
  size = 'md',
  className,
  showBadge = false,
  badgeColor = 'bg-emerald-500',
}: AvatarProps) {
  const { container, text, badge } = sizeStyles[size]

  return (
    <div className={cn('relative inline-block', className)}>
      <div
        className={cn(
          'rounded-full overflow-hidden bg-sand-200 flex items-center justify-center ring-2 ring-white',
          container
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : (
          <span className={cn('font-semibold text-primary-600', text)}>
            {getInitials(alt)}
          </span>
        )}
      </div>
      {showBadge && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full ring-2 ring-white',
            badge,
            badgeColor
          )}
        />
      )}
    </div>
  )
}

// Avatar Group for showing multiple avatars
interface AvatarGroupProps {
  avatars: { src?: string; alt: string }[]
  max?: number
  size?: AvatarSize
  className?: string
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  className,
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <div className={cn('flex -space-x-2', className)}>
      {displayAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={size}
        />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            'rounded-full bg-sand-300 flex items-center justify-center ring-2 ring-white',
            sizeStyles[size].container
          )}
        >
          <span className={cn('font-semibold text-primary-600', sizeStyles[size].text)}>
            +{remaining}
          </span>
        </div>
      )}
    </div>
  )
}
