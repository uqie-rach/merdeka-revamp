import React from 'react';
import { Skeleton } from './Skeleton';

export interface SkeletonImageProps {
  aspectRatio?: 'video' | 'square' | 'portrait';
  className?: string;
}

const aspectRatios = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
};

export const SkeletonImage = React.memo(function SkeletonImage({
  aspectRatio = 'video',
  className = '',
}: SkeletonImageProps) {
  return (
    <div className={`w-full ${aspectRatios[aspectRatio]} rounded-lg overflow-hidden ${className}`}>
      <Skeleton variant="image" className="w-full h-full" />
    </div>
  );
});

SkeletonImage.displayName = 'SkeletonImage';
