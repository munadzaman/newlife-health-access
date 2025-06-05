
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Heart, MapPin, Glasses, Pill, Activity, Stethoscope } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: 'Eye Consultation Services',
      description: 'Comprehensive eye examinations using latest technology with minimum 15-minute consultations',
      features: ['General eye examination', 'Specialist consultations', 'Advanced testing equipment', 'Expert diagnosis'],
      link: '#eye-consultation'
    },
    {
      icon: Heart,
      title: 'Cataract & Operations',
      description: 'Safe, effective cataract treatment and eye surgeries with state-of-the-art facilities',
      features: ['Advanced cataract surgery', 'Premium lens implants', 'Glaucoma surgery', 'Post-operative care'],
      link: '#cataract'
    },
    {
      icon: MapPin,
      title: 'Rural Outreach Camps',
      description: 'Mobile clinics bringing healthcare to rural Bangladesh doorsteps',
      features: ['Mobile eye camps', 'Community screening', 'Preventive care', 'NGO partnerships'],
      link: '#outreach'
    },
    {
      icon: Activity,
      title: 'Vision Therapy',
      description: 'Personalized programs to improve how eyes and brain work together',
      features: ['Learning difficulties', 'Lazy eye treatment', 'Eye strain relief', 'Athletic performance'],
      link: '#vision-therapy'
    },
    {
      icon: Glasses,
      title: 'Spectacles & Eyecare Shop',
      description: 'Quality frames, prescription glasses, and eye care products',
      features: ['Wide range of frames', 'Lens cutting service', 'Contact lenses', 'Eye care products'],
      link: '#spectacles'
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'Full-service pharmacy with strict adherence to prescription standards',
      features: ['All medicine types', 'Prescription dispensing', 'International standards', 'Year-round availability'],
      link: '#pharmacy'
    },
    {
      icon: Stethoscope,
      title: 'Diagnostic Centre',
      description: 'Comprehensive diagnostic and laboratory services with advanced technology',
      features: ['Laboratory tests', 'Digital imaging', 'Health packages', 'Specialty testing'],
      link: '#diagnostic'
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Newlife clinics we are dedicated to providing high-quality, UK standard healthcare services made affordable and accessible through price adjustments, subsidies and sponsors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full hover:bg-blue-600 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
