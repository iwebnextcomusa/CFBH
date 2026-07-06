import React, { useState } from "react";
import { View } from "../types";
import { INSURANCES } from "../data";
import { ShieldCheck, Calendar, Phone, CheckCircle, Info, FileText } from "lucide-react";

interface InsuranceViewProps {
  setCurrentView: (view: View) => void;
}

export default function InsuranceView({ setCurrentView }: InsuranceViewProps) {
  const [filterQuery, setFilterQuery] = useState("");

  const filteredInsurances = INSURANCES.filter((ins) =>
    ins.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div id="insurance-view" className="bg-white font-sans text-left">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Billing & Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Accepted Insurances & Policies
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We are in-network with several major commercial providers and offer support for out-of-network claims to ensure your care remains fully accessible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Accepted Insurances list */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">In-Network Insurance Providers</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Center For Behavioral Health is actively in-network with the following leading insurance providers. Since networks change periodically, please check with our billing coordinator to verify active enrollment.
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative max-w-md">
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search accepted insurance..."
                className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-3 text-xs transition-all focus:bg-white"
              />
            </div>

            {/* List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredInsurances.map((ins, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">{ins}</span>
                </div>
              ))}
              {filteredInsurances.length === 0 && (
                <div className="col-span-2 py-6 text-center text-xs text-slate-400">
                  No matching insurance found. Please call our office to see if we accept your out-of-network plan.
                </div>
              )}
            </div>

            {/* Out-of-network note */}
            <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-2xl space-y-3.5">
              <div className="flex items-center gap-2 text-slate-800">
                <Info className="w-5 h-5 text-teal-600" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Out-Of-Network (OON) Care</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                If we are not in-network with your specific carrier, we can provide you with detailed clinical invoices ("Superbills") containing all diagnostic and procedure codes. You can submit these directly to your insurance company for substantial out-of-network reimbursement.
              </p>
            </div>
          </div>

          {/* Right Column: Key policies and coordination guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 border border-teal-100 bg-teal-50/20 rounded-2xl space-y-4">
              <h3 className="font-bold text-sm text-teal-900 uppercase tracking-wide">Pre-Verification of Coverage</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Insurance policies contain detailed clauses regarding deductibles, copayments, and maximum allowable clinical limits. We advise all prospective patients to contact their carrier directly prior to their first session.
              </p>
              
              <div className="space-y-3 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>Does my policy cover <strong>CPT code 90791</strong> (Psychiatric Diagnostic Evaluation)?</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>Is there a different deductible for behavioral health specialty services?</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>What is my exact specialist copay or coinsurance rate?</span>
                </div>
              </div>
            </div>

            {/* Scheduling and payment CTA */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4 text-center">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Let Us Verify For You</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                When you request an appointment, our clinical intake coordinator can verify your active insurance card parameters for you.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => {
                    setCurrentView(View.REQUEST_APPOINTMENT);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold shadow-sm transition-all cursor-pointer"
                >
                  Request Consultation
                </button>
                <a
                  href="tel:7322571004"
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-teal-700 border border-slate-200 text-xs font-bold text-center transition-colors block"
                >
                  Call Billing Desk
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
