
import React, { useState } from 'react';
import { Menu, Phone, ChevronDown, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with logo and social media on same level - reduced padding */}
        <div className="flex justify-between items-center py-2 border-b border-gray-50">
          {/* Logo */}
          <div className="flex-1">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="p-2 transition-all duration-200 hover:scale-110">
              <a href="https://www.facebook.com/NewlifeMedicalServices/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4 text-blue-600" />
              </a>
            </Button>
            <Button size="sm" variant="ghost" className="p-2 transition-all duration-200 hover:scale-110">
              <Instagram className="h-4 w-4 text-pink-600" />
            </Button>
            <Button size="sm" variant="ghost" className="p-2 transition-all duration-200 hover:scale-110">
              <Youtube className="h-4 w-4 text-red-600" />
            </Button>
            <Button size="sm" variant="ghost" className="p-2 transition-all duration-200 hover:scale-110">
              <a href="https://www.linkedin.com/company/newlife-medical-services/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 text-blue-700" />
              </a>
            </Button>
          </div>
        </div>

        {/* Navigation row - reduced height */}
        <div className="flex justify-between items-center h-10">
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
              About Us
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
                Our Clinics <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[250px] animate-fade-in">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#bishwanath" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Bishwanath Eye Hospital
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#mohammadpur" className="w-full text-gray-500">
                    Mohammadpur (Coming Soon)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#zokigonj" className="w-full text-gray-500">
                    Zokigonj (Coming Soon)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#srimongol" className="w-full text-gray-500">
                    Srimongol (Coming Soon)
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[280px] animate-fade-in">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#eye-consultation" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Eye Consultation Services
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#cataract" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Cataract & Operations
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#outreach" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Rural Outreach Camps
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#vision-therapy" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Vision Therapy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#spectacles" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Spectacles & Eyecare Shop
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#pharmacy" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Pharmacy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <a href="#diagnostic" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Diagnostic Centre
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#social-enterprise" className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
              Social Enterprise
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
                Digital Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[200px] animate-fade-in">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <div className="w-full">
                    <p className="font-medium text-gray-700">E-Pharmacy</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <div className="w-full">
                    <p className="font-medium text-gray-700">E-Eyewear</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#investors" className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
              Investors
            </a>
            <a href="#team" className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
              Our Team
            </a>
            <a href="#news" className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600 text-sm">
              News
            </a>
          </div>

          {/* Action Buttons - Desktop and Mobile */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 bg-white hover:bg-blue-600 hover:text-white font-medium px-3 py-1 rounded-lg transition-all duration-200 hover:scale-105">
              Patient Portal
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              <Phone className="mr-1 h-3 w-3" />
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden p-2 ml-2 transition-all duration-200 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a href="#about" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">About Us</a>
              <a href="#clinics" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">Our Clinics</a>
              <a href="#services" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">Our Services</a>
              <a href="#social-enterprise" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">Social Enterprise</a>
              <a href="#investors" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">Investors</a>
              <a href="#team" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">Our Team</a>
              <a href="#news" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 text-sm">News</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
