import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  return (
    <img
      src={src || `https://via.placeholder.com/48?text=${alt.charAt(0)}`}
      alt={alt}
      className={`rounded-full object-cover ${sizeStyles[size]} ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
