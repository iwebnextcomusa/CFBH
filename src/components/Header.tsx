import React, { useState } from "react";
import { Menu, X, Phone, Calendar, Heart } from "lucide-react";
import { View } from "../types";

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

export default function Header({ currentView, setCurrentView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", view: View.HOME },
    { label: "About Us", view: View.ABOUT },
    { label: "Services", view: View.SERVICES },
    { label: "Providers", view: View.PROVIDERS },
    { label: "Patient Resources", view: View.RESOURCES },
    { label: "Insurance", view: View.INSURANCE },
    { label: "Testimonials", view: View.TESTIMONIALS },
    { label: "FAQ", view: View.FAQ },
    { label: "Contact", view: View.CONTACT },
  ];

  const handleNavClick = (view: View) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header id="practice-main-header" className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Title */}
          <div
            onClick={() => handleNavClick(View.HOME)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center shadow-md group-hover:bg-teal-700 transition-colors">
              <Heart className="w-5 h-5 text-white animate-pulse" style={{ animationDuration: "3s" }} />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                Center For Behavioral Health
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1 font-semibold">
                East Brunswick, NJ
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`px-3 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                  currentView === item.view
                    ? "text-teal-700 bg-teal-50"
                    : "text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7322571004"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-teal-700 hover:bg-teal-50 transition-colors border border-teal-200/50"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(732) 257-1004</span>
            </a>
            <button
              onClick={() => handleNavClick(View.REQUEST_APPOINTMENT)}
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Request Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="tel:7322571004"
              className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 hover:bg-teal-100 transition-colors"
              aria-label="Call Office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-inner animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  currentView === item.view
                    ? "bg-teal-50 text-teal-700 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-teal-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:7322571004"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold border border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (732) 257-1004</span>
              </a>
              <button
                onClick={() => handleNavClick(View.REQUEST_APPOINTMENT)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-extrabold bg-teal-600 hover:bg-teal-700 text-white shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
