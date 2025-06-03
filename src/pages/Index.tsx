
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClinicsSection from '@/components/ClinicsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import SocialEnterpriseSection from '@/components/SocialEnterpriseSection';
import InvestorsSection from '@/components/InvestorsSection';
import TeamSection from '@/components/TeamSection';
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
      <SocialEnterpriseSection />
      <InvestorsSection />
      <TeamSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
