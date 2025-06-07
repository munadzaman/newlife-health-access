
import React from 'react';
import Navigation from '@/components/Navigation';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Booking;
