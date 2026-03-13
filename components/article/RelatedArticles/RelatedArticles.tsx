import React from 'react';
import { ArticleList } from '../ArticleList/ArticleList';

interface RelatedArticlesProps {
  title?: string;
  articles: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    author: string;
    readTime?: string;
  }>;
  className?: string;
}

export function RelatedArticles({
  title = 'Related Articles',
  articles,
  className = '',
}: RelatedArticlesProps) {
  return (
    <section className={className}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <ArticleList articles={articles} columns={3} />
    </section>
  );
}
