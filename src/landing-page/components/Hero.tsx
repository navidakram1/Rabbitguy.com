import { MessageCircle, ShieldCheck, Zap, Sparkles, Film, Bot, ShoppingCart, Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../../client/components/ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0";
const MESSENGER_URL = "http://m.me/844654765662871";

export function Hero() {
  return (
    <div className="relative w-full pt-6 md:pt-12 pb-16 overflow-hidden">
      <TopGradient />
      <BottomGradient />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold backdrop-blur-sm animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            1560+ Projects Completed
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            100% Moneyback Guarantee
          </div>
        </div>

        {/* Main Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            All-in-One{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Digital & SaaS
            </span>{" "}
            Solution!
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            We help you build, launch, and scale with{" "}
            <span className="text-foreground font-semibold">Graphic Content</span>,{" "}
            <span className="text-foreground font-semibold">SEO</span>,{" "}
            <span className="text-foreground font-semibold">Marketing</span>,{" "}
            <span className="text-foreground font-semibold">Websites</span> &{" "}
            <span className="text-foreground font-semibold">Apps</span>.
          </p>

          {/* Live Chat Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat on WhatsApp
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Zap className="w-5 h-5" />
              Live Chat on Messenger
            </a>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-xl" asChild>
              <WaspRouterLink to={routes.PricingPageRoute.to}>
                View Pricing <ArrowRight className="ml-1 w-4 h-4" />
              </WaspRouterLink>
            </Button>
          </div>

          {/* Guarantee Pill */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Secure Payment
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Lifetime Support
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Revisions
            </span>
          </div>

          {/* Quick Jump Category Chips */}
          <div className="mt-10 pt-6 border-t border-border/60">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
              Explore Our Core Solutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <a
                href="#ai"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-accent border border-border text-xs sm:text-sm font-medium transition-colors hover:border-primary/50"
              >
                <Bot className="w-4 h-4 text-purple-500" /> AI SaaS Model
              </a>
              <a
                href="#movie"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-accent border border-border text-xs sm:text-sm font-medium transition-colors hover:border-primary/50"
              >
                <Film className="w-4 h-4 text-rose-500" /> Movie & Series SaaS
              </a>
              <a
                href="#ecom"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-accent border border-border text-xs sm:text-sm font-medium transition-colors hover:border-primary/50"
              >
                <ShoppingCart className="w-4 h-4 text-blue-500" /> eCommerce & Dropship
              </a>
              <a
                href="#cloud"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-accent border border-border text-xs sm:text-sm font-medium transition-colors hover:border-primary/50"
              >
                <Cloud className="w-4 h-4 text-sky-500" /> Cloud Storage & File Share
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary text-xs sm:text-sm font-semibold transition-colors"
              >
                <Sparkles className="w-4 h-4" /> All 9+ Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopGradient() {
  return (
    <div
      className="absolute right-0 top-0 -z-10 w-full transform-gpu overflow-hidden blur-3xl opacity-30 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="aspect-[1020/880] w-[70rem] bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-20 sm:right-1/4 sm:translate-x-1/2"
        style={{
          clipPath:
            "polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)",
        }}
      />
    </div>
  );
}

function BottomGradient() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="aspect-[1020/880] w-[60rem] bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-20 -left-1/4"
        style={{
          clipPath: "ellipse(80% 30% at 80% 50%)",
        }}
      />
    </div>
  );
}
