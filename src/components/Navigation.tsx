
import React, { useState } from 'react';
import { Menu, Search, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Row */}
        <div className="flex justify-center py-4 border-b border-gray-100">
          <Link to="/">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Row */}
        <div className="flex justify-between items-center h-16">
          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              About Us
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium">
                Our Clinics <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[250px]">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <Link to="/clinics" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Bishwanath Eye Hospital
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <span className="w-full text-gray-500">Mohammadpur (Coming Soon)</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <span className="w-full text-gray-500">Zokigonj (Coming Soon)</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <span className="w-full text-gray-500">Srimongol (Coming Soon)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium">
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[280px]">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <Link to="/services" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Eye Consultation Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <Link to="/services" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Cataract & Operations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <Link to="/services" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Rural Outreach Camps
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <Link to="/services" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Vision Therapy
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/doctors" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Our Doctors
            </Link>
            <Link to="/booking" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Book Appointment
            </Link>
            <Link to="/social-enterprise" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Social Enterprise
            </Link>
            <Link to="/investors" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Investors
            </Link>
            <Link to="/team" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Our Team
            </Link>
            <Link to="/news" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              News
            </Link>
          </div>

          {/* Search and Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-48 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-all">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link to="/about" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">About Us</Link>
              <Link to="/clinics" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Clinics</Link>
              <Link to="/services" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Services</Link>
              <Link to="/doctors" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Doctors</Link>
              <Link to="/booking" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Book Appointment</Link>
              <Link to="/social-enterprise" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Social Enterprise</Link>
              <Link to="/investors" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Investors</Link>
              <Link to="/team" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Team</Link>
              <Link to="/news" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">News</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
