
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

const ClinicsSection = () => {
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
      backgroundImage: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Zokigonj Hospital',
      location: 'Zokigonj, Sylhet',
      status: 'Coming Soon',
      description: 'Bringing quality healthcare to rural Sylhet',
      link: '#zokigonj',
      isActive: false,
      backgroundImage: 'https://images.unsplash.com/photo-1581594736797-438f1b2e9b68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Srimongol Hospital',
      location: 'Srimongol, Sylhet',
      status: 'Coming Soon',
      description: 'Comprehensive healthcare in the tea garden region',
      link: '#srimongol',
      isActive: false,
      backgroundImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Providing Leading Healthcare
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8">
            for the People of Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden relative ${clinic.isActive ? 'border-green-200' : 'border-gray-200'} shadow-lg`}>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${clinic.backgroundImage})` }}
              />
              <div className={`absolute inset-0 ${clinic.isActive ? 'bg-gradient-to-br from-blue-600/85 to-green-600/85' : 'bg-gray-900/70'}`} />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg text-white">{clinic.name}</CardTitle>
                <CardDescription className="flex items-center text-gray-200">
                  <MapPin className="h-4 w-4 mr-1" />
                  {clinic.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
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
                    className={`w-full mt-4 ${clinic.isActive ? 'bg-white text-blue-600 hover:bg-gray-100' : 'border-white text-white hover:bg-white hover:text-gray-900'}`}
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
      </div>
    </section>
  );
};

export default ClinicsSection;
