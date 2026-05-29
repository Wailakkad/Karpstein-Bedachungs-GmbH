import { useState, Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import { CompanyData, NavItem } from "../types";

interface HeroSectionProps {
  initialData: CompanyData;
  navItems?: NavItem[];
  companyState?: CompanyData;
  setCompanyState?: Dispatch<SetStateAction<CompanyData>>;
}

export default function HeroSection({ initialData, navItems, companyState, setCompanyState }: HeroSectionProps) {
  // Live State for premium customizing/playground experience
  const [localCompany, setLocalCompany] = useState<CompanyData>(initialData);
  const company = companyState || localCompany;
  const setCompany = setCompanyState || setLocalCompany;
  const navList = navItems || [
    { label: "Home", href: "#" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Kontakt", href: "#kontakt" }
  ];

  const avatarImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
  ];

  return (
    <div id="hero-section-container" className="relative w-full min-h-screen bg-[#F7F8FA] flex flex-col justify-between selection:bg-neutral-800 selection:text-white">
      {/* Dynamic Style injection for custom primary and accent keys */}
      <style>{`
        :root {
          --company-primary: ${company.primaryColor};
          --company-accent: ${company.accentColor};
        }
      `}</style>

      {/* HEADER SECTION */}
      <header id="main-header" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8 flex justify-between items-center z-40 bg-transparent">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <img 
            src="/new-logo.png" 
            alt="Karpstein Bedachungs GmbH"
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation Links - Centered desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-800">
          {navList.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative py-1 hover:text-neutral-950 transition-colors group text-[#1F2937]"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Header Right CTA - Pill button & arrow button pairing */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${company.phone}`}
            className="hidden lg:flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 text-sm font-semibold px-5 py-3 rounded-lg border border-neutral-200 shadow-sm transition-all duration-300 active:scale-95"
          >
            <Phone className="w-4 h-4 text-neutral-500" />
            <span>{company.phone}</span>
          </a>

          <button
            onClick={() => {
              const el = document.getElementById("hero-content-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center"
          >
            <span 
              className="text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform"
              style={{ 
                backgroundColor: '#1E5FA8',
                color: '#FFFFFF'
              }}
            >
              Jetzt anfragen
            </span>
            <span 
              className="flex items-center justify-center w-11 h-11 rounded-lg text-white ml-2 transition-transform duration-300 group-hover:rotate-45"
              style={{ backgroundColor: '#C62828' }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </header>

      {/* CORE HERO SECTION */}
      <section 
        id="hero-content-section" 
        className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20 min-h-[80vh]"
      >
        {/* LEFT COLUMN: ~50% Column width - Content Engine */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center items-start space-y-8"
        >
          {/* Location / Direct trust badge - Sleek Theme style */}
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#C62828]">
            <span className="w-10 h-[2px] bg-[#C62828]"></span>
            24/7 Notdienst
          </div>

          {/* Headline - Extremely Large Editorial paired with accent stroke representation */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-[#1F2937] uppercase">
            {company.tagline.split(" ").map((word, i) => {
              const isStroke = word.toLowerCase().includes("dacharbeiten") || word.toLowerCase().includes("meister");
              return (
                <span key={i} className="inline-block mr-[0.2em]">
                  {isStroke ? (
                    <span 
                      className="text-transparent" 
                      style={{ WebkitTextStroke: "1.5px #141414" }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              );
            })}
          </h1>

          {/* Modern supportive narrative body text */}
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-[500px] font-normal">
            {company.description}
          </p>

          {/* Action trigger group - matching exact look of the buttons from spec */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => alert("Hier öffnet sich Ihr meisterhaftes Angebotsformular!")}
              className="bg-[#C62828] text-white px-8 py-4.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#9E1E1E] transition-all shadow-sm active:scale-95"
            >
              <span>{company.primaryCTA}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("hero-content-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white border border-[#C62828] px-8 py-4.5 rounded-lg font-semibold text-sm hover:bg-[#FDEAEA] transition-all active:scale-95 text-[#C62828]"
            >
              Leistungen ansehen
            </button>
          </div>

          {/* Sleek Theme Statistics list with clean separation lines */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-4 pt-6 border-t border-gray-200 w-full">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1F2937] font-display">{company.yearsExperience}</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Jahre Erfahrung</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#141414] font-display">{company.completedProjects}</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Projekte</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2.5">
                {avatarImages.slice(0, 3).map((src, idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden shadow-sm">
                    <img src={src} className="w-full h-full object-cover" alt="Kunde" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                Zufriedene Kunden
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ~50% Column width - Multi-layered visual element collage */}
        <div className="relative w-full aspect-[5/6] lg:aspect-auto lg:h-[700px] flex items-center justify-center lg:justify-end select-none">
          
          {/* Layer 1: Large primary rounded image card (Replicates winter cabin framing) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-[90%] h-[85%] rounded-[40px] overflow-hidden shadow-2xl shadow-black/10 group bg-neutral-200"
          >
            {/* The Main High-End House/Roof Photography */}
            <img 
              src={company.heroImage} 
              alt="Premium modern roofing work by Dach Meister" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant gradient overlay to guarantee maximum readability and rich SaaS look */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

            {/* TOP RIGHT FLOATING PILL: In-image premium project tracker badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-8 right-8 z-20 flex items-center gap-2 py-3 px-6 rounded-[16px] font-bold text-sm shadow-sm border border-white/20 transition-all duration-300 hover:shadow-md hover:scale-105"
              style={{ backgroundColor: "#C62828", color: '#FFFFFF' }}
            >
              <span className="font-display font-extrabold text-sm">
                {company.completedProjects} Projekte
              </span>
              <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </motion.div>

            {/* BOTTOM FLOATING CARD: Embedded client trust module with overlapping customer avatars */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-8 right-8 z-20 bg-white/95 backdrop-blur-md p-6 rounded-[30px] flex flex-col gap-3 shadow-2xl border border-white/50"
            >
              <div className="flex -space-x-3">
                <div 
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                  style={{ backgroundColor: '#C62828' }}
                >
                  DM
                </div>
                <div 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: company.primaryColor }}
                />
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                  <img src={avatarImages[3]} className="w-full h-full object-cover" alt="Kunde" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1F2937] font-display tracking-tight leading-none">{company.happyClients}</div>
                <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mt-1">Zufriedene Kunden</div>
              </div>
            </motion.div>

            {/* Overlay Text/Icon - Bottom Left Inside Hero Image */}
            <div className="absolute bottom-10 left-10 z-20 text-white flex flex-col gap-2 pointer-events-none">
              <div 
                className="px-4 py-1.5 rounded-[16px] text-[10px] font-bold uppercase tracking-widest w-fit shadow-sm"
                style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}
              >
                24/7 Notdienst
              </div>
              <span className="text-xl font-medium tracking-tight">Meistergeführte Präzision</span>
            </div>
          </motion.div>

          {/* Layer 2: Overlapping small secondary image card on bottom-left */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, x: -30, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-8 w-48 h-48 bg-white p-3 rounded-[35px] shadow-2xl z-30"
          >
            <div className="w-full h-full rounded-[25px] overflow-hidden relative transition-all duration-300">
              <img 
                src="/left-bottom small image.png" 
                alt="Goslar zentrale Lage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-2">
                <div className="text-center">
                  <div className="text-sm font-black tracking-tight">{company.city.toUpperCase()}</div>
                  <div className="text-[8px] uppercase tracking-tighter opacity-70">Zentrale</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER-LIKE BRAND TRUST BENCHMARKS TO BRING IT TOGETHER */}
      <footer className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 opacity-60">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F2937]">
          &copy; {new Date().getFullYear()} {company.companyName.toUpperCase()} {company.city.toUpperCase()}
        </span>
        <div className="flex gap-6 sm:gap-12">
          <a href="#impressum" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#1F2937] transition-colors">Impressum</a>
          <a href="#datenschutz" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#1F2937] transition-colors">Datenschutz</a>
          <a href="#partnerprogramm" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#1F2937] transition-colors">Partnerprogramm</a>
        </div>
      </footer>
    </div>
  );
}
