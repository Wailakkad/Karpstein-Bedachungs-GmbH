import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
  category: string;
}

interface TestimonialsSectionProps {
  primaryColor: string;
  accentColor: string;
}

export default function TestimonialsSection({ primaryColor, accentColor }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Thomas K.",
      role: "Hausbesitzer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      review: "Schnelle und saubere Arbeit am Steildach. Die Absprache war unkompliziert, der Termin wurde eingehalten und das Ergebnis überzeugt. Gerne wieder.",
      category: "Steildach"
    },
    {
      name: "Martina S.",
      role: "Eigentümerin",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      review: "Nach einem Sturmschaden war der Notdienst innerhalb weniger Stunden da. Die provisorische Abdichtung hielt, bis die endgültige Reparatur erfolgte. Faire Abrechnung.",
      category: "Notdienst"
    },
    {
      name: "Jens W.",
      role: "Gewerbekunde",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      review: "Die Flachdachsanierung unserer Lagerhalle wurde termingerecht und fachgerecht durchgeführt. Das Angebot war transparent, die Baustelle blieb sauber. Empfehlenswert.",
      category: "Flachdach"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials-section-wrapper" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 overflow-hidden">
      
      {/* HEADER ROW WITH NAVIGATION AT TOP RIGHT ALIGNMENT */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
        
        {/* Editorial Heading Aligned Left */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
            <span className="w-10 h-[2px] bg-[#C62828]" />
            Kundenstimmen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1F2937] tracking-tight leading-none uppercase">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
            Was unsere Kunden über die Zusammenarbeit mit uns sagen.
          </p>
        </div>

        {/* Circular navigation arrow buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="w-12 h-12 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-[#1E5FA8] transition-colors shadow-sm focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all shadow-sm focus:outline-none cursor-pointer hover:shadow-md"
            style={{ backgroundColor: '#1E5FA8' }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* SINGLE TESTIMONIAL EDITORIAL CONTAINER */}
      <div className="bg-white rounded-[20px] p-8 sm:p-16 lg:p-20 border border-neutral-200/50 shadow-sm relative min-h-[380px] flex flex-col justify-between overflow-hidden">
        
        {/* Background Light Accent Decor Element */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[72px] opacity-10 pointer-events-none"
          style={{ backgroundColor: '#C62828' }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 flex-1 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Category Upper Label */}
              <div className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                BEWERTUNG &middot; {currentTestimonial.category.toUpperCase()}
              </div>

              {/* Large Editorial narrative text */}
              <p className="text-xl sm:text-2xl lg:text-[28px] text-[#1F2937] font-medium leading-relaxed max-w-[950px] tracking-tight">
                &bdquo;{currentTestimonial.review}&ldquo;
              </p>
            </div>

            {/* Subtle Divider Line near bottom */}
            <div className="w-full h-[1px] bg-neutral-100 my-8" />

            {/* Bottom Row details */}
            <div className="flex items-center gap-4">
              {/* Profile Avatar circle */}
              <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-md flex-shrink-0">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name and Designation */}
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#1F2937] font-display">
                  {currentTestimonial.name}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {currentTestimonial.role}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}
