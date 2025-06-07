
import React from 'react';
import Navigation from '@/components/Navigation';
import DoctorsSection from '@/components/DoctorsSection';
import Footer from '@/components/Footer';

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DoctorsSection />
      <Footer />
    </div>
  );
};

export default Doctors;
