"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/hooks/use-theme';
import Image from "next/image"
import Logo2 from "@/public/images/logo2.png"
import { aluminiSans } from '@/lib/fonts';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'How It Works' },
    { href: '#capabilities', label: 'Anna\'s Capabilities' },
    { href: '#studio', label: 'Studio' }
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
       
            <div className="flex gap-2 ">
              <Image
                src={Logo2}
                alt="AnnaDecor Logo"
                className="h-10 w-auto"
                priority
              />
              <p className={`hidden md:block self-end  text-3xl pt-2 text-primary font-semibold tracking-wide ${aluminiSans.className}`}>AnnaDecor</p>
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

          {/* Mobile Navigation - Theme Toggle always visible */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetTitle className='ml-2 pt-2'>Menu</SheetTitle>
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center space-x-3 ml-2">
                    <Image
                      src={Logo2}
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
                  <div className="px-4 pt-4 border-t border-border">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full"
                      onClick={closeSheet}
                    >
                      Schedule Demo
                    </Button>
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