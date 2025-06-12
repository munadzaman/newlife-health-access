
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building2, Handshake, ArrowRight, MapPin, Target, Globe, Shield } from 'lucide-react';

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
    const findUsSection = document.getElementById('map');
    if (findUsSection) {
      findUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="social-enterprise" className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-16 rounded-full animate-scale-in"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mx-4 transition-all duration-300">
              Social Enterprise
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-16 rounded-full animate-scale-in"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Making world-class healthcare accessible through sustainable business practices and strategic partnerships
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300 h-full animate-slide-up">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Building2 className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">Excellence in Healthcare</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Providing world-class medical facilities with competitive pricing that delivers exceptional value to our patients.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-green-300 h-full animate-slide-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Heart className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4 text-center group-hover:text-green-600 transition-colors duration-300">Universal Access</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Making healthcare accessible through subsidization and strategic placement in rural areas across Bangladesh.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-300 h-full animate-slide-up animation-delay-400">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Users className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">Community Outreach</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Conducting rural medical camps and partnering with NGOs to reach underserved communities effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Partners and Partnership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Current Partners */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-500 animate-fade-in">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
              <Handshake className="mr-3 h-7 w-7 text-blue-600" />
              Current Partners
            </h3>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-border">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-16 h-16 mx-auto mb-3 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="font-semibold text-card-foreground text-sm group-hover:text-blue-600 transition-colors duration-300">{partner.name}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 text-muted-foreground group hover:text-green-600 transition-colors duration-300">
                <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-sm font-medium">Sponsoring Life-Changing Cataract Surgery</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground group hover:text-blue-600 transition-colors duration-300">
                <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium">Supporting Community Medical Camps</span>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-500 animate-fade-in">
            <div className="mb-6">
              <h4 className="font-bold text-card-foreground mb-4 flex items-center text-lg">
                <MapPin className="mr-3 h-6 w-6 text-blue-600" />
                Want to Host an Eye Camp in Your Area?
              </h4>
              <p className="text-sm text-card-foreground mb-3 font-semibold">
                <strong>We're truly excited to partner with you!</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Our eye camps bring modern equipment, expert eye tests, medicines, and affordable glasses — all at the lowest registration fees to ensure access for everyone.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                By hosting a camp, you're not just providing care — you're making a lasting impact. We also invite you to contribute as Sadaqah for this noble cause.
              </p>
              <p className="text-sm text-card-foreground font-semibold mb-6">
                Ready to make a difference?
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-bold text-card-foreground mb-4 flex items-center text-lg">
                <Handshake className="mr-3 h-6 w-6 text-green-600" />
                Partner With Us
              </h4>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Join our mission to transform healthcare accessibility in Bangladesh through strategic partnerships.
              </p>
              <Button 
                onClick={scrollToFindUs}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-white p-10 rounded-2xl shadow-2xl animate-fade-in">
          <div className="text-center mb-10">
            <Target className="h-20 w-20 mx-auto mb-6 text-white animate-pulse" />
            <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              Every contribution creates ripples of positive change in communities across Bangladesh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm text-center hover:bg-opacity-30 transition-all duration-300 hover:scale-105 group">
              <div className="bg-white bg-opacity-20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-2xl mb-2">2000+</h4>
              <p className="text-sm opacity-90">patient Complete comprehensive eye examination</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm text-center hover:bg-opacity-30 transition-all duration-300 hover:scale-105 group">
              <div className="bg-white bg-opacity-20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-2xl mb-2">100+</h4>
              <p className="text-sm opacity-90">Life-changing free cataract surgery</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm text-center hover:bg-opacity-30 transition-all duration-300 hover:scale-105 group">
              <div className="bg-white bg-opacity-20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-2xl mb-2">50+</h4>
              <p className="text-sm opacity-90">Complete rural medical camp with free screening, glasses & medicine</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="mr-2 h-5 w-5" />
              Become a Donor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEnterpriseSection;
