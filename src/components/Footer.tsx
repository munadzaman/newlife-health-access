
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-12 w-auto bg-white p-2 rounded"
            />
            <p className="text-gray-300 text-sm">
              Making World Class Healthcare Accessible for the people of Bangladesh through compassionate care and advanced medical services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#clinics" className="hover:text-white transition-colors">Our Clinics</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#social-enterprise" className="hover:text-white transition-colors">Social Enterprise</a></li>
              <li><a href="#investors" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#eye-consultation" className="hover:text-white transition-colors">Eye Consultation</a></li>
              <li><a href="#cataract" className="hover:text-white transition-colors">Cataract Surgery</a></li>
              <li><a href="#vision-therapy" className="hover:text-white transition-colors">Vision Therapy</a></li>
              <li><a href="#outreach" className="hover:text-white transition-colors">Rural Outreach</a></li>
              <li><a href="#spectacles" className="hover:text-white transition-colors">Spectacles Shop</a></li>
              <li><a href="#pharmacy" className="hover:text-white transition-colors">Pharmacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-green-400" />
                <div>
                  <p className="font-medium">Bishwanath Eye Hospital</p>
                  <p className="text-sm">Bishwanath, Sylhet, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <p className="text-sm">Open: 9:00 AM - 6:00 PM</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-sm">+880 1XXX-XXXXXX</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <p className="text-sm">info@newlifemedical.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Newlife Medical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
