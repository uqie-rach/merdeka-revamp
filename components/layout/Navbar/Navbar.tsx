'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-card shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0">
          {NAV_ITEMS.slice(0, 13).map((nav, id) => (
            <Link
              key={nav.label + id}
              href={nav.href}
              className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-primary"
            >
              {nav.label.toUpperCase()}
            </Link>
          ))}

          {/* Other categories */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">LAINNYA <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {
                NAV_ITEMS.slice(13).map((nav, id) => (
                  <DropdownMenuItem
                    key={nav.label + id}
                  >
                    <Link
                      href={nav.href}
                      className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-primary"
                    >
                      {nav.label.toUpperCase()}
                    </Link>
                  </DropdownMenuItem>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
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
