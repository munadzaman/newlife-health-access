import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building2, Handshake, ArrowRight, Target } from 'lucide-react';

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

  const scrollToFindUs = () => {
    const findUsSection = document.getElementById('location');
    if (findUsSection) {
      findUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="social-enterprise" className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Social Enterprise
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Making world-class healthcare accessible through sustainable business practices and strategic partnerships
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border mb-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">Excellence in Healthcare</h3>
              <p className="text-muted-foreground text-sm">Providing world-class medical facilities with competitive pricing</p>
            </div>

            <div className="group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">Universal Access</h3>
              <p className="text-muted-foreground text-sm">Making healthcare accessible through subsidization and rural placement</p>
            </div>

            <div className="group">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">Community Outreach</h3>
              <p className="text-muted-foreground text-sm">Conducting rural medical camps with NGO partnerships</p>
            </div>
          </div>
        </div>

        {/* Partners and Partnership Section - Merged */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Current Partners and Partner With Us - Combined */}
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
              <Handshake className="mr-3 h-6 w-6 text-blue-600" />
              Our Partners & Partnerships
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-card-foreground mb-3">Current Partners</h4>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg text-center hover:shadow-md transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-12 h-12 mx-auto mb-2 rounded-lg object-cover"
                    />
                    <p className="font-semibold text-card-foreground text-sm">{partner.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <Heart className="h-4 w-4 text-green-600" />
                  <span>Sponsoring Life-Changing Cataract Surgery</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>Supporting Community Medical Camps</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-card-foreground mb-3">Partner With Us</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Join our mission to transform healthcare accessibility in Bangladesh. Together we can make a lasting impact.
              </p>
              <Button 
                onClick={scrollToFindUs}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border">
            <div className="text-center mb-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-card-foreground mb-2">Our Impact</h3>
              <p className="text-muted-foreground text-sm">
                Every contribution creates ripples of positive change in communities across Bangladesh
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl text-card-foreground mb-1">2000+</h4>
                <p className="text-sm text-muted-foreground">Complete comprehensive eye examinations</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl text-card-foreground mb-1">100+</h4>
                <p className="text-sm text-muted-foreground">Life-changing free cataract surgeries</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl text-card-foreground mb-1">50+</h4>
                <p className="text-sm text-muted-foreground">Complete rural medical camps with free screening, glasses & medicine</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg w-full">
                <Heart className="mr-2 h-5 w-5" />
                Become a Donor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEnterpriseSection;