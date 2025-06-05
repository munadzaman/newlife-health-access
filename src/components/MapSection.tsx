
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-16 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our flagship clinic in Bishwanath, Sylhet for world-class healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-6 w-6" />
                Bishwanath Eye Hospital
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">Bishwanath, Sylhet, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Opening Hours</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM (Daily)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+880 1XXX-XXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@newlifemedical.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5320462991517!2d91.75067537592099!3d24.811472447215046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751039c92cd22ef%3A0xbf9da2ea6de68f2!2sNew%20Life%20Medical%20Services!5e0!3m2!1sen!2sbd!4v1749144007510!5m2!1sen!2sbd"
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
