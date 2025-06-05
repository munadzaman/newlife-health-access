
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, Award, GraduationCap } from 'lucide-react';

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. Ali Ahmed Shuaib",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, MS (Ophthalmology)",
      department: "Chief Ophthalmologist",
      achievements: ["15+ Years Experience", "500+ Successful Surgeries", "UK Training Certificate"],
      schedule: "Mon-Fri: 9:00 AM - 5:00 PM",
      specialization: "Cataract Surgery, Glaucoma Treatment"
    },
    {
      name: "Dr. Ashraful Islam",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, FCPS (Ophthalmology)",
      department: "Senior Consultant",
      achievements: ["Board Certified", "Research Publications", "Community Service Award"],
      schedule: "Tue-Sat: 10:00 AM - 6:00 PM",
      specialization: "Retinal Disorders, Diabetic Eye Care"
    },
    {
      name: "Syed Tufayel Rahman",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "BSc Optometry, MSc Vision Science",
      department: "Lead Optometrist",
      achievements: ["UK Qualified", "Advanced Contact Lens Fitting", "Vision Therapy Specialist"],
      schedule: "Mon-Thu: 9:00 AM - 4:00 PM",
      specialization: "Vision Therapy, Contact Lenses"
    },
    {
      name: "Dr. Sarah Khan",
      image: "https://images.unsplash.com/photo-1594824804732-ca8db5ac6ec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, MS (Ophthalmology)",
      department: "Pediatric Ophthalmologist",
      achievements: ["Child Eye Care Expert", "International Training", "Published Researcher"],
      schedule: "Wed-Sun: 11:00 AM - 7:00 PM",
      specialization: "Pediatric Eye Care, Strabismus"
    },
    {
      name: "Dr. Rahman Ahmed",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, FCPS (Ophthalmology)",
      department: "Corneal Specialist",
      achievements: ["Corneal Transplant Expert", "Advanced Surgical Training", "Medical Excellence Award"],
      schedule: "Mon-Fri: 8:00 AM - 4:00 PM",
      specialization: "Corneal Diseases, Transplants"
    },
    {
      name: "Dr. Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, MD (Ophthalmology)",
      department: "Oculoplastic Surgeon",
      achievements: ["Aesthetic Surgery Expert", "International Fellowship", "Innovation Award"],
      schedule: "Tue-Sat: 9:00 AM - 5:00 PM",
      specialization: "Eyelid Surgery, Reconstructive Surgery"
    },
    {
      name: "Dr. Michael Chen",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, FRCS (Ophthalmology)",
      department: "Vitreoretinal Surgeon",
      achievements: ["Retinal Surgery Pioneer", "Research Excellence", "Teaching Award"],
      schedule: "Mon-Wed-Fri: 10:00 AM - 6:00 PM",
      specialization: "Retinal Detachment, Macular Surgery"
    },
    {
      name: "Dr. Fatima Al-Zahra",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      degree: "MBBS, MS (Ophthalmology)",
      department: "Glaucoma Specialist",
      achievements: ["Glaucoma Research Leader", "Clinical Excellence", "Patient Care Award"],
      schedule: "Sun-Thu: 8:00 AM - 4:00 PM",
      specialization: "Glaucoma Management, Laser Therapy"
    }
  ];

  const visibleDoctors = 3;
  const maxIndex = Math.max(0, doctors.length - visibleDoctors);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-gray-50" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified medical professionals dedicated to providing exceptional eye care
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleDoctors)}%)` }}
            >
              {doctors.map((doctor, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl text-blue-800">{doctor.name}</CardTitle>
                      <CardDescription className="flex items-center justify-center text-green-600 font-medium">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        {doctor.degree}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {doctor.department}
                        </span>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-gray-700 mb-2">Specialization:</p>
                        <p className="text-sm text-gray-600">{doctor.specialization}</p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-700 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          Achievements:
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {doctor.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-semibold text-gray-700 mb-1 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Schedule:
                        </p>
                        <p className="text-sm text-gray-600">{doctor.schedule}</p>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Book Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Show All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
