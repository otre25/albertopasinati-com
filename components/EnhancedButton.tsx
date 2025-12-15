import React, { useState, useRef, MouseEvent } from 'react';
import { LucideIcon } from 'lucide-react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ariaLabel,
  type = 'button',
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Create ripple effect
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple: Ripple = {
        x,
        y,
        size,
        id: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 600);
    }

    onClick?.(e);
  };

  // Base styles
  const baseStyles = 'relative overflow-hidden font-bold rounded-sm transition-all duration-300 focus:outline-none focus:ring-4 inline-flex items-center justify-center gap-2';

  // Variant styles
  const variantStyles = {
    primary: 'bg-brand-yellow text-deep-black hover:bg-black hover:text-brand-yellow hover:shadow-xl focus:ring-brand-yellow/50',
    secondary: 'bg-deep-black text-brand-yellow hover:bg-brand-yellow hover:text-deep-black hover:shadow-xl focus:ring-brand-yellow/50',
    outline: 'border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-deep-black focus:ring-brand-yellow/50',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Disabled styles
  const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 cursor-pointer';

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!loading && Icon && iconPosition === 'left' && (
          <Icon
            size={20}
            className={`transition-transform duration-300 ${
              isHovered ? '-translate-x-1' : 'translate-x-0'
            }`}
          />
        )}

        {children}

        {!loading && Icon && iconPosition === 'right' && (
          <Icon
            size={20}
            className={`transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : 'translate-x-0'
            }`}
          />
        )}
      </span>
    </button>
  );
};

export default EnhancedButton;
