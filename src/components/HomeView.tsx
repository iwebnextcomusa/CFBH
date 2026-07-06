import React from "react";
import { View } from "../types";
import { SERVICES, TESTIMONIALS } from "../data";
import { motion } from "motion/react";
import { Phone, Calendar, ArrowRight, Shield, Award, Users, MapPin, Video, CheckCircle, Heart, Star, Volume2, VolumeX } from "lucide-react";

interface HomeViewProps {
  setCurrentView: (view: View) => void;
  setSelectedServiceId: (id: string) => void;
}

export default function HomeView({ setCurrentView, setSelectedServiceId }: HomeViewProps) {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 14,
        mass: 1
      }
    }
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView(View.SERVICES);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home-view" className="bg-white">
      
      {/* 1. Hero Section */}
      <section id="hero-section" className="relative py-20 md:py-28 lg:py-32 overflow-hidden font-sans min-h-[600px] flex items-center">
        {/* Ambient Video & Forest Image Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Calming fallback background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1600')`
            }}
          />
          {/* High-quality autoplaying ambient video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-85"
          >
            <source src="https://vq8gx571fdtu5hbl.public.blob.vercel-storage.com/CFBH.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Ambient Overlay for pristine contrast and high-readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/75 via-white/65 to-teal-50/50 backdrop-blur-[0.5px]" />
        
        {/* Ambient Video Sound Control */}
        <div className="absolute bottom-6 right-6 z-20">
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-lg backdrop-blur-md text-slate-700 hover:text-teal-600 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title={isMuted ? "Unmute ambient forest sound" : "Mute ambient forest sound"}
            aria-label={isMuted ? "Unmute ambient forest sound" : "Mute ambient forest sound"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-slate-500 animate-pulse" />
            ) : (
              <Volume2 className="w-5 h-5 text-teal-600" />
            )}
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Centered Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-teal-500 text-teal-600" />
                <span>Professional Mental Health Clinic</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-3xl">
                Compassionate Behavioral Health Care for <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">Individuals and Families</span>
              </h1>
              <p className="text-md sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Provide personalized mental health care in a supportive, empathetic, and confidential environment. Our evidence-based approach is designed around your unique wellness journey.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentView(View.REQUEST_APPOINTMENT)}
                  className="flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-extrabold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>
                <a
                  href="tel:7322571004"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-extrabold border-2 border-slate-200 hover:border-teal-600 text-slate-700 hover:text-teal-700 transition-all hover:bg-teal-50/30 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: (732) 257-1004</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/50 w-full max-w-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-slate-600">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-slate-600">Board Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-slate-600">Telehealth Enabled</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. About Practice Preview Section */}
      <section id="about-preview-section" className="py-16 md:py-24 bg-white border-y border-slate-50 font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100 uppercase">
            About Our Clinic
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 max-w-2xl mx-auto">
            A Safe, Empathetic Gateway to Lasting Mental Wellness
          </h2>
          <p className="text-md text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
            At the <strong>Center For Behavioral Health</strong>, we believe every individual deserves mental healthcare that is both scientifically rigorous and deeply compassionate. Our board-certified specialists partner with children, adolescents, and adults in East Brunswick, NJ, providing psychiatric evaluations, psychotherapy, and medication management in a strictly confidential, warm, and highly professional clinical setting.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                setCurrentView(View.ABOUT);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 group cursor-pointer"
            >
              <span>Learn more about our philosophy of care</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Grid */}
      <section id="services-grid-section" className="py-16 md:py-24 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-100/60 px-3.5 py-1.5 rounded-full border border-teal-100 uppercase">
              Clinical Specializations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-4">
              Comprehensive Behavioral Health Services
            </h2>
            <p className="text-sm sm:text-md text-slate-500 leading-relaxed mt-4 max-w-2xl mx-auto">
              We offer evidence-based treatments tailored to support patients of all ages, helping you find stability, clarity, and sustainable healing.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md p-6.5 flex flex-col justify-between transition-all group duration-200"
              >
                <div className="space-y-4">
                  {/* Styled Icon */}
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50 mt-6">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 cursor-pointer"
                  >
                    <span>Learn Symptoms & Care</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose Our Practice Section */}
      <section id="why-choose-us-section" className="py-16 md:py-24 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-100/60 px-3.5 py-1.5 rounded-full border border-teal-100 uppercase">
              The Clinic Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-4">
              Why Individuals Choose Our Practice
            </h2>
            <p className="text-sm sm:text-md text-slate-500 leading-relaxed mt-4 max-w-xl mx-auto">
              Our clinical environment has been designed to maximize patient trust, clinical comfort, and effective recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-teal-600" />,
                title: "Experienced Professionals",
                desc: "Led by board-certified psychiatrist Dr. S.V. Srinivasan and therapist Patricia Furst, LCSW."
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
                title: "Personalized Treatment",
                desc: "No cookie-cutter templates. We tailor pharmacology and therapy to your life goals."
              },
              {
                icon: <Shield className="w-6 h-6 text-teal-600" />,
                title: "Confidential Care",
                desc: "We strictly adhere to federal HIPAA rules, protecting your privacy with absolute vigilance."
              },
              {
                icon: <Heart className="w-6 h-6 text-teal-600" />,
                title: "Compassionate Staff",
                desc: "Every coordinator, billing manager, and clinician listens to you with deep respect."
              },
              {
                icon: <MapPin className="w-6 h-6 text-teal-600" />,
                title: "Convenient Location",
                desc: "Located beautifully on Auer Court in East Brunswick, NJ with free accessible parking."
              },
              {
                icon: <Video className="w-6 h-6 text-teal-600" />,
                title: "Telehealth Availability",
                desc: "Fully secure, high-definition online video sessions for incredible schedule flexibility."
              },
              {
                icon: <Award className="w-6 h-6 text-teal-600" />,
                title: "Insurance Assistance",
                desc: "We accept leading commercial providers and handle all authorization filing directly."
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
                title: "Evidence-Based Care",
                desc: "All psychiatric diagnostics and therapy conform to rigorous clinical research guidelines."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4 border border-teal-100">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 tracking-tight">{feature.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials-section" className="py-16 md:py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100 uppercase">
              Patient Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-4">
              Real Stories of Growth and Stability
            </h2>
            <p className="text-sm sm:text-md text-slate-500 leading-relaxed mt-4 max-w-xl mx-auto">
              Hear directly from individuals who have partnered with our team to rebuild resilience and health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-inner flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-medium">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/50 mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{t.author}</h4>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.role}</span>
                  </div>
                  <span className="text-[11px] text-teal-600 bg-teal-50 border border-teal-100/50 px-2 py-0.5 rounded-full font-mono font-bold uppercase">
                    Verified Care
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Grand Call to Action Section */}
      <section id="cta-section" className="relative py-16 md:py-24 bg-gradient-to-r from-teal-700 to-sky-700 text-white font-sans overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-sm sm:text-md text-teal-100 leading-relaxed max-w-xl mx-auto font-medium">
            Contact our clinical reception team today. We provide easy scheduling, friendly guidance, and HIPAA-secure communication pathways.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentView(View.REQUEST_APPOINTMENT)}
              className="flex items-center gap-2 px-8 py-4.5 rounded-xl text-xs font-extrabold bg-white hover:bg-slate-50 text-teal-800 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Initial Visit</span>
            </button>
            <a
              href="tel:7322571004"
              className="flex items-center gap-2 px-8 py-4.5 rounded-xl text-xs font-extrabold border border-white/40 hover:border-white text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: (732) 257-1004</span>
            </a>
          </div>

          <p className="text-[11px] text-teal-200/80 max-w-md mx-auto leading-relaxed pt-2">
            No referral necessary for most commercial insurances. Our coordinator will verify your co-pays and deductibles before your evaluation.
          </p>
        </div>
      </section>

    </div>
  );
}
