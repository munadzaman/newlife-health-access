
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Building2 } from 'lucide-react';

const ClinicsSection = () => {
  const clinics = [
    {
      id: 'bishwanath',
      name: 'Bishwanath Eye Hospital',
      location: 'Bishwanath, Sylhet',
      status: 'Open',
      description: 'Our flagship clinic providing comprehensive eye care services with state-of-the-art equipment and experienced doctors.',
      services: ['Eye Consultation', 'Cataract Surgery', 'Vision Therapy', 'Diagnostic Services'],
      hours: '9:00 AM - 6:00 PM',
      patients: '500+ Monthly',
      backgroundImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mohammadpur',
      name: 'Mohammadpur Vision Center',
      location: 'Mohammadpur, Dhaka',
      status: 'Coming Soon',
      description: 'Urban clinic focusing on comprehensive eye care and vision therapy services.',
      services: ['Eye Consultation', 'Vision Therapy', 'Contact Lenses', 'Eye Care Shop'],
      hours: 'Coming Soon',
      patients: 'Opening 2024',
      backgroundImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'zokigonj',
      name: 'Zokigonj Rural Clinic',
      location: 'Zokigonj, Sylhet',
      status: 'Coming Soon',
      description: 'Rural healthcare facility designed to serve remote communities with mobile outreach programs.',
      services: ['Basic Eye Care', 'Mobile Camps', 'Community Outreach', 'Preventive Care'],
      hours: 'Coming Soon',
      patients: 'Opening 2024',
      backgroundImage: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'srimongol',
      name: 'Srimongol Community Hospital',
      location: 'Srimongol, Moulvibazar',
      status: 'Coming Soon',
      description: 'Community-focused healthcare facility serving tea garden workers and rural populations.',
      services: ['General Medicine', 'Eye Care', 'Community Health', 'Emergency Care'],
      hours: 'Coming Soon',
      patients: 'Opening 2025',
      backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Hospitals and Clinics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located healthcare facilities bringing world-class medical services to urban and rural Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinics.map((clinic) => (
            <Card 
              key={clinic.id} 
              className={`hover:shadow-xl transition-all duration-300 overflow-hidden ${
                clinic.status === 'Open' ? 'ring-2 ring-green-500 ring-opacity-20' : 'opacity-75'
              }`}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ 
                  backgroundImage: `url(${clinic.backgroundImage})`,
                  filter: clinic.status === 'Coming Soon' ? 'grayscale(100%)' : 'none'
                }}
              >
                <div className={`absolute inset-0 ${
                  clinic.status === 'Open' 
                    ? 'bg-gradient-to-r from-blue-600/80 to-green-600/80' 
                    : 'bg-gray-900/60'
                }`}></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    clinic.status === 'Open' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {clinic.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{clinic.name}</h3>
                  <p className="text-sm opacity-90">{clinic.location}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-gray-600">
                  {clinic.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">{clinic.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">{clinic.patients}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-1">
                    {clinic.services.map((service, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className={`w-full ${
                    clinic.status === 'Open'
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={clinic.status !== 'Open'}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {clinic.status === 'Open' ? 'View Details' : 'Opening Soon'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
