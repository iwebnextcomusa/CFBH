import React from "react";
import { View } from "../types";
import { PROVIDERS } from "../data";
import { Award, GraduationCap, Heart, CheckCircle, Calendar, Phone, Users } from "lucide-react";

interface ProvidersViewProps {
  setCurrentView: (view: View) => void;
}

export default function ProvidersView({ setCurrentView }: ProvidersViewProps) {
  return (
    <div id="providers-view" className="bg-white font-sans">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Meet Our Experts
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Behavioral Health Providers
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Highly experienced, compassionate, and board-certified psychiatric and therapeutic professionals committed to your sustainable recovery.
          </p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Provider 1: Dr. Srinivasan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-slate-100 pb-16 text-left">
          {/* Photo Column */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-100 rounded-xl blur-lg" />
              <img
                src={PROVIDERS[0].photoUrl}
                alt={PROVIDERS[0].name}
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-xl border border-slate-100 object-cover w-full h-[320px]"
              />
            </div>
          </div>
          
          {/* Details Column */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                Medical Director
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {PROVIDERS[0].name}
              </h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                {PROVIDERS[0].credentials}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {PROVIDERS[0].bio}
            </p>

            {/* List Specialties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-100/50 rounded-2xl flex items-start gap-3">
                <Award className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Board Certified Psychiatry</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Full specialty board certifications with American Psychiatric Association standards.</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100/50 rounded-2xl flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Advanced Pharmacotherapy</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Continuous research updates in safe, non-habit-forming prescriptions.</p>
                </div>
              </div>
            </div>

            {/* Specialties Checklist */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Areas of Expertise</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Psychiatric Evaluations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Medication Oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Depression & Mood</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>ADHD Treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Bipolar Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Geriatric Psychiatry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provider 2: Patricia Furst */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          {/* Photo Column */}
          <div className="lg:col-span-4 relative flex justify-center order-last lg:order-first">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-sky-100 rounded-xl blur-lg" />
              <img
                src={PROVIDERS[1].photoUrl}
                alt={PROVIDERS[1].name}
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-xl border border-slate-100 object-cover w-full h-[320px]"
              />
            </div>
          </div>
          
          {/* Details Column */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-sky-600 uppercase bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                Clinical Therapist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {PROVIDERS[1].name}
              </h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                {PROVIDERS[1].credentials}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {PROVIDERS[1].bio}
            </p>

            {/* List Specialties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-100/50 rounded-2xl flex items-start gap-3">
                <Heart className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Cognitive Behavioral Therapy</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Evidence-based therapeutic modalities centering mindful thought restructured habits.</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100/50 rounded-2xl flex items-start gap-3">
                <Users className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Family & Pediatric counseling</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Resolving household dynamic conflicts with patient child-centered safety.</p>
                </div>
              </div>
            </div>

            {/* Specialties Checklist */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Areas of Expertise</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Cognitive Behavioral Therapy (CBT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Family Systemic Therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Anxiety Recovery Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Trauma & PTSD Healing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Stress Reduction & Somatics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Adolescent Coping Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Scheduling banner */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Have a Preferred Clinician?</h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            You can specify Dr. Srinivasan or Patricia Furst directly in our appointment scheduler or during your call.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setCurrentView(View.REQUEST_APPOINTMENT);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consult</span>
            </button>
            <a href="tel:7322571004" className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold bg-white text-slate-700 hover:text-teal-700 border border-slate-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
