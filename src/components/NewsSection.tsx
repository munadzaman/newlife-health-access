import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "New State-of-the-Art Equipment Arrives at Bishwanath Eye Hospital",
      excerpt: "We are excited to announce the arrival of advanced diagnostic equipment that will enhance our ability to provide world-class eye care services.",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Equipment",
      fullContent: `
        <h1>New State-of-the-Art Equipment Arrives at Bishwanath Eye Hospital</h1>
        <p><strong>Published:</strong> January 15, 2024 | <strong>Category:</strong> Equipment</p>
        
        <p>We are thrilled to announce a significant milestone in our commitment to providing world-class healthcare services. Bishwanath Eye Hospital has recently received cutting-edge diagnostic equipment that will revolutionize our ability to diagnose and treat various eye conditions.</p>
        
        <h2>Advanced Technology for Better Care</h2>
        <p>The new equipment includes:</p>
        <ul>
          <li>High-resolution OCT (Optical Coherence Tomography) scanner</li>
          <li>Advanced fundus camera with wide-field imaging capabilities</li>
          <li>Automated perimetry system for comprehensive visual field testing</li>
          <li>Digital slit lamp with integrated imaging system</li>
        </ul>
        
        <h2>Impact on Patient Care</h2>
        <p>This investment in advanced technology will enable our medical team to:</p>
        <ul>
          <li>Detect eye diseases at earlier stages</li>
          <li>Provide more accurate diagnoses</li>
          <li>Monitor treatment progress more effectively</li>
          <li>Offer minimally invasive treatment options</li>
        </ul>
        
        <p>Dr. Ali Ahmed Shuaib, our lead ophthalmologist, commented: "This new equipment represents a significant step forward in our mission to bring world-class eye care to rural Bangladesh. We can now offer diagnostic capabilities that were previously only available in major metropolitan hospitals."</p>
        
        <h2>Commitment to Excellence</h2>
        <p>This equipment acquisition is part of our ongoing commitment to maintaining the highest standards of medical care while keeping our services accessible to all members of the community, regardless of their economic status.</p>
      `
    },
    {
      id: 2,
      title: "Free Cataract Surgery Camp Reaches 500 Patients Milestone",
      excerpt: "Our rural outreach program has successfully provided free cataract surgeries to over 500 patients across Bangladesh, transforming lives in underserved communities.",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Community Outreach",
      fullContent: `
        <h1>Free Cataract Surgery Camp Reaches 500 Patients Milestone</h1>
        <p><strong>Published:</strong> January 10, 2024 | <strong>Category:</strong> Community Outreach</p>
        
        <p>We are proud to announce that our free cataract surgery program has reached a significant milestone, having successfully treated over 500 patients across rural Bangladesh. This achievement represents not just numbers, but hundreds of lives transformed and families reunited with their loved ones' sight.</p>
        
        <h2>Program Overview</h2>
        <p>Our free cataract surgery initiative was launched with the vision of eliminating preventable blindness in rural communities. The program includes:</p>
        <ul>
          <li>Mobile screening camps in remote villages</li>
          <li>Free transportation to our surgical facility</li>
          <li>Complete surgical care including IOL implantation</li>
          <li>Post-operative follow-up care</li>
          <li>Free medications and eye drops</li>
        </ul>
        
        <h2>Impact Stories</h2>
        <p>Among our 500 patients, we have witnessed remarkable transformations:</p>
        <ul>
          <li>Elderly farmers returning to their fields</li>
          <li>Grandmothers seeing their grandchildren clearly for the first time in years</li>
          <li>Artisans resuming their traditional crafts</li>
          <li>Students improving their academic performance</li>
        </ul>
        
        <h2>Partnership and Support</h2>
        <p>This milestone would not have been possible without the generous support of our partners and donors. Special thanks to:</p>
        <ul>
          <li>GRT Foundation for their continued financial support</li>
          <li>BHDI for logistical coordination</li>
          <li>Local community leaders for patient identification</li>
          <li>Our dedicated medical team</li>
        </ul>
        
        <p>Mohammad Shohel Rana, our Head of Operations, stated: "Each surgery represents hope restored. We are not just treating cataracts; we are giving people their independence, dignity, and quality of life back."</p>
        
        <h2>Looking Forward</h2>
        <p>With this milestone achieved, we are setting our sights on reaching 1,000 free cataract surgeries by the end of 2024. We continue to seek partnerships and support to expand this life-changing program.</p>
      `
    },
    {
      id: 3,
      title: "Partnership with BHDI Expands Rural Healthcare Access",
      excerpt: "Our new partnership with Bangladesh Health Development Initiative will bring comprehensive eye care services to remote villages across Sylhet division.",
      date: "2024-01-05",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Partnership",
      fullContent: `
        <h1>Partnership with BHDI Expands Rural Healthcare Access</h1>
        <p><strong>Published:</strong> January 5, 2024 | <strong>Category:</strong> Partnership</p>
        
        <p>Newlife Medical Services is pleased to announce a strategic partnership with Bangladesh Health Development Initiative (BHDI) that will significantly expand access to comprehensive eye care services in remote villages across the Sylhet division.</p>
        
        <h2>Partnership Objectives</h2>
        <p>This collaboration aims to:</p>
        <ul>
          <li>Establish regular mobile clinic schedules in underserved areas</li>
          <li>Provide comprehensive eye examinations and basic treatments</li>
          <li>Identify patients requiring advanced surgical intervention</li>
          <li>Facilitate transportation and accommodation for surgery patients</li>
          <li>Conduct community health education programs</li>
        </ul>
        
        <h2>BHDI's Role</h2>
        <p>Bangladesh Health Development Initiative brings valuable expertise in:</p>
        <ul>
          <li>Community engagement and trust-building</li>
          <li>Logistics coordination in remote areas</li>
          <li>Local language communication</li>
          <li>Cultural sensitivity in healthcare delivery</li>
        </ul>
        
        <h2>Expected Impact</h2>
        <p>Through this partnership, we anticipate:</p>
        <ul>
          <li>Reaching an additional 50 villages annually</li>
          <li>Screening over 2,000 patients per year</li>
          <li>Identifying and treating 300+ surgical cases</li>
          <li>Training local health workers in basic eye care</li>
        </ul>
        
        <p>Akhtar Uzzaman, Founder of Newlife Medical Services, commented: "This partnership represents our commitment to leaving no one behind in our mission to provide world-class healthcare. BHDI's deep community connections will help us reach the most vulnerable populations."</p>
        
        <h2>Implementation Timeline</h2>
        <p>The partnership will be implemented in phases:</p>
        <ul>
          <li><strong>Phase 1 (Q1 2024):</strong> Pilot program in 10 villages</li>
          <li><strong>Phase 2 (Q2-Q3 2024):</strong> Expansion to 30 additional villages</li>
          <li><strong>Phase 3 (Q4 2024):</strong> Full implementation across Sylhet division</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Vision Therapy Program Shows Remarkable Success in Children",
      excerpt: "Our specialized vision therapy program has helped over 200 children with learning difficulties improve their academic performance through enhanced visual skills.",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Research",
      fullContent: `
        <h1>Vision Therapy Program Shows Remarkable Success in Children</h1>
        <p><strong>Published:</strong> December 28, 2023 | <strong>Category:</strong> Research</p>
        
        <p>Our specialized vision therapy program has achieved remarkable success, helping over 200 children with learning difficulties improve their academic performance through enhanced visual skills. This innovative program addresses the often-overlooked connection between vision problems and learning challenges.</p>
        
        <h2>Understanding Vision Therapy</h2>
        <p>Vision therapy is a specialized treatment program designed to improve visual skills and processing. Unlike simple vision correction with glasses, vision therapy addresses:</p>
        <ul>
          <li>Eye movement control and coordination</li>
          <li>Eye focusing abilities</li>
          <li>Eye teaming skills</li>
          <li>Visual processing and perception</li>
          <li>Visual-motor integration</li>
        </ul>
        
        <h2>Program Results</h2>
        <p>Our comprehensive evaluation of 200 children who completed the program shows:</p>
        <ul>
          <li><strong>85%</strong> improvement in reading comprehension</li>
          <li><strong>78%</strong> increase in attention span during academic tasks</li>
          <li><strong>92%</strong> reduction in eye strain and headaches</li>
          <li><strong>76%</strong> improvement in handwriting quality</li>
          <li><strong>89%</strong> increase in overall academic confidence</li>
        </ul>
        
        <h2>Case Studies</h2>
        <p><strong>Case 1:</strong> 8-year-old Fatima struggled with reading and was falling behind in school. After 12 weeks of vision therapy, her reading level improved by 2 grades, and her teachers noted significant improvement in classroom attention.</p>
        
        <p><strong>Case 2:</strong> 10-year-old Rahman had difficulty copying from the board and completing written assignments. Vision therapy helped improve his eye movement control, resulting in better note-taking and homework completion.</p>
        
        <h2>Treatment Approach</h2>
        <p>Our vision therapy program includes:</p>
        <ul>
          <li>Comprehensive visual skills assessment</li>
          <li>Individualized treatment plans</li>
          <li>In-office therapy sessions (45 minutes, twice weekly)</li>
          <li>Home-based reinforcement activities</li>
          <li>Progress monitoring and plan adjustments</li>
          <li>Parent and teacher education</li>
        </ul>
        
        <p>Mohammad Shohel Rana, our Specialist in Eye Vision & Neuro-Optometric Disorders, explained: "Many children labeled as having learning disabilities actually have treatable vision problems. Our therapy program addresses these underlying visual skills deficits, allowing children to reach their full academic potential."</p>
        
        <h2>Community Impact</h2>
        <p>The success of our vision therapy program has led to:</p>
        <ul>
          <li>Increased awareness among educators about vision-related learning problems</li>
          <li>Collaboration with local schools for early identification</li>
          <li>Training programs for teachers on recognizing vision-related symptoms</li>
          <li>Reduced special education referrals for vision-related issues</li>
        </ul>
        
        <h2>Future Plans</h2>
        <p>Based on these encouraging results, we plan to:</p>
        <ul>
          <li>Expand the program to serve 500 children annually</li>
          <li>Develop school-based screening programs</li>
          <li>Train additional vision therapists</li>
          <li>Conduct research on long-term academic outcomes</li>
          <li>Create awareness campaigns for parents and educators</li>
        </ul>
      `
    }
  ];

  const openNewsPage = (news: any) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${news.title} - Newlife Medical Services</title>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9fafb;
            }
            .article-container {
              background: white;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .article-header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid #e5e7eb;
            }
            .article-image {
              width: 100%;
              height: 300px;
              object-fit: cover;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .category-badge {
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 15px;
            }
            h1 {
              color: #1f2937;
              margin-bottom: 15px;
              font-size: 2.5rem;
              font-weight: 700;
              line-height: 1.2;
            }
            h2 {
              color: #374151;
              margin-top: 30px;
              margin-bottom: 15px;
              font-size: 1.5rem;
              font-weight: 600;
              border-left: 4px solid #3b82f6;
              padding-left: 15px;
            }
            p {
              margin-bottom: 15px;
              color: #4b5563;
            }
            ul {
              margin-bottom: 20px;
              padding-left: 20px;
            }
            li {
              margin-bottom: 8px;
              color: #4b5563;
            }
            .meta-info {
              color: #6b7280;
              font-size: 14px;
              margin-bottom: 20px;
            }
            .back-button {
              background: #3b82f6;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
              margin-bottom: 20px;
            }
            .back-button:hover {
              background: #2563eb;
            }
            @media (max-width: 768px) {
              body { padding: 10px; }
              .article-container { padding: 20px; }
              h1 { font-size: 2rem; }
            }
          </style>
        </head>
        <body>
          <div class="article-container">
            <button class="back-button" onclick="window.close()">← Back to News</button>
            <div class="article-header">
              <div class="category-badge">${news.category}</div>
              <img src="${news.image}" alt="${news.title}" class="article-image">
            </div>
            <div class="article-content">
              ${news.fullContent}
            </div>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
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
            <Card key={news.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer" onClick={() => openNewsPage(news)}>
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