import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import { View } from "./types";
import { SERVICES } from "./data";

// Page Views
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import ProvidersView from "./components/ProvidersView";
import ResourcesView from "./components/ResourcesView";
import InsuranceView from "./components/InsuranceView";
import TestimonialsView from "./components/TestimonialsView";
import FAQView from "./components/FAQView";
import ContactView from "./components/ContactView";
import RequestAppointmentView from "./components/RequestAppointmentView";

import { ArrowUp } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0]?.id || "");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll-to-Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Switcher to render correct Page View
  const renderActiveView = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <HomeView
            setCurrentView={setCurrentView}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case View.ABOUT:
        return <AboutView setCurrentView={setCurrentView} />;
      case View.SERVICES:
        return (
          <ServicesView
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            setCurrentView={setCurrentView}
          />
        );
      case View.PROVIDERS:
        return <ProvidersView setCurrentView={setCurrentView} />;
      case View.RESOURCES:
        return <ResourcesView setCurrentView={setCurrentView} />;
      case View.INSURANCE:
        return <InsuranceView setCurrentView={setCurrentView} />;
      case View.TESTIMONIALS:
        return <TestimonialsView setCurrentView={setCurrentView} />;
      case View.FAQ:
        return <FAQView setCurrentView={setCurrentView} />;
      case View.CONTACT:
        return <ContactView />;
      case View.REQUEST_APPOINTMENT:
        return <RequestAppointmentView setCurrentView={setCurrentView} />;
      default:
        return (
          <HomeView
            setCurrentView={setCurrentView}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between select-none">
      
      {/* 1. Practice Navigation Header */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {/* 2. Main content mounting frame */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* 3. Centered, detailed footer with developed credit */}
      <Footer setCurrentView={setCurrentView} />

      {/* 4. Secure AI clinical virtual assistant widget */}
      <ChatbotWidget />

      {/* 5. Floating Scroll-to-top button with scale-up interaction */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-teal-600 text-white shadow-xl hover:bg-teal-700 transition-all hover:scale-110 active:scale-95 border border-teal-500/30 cursor-pointer animate-fade-in"
          aria-label="Scroll to top of the page"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
