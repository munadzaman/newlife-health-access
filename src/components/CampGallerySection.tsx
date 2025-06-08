
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react';

const CampGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      description: 'Helping children with learning difficulties through vision therapy'
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
      description: 'Advanced surgical procedures in our modern facilities'
    }
  ];

  const visibleItems = 3;
  const maxIndex = Math.max(0, galleryItems.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
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
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                  {galleryItems.map((item, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-3">
                      <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <img 
                          src={item.src} 
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-colors">
                            <div className="bg-white bg-opacity-90 rounded-full p-3">
                              <Play className="h-8 w-8 text-blue-600" />
                            </div>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                          <p className="text-gray-200 text-sm">{item.description}</p>
                        </div>
                      </div>
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3">
                View More Gallery
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CampGallerySection;
