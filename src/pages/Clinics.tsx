
import React from 'react';
import Navigation from '@/components/Navigation';
import ClinicsSection from '@/components/ClinicsSection';
import Footer from '@/components/Footer';

const Clinics = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ClinicsSection />
      <Footer />
    </div>
  );
};

export default Clinics;
