
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  return (
    <section className="py-16 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-blue-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Find Us
            </h2>
            <div className="h-1 bg-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our flagship clinic in Bishwanath, Sylhet for world-class healthcare services
          </p>
        </div>

        {/* Map Section - Banner Size */}
        <div className="mb-12">
          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5320462991517!2d91.75067537592099!3d24.811472447215046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751039c92cd22ef%3A0xbf9da2ea6de68f2!2sNew%20Life%20Medical%20Services!5e0!3m2!1sen!2sbd!4v1749144007510!5m2!1sen!2sbd"
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Contact Us Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Contact Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
              <p className="text-gray-600 text-sm">Bishwanath, Sylhet, Bangladesh</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
              <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM (Daily)</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600 text-sm">+880 1XXX-XXXXXX</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600 text-sm">info@newlifemedical.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button size="sm" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <Youtube className="h-4 w-4 mr-2" />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
