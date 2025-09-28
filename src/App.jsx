import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <HomeSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;