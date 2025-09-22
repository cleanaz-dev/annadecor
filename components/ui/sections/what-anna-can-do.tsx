"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Lightbulb, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Voice AI Capabilities
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            What Anna Can Do For Your Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Anna&apos;s voice AI transforms how your customers experience
            interior design, providing expert guidance and personalized
            recommendations that drive engagement and sales.
          </p>
        </div>

        {/* Diagonal Staggered Layout */}
        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Image with scroll-in/out animation */}
              <div className="flex-shrink-0 w-full lg:w-1/2 max-w-md relative overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.1 }}
                  viewport={{ amount: 0.1 }} // triggers when ~40% visible
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-80 object-cover"
                    width={500}
                    height={500}
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                    }}
                  />

                  {/* Gradient Overlay follows scroll */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-lg bg-gradient-to-t from-accent/30 via-primary/30 to-secondary/30"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full lg:w-1/2">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <capability.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        {capability.title}
                      </h3>
                    </div>

                    <p className="text-lg leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="space-y-3">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAnnaCanDo;
