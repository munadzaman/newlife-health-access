import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Award } from 'lucide-react';

const HospitalSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 shadow-lg" id="hospital">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Our Hospital
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities providing world-class eye care in rural Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Hospital Card with Logo */}
          <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/c249ddf4-b9fe-4921-bfa6-934919fef447.png" 
                  alt="Newlife Eye Hospital Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <CardTitle className="text-2xl text-gray-900">Newlife Eye Hospital</CardTitle>
                  <CardDescription className="text-base">
                    Premier eye care facility in rural Bangladesh
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Dakshin Surma, Sylhet, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Contact</p>
                    <p className="text-gray-600">+880 XXX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-gray-600">24/7 Emergency Care Available</p>
                    <p className="text-gray-600">Regular Hours: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hospital Features */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">World-Class Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced OCT Scanning</li>
                <li>• Digital Fundus Photography</li>
                <li>• Modern Surgical Suites</li>
                <li>• Comprehensive Eye Exams</li>
                <li>• Emergency Eye Care</li>
                <li>• Vision Therapy Center</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Free Surgeries Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-gray-600">Villages Served</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Emergency Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalSection;