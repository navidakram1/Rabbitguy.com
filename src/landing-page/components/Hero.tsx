import { useState, useEffect } from "react";
import { MessageCircle, ShieldCheck, Zap, Sparkles, Film, Bot, ShoppingCart, Cloud, CheckCircle2, ArrowRight, ChevronDown, Rocket, Flame } from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../../client/components/ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0";
const MESSENGER_URL = "http://m.me/844654765662871";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scroll-driven progress (clamped between 0 and 1 for top 500px scroll)
  const progress = Math.min(Math.max(scrollY / 500, 0), 1);
  const heroTilt = progress * 8; // 0 to 8 degrees tilt
  const heroScale = 1 - progress * 0.04; // 1.0 to 0.96
  const heroTranslateY = progress * 30; // parallax sink
  const leftBadgeX = -progress * 50;
  const leftBadgeY = -progress * 40;
  const rightBadgeX = progress * 50;
  const rightBadgeY = -progress * 50;
  const indicatorOpacity = Math.max(0, 1 - scrollY / 120);

  return (
    <div className="relative w-full pt-6 md:pt-14 pb-20 sm:pb-28 overflow-hidden [perspective:1200px]">
      {/* Animated Glowing Gradient Blobs reacting to scroll */}
      <TopGradient scrollProgress={progress} />
      <BottomGradient scrollProgress={progress} />

      {/* Floating Animated Badges for Desktop with Parallax translation */}
      <div 
        className="hidden lg:block absolute top-20 left-6 xl:left-20 pointer-events-none transition-transform duration-100 ease-out z-20"
        style={{
          transform: `translate3d(${leftBadgeX}px, ${leftBadgeY}px, 0)`,
        }}
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/15 text-xs font-bold text-foreground animate-[float_5s_ease-in-out_infinite]">
          <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-500">🤖</span>
          <div>
            <div className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">Automated</div>
            <div>AI SaaS Ready</div>
          </div>
        </div>
      </div>

      <div 
        className="hidden lg:block absolute top-24 right-6 xl:right-20 pointer-events-none transition-transform duration-100 ease-out z-20"
        style={{
          transform: `translate3d(${rightBadgeX}px, ${rightBadgeY}px, 0)`,
        }}
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/15 text-xs font-bold text-foreground animate-[float_6s_ease-in-out_infinite_1.5s]">
          <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-500">💵</span>
          <div>
            <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Revenue</div>
            <div>Passive Income</div>
          </div>
        </div>
      </div>

      <div 
        className="hidden xl:block absolute bottom-28 left-12 pointer-events-none transition-transform duration-100 ease-out z-20"
        style={{
          transform: `translate3d(${leftBadgeX * 0.7}px, ${leftBadgeY * 1.2}px, 0)`,
        }}
      >
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-card/85 backdrop-blur-xl border border-blue-500/30 shadow-xl shadow-blue-500/10 text-xs font-bold text-foreground animate-[float_7s_ease-in-out_infinite_0.8s]">
          <Rocket className="w-4 h-4 text-blue-500" />
          <span>Turnkey Setup</span>
        </div>
      </div>

      <div 
        className="hidden xl:block absolute bottom-28 right-12 pointer-events-none transition-transform duration-100 ease-out z-20"
        style={{
          transform: `translate3d(${rightBadgeX * 0.7}px, ${rightBadgeY * 1.2}px, 0)`,
        }}
      >
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-card/85 backdrop-blur-xl border border-amber-500/30 shadow-xl shadow-amber-500/10 text-xs font-bold text-foreground animate-[float_6.5s_ease-in-out_infinite_2.2s]">
          <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>1560+ Orders Done</span>
        </div>
      </div>

      {/* Main Hero Container with 3D Scroll Perspective & Tilt */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `rotateX(${heroTilt}deg) scale(${heroScale}) translateY(${heroTranslateY}px)`,
          transformOrigin: "center top",
        }}
      >
        
        {/* Top Floating Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm transition-all hover:scale-105">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            1560+ Projects Successfully Delivered
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm transition-all hover:scale-105">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            100% Moneyback Guarantee
          </div>
        </div>

        {/* Main Headline with Animated Gradient Flow */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.12]">
            All-in-One{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-[gradient-flow_6s_ease_infinite] bg-clip-text text-transparent drop-shadow-sm">
              Digital & SaaS
            </span>{" "}
            Solution!
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            We help you build, launch, and scale with{" "}
            <span className="text-foreground font-semibold underline decoration-blue-500/50 decoration-2 underline-offset-4">Graphic Content</span>,{" "}
            <span className="text-foreground font-semibold underline decoration-purple-500/50 decoration-2 underline-offset-4">SEO</span>,{" "}
            <span className="text-foreground font-semibold underline decoration-indigo-500/50 decoration-2 underline-offset-4">Marketing</span>,{" "}
            <span className="text-foreground font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">Websites</span> &{" "}
            <span className="text-foreground font-semibold underline decoration-pink-500/50 decoration-2 underline-offset-4">Apps</span>.
          </p>

          {/* Live Chat Action Buttons with Interactive Pulsing Glow */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 hover:ring-4 hover:ring-emerald-500/30 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Live Chat on WhatsApp
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 hover:ring-4 hover:ring-blue-500/30 group"
            >
              <Zap className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              Live Chat on Messenger
            </a>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-2xl border-2 hover:bg-muted/80 shadow-md transition-all hover:scale-105 active:scale-95" asChild>
              <WaspRouterLink to={routes.PricingPageRoute.to}>
                View Pricing <ArrowRight className="ml-1 w-4 h-4" />
              </WaspRouterLink>
            </Button>
          </div>

          {/* Guarantee Pill */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Secure Payment
            </span>
            <span className="text-muted-foreground/30">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Lifetime Support
            </span>
            <span className="text-muted-foreground/30">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Revisions
            </span>
          </div>

          {/* Quick Jump Category Chips with 21st.dev Hover Cards */}
          <div className="mt-12 pt-8 border-t border-border/70">
            <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-4">
              Explore Our Core Solutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <a
                href="#ai"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-card hover:bg-accent border border-border hover:border-purple-500/50 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div className="p-1 rounded-lg bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                  <Bot className="w-4 h-4" />
                </div>
                <span>AI SaaS Model</span>
              </a>
              <a
                href="#movie"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-card hover:bg-accent border border-border hover:border-rose-500/50 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div className="p-1 rounded-lg bg-rose-500/10 text-rose-500 group-hover:scale-110 transition-transform">
                  <Film className="w-4 h-4" />
                </div>
                <span>Movie & Series SaaS</span>
              </a>
              <a
                href="#ecom"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-card hover:bg-accent border border-border hover:border-blue-500/50 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div className="p-1 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <span>eCommerce & Dropship</span>
              </a>
              <a
                href="#cloud"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-card hover:bg-accent border border-border hover:border-sky-500/50 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div className="p-1 rounded-lg bg-sky-500/10 text-sky-500 group-hover:scale-110 transition-transform">
                  <Cloud className="w-4 h-4" />
                </div>
                <span>Cloud Storage</span>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary text-xs sm:text-sm font-bold transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>All 9+ Services</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 21st.dev Animated Scroll Down Indicator */}
      <div 
        className="flex justify-center mt-10 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: indicatorOpacity }}
      >
        <a 
          href="#video-showcase" 
          className="pointer-events-auto inline-flex flex-col items-center gap-1.5 px-4 py-2 rounded-full bg-card/60 hover:bg-card/90 backdrop-blur-md border border-border/80 shadow-md text-xs font-semibold text-muted-foreground hover:text-foreground transition-all hover:scale-105 group"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-3.5 border-2 border-primary/50 rounded-full flex justify-center pt-0.5">
              <span className="w-0.5 h-1 bg-primary rounded-full animate-bounce" />
            </span>
            Scroll to explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-primary animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

function TopGradient({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div
      className="absolute right-0 top-0 -z-10 w-full transform-gpu overflow-hidden blur-3xl opacity-40 pointer-events-none transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(0, ${scrollProgress * 80}px, 0) scale(${1 + scrollProgress * 0.15})`,
      }}
      aria-hidden="true"
    >
      <div
        className="aspect-[1020/880] w-[75rem] bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-25 sm:right-1/4 sm:translate-x-1/2 animate-[pulse-glow_8s_ease-in-out_infinite]"
        style={{
          clipPath:
            "polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)",
        }}
      />
    </div>
  );
}

function BottomGradient({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-40 pointer-events-none transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(0, ${-scrollProgress * 60}px, 0) scale(${1 - scrollProgress * 0.1})`,
      }}
      aria-hidden="true"
    >
      <div
        className="aspect-[1020/880] w-[65rem] bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-20 -left-1/4 animate-[pulse-glow_10s_ease-in-out_infinite_2s]"
        style={{
          clipPath: "ellipse(80% 30% at 80% 50%)",
        }}
      />
    </div>
  );
}

