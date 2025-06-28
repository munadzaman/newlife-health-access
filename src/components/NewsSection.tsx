import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsSection = () => {
  const navigate = useNavigate();

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
    }
  ];

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 w-12 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-4">
              Latest News & Updates
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 w-12 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest achievements, partnerships, and community impact stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsItems.map((news) => (
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

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;