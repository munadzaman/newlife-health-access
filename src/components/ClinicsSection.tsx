
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Eye } from 'lucide-react';

const ClinicsSection = () => {
  const clinics = [
    {
      name: 'Bishwanath Eye Hospital',
      location: 'Bishwanath, Sylhet',
      status: 'active',
      services: ['Eye Consultation', 'Cataract Surgery', 'Vision Therapy', 'Pharmacy'],
      hours: '9:00 AM - 6:00 PM',
      phone: '+880 1XXX-XXXXXX',
      description: 'Our flagship clinic providing comprehensive eye care services with state-of-the-art equipment.',
      backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mohammadpur Vision Center',
      location: 'Mohammadpur, Dhaka',
      status: 'coming-soon',
      services: ['Eye Consultation', 'Surgery', 'Diagnostic', 'Pharmacy'],
      hours: 'Coming Soon',
      phone: 'Coming Soon',
      description: 'Urban healthcare facility bringing world-class eye care to the heart of Dhaka.',
      backgroundImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Zokigonj Medical Center',
      location: 'Zokigonj, Sylhet',
      status: 'coming-soon',
      services: ['Rural Outreach', 'Basic Eye Care', 'Consultation', 'Pharmacy'],
      hours: 'Coming Soon',
      phone: 'Coming Soon',
      description: 'Community-focused clinic designed to serve rural populations with accessible healthcare.',
      backgroundImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Srimongol Wellness Hub',
      location: 'Srimongol, Moulvibazar',
      status: 'coming-soon',
      services: ['Vision Screening', 'Consultation', 'Outreach', 'Education'],
      hours: 'Coming Soon',
      phone: 'Coming Soon',
      description: 'Specialized center focusing on preventive care and community health education.',
      backgroundImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            Strategically located across Bangladesh to make world-class healthcare accessible to both urban and rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden ${
              clinic.status === 'active' ? 'ring-2 ring-green-500 shadow-lg' : 'shadow-lg'
            }`}>
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${clinic.backgroundImage})` }}
              >
                <div className={`absolute inset-0 ${
                  clinic.status === 'active' 
                    ? 'bg-gradient-to-t from-green-600/80 to-blue-600/60' 
                    : 'bg-gradient-to-t from-gray-600/80 to-gray-400/60'
                }`}></div>
                <div className="absolute top-4 right-4">
                  {clinic.status === 'active' ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Active
                    </span>
                  ) : (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Eye className="h-8 w-8" />
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900">{clinic.name}</CardTitle>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {clinic.location}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm">{clinic.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    {clinic.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    {clinic.phone}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {clinic.services.map((service, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
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
