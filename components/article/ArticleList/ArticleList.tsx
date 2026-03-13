'use client';

import React from 'react';
import { ArticleCard } from '../ArticleCard/ArticleCard';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime?: string;
}

interface ArticleListProps {
  articles: Article[];
  variant?: 'grid' | 'list' | 'trending';
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  isLoading?: boolean;
  loadingCount?: number;
}

export function ArticleList({
  articles,
  variant = 'grid',
  columns = 3,
  className = '',
  isLoading = false,
  loadingCount = 6,
}: ArticleListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const displayArticles = isLoading ? Array.from({ length: loadingCount }) : articles;

  if (variant === 'list') {
    return (
      <div className={`divide-y divide-border ${className}`}>
        {displayArticles.map((article, idx) => (
          <ArticleCard
            key={isLoading ? `skeleton-${idx}` : article.id}
            {...(isLoading
              ? {
                  id: `skeleton-${idx}`,
                  title: '',
                  excerpt: '',
                  image: '',
                  category: '',
                  date: '',
                  author: '',
                }
              : article)}
            variant="list"
            className="py-6 first:pt-0 last:pb-0"
            loading={isLoading}
          />
        ))}
      </div>
    );
  }

  if (variant === 'trending') {
    return (
      <div className={`space-y-4 ${className}`}>
        {displayArticles.map((article, idx) => (
          <ArticleCard
            key={isLoading ? `skeleton-${idx}` : article.id}
            {...(isLoading
              ? {
                  id: `skeleton-${idx}`,
                  title: '',
                  excerpt: '',
                  image: '',
                  category: '',
                  date: '',
                  author: '',
                }
              : article)}
            variant="trending"
            loading={isLoading}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {displayArticles.map((article, idx) => (
        <ArticleCard
          key={isLoading ? `skeleton-${idx}` : article.id}
          {...(isLoading
            ? {
                id: `skeleton-${idx}`,
                title: '',
                excerpt: '',
                image: '',
                category: '',
                date: '',
                author: '',
              }
            : article)}
          variant={variant}
          loading={isLoading}
        />
      ))}
    </div>
  );
}
