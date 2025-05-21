
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Sample blog post data - this would come from your backend in a real implementation
const SAMPLE_BLOG_POSTS = [
  {
    id: '1',
    title: 'The Ultimate Guide to Ceramic Coating',
    excerpt: "Discover the long-lasting benefits of ceramic coating and why it's worth the investment for your vehicle.",
    content: `
      <p>Ceramic coating has revolutionized the way we protect our vehicles' paintwork. Unlike traditional waxes and sealants that might last a few months, a professional ceramic coating can provide protection for years.</p>
      
      <h2>What is Ceramic Coating?</h2>
      <p>Ceramic coating is a liquid polymer that is applied by hand to a vehicle's exterior. The coating chemically bonds with the vehicle's factory paint, creating a layer of protection that won't wash away or break down over time like traditional wax. It creates an additional hydrophobic layer of protection against environmental contaminants.</p>
      
      <h2>Key Benefits of Ceramic Coating</h2>
      <ul>
        <li><strong>Long-lasting protection:</strong> Can last 2-5 years with proper maintenance</li>
        <li><strong>Hydrophobic properties:</strong> Water beads up and rolls off easily</li>
        <li><strong>UV protection:</strong> Prevents sun damage and oxidation</li>
        <li><strong>Chemical resistance:</strong> Guards against environmental contaminants</li>
        <li><strong>Enhanced gloss:</strong> Provides a deep, showroom-quality shine</li>
      </ul>
      
      <h2>Is Ceramic Coating Worth the Investment?</h2>
      <p>While professional ceramic coating is more expensive than traditional detailing services, its longevity makes it a worthwhile investment for many vehicle owners. If you're someone who:</p>
      <ul>
        <li>Takes pride in your vehicle's appearance</li>
        <li>Wants the best protection available</li>
        <li>Prefers low-maintenance solutions</li>
        <li>Plans to keep your vehicle for several years</li>
      </ul>
      <p>Then ceramic coating might be the perfect solution for you.</p>
      
      <h2>Maintenance Tips</h2>
      <p>To get the most out of your ceramic coating:</p>
      <ol>
        <li>Wash your vehicle regularly with pH-neutral soap</li>
        <li>Avoid automatic car washes with harsh brushes</li>
        <li>Apply a ceramic boost spray every few months</li>
        <li>Have your coating professionally inspected annually</li>
      </ol>
      
      <p>At DetailPros, we use only the highest quality ceramic coating products, applied by certified technicians to ensure the best possible results for your vehicle.</p>
    `,
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
    content: `
      <p>When you invest in a luxury vehicle, protecting that investment becomes a top priority. Paint Protection Film (PPF) offers an unmatched level of protection for your vehicle's paintwork.</p>
      
      <h2>What is Paint Protection Film?</h2>
      <p>PPF is a thermoplastic urethane film that is applied to painted surfaces of a vehicle to protect from stone chips, bug splatters, and minor abrasions. It's virtually invisible, preserving the original look of your vehicle while providing significant protection.</p>
      
      <h2>Benefits for Luxury Vehicles</h2>
      <ul>
        <li><strong>Impact protection:</strong> Absorbs impact from road debris and prevents chips and scratches</li>
        <li><strong>Self-healing properties:</strong> Minor scratches disappear with heat application</li>
        <li><strong>Preserves resale value:</strong> Keeps paintwork pristine for years</li>
        <li><strong>Custom fit:</strong> Precision cut for each vehicle model</li>
        <li><strong>UV protection:</strong> Prevents fading and discoloration</li>
      </ul>
      
      <h2>Areas to Consider for PPF Application</h2>
      <p>While full-vehicle coverage provides maximum protection, these high-impact areas are essential:</p>
      <ul>
        <li>Front bumper and hood</li>
        <li>Side mirrors</li>
        <li>Door edges and handle cups</li>
        <li>Rocker panels</li>
        <li>Rear wheel arches</li>
      </ul>
      
      <h2>PPF vs. Ceramic Coating</h2>
      <p>While ceramic coating offers excellent chemical and UV protection with enhanced gloss, it doesn't provide the physical impact protection of PPF. For ultimate protection, many luxury car owners choose to combine both: PPF for impact protection and ceramic coating over it for additional chemical resistance and gloss.</p>
      
      <p>At DetailPros, we offer premium XPEL PPF installed by certified technicians, ensuring the highest quality protection for your luxury vehicle.</p>
    `,
    date: '2025-05-05',
    author: 'DetailPros Team',
    category: 'Paint Protection',
    imageUrl: '/lovable-uploads/145c28a8-c6c2-4297-b391-39186146a4fa.jpg',
    tags: ['paint protection film', 'ppf', 'luxury cars']
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof SAMPLE_BLOG_POSTS[0] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<typeof SAMPLE_BLOG_POSTS>([]);

  useEffect(() => {
    // In a real app, this would be an API call to fetch the blog post data
    const foundPost = SAMPLE_BLOG_POSTS.find(post => post.id === id);
    setPost(foundPost || null);

    // Get related posts based on tags or category
    if (foundPost) {
      const related = SAMPLE_BLOG_POSTS
        .filter(p => p.id !== id && (
          p.category === foundPost.category || 
          p.tags.some(tag => foundPost.tags.includes(tag))
        ))
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Article not found</h2>
        <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | DetailPros Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
      </Helmet>

      <div className="pt-16 pb-24">
        {/* Hero Header */}
        <div 
          className="w-full h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${post.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/blog" className="inline-flex items-center text-white mb-6 hover:text-detailpros-pink">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Tags */}
            <div className="mt-12">
              <h4 className="font-medium mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/blog?tag=${tag}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <Separator className="my-8" />
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                      <div className="group">
                        <div className="h-48 overflow-hidden rounded-md mb-3">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h4 className="font-bold group-hover:text-detailpros-pink transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 bg-gray-100 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to protect your vehicle?</h3>
              <p className="mb-6">Schedule a consultation with our experts to learn about our detailing and protection services.</p>
              <a 
                href="https://book.detailpros.ky/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium bg-detailpros-pink hover:bg-opacity-90 text-white px-6 py-3"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
