
import React from 'react';
import { User, Award, Globe } from 'lucide-react';

const TeamSection = () => {
  const boardMembers = [
    {
      name: "Syed Tufayel Rahman",
      position: "Chairman & Founder",
      category: "Board of Directors",
      bio: "UK-based experienced and celebrated optometrist with deep-seated roots in Bangladesh"
    },
    {
      name: "Dr Ali Ahmed Shuaib",
      position: "Director",
      category: "Board of Directors",
      bio: "Medical professional with extensive healthcare experience"
    },
    {
      name: "Akhtar Uzzaman",
      position: "Director",
      category: "Board of Directors",
      bio: "Business and management consultant with international experience"
    },
    {
      name: "Abdul Hamid Mohon",
      position: "Director",
      category: "Board of Directors",
      bio: "Legal and business professional"
    },
    {
      name: "Dewan Salman Sany",
      position: "Director",
      category: "Board of Directors",
      bio: "Business development and strategic planning expert"
    },
    {
      name: "Dr Ashraful Islam",
      position: "Medical Director",
      category: "Board of Directors",
      bio: "Medical professional specializing in healthcare operations"
    }
  ];

  const operationalTeam = [
    {
      name: "Shohel Rana",
      position: "Head of Operations",
      category: "Operational Team",
      bio: "Energetic, hard-working and distinguished eye care professional leading our operations"
    },
    {
      name: "Dr [Ophthalmologist]",
      position: "Chief Ophthalmologist",
      category: "Operational Team",
      bio: "Leading specialist in eye care and surgical procedures"
    },
    {
      name: "Ashrafuzzaman Munad",
      position: "Head of Finance & IT",
      category: "Operational Team",
      bio: "Financial management and technology infrastructure specialist"
    }
  ];

  const nonExecDirectors = [
    {
      name: "Hamid Hussain Azad",
      position: "Non-Executive Director",
      category: "Non-Executive Directors",
      bio: "Experienced professional with wealth of experience in the Bangladeshi health and NGO sector"
    }
  ];

  const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
        <User className="h-10 w-10 text-gray-500" />
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
              <User className="h-8 w-8 text-green-600 mx-auto mt-1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Operational Excellence</h3>
            <p className="text-gray-600">Local expertise driving day-to-day healthcare delivery</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600 mx-auto mt-1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advisory Network</h3>
            <p className="text-gray-600">Experienced non-executive directors with NGO sector expertise</p>
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
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Operational Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationalTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Non-Executive Directors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Non-Executive Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonExecDirectors.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
