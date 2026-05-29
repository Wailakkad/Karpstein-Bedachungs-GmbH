import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface FinalCTASectionProps {
  primaryColor: string;
  accentColor: string;
  phone: string;
}

export default function FinalCTASection({ primaryColor, accentColor, phone }: FinalCTASectionProps) {
  // Float helper motion animation for the badges
  const floatVariant = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="final-cta-section" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: Copy & Call To Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-8 flex flex-col items-start text-left"
        >
          {/* Subtle upper tag badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
            <span className="w-10 h-[2px] bg-[#C62828]" />
            24/7 Notdienst
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-display font-black text-[#1F2937] uppercase tracking-tight max-w-[550px]">
            Brauchen Sie schnelle Hilfe?
          </h2>

          {/* Supportive text */}
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-[500px]">
            Unser 24/7 Notdienst ist für Sie da – auch am Wochenende.
          </p>

          {/* Button cluster & Microcopy */}
          <div className="space-y-4 w-full">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={`tel:${phone}`}
                className="bg-[#C62828] text-white px-8 py-5 rounded-lg font-semibold text-sm flex items-center gap-2.5 hover:bg-[#9E1E1E] transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Jetzt anrufen</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <button 
                onClick={() => {
                  const el = document.getElementById("faq-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white border border-[#C62828] px-8 py-5 rounded-lg font-semibold text-sm hover:bg-[#FDEAEA] transition-all text-[#C62828] active:scale-95"
              >
                FAQ lesen
              </button>
            </div>

            {/* Muted validation microcopy */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>24/7 Notdienst &middot; Persönliche Beratung &middot; Transparente Angebote</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Immersive Asymmetric Visual Layout with overlaps */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
          
          {/* Main big rounded image container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[85%] h-[90%] rounded-[20px] overflow-hidden shadow-sm bg-neutral-100 self-center ml-auto"
          >
            <img 
              src="/src/assets/images/cta_banner_roof_1780053692583.png" 
              alt="Premium Dachdeckung meisterhaft durchgeführt"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay shadow for premium contrast depth */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* TOP RIGHT FLOATING BADGE */}
            <motion.div 
              variants={floatVariant}
              animate="animate"
              className="absolute top-6 right-6 z-20 flex items-center gap-2 py-3 px-5 rounded-[12px] font-bold text-xs shadow-sm border border-white/20 transition-all duration-300 hover:shadow-md hover:scale-105"
              style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}
            >
              <span className="font-display font-extrabold text-xs">
                24/7 Notdienst
              </span>
              <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* OVERLAPPING MINIMAL MINI IMAGE CARD (bottom left detail) */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-2 left-0 w-[200px] h-[200px] rounded-[30px] overflow-hidden border-[6px] border-white shadow-2xl bg-neutral-200 z-30 hidden sm:block"
          >
            <img 
              src="/src/assets/images/cta_detail_tiles_1780053721785.png" 
              alt="Dachziegel detailpräzission"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle glass brand tab inside the overlapping card */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-center">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#1F2937] flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" /> Detailpräzision
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
