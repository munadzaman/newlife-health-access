import React, { useState } from 'react';
import { Globe, Award, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const [showOperationalTeam, setShowOperationalTeam] = useState(false);
  const [currentDirectorIndex, setCurrentDirectorIndex] = useState(0);
  const [currentOperationalIndex, setCurrentOperationalIndex] = useState(0);

  const chairman = {
    name: "Syed Tufayel Rahman",
    position: "Chairman",
    category: "Leadership",
    bio: "UK-based experienced and celebrated optometrist with deep-seated roots in Bangladesh",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  };

  const founder = {
    name: "Akhtar Uzzaman",
    position: "Founder",
    category: "Leadership",
    bio: "Visionary founder with extensive business and management expertise",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  };

  const directors = [
    {
      name: "Abu Taher Md Bahar",
      position: "Director",
      category: "Board of Directors",
      bio: "Strategic leadership and healthcare management expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr Ali Ahmed Shuaib",
      position: "Director",
      category: "Board of Directors",
      bio: "Medical professional with extensive healthcare experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Abdul Hamid Mohon",
      position: "Director",
      category: "Board of Directors",
      bio: "Legal and business professional",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mifta Uddin Mizu",
      position: "Director",
      category: "Board of Directors",
      bio: "Business development and strategic planning expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr Jaed Rahman",
      position: "Director",
      category: "Board of Directors",
      bio: "Medical professional specializing in healthcare operations",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ruhul Amin Tipu",
      position: "Director (US)",
      category: "Board of Directors",
      bio: "International operations and strategic partnerships",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dewan Salman Sany",
      position: "Director",
      category: "Board of Directors",
      bio: "Business development and strategic planning expert",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr Ashraful Islam",
      position: "Director",
      category: "Board of Directors",
      bio: "Medical professional specializing in healthcare operations",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const operationalTeam = [
    {
      name: "Shohel Rana",
      position: "Head of Operations",
      category: "Operational Team",
      bio: "Energetic, hard-working and distinguished eye care professional leading our operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr Mustak Ahmed Jibon",
      position: "Chief Ophthalmologist",
      category: "Operational Team",
      bio: "Leading specialist in eye care and surgical procedures",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ashit Dee",
      position: "Chief Ophthalmologist",
      category: "Operational Team",
      bio: "Expert ophthalmologist with advanced surgical expertise",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ashrafuzzaman Munad",
      position: "Head of Finance & IT",
      category: "Operational Team",
      bio: "Financial management and technology infrastructure specialist",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hamid Hussain Azad",
      position: "Marketing Executive",
      category: "Operational Team",
      bio: "Marketing and community engagement professional",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Munni Islam",
      position: "Senior Nurse",
      category: "Operational Team",
      bio: "Experienced nursing professional with patient care expertise",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Shuhel Shuvo",
      position: "Graduate Nurse",
      category: "Operational Team",
      bio: "Dedicated nursing graduate committed to quality patient care",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Redwan Ahmed",
      position: "Office Assistant",
      category: "Operational Team",
      bio: "Dedicated office assistant supporting daily operations and patient services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border">
      <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-card-foreground text-center mb-2">{member.name}</h3>
      <p className="text-blue-600 font-medium text-center mb-3">{member.position}</p>
      <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
    </div>
  );

  const nextDirector = () => {
    setCurrentDirectorIndex((prev) => (prev + 1) % directors.length);
  };

  const prevDirector = () => {
    setCurrentDirectorIndex((prev) => (prev - 1 + directors.length) % directors.length);
  };

  const nextOperational = () => {
    setCurrentOperationalIndex((prev) => (prev + 1) % operationalTeam.length);
  };

  const prevOperational = () => {
    setCurrentOperationalIndex((prev) => (prev - 1 + operationalTeam.length) % operationalTeam.length);
  };

  return (
    <section id="team" className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Our Team
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The Newlife Medical Services team is an international group of medical professionals, 
            management consultants, legal professionals, and business people dedicated to making healthcare accessible.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamCard member={chairman} />
            <TeamCard member={founder} />
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Directors</h3>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          {/* Mobile Carousel View with Arrow Navigation */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentDirectorIndex * 100}%)` }}
              >
                {directors.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <TeamCard member={member} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Arrow Navigation */}
            <button
              onClick={prevDirector}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextDirector}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {directors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDirectorIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentDirectorIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Operational Team with View More Button */}
        <div>
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowOperationalTeam(!showOperationalTeam)}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {showOperationalTeam ? (
                <>
                  Hide Team <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
          
          {showOperationalTeam && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Operational Team</h3>
              
              {/* Desktop Grid View */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {operationalTeam.map((member, index) => (
                  <TeamCard key={index} member={member} />
                ))}
              </div>

              {/* Mobile Carousel View with Arrow Navigation */}
              <div className="md:hidden relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentOperationalIndex * 100}%)` }}
                  >
                    {operationalTeam.map((member, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <TeamCard member={member} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow Navigation */}
                <button
                  onClick={prevOperational}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextOperational}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {operationalTeam.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentOperationalIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentOperationalIndex ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;