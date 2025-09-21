"use client";

import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Home, Star } from 'lucide-react';
import { MdTouchApp } from "react-icons/md";

const HeroSection = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  // Auto-cycle every 4 seconds (disabled on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const interval = setInterval(() => {
      setIsTransformed(prev => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-8 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Premium Interior Design
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-9 md:leading-tight">
                Transform Your Space Into Something{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-[length:300%_300%] bg-clip-text text-transparent animate-[shimmer_6s_ease_infinite] tracking-widest md:tracking-normal text-5xl md:text-7xl text-shadow-lg">
                  Extraordinary
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-6 md:leading-relaxed">
                Professional interior design services that bring your vision
                to life. From concept to completion, we create spaces that
                inspire and delight.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                View Portfolio
              </Button>
            </div>
            <div className="hidden md:flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  200+ Happy Clients
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  5.0 Rating
                </span>
              </div>
            </div>
          </div>
          
          {/* Image Container with Multiple Interaction Options */}
          <div className="relative">
            {/* Main Image Container */}
            <div 
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 relative cursor-pointer"
              onClick={() => setIsTransformed(!isTransformed)}
            >
            {/* Base Image (Calm Luxury) */}
              <img
                src="/images/hero-1.png"
                alt="Calm luxury interior design"
                className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${
                  isTransformed ? 'opacity-0 scale-150' : 'opacity-100 scale-110'
                }`}
              />
              
              {/* Overlay Image (Bold Modern) */}
              <img
                src="/images/hero-2.png"
                alt="Bold modern interior design"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out ${
                  isTransformed ? 'opacity-100 scale-120' : 'opacity-0 scale-95'
                }`}
              />
              

            </div>

            {/* Toggle Button (Mobile Only) */}
            <div className="md:hidden absolute top-4 right-4 z-10">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsTransformed(!isTransformed)}
                className="backdrop-blur-sm shadow-lg"
              >
                <MdTouchApp className="w-4 h-4 mr-2" />
                {isTransformed ? 'Change to Calm' : 'Change to Bold'}
              </Button>
            </div>

            {/* Style Labels */}
            <div className="absolute top-4 left-4 z-10">
              <div className="relative">
                <Badge 
                  variant="secondary"
                  className={`bg-primary md:text-2xl backdrop-blur-sm shadow-lg transition-opacity duration-500 absolute top-0 left-0 ${
                    isTransformed ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  Calm Luxury
                </Badge>
                <Badge 
                  variant="secondary"
                  className={` bg-secondary md:text-2xl backdrop-blur-sm shadow-lg transition-opacity duration-500 absolute top-0 left-0 ${
                    isTransformed ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  Bold Modern
                </Badge>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Premium Design</p>
                  <p className="text-sm text-muted-foreground">
                    Tailored to You
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Indicator (Desktop Only) */}
            <div className="hidden md:block absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  !isTransformed ? 'bg-primary scale-125' : 'bg-primary/30'
                }`} />
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isTransformed ? 'bg-primary scale-125' : 'bg-primary/30'
                }`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;