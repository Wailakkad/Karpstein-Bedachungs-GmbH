export interface CompanyData {
  companyName: string;
  city: string;
  primaryColor: string; // hex colour, e.g. "#A3E635" (lime green)
  accentColor: string;  // accent hex or tailwind equivalent for pills, e.g. "#C084FC" (purple) or dynamic
  phone: string;
  email: string;
  heroImage: string;
  secondaryImage: string;
  yearsExperience: string;
  completedProjects: string;
  happyClients: string;
  tagline: string;
  highlightedText: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  trustText: string;
}

export interface NavItem {
  label: string;
  href: string;
}
