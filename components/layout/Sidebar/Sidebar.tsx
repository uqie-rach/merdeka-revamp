'use client';

import React from 'react';
import { ArticleList } from '@/components/article/ArticleList/ArticleList';
import { AdSlot } from '@/components/ads/AdSlot/AdSlot';
import { Divider } from '@/components/ui/primitives/Divider';
import { SkeletonCard, SkeletonText } from '@/components/ui/skeleton/index';

interface SidebarProps {
  className?: string;
  isLoading?: boolean;
}

// Mock trending articles
const trendingArticles = [
  {
    id: '1',
    title: 'Breaking News Story About Recent Events',
    excerpt: 'Latest developments...',
    image: 'https://images.unsplash.com/photo-1590614890963-42cb94c65516?w=300&h=300&fit=crop',
    category: 'Breaking',
    date: '2 hours ago',
    author: 'Staff',
  },
  {
    id: '2',
    title: 'Important Update on Global Markets',
    excerpt: 'Market analysis...',
    image: 'https://images.unsplash.com/photo-1611974519962-8218c8e26a70?w=300&h=300&fit=crop',
    category: 'Market',
    date: '4 hours ago',
    author: 'Analyst',
  },
  {
    id: '3',
    title: 'Tech Giants Announce New Partnership',
    excerpt: 'Industry news...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134ef2944f0?w=300&h=300&fit=crop',
    category: 'Tech',
    date: '6 hours ago',
    author: 'Reporter',
  },
  {
    id: '4',
    title: 'Sports Team Advances to Finals',
    excerpt: 'Championship bound...',
    image: 'https://images.unsplash.com/photo-1516383740770-fbda5729e203?w=300&h=300&fit=crop',
    category: 'Sports',
    date: '3 hours ago',
    author: 'Sports',
  },
  {
    id: '5',
    title: 'Entertainment Industry Updates',
    excerpt: 'Industry insider news...',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=300&fit=crop',
    category: 'Entertainment',
    date: '5 hours ago',
    author: 'Contributor',
  },
];

export function Sidebar({ className = '', isLoading = false }: SidebarProps) {
  return (
    <aside className={`space-y-6 ${className}`}>
      {/* Ad Slot */}
      <AdSlot position="sidebar-top" lazy />

      {/* Trending Section */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-bold mb-4">Trending</h3>
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} variant="trending" />
            ))}
          </div>
        ) : (
          <ArticleList
            articles={trendingArticles}
            variant="trending"
          />
        )}
      </div>

      <Divider />

      {/* Second Ad Slot */}
      <AdSlot position="sidebar-middle" lazy />

      {/* Newsletter signup */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        {isLoading ? (
          <div className="space-y-3">
            <SkeletonText lines={3} />
          </div>
        ) : (
          <>
            <h4 className="font-bold mb-2">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 rounded bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
