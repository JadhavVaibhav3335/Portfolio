import React from "react";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import ServicesSection from "./pages/ServicesSection";
import PortfolioSection from "./pages/PortfolioSection";
import ContactSection from "./pages/ContactSection";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection/>
    </div>
  );
};

export default App;
