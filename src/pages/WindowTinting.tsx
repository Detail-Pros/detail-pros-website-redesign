
import CallToAction from "@/components/home/CallToAction";
import { Check, Smartphone, Shield } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const WindowTinting = () => {
  // Update document title and meta description when component mounts
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Structured data for this page
  const windowTintingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Window Tinting Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Detail Pros Cayman",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "E33 Kingbird Warehouses, 64 Kingbird Drive",
        "addressLocality": "George Town",
        "addressRegion": "Grand Cayman",
        "addressCountry": "KY"
      },
      "telephone": "+13459299840",
      "priceRange": "$$-$$$",
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "url": "https://detailpros.ky"
    },
    "serviceType": "Window Tinting",
    "areaServed": "Cayman Islands",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Window Tinting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Window Tinting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Window Tinting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Window Tinting"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Window Tinting Services Cayman Islands | Automotive, Residential & Commercial" 
        description="Premium window tinting services in the Cayman Islands for automotive, residential and commercial properties. Heat reduction, UV protection, and enhanced privacy by Detail Pros." 
        keywords="window tinting cayman islands, car window tinting, residential window tinting, commercial window film, heat reduction window film, UV protection cayman, ceramic window tinting, cayman window tinting, commercial window tinting cayman, residential window tinting cayman" 
        canonicalUrl="https://detailpros.ky/window-tinting"
        schema={windowTintingSchema}
      />

      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Window <span className="text-detailpros-pink">Tinting</span> in Cayman Islands
            </h1>
            <p className="text-lg mb-6">
              Our premium window tinting services provide UV protection, heat rejection, and privacy for your vehicle, home, or business in the Cayman Islands.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <Smartphone className="text-detailpros-pink mr-3" size={24} />
                  <h3 className="text-xl font-bold">Automotive Tinting</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our premium ceramic window films block up to 99% of harmful UV rays while reducing interior heat, perfect for the Cayman Islands climate.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Heat reduction up to 70%</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Legal shade options compliant with Cayman Islands regulations</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Lifetime warranty available on premium films</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Glare reduction for safer driving</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <Shield className="text-detailpros-pink mr-3" size={24} />
                  <h3 className="text-xl font-bold">Residential & Commercial</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Improve energy efficiency and comfort in your home or business with our professional window films, specially designed for the Caribbean climate.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Energy cost savings up to 30%</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Furniture and flooring protection from sun damage</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Enhanced privacy with decorative film options</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">UV blocking to protect skin and interiors</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Window Tinting in the Cayman Islands</h2>
              <p className="mb-4">
                Detail Pros provides professional window tinting services across Grand Cayman. Our certified technicians install only the highest quality window films for automotive, residential, and commercial applications.
              </p>
              <p className="mb-4">
                Whether you're looking to reduce heat in your vehicle, lower energy costs in your home, or enhance privacy in your office, our window tinting solutions are customized to meet the specific needs of the Cayman Islands climate.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">Why Choose Detail Pros for Window Tinting in Cayman?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Certified installation technicians with years of experience</li>
                  <li>Premium ceramic films with lifetime warranties</li>
                  <li>Cayman Islands legal compliance guaranteed</li>
                  <li>Mobile service available - we come to your location</li>
                  <li>Competitive pricing with excellent value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
    </div>
  );
};

export default WindowTinting;
