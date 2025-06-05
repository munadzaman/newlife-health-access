
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "New State-of-the-Art Equipment Arrives at Bishwanath Eye Hospital",
      excerpt: "We are excited to announce the arrival of advanced diagnostic equipment that will enhance our ability to provide world-class eye care services to our patients.",
      date: "2024-01-15",
      readTime: "3 min read",
      category: "Equipment",
      author: "Dr. Sarah Thompson"
    },
    {
      id: 2,
      title: "Free Cataract Surgery Camp Reaches 500 Patients Milestone",
      excerpt: "Our rural outreach program has successfully provided free cataract surgeries to over 500 patients across Bangladesh, transforming lives in underserved communities.",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Community Outreach",
      author: "Dr. Anwarul Abedin"
    },
    {
      id: 3,
      title: "Partnership with BHDI Expands Rural Healthcare Access",
      excerpt: "Our new partnership with Bangladesh Health Development Initiative will bring comprehensive eye care services to remote villages across Sylhet division.",
      date: "2024-01-05",
      readTime: "2 min read",
      category: "Partnership",
      author: "Hamid Hussain Azad"
    },
    {
      id: 4,
      title: "Vision Therapy Program Shows Remarkable Success in Children",
      excerpt: "Our specialized vision therapy program has helped over 200 children with learning difficulties improve their academic performance through enhanced visual skills.",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "Research",
      author: "Dr. Rashida Ahmed"
    },
    {
      id: 5,
      title: "New Mohammadpur Vision Center Construction Begins",
      excerpt: "Construction has officially begun on our second location in Mohammadpur, Dhaka, which will expand our urban healthcare reach significantly.",
      date: "2023-12-20",
      readTime: "3 min read",
      category: "Expansion",
      author: "Mohammad Khan"
    },
    {
      id: 6,
      title: "International Medical Mission Brings UK Specialists to Bangladesh",
      excerpt: "A team of UK-based ophthalmologists visited our Bishwanath facility to provide advanced training and conduct complex surgical procedures.",
      date: "2023-12-15",
      readTime: "4 min read",
      category: "Training",
      author: "Dr. Sarah Thompson"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest achievements, partnerships, and community impact stories
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(news.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{news.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>By {news.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="group border-blue-600 text-blue-600 hover:bg-blue-50">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3">
              View All News Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
