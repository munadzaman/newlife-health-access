
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Award, MapPin } from 'lucide-react';

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Thompson",
      specialty: "Senior Ophthalmologist",
      qualifications: "MBBS, MD (Ophthalmology), FRCS",
      experience: "15+ years",
      rating: 4.9,
      reviews: 156,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1594824883303-384472988da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Cataract Surgery", "Glaucoma Treatment", "Diabetic Retinopathy", "LASIK Surgery"],
      languages: ["English", "Bengali", "Hindi"],
      availability: "Mon-Sat: 9AM-5PM"
    },
    {
      name: "Dr. Mohammad Rahman",
      specialty: "Consultant Ophthalmologist",
      qualifications: "MBBS, FCPS (Ophthalmology)",
      experience: "12+ years",
      rating: 4.8,
      reviews: 134,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Retinal Disorders", "Pediatric Ophthalmology", "Emergency Eye Care", "Vision Therapy"],
      languages: ["Bengali", "English", "Arabic"],
      availability: "Tue-Thu: 10AM-6PM"
    },
    {
      name: "Dr. Fatima Khan",
      specialty: "Pediatric Ophthalmologist",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Pediatric Ophthalmology",
      experience: "10+ years",
      rating: 4.9,
      reviews: 98,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Children's Eye Care", "Squint Treatment", "Lazy Eye Treatment", "Congenital Eye Disorders"],
      languages: ["Bengali", "English", "Urdu"],
      availability: "Mon-Wed-Fri: 9AM-4PM"
    },
    {
      name: "Dr. Ahmed Hassan",
      specialty: "Vitreoretinal Specialist",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Vitreoretinal Surgery",
      experience: "14+ years",
      rating: 4.7,
      reviews: 87,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Retinal Detachment", "Macular Degeneration", "Diabetic Eye Surgery", "Vitrectomy"],
      languages: ["Bengali", "English"],
      availability: "Thu-Sat: 11AM-7PM"
    },
    {
      name: "Dr. Rashida Begum",
      specialty: "Corneal Specialist",
      qualifications: "MBBS, MD (Ophthalmology), Fellowship in Corneal Diseases",
      experience: "11+ years",
      rating: 4.8,
      reviews: 76,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Corneal Transplant", "Dry Eye Treatment", "Keratoconus", "Corneal Infections"],
      languages: ["Bengali", "English", "Hindi"],
      availability: "Mon-Tue-Thu: 10AM-5PM"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Oculoplastic Surgeon",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Oculoplastics",
      experience: "9+ years",
      rating: 4.6,
      reviews: 64,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Eyelid Surgery", "Tear Duct Surgery", "Orbital Disorders", "Cosmetic Eye Surgery"],
      languages: ["English", "Bengali"],
      availability: "Wed-Fri-Sat: 12PM-6PM"
    },
    {
      name: "Dr. Nasreen Akter",
      specialty: "Glaucoma Specialist",
      qualifications: "MBBS, FCPS (Ophthalmology), Fellowship in Glaucoma",
      experience: "13+ years",
      rating: 4.9,
      reviews: 112,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1594824883303-384472988da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["Glaucoma Surgery", "Intraocular Pressure Management", "Optic Nerve Assessment", "Advanced Glaucoma Care"],
      languages: ["Bengali", "English"],
      availability: "Mon-Wed-Fri: 8AM-3PM"
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Refractive Surgeon",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Refractive Surgery",
      experience: "8+ years",
      rating: 4.7,
      reviews: 89,
      location: "Bishwanath Eye Hospital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specializations: ["LASIK Surgery", "PRK Surgery", "ICL Implantation", "Vision Correction"],
      languages: ["English", "Bengali"],
      availability: "Tue-Thu-Sat: 1PM-8PM"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Doctors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced eye care specialists committed to providing world-class healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 shadow-md">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900">{doctor.name}</CardTitle>
                <p className="text-blue-600 font-medium text-sm">{doctor.specialty}</p>
                <p className="text-gray-600 text-xs">{doctor.qualifications}</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Award className="h-3 w-3" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-600">
                  <p className="font-medium mb-1">Specializations:</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.specializations.slice(0, 2).map((spec, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {spec}
                      </span>
                    ))}
                    {doctor.specializations.length > 2 && (
                      <span className="text-gray-500">+{doctor.specializations.length - 2} more</span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-600">
                  <p><span className="font-medium">Languages:</span> {doctor.languages.join(', ')}</p>
                  <p><span className="font-medium">Available:</span> {doctor.availability}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-gray-500">
                    {doctor.reviews} reviews
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Calendar className="h-3 w-3 mr-1" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
