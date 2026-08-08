import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1',
    secondary: 'bg-foreground text-background hover:bg-foreground/90 shadow-md',
    outline: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
    ghost: 'hover:bg-black/5 text-foreground'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg md:text-xl'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
