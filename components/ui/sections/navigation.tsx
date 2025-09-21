"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/hooks/use-theme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'How It Works' },
    { href: '#capabilities', label: 'Anna\'s Capabilities' },
    { href: '#about', label: 'About' }
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/images/logo2.png"
                alt="AnnaDecor Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
              <Button variant="default" size="sm">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/logo2.png"
                      alt="AnnaDecor Logo"
                      className="h-8 w-auto"
                    />
                    <span className="text-xl font-bold text-primary">AnnaDecor</span>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={closeSheet}
                        className="text-foreground hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors block"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-border">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full"
                      onClick={closeSheet}
                    >
                      Schedule Demo
                    </Button>
                  </div>

                  {/* Theme Toggle */}
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 space-y-3 text-sm text-muted-foreground">
                    <p>Ready to get started?</p>
                    <div className="space-y-2">
                      <a 
                        href="mailto:hello@annadecor.com"
                        className="block hover:text-primary transition-colors"
                      >
                        hello@annadecor.com
                      </a>
                      <a 
                        href="tel:5551234567"
                        className="block hover:text-primary transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;