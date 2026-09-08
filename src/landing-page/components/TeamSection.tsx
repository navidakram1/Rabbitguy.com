import { Users, Briefcase, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Navid Akram",
    role: "Founder & Lead Architect",
    image: "https://rabbitguy.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-06-19-at-12.30.07-e1699940115949.jpg",
    bio: "Full-stack systems architect specialized in high-performance SaaS engineering, cloud scalability, and business automation.",
  },
  {
    name: "Siam Ahmed",
    role: "Full-Stack Engineer",
    image: "https://rabbitguy.com/wp-content/uploads/2023/11/272813225_659424895295694_8955442310053691584_n-e1699941006223.jpg",
    bio: "Specialist in React, Node.js, database optimization, and cross-platform native app conversion.",
  },
  {
    name: "Ar Rahim",
    role: "Creative Director & 3D Motion",
    image: "https://rabbitguy.com/wp-content/uploads/2023/11/50824462_1202518959905424_3492638396898082816_n-1024x1024.jpg",
    bio: "Brand identity wizard leading custom vector illustration, 3D motion graphics, and logo animations.",
  },
  {
    name: "Nusrat Urmi",
    role: "UI/UX & Content Strategy Lead",
    image: "https://rabbitguy.com/wp-content/uploads/2023/11/IMG_20210113_115735.jpg",
    bio: "Passionate about high-converting UX architecture, micro-interactions, SEO ranking strategies, and marketing copy.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Active 11 Staff Members Ready to Help
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Our Amazing Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A passionate collective of engineers, designers, and growth experts committed to bringing your product to the next level.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-card border border-border hover:border-primary/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback avatar if external image fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold drop-shadow">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-300">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready for New Projects
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-indigo-600 text-white shadow-md shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-3 h-3" /> We Are Hiring
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Join Our Core Team: Backend Developer Needed
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Work remotely on high-impact SaaS products and global client ventures.
              </p>
            </div>
          </div>

          <a
            href="http://navidakram.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 whitespace-nowrap text-center"
          >
            Drop Your CV →
          </a>
        </div>

      </div>
    </section>
  );
}
