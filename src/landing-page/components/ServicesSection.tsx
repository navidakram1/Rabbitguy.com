import { 
  Globe, Smartphone, Building2, RefreshCw, 
  Palette, Video, Image, Share2, BookOpen, 
  ArrowRight, Check, Sparkles, Zap 
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";

const WHATSAPP_URL = "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0";

const techServices = [
  {
    icon: Globe,
    title: "SaaS Business Website",
    highlight: "Passive Income Ready",
    description: "We will build you a full-stack SaaS website to generate recurring income. Earn money while you sleep with automated subscriptions, billing, and user management.",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
    glowColor: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
    badge: "Most Popular",
  },
  {
    icon: Smartphone,
    title: "Android & Mac Desktop Apps",
    highlight: "Multi-Platform Conversion",
    description: "We will convert your web application or portal into native Android, iOS, Mac, and Windows desktop apps with offline support and push notifications.",
    color: "from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    glowColor: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
    badge: "Cross-Platform",
  },
  {
    icon: Building2,
    title: "Register USA & UK Company",
    highlight: "Legal & Bank Setup",
    description: "We will register your company in the United States (LLC/Delaware/Wyoming) or the United Kingdom, so you can manage your global business legally and accept payments worldwide!",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    glowColor: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
    badge: "Official Legal",
  },
  {
    icon: RefreshCw,
    title: "2-Hour Website Migration",
    highlight: "Zero Downtime Guaranteed",
    description: "We will backup, migrate, and transfer large WordPress websites, databases, or custom web apps to your new cloud server with zero data loss within 2 hours.",
    color: "from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
    glowColor: "group-hover:border-amber-500/50 group-hover:shadow-amber-500/10",
    badge: "Super Fast",
  },
];

const creativeServices = [
  {
    icon: Palette,
    title: "Logo Design & Branding",
    highlight: "Vector & Cartoon Graphics",
    description: "We will create your best-quality custom Cartoons, Vector Art, Tracing Logo, Tattoo illustrations, Mascot, and Gaming logos with full vector source files.",
    color: "from-rose-500/20 to-pink-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30",
    glowColor: "group-hover:border-rose-500/50 group-hover:shadow-rose-500/10",
  },
  {
    icon: Video,
    title: "Logo Animation & Video Editing",
    highlight: "3D & Motion Graphics",
    description: "We bring your brand to life with high-energy logo animation for Gaming, YouTube, Company intros, and full professional video editing.",
    color: "from-indigo-500/20 to-blue-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    glowColor: "group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10",
  },
  {
    icon: Image,
    title: "Photo Editing & Retouching",
    highlight: "Damage Restoration & Touchups",
    description: "We produce attention-grabbing profile pictures, product photo retouching, damaged photo restorations, and high-end studio lighting enhancements.",
    color: "from-cyan-500/20 to-sky-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    glowColor: "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Creative Posts",
    highlight: "Viral Engagement Design",
    description: "High-converting social media posters, banners, and carousels designed to captivate your fans and grow your digital presence across Instagram, TikTok, and Facebook.",
    color: "from-fuchsia-500/20 to-purple-500/20 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30",
    glowColor: "group-hover:border-fuchsia-500/50 group-hover:shadow-fuchsia-500/10",
  },
  {
    icon: BookOpen,
    title: "SEO Blog & Content Creation",
    highlight: "Rank #1 on Google & AI Engines",
    description: "We craft targeted, high-ranking SEO blog articles and content strategies designed to boost monthly organic visitors and convert traffic into paying users.",
    color: "from-emerald-500/20 to-green-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    glowColor: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin-3" />
            1560+ Projects Successfully Delivered
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Our Premium Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From technical SaaS engineering and multi-platform app development to high-converting branding and content — we manage your entire digital growth lifecycle.
          </p>
        </div>

        {/* Section 1: Website • Apps • Company */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-2 rounded-full bg-blue-600 animate-pulse"></div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
                Core Engineering
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Website • Apps • Company Registration
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${service.glowColor}`}
                >
                  {/* Subtle dynamic background bloom on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`p-4 rounded-2xl border bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-primary/10 text-primary border border-primary/20 shadow-xs">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1 mb-3">
                      ✦ {service.highlight}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary group-hover:underline inline-flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                    >
                      Discuss on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[11px] text-muted-foreground font-semibold">
                      100% Guaranteed
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Logo • Animation • Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-2 rounded-full bg-purple-600 animate-pulse"></div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400">
                Creative Studio
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Logo • Animation • Content & SEO
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${service.glowColor}`}
                >
                  <div>
                    <div className={`p-3.5 rounded-2xl border w-fit mb-4 bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-1 mb-2.5">
                      ✦ {service.highlight}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:underline inline-flex items-center gap-1 transition-all group-hover:translate-x-1"
                    >
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global CTA Banner with 21st Shimmering Gradient */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-3xl font-black tracking-tight">
              Need a custom bundle for your business?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-xl">
              Combine websites, mobile apps, company registration, and monthly SEO for a tailored discount package with lifetime support.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white text-blue-900 font-extrabold text-sm shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 text-center"
            >
              Chat With Rabbit Experts →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
