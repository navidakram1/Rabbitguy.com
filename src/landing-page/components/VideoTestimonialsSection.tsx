import { useState } from "react";
import { Play, Star, Video, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "../../client/components/ui/button";

const TESTIMONIAL_VIDEOS = [
  {
    id: "ymshsVPLCb0",
    client: "E-Commerce Founder",
    project: "Dropship Store & Mobile App",
    rating: 5,
    quote: "Rabbitguy migrated our entire shop in less than 2 hours and built our mobile app seamlessly. 10/10 service!",
  },
  {
    id: "DBBTW6Te0oQ",
    client: "Media Agency Director",
    project: "Movie Streaming Portal",
    rating: 5,
    quote: "The recurring subscription system and ad network integration generated passive income from week one.",
  },
  {
    id: "CCXOWCXaod0",
    client: "Tech Entrepreneur",
    project: "AI SaaS Platform & LLC Registration",
    rating: 5,
    quote: "They handled both our USA company registration and full-stack software launch without a single hitch.",
  },
  {
    id: "rswFnlJAETQ",
    client: "Content Creator & Blogger",
    project: "SEO Ranking & Logo Animation",
    rating: 5,
    quote: "Our organic traffic doubled within 45 days of their SEO blog campaigns. Lifetime support is truly real!",
  },
];

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/20 border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Customer Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Hear From Our Clients
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Real video feedback from real founders, entrepreneurs, and agencies who scaled their digital presence with Rabbitguy.
          </p>
        </div>

        {/* Video Grid with 21st.dev Hover Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIAL_VIDEOS.map((item, idx) => {
            const isPlaying = activeVideo === item.id;
            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-card border border-border/80 hover:border-emerald-500/50 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Video Player Box */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  {!isPlaying ? (
                    <div className="relative w-full h-full">
                      <img
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.client}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-108 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                      
                      {/* Pulsing Play Button Overlay */}
                      <button
                        onClick={() => setActiveVideo(item.id)}
                        className="absolute inset-0 m-auto flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/50 hover:scale-115 active:scale-95 transition-all duration-300 group-hover:ring-4 group-hover:ring-emerald-500/30"
                        aria-label={`Play review from ${item.client}`}
                      >
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </button>

                      {/* Video Story Tag */}
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30 backdrop-blur-sm">
                        Story #{idx + 1}
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
                      title={`Review by ${item.client}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  )}
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars with Subtle Shine */}
                    <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground italic line-clamp-3 mb-4 leading-relaxed group-hover:text-foreground/90 transition-colors">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">
                      {item.client}
                    </h4>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      ✦ {item.project}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Submission Discount Banner with 21st Shimmer */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-5 p-5 sm:p-7 rounded-3xl bg-card border-2 border-border/80 shadow-xl max-w-2xl mx-auto hover:border-emerald-500/40 transition-all">
            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 animate-pulse">
              <Video className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-foreground">
                Are you an existing client?
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Submit your short video review and receive a 40% discount on your next project!
              </p>
            </div>
            <a
              href="https://rabbitguy.com/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Submit Video & Get 40% Off →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
