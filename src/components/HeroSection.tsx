
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Making World Class Healthcare Accessible
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Providing leading healthcare for the people of Bangladesh through advanced medical services and compassionate care
          </p>
          
          {/* Stats Banner */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">200+</div>
                <div className="text-sm">Free Cataract Surgeries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1000+</div>
                <div className="text-sm">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4</div>
                <div className="text-sm">Clinic Locations</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <MapPin className="mr-2 h-5 w-5" />
              Find Our Clinics
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
