
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building2, Handshake, ArrowRight } from 'lucide-react';

const SocialEnterpriseSection = () => {
  const partners = [
    {
      name: 'GRT',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'BHDI',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'You&Eye',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section id="social-enterprise" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Social Enterprise
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making world-class healthcare accessible through sustainable business practices and strategic partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence in Healthcare</h4>
                  <p className="text-gray-600">
                    Providing world-class medical facilities with competitive pricing that delivers exceptional value.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Universal Access</h4>
                  <p className="text-gray-600">
                    Making healthcare accessible through subsidization and strategic placement in rural areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Outreach</h4>
                  <p className="text-gray-600">
                    Conducting rural medical camps and partnering with NGOs to reach underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Handshake className="mr-2 h-6 w-6 text-blue-600" />
              Current Partners
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-12 h-12 mx-auto mb-2 rounded object-cover"
                  />
                  <p className="font-medium text-gray-800 text-sm">{partner.name}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Heart className="mr-2 h-4 w-4" />
                Sponsor Cataract Surgery
              </Button>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                <Users className="mr-2 h-4 w-4" />
                Support Medical Camps
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-8 rounded-lg shadow-lg mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h3>
          <p className="text-gray-600 mb-6">
            Join our mission to transform healthcare accessibility in Bangladesh through strategic partnerships.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <ArrowRight className="mr-2 h-4 w-4" />
            Contact Us for Partnership
          </Button>
        </div>

        {/* Enhanced Donation Appeal */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">Transform Lives Today</h3>
            <p className="text-lg mb-6 opacity-90">
              Your contribution directly impacts lives by restoring sight and providing essential healthcare to those who need it most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-lg">£50</h4>
                <p className="text-sm">Complete eye examination</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-lg">£200</h4>
                <p className="text-sm">Life-changing cataract surgery</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-lg">£500</h4>
                <p className="text-sm">Full rural medical camp</p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Become a Monthly Donor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEnterpriseSection;
