import React, { useState } from "react";
import { View } from "../types";
import { FAQS } from "../data";
import { Search, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Mail, Phone, Calendar } from "lucide-react";

interface FAQViewProps {
  setCurrentView: (view: View) => void;
}

export default function FAQView({ setCurrentView }: FAQViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "appointment" | "insurance" | "telehealth" | "medication">("all");
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const categories = [
    { label: "All Questions", id: "all" as const },
    { label: "General Clinic", id: "general" as const },
    { label: "Scheduling", id: "appointment" as const },
    { label: "Insurance & Costs", id: "insurance" as const },
    { label: "Telehealth Guide", id: "telehealth" as const },
    { label: "Prescription Refills", id: "medication" as const }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    if (expandedFaqId === id) {
      setExpandedFaqId(null);
    } else {
      setExpandedFaqId(id);
    }
  };

  return (
    <div id="faq-view" className="bg-white font-sans text-left">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Have Questions?
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Find immediate answers regarding insurance verification, appointment scheduling guidelines, medication refill requests, and private telehealth setups.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Category Pills & FAQ Accordions */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Search Filter */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our patient FAQ..."
                className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl pl-12 pr-4 py-3.5 text-xs transition-all focus:bg-white"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedFaqId(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight cursor-pointer transition-all ${
                    activeCategory === cat.id
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/10"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-100 rounded-2xl bg-white overflow-hidden transition-all shadow-sm hover:shadow"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-800 hover:text-teal-700 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50 bg-slate-50/20 font-medium pl-13">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="py-12 text-center text-xs text-slate-400">
                  No matching frequently asked questions found. Please try searching other keywords or email us directly.
                </div>
              )}
            </div>

          </div>

          {/* Right: Consultation Callout Box */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-5">
              <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide">Still Have Questions?</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                Our clinical reception staff in East Brunswick is incredibly friendly, knowledgeable, and ready to walk you through any scheduling, pricing, or billing concerns.
              </p>

              <div className="space-y-3.5 text-xs text-slate-600 font-bold">
                <div className="flex items-center gap-3">
                  <Phone className="w-4.5 h-4.5 text-teal-600" />
                  <a href="tel:7322571004" className="hover:text-teal-700 hover:underline">(732) 257-1004</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 text-teal-600" />
                  <a href="mailto:svsrinivasan@yahoo.com" className="hover:text-teal-700 hover:underline truncate">svsrinivasan@yahoo.com</a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/50">
                <button
                  onClick={() => {
                    setCurrentView(View.REQUEST_APPOINTMENT);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold transition-all cursor-pointer shadow-sm"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
