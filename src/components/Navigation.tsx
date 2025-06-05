
import React, { useState } from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        {/* First row with logo and search */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-12 w-auto"
            />
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
              />
            </div>
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

        {/* Second row with navigation menu */}
        <div className="hidden lg:flex items-center justify-between h-16 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
              About Us
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
                Our Clinics <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[250px]">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#bishwanath" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Bishwanath Eye Hospital
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#mohammadpur" className="w-full text-gray-500">
                    Mohammadpur (Coming Soon)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#zokigonj" className="w-full text-gray-500">
                    Zokigonj (Coming Soon)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#srimongol" className="w-full text-gray-500">
                    Srimongol (Coming Soon)
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[280px]">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#eye-consultation" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Eye Consultation Services
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#cataract" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Cataract & Operations
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#outreach" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Rural Outreach Camps
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#vision-therapy" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Vision Therapy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#spectacles" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Spectacles & Eyecare Shop
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#pharmacy" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Pharmacy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <a href="#diagnostic" className="w-full text-gray-700 hover:text-blue-600 font-medium">
                    Diagnostic Centre
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#social-enterprise" className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
              Social Enterprise
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
                Digital Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[200px]">
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <div className="w-full">
                    <p className="font-medium text-gray-700">E-Pharmacy</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50 cursor-pointer">
                  <div className="w-full">
                    <p className="font-medium text-gray-700">E-Eyewear</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#investors" className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
              Investors
            </a>
            <a href="#team" className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
              Our Team
            </a>
            <a href="#news" className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
              News
            </a>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-2 rounded-lg transition-all">
              Patient Portal
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a href="#about" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">About Us</a>
              <a href="#clinics" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Clinics</a>
              <a href="#services" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Services</a>
              <a href="#social-enterprise" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Social Enterprise</a>
              <a href="#investors" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Investors</a>
              <a href="#team" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">Our Team</a>
              <a href="#news" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium">News</a>
              <Button variant="outline" className="mx-3 my-2 text-blue-600 border-blue-600 w-full">
                Patient Portal
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
