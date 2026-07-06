export enum View {
  HOME = "home",
  ABOUT = "about",
  SERVICES = "services",
  PROVIDERS = "providers",
  RESOURCES = "resources",
  INSURANCE = "insurance",
  TESTIMONIALS = "testimonials",
  FAQ = "faq",
  CONTACT = "contact",
  REQUEST_APPOINTMENT = "request-appointment"
}

export interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  datePreference: string;
  timePreference: string;
  preferredProvider: string;
  serviceRequested: string;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Provider {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  photoUrl: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  summary: string;
  overview: string;
  symptoms: string[];
  treatmentOptions: string[];
  benefits: string[];
  faq: { q: string; a: string }[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "appointment" | "insurance" | "telehealth" | "medication";
}

export interface PatientResource {
  id: string;
  title: string;
  description: string;
  fileName: string;
  category: "form" | "policy" | "guide";
}
