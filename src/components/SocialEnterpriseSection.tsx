
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building2, Handshake } from 'lucide-react';

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Social Enterprise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making World Class Healthcare Accessible through commerce for good combined with philanthropy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Two-Sided Approach</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">World Class Healthcare</h4>
                  <p className="text-gray-600">
                    We provide world class facilities and infrastructure through competitive pricing that offers value for money, attracting investment through healthy returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Accessible for Everyone</h4>
                  <p className="text-gray-600">
                    We make services accessible through subsidization, sponsorship facilitation, and strategic placement at thana (sub-district) level for easy rural access.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Rural Outreach</h4>
                  <p className="text-gray-600">
                    We conduct rural camps to take services to patients' doorsteps and work with NGOs, charities, and government agencies.
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
            <p className="text-gray-600 mb-6">
              We work with international and national NGO and governmental agency partners to deliver healthcare to rural Bangladesh.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-12 h-12 mx-auto mb-2 rounded object-cover"
                  />
                  <p className="font-medium text-gray-800">{partner.name}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                Sponsor Cataract Operations
              </Button>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Sponsor Medical Camps
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-8 rounded-lg shadow-lg mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h3>
          <p className="text-gray-600 mb-6">
            If you are an NGO, charity, philanthropist, or government agency passionate about health and wellbeing of the poor and vulnerable in Bangladesh, let's work together.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Us for Partnership
          </Button>
        </div>

        {/* Donation Appeal Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">Make a Difference Today</h3>
            <p className="text-lg mb-6 opacity-90">
              Your donation can transform lives by providing sight to those who need it most. 
              Every contribution brings us closer to our mission of accessible healthcare for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-lg">£50</h4>
                <p className="text-sm">Funds one eye examination</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-lg">£200</h4>
                <p className="text-sm">Sponsors one cataract surgery</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold text-lg">£500</h4>
                <p className="text-sm">Supports a rural medical camp</p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
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
