import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TrendingUp, Shield, Globe, Target, Heart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const InvestorsSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (emailData: any) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return await response.json();
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.telephone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        type: 'investment',
        to: 'munadzaman@gmail.com',
        subject: 'New Investment Interest - Newlife Medical Services',
        data: {
          fullName: formData.fullName,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,
          submittedAt: new Date().toLocaleString()
        }
      };

      await sendEmail(emailData);

      toast({
        title: "Interest Submitted!",
        description: "Thank you for your investment interest. We'll contact you soon to discuss opportunities.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        telephone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your interest. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="investors" className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Investment Opportunities
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest with Newlife Medical Services for healthy returns and the satisfaction of enabling a good cause
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Why Invest With Us?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Healthy Returns</h4>
                  <p className="text-gray-600">
                    Our competitive pricing structure and growing market presence ensure attractive returns on investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Social Impact</h4>
                  <p className="text-gray-600">
                    Your investment directly enables critical medical care for thousands across rural Bangladesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Growing Market</h4>
                  <p className="text-gray-600">
                    Healthcare demand in Bangladesh continues to grow, providing sustainable business opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-600 p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Proven Model</h4>
                  <p className="text-gray-600">
                    Our social enterprise model has already demonstrated success with over 200+ free cataract surgeries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg text-gray-900 shadow-lg">
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
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="Write your message here"
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Investment Interest'}
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