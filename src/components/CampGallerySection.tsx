
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from './SectionTitle';

const CampGallerySection = () => {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Rural medical camp',
      caption: 'Eye screening camp in rural Bangladesh'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cataract surgery',
      caption: 'Free cataract surgery program'
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Community outreach',
      caption: 'Community health education'
    },
    {
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Vision therapy',
      caption: 'Vision therapy sessions'
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Medical consultation',
      caption: 'Free medical consultations'
    },
    {
      src: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Healthcare team',
      caption: 'Our dedicated healthcare team'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Camp Gallery"
          subtitle="Moments from our rural outreach camps and community health programs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampGallerySection;
