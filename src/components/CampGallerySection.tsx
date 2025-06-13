
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Eye, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CampGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
                Gallery
              </h2>
              <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness our impact through community outreach and medical camps
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {/* Desktop Grid View */}
              <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {galleryItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
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

              {/* Mobile Carousel View - Show 1 at a time for better visibility */}
              <div className="md:hidden mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryItems.map((item, index) => (
                      <CarouselItem key={index} className="basis-full pl-2">
                        <div 
                          className="relative cursor-pointer overflow-hidden rounded-lg shadow-md"
                          onClick={() => handleItemClick(item)}
                        >
                          <img 
                            src={item.src} 
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                          {item.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                              <div className="bg-white bg-opacity-90 rounded-full p-2">
                                <Play className="h-4 w-4 text-blue-600" />
                              </div>
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                            <p className="text-gray-200 text-xs">{item.description}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  View More
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

export default CampGallerySection;
