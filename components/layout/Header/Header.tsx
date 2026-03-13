'use client';

import React, { useState } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '@/components/ui/primitives/Button';
import { BurgerButton } from '@/components/layout/BurgerButton';
import { SocialLinks } from '@/components/layout/SocialLinks';

const MOBILE_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Bisnis', href: '#' },
  { label: 'Politik', href: '#' },
  { label: 'Teknologi', href: '#' },
  { label: 'Hiburan', href: '#' },
  { label: 'Trending', href: '#' },
];

export function Header() {
  const { isDark, toggle, isLoaded } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isLoaded) return null;

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                M
              </div>
              <span className="font-bold text-lg hidden sm:inline">Merdeka</span>
            </a>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full px-4 py-2 rounded-lg bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggle}
              className="hidden sm:inline-flex"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </Button>

            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>

            <BurgerButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-3">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <ul className="pt-4 pb-2 space-y-1">
            {MOBILE_NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
