import React from 'react';
import { SocialIcon } from '@/components/ui/SocialIcon';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const SOCIAL_LINKS = [
  { platform: 'twitter' as const, url: 'https://twitter.com' },
  { platform: 'instagram' as const, url: 'https://instagram.com' },
  { platform: 'threads' as const, url: 'https://threads.net' },
  { platform: 'tiktok' as const, url: 'https://tiktok.com' },
];

export function SocialLinks({ className = '', iconClassName = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <SocialIcon
          key={link.platform}
          platform={link.platform}
          url={link.url}
          className={iconClassName}
        />
      ))}
    </div>
  );
}
