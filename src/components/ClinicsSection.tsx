
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
      isActive: true
    },
    {
      name: 'Mohammadpur Hospital',
      location: 'Mohammadpur, Dhaka',
      status: 'Coming Soon',
      description: 'Expanding our services to serve the capital city',
      link: '#mohammadpur',
      isActive: false
    },
    {
      name: 'Zokigonj Hospital',
      location: 'Zokigonj, Sylhet',
      status: 'Coming Soon',
      description: 'Bringing quality healthcare to rural Sylhet',
      link: '#zokigonj',
      isActive: false
    },
    {
      name: 'Srimongol Hospital',
      location: 'Srimongol, Sylhet',
      status: 'Coming Soon',
      description: 'Comprehensive healthcare in the tea garden region',
      link: '#srimongol',
      isActive: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Providing Leading Healthcare
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            for the People of Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${clinic.isActive ? 'border-green-200' : 'border-gray-200'}`}>
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">{clinic.name}</CardTitle>
                <CardDescription className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {clinic.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    clinic.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {clinic.status}
                  </div>
                  
                  {clinic.hours && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {clinic.hours}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-600">{clinic.description}</p>
                  
                  {clinic.services && (
                    <div className="flex flex-wrap gap-1">
                      {clinic.services.map((service, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
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
      </div>
    </section>
  );
};

export default ClinicsSection;
