'use client';

import React from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function BurgerButton({ isOpen, onClick, className = '' }: BurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg
        text-foreground transition-colors duration-200
        hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary
        md:hidden ${className}`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <span
          className={`absolute w-6 h-0.5 bg-currentColor rounded-full transition-all duration-300 ease-in-out
            ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
        />
        <span
          className={`absolute w-6 h-0.5 bg-currentColor rounded-full transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`absolute w-6 h-0.5 bg-currentColor rounded-full transition-all duration-300 ease-in-out
            ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
        />
      </div>
    </button>
  );
}
