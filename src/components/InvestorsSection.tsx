
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, Shield, Globe, Target } from 'lucide-react';

const InvestorsSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    investmentAmount: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investment interest submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="investors" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Invest with Newlife Medical Services for healthy returns and the satisfaction of enabling a good cause
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">Why Invest With Us?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Healthy Returns</h4>
                  <p className="text-gray-300">
                    Our competitive pricing structure and growing market presence ensure attractive returns on investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Social Impact</h4>
                  <p className="text-gray-300">
                    Your investment directly enables critical medical care for thousands across rural Bangladesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Growing Market</h4>
                  <p className="text-gray-300">
                    Healthcare demand in Bangladesh continues to grow, providing sustainable business opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-600 p-3 rounded-full">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Proven Model</h4>
                  <p className="text-gray-300">
                    Our social enterprise model has already demonstrated success with over 200+ free cataract surgeries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Express Investment Interest</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telephone Number *</label>
                <Input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Investment Amount (USD) *</label>
                <Input
                  type="number"
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="e.g., 50000"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                Submit Investment Interest
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> All investments involve risk, including potential loss of principal. 
                Past performance is not indicative of future results. Please consult with your legal, 
                financial, and tax advisors before making any investment decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
