
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ClinicsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clinics = [
    {
      name: 'Bishwanath Eye Hospital',
      location: 'Bishwanath, Sylhet',
      status: 'Open',
      description: 'Our flagship hospital providing comprehensive eye care services with state-of-the-art equipment and experienced medical professionals.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      phone: '+880 1XXX-XXXXXX',
      hours: '9:00 AM - 6:00 PM'
    },
    {
      name: 'Mohammadpur Vision Centre',
      location: 'Mohammadpur, Dhaka',
      status: 'Coming Soon',
      description: 'Expanding our services to the capital city with modern facilities and comprehensive eye care services.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      phone: 'Coming Soon',
      hours: 'Coming Soon'
    },
    {
      name: 'Zokigonj Health Centre',
      location: 'Zokigonj, Sylhet',
      status: 'Coming Soon',
      description: 'Bringing quality healthcare closer to rural communities with specialized eye care services.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      phone: 'Coming Soon',
      hours: 'Coming Soon'
    },
    {
      name: 'Srimongol Medical Centre',
      location: 'Srimongol, Moulvibazar',
      status: 'Coming Soon',
      description: 'Serving the tea garden communities with accessible and affordable healthcare services.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      phone: 'Coming Soon',
      hours: 'Coming Soon'
    },
    {
      name: 'Joggonathpur Vision Centre',
      location: 'Joggonathpur, Sylhet',
      status: 'Coming Soon',
      description: 'Our proposed new facility to extend comprehensive eye care services to more rural communities.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      phone: 'Coming Soon',
      hours: 'Coming Soon'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clinics.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clinics.length) % clinics.length);
  };

  return (
    <section className="py-16 bg-white" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Hospitals and Clinics" 
          subtitle="Providing accessible healthcare across Bangladesh" 
        />

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Clinic Cards */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clinics.map((clinic, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={clinic.image}
                        alt={clinic.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          clinic.status === 'Open' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {clinic.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{clinic.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{clinic.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{clinic.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{clinic.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{clinic.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {clinics.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
