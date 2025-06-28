import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, X, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Rural Eye Camp - Sylhet',
      description: 'Free eye screening for rural communities',
      category: 'Community Outreach'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Cataract Surgery Camp',
      description: 'Providing free cataract surgeries to underprivileged patients',
      category: 'Medical Procedures'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Vision Therapy Session',
      description: 'Helping children with learning difficulties through vision therapy',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Vision Therapy'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mobile Clinic Outreach',
      description: 'Bringing healthcare services to remote villages',
      category: 'Community Outreach'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Community Health Education',
      description: 'Educating communities about eye health and prevention',
      category: 'Education'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Surgical Procedures',
      description: 'Advanced surgical procedures in our modern facilities',
      videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
      category: 'Medical Procedures'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Doctor Consultation',
      description: 'Professional consultation with our expert doctors',
      category: 'Medical Procedures'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Equipment',
      description: 'State-of-the-art medical equipment for accurate diagnosis',
      category: 'Equipment'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Patient Care',
      description: 'Compassionate care for all our patients',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      category: 'Patient Care'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Children Vision Therapy',
      description: 'Specialized therapy sessions for children with vision problems',
      category: 'Vision Therapy'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Rural Medical Camp',
      description: 'Medical camp in remote village providing free healthcare',
      category: 'Community Outreach'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Eye Examination',
      description: 'Comprehensive eye examination using advanced technology',
      category: 'Medical Procedures'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'images') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  const handleItemClick = (item: any) => {
    if (item.type === 'video' && item.videoUrl) {
      window.open(item.videoUrl, '_blank');
    } else if (item.type === 'image') {
      setSelectedImage(item.src);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Gallery
              </h1>
              <p className="text-xl text-gray-600">
                Witness our impact through community outreach and medical camps
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Filter className="h-4 w-4 text-gray-500" />
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              <Button
                variant={filter === 'images' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('images')}
              >
                Images
              </Button>
              <Button
                variant={filter === 'videos' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('videos')}
              >
                Videos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div 
                className="relative group"
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
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-10"
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
    </div>
  );
};

export default GalleryPage;