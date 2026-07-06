import React, { useState } from "react";
import { View } from "../types";
import { RESOURCES } from "../data";
import { Download, FileText, Settings, ShieldCheck, ArrowRight, HelpCircle, AlertOctagon, Heart } from "lucide-react";

interface ResourcesViewProps {
  setCurrentView: (view: View) => void;
}

export default function ResourcesView({ setCurrentView }: ResourcesViewProps) {
  const [downloadLogs, setDownloadLogs] = useState<string[]>([]);

  const handleDownload = (fileName: string, title: string) => {
    // Simulating file download safely
    alert(`Mock Download Started: ${title} (${fileName}). In a live environment, this would download the corresponding practice PDF form.`);
    setDownloadLogs((prev) => [
      `Downloaded: ${title} at ${new Date().toLocaleTimeString()}`,
      ...prev.slice(0, 4),
    ]);
  };

  return (
    <div id="resources-view" className="bg-white font-sans text-left">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Patient Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Patient Resources & Intake Forms
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Access secure new patient paperwork, explore our prescription refill and late cancellation policies, and follow easy video setup guidelines.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Forms Downloads & External Links */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intake Forms Cards */}
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Downloadable PDF Paperwork</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Please download, print, and complete these standard administrative forms prior to your first psychiatric evaluation.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESOURCES.map((res) => (
                  <div key={res.id} className="bg-slate-50 border border-slate-100/80 rounded-2xl p-5.5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-800 tracking-tight">{res.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{res.description}</p>
                    </div>

                    <div className="pt-5 border-t border-slate-200/50 mt-5 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">{res.fileName}</span>
                      <button
                        onClick={() => handleDownload(res.fileName, res.title)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Telehealth Instructions */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Telehealth Set-Up Instructions</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Accessing your psychiatric care or talk therapy via our secure video platform is simple and convenient.</p>
              </div>

              <div className="bg-gradient-to-r from-teal-50/20 to-sky-50/20 border border-teal-100/50 rounded-2xl p-6.5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                    <h4 className="text-xs font-bold text-slate-800">Secure Consultation Link</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">You will receive an automated text and email with a customized, secure HIPAA consultation link 10 minutes prior to your visit.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                    <h4 className="text-xs font-bold text-slate-800">Hardware & Browser Check</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">Click the link using Google Chrome, Safari, or Microsoft Edge. Grant camera and microphone permissions when prompted.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">3</div>
                    <h4 className="text-xs font-bold text-slate-800">Connect & Begin Care</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">Sit in a private, quiet, and well-lit room. Your provider will admit you from the secure digital waiting room immediately.</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-start gap-3">
                  <Settings className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                    <strong>Tech Support:</strong> If you encounter camera issues, clear your browser cache and refresh the connection, or call our support staff at <strong>(732) 257-1004</strong> for immediate technical configuration.
                  </p>
                </div>
              </div>
            </div>

            {/* External Mental Health Links */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Helpful Mental Health Resources</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">We recommend these highly respected, national mental health advocacy and education organizations.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                {[
                  { name: "National Alliance on Mental Illness (NAMI)", url: "https://www.nami.org", desc: "Support, advocacy, and comprehensive psychiatric educational materials." },
                  { name: "National Institute of Mental Health (NIMH)", url: "https://www.nimh.nih.gov", desc: "Peer-reviewed studies and accurate mental health statistics and trends." },
                  { name: "Substance Abuse & Mental Health Services (SAMHSA)", url: "https://www.samhsa.gov", desc: "Public directory, policy guidelines, and research papers." },
                  { name: "Child Mind Institute", url: "https://childmind.org", desc: "Specialized guidance for pediatric and adolescent emotional development." }
                ].map((org, i) => (
                  <a
                    key={i}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-white border border-slate-100 hover:border-teal-200 rounded-2xl block transition-all hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">{org.name}</span>
                      <ArrowRight className="w-4 h-4 text-teal-600 shrink-0" />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">{org.desc}</p>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Policies & Crisis Resources */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Download logs */}
            {downloadLogs.length > 0 && (
              <div className="p-5 bg-slate-50 border border-slate-200/60 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Download Activity</h4>
                <ul className="space-y-1.5 text-[10px] font-mono text-slate-500 leading-relaxed">
                  {downloadLogs.map((log, index) => (
                    <li key={index} className="truncate">• {log}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Refill Policies */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-slate-800">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Prescription Policies</h4>
              </div>
              <ul className="space-y-3 text-xs text-slate-500 leading-relaxed font-medium">
                <li>
                  <strong>Regular Evaluations:</strong> Dr. Srinivasan mandates in-person or telehealth follow-ups at least every 90 days to safely assess dose, efficacy, and physical vitals prior to refilling ongoing prescriptions.
                </li>
                <li>
                  <strong>Refill Requests:</strong> Please request all refills at least <strong>48 business hours</strong> in advance of running out. Refills are processed during normal office hours (Monday - Friday).
                </li>
                <li>
                  <strong>Controlled Substances:</strong> Specific stimulant or tranquilizing medications require physical electronic signatures and cannot be filled without active follow-up clinical visits.
                </li>
              </ul>
            </div>

            {/* Appointment Policies */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-slate-800">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Appointment Policies</h4>
              </div>
              <ul className="space-y-3 text-xs text-slate-500 leading-relaxed font-medium">
                <li>
                  <strong>24-Hour Cancellation:</strong> Please notify us at least 24 hours prior to cancelling or rescheduling. Late cancellations prevent patients on our waitlist from receiving immediate help.
                </li>
                <li>
                  <strong>Co-Payments:</strong> Standard co-payments, co-insurance, or deductibles must be settled prior to starting your scheduled clinical consultation.
                </li>
              </ul>
            </div>

            {/* Crisis Sidebar Box */}
            <div className="p-6 bg-rose-50 border border-rose-100 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-rose-800">
                <AlertOctagon className="w-5 h-5 text-rose-500" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Crisis Resources</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Our office does not provide 24/7 psychiatric emergency services. If you are experiencing suicidal thoughts, crisis, or extreme distress:
              </p>
              <div className="space-y-3 pt-2 text-xs font-bold">
                <div className="p-3.5 bg-white border border-rose-200/80 rounded-xl flex items-center justify-between text-rose-800">
                  <span>Suicide & Crisis Lifeline</span>
                  <a href="tel:988" className="px-3 py-1 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">Call 988</a>
                </div>
                <div className="p-3.5 bg-white border border-rose-200/80 rounded-xl flex items-center justify-between text-rose-800">
                  <span>Psychiatric Emergency</span>
                  <a href="tel:911" className="px-3 py-1 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">Call 911</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
