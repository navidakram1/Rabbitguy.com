import { useState } from "react";
import { Sparkles, Bot, Copy, Check, ArrowRight, Wand2 } from "lucide-react";
import { Button } from "../../client/components/ui/button";

const SAMPLE_PROMPTS = [
  {
    title: "Write a blog about RabbitGuy.com",
    emoji: "✏️",
    sampleResponse: `Title: How Rabbitguy.com Revolutionizes SaaS & Digital Solutions for Creators and Entrepreneurs\n\nStarting a tech venture once required months of engineering and expensive legal fees. With Rabbitguy.com, you get instant turn-key SaaS business websites, iOS/Android/Mac native app conversions, official USA & UK company incorporation, and complete SEO content campaigns under one roof.\n\nWhether you want a movie streaming portal, an AI copywriting platform, or a file-sharing cloud drive, Rabbitguy provides end-to-end delivery with a 100% money-back guarantee and lifetime support.`,
  },
  {
    title: "Create a 3 course menu",
    emoji: "🍽️",
    sampleResponse: `Appetizer: Seared Scallops with Cauliflower Puree, Crispy Pancetta, and Lemon-Herb Infusion.\n\nMain Course: Pan-Roasted Duck Breast with Cherry Port Wine Reduction, Roasted Fondant Potatoes, and Glazed Baby Carrots.\n\nDessert: Warm Dark Chocolate Molten Lava Cake with Tahitian Vanilla Bean Ice Cream and Raspberry Coulis.`,
  },
  {
    title: "Find me a good restaurant",
    emoji: "📍",
    sampleResponse: `Top Recommendations for High-End Dining:\n1. Le Bernardin (Seafood & French fine dining, 3 Michelin Stars)\n2. Osteria Francescana (Modern Italian culinary mastery)\n3. Eleven Madison Park (Plant-based tasting experience with world-class hospitality)`,
  },
  {
    title: "Help me get fit",
    emoji: "💪",
    sampleResponse: `Weekly 4-Day Hypertrophy & Conditioning Split:\n- Day 1: Upper Body Strength (Bench press, Bent-over row, Overhead press, Pull-ups)\n- Day 2: Lower Body Power (Barbell squats, Romanian deadlifts, Walking lunges)\n- Day 3: Active Recovery & Mobility (30 min Zone 2 cardio + Core)\n- Day 4: Full-Body Functional Hypertrophy + 15 min HIIT`,
  },
  {
    title: "Help me plan my trip",
    emoji: "✈️",
    sampleResponse: `5-Day Tokyo & Kyoto Itinerary:\n- Day 1: Shibuya Crossing, Meiji Shrine, & Harajuku street food\n- Day 2: Akihabara tech district, Asakusa Senso-ji temple, & Tokyo Skytree sunset\n- Day 3: Shinkansen bullet train to Kyoto -> Fushimi Inari torii gates\n- Day 4: Arashiyama Bamboo Grove & Kinkaku-ji (Golden Pavilion)\n- Day 5: Traditional Gion tea ceremony & return to Haneda`,
  },
  {
    title: "Help me write a story",
    emoji: "📖",
    sampleResponse: `The rain over Neo-Kyoto never truly stopped. Kael adjusted his cybernetic optic visor as the neon reflections shimmered across the puddle. In his jacket pocket, the encrypted datapad held the blueprints to the decentralized grid—a secret the mega-corps would kill to possess...`,
  },
  {
    title: "Can you help me make changes for free?",
    emoji: "🤝",
    sampleResponse: `Yes! Rabbitguy.com offers UNLIMITED revisions and lifetime support until you are 100% satisfied with your project delivery. We never leave a client unsatisfied!`,
  },
];

export function AiPromptStudio() {
  const [selectedPrompt, setSelectedPrompt] = useState(SAMPLE_PROMPTS[0]);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSelect = (prompt: typeof SAMPLE_PROMPTS[0]) => {
    setIsGenerating(true);
    setSelectedPrompt(prompt);
    setTimeout(() => {
      setIsGenerating(false);
    }, 200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPrompt.sampleResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      
      {/* 21st.dev Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Bot className="w-3.5 h-3.5 animate-pulse" />
            AI Content & Blogger Assistant
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Publish Regular Blogs for High SEO Ranking
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Try our interactive AI generator below. Click any prompt chip to see immediate high-converting outputs generated in real-time.
          </p>
        </div>

        {/* Interactive Studio Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-card border-2 border-border shadow-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/40">
          
          {/* Prompt Chips Bar */}
          <div className="p-4 sm:p-6 bg-muted/40 border-b border-border/80">
            <span className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-3 block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" /> Click a Prompt Chip to Generate AI Response:
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_PROMPTS.map((prompt, idx) => {
                const isSelected = selectedPrompt.title === prompt.title;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(prompt)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105 ring-2 ring-purple-400/40"
                        : "bg-background hover:bg-accent border border-border text-foreground hover:scale-102"
                    }`}
                  >
                    <span>{prompt.emoji}</span>
                    <span>{prompt.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AI Output Window */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-border/60">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 animate-pulse">
                  <Wand2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  AI Output: <span className="text-purple-600 dark:text-purple-400 font-semibold">{selectedPrompt.title}</span>
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-muted hover:bg-accent text-xs font-bold text-muted-foreground hover:text-foreground transition-all hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Text
                  </>
                )}
              </button>
            </div>

            <div className={`bg-muted/30 rounded-2xl p-5 sm:p-6 border border-border/60 font-sans text-xs sm:text-sm text-foreground/90 whitespace-pre-line leading-relaxed min-h-[160px] transition-all duration-300 ${isGenerating ? 'opacity-50 scale-[0.99]' : 'opacity-100 scale-100'}`}>
              {selectedPrompt.sampleResponse}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
              <span className="text-xs text-muted-foreground text-center sm:text-left font-medium">
                Want continuous automated blogs written for your website? Hire our dedicated SEO bloggers.
              </span>
              <a
                href="https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Hire a Blogger For Your Website <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
