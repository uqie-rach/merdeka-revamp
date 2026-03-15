import React from 'react';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import Trending from '../Trending/Trending';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className='sticky top-0 z-50'>
        <Header />
        <Navbar />
        <Trending />
      </header>
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
