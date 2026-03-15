'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { ArticleList } from '@/components/article/ArticleList/ArticleList';
import { ArticleCard } from '@/components/article/ArticleCard/ArticleCard';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { AdSlot } from '@/components/ads/AdSlot/AdSlot';
import { Divider } from '@/components/ui/primitives/Divider';
import Headline from '@/components/ui/Headline';

// Mock data
const featuredArticle = {
  id: 'featured-1',
  title: 'Breaking: Major Economic Development Impacts Global Markets',
  excerpt: 'Market experts analyze the implications of the latest economic announcement...',
  image: 'https://images.unsplash.com/photo-1611974519962-8218c8e26a70?w=800&h=450&fit=crop',
  category: 'Economics',
  date: '1 hour ago',
  author: 'Sarah Johnson',
  readTime: '8 min',
};

const businessArticles = [
  {
    id: 'business-1',
    title: 'Tech Startup Raises $50M in Series B Funding',
    excerpt: 'Silicon Valley startup announces major funding round led by top venture capitalists...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134ef2944f0?w=400&h=300&fit=crop',
    category: 'Business',
    date: '2 hours ago',
    author: 'Michael Chen',
    readTime: '5 min',
  },
  {
    id: 'business-2',
    title: 'Global Supply Chain Evolves Post-Pandemic',
    excerpt: 'Companies restructure logistics networks to enhance resilience and efficiency...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    category: 'Business',
    date: '3 hours ago',
    author: 'Emma Wilson',
    readTime: '6 min',
  },
  {
    id: 'business-3',
    title: 'Corporate Merger Creates Industry Giant',
    excerpt: 'Two major companies announce strategic merger to strengthen market position...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    category: 'Business',
    date: '4 hours ago',
    author: 'David Kumar',
    readTime: '7 min',
  },
];

const technologyArticles = [
  {
    id: 'tech-1',
    title: 'AI Revolution Transforms Business Operations',
    excerpt: 'Artificial intelligence adoption accelerates across industries...',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8a895b85840e7edc60828a108a?w=400&h=300&fit=crop',
    category: 'Technology',
    date: '5 hours ago',
    author: 'Alex Patterson',
    readTime: '9 min',
  },
  {
    id: 'tech-2',
    title: 'New Smartphone Model Launches Globally',
    excerpt: 'Latest flagship device features cutting-edge technology and design...',
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=300&fit=crop',
    category: 'Technology',
    date: '6 hours ago',
    author: 'Lisa Rodriguez',
    readTime: '5 min',
  },
  {
    id: 'tech-3',
    title: 'Cybersecurity Threats Rise in 2024',
    excerpt: 'Organizations face increased threats from sophisticated cyber attacks...',
    image: 'https://images.unsplash.com/photo-1526374965328-7f5af8ed8c82?w=400&h=300&fit=crop',
    category: 'Technology',
    date: '7 hours ago',
    author: 'James Liu',
    readTime: '8 min',
  },
];

const politicsArticles = [
  {
    id: 'politics-1',
    title: 'Government Announces New Policy Initiative',
    excerpt: 'Lawmakers unveil comprehensive plan addressing critical issues...',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    category: 'Politics',
    date: '2 hours ago',
    author: 'Thomas Green',
    readTime: '6 min',
  },
  {
    id: 'politics-2',
    title: 'International Summit Addresses Climate Change',
    excerpt: 'World leaders convene to discuss environmental protection strategies...',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    category: 'Politics',
    date: '4 hours ago',
    author: 'Nicole Patel',
    readTime: '7 min',
  },
  {
    id: 'politics-3',
    title: 'Parliament Votes on Economic Reform Bill',
    excerpt: 'Historic legislation passes after weeks of debate and negotiations...',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    category: 'Politics',
    date: '5 hours ago',
    author: 'Mark Thompson',
    readTime: '8 min',
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Headline hari ini */}
        <Headline />
        
        {/* Featured Article */}
        <section className="mb-12">
          <ArticleCard {...featuredArticle} variant="featured" />
        </section>

        {/* Header Ad */}
        <section className="mb-8">
          <AdSlot position="article-inline" lazy />
        </section>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Business Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Business</h2>
                <a href="/category/business" className="text-sm text-primary hover:underline">
                  View All →
                </a>
              </div>
              <ArticleList articles={businessArticles} columns={3} />
            </section>

            <Divider />

            {/* Technology Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Technology</h2>
                <a href="/category/technology" className="text-sm text-primary hover:underline">
                  View All →
                </a>
              </div>
              <ArticleList articles={technologyArticles} columns={3} />
            </section>

            <Divider />

            {/* Politics Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Politics</h2>
                <a href="/category/politics" className="text-sm text-primary hover:underline">
                  View All →
                </a>
              </div>
              <ArticleList articles={politicsArticles} columns={3} />
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
