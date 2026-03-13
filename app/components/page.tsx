'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/primitives/Button';
import { Badge } from '@/components/ui/primitives/Badge';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { BurgerButton } from '@/components/layout/BurgerButton';
import { SocialLinks } from '@/components/layout/SocialLinks';
import {
  Skeleton,
  SkeletonText,
  SkeletonImage,
  SkeletonCard,
} from '@/components/ui/skeleton/index';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { Divider } from '@/components/ui/primitives/Divider';

export default function ComponentsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MainLayout>
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Component Showcase</h1>
          <p className="text-muted-foreground">
            Explore all the components in the design system
          </p>
        </div>

        {/* Social Icons Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Social Icons</h2>
          <p className="text-muted-foreground">
            Lightweight SVG-based social media icons with dark/light mode support
          </p>
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-3">Individual Icons</p>
                <div className="flex gap-4">
                  <SocialIcon platform="twitter" url="https://twitter.com" />
                  <SocialIcon platform="instagram" url="https://instagram.com" />
                  <SocialIcon platform="threads" url="https://threads.net" />
                  <SocialIcon platform="tiktok" url="https://tiktok.com" />
                  <SocialIcon platform="facebook" url="https://facebook.com" />
                </div>
              </div>
              <Divider />
              <div>
                <p className="text-sm font-semibold mb-3">Social Links Container</p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>

        {/* Burger Button Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Burger Button</h2>
          <p className="text-muted-foreground">
            Animated hamburger menu button for mobile navigation
          </p>
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Closed State
                </p>
                <BurgerButton isOpen={false} onClick={() => {}} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Open State
                </p>
                <BurgerButton isOpen={true} onClick={() => {}} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Interactive
                </p>
                <BurgerButton
                  isOpen={menuOpen}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skeleton Loaders Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Skeleton Loaders</h2>
          <p className="text-muted-foreground">
            Loading placeholders to prevent layout shift and improve perceived
            performance
          </p>
          <div className="bg-card rounded-lg p-6 border border-border space-y-8">
            {/* Base Skeleton */}
            <div>
              <p className="text-sm font-semibold mb-3">Base Skeleton</p>
              <div className="flex gap-4">
                <Skeleton variant="default" />
                <Skeleton variant="avatar" />
                <Skeleton variant="text" />
              </div>
            </div>

            <Divider />

            {/* Skeleton Text */}
            <div>
              <p className="text-sm font-semibold mb-3">Skeleton Text (3 lines)</p>
              <SkeletonText lines={3} className="max-w-md" />
            </div>

            <Divider />

            {/* Skeleton Image */}
            <div>
              <p className="text-sm font-semibold mb-3">Skeleton Image</p>
              <SkeletonImage aspectRatio="video" className="max-w-md" />
            </div>

            <Divider />

            {/* Skeleton Cards */}
            <div>
              <p className="text-sm font-semibold mb-3">Skeleton Cards</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Grid</p>
                  <SkeletonCard variant="grid" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Featured</p>
                  <SkeletonCard variant="featured" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">List</p>
                  <SkeletonCard variant="list" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Trending</p>
                  <SkeletonCard variant="trending" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loading States Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Loading States</h2>
          <p className="text-muted-foreground">
            Components with built-in loading support
          </p>
          <div className="bg-card rounded-lg p-6 border border-border space-y-6">
            <div>
              <p className="text-sm font-semibold mb-3">
                Loading State Examples
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ArticleCard supports {`loading`} prop</li>
                <li>• ArticleList supports {`isLoading`} prop with skeleton display</li>
                <li>• Sidebar supports {`isLoading`} prop for trending section</li>
                <li>• ArticleImage shows skeleton while loading</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dark Mode Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Dark Mode Support</h2>
          <p className="text-muted-foreground">
            All components automatically adapt to light/dark theme
          </p>
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-sm text-muted-foreground">
              Use the theme toggle in the header to switch between light and
              dark modes. All colors, icons, and components automatically adapt
              to the selected theme using CSS variables.
            </p>
          </div>
        </section>

        {/* Performance Features Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Performance Features</h2>
          <p className="text-muted-foreground">
            Built-in optimizations for high-traffic websites
          </p>
          <div className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div className="grid gap-4">
              <div className="border border-border rounded p-4">
                <p className="font-semibold text-sm">Image Optimization</p>
                <p className="text-sm text-muted-foreground">
                  Lazy loading (loading="lazy"), async decoding, skeleton
                  placeholders to prevent layout shift
                </p>
              </div>
              <div className="border border-border rounded p-4">
                <p className="font-semibold text-sm">React.memo</p>
                <p className="text-sm text-muted-foreground">
                  Heavy components wrapped with React.memo to prevent unnecessary
                  re-renders
                </p>
              </div>
              <div className="border border-border rounded p-4">
                <p className="font-semibold text-sm">Ad System</p>
                <p className="text-sm text-muted-foreground">
                  AdSlot component with lazy loading and support for multiple
                  positions
                </p>
              </div>
              <div className="border border-border rounded p-4">
                <p className="font-semibold text-sm">Bundle Size</p>
                <p className="text-sm text-muted-foreground">
                  Lightweight SVG icons, minimal dependencies, modular component
                  structure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Usage Examples</h2>
          <p className="text-muted-foreground">
            How to use the new components in your pages
          </p>
          <div className="bg-card rounded-lg p-6 border border-border space-y-6">
            <div>
              <p className="text-sm font-semibold mb-2">Social Icons</p>
              <pre className="bg-muted rounded p-3 text-xs overflow-x-auto">
                {`import { SocialIcon } from '@/components/ui/SocialIcon';
import { SocialLinks } from '@/components/layout/SocialLinks';

// Single icon
<SocialIcon platform="twitter" url="https://twitter.com" />

// All links in footer
<SocialLinks />`}
              </pre>
            </div>
            <Divider />
            <div>
              <p className="text-sm font-semibold mb-2">Loading States</p>
              <pre className="bg-muted rounded p-3 text-xs overflow-x-auto">
                {`import { ArticleList } from '@/components/article/ArticleList';

// Show skeleton loaders while fetching
<ArticleList
  articles={articles}
  isLoading={isLoading}
  loadingCount={6}
  variant="grid"
/>`}
              </pre>
            </div>
            <Divider />
            <div>
              <p className="text-sm font-semibold mb-2">Mobile Navigation</p>
              <pre className="bg-muted rounded p-3 text-xs overflow-x-auto">
                {`import { BurgerButton } from '@/components/layout/BurgerButton';

const [isOpen, setIsOpen] = useState(false);

<BurgerButton
  isOpen={isOpen}
  onClick={() => setIsOpen(!isOpen)}
  aria-controls="mobile-menu"
/>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Implementation Notes</h2>
          <div className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Mobile Navigation</h3>
              <p className="text-sm text-muted-foreground">
                The Header component now includes a fully functional mobile menu
                that slides down with smooth animations. The BurgerButton animates
                from menu (☰) to close (✕) icon. The menu automatically closes
                when clicking a link.
              </p>
            </div>
            <Divider />
            <div>
              <h3 className="font-semibold mb-2">Skeleton Loaders</h3>
              <p className="text-sm text-muted-foreground">
                Skeleton loaders use CSS animations (pulse effect) to show loading
                state. They reserve exact space to prevent layout shift (CLS).
                ArticleImage component automatically shows skeleton while
                loading.
              </p>
            </div>
            <Divider />
            <div>
              <h3 className="font-semibold mb-2">Dark Mode</h3>
              <p className="text-sm text-muted-foreground">
                All components use CSS variables for theming. Toggle dark mode
                using the button in the header. Theme preference is saved to
                localStorage and respects system settings.
              </p>
            </div>
            <Divider />
            <div>
              <h3 className="font-semibold mb-2">Social Icons</h3>
              <p className="text-sm text-muted-foreground">
                SVG-based icons for Twitter, Instagram, Threads, TikTok, and
                Facebook. Each icon is optimized for performance and supports
                hover states and keyboard navigation. Used in both Header and
                Footer.
              </p>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
