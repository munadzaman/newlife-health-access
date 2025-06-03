
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Our Clinics <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem>
                  <a href="#bishwanath" className="w-full">Bishwanath Eye Hospital</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#mohammadpur" className="w-full text-gray-500">Mohammadpur (Coming Soon)</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#zokigonj" className="w-full text-gray-500">Zokigonj (Coming Soon)</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#srimongol" className="w-full text-gray-500">Srimongol (Coming Soon)</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem>
                  <a href="#eye-consultation" className="w-full">Eye Consultation Services</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#cataract" className="w-full">Cataract & Operations</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#outreach" className="w-full">Rural Outreach Camps</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#vision-therapy" className="w-full">Vision Therapy</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#spectacles" className="w-full">Spectacles & Eyecare Shop</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#pharmacy" className="w-full">Pharmacy</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#diagnostic" className="w-full">Diagnostic Centre</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#social-enterprise" className="text-gray-700 hover:text-blue-600 transition-colors">Social Enterprise</a>
            <a href="#investors" className="text-gray-700 hover:text-blue-600 transition-colors">Investors</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Our Team</a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">News</a>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              Patient Portal
            </Button>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#clinics" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Clinics</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Services</a>
              <a href="#social-enterprise" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Social Enterprise</a>
              <a href="#investors" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Investors</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Team</a>
              <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-blue-600">News</a>
              <Button variant="outline" className="mx-3 my-2 text-blue-600 border-blue-600">
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
