"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 text-primary-foreground">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
            See how Anna's voice AI can boost engagement, increase conversions, 
            and revolutionize how your customers design their perfect space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Sales: (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;