
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClinicsSection from '@/components/ClinicsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClinicsSection />
      <AboutSection />
      <ServicesSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
