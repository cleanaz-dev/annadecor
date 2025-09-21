"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Lightbulb,
  FileText,
  Sparkles,
} from "lucide-react";
import Image from "next/image"

const WhatAnnaCanDo = () => {
  const capabilities = [
    {
      title: "Helping Design",
      description:
        "Anna guides your customers through personalized design consultations, asking the right questions to understand their style, needs, and budget.",
      image: "/images/a-helping-design-min.png",
      icon: MessageCircle,
      benefits: [
        "24/7 availability for customer inquiries",
        "Personalized style recommendations",
        "Budget-conscious suggestions",
      ],
    },
    {
      title: "Thinking About Design",
      description:
        "Anna processes complex design requirements and generates creative solutions tailored to each customer's unique space and preferences.",
      image: "/images/a-thinking-min.png",
      icon: Lightbulb,
      benefits: [
        "Instant design ideation",
        "Space optimization suggestions",
        "Style trend awareness",
      ],
    },
    {
      title: "Creating Design Reports",
      description:
        "Anna generates comprehensive design reports with product recommendations, mood boards, and detailed specifications for your customers.",
      image: "/images/a-working-on-report-min.png",
      icon: FileText,
      benefits: [
        "Professional documentation",
        "Detailed product specifications",
        "Easy client sharing",
      ],
    },
    {
      title: "Being Herself",
      description:
        "Anna brings personality and expertise to every interaction, making the design process enjoyable while building trust with your customers.",
      image: "/images/a-being-herself-min.png",
      icon: Sparkles,
      benefits: [
        "Consistent brand experience",
        "Engaging conversation flow",
        "Expert design knowledge",
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Voice AI Capabilities
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            What Anna Can Do For Your Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Anna&apos;s voice AI transforms how your customers experience interior
            design, providing expert guidance and personalized recommendations
            that drive engagement and sales.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Image Section */}
              <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                  }}
                  width={200}
                  height={200}
                />
                {/* Gradient Overlay (fades out on hover) */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-accent/30 via-primary/30 to-secondary/30 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Card (text only) */}
              <Card className="mt-6 hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm w-full max-w-md">
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {capability.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    {capability.description}
                  </p>

                  <div className="space-y-2">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAnnaCanDo;
