"use client";

import React from 'react';
import Image from 'next/image';
import Logo1 from "@/public/images/logo1.png"

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={Logo1}
              alt="AnnaDecor Logo" 
              className="size-52"
              priority
            />
          </div>

          {/* Tagline */}
          <p className="text-center text-muted-foreground max-w-md text-balance">
            Voice AI that transforms how customers design their perfect space
          </p>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border/40 w-full">
            <p>&copy; 2024 AnnaDecor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;