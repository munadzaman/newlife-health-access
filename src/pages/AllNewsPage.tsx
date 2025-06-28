import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, ArrowRight, Filter } from 'lucide-react';

const AllNewsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');

  const newsItems = [
    {
      id: 1,
      title: "New State-of-the-Art Equipment Arrives at Bishwanath Eye Hospital",
      excerpt: "We are excited to announce the arrival of advanced diagnostic equipment that will enhance our ability to provide world-class eye care services.",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Equipment"
    },
    {
      id: 2,
      title: "Free Cataract Surgery Camp Reaches 500 Patients Milestone",
      excerpt: "Our rural outreach program has successfully provided free cataract surgeries to over 500 patients across Bangladesh, transforming lives in underserved communities.",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Community Outreach"
    },
    {
      id: 3,
      title: "Partnership with BHDI Expands Rural Healthcare Access",
      excerpt: "Our new partnership with Bangladesh Health Development Initiative will bring comprehensive eye care services to remote villages across Sylhet division.",
      date: "2024-01-05",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Partnership"
    },
    {
      id: 4,
      title: "Vision Therapy Program Shows Remarkable Success in Children",
      excerpt: "Our specialized vision therapy program has helped over 200 children with learning difficulties improve their academic performance through enhanced visual skills.",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Research"
    },
    {
      id: 5,
      title: "Mobile Clinic Initiative Launches in Remote Villages",
      excerpt: "Our new mobile clinic program brings essential eye care services directly to remote villages, eliminating transportation barriers for patients.",
      date: "2023-12-20",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Community Outreach"
    },
    {
      id: 6,
      title: "Training Program for Local Health Workers Begins",
      excerpt: "We have launched a comprehensive training program to educate local health workers about basic eye care and early detection of eye diseases.",
      date: "2023-12-15",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Education"
    },
    {
      id: 7,
      title: "Telemedicine Services Now Available for Remote Consultations",
      excerpt: "Patients in remote areas can now access our specialists through telemedicine services, reducing the need for long-distance travel.",
      date: "2023-12-10",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Technology"
    },
    {
      id: 8,
      title: "Annual Health Fair Attracts Over 1000 Participants",
      excerpt: "Our annual community health fair provided free screenings, health education, and medical consultations to over 1000 community members.",
      date: "2023-12-05",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Community Outreach"
    },
    {
      id: 9,
      title: "Research Study on Diabetic Retinopathy Prevention Published",
      excerpt: "Our research team has published findings on effective prevention strategies for diabetic retinopathy in rural populations.",
      date: "2023-11-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Research"
    },
    {
      id: 10,
      title: "New Pharmacy Opens to Serve Rural Communities",
      excerpt: "Our new pharmacy facility ensures that patients have access to essential medications and eye care products at affordable prices.",
      date: "2023-11-20",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Infrastructure"
    },
    {
      id: 11,
      title: "International Medical Mission Brings Expertise to Bangladesh",
      excerpt: "A team of international eye care specialists visited our facility to share knowledge and perform complex surgical procedures.",
      date: "2023-11-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Partnership"
    },
    {
      id: 12,
      title: "Solar Power Installation Ensures Uninterrupted Medical Services",
      excerpt: "Our new solar power system ensures that medical equipment and services continue operating even during power outages.",
      date: "2023-11-10",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Infrastructure"
    }
  ];

  const categories = ['all', ...Array.from(new Set(newsItems.map(item => item.category)))];

  const filteredNews = newsItems.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
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
                Latest News & Updates
              </h1>
              <p className="text-xl text-gray-600">
                Stay informed about our latest achievements, partnerships, and community impact stories
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0 flex-wrap">
              <Filter className="h-4 w-4 text-gray-500" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="mb-2"
                >
                  {category === 'all' ? 'All' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <Card 
              key={news.id} 
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer" 
              onClick={() => handleNewsClick(news.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="p-4">
                <CardTitle className="text-lg leading-tight mb-2 line-clamp-2">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {news.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{news.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No news articles found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNewsPage;