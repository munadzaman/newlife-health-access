import React, { useState } from 'react';
import { Star, Award, Clock, Users, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. M. Abdul Basit Raju",
      designation: "Eye Specialist & Phaco Surgeon",
      qualifications: "MBBS, DO (Ophthalmology) BSMMU, FCPS (Ophthalmology) CCD (BIRDEM)",
      specializations: ["Phaco Surgery", "Corneal Diseases", "Pediatric Eye Care"],
      experience: "12+ years",
      availability: "Sunday: 3:00 PM - 5:00 PM",
      registration: "BMDC Registration: A 73262",
      affiliation: "National Institute of Ophthalmology & Hospital, Agargaon, Dhaka | Sylhet M.A.G. Osmani Medical College, Sylhet",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Masum Ahmed",
      designation: "Eye Specialist & Surgeon",
      qualifications: "MBBS, PGT, MS - Bangabandhu Sheikh Mujib Medical University",
      specializations: ["Eye Surgery", "Retinal Diseases", "Glaucoma Treatment"],
      experience: "10+ years",
      availability: "Wednesday - Thursday: 10:00 AM - 5:00 PM",
      registration: "BMDC Registration: A 106487",
      affiliation: "",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mohammad Shohel Rana",
      designation: "Specialist in Eye Vision & Neuro-Optometric Disorders",
      qualifications: "MPH in Ophthalmology, B.Optom (DU), FAHS (NITOR), Certified in Advanced Optometry & Vision Therapy",
      specializations: ["Vision Therapy", "Neuro-Optometry", "Advanced Optometry"],
      experience: "8+ years",
      availability: "Daily: 9:00 AM - 5:00 PM",
      registration: "Reg. No.: 5973-FAHS (NITOR)",
      affiliation: "",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mostak Ahmed Jibon",
      designation: "Eye Vision Expert",
      qualifications: "MLOP, MBICO - Mymensingh, DOLV - University of South Asia, EMO - Dhaka",
      specializations: ["Eye Vision", "Optometry", "Vision Assessment"],
      experience: "15+ years",
      availability: "Everyday: 9:00 AM - 5:00 PM",
      registration: "Govt. Registration No: 503/670",
      affiliation: "",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Asit Sutro Dhor",
      designation: "Eye Vision Expert",
      qualifications: "DMF, Dhaka",
      specializations: ["Eye Vision", "Optometry", "Vision Care"],
      experience: "12+ years",
      availability: "Daily: 9:00 AM - 5:00 PM",
      registration: "BMDC Registration No: D 13933",
      affiliation: "",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const getDoctorsPerPage = () => {
    if (window.innerWidth < 768) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const [doctorsPerPage, setDoctorsPerPage] = useState(getDoctorsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setDoctorsPerPage(getDoctorsPerPage());
      setCurrentIndex(0); // Reset to first page on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentDoctors = () => {
    const start = currentIndex * doctorsPerPage;
    return doctors.slice(start, start + doctorsPerPage);
  };

  return (
    <section id="doctors" className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Our Doctors
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced ophthalmologists dedicated to providing the best eye care services
          </p>
        </div>

        {/* Doctors Grid with Navigation */}
        <div className="relative">
          <div className={`grid gap-8 mb-8 ${
            doctorsPerPage === 1 ? 'grid-cols-1' : 
            doctorsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' : 
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {getCurrentDoctors().map((doctor, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border border-border">
                <div className="relative group">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Expert
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 transition-colors duration-300 hover:text-blue-600">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{doctor.designation}</p>
                  <p className="text-muted-foreground text-sm mb-4">{doctor.qualifications}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-muted-foreground transition-colors duration-300 hover:text-green-600">
                      <Award className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{doctor.experience} Experience</span>
                    </div>
                    <div className="flex items-center text-muted-foreground transition-colors duration-300 hover:text-orange-600">
                      <Clock className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-sm text-orange-600 font-medium">{doctor.availability}</span>
                    </div>
                    {doctor.registration && (
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{doctor.registration}</span>
                      </div>
                    )}
                    {doctor.affiliation && (
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Affiliation: </span>
                        <span>{doctor.affiliation}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-card-foreground mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium transition-all duration-300 hover:bg-blue-100 hover:scale-105 cursor-default"
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

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === totalPages - 1}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Why Choose Our Doctors */}
        <div className="mt-16 bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4 transition-colors duration-300 hover:text-blue-600">Why Choose Our Doctors?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center transition-all duration-500 hover:scale-110 group">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110 group-hover:rotate-12">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">Highly Qualified</h4>
                <p className="text-muted-foreground text-sm">All our doctors have advanced degrees and certifications in ophthalmology</p>
              </div>
              
              <div className="text-center transition-all duration-500 hover:scale-110 group">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-green-600 transition-colors duration-300">Extensive Experience</h4>
                <p className="text-muted-foreground text-sm">Years of experience in treating complex eye conditions and surgeries</p>
              </div>
              
              <div className="text-center transition-all duration-500 hover:scale-110 group">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:bg-purple-200 group-hover:scale-110 group-hover:rotate-12">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-purple-600 transition-colors duration-300">Patient-Centered Care</h4>
                <p className="text-muted-foreground text-sm">Dedicated to providing compassionate and personalized treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;