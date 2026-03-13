'use client';

import React from 'react';

type SocialPlatform = 'twitter' | 'instagram' | 'threads' | 'tiktok' | 'facebook';

interface SocialIconProps {
  platform: SocialPlatform;
  url: string;
  label?: string;
  className?: string;
}

const ICONS: Record<SocialPlatform, string> = {
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 11-4s1-8.333 0-10z"/>
  </svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <circle cx="17.5" cy="6.5" r="1.5"/>
  </svg>`,
  threads: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
  </svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 11-2.4-2.4c.2 0 .41.02.61.04V9.41a6.07 6.07 0 00-.61-.04C5.78 9.37 2 13.13 2 17.66c0 2.93 1.784 5.636 4.666 6.952.342.205.707.393 1.088.552 1.248.649 2.74 1.02 4.246 1.02 4.519 0 8.371-3.802 8.371-8.321V9.403a6.076 6.076 0 013.677 5.602v-3.6c0-.592-.057-1.179-.169-1.738z"/>
  </svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"/>
  </svg>`,
};

const LABELS: Record<SocialPlatform, string> = {
  twitter: 'Follow us on Twitter',
  instagram: 'Follow us on Instagram',
  threads: 'Follow us on Threads',
  tiktok: 'Follow us on TikTok',
  facebook: 'Follow us on Facebook',
};

export const SocialIcon = React.memo(function SocialIcon({
  platform,
  url,
  label,
  className = '',
}: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || LABELS[platform]}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200
        text-muted-foreground hover:text-primary
        hover:bg-primary/10 dark:hover:bg-primary/20
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900
        ${className}`}
    >
      <div className="w-5 h-5">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={{ __html: ICONS[platform] }}
        />
      </div>
    </a>
  );
});
