
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ClinicsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const clinics = [
    {
      name: 'Bishwanath Eye Hospital',
      location: 'Bishwanath, Sylhet',
      status: 'Open',
      hours: '9:00 AM - 6:00 PM',
      description: 'Our flagship clinic specializing in comprehensive eye care services',
      services: ['Eye Consultation', 'Cataract Surgery', 'Vision Therapy', 'Rural Outreach'],
      link: '#bishwanath',
      isActive: true,
      backgroundImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mohammadpur Hospital',
      location: 'Mohammadpur, Dhaka',
      status: 'Coming Soon',
      description: 'Expanding our services to serve the capital city',
      link: '#mohammadpur',
      isActive: false,
      backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Zokigonj Hospital',
      location: 'Zokigonj, Sylhet',
      status: 'Coming Soon',
      description: 'Bringing quality healthcare to rural Sylhet',
      link: '#zokigonj',
      isActive: false,
      backgroundImage: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Srimongol Hospital',
      location: 'Srimongol, Sylhet',
      status: 'Coming Soon',
      description: 'Comprehensive healthcare in the tea garden region',
      link: '#srimongol',
      isActive: false,
      backgroundImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Joggonathpur Vision Centre',
      location: 'Joggonathpur, Sylhet',
      status: 'Coming Soon',
      description: 'Specialized vision care for the local community',
      link: '#joggonathpur',
      isActive: false,
      backgroundImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, clinics.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleClinics = clinics.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 bg-gray-50 relative" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Hospitals and Clinics
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            for the People of Bangladesh
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleClinics.map((clinic, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 overflow-hidden relative ${clinic.isActive ? 'border-green-200' : 'border-gray-200'}`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${clinic.backgroundImage})` }}
                />
                <div className={`absolute inset-0 ${clinic.isActive ? 'bg-gradient-to-br from-blue-600/80 to-green-600/80' : 'bg-gray-900/60'}`} />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg text-white">{clinic.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-200">
                    <MapPin className="h-4 w-4 mr-1" />
                    {clinic.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      clinic.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {clinic.status}
                    </div>
                    
                    {clinic.hours && (
                      <div className="flex items-center text-sm text-gray-200">
                        <Clock className="h-4 w-4 mr-1" />
                        {clinic.hours}
                      </div>
                    )}
                    
                    <p className="text-sm text-gray-200">{clinic.description}</p>
                    
                    {clinic.services && (
                      <div className="flex flex-wrap gap-1">
                        {clinic.services.map((service, idx) => (
                          <span key={idx} className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Button 
                      variant={clinic.isActive ? "default" : "outline"} 
                      size="sm" 
                      className="w-full mt-4"
                      disabled={!clinic.isActive}
                    >
                      {clinic.isActive ? (
                        <>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </>
                      ) : (
                        'Coming Soon'
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          {clinics.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
