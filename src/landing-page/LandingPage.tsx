import { Hero } from "./components/Hero";
import { FeaturedVideoShowcase } from "./components/FeaturedVideoShowcase";
import { ServicesSection } from "./components/ServicesSection";
import { SaasModelsSection } from "./components/SaasModelsSection";
import { AiPromptStudio } from "./components/AiPromptStudio";
import { VideoTestimonialsSection } from "./components/VideoTestimonialsSection";
import { HowToOrderSection } from "./components/HowToOrderSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { TeamSection } from "./components/TeamSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { SchemaMarkup } from "./components/SchemaMarkup";
import { faqs, footerNavigation } from "./contentSections";

export function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/20">
      <SchemaMarkup />
      <main className="isolate">
        {/* 1. Hero with live chat & trust badges */}
        <Hero />

        {/* 2. Main YouTube SaaS Showcase Video */}
        <FeaturedVideoShowcase />

        {/* 3. Core Services (1560+ Projects Done) */}
        <ServicesSection />

        {/* 4. Turnkey SaaS Business Models */}
        <SaasModelsSection />

        {/* 5. Interactive AI Content & SEO Blogger Studio */}
        <AiPromptStudio />

        {/* 6. Customer Video Success Stories (4 YouTube Testimonials) */}
        <VideoTestimonialsSection />

        {/* 7. How Do I Order (4-Step Pipeline & 10% Off) */}
        <HowToOrderSection />

        {/* 8. Why Choose Us & Target Audiences */}
        <WhyUsSection />

        {/* 9. Our Team & Careers */}
        <TeamSection />

        {/* 10. Frequently Asked Questions */}
        <FAQ faqs={faqs} />
      </main>

      {/* Floating Cart Drawer with Save10 Coupon */}
      <CartDrawer />

      {/* Modern Global Footer */}
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
