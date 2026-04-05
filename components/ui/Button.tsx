'use client';

import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps extends MotionProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  primary:
    'bg-accent-gold text-dark-900 hover:bg-[#FFF] hover:animate-glow shadow-lg',
  secondary:
    'bg-dark-800 text-accent-gold border border-accent-bronze hover:border-transparent hover:animate-glow shadow-md',
  outline:
    'border-2 border-accent-gold text-accent-gold hover:bg-dark-800 hover:animate-glow',
  ghost: 'text-accent-gold hover:bg-dark-800',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm font-medium',
  md: 'px-6 py-3 text-base font-medium',
  lg: 'px-8 py-4 text-lg font-semibold',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  disabled,
  type,
  ...motionProps
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const motionConfig = {
    whileHover: disabled ? {} : { y: -2 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
    ...motionProps,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseStyles}
        {...motionConfig}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type || 'button'}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled}
      {...motionConfig}
    >
      {children}
    </motion.button>
  );
}
