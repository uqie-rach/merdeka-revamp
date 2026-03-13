'use client';

import React, { useState } from 'react';
import { SkeletonImage } from '@/components/ui/skeleton/index';

interface ArticleImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
  priority?: boolean;
  className?: string;
}

const aspectRatios = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
};

export const ArticleImage = React.memo(function ArticleImage({
  src,
  alt,
  aspectRatio = 'video',
  priority = false,
  className = '',
}: ArticleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${aspectRatios[aspectRatio]} ${className}`}
      style={{
        backgroundColor: 'var(--muted)',
      }}
    >
      {!isLoaded && !error && <SkeletonImage aspectRatio={aspectRatio} />}

      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded && !error ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted overflow-hidden">
          <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[skeleton_1.5s_infinite]" />
        </div>
      )}
    </div>
  );
});
