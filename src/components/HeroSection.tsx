
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Advanced Eye Care Services",
      subtitle: "Comprehensive eye examinations with latest technology",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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
    },
    {
      title: "Expert Cataract Surgery",
      subtitle: "Safe and effective treatments with state-of-the-art facilities",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stat: "200+ Free Surgeries"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          
          <div className="relative h-full flex items-center justify-center text-white">
            <div className="text-center max-w-6xl px-4">
              {/* Main Slogan */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Making World Class Healthcare Accessible
                </h1>
                <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg font-medium">
                  Providing leading healthcare for the people of Bangladesh
                </p>
              </div>

              {/* Slide Specific Content */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-300">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  {slide.subtitle}
                </p>
                <div className="text-2xl md:text-3xl font-bold text-blue-300 drop-shadow-lg">
                  {slide.stat}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 shadow-xl rounded-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 shadow-xl rounded-xl backdrop-blur-sm">
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
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all border-2 border-white ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
