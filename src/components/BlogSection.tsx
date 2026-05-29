import { motion } from "motion/react";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
}

interface BlogSectionProps {
  primaryColor: string;
  accentColor: string;
  city: string;
}

export default function BlogSection({ primaryColor, accentColor, city }: BlogSectionProps) {
  const blogPosts: BlogPost[] = [
    {
      title: "Wann ist eine Dachsanierung wirklich notwendig?",
      date: "12. März 2026",
      category: "Dachsanierung",
      image: "/dachsanierung.jpg"
    },
    {
      title: "5 Anzeichen für versteckte Dachschäden",
      date: "28. Februar 2026",
      category: "Reparatur",
      image: "/versteckte-dachschaeden.jpg"
    },
    {
      title: "Flachdach oder Steildach – Was ist die bessere Wahl?",
      date: "10. Januar 2026",
      category: "Planung",
      image: "/flachdach-oder-steildach.jpg"
    }
  ];

  return (
    <section id="insights-blog-section" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
      {/* Centered Heading Layout matching previous sections */}
      <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
          <span className="w-10 h-[2px] bg-[#C62828]" />
          Ratgeber &amp; Aktuelles
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1F2937] tracking-tight leading-none uppercase">
          Insights rund ums Dach
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Tipps, Trends und wertvolles Expertenwissen direkt von Ihrem zertifizierten Meisterbetrieb in {city}.
        </p>
      </div>

      {/* 3-Card Grid matching Services Layout rhythm exactly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-[16px] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200/50 flex flex-col justify-between group cursor-pointer overflow-hidden"
            onClick={() => alert(`Sie lesen jetzt den Artikel: "${post.title}"`)}
          >
            {/* Top Image block containing Floating category badge */}
            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-neutral-150 mb-6">
              <img 
                src={post.image} 
                alt={post.title === "Wann ist eine Dachsanierung wirklich notwendig?" ? "Inspektion einer Dachsanierung an einem deutschen Wohnhaus" : post.title === "5 Anzeichen für versteckte Dachschäden" ? "Beschädigter Dachziegel mit sichtbarem Riss und Feuchtigkeitsspuren" : "Vergleich zwischen Flachdach und Steildach bei modernen Wohnhäusern"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Category tag pill in top-right with soft brand tint background */}
              <div 
                className="absolute top-4 right-4 py-2 px-4 rounded-[8px] font-bold text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1 text-white"
                style={{ backgroundColor: '#1E5FA8' }}
              >
                {post.category}
              </div>
            </div>

            {/* Content Details Block */}
            <div className="space-y-3 flex-1 flex flex-col justify-start">
              {/* Date Metadata */}
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>

              {/* Editorial Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight leading-snug group-hover:text-black transition-colors line-clamp-2">
                {post.title}
              </h3>
            </div>

            {/* Read action indicator - matching premium SaaS detail */}
            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-black transition-colors">
                Beitrag lesen
              </span>
              <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black transition-all group-hover:bg-neutral-50">
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

          </motion.article>
        ))}
      </div>

      {/* Centered CTA Trigger matching SaaS spec layout exactly */}
      <div className="w-full flex justify-center mt-12 sm:mt-16">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => alert("Hier gelangen Sie in Kürze zum vollständigen Ratgeber-Portal!")}
          className="bg-[#C62828] text-white px-8 py-4.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#9E1E1E] transition-all shadow-sm active:scale-95 cursor-pointer"
        >
          <span>Alle Beiträge ansehen</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </div>

    </section>
  );
}
