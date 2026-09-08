import { useState } from "react";
import { Play, Sparkles, ExternalLink, ArrowRight, CheckCircle2, Youtube } from "lucide-react";
import { Button } from "../../client/components/ui/button";

export function FeaturedVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "EYA9cjDmujQ";
  const youtubeWatchUrl = "https://youtu.be/EYA9cjDmujQ?si=KSWJTHC98eQ87jgk";
  const channelUrl = "https://www.youtube.com/@Rabbitguy_com";

  return (
    <section id="videos" className="py-12 sm:py-20 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Youtube className="w-4 h-4 text-red-600" />
            Official Featured Video
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            See Our SaaS Platform in Action
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Watch the complete walkthrough of how our full-stack SaaS architecture and turnkey solutions generate recurring passive income.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-border/80 bg-black aspect-video group">
            {!isPlaying ? (
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
                {/* Background High-Res Thumbnail preview */}
                <img
                  src="https://rabbitguy.com/wp-content/uploads/2023/12/Thumbnail-1.png"
                  alt="Rabbitguy SaaS Demo Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://rabbitguy.com/wp-content/uploads/2023/12/Rabbitguy.com_.png";
                  }}
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Animated Glowing Ring & Play Button Trigger */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600/95 hover:bg-red-600 text-white shadow-2xl shadow-red-500/60 hover:scale-110 active:scale-95 transition-all duration-300 group-hover:ring-8 group-hover:ring-red-500/30"
                  aria-label="Play Featured Video"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-red-300 font-bold bg-red-950/80 px-2.5 py-0.5 rounded border border-red-500/40">
                        HD 1080p
                      </span>
                      <span className="text-xs text-gray-300 font-medium">RabbitGuy Official</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold mt-1 text-white drop-shadow-md">
                      Rabbitguy Full-Stack Digital & SaaS Architecture
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => setIsPlaying(true)}
                      className="bg-white hover:bg-gray-100 text-black font-bold rounded-xl shadow-md text-xs sm:text-sm"
                    >
                      <Play className="w-3.5 h-3.5 mr-1 fill-current" /> Play in Page
                    </Button>
                    <a
                      href={youtubeWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow transition-all hover:scale-105"
                    >
                      <Youtube className="w-3.5 h-3.5" /> Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Rabbitguy Main Video Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>

          {/* Quick CTA banner beneath video */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-card border border-border shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  Subscribe to @Rabbitguy_com on YouTube
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Watch new SaaS breakdowns, tutorials, client projects & marketing guides.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow transition-all hover:scale-105 whitespace-nowrap"
              >
                <Youtube className="w-4 h-4" /> Visit Channel
              </a>
              <a
                href="https://rabbitguy.com/saas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm shadow transition-all hover:scale-105 whitespace-nowrap"
              >
                Explore All Models <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
