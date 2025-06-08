
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: "Newlife Medical Services Completes 200th Free Cataract Surgery",
      excerpt: "We are proud to announce reaching this milestone in our mission to make quality healthcare accessible to all Bangladeshi people.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "December 15, 2024",
      category: "Milestone"
    },
    {
      title: "New Vision Therapy Program Launches for Children",
      excerpt: "Our specialized vision therapy program is now available to help children with learning difficulties and visual processing disorders.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "December 10, 2024",
      category: "New Service"
    },
    {
      title: "Partnership with Local NGOs Expands Rural Outreach",
      excerpt: "We have formed new partnerships to extend our rural medical camps to more remote areas of Sylhet division.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "December 5, 2024",
      category: "Partnership"
    },
    {
      title: "Advanced Diagnostic Equipment Installed at Bishwanath Clinic",
      excerpt: "Our flagship clinic now features state-of-the-art diagnostic equipment to provide even better patient care and accurate diagnoses.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "November 28, 2024",
      category: "Technology"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Newspaper className="mr-3 h-8 w-8 text-blue-600" />
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest achievements, new services, and community impact stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
