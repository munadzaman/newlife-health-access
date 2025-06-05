import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, Award, MapPin } from 'lucide-react';

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      specialty: "Ophthalmologist & Retinal Specialist",
      qualifications: "MBBS, MD (Ophthalmology), Fellowship in Retina",
      experience: "15 years",
      achievements: ["Pioneer in Diabetic Retinopathy Treatment", "500+ Successful Retinal Surgeries"],
      department: "Retina & Vitreous",
      consultationDays: "Mon, Wed, Fri",
      consultationTime: "9:00 AM - 2:00 PM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 2,
      name: "Dr. Mohammad Rahman",
      specialty: "Cataract & Anterior Segment Surgeon",
      qualifications: "MBBS, MS (Ophthalmology), FICO",
      experience: "12 years",
      achievements: ["3000+ Cataract Surgeries", "Expert in Phacoemulsification"],
      department: "Cataract Surgery",
      consultationDays: "Tue, Thu, Sat",
      consultationTime: "10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 3,
      name: "Dr. Fatima Khan",
      specialty: "Pediatric Ophthalmologist",
      qualifications: "MBBS, DNB (Ophthalmology), Fellowship in Pediatric Ophthalmology",
      experience: "10 years",
      achievements: ["Expert in Childhood Vision Disorders", "200+ Pediatric Surgeries"],
      department: "Pediatric Ophthalmology",
      consultationDays: "Mon, Wed, Fri",
      consultationTime: "2:00 PM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1594824883303-384472988da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 4,
      name: "Dr. Abdul Karim",
      specialty: "Glaucoma Specialist",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Glaucoma",
      experience: "14 years",
      achievements: ["Glaucoma Research Publication", "Advanced Surgical Techniques"],
      department: "Glaucoma",
      consultationDays: "Tue, Thu, Sat",
      consultationTime: "9:00 AM - 1:00 PM",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 5,
      name: "Dr. Rashida Begum",
      specialty: "Oculoplastic Surgeon",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Oculoplastics",
      experience: "11 years",
      achievements: ["Expert in Eyelid Surgery", "Facial Reconstruction Specialist"],
      department: "Oculoplastics",
      consultationDays: "Mon, Wed, Fri",
      consultationTime: "10:00 AM - 3:00 PM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 6,
      name: "Dr. Mizanur Rahman",
      specialty: "Cornea Specialist",
      qualifications: "MBBS, MD (Ophthalmology), Fellowship in Cornea",
      experience: "13 years",
      achievements: ["Corneal Transplant Expert", "100+ Successful Transplants"],
      department: "Cornea & External Diseases",
      consultationDays: "Tue, Thu, Sat",
      consultationTime: "11:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 7,
      name: "Dr. Nasreen Akter",
      specialty: "Optometrist & Vision Therapist",
      qualifications: "BSc (Optometry), MSc (Vision Science)",
      experience: "8 years",
      achievements: ["Specialist in Vision Therapy", "Learning Disability Expert"],
      department: "Optometry & Vision Therapy",
      consultationDays: "Mon to Sat",
      consultationTime: "9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1594824883303-384472988da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    },
    {
      id: 8,
      name: "Dr. Aminul Islam",
      specialty: "General Ophthalmologist",
      qualifications: "MBBS, FCPS (Ophthalmology)",
      experience: "16 years",
      achievements: ["Comprehensive Eye Care Expert", "Rural Healthcare Advocate"],
      department: "General Ophthalmology",
      consultationDays: "Sun to Thu",
      consultationTime: "8:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      available: true
    }
  ];

  const doctorsPerPage = 3;
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentDoctors = () => {
    const startIndex = currentIndex * doctorsPerPage;
    return doctors.slice(startIndex, startIndex + doctorsPerPage);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Doctors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals dedicated to providing world-class eye care
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentDoctors().map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-100"
                    />
                    {doctor.available && (
                      <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{doctor.specialty}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Qualifications:</p>
                    <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1 text-blue-600" />
                      {doctor.experience}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-green-600" />
                      {doctor.department}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Key Achievements:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {doctor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-medium">Consultation:</span>
                    </div>
                    <p className="text-sm text-gray-700">{doctor.consultationDays}</p>
                    <p className="text-sm text-gray-700">{doctor.consultationTime}</p>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-lg"
            onClick={prevPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-lg"
            onClick={nextPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
            Show All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
