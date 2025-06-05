
import React from 'react';
import { MapPin, Phone, Mail, Clock, Eye, Pill } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-16 w-auto bg-white p-3 rounded"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Making World Class Healthcare Accessible for the people of Bangladesh through compassionate care and advanced medical services. We combine altruistic motives with sustainable business practices.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-3 rounded">
                <span className="text-sm font-bold">200+</span>
                <br />
                <span className="text-xs">Free Surgeries</span>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <span className="text-sm font-bold">1000+</span>
                <br />
                <span className="text-xs">Patients Served</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors hover:underline">About Us</a></li>
              <li><a href="#clinics" className="hover:text-white transition-colors hover:underline">Our Clinics</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors hover:underline">Our Doctors</a></li>
              <li><a href="#team" className="hover:text-white transition-colors hover:underline">Our Team</a></li>
              <li><a href="#social-enterprise" className="hover:text-white transition-colors hover:underline">Social Enterprise</a></li>
              <li><a href="#investors" className="hover:text-white transition-colors hover:underline">Investors</a></li>
              <li><a href="#news" className="hover:text-white transition-colors hover:underline">News & Updates</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors hover:underline">Book Appointment</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#eye-consultation" className="hover:text-white transition-colors hover:underline">Eye Consultation</a></li>
              <li><a href="#cataract" className="hover:text-white transition-colors hover:underline">Cataract Surgery</a></li>
              <li><a href="#vision-therapy" className="hover:text-white transition-colors hover:underline">Vision Therapy</a></li>
              <li><a href="#outreach" className="hover:text-white transition-colors hover:underline">Rural Outreach Camps</a></li>
              <li><a href="#spectacles" className="hover:text-white transition-colors hover:underline">Spectacles Shop</a></li>
              <li><a href="#pharmacy" className="hover:text-white transition-colors hover:underline">Pharmacy</a></li>
              <li><a href="#diagnostic" className="hover:text-white transition-colors hover:underline">Diagnostic Centre</a></li>
              <li>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Pill className="h-4 w-4 text-blue-400" />
                  <div>
                    <p className="font-medium">E-Pharmacy</p>
                    <p className="text-xs text-gray-400">Coming Soon</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Eye className="h-4 w-4 text-green-400" />
                  <div>
                    <p className="font-medium">E-Eyewear</p>
                    <p className="text-xs text-gray-400">Coming Soon</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-green-400" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">Bishwanath, Sylhet, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-sm">9:00 AM - 6:00 PM (Daily)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">+880 1XXX-XXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">info@newlifemedical.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Newlife Medical Services. All rights reserved. | Making World Class Healthcare Accessible
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">Terms of Service</a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">Contact Us</a>
              <a href="#careers" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
