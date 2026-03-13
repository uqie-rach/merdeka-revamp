import React from 'react';
import { Divider } from '@/components/ui/primitives/Divider';
import { SocialLinks } from '@/components/layout/SocialLinks';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                M
              </div>
              Merdeka
            </h4>
            <p className="text-sm text-muted-foreground">
              Indonesia's leading news source for breaking news, business, politics, and more.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Bisnis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politik</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Teknologi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hiburan</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Advertise</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Merdeka. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
