
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building2, Camera } from 'lucide-react';

const SocialEnterpriseSection = () => {
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
            <h3 className="text-xl font-bold text-gray-900 mb-6">Current Partners</h3>
            <p className="text-gray-600 mb-6">
              We work with international and national NGO and governmental agency partners to deliver healthcare to rural Bangladesh.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">GRT</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">BHDI</p>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Camera className="mr-2 h-4 w-4" />
                View Camp Gallery
              </Button>
              <Button variant="outline" className="w-full">
                Sponsor Cataract Operations
              </Button>
              <Button variant="outline" className="w-full">
                Sponsor Medical Camps
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h3>
          <p className="text-gray-600 mb-6">
            If you are an NGO, charity, philanthropist, or government agency passionate about health and wellbeing of the poor and vulnerable in Bangladesh, let's work together.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Us for Partnership
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialEnterpriseSection;
