import React from "react";
import { View } from "../types";
import { PROVIDERS } from "../data";
import { motion } from "motion/react";
import { Heart, ShieldCheck, HelpCircle, Activity, Star } from "lucide-react";

interface AboutViewProps {
  setCurrentView: (view: View) => void;
}

export default function AboutView({ setCurrentView }: AboutViewProps) {
  return (
    <div id="about-view" className="bg-white font-sans">
      
      {/* Page Title Header banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Learn About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Mission & Clinical Philosophy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover the compassionate care team and evidence-based treatment guidelines that define the Center For Behavioral Health.
          </p>
        </div>
      </section>

      {/* Philosophy of Care */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Compassionate, Evidence-Based & Patient-Centered Care
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At the Center For Behavioral Health, we believe that emotional struggles are not a character flaw or personal defeat—they are biological, chemical, and psychological realities of life. Our mission is to restore stability, clarity, and wellness to individuals and families through integrated, evidence-based diagnoses, patient-centered therapy, and safe medication oversight.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We reject the cold, transactional nature of standard modern clinics. Instead, we invest our time and training to truly listen to your unique history, validate your daily struggles, and collaborate with you on a clinical map designed around your realistic goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100/40 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">100% HIPAA Private</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Federal safety regulations followed with maximum clinical integrity.</p>
                </div>
              </div>
              <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100/40 flex items-start gap-3">
                <Activity className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Integrative Diagnostics</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Merging biology, psychiatry, and counseling for holistic health.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="Compassionate doctor consulting patient at East Brunswick health office"
                referrerPolicy="no-referrer"
                className="rounded-2xl shadow-xl border border-slate-100 relative z-10 w-full object-cover max-h-[380px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Three Pillars Bento Row */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">Our Core Clinical Commitments</h3>
            <p className="text-xs text-slate-500 mt-2">Every protocol inside our East Brunswick practice rests upon three pillars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-6.5 rounded-2xl shadow-sm text-center">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4 text-teal-600">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Empathetic Care</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-3">
                We maintain a judgment-free sanctuary. No matter your diagnosis, you are welcomed with warmth, patience, and dignity.
              </p>
            </div>
            
            <div className="bg-white border border-slate-100 p-6.5 rounded-2xl shadow-sm text-center">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-4 text-sky-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Scientifically Validated</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-3">
                We prescribe and provide therapy based strictly on proven psychological research, DSM-5 diagnostics, and safe pharmacological guidelines.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6.5 rounded-2xl shadow-sm text-center">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4 text-teal-600">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Community Dedication</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-3">
                Proudly supporting New Jersey families with accessible in-person schedules and secure, high-definition telepsychiatry visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Providers Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100 uppercase">
            Clinical Leadership
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-4 tracking-tight">Our Dedicated Care Providers</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            Partner with compassionate, highly specialized, board-certified clinicians dedicated to your emotional wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROVIDERS.map((provider) => (
            <div key={provider.id} className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              
              {/* Photo */}
              <div className="w-full md:w-[220px] shrink-0">
                <img
                  src={provider.photoUrl}
                  alt={provider.name}
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover w-full h-[230px] shadow-sm border border-slate-100"
                />
              </div>

              {/* Bio & Details */}
              <div className="space-y-3.5 text-left flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{provider.name}</h3>
                  <span className="inline-block text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {provider.credentials}
                  </span>
                  <p className="text-xs font-semibold text-slate-500 tracking-tight leading-relaxed">
                    {provider.specialty}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed pt-2.5">
                    {provider.bio}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-50">
                  <button
                    onClick={() => {
                      setCurrentView(View.REQUEST_APPOINTMENT);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 cursor-pointer hover:underline"
                  >
                    Request consultation with {provider.name.split(",")[0]}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
