import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularDestinations from "./components/PopularDestinations";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PopularDestinations />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
