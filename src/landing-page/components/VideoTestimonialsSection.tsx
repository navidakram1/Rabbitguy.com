import { useState } from "react";
import { Play, Star, Video, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
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
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIAL_VIDEOS.map((item, idx) => {
            const isPlaying = activeVideo === item.id;
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-card border border-border hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Video Player Box */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  {!isPlaying ? (
                    <div className="relative w-full h-full">
                      <img
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.client}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setActiveVideo(item.id)}
                        className="absolute inset-0 m-auto flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all"
                        aria-label={`Play review from ${item.client}`}
                      >
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </button>

                      {/* Video Tag */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30">
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
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground italic line-clamp-3 mb-3">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">
                      {item.client}
                    </h4>
                    <p className="text-[11px] text-primary font-medium">
                      {item.project}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Submission Discount Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-md max-w-2xl mx-auto">
            <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Video className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-foreground">
                Are you an existing client?
              </h4>
              <p className="text-xs text-muted-foreground">
                Submit your short video review and receive a 40% discount on your next project!
              </p>
            </div>
            <a
              href="https://rabbitguy.com/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow transition-all hover:scale-105 whitespace-nowrap"
            >
              Submit Video & Get 40% Off →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
