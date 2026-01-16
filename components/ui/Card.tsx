'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'elevated' | 'outlined'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variantStyles = {
  default: 'bg-white border border-sand-200',
  glass: 'bg-white/70 backdrop-blur-xl border border-white/30',
  elevated: 'bg-white shadow-card',
  outlined: 'bg-transparent border-2 border-sand-300',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hover = false,
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? { y: -4, boxShadow: '0 12px 40px rgba(13, 77, 77, 0.15)' }
            : undefined
        }
        transition={{ duration: 0.2 }}
        className={cn(
          'rounded-2xl',
          variantStyles[variant],
          paddingStyles[padding],
          hover && 'cursor-pointer transition-shadow duration-300',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// Card Header
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('pb-4 border-b border-sand-200', className)}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Content
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('py-4', className)} {...props}>
      {children}
    </div>
  )
}

// Card Footer
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('pt-4 border-t border-sand-200', className)}
      {...props}
    >
      {children}
    </div>
  )
}
