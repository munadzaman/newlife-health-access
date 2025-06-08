
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

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
      stat: "1000+ Patients Served"
    },
    {
      title: "Vision Therapy Excellence",
      subtitle: "Personalized programs for better eye-brain coordination",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stat: "4 Clinic Locations"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-lg">
                {slide.subtitle}
              </p>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto border border-white border-opacity-30">
                <div className="text-3xl font-bold text-green-400 drop-shadow-lg">{slide.stat}</div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 shadow-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book on WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 shadow-lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Our Clinics
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
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
