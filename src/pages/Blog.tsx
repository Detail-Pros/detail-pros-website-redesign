
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample blog data - this would come from your backend in a real implementation
const SAMPLE_BLOG_POSTS = [
  {
    id: '1',
    title: 'The Ultimate Guide to Ceramic Coating',
    excerpt: 'Discover the long-lasting benefits of ceramic coating and why it's worth the investment for your vehicle.',
    date: '2025-05-10',
    author: 'DetailPros Team',
    category: 'Ceramic Coating',
    imageUrl: '/lovable-uploads/69c4da11-73fc-4e84-abf3-b35b815ff06b.jpg',
    tags: ['ceramic coating', 'protection', 'maintenance']
  },
  {
    id: '2',
    title: 'Why Paint Protection Film is Essential for Luxury Cars',
    excerpt: 'Learn how PPF can protect your investment from road debris, stone chips, and environmental damage.',
    date: '2025-05-05',
    author: 'DetailPros Team',
    category: 'Paint Protection',
    imageUrl: '/lovable-uploads/145c28a8-c6c2-4297-b391-39186146a4fa.jpg',
    tags: ['paint protection film', 'ppf', 'luxury cars']
  },
  {
    id: '3',
    title: 'Professional vs DIY Detailing: What You Need to Know',
    excerpt: 'Understand the differences between professional detailing services and do-it-yourself approaches.',
    date: '2025-04-28',
    author: 'DetailPros Team',
    category: 'Detailing',
    imageUrl: '/lovable-uploads/330b2ea0-95a4-4935-a574-609c45f2789b.jpg',
    tags: ['detailing', 'professional', 'diy']
  },
  {
    id: '4',
    title: 'The Benefits of Window Tinting for Your Vehicle',
    excerpt: 'From UV protection to enhanced privacy, discover why window tinting is more than just an aesthetic upgrade.',
    date: '2025-04-20',
    author: 'DetailPros Team',
    category: 'Window Tinting',
    imageUrl: '/lovable-uploads/e80f0d00-b325-40f9-80fd-05c9dad0cca0.jpg',
    tags: ['window tinting', 'uv protection', 'privacy']
  },
  {
    id: '5',
    title: 'How to Maintain Your Car\'s Finish in Tropical Climates',
    excerpt: 'Special considerations for protecting your vehicle from salt air, intense sun, and heavy rainfall in Cayman Islands.',
    date: '2025-04-15',
    author: 'DetailPros Team',
    category: 'Maintenance',
    imageUrl: '/lovable-uploads/e20f5cec-bc63-49b8-a07c-33c611974fa8.jpg',
    tags: ['maintenance', 'tropical', 'cayman']
  }
];

// Categories for filtering
const CATEGORIES = [
  'All',
  'Ceramic Coating',
  'Paint Protection',
  'Detailing',
  'Window Tinting',
  'Maintenance'
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  // Filter blog posts based on search query and category
  const filteredPosts = SAMPLE_BLOG_POSTS.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Handler for requesting new AI-generated content
  const handleRequestAIContent = () => {
    toast({
      title: "AI Content Requested",
      description: "A new article draft will be generated and sent to your email for approval."
    });
  };

  return (
    <>
      <Helmet>
        <title>DetailPros Blog | Automotive Care Tips, Detailing Guides & Industry Insights</title>
        <meta name="description" content="Explore DetailPros blog for expert automotive care tips, detailing guides, and insights on ceramic coating, paint protection, window tinting, and more." />
        <meta name="keywords" content="detailing blog, car care tips, ceramic coating guide, auto detailing blog, paint protection, window tinting tips" />
      </Helmet>

      <div className="pt-16 pb-24 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DetailPros Blog</h1>
            <p className="text-xl max-w-3xl">
              Expert insights, tips, and industry knowledge to help you keep your vehicle looking its best.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 mt-12">
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10 pr-4 py-2 w-full" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="All" className="w-full md:w-auto">
              <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-6">
                {CATEGORIES.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Admin Button (in a real app, this would be protected by authentication) */}
          <div className="mb-8">
            <Button onClick={handleRequestAIContent} variant="outline">
              Request AI Article Draft
            </Button>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-detailpros-pink font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="link" className="text-detailpros-pink p-0">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
