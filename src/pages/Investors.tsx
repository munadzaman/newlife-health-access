
import React from 'react';
import Navigation from '@/components/Navigation';
import InvestorsSection from '@/components/InvestorsSection';
import Footer from '@/components/Footer';

const Investors = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <InvestorsSection />
      <Footer />
    </div>
  );
};

export default Investors;
