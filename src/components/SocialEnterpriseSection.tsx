
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building2, Handshake } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">World Class Healthcare</h3>
            <p className="text-gray-600">
              We provide world class facilities through competitive pricing that offers value for money, attracting investment through healthy returns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible for Everyone</h3>
            <p className="text-gray-600">
              We make services accessible through subsidization, sponsorship facilitation, and strategic placement at thana level for easy rural access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rural Outreach</h3>
            <p className="text-gray-600">
              We conduct rural camps to take services to patients' doorsteps and work with NGOs, charities, and government agencies.
            </p>
          </div>
        </div>

        {/* Partner With Us Section */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Handshake className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner With Us</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you are an NGO, charity, philanthropist, or government agency passionate about health and wellbeing of the poor and vulnerable in Bangladesh, let's work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us for Partnership
            </Button>
            <Button variant="outline" size="lg">
              Sponsor Cataract Operations
            </Button>
            <Button variant="outline" size="lg">
              Sponsor Medical Camps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEnterpriseSection;
