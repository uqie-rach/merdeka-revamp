import React from 'react';
import { Avatar } from '@/components/ui/primitives/Avatar';
import { Badge } from '@/components/ui/primitives/Badge';
import { Divider } from '@/components/ui/primitives/Divider';

interface ArticleMetaProps {
  category: string;
  title: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime?: string;
  className?: string;
}

export function ArticleMeta({
  category,
  title,
  author,
  authorImage,
  date,
  readTime = '5 min',
  className = '',
}: ArticleMetaProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <Badge variant="primary">{category}</Badge>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
      
      <Divider />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar src={authorImage} alt={author} size="md" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{date} · {readTime} read</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-muted transition-colors" title="Share">
            🔗
          </button>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors" title="Bookmark">
            🔖
          </button>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors" title="More">
            ⋮
          </button>
        </div>
      </div>
    </div>
  );
}
