import { Film, Bot, Cloud, ShoppingCart, Check, ArrowUpRight, DollarSign, Sparkles, Zap } from "lucide-react";
import { Button } from "../../client/components/ui/button";

const SAAS_MODELS = [
  {
    id: "movie",
    badge: "High Recurring Revenue",
    title: "Movie & Series Website SaaS",
    subtitle: "Sell Subscriptions & Run Automated Ads",
    icon: Film,
    accentColor: "from-rose-500 to-amber-500",
    badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    features: [
      "♾ Unlimited Movies and TV Series database integration",
      "Automated subscription tiers (Monthly / Annual pass)",
      "Integrated ad networks (Pop, Native, Banner ads for maximum RPM)",
      "Adaptive HD video streaming with subtitle selector",
      "Mobile responsive player with auto-next episode",
    ],
    monetization: "Subscription Tiers + Ad Revenue",
    demoUrl: "https://rabbitguy.com/saas/",
    tags: ["Movie Portal", "Series Streaming", "AdSense Ready"],
  },
  {
    id: "ai",
    badge: "AI Powered Growth",
    title: "AI Generation & Copywriting SaaS",
    subtitle: "A to Z AI Copywriting, Content & Workflow Solution",
    icon: Bot,
    accentColor: "from-purple-500 to-indigo-500",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    features: [
      "AI Copywriting for blogs, social posts, emails & ads",
      "Token-based or credit credit packages with Stripe checkout",
      "OpenAI GPT-4o, Claude 3.5 & Gemini AI models supported",
      "Prompt templates library for marketing, SEO & coding",
      "Clean user dashboard with copy export & history",
    ],
    monetization: "Monthly Credits + Token Add-ons",
    demoUrl: "https://rabbitguy.com/saas/",
    tags: ["AI SaaS", "GPT-4o Engine", "Credits Billing"],
  },
  {
    id: "cloud",
    badge: "Scalable Infrastructure",
    title: "File Share & Cloud Storage SaaS",
    subtitle: "Direct Link Sharing, Premium Subscriptions & Ads",
    icon: Cloud,
    accentColor: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-500 border-sky-500/20",
    features: [
      "Share files by password-protected or expiring links 🔗",
      "🚀 Unlimited Storage & 🎆 Unlimited Backup architectures",
      "Sell VIP high-speed download subscriptions",
      "Interstitial countdown timer ads before file download",
      "Multi-cloud storage connector (AWS S3, Wasabi, Cloudflare R2)",
    ],
    monetization: "VIP Speed Subscriptions + Download Ads",
    demoUrl: "https://rabbitguy.com/saas/",
    tags: ["Cloud Drive", "Direct Links", "Fast Storage"],
  },
  {
    id: "ecom",
    badge: "Automated Commerce",
    title: "eCommerce & Dropship Platform",
    subtitle: "Sell Physical, Digital & Dropshipped Products 24/7",
    icon: ShoppingCart,
    accentColor: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    features: [
      "Instant automated store setup with 1-click checkout",
      "🚚 Dropshipping supplier sync with auto order fulfillment",
      "📦 Digital downloads & instant license keys delivery",
      "Integrated payment gateways (Stripe, PayPal, Apple Pay)",
      "Coupon codes engine (e.g. Save10) & cart abandonment recovery",
    ],
    monetization: "Direct Product Sales & Upsells",
    demoUrl: "https://rabbitguy.com/saas/",
    tags: ["eCommerce", "Dropshipping", "Digital Goods"],
  },
];

export function SaasModelsSection() {
  return (
    <section id="saas-models" className="py-16 sm:py-24 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Business Models
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Turnkey SaaS Business Models
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Choose from our battle-tested, high-converting SaaS systems designed to generate passive income from day one.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SAAS_MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                id={model.id}
                className="scroll-mt-24 group relative rounded-3xl bg-card border border-border/80 hover:border-primary/50 shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gradient Light */}
                <div
                  className={`absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-gradient-to-br ${model.accentColor} rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none`}
                />

                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${model.badgeColor}`}>
                      {model.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <DollarSign className="w-3.5 h-3.5" />
                      {model.monetization}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${model.accentColor} text-white shadow-lg shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {model.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-0.5">
                        {model.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-3">
                    {model.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                        <div className="mt-0.5 p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {model.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-medium text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-foreground">
                    Includes Setup & Lifetime Support
                  </span>
                  <a
                    href={model.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm shadow transition-all hover:scale-105"
                  >
                    Explore Model <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
