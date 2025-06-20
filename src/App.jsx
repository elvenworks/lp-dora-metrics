import React from "react";
import "./App.css";

import Header from "./components/layouts/Header";
import HeroSection from "./components/layouts/HeroSection";
import MetricsSection from "./components/layouts/MetricsSection";
import BenefitsSection from "./components/layouts/BenefitsSection";
import ResultsSection from "./components/layouts/ResultsSection";
import FAQSection from "./components/layouts/FAQSection";
import CTASection from "./components/layouts/CTASection";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="min-h-screen font-display bg-white">
      <Header />
      <HeroSection />
      <MetricsSection />
      <BenefitsSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
