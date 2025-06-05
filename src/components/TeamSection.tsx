import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Anwarul Abedin",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading healthcare innovation with over 20 years of experience in medical administration and strategic planning.",
      linkedin: "#",
      email: "anwarul@newlifemedical.com"
    },
    {
      name: "Hamid Hussain Azad",
      position: "Executive Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Experienced executive manager with expertise in healthcare operations and business development.",
      linkedin: "#",
      email: "hamid@newlifemedical.com"
    },
    {
      name: "Dr. Sarah Thompson",
      position: "Medical Director",
      image: "https://images.unsplash.com/photo-1594824883303-384472988da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "UK-trained ophthalmologist with extensive experience in rural healthcare delivery and medical training programs.",
      linkedin: "#",
      email: "sarah@newlifemedical.com"
    },
    {
      name: "Mohammad Khan",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Specialist in healthcare operations management with a focus on rural clinic development and sustainability.",
      linkedin: "#",
      email: "mohammad@newlifemedical.com"
    },
    {
      name: "Dr. Rashida Ahmed",
      position: "Clinical Director",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Expert in clinical governance and quality assurance with experience in international healthcare standards.",
      linkedin: "#",
      email: "rashida@newlifemedical.com"
    },
    {
      name: "James Wilson",
      position: "Finance Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Financial strategist with expertise in healthcare economics and sustainable business model development.",
      linkedin: "#",
      email: "james@newlifemedical.com"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who are making world-class healthcare accessible in rural Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-100"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                <p className="text-blue-600 font-medium">{member.position}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <a 
                    href={member.linkedin} 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
