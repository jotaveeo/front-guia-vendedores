import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-card text-card-foreground p-6 sm:p-8 rounded-2xl shadow-sm border-2 border-border/60 hover:border-border transition-colors ${className}`}>
      {children}
    </div>
  );
}
