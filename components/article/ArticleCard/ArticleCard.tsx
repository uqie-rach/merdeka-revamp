'use client';

import React from 'react';
import Link from 'next/link';
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { Badge } from '@/components/ui/primitives/Badge';
import { Divider } from '@/components/ui/primitives/Divider';
import { SkeletonCard } from '@/components/ui/skeleton/SkeletonCard';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime?: string;
  variant?: 'featured' | 'grid' | 'list' | 'trending';
  className?: string;
  loading?: boolean;
}

export const ArticleCard = React.memo(function ArticleCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  author,
  readTime = '5 min',
  variant = 'grid',
  className = '',
  loading = false,
}: ArticleCardProps) {
  if (loading) {
    return <SkeletonCard variant={variant} className={className} />;
  }

  const href = `/article/${id}`;

  if (variant === 'featured') {
    return (
      <Link href={href}>
        <article className={`group cursor-pointer overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow ${className}`}>
          <ArticleImage src={image} alt={title} aspectRatio="video" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6 space-y-3">
            <Badge variant="accent">{category}</Badge>
            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-3">{title}</h2>
            <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
            <Divider />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{author}</span>
              <span>{date}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'trending') {
    return (
      <Link href={href}>
        <article className={`group cursor-pointer flex gap-4 pb-4 hover:text-primary transition-colors ${className}`}>
          <ArticleImage src={image} alt={title} aspectRatio="square" className="w-20 h-20 flex-shrink-0 group-hover:scale-105 transition-transform" />
          <div className="flex-1 min-w-0">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
            <h3 className="font-bold line-clamp-2 group-hover:text-primary mt-1">{title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{date}</p>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'list') {
    return (
      <Link href={href}>
        <article className={`group cursor-pointer flex gap-4 pb-6 hover:opacity-80 transition-opacity ${className}`}>
          <ArticleImage src={image} alt={title} aspectRatio="square" className="w-32 h-32 flex-shrink-0" />
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="secondary">{category}</Badge>
              <span className="text-muted-foreground">{readTime}</span>
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{excerpt}</p>
            <p className="text-xs text-muted-foreground">{date} · By {author}</p>
          </div>
        </article>
      </Link>
    );
  }

  // Default grid variant
  return (
    <Link href={href}>
      <article className={`group cursor-pointer overflow-hidden rounded-lg bg-card hover:shadow-md transition-shadow ${className}`}>
        <ArticleImage src={image} alt={title} aspectRatio="video" className="group-hover:scale-105 transition-transform duration-300" />
        <div className="p-4 space-y-2">
          <Badge variant="accent">{category}</Badge>
          <h3 className="font-bold group-hover:text-primary transition-colors truncate-2">{title}</h3>
          <p className="text-sm text-muted-foreground truncate-2">{excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
});
