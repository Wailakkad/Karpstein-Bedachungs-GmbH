import { motion } from "motion/react";
import { Hammer, Wrench, Building2, ShieldCheck, ArrowRight, LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  tagline?: string;
}

interface ServicesSectionProps {
  primaryColor: string;
  accentColor: string;
}

export default function ServicesSection({ primaryColor, accentColor }: ServicesSectionProps) {
  const services: Service[] = [
    {
      title: "Steildächer",
      tagline: "Naturschiefer & Ziegel",
      description: "Fachgerechte Eindeckung mit Naturschiefer, Tonziegeln, Betondachstein, Faserzement und Bitumenschindeln. Für jedes Steildach die passende Lösung.",
      icon: Hammer,
      badge: "Hauptleistung"
    },
    {
      title: "Flachdacharbeiten",
      tagline: "Abdichtung & Begrünung",
      description: "Plattenbeläge, Dachbegrünungen, Kies und bituminöse Abdichtungen. Moderne Flachdachsysteme für Wohn- und Gewerbeobjekte.",
      icon: Building2
    },
    {
      title: "Schornsteinverkleidungen",
      tagline: "Schiefer, Zink & Kupfer",
      description: "Hochwertige Verkleidungen aus Naturschiefer, Faserzement sowie Zink- und Kupferblech. Passgenaue Arbeiten für dauerhaften Wetterschutz.",
      icon: Wrench
    },
    {
      title: "Fassadenverkleidungen",
      tagline: "Schiefer, Ton & Holz",
      description: "Professionelle Fassadengestaltung mit Schiefer, Ton, Faserzement, Zink- und Kupferblech, Kunststoff oder Holz. Individuelle Optik und dauerhafter Schutz.",
      icon: ShieldCheck,
      badge: "24/7 Notdienst"
    }
  ];

  // Helper dynamic styles for icons and indicators
  const hexToRgba = (hex: string, alpha: number) => {
    // Basic hex parsing to support alpha tints
    const cleanHex = hex.replace("#", "");
    const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
    const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
    const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section id="services-section-wrapper" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
      {/* Immersive rounded container imitating the exact layout */}
      <div className="bg-[#F0F1F3]/60 rounded-[20px] p-8 sm:p-12 lg:p-16 border border-white shadow-sm">
        
        {/* Header info */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
            <span className="w-10 h-[2px] bg-[#C62828]"></span>
            Unsere Leistungen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1F2937] tracking-tight leading-none uppercase">
            Unsere Leistungen
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Von der Steildach-Eindeckung bis zur Fassadenverkleidung – wir bieten fachgerechte Lösungen für jedes Projekt.
          </p>
        </div>

        {/* Asymmetrical premium grid composition matching reference images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            // Asymmetrical grid styling: 
            // Top Row (indices 0 & 1): 2/3 (col-span-2) and 1/3 (col-span-1)
            // Bottom Row (indices 2 & 3): 1/3 (col-span-1) and 2/3 (col-span-2)
            const isLargeHorizontalCard = index === 0 || index === 3;
            const gridSpanClass = isLargeHorizontalCard ? "lg:col-span-2" : "lg:col-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`${gridSpanClass} relative bg-white rounded-[16px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Visual Accent Hover Overlay */}
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-[64px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: '#C62828' }}
                />

                <div className="w-full flex justify-between items-start mb-10">
                  <div className="space-y-1">
                    {/* Tiny premium subtag */}
                    {service.tagline && (
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">
                        {service.tagline}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight leading-snug group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Top-Right Floating Circular Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-350"
                    style={{ 
                      backgroundColor: '#E8EEF6',
                      color: '#1E5FA8'
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Lower body and actions */}
                <div className="space-y-6">
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-[560px]">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                    <div className="flex items-center gap-1">
                      {service.badge && (
                        <span 
                          className="px-2.5 py-1 rounded-[8px] text-[10px] font-bold uppercase tracking-wider text-white"
                          style={{ backgroundColor: '#C62828' }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Minimal premium Interactive link */}
                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#1F2937] opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
