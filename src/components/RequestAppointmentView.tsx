import React, { useState } from "react";
import { View } from "../types";
import { SERVICES, PROVIDERS } from "../data";
import { Calendar, Phone, CheckCircle, Clock, ShieldCheck, Mail, Send, AlertTriangle } from "lucide-react";

interface RequestAppointmentViewProps {
  setCurrentView: (view: View) => void;
}

export default function RequestAppointmentView({ setCurrentView }: RequestAppointmentViewProps) {
  // Form States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [preferredProvider, setPreferredProvider] = useState("No Preference");
  const [preferredService, setPreferredService] = useState(SERVICES[0]?.title || "");
  const [preferredDay, setPreferredDay] = useState("Monday");
  const [preferredTime, setPreferredTime] = useState("Morning");
  const [visitReason, setVisitReason] = useState("");
  
  // Status States
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Client Validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !dob.trim() || !visitReason.trim()) {
      setErrorMessage("Please fill out all required demographic and clinical fields marked with *.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessData(null);

    const appointmentPayload = {
      firstName,
      lastName,
      email,
      phone,
      dob,
      preferredProvider,
      preferredService,
      preferredDay,
      preferredTime,
      visitReason,
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentPayload),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessData({
          id: data.id,
          message: data.message,
        });
        
        // Reset fields on success
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDob("");
        setPreferredProvider("No Preference");
        setPreferredService(SERVICES[0]?.title || "");
        setPreferredDay("Monday");
        setPreferredTime("Morning");
        setVisitReason("");
      } else {
        throw new Error(data.error || "Failed to submit request.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="request-appointment-view" className="bg-white font-sans text-left">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Start Your Care
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Request an Appointment
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Submit your scheduling, clinical, and contact preferences. Our intake coordinator will call you back within <strong>1 business day</strong> to confirm your slot.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Form panel */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-6 md:p-8 space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Clinic Intake Scheduler</h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">All submissions are transmitted securely via encrypted pipelines and reviewed under federal HIPAA privacy regulations.</p>
              </div>

              {successData ? (
                <div className="p-8 bg-teal-50/40 border border-teal-100 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-800">Appointment Request Received!</h3>
                  <div className="p-4 bg-white border border-slate-100 rounded-xl max-w-sm mx-auto shadow-inner text-xs font-mono">
                    <span className="text-slate-400">REFERENCE NUMBER:</span>
                    <strong className="block text-teal-700 text-md tracking-widest mt-1">{successData.id}</strong>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto font-medium">
                    {successData.message}
                  </p>
                  <button
                    onClick={() => setSuccessData(null)}
                    className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    Request Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs font-medium text-slate-700">
                  {errorMessage && (
                    <p className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-[10px] text-rose-700 leading-relaxed font-bold">
                      {errorMessage}
                    </p>
                  )}

                  {/* Step 1: Personal Demographic */}
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 border-b border-slate-50 pb-1">
                      1. Demographic Parameters
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div className="space-y-1">
                        <label htmlFor="appt-firstname" className="block text-slate-500">
                          First Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="appt-firstname"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Jane"
                          className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="space-y-1">
                        <label htmlFor="appt-lastname" className="block text-slate-500">
                          Last Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="appt-lastname"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* DOB */}
                      <div className="space-y-1">
                        <label htmlFor="appt-dob" className="block text-slate-500">
                          Date of Birth <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="appt-dob"
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                        />
                      </div>

                      {/* Telephone */}
                      <div className="space-y-1">
                        <label htmlFor="appt-phone" className="block text-slate-500">
                          Telephone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="appt-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(732) 257-1004"
                          className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="appt-email" className="block text-slate-500">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="appt-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane.doe@example.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Step 2: Clinic Preferences */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 border-b border-slate-50 pb-1">
                      2. Clinical Preferences
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Selector */}
                      <div className="space-y-1">
                        <label htmlFor="appt-service" className="block text-slate-500">
                          Requested Specialty
                        </label>
                        <select
                          id="appt-service"
                          value={preferredService}
                          onChange={(e) => setPreferredService(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl p-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Provider Selector */}
                      <div className="space-y-1">
                        <label htmlFor="appt-provider" className="block text-slate-500">
                          Preferred Clinician
                        </label>
                        <select
                          id="appt-provider"
                          value={preferredProvider}
                          onChange={(e) => setPreferredProvider(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl p-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        >
                          <option value="No Preference">No Preference (First Available)</option>
                          {PROVIDERS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name} ({p.credentials})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Day */}
                      <div className="space-y-1">
                        <label htmlFor="appt-day" className="block text-slate-500">
                          Preferred Weekday
                        </label>
                        <select
                          id="appt-day"
                          value={preferredDay}
                          onChange={(e) => setPreferredDay(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl p-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        >
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                        </select>
                      </div>

                      {/* Preferred Time */}
                      <div className="space-y-1">
                        <label htmlFor="appt-time" className="block text-slate-500">
                          Preferred Time of Day
                        </label>
                        <select
                          id="appt-time"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl p-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        >
                          <option value="Morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Brief Reason for visit */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 border-b border-slate-50 pb-1">
                      3. Clinical Indications
                    </h3>
                    <div className="space-y-1">
                      <label htmlFor="appt-reason" className="block text-slate-500">
                        Reason for Consultation <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="appt-reason"
                        rows={4}
                        value={visitReason}
                        onChange={(e) => setVisitReason(e.target.value)}
                        placeholder="Briefly describe your symptoms or what you're hoping to address (e.g., anxiety, diagnostic review, counseling follow-up)..."
                        className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl p-4 transition-all focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-xs hover:scale-[1.01]"
                  >
                    {isLoading ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <Send className="w-4.5 h-4.5" />
                    )}
                    <span>Request My Appointment</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Information, rules & Crisis alert */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Verification Guidance */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-slate-800">
                <Clock className="w-5 h-5 text-teal-600" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">What Happens Next?</h4>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-500 leading-relaxed font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 border border-teal-100 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span><strong>Form Review:</strong> Our clinical intake assistant securely retrieves and screens your paperwork against provider schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 border border-teal-100 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span><strong>Direct Callback:</strong> We call your telephone number within <strong>24 business hours</strong> to finalize calendar slots and answer active billing questions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 border border-teal-100 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span><strong>Virtual Portal:</strong> If you select Telehealth, we dispatch secure HIPAA connection keys straight to your inbox.</span>
                </li>
              </ul>
            </div>

            {/* Privacy Box */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-slate-800">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Confidentiality Guard</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Your medical integrity is protected with top-tier cybersecurity standards. We maintain 100% compliance under federal HIPAA mandates, ensuring files are restricted exclusively to clinical partners.
              </p>
            </div>

            {/* Crisis Alert */}
            <div className="p-6 bg-rose-50 border border-rose-100 rounded-2xl space-y-3 text-left">
              <div className="flex items-center gap-2 text-rose-800">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Immediate Crisis Support</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Do not request clinical appointments if you are in immediate danger of self-harm or psychiatric crisis. Please dial <strong>911</strong> or go to your nearest medical emergency room, or call the National Crisis Lifeline at <strong>988</strong> immediately.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
