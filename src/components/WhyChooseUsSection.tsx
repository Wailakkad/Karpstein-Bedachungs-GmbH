import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Heart, Award, Sparkles } from "lucide-react";

interface WhyChooseUsSectionProps {
  primaryColor: string;
  accentColor: string;
  city: string;
}

export default function WhyChooseUsSection({ primaryColor, accentColor, city }: WhyChooseUsSectionProps) {
  // Float animation variants for premium cinematic depth
  const floatAnimation = (yOffset = 10, duration = 3.5, delay = 0) => ({
    animate: {
      y: [0, -yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  return (
    <section id="why-choose-us-section" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
      {/* Cinematic container with rounded border radius */}
      <div className="relative w-full min-h-[550px] lg:h-[650px] rounded-[20px] overflow-hidden shadow-sm border border-white bg-neutral-900 group">
        
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img 
            src="/src/assets/images/premium_roof_installation_1780052724484.png"
            alt="Professioneller Dachdeckermeister bei der Arbeit"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette/gradient overlay for deep contrast and lux aesthetic */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content & Floating Cards Layout Grid */}
        <div className="relative w-full h-full z-10 grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-12 lg:p-16 gap-10">
          
          {/* LEFT SIDE: Large Glass/White Overlapping Content Card (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-[16px] shadow-sm border border-white w-full max-w-[550px] flex flex-col items-start gap-6 self-center lg:self-auto"
          >
            {/* Top pill tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[8px] text-[10px] font-bold uppercase tracking-widest text-[#1F2937] bg-neutral-100 border border-neutral-200">
              <Sparkles className="w-3.5 h-3.5 text-[#1F2937]" />
              <span>Warum wir?</span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] font-display font-black text-[#1F2937] uppercase tracking-tight">
              Kompetenz aus <br />
              Erfahrung.
            </h2>

            {/* Supportive trust-based paragraph */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-[460px]">
              Unter der Leitung von Dachdeckermeister Heiko Karpstein steht unser Unternehmen seit 1984 für solide und fachgerechte Dacharbeiten. Unterstützt von einem eingespielten Team bieten wir zuverlässige Lösungen für private und gewerbliche Kunden.
            </p>

            {/* Multi CTA Area matching Hero button styling precisely */}
            <div className="flex flex-wrap items-center gap-3 w-full pt-2">
              <button
                onClick={() => alert("Sehr gerne planen wir ein unverbindliches Erstgespräch für Sie!")}
                className="bg-[#C62828] text-white px-7 py-4 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#9E1E1E] transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Beratung anfragen</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              
              <button 
                onClick={() => {
                  const el = document.getElementById("services-section-wrapper");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white border border-[#C62828] px-7 py-4 rounded-lg font-semibold text-sm hover:bg-[#FDEAEA] transition-all text-[#C62828] active:scale-95"
              >
                Mehr erfahren
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Floating Pill Badges around the image background (lg:col-span-6) */}
          <div className="lg:col-span-6 relative w-full h-full min-h-[300px] lg:min-h-auto flex items-center justify-center select-none">
            
            {/* Top Left Floating Badge */}
            <motion.div
              variants={floatAnimation(8, 4, 0)}
              animate="animate"
              className="absolute top-4 left-4 lg:top-[15%] lg:left-[5%] flex items-center gap-2 bg-white text-[#1F2937] py-3 px-5 rounded-[12px] font-bold text-xs sm:text-sm shadow-sm border border-neutral-100/10 cursor-pointer hover:shadow-md transition-all"
            >
              <span className="font-display font-extrabold">20+ Jahre Erfahrung</span>
              <div 
                className="w-5 h-5 rounded-[8px] flex items-center justify-center text-white"
                style={{ backgroundColor: '#1E5FA8' }}
              >
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            </motion.div>

            {/* Mid Right / Bottom Right Floating Badge - 3K+ Projects */}
            <motion.div
              variants={floatAnimation(10, 4.2, 1)}
              animate="animate"
              className="absolute bottom-20 right-4 lg:bottom-[35%] lg:right-[5%] flex items-center gap-2 bg-white text-[#1F2937] py-3 px-5 rounded-[12px] font-bold text-xs sm:text-sm shadow-sm border border-neutral-100/10 cursor-pointer hover:shadow-md transition-all"
            >
              <span className="font-display font-extrabold">3K+ Projekte</span>
              <div 
                className="w-5 h-5 rounded-[8px] flex items-center justify-center text-white"
                style={{ backgroundColor: '#1E5FA8' }}
              >
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.div>

            {/* Bottom Mid/Left Floating Badge - 24/7 Notdienst */}
            <motion.div
              variants={floatAnimation(9, 4.5, 1.5)}
              animate="animate"
              className="absolute bottom-4 left-4 lg:bottom-[15%] lg:left-[15%] flex items-center gap-2 py-3 px-5 rounded-[12px] font-bold text-xs sm:text-sm shadow-sm cursor-pointer hover:shadow-md transition-all"
              style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}
            >
              <span className="font-display font-extrabold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" /> 24/7 Notdienst
              </span>
              <div className="w-5 h-5 bg-white/30 rounded-[8px] flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            </motion.div>

            {/* Top Right Floating Badge - Emergency with red */}
            <motion.div
              variants={floatAnimation(12, 3.8, 0.5)}
              animate="animate"
              className="absolute top-12 right-4 lg:top-[25%] lg:right-[10%] flex items-center gap-2 py-3.5 px-6 rounded-[12px] font-bold text-xs sm:text-sm shadow-sm cursor-pointer hover:shadow-md transition-all"
              style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}
            >
              <span className="font-display font-extrabold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-white" /> Meisterbetrieb
              </span>
              <div className="w-5 h-5 bg-white/30 rounded-[8px] flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            </motion.div>

        </div>

      </div>

      </div>
    </section>
  );
}
