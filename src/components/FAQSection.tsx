import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  primaryColor: string;
  accentColor: string;
}

export default function FAQSection({ primaryColor, accentColor }: FAQSectionProps) {
  const faqs: FAQItem[] = [
    {
      question: "Wie lange dauert eine Dachsanierung?",
      answer: "Die Dauer hängt von der Größe und dem Zustand des Daches ab. In der Regel dauert eine vollständige Dachsanierung bei einem Einfamilienhaus zwischen 3 und 7 Werktagen. Unser eingespieltes Meister-Team sorgt für eine zügige und strukturierte Abwicklung ohne unnötige Verzögerungen."
    },
    {
      question: "Bieten Sie eine kostenlose Beratung an?",
      answer: "Ja, absolut. Wir bieten eine unverbindliche Vor-Ort-Beratung an. Wir besichtigen Ihr Dach, besprechen Ihre Wünsche und erstellen Ihnen ein transparentes Festpreis-Angebot ohne versteckte Kosten."
    },
    {
      question: "Arbeiten Sie auch bei Notfällen?",
      answer: "Ja, unser 24/7 Notdienst steht Ihnen bei akuten Sturmschäden oder plötzlichem Wassereintritt jederzeit zur Verfügung. Wir rücken schnellstmöglich aus, um eine professionelle Notabdichtung vorzunehmen und Folgeschäden an Ihrem Wohngebäude zu verhindern."
    },
    {
      question: "Welche Materialien verwenden Sie?",
      answer: "Wir arbeiten ausschließlich mit hochwertigen, langlebigen und zertifizierten Materialien deutscher und europäischer Qualitätshersteller. Ob Premium-Tondachziegel, Naturschiefer oder langlebige EPDM-Flachdachbahnen – Ihr Dach erhält den besten Schutz."
    },
    {
      question: "Sind Sie ein zertifizierter Meisterbetrieb?",
      answer: "Ja, Dach Meister ist ein voll eingetragener Innungs-Fachbetrieb. Mit über 20 Jahren Erfahrung kombinieren wir traditionelles deutsches Handwerk mit modernster Technik und energetischen Standards nach EnEV."
    }
  ];

  // Keep track of active accordion item index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
      {/* Outer wrapper limited to 1000px specifically for FAQ focus & readability */}
      <div className="max-w-[1000px] mx-auto">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
            <span className="w-10 h-[2px] bg-[#C62828]" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1F2937] tracking-tight leading-none uppercase">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Antworten auf die wichtigsten Fragen rund um unsere Dachdeckerleistungen und Ihren Sanierungsablauf.
          </p>
        </div>

        {/* Compact, ultra-clean rounded list card */}
        <div className="bg-white rounded-[20px] p-6 sm:p-10 lg:p-12 border border-neutral-200/50 shadow-sm">
          <div className="divide-y divide-neutral-100">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div 
                  key={index} 
                  className={`transition-colors duration-250 ${index === 0 ? "pb-6" : index === faqs.length - 1 ? "pt-6" : "py-6"}`}
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left group gap-4 py-2 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#1F2937] group-hover:text-black transition-colors">
                      {faq.question}
                    </span>

                    {/* Minimalist interactive ChevronDown with custom brand tint on active */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200/80 group-hover:bg-neutral-50 shrink-0 transition-colors"
                      style={isOpen ? { backgroundColor: '#FDEAEA', color: '#C62828', borderColor: '#C62828' } : {}}
                    >
                      <ChevronDown className="w-4 h-4 text-neutral-600 transition-colors" style={isOpen ? { color: '#141414' } : {}} />
                    </motion.div>
                  </button>

                  {/* Expanding Answer with Framer Motion layout */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed pl-1 max-w-[850px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
