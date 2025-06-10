
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Making World Class Healthcare Accessible",
      subtitle: "Providing leading healthcare for the people of Bangladesh",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stat: "200+ Free Cataract Surgeries"
    },
    {
      title: "Advanced Eye Care Services",
      subtitle: "Comprehensive eye examinations with latest technology",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stat: "15+ Minutes Per Consultation"
    },
    {
      title: "Rural Outreach Camps",
      subtitle: "Bringing healthcare to your doorstep across Bangladesh",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stat: "3000+ Patients Served"
    },
    {
      title: "Vision Therapy Excellence",
      subtitle: "Personalized programs for better eye-brain coordination",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stat: "Excellence in Care"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="relative h-full flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90 drop-shadow-lg">
                {slide.subtitle}
              </p>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-md mx-auto border border-white border-opacity-30">
                <div className="text-2xl font-bold text-green-400 drop-shadow-lg">{slide.stat}</div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 shadow-lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book an Appointment on WhatsApp
                </Button>
                
                <div className="text-white font-medium">Or</div>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 shadow-lg backdrop-blur-sm"
                  onClick={scrollToBooking}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Book Online Through Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
