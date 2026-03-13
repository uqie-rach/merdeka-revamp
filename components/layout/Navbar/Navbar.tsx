'use client';

import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 'bisnis', label: 'Bisnis', href: '/category/bisnis' },
  { id: 'politik', label: 'Politik', href: '/category/politik' },
  { id: 'ekonomi', label: 'Ekonomi', href: '/category/ekonomi' },
  { id: 'teknologi', label: 'Teknologi', href: '/category/teknologi' },
  { id: 'hiburan', label: 'Hiburan', href: '/category/hiburan' },
  { id: 'olahraga', label: 'Olahraga', href: '/category/olahraga' },
];

export function Navbar() {
  return (
    <nav className="bg-card border-b border-border sticky top-12 z-30 md:relative md:top-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-primary"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}
