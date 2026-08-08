import React from 'react';

export function Section({ 
  children, 
  className = '', 
  id,
  variant = 'default' 
}: { 
  children: React.ReactNode, 
  className?: string, 
  id?: string,
  variant?: 'default' | 'primary' | 'muted'
}) {
  
  const variants = {
    default: 'bg-background',
    primary: 'bg-primary text-primary-foreground',
    muted: 'bg-black/5' // slightly off-white section
  };

  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full`}>
        {children}
      </div>
    </section>
  );
}
