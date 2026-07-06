import React from "react";
import { View } from "../types";
import { SERVICES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, AlertTriangle, Lightbulb, ShieldAlert, FileText, ChevronRight, HelpCircle, Phone } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface ServicesViewProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  setCurrentView: (view: View) => void;
}

export default function ServicesView({ selectedServiceId, setSelectedServiceId, setCurrentView }: ServicesViewProps) {
  // Safe icon resolver
  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    if (Icon) return <Icon className="w-4 h-4 shrink-0" />;
    return <CheckCircle className="w-4 h-4 shrink-0" />;
  };

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div id="services-view" className="bg-white font-sans">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-14 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Clinical Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Specialized Care Programs
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Select a service category below to explore clinical indications, therapeutic solutions, and expected health outcomes.
          </p>
        </div>
      </section>

      {/* Main Grid: Left Navigation / Right Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Mobile Selector pill (only visible on mobile) */}
          <div className="block lg:hidden w-full lg:col-span-1 border border-slate-200 rounded-xl p-3.5 bg-slate-50 mb-4">
            <label htmlFor="service-mobile-select" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Select Behavioral Service
            </label>
            <select
              id="service-mobile-select"
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Left Vertical Navigation Rail (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4 space-y-1.5 border border-slate-100 p-4 rounded-2xl bg-slate-50/60 shadow-sm">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 font-mono">
              Directory of Care
            </span>
            {SERVICES.map((service) => {
              const isSelected = service.id === currentService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/10 scale-[1.01]"
                      : "text-slate-600 hover:text-teal-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? "text-teal-100" : "text-slate-400"}>
                      {getIconComponent(service.iconName)}
                    </span>
                    <span>{service.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 opacity-60 ${isSelected ? "text-white" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Content Panel */}
          <div className="lg:col-span-8 space-y-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 text-left"
              >
                {/* Title & Overview */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {getIconComponent(currentService.iconName)}
                    <span>{currentService.title}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {currentService.title} - Overview and Path to Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {currentService.overview}
                  </p>
                </div>

                {/* Grid: Symptoms & Treatments */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  
                  {/* Left: Symptoms */}
                  <div className="bg-rose-50/40 border border-rose-100/50 rounded-2xl p-6.5 space-y-4">
                    <div className="flex items-center gap-2 text-rose-800">
                      <AlertTriangle className="w-5 h-5 text-rose-500" />
                      <h3 className="font-bold text-xs sm:text-sm tracking-tight uppercase">Common Symptoms & Indicators</h3>
                    </div>
                    <ul className="space-y-2.5 text-slate-600 text-xs leading-relaxed font-medium">
                      {currentService.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-500 select-none font-mono shrink-0 font-bold">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Treatment Options */}
                  <div className="bg-sky-50/40 border border-sky-100/50 rounded-2xl p-6.5 space-y-4">
                    <div className="flex items-center gap-2 text-sky-800">
                      <Lightbulb className="w-5 h-5 text-sky-500" />
                      <h3 className="font-bold text-xs sm:text-sm tracking-tight uppercase">Treatment Options & Modalities</h3>
                    </div>
                    <ul className="space-y-2.5 text-slate-600 text-xs leading-relaxed font-medium">
                      {currentService.treatmentOptions.map((opt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Patient Benefits */}
                <div className="bg-teal-50/30 border border-teal-100/40 rounded-2xl p-6.5 space-y-4 pt-6">
                  <div className="flex items-center gap-2 text-teal-800">
                    <CheckCircle className="w-5 h-5 text-teal-500 fill-teal-50" />
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-tight uppercase">Expected Care Outcomes & Benefits</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed font-medium">
                    {currentService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Local Specific FAQs */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 text-slate-800">
                    <HelpCircle className="w-5 h-5 text-teal-500" />
                    <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-tight">Service-Specific Questions</h3>
                  </div>
                  <div className="space-y-4">
                    {currentService.faq.map((qna, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-left space-y-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-start gap-2">
                          <span className="text-teal-600 font-mono font-bold">Q:</span>
                          <span>{qna.q}</span>
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed pl-5 font-medium">
                          {qna.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scheduling Callout */}
                <div className="p-6 bg-gradient-to-r from-teal-50 to-sky-50 rounded-2xl border border-teal-100/60 flex flex-col md:flex-row items-center justify-between gap-6 text-left mt-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Have questions about {currentService.title}?</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">Our clinical coordinator can clarify co-pays, schedule times, and find the perfect provider.</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href="tel:7322571004" className="flex items-center gap-1 px-4 py-2 bg-white text-slate-700 hover:text-teal-700 text-xs font-extrabold rounded-lg border border-slate-200 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call (732) 257-1004</span>
                    </a>
                    <button
                      onClick={() => {
                        setCurrentView(View.REQUEST_APPOINTMENT);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold rounded-lg transition-colors cursor-pointer"
                    >
                      Request Visit
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
