
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
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d6a71aba-9903-4ad4-9ede-4f3138ae654d.png" 
              alt="Newlife Medical Services" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-blue-600">Newlife Medical Services</h1>
              <p className="text-xs text-gray-600">Making World Class Healthcare Accessible</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
              About Us
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
                Our Clinics <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[200px]">
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#bishwanath" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Bishwanath Eye Hospital
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#mohammadpur" className="w-full text-gray-500 text-sm">
                    Mohammadpur (Coming Soon)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#zokigonj" className="w-full text-gray-500 text-sm">
                    Zokigonj (Coming Soon)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#srimongol" className="w-full text-gray-500 text-sm">
                    Srimongol (Coming Soon)
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[240px]">
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#eye-consultation" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Eye Consultation Services
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#cataract" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Cataract & Operations
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#outreach" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Rural Outreach Camps
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#vision-therapy" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Vision Therapy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#spectacles" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Spectacles & Eyecare Shop
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#pharmacy" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Pharmacy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <a href="#diagnostic" className="w-full text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Diagnostic Centre
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
                Digital Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[180px]">
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <div className="w-full">
                    <p className="font-medium text-gray-700 text-sm">E-Pharmacy</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 hover:bg-blue-50 cursor-pointer">
                  <div className="w-full">
                    <p className="font-medium text-gray-700 text-sm">E-Eyewear</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#social-enterprise" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
              Social Enterprise
            </a>
            <a href="#investors" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
              Investors
            </a>
            <a href="#team" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
              Our Team
            </a>
            <a href="#news" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm">
              News
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-40 border-gray-300 focus:border-blue-600 focus:ring-blue-600 text-sm"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all text-sm">
              Patient Portal
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
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">About Us</a>
              <a href="#clinics" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">Our Clinics</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">Our Services</a>
              <a href="#social-enterprise" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">Social Enterprise</a>
              <a href="#investors" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">Investors</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">Our Team</a>
              <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-sm">News</a>
              <Button className="mx-3 my-2 bg-blue-600 hover:bg-blue-700 text-white w-full text-sm">
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
