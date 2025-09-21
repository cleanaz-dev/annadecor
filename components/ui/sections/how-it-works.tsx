"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, Image, ShoppingCart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Voice Call",
      description:
        "Customer calls and talks to Anna about their room, style preferences, and design goals.",
      icon: Users,
    },
    {
      step: "02", 
      title: "SMS Follow-up",
      description:
        "Anna sends SMS asking about specific products, budget, and room measurements for personalization.",
      icon: MessageSquare,
    },
    {
      step: "03",
      title: "AI Mockup",
      description:
        "Anna generates and sends a custom room mockup via SMS showing their space with recommended products.",
      icon: Image,
    },
    {
      step: "04",
      title: "Convert",
      description:
        "Customer clicks to purchase products directly or book a consultation with your team.",
      icon: ShoppingCart,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Customer Journey
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            How Anna Works With Your Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Anna&apos;s seamless voice-to-purchase flow turns casual inquiries into 
            qualified leads and sales conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;