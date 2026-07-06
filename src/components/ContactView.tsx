import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, CheckCircle, AlertTriangle } from "lucide-react";

export default function ContactView() {
  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage("Please fill out all required fields marked with *.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.error || "Failed to submit message");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact-view" className="bg-white font-sans text-left">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Contact Our East Brunswick Office
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Reach out directly for billing inquiries, record releases, or provider details. For booking initial evaluations, please use our Appointment Scheduler.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Parameters, Map & Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact details list */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Practice Details</h2>
              <ul className="space-y-4.5 text-xs text-slate-600 leading-relaxed font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-sm">Physical Address</strong>
                    <span>Center For Behavioral Health</span>
                    <br />
                    <span>9 AUER COURT, SUITE A&B</span>
                    <br />
                    <span>EAST BRUNSWICK, NJ 08816, USA</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-sm">Telephone</strong>
                    <a href="tel:7322571004" className="hover:text-teal-700 font-bold transition-colors">
                      (732) 257-1004
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-sm">Email Inquiries</strong>
                    <a href="mailto:svsrinivasan@yahoo.com" className="hover:text-teal-700 transition-colors block">
                      svsrinivasan@yahoo.com
                    </a>
                    <a href="mailto:petzfurst@gmail.com" className="hover:text-teal-700 transition-colors block">
                      petzfurst@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-sm">Office Hours</strong>
                    <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                    <br />
                    <span>Saturday - Sunday: Closed</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Location Map</h3>
              <div className="w-full h-[250px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative shadow-sm">
                <iframe
                  title="Center For Behavioral Health Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3138865662763!2d-74.40674668460515!3d40.41372507936551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c5ed835cf8db%3A0x89e8f4955bca4ec3!2s9%20Auer%20Ct%2C%20East%20Brunswick%2C%20NJ%2008816!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form & Emergency Panel */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-6.5 md:p-8 space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Send Us a Direct Message</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Please enter your parameters below. Our staff reviews incoming inquiries during standard business hours.</p>
              </div>

              {successMessage ? (
                <div className="p-6 bg-teal-50/50 border border-teal-100 rounded-2xl text-center space-y-3.5">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800">Message Submitted!</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{successMessage}</p>
                  <button
                    onClick={() => setSuccessMessage("")}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 cursor-pointer underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium text-slate-700">
                  {errorMessage && (
                    <p className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-[10px] text-rose-700 leading-relaxed font-bold">
                      {errorMessage}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="block text-slate-500">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block text-slate-500">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="block text-slate-500">
                        Telephone <span className="text-slate-400">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(732) 555-0199"
                        className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label htmlFor="contact-subject" className="block text-slate-500">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g., Records Request, Billing Question"
                        className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-slate-500">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please type your message in detail here. Do not submit sensitive genetic or physical health history..."
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl p-4 transition-all focus:bg-white"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Active Emergency Callout Banner */}
            <div className="p-5 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1 text-left">
                <h4 className="font-extrabold text-xs text-rose-800 uppercase tracking-wide">Crisis Emergency Notice</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  This contact panel is strictly for non-urgent clinic paperwork. If you or a family member are experiencing a psychiatric crisis, immediate self-harm thoughts, or life-threatening symptoms, please call <strong>911</strong> or go to your nearest emergency room. You can also dial <strong>988</strong> to connect with the 24/7 National Suicide & Crisis Lifeline instantly.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
