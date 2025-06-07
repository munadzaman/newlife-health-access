
import React from 'react';
import Navigation from '@/components/Navigation';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const News = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default News;
