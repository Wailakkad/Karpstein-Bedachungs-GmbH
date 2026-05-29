import { MouseEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CompanyData } from "../types";

interface FooterProps {
  company: CompanyData;
}

export default function Footer({ company }: FooterProps) {
  // Navigation groupings
  const navLinks = [
    { label: "Startseite", href: "#main-header" },
    { label: "Leistungen", href: "#services-section-wrapper" },
    { label: "Über uns", href: "#why-choose-us-section" },
    { label: "Kundenstimmen", href: "#testimonials-section-wrapper" },
    { label: "FAQ / Fragen", href: "#faq-section" }
  ];

  const serviceLinks = [
    { label: "Steildächer", href: "#services-section-wrapper" },
    { label: "Flachdacharbeiten", href: "#services-section-wrapper" },
    { label: "Schornsteinverkleidungen", href: "#services-section-wrapper" },
    { label: "Fassadenverkleidungen", href: "#services-section-wrapper" }
  ];

  // Quick helper to scroll smoothly to sections
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="main-footer" className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 border-t border-gray-200">
      
      {/* 4-COLUMN PREMIUM MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
        
        {/* COLUMN 1: Brand & Bio (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center">
            <img 
              src="/new-logo.png" 
              alt="Karpstein Bedachungs GmbH"
              className="h-20 w-auto"
            />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Ihr zuverlässiger Partner für Dacharbeiten, 24h Notdienst und fachgerechte Ausführung – unter der Leitung von Dachdeckermeister Heiko Karpstein.
          </p>
        </div>

        {/* COLUMN 2: Navigation Links (lg:col-span-2 md:col-span-1) */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#1F2937] font-display">
            Navigation
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-gray-500 hover:text-black text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: Roof Services (lg:col-span-3 md:col-span-1) */}
        <div className="lg:col-span-3 space-y-5">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#1F2937] font-display">
            Unsere Leistungen
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-gray-500 hover:text-black text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4: Contact & Location details (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-5">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#1F2937] font-display">
            Zentraler Kontakt
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#1E5FA8] mt-0.5" />
              <div className="flex flex-col">
                <a href={`tel:${company.phone}`} className="text-[#1F2937] hover:underline font-bold text-sm">
                  {company.phone}
                </a>
                <span className="text-[10px] uppercase text-emerald-600 font-bold tracking-widest mt-0.5">24/7 Notdienst</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#1E5FA8] mt-0.5" />
              <a href={`mailto:${company.email}`} className="text-gray-500 hover:text-black text-sm font-medium transition-colors break-all">
                {company.email}
              </a>
            </li>

            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-[#1E5FA8] mt-0.5" />
              <span className="text-gray-500 text-sm leading-snug">
                Dachweg 12<br />38640 {company.city} (Meister-Zentrale)
              </span>
            </li>

            <li className="flex items-start gap-4 pt-1">
              <Clock className="w-4 h-4 text-[#1E5FA8] mt-0.5" />
              <span className="text-gray-500 text-xs">
                Mo - Fr: 07:00 - 18:00<br />
                Sa: 08:30 - 13:00 (Notfälle 24 Std)
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM METADATA & COMPLIANCE ROW */}
      <div className="pt-8 border-t border-gray-150 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
        
        {/* Dynamic creation and business branding copyrights */}
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1F2937] opacity-70">
          &copy; {new Date().getFullYear()} {company.companyName.toUpperCase()}. Alle Rechte vorbehalten.
        </span>

        {/* Fully operational simulated anchor nodes matching standard legal links */}
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
          <a 
            onClick={() => alert("Hier ansehen: Vollständiges gesetzeskonformes Impressum des Dach Meister Goslar Meisterbetriebs.")} 
            className="text-xs font-bold uppercase tracking-widest hover:text-[#1F2937] cursor-pointer transition-colors"
          >
            Impressum
          </a>
          <a 
            onClick={() => alert("Hier ansehen: DSGVO-konforme Datenschutzerklärung zur Erfassung von Kontaktformularanfragen.")} 
            className="text-xs font-bold uppercase tracking-widest hover:text-[#1F2937] cursor-pointer transition-colors"
          >
            Datenschutz
          </a>
          <a 
            onClick={() => alert("Hier ansehen: Allgemeine Geschäftsbedingungen für Dachdeckerarbeiten des Meisterbetriebs.")} 
            className="text-xs font-bold uppercase tracking-widest hover:text-[#1F2937] cursor-pointer transition-colors"
          >
            AGB
          </a>
        </div>
        
      </div>

    </footer>
  );
}
