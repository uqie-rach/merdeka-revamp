'use client';

import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  position: 'header-banner' | 'sidebar-top' | 'sidebar-middle' | 'article-inline' | 'footer-banner';
  size?: string;
  lazy?: boolean;
  className?: string;
}

const adSizes = {
  'header-banner': { width: '100%', height: '100px' },
  'sidebar-top': { width: '300px', height: '250px' },
  'sidebar-middle': { width: '300px', height: '600px' },
  'article-inline': { width: '100%', height: '250px' },
  'footer-banner': { width: '100%', height: '90px' },
};

export const AdSlot = React.memo(function AdSlot({
  position,
  size,
  lazy = true,
  className = '',
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = adSizes[position];
  const style: React.CSSProperties = {
    width: size || dimensions.width,
    height: dimensions.height,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Simulate ad loading - replace with actual ad provider (Google AdSense, etc.)
    // This is a placeholder implementation
    const loadAd = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <div class="w-full h-full bg-gradient-to-br from-muted via-background to-muted flex items-center justify-center rounded">
            <div class="text-center">
              <p class="text-xs text-muted-foreground">Advertisement</p>
              <p class="text-xs text-muted-foreground mt-1">${dimensions.width} × ${dimensions.height}</p>
            </div>
          </div>
        `;
      }
    };

    if (lazy) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            loadAd();
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      loadAd();
    }
  }, [lazy, dimensions]);

  return (
    <div
      ref={containerRef}
      style={style}
      className={`flex items-center justify-center bg-muted rounded overflow-hidden ${className}`}
      role="region"
      aria-label={`Advertisement ${position}`}
    />
  );
});
