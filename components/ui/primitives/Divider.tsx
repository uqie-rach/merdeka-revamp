import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ orientation = 'horizontal', className = '' }: DividerProps) {
  const baseStyles = 'bg-border';
  const orientationStyles = {
    horizontal: 'h-px w-full',
    vertical: 'w-px h-full',
  };

  return <div className={`${baseStyles} ${orientationStyles[orientation]} ${className}`} />;
}
