import React, { useState } from "react";
import { View, Testimonial } from "../types";
import { TESTIMONIALS } from "../data";
import { Star, Quote, Heart, CheckCircle, PenTool, Sparkles } from "lucide-react";

interface TestimonialsViewProps {
  setCurrentView: (view: View) => void;
}

export default function TestimonialsView({ setCurrentView }: TestimonialsViewProps) {
  const [localTestimonials, setLocalTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  
  // Feedback form state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || !role.trim()) {
      setError("Please fill out all required fields to submit your feedback.");
      return;
    }

    const newTestimonial: Testimonial = {
      id: `t-${Date.now()}`,
      author: name,
      role: role,
      text: text,
      rating: rating,
    };

    setLocalTestimonials([newTestimonial, ...localTestimonials]);
    setIsSubmitted(true);
    setError("");

    // Reset fields
    setName("");
    setRole("");
    setText("");
    setRating(5);
  };

  return (
    <div id="testimonials-view" className="bg-white font-sans text-left">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-teal-50/60 to-sky-50/60 py-16 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 uppercase">
            Testimonials
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Patient Feedback & Growth Journeys
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Read original, patient-friendly narratives from individuals who have successfully partnered with our East Brunswick clinical team.
          </p>
        </div>
      </section>

      {/* Main Grid: Reviews list vs Submit Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reviews List */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Patient Experiences</h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">These realistic experiences reflect the profound healing, diagnostic precision, and therapeutic safety achieved inside our clinic.</p>
            </div>

            <div className="space-y-6">
              {localTestimonials.map((t) => (
                <div key={t.id} className="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-2xl relative shadow-inner">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-teal-100 pointer-events-none" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-medium">
                      "{t.text}"
                    </p>

                    <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{t.author}</h4>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{t.role}</span>
                      </div>
                      <span className="text-[10px] text-teal-600 bg-teal-50 border border-teal-100/50 px-2.5 py-0.5 rounded-full font-mono font-bold uppercase">
                        Verified Care
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submit Feedback Form */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6.5 space-y-6">
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-50 rounded-lg text-teal-700 text-[10px] font-bold uppercase">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Share Your Story</span>
                </div>
                <h3 className="text-md font-bold text-slate-800">Leave Your Review</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Your insights can support another neighbor in East Brunswick as they evaluate behavioral care options.</p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-teal-50/50 border border-teal-100 rounded-2xl text-center space-y-3.5">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800">Thank You For Sharing!</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Your empathetic feedback has been compiled and added to our logs. We appreciate your partnership.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 cursor-pointer underline"
                  >
                    Submit another review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium text-slate-700">
                  {error && (
                    <p className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-[10px] text-rose-700 leading-relaxed font-bold">
                      {error}
                    </p>
                  )}

                  {/* Name */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="feedback-name" className="block text-slate-500">
                      Your Name / Initials <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="feedback-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Sarah K. or Anonymous"
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="feedback-role" className="block text-slate-500">
                      Your Affiliation <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="feedback-role"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g., East Brunswick Resident, Patient, Parent"
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl px-4 py-2.5 transition-all focus:bg-white"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-1 text-left">
                    <span className="block text-slate-500 mb-1">Your Rating</span>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="text-slate-300 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="feedback-text" className="block text-slate-500">
                      Your Journey / Story <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="feedback-text"
                      rows={4}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Describe your healing experience, diagnostic clarity, or therapeutic growth..."
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl p-4 transition-all focus:bg-white"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] mt-2"
                  >
                    Post Testimonial
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
