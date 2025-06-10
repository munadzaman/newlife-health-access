
import React from 'react';
import { Star, Award, Clock, Users } from 'lucide-react';

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Mustak Ahmed Jibon",
      designation: "Chief Ophthalmologist",
      qualifications: "MBBS, FCPS (Eye)",
      specializations: ["Cataract Surgery", "Retinal Diseases", "Glaucoma Treatment"],
      experience: "15+ years",
      availability: "",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. M Abdul Basit Raju",
      designation: "Eye Specialist and Phaco Surgeon",
      qualifications: "MBBS, DO(BSMMU), FCPS(Eye)",
      specializations: ["Phaco Surgery", "Corneal Diseases", "Pediatric Eye Care"],
      experience: "12+ years",
      availability: "Available on Sunday",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Ashit Dee",
      designation: "Chief Ophthalmologist",
      qualifications: "MBBS, MS (Ophthalmology)",
      specializations: ["Advanced Eye Surgery", "Diabetic Retinopathy", "Macular Diseases"],
      experience: "18+ years",
      availability: "",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Shohel Rana",
      designation: "Optometrist",
      qualifications: "Diploma in Optometry",
      specializations: ["Contact Lens", "Vision Therapy"],
      experience: "8+ years",
      availability: "Available on Sunday",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-blue-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Our Expert Doctors
            </h2>
            <div className="h-1 bg-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced ophthalmologists dedicated to providing the best eye care services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Expert
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{doctor.designation}</p>
                <p className="text-gray-600 text-sm mb-4">{doctor.qualifications}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Award className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-sm">{doctor.experience} Experience</span>
                  </div>
                  {doctor.availability && (
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-sm text-orange-600 font-medium">{doctor.availability}</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Doctors?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Highly Qualified</h4>
                <p className="text-gray-600 text-sm">All our doctors have advanced degrees and certifications in ophthalmology</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Extensive Experience</h4>
                <p className="text-gray-600 text-sm">Years of experience in treating complex eye conditions and surgeries</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Patient-Centered Care</h4>
                <p className="text-gray-600 text-sm">Dedicated to providing compassionate and personalized treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
