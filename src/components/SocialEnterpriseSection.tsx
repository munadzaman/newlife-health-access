
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Building2, Eye, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialEnterpriseSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Rural Eye Camp - Sylhet',
      description: 'Free eye screening for rural communities'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Cataract Surgery Camp',
      description: 'Providing free cataract surgeries to underprivileged patients'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Vision Therapy Session',
      description: 'Helping children with learning difficulties through vision therapy',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mobile Clinic Outreach',
      description: 'Bringing healthcare services to remote villages'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Community Health Education',
      description: 'Educating communities about eye health and prevention'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Surgical Procedures',
      description: 'Advanced surgical procedures in our modern facilities',
      videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
    }
  ];

  const handleItemClick = (item: any) => {
    if (item.type === 'video' && item.videoUrl) {
      window.open(item.videoUrl, '_blank');
    } else if (item.type === 'image') {
      setSelectedImage(item.src);
    }
  };

  const nextGalleryItem = () => {
    setCurrentGalleryIndex((prev) => (prev + 3) % galleryItems.length);
  };

  const prevGalleryItem = () => {
    setCurrentGalleryIndex((prev) => (prev - 3 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      <section id="social-enterprise" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Social Enterprise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making World Class Healthcare Accessible through commerce for good combined with philanthropy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Two-Sided Approach</h3>
              
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">World Class Healthcare</h4>
                        <p className="text-gray-600">
                          We provide world class facilities and infrastructure through competitive pricing that offers value for money, attracting investment through healthy returns.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Heart className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Accessible for Everyone</h4>
                        <p className="text-gray-600">
                          We make services accessible through subsidization, sponsorship facilitation, and strategic placement at thana (sub-district) level for easy rural access.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Rural Outreach</h4>
                        <p className="text-gray-600">
                          We conduct rural camps to take services to patients' doorsteps and work with NGOs, charities, and government agencies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <CardTitle className="text-xl font-bold">Partner With Us</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6">
                  We work with international and national NGO and governmental agency partners to deliver healthcare to rural Bangladesh.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="font-medium text-gray-800">GRT</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="font-medium text-gray-800">BHDI</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Sponsor Cataract Operations
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sponsor Medical Camps
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Us for Partnership
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Camp Gallery Section */}
          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardTitle className="text-3xl font-bold flex items-center justify-center">
                <Eye className="mr-3 h-8 w-8" />
                Camp Gallery
              </CardTitle>
              <p className="text-xl opacity-90 mt-2">
                Witness our impact through community outreach and medical camps
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {galleryItems.slice(currentGalleryIndex, currentGalleryIndex + 6).map((item, index) => (
                    <div 
                      key={index} 
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => handleItemClick(item)}
                    >
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-colors">
                          <div className="bg-white bg-opacity-90 rounded-full p-3">
                            <Play className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                        <p className="text-gray-200 text-xs">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
                  onClick={prevGalleryItem}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg"
                  onClick={nextGalleryItem}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3">
                  View More Gallery
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SocialEnterpriseSection;
