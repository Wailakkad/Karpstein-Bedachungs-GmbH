/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import { CompanyData } from "./types";

export default function App() {
  const initialCompanyData: CompanyData = {
    companyName: "Karpstein Bedachungs GmbH",
    city: "Goslar",
    primaryColor: "#C62828", // Strong Professional Red
    accentColor: "#1E5FA8",  // Medium Blue
    phone: "+49 (0) 5321 78901",
    email: "anfrage@karpstein-bedachungen.de",
    heroImage: "/src/assets/images/roof_house_1780051287487.png",
    secondaryImage: "/src/assets/images/roof_detail_1780051306925.png",
    yearsExperience: "30+",
    completedProjects: "3K+",
    happyClients: "1.5K+",
    tagline: "Ihr Dach in sicheren Händen.",
    highlightedText: "sicheren Händen",
    description: "Karpstein Bedachungs GmbH steht seit über 30 Jahren für zuverlässige Dacharbeiten, fachgerechte Ausführung und schnellen 24/7 Notdienst.",
    primaryCTA: "Jetzt Hilfe anfordern",
    secondaryCTA: "Leistungen ansehen",
    trustText: "24/7 Notdienst"
  };

  const [company, setCompany] = useState<CompanyData>(initialCompanyData);

  return (
    <main className="w-full min-h-screen">
      <HeroSection 
        initialData={initialCompanyData} 
        companyState={company}
        setCompanyState={setCompany}
      />
      <ServicesSection 
        primaryColor={company.primaryColor}
        accentColor={company.accentColor}
      />
      <WhyChooseUsSection 
        primaryColor={company.primaryColor}
        accentColor={company.accentColor}
        city={company.city}
      />
      <TestimonialsSection 
        primaryColor={company.primaryColor}
        accentColor={company.accentColor}
      />
      <BlogSection 
        primaryColor={company.primaryColor}
        accentColor={company.accentColor}
        city={company.city}
      />
      <FAQSection 
        primaryColor={company.primaryColor}
        accentColor={company.accentColor}
      />
      <FinalCTASection 
        primaryColor={company.primaryColor}
        accentColor={company.accentColor}
        phone={company.phone}
      />
      <Footer 
        company={company}
      />
    </main>
  );
}
