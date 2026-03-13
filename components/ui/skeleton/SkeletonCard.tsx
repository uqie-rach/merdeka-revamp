import React from 'react';
import { Skeleton } from './Skeleton';
import { SkeletonImage } from './SkeletonImage';
import { SkeletonText } from './SkeletonText';

export interface SkeletonCardProps {
  variant?: 'featured' | 'grid' | 'list' | 'trending';
  className?: string;
}

export const SkeletonCard = React.memo(function SkeletonCard({
  variant = 'grid',
  className = '',
}: SkeletonCardProps) {
  if (variant === 'trending') {
    return (
      <div className={`flex gap-4 pb-4 ${className}`}>
        <Skeleton variant="avatar" className="w-20 h-20 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-16 h-4" />
          <SkeletonText lines={2} />
          <Skeleton variant="text" className="w-24 h-3" />
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className={`flex gap-4 pb-6 ${className}`}>
        <Skeleton variant="avatar" className="w-32 h-32 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="flex gap-2">
            <Skeleton variant="text" className="w-16 h-4" />
            <Skeleton variant="text" className="w-20 h-4" />
          </div>
          <SkeletonText lines={2} />
          <Skeleton variant="text" className="w-40 h-3" />
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`overflow-hidden rounded-lg bg-card ${className}`}>
        <SkeletonImage aspectRatio="video" />
        <div className="p-6 space-y-3">
          <Skeleton variant="text" className="w-20 h-4" />
          <SkeletonText lines={2} />
          <Skeleton variant="text" className="w-48 h-3" />
          <div className="flex justify-between">
            <Skeleton variant="text" className="w-24 h-3" />
            <Skeleton variant="text" className="w-24 h-3" />
          </div>
        </div>
      </div>
    );
  }

  // Default grid variant
  return (
    <div className={`overflow-hidden rounded-lg bg-card ${className}`}>
      <SkeletonImage aspectRatio="video" />
      <div className="p-4 space-y-2">
        <Skeleton variant="text" className="w-20 h-4" />
        <SkeletonText lines={2} />
        <div className="flex justify-between pt-2">
          <Skeleton variant="text" className="w-20 h-3" />
          <Skeleton variant="text" className="w-20 h-3" />
        </div>
      </div>
    </div>
  );
});

SkeletonCard.displayName = 'SkeletonCard';
