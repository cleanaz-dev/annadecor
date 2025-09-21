
import HeroSection from "@/components/ui/sections/hero-section";
import HowItWorks from "@/components/ui/sections/how-it-works";
import WhatAnnaCanDo from "@/components/ui/sections/what-anna-can-do";
import CTABanner from "@/components/ui/sections/call-to-action";
import Footer from "@/components/ui/sections/footer";
import Navigation from "@/components/ui/sections/navigation";

export default function AnnaDecorLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-transparent to-primary">
     
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <WhatAnnaCanDo />
      <CTABanner />
      <Footer />
    </div>
  );
}
