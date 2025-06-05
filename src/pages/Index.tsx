
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClinicsSection from '@/components/ClinicsSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import AboutSection from '@/components/AboutSection';
import CampGallerySection from '@/components/CampGallerySection';
import SocialEnterpriseSection from '@/components/SocialEnterpriseSection';
import InvestorsSection from '@/components/InvestorsSection';
import TeamSection from '@/components/TeamSection';
import NewsSection from '@/components/NewsSection';
import BookingSection from '@/components/BookingSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClinicsSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <BookingSection />
      <CampGallerySection />
      <SocialEnterpriseSection />
      <InvestorsSection />
      <TeamSection />
      <NewsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
