'use client';

import React, { use } from 'react';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { ArticleMeta } from '@/components/article/ArticleMeta/ArticleMeta';
import { ArticleImage } from '@/components/article/ArticleImage/ArticleImage';
import { TagList } from '@/components/article/TagList/TagList';
import { RelatedArticles } from '@/components/article/RelatedArticles/RelatedArticles';
import { ArticleList } from '@/components/article/ArticleList/ArticleList';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { AdSlot } from '@/components/ads/AdSlot/AdSlot';
import { Divider } from '@/components/ui/primitives/Divider';
import { Button } from '@/components/ui/primitives/Button';

// Mock article data
const articleData = {
  id: '1',
  title: 'Breaking: Major Economic Development Impacts Global Markets',
  excerpt: 'Market experts analyze the implications of the latest economic announcement affecting worldwide trade and investment...',
  category: 'Economics',
  author: 'Sarah Johnson',
  authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  date: '1 hour ago',
  publishedAt: 'March 13, 2024',
  readTime: '8 min',
  image: 'https://images.unsplash.com/photo-1611974519962-8218c8e26a70?w=1200&h=600&fit=crop',
  tags: ['economics', 'markets', 'global-trade'],
  content: `
    <h2>Market Overview</h2>
    <p>The global markets have responded significantly to the latest economic announcement. Market analysts are closely monitoring the situation as major indices show notable movements. The implications of this development are expected to shape market trends for the coming months.</p>
    
    <h2>Key Developments</h2>
    <p>Several key points emerged from today's announcements that have captured the attention of investors and economists worldwide. The announcement addresses critical economic concerns that have been developing over the past quarters.</p>
    
    <p>Industry experts suggest that these measures could potentially provide stability to volatile markets. The response from major financial institutions has been cautiously optimistic, with many positioning themselves to adapt to the new economic environment.</p>
    
    <h2>Expert Analysis</h2>
    <p>Leading economists have provided their perspectives on the potential outcomes and long-term impacts of these developments. The consensus among analysts suggests a period of adjustment followed by potential stabilization.</p>
    
    <p>Investors are being advised to review their portfolios and consider long-term strategies rather than reacting to short-term volatility. Historical data suggests that markets typically adapt to significant policy changes within a reasonable timeframe.</p>
    
    <h2>Global Impact</h2>
    <p>The international community has already begun reacting to these announcements, with several countries announcing their own economic measures in response. The interconnected nature of global markets means that ripple effects are expected to reach various sectors and regions.</p>
    
    <p>Trade relationships may also be affected, as nations adjust their strategies to align with the new economic landscape. Companies operating internationally should monitor these developments closely to ensure their operations remain aligned with changing market conditions.</p>
  `,
};

// Related articles
const relatedArticles = [
  {
    id: '2',
    title: 'Fed Signals Potential Rate Changes',
    excerpt: 'Federal Reserve officials suggest possible adjustments to interest rates in upcoming meetings...',
    image: 'https://images.unsplash.com/photo-1611974519962-8218c8e26a70?w=400&h=300&fit=crop',
    category: 'Finance',
    date: '2 hours ago',
    author: 'Michael Chen',
    readTime: '6 min',
  },
  {
    id: '3',
    title: 'Stock Market Reaches New Heights',
    excerpt: 'Major indices close at record levels following positive earnings reports from tech sector...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    category: 'Markets',
    date: '3 hours ago',
    author: 'Emma Wilson',
    readTime: '5 min',
  },
  {
    id: '4',
    title: 'Corporate Earnings Beat Expectations',
    excerpt: 'Fortune 500 companies report stronger than anticipated quarterly results...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    category: 'Business',
    date: '4 hours ago',
    author: 'David Kumar',
    readTime: '7 min',
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ArticlePage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <MainLayout>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <ArticleMeta
            category={articleData.category}
            title={articleData.title}
            author={articleData.author}
            authorImage={articleData.authorImage}
            date={articleData.publishedAt}
            readTime={articleData.readTime}
          />
        </div>

        {/* Featured Image */}
        <div className="mb-8 max-w-4xl mx-auto">
          <ArticleImage src={articleData.image} alt={articleData.title} priority />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8 space-y-6">
              {articleData.content.split('<h2>').map((section, idx) => {
                if (idx === 0) return null;
                const [title, ...rest] = section.split('</h2>');
                return (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-bold mt-6">{title}</h2>
                    {rest.join('</h2>').split('<p>').map((para, pidx) => {
                      const [content] = para.split('</p>');
                      return content ? <p key={pidx} className="text-foreground leading-relaxed">{content}</p> : null;
                    })}
                  </div>
                );
              })}
            </div>

            <Divider className="my-8" />

            {/* Tags */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Tags</h4>
              <TagList tags={articleData.tags} />
            </div>

            <Divider className="my-8" />

            {/* Author Bio */}
            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <div className="flex items-start gap-4">
                <img
                  src={articleData.authorImage}
                  alt={articleData.author}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{articleData.author}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experienced journalist specializing in economics and financial markets. Has covered major financial events for over a decade.
                  </p>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </div>
            </div>

            {/* Share Article */}
            <div className="bg-muted rounded-lg p-6 mb-8">
              <h4 className="font-bold mb-4">Share this article</h4>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Copy Link</Button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mb-12">
              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
