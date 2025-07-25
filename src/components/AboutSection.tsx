
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'People-Centric Care',
      description: 'Pastoral care approach with emotional wellbeing at the center'
    },
    {
      icon: Globe,
      title: 'World Class Standards',
      description: 'UK-style healthcare systems with latest technology'
    },
    {
      icon: Users,
      title: 'Social Enterprise',
      description: 'Combining altruistic motives with sustainable business practices'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Staff trained on UK-based practices and soft skills'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              About Us
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 text-gray-600">
              <p>
                The Newlife Medical Services is a project initiated by a group of UK based professionals 
                (medical and other) to make world class healthcare accessible in rural Bangladesh.
              </p>
              <p>
                We are a social enterprise that combines altruistic motives for serving humanity with 
                the profit motive that enables us to attract capital for health infrastructure investment.
              </p>
              <p>
                Our concept is simple – we set out to provide world class health services through the 
                use of latest technology where those with the broadest shoulders pay for the service 
                and those without don't get to miss out.
              </p>
              <p>
                We employ a people centric, pastoral care approach to all our patients taking an 
                interest in their broader emotional wellbeing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border border-border">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
