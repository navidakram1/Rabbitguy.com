import { MessageSquare, CreditCard, CheckCircle, Headphones, ArrowRight, ShieldCheck, Tag, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0";
const PAYMENT_URL = "http://Navidakram.com/payment";

const STEPS = [
  {
    step: "01",
    title: "Discuss Your Goal",
    subtitle: "Free Consultation & Scoping",
    description: "Provide your plans, vision, and project requirements directly with Rabbit Experts over WhatsApp or live chat.",
    icon: MessageSquare,
    badge: "Instant Response",
    ctaText: "Start Live Chat",
    ctaUrl: WHATSAPP_URL,
    color: "from-blue-600 to-indigo-600",
    glowBorder: "hover:border-blue-500/50 hover:shadow-blue-500/10",
  },
  {
    step: "02",
    title: "Agree on Price & 10% Off",
    subtitle: "100% Moneyback Guarantee",
    description: "Confirm scope and lock in your price. Use coupon code 'Save10' for an instant 10% discount on your first order with 100% money-back security.",
    icon: CreditCard,
    badge: "Save10 Active",
    ctaText: "Pay Securely",
    ctaUrl: PAYMENT_URL,
    color: "from-purple-600 to-pink-600",
    glowBorder: "hover:border-purple-500/50 hover:shadow-purple-500/10",
  },
  {
    step: "03",
    title: "Finalize Delivery",
    subtitle: "Unlimited Revisions",
    description: "We develop and present the initial build. You test everything, request fine-tuning, and we iterate with unlimited revisions until you are completely thrilled.",
    icon: CheckCircle,
    badge: "Unlimited Revisions",
    ctaText: "Explore Revisions",
    ctaUrl: "#services",
    color: "from-emerald-600 to-teal-600",
    glowBorder: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
  },
  {
    step: "04",
    title: "Lifetime Support & Scale",
    subtitle: "Order Once, Support Lifetime",
    description: "We are not done after delivery! We provide ongoing lifetime maintenance, technical support, bug fixing, and growth consultations whenever you need modifications.",
    icon: Headphones,
    badge: "Lifetime Guarantee",
    ctaText: "Contact Support",
    ctaUrl: WHATSAPP_URL,
    color: "from-amber-600 to-orange-600",
    glowBorder: "hover:border-amber-500/50 hover:shadow-amber-500/10",
  },
];

export function HowToOrderSection() {
  return (
    <section id="how-to-order" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Tag className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            How Do I Order?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From your first message to lifelong support, our streamlined ordering pipeline ensures total transparency, speed, and peace of mind.
          </p>
        </div>

        {/* Steps Grid with Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative group rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 sm:p-7 flex flex-col justify-between overflow-hidden ${item.glowBorder}`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                      {item.step}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-primary/10 text-primary border border-primary/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white w-fit shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1 mb-3">
                    ✦ {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Step Link */}
                <div className="mt-6 pt-4 border-t border-border/60">
                  <a
                    href={item.ctaUrl}
                    target={item.ctaUrl.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline transition-all group-hover:translate-x-1"
                  >
                    {item.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 10% Discount Coupon Highlight Box with Pulsing Badge */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 via-indigo-950/50 to-blue-950/60 border-2 border-purple-500/40 text-center max-w-3xl mx-auto shadow-2xl backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-extrabold uppercase tracking-wider mb-3 border border-yellow-400/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" /> Special Launch Discount
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              Use Coupon <span className="font-mono bg-purple-600 px-3 py-1 rounded-xl text-yellow-300 border border-yellow-400/40 tracking-wider shadow-md animate-bounce inline-block">Save10</span> for 10% Off
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              Apply coupon code <strong className="text-white">Save10</strong> at checkout or quote it in WhatsApp chat to claim your discount on any service or SaaS package.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Go to Payment Portal →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
