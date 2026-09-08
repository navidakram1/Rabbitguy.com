import { MessageCircle, Zap, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import logo from "../../client/static/logo.svg";

interface NavigationItem {
  name: string;
  href: string;
}

export function Footer({
  footerNavigation,
}: {
  footerNavigation: {
    services: NavigationItem[];
    models: NavigationItem[];
    company: NavigationItem[];
  };
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer aria-labelledby="footer-heading" className="bg-card border-t border-border mt-20 pt-16 pb-12">
      <h2 id="footer-heading" className="sr-only">
        Rabbitguy Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/80">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Rabbitguy Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                Rabbitguy<span className="text-primary">.com</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              All-in-One Digital & SaaS Solution. We engineer turnkey SaaS businesses, multi-platform applications, branding, company incorporation, and SEO growth with lifetime support.
            </p>

            {/* Quick Live Chat CTAs */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </a>
              <a
                href="http://m.me/844654765662871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow transition-all"
              >
                <Zap className="w-4 h-4" /> Messenger Chat
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-foreground mb-4">
              Our Services
            </h3>
            <ul role="list" className="space-y-2.5">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SaaS Models Column */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-foreground mb-4">
              SaaS Models
            </h3>
            <ul role="list" className="space-y-2.5">
              {footerNavigation.models.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Column */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-foreground mb-4">
              Company & Links
            </h3>
            <ul role="list" className="space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rabbitguy.com (Rabbit Fast Ltd.). All rights reserved. 1560+ Projects Done.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Moneyback Guarantee
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
