
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ClinicsSection = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Hospitals and Clinics" 
          subtitle="Providing accessible healthcare across Bangladesh" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative">
                <img 
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-48 object-cover"
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">{clinic.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{clinic.location}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{clinic.description}</p>
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
