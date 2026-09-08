import { ShieldCheck, HeartHandshake, Infinity, Zap, Rocket, Layers, MessageSquare, ArrowRight } from "lucide-react";

const AUDIENCES = [
  { label: "Developers", emoji: "🔋", desc: "Clean codebase, APIs & SDKs" },
  { label: "Agencies", emoji: "💡", desc: "White-label client delivery" },
  { label: "Businesses", emoji: "✏️", desc: "Turnkey digital systems" },
  { label: "Designers", emoji: "🎨", desc: "High-fidelity vectors & animations" },
  { label: "eCommerce", emoji: "🛍️", desc: "Dropship & automated checkouts" },
  { label: "Freelancers", emoji: "📝", desc: "Expand service offerings" },
  { label: "People Managers", emoji: "👨‍💼", desc: "Fast execution with 0 hiring overhead" },
];

const PILL_BADGES = [
  "Social Media 📱",
  "Built for Online Marketing 🎉",
  "Agility and Scale 💶",
  "Full-Stack Development 👨🏾‍💻",
  "1-on-1 Consultation 🤩",
  "Next-Gen Digital Age 🚀",
  "Global eCommerce 🏦",
];

const VALUE_PROPS = [
  {
    icon: Infinity,
    title: "Lifetime Technical Support",
    description: "Order once and enjoy lifetime support. If you ever need minor tweaks, updates, or maintenance, we are always here to assist.",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "100% Refund Policy",
    description: "We stand firmly behind our work. If we fail to satisfy your exact specifications after revisions, you get a 100% full refund.",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Layers,
    title: "A-Z Full-Service Delivery",
    description: "From graphics, UI/UX, and domain setup to database migrations, legal entity creation, and cloud hosting — we handle every single detail.",
    color: "from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Order Once, Support Lifetime
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Why Choose Rabbitguy?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            We don't just deliver files and vanish — we partner with you to engineer long-term digital success with ironclad guarantees.
          </p>
        </div>

        {/* 3 Core Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {VALUE_PROPS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-4 rounded-2xl border w-fit mb-5 bg-gradient-to-br ${prop.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Built For Everyone (Target Audiences) */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-lg mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Built to Accelerate Growth For:
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Whether you are an independent creator or a full agency, our workflows fit right into your operations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {AUDIENCES.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-muted/40 hover:bg-muted border border-border/60 text-center transition-all hover:scale-105"
              >
                <div className="text-2xl mb-1">{item.emoji}</div>
                <div className="text-xs font-bold text-foreground">{item.label}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Badges marquee / pill list */}
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-center gap-2">
            {PILL_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Unique Project CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-indigo-400 font-bold">
              Custom Development & Partnerships
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Have a Unique Project in Mind?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl">
              Let's talk. We build custom bespoke enterprise platforms, specialized APIs, automated AI bots, and brand identity systems tailored to your timeline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="http://navidakram.com/company"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              Send a Message →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
