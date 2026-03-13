import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/primitives/Badge';

interface TagListProps {
  tags: string[];
  className?: string;
}

export function TagList({ tags, className = '' }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link key={tag} href={`/tag/${tag}`}>
          <Badge variant="secondary" className="cursor-pointer hover:bg-muted transition-colors">
            #{tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
}
