
import React from 'react';
import { Globe, Award } from 'lucide-react';

const TeamSection = () => {
  const boardMembers = [
    {
      name: "Syed Tufayel Rahman",
      position: "Chairman & Founder",
      category: "Board of Directors",
      bio: "UK-based experienced and celebrated optometrist with deep-seated roots in Bangladesh",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr Ali Ahmed Shuaib",
      position: "Director",
      category: "Board of Directors",
      bio: "Medical professional with extensive healthcare experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Akhtar Uzzaman",
      position: "Director",
      category: "Board of Directors",
      bio: "Business and management consultant with international experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Abdul Hamid Mohon",
      position: "Director",
      category: "Board of Directors",
      bio: "Legal and business professional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dewan Salman Sany",
      position: "Director",
      category: "Board of Directors",
      bio: "Business development and strategic planning expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr Ashraful Islam",
      position: "Medical Director",
      category: "Board of Directors",
      bio: "Medical professional specializing in healthcare operations",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      name: "Dr Rahman Specialized",
      position: "Chief Ophthalmologist",
      category: "Operational Team",
      bio: "Leading specialist in eye care and surgical procedures",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      position: "Executive Manager",
      category: "Operational Team",
      bio: "Experienced professional with wealth of experience in the Bangladeshi health and NGO sector",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{member.name}</h3>
      <p className="text-blue-600 font-medium text-center mb-3">{member.position}</p>
      <p className="text-gray-600 text-sm text-center">{member.bio}</p>
    </div>
  );

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The Newlife Medical Services team is an international group of medical professionals, 
            management consultants, legal professionals, and business people dedicated to making healthcare accessible.
          </p>
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mt-1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">International Board</h3>
            <p className="text-gray-600">UK-based leadership with deep Bangladesh connections</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600 mx-auto mt-1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Operational Excellence</h3>
            <p className="text-gray-600">Local expertise driving day-to-day healthcare delivery</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600 mx-auto mt-1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership Team</h3>
            <p className="text-gray-600">Executive management with healthcare sector expertise</p>
          </div>
        </div>

        {/* Board of Directors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Operational Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Operational Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {operationalTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
