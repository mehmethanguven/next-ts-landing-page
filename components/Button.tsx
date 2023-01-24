import React, { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: any
  className?: string
  href?: string
  ref?: any
  type?: 'button' | 'submit' | undefined
  children?: React.ReactNode
  onClick?: () => void
  variant?: string // default, primary, info, success, warning, danger, dark
  size?: string // sm, md, lg
  disabled?: boolean
}

export const Button = forwardRef(function Button(
  {
    children,
    variant = 'default',
    size = 'md',
    color = 'gray',
    className,
    href,
    type,
    ...props
  }: ButtonProps,
  ref
) {
  className = clsx(variant, size, className)

  return href ? (
    <Link href={href} className={`rounded-lg p-2 ${className}`}>
      {children}
    </Link>
  ) : (
    // <Link ref={ref} href={href} className={className} {...props} />
    <button ref={ref} className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
})
