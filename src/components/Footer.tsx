import React from "react";
import { View } from "../types";
import { Heart, Phone, Mail, MapPin, Shield, Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  setCurrentView: (view: View) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  const handleNavClick = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="practice-main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans">
      {/* Top section: CTA & Primary Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Practice Branding & Statement */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick(View.HOME)}>
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-md font-extrabold text-white tracking-tight">
                Center For Behavioral Health
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing personalized, compassionate, and evidence-based mental health care in a safe, supportive, and strictly confidential clinical environment.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-slate-400" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-slate-400" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-slate-400" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase font-mono font-bold tracking-widest border-b border-slate-800 pb-2">
              Explore Practice
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "Home", view: View.HOME },
                { label: "About Our Practice", view: View.ABOUT },
                { label: "Behavioral Services", view: View.SERVICES },
                { label: "Our Providers", view: View.PROVIDERS },
                { label: "Patient Resources", view: View.RESOURCES },
                { label: "Insurance Coverage", view: View.INSURANCE },
                { label: "Testimonials", view: View.TESTIMONIALS },
                { label: "Frequently Asked Questions", view: View.FAQ },
                { label: "Contact Us", view: View.CONTACT },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavClick(link.view)}
                    className="hover:text-teal-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Clinical Services */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase font-mono font-bold tracking-widest border-b border-slate-800 pb-2">
              Our Specialties
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => handleNavClick(View.SERVICES)} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Psychiatric Evaluation
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(View.SERVICES)} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Medication Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(View.SERVICES)} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Individual Therapy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(View.SERVICES)} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Child & Adolescent Psychiatry
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(View.SERVICES)} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Anxiety & Depression Therapy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(View.SERVICES)} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Telehealth Services (Telepsychiatry)
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Contact Parameters */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase font-mono font-bold tracking-widest border-b border-slate-800 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  9 AUER COURT, SUITE A&B
                  <br />
                  EAST BRUNSWICK, NJ 08816
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:7322571004" className="hover:text-teal-400 transition-colors">
                  (732) 257-1004
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:svsrinivasan@yahoo.com" className="hover:text-teal-400 transition-colors block">
                    svsrinivasan@yahoo.com
                  </a>
                  <a href="mailto:petzfurst@gmail.com" className="hover:text-teal-400 transition-colors block">
                    petzfurst@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Emergency Notice */}
        <div className="mt-12 p-4 bg-slate-800/40 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <Shield className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <span>
            <strong>Crisis Warning:</strong> If you are experiencing suicidal thoughts, self-harm impulses, or any psychiatric or medical emergency, please call <strong>911</strong>, go to your nearest emergency room, or call the National Suicide & Crisis Lifeline at <strong>988</strong> immediately. This website and our virtual assistants are for educational purposes only and do not replace crisis care.
          </span>
        </div>
      </div>

      {/* Bottom section: Legal, Developed Credit, copyright */}
      <div className="border-t border-slate-800/60 bg-slate-950 py-8 text-center text-xs text-slate-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Quick Policy links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium">
            <button onClick={() => handleNavClick(View.RESOURCES)} className="hover:text-slate-300 transition-all cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick(View.RESOURCES)} className="hover:text-slate-300 transition-all cursor-pointer">
              Terms of Use
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick(View.RESOURCES)} className="hover:text-slate-300 transition-all cursor-pointer">
              HIPAA Privacy Notice
            </button>
          </div>

          {/* Mandatory Credit Section */}
          <div className="text-xs text-slate-400 select-text font-medium leading-relaxed">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-all font-semibold hover:underline decoration-teal-400/30">iWebNext</a>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} Center For Behavioral Health. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
