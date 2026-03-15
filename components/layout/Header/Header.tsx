'use client';

import { Bell, CircleUserRound, Moon, Sun } from 'lucide-react'
import React, { useState } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '@/components/ui/primitives/Button';
import { BurgerButton } from '@/components/layout/BurgerButton';
import { SocialLinks } from '@/components/layout/SocialLinks';
import SearchBar from '@/components/ui/SearchBar/SearchBar';

export function Header() {
  const { isDark, toggle, isLoaded } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isLoaded) return null;

  return (
    <header className="z-40 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Header's body */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="flex items-center gap-2">
              <img
                src={'/icons/logo-merdeka.svg'}
                width={136}
                height={40}
              />
            </a>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggle}
              className="hidden sm:inline-flex"
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>

            <Button
              variant='ghost'
              className='hidden! md:block!'
            >
              <Bell />
            </Button>

            <Button
              className='bg-white! text-black! dark:text-white! lg:bg-gray-700! lg:text-white! dark:bg-transparent! lg:dark:bg-primary!'
            >
              <CircleUserRound />
              <span
                className='hidden! lg:flex!'
              >
                Masuk
              </span>
            </Button>

            <BurgerButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'
            }`}
        >
          <ul className="pt-4 pb-2 space-y-1">
            <SearchBar />
          </ul>
        </nav>
      </div>
    </header>
  );
}
