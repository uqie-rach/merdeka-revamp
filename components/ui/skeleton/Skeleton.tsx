import React from 'react';

export interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'avatar' | 'text' | 'image' | 'card';
}

const variantStyles: Record<string, string> = {
  default: 'h-12 w-12',
  avatar: 'h-10 w-10 rounded-full',
  text: 'h-4 w-full',
  image: 'w-full aspect-video',
  card: 'h-48 w-full rounded-lg',
};

export function Skeleton({ className = '', variant = 'default' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gradient-to-r from-muted via-background to-muted
        ${variantStyles[variant]} ${className}`}
      role="status"
      aria-busy="true"
      aria-label="Loading"
    />
  );
}

Skeleton.displayName = 'Skeleton';
