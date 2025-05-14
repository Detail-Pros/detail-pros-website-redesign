
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CallToAction from "@/components/home/CallToAction";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  // FAQ Schema for structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ceramic coating and how long does it last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ceramic coating is a liquid polymer applied to a vehicle's exterior that chemically bonds with the factory paint to create a protective layer. Our Ceramic Pro coatings can last anywhere from 2 years to a lifetime, depending on the package selected and proper maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How does paint protection film (PPF) differ from ceramic coating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While ceramic coating provides chemical protection and enhances gloss, PPF is a physical urethane film that protects against rock chips, scratches, and other physical damage. PPF is self-healing when exposed to heat and provides the ultimate protection for your vehicle's paint."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile detailing services in the Cayman Islands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Detail Pros offers comprehensive mobile detailing services throughout Grand Cayman. Our fully-equipped mobile units can perform everything from basic washes to complete detailing packages at your home, office, or marina."
        }
      },
      {
        "@type": "Question",
        "name": "What window tinting options do you offer for homes and businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of residential and commercial window films, including heat rejection films, decorative films, security films, and UV protection films. Our window tinting services help reduce energy costs, protect interiors from sun damage, and enhance privacy."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I have my boat or yacht detailed in the Cayman Islands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the Cayman Islands' marine environment, we recommend professional detailing for boats and yachts every 1-3 months depending on usage and storage conditions. Regular maintenance washes should be performed weekly to prevent salt damage and oxidation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the benefit of ceramic coating for boats and marine vessels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marine ceramic coatings provide superior protection against saltwater, UV damage, and oxidation. Our Ceramic Pro Marine products help maintain your vessel's appearance, make cleaning easier, and protect against the harsh Caribbean elements, ultimately extending the life of gelcoat and painted surfaces."
        }
      },
      {
        "@type": "Question",
        "name": "Is window tinting legal in the Cayman Islands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, window tinting is legal in the Cayman Islands with certain restrictions. For vehicles, the front windshield can have a non-reflective tint strip across the top, while side and rear windows must allow at least 35% light transmission. We ensure all our automotive tinting services comply with local regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How much does professional detailing cost in the Cayman Islands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Detailing costs vary based on vehicle size, condition, and the specific services requested. Our basic wash and wax packages start at $75, while comprehensive detailing packages range from $200-$600. Ceramic coating and PPF installation are premium services with pricing based on coverage area and product tiers. Contact us for a personalized quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ceramic coating for aircraft in Cayman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Detail Pros offers specialized ceramic coating services for private and commercial aircraft. Our aviation ceramic coatings are designed to withstand high altitudes, extreme temperatures, and UV exposure while reducing drag and improving fuel efficiency. Our team is trained to work with various aircraft surfaces and materials."
        }
      },
      {
        "@type": "Question",
        "name": "How should I maintain my ceramic coated vehicle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maintain a ceramic coated vehicle, we recommend gentle hand washing with pH-neutral soap, avoiding automatic car washes with harsh brushes, and applying a ceramic boost spray every 3-4 months. We provide detailed care instructions and maintenance products with all our ceramic coating services."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="FAQ - Car Detailing, Ceramic Coating, PPF & Window Tinting" 
        description="Frequently asked questions about car detailing, ceramic coating, PPF and window tinting in the Cayman Islands. Learn about our mobile detailing services, marine ceramic coating, and more." 
        keywords="car detailing faq cayman islands, ceramic coating questions, ppf faq cayman, window tinting questions, boat detailing faq, mobile car wash cayman islands, ceramic pro questions, paint protection film information cayman"
        canonicalUrl="https://detailpros.ky/faq"
        schema={faqSchema}
      />

      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Frequently Asked <span className="text-detailpros-pink">Questions</span>
            </h1>
            
            <p className="text-lg mb-10 max-w-3xl">
              Find answers to our most commonly asked questions about car detailing, ceramic coating, paint protection film, and window tinting services in the Cayman Islands.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-detailpros-pink">Automotive Services</h2>
                <ul className="space-y-2">
                  <li>• Mobile Car Detailing</li>
                  <li>• Ceramic Pro Coating</li>
                  <li>• Paint Protection Film</li>
                  <li>• Window Tinting</li>
                  <li>• Paint Correction</li>
                </ul>
                <Button asChild className="mt-4 bg-detailpros-pink hover:bg-opacity-90">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-detailpros-pink">Marine & Aviation</h2>
                <ul className="space-y-2">
                  <li>• Boat & Yacht Detailing</li>
                  <li>• Ceramic Pro Marine</li>
                  <li>• Aircraft Detailing</li>
                  <li>• Gelcoat Restoration</li>
                  <li>• Metal & Chrome Polishing</li>
                </ul>
                <Button asChild className="mt-4 bg-detailpros-pink hover:bg-opacity-90">
                  <Link to="/ceramic-coating/marine">Marine Services</Link>
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-detailpros-pink">Residential & Commercial</h2>
                <ul className="space-y-2">
                  <li>• Window Tinting</li>
                  <li>• Solar Films</li>
                  <li>• Decorative Films</li>
                  <li>• Security Films</li>
                  <li>• Anti-Graffiti Films</li>
                </ul>
                <Button asChild className="mt-4 bg-detailpros-pink hover:bg-opacity-90">
                  <Link to="/window-tinting">Window Tinting</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is ceramic coating and how long does it last?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Ceramic coating is a liquid polymer applied to a vehicle's exterior that chemically bonds with the factory paint to create a protective layer. Our Ceramic Pro coatings can last anywhere from 2 years to a lifetime, depending on the package selected and proper maintenance.</p>
                    <p className="mt-2">The primary benefits include:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Superior gloss and hydrophobic properties</li>
                      <li>Protection against UV damage, oxidation, and chemical stains</li>
                      <li>Easier cleaning and maintenance</li>
                      <li>Reduced need for waxing and polishing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How does paint protection film (PPF) differ from ceramic coating?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>While ceramic coating provides chemical protection and enhances gloss, PPF is a physical urethane film that protects against rock chips, scratches, and other physical damage. PPF is self-healing when exposed to heat and provides the ultimate protection for your vehicle's paint.</p>
                    <p className="mt-2">Many of our clients opt for both PPF and ceramic coating for comprehensive protection:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>PPF on high-impact areas (front bumper, hood, fenders)</li>
                      <li>Ceramic coating over the entire vehicle, including the PPF</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do you offer mobile detailing services in the Cayman Islands?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, Detail Pros offers comprehensive mobile detailing services throughout Grand Cayman. Our fully-equipped mobile units can perform everything from basic washes to complete detailing packages at your home, office, or marina.</p>
                    <p className="mt-2">Our mobile services include:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Exterior wash and wax</li>
                      <li>Interior detailing</li>
                      <li>Engine bay cleaning</li>
                      <li>Leather treatment</li>
                      <li>Paint correction</li>
                    </ul>
                    <p className="mt-2">Contact us to schedule a mobile appointment at your preferred location.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What window tinting options do you offer for homes and businesses?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>We offer a wide range of residential and commercial window films, including heat rejection films, decorative films, security films, and UV protection films. Our window tinting services help reduce energy costs, protect interiors from sun damage, and enhance privacy.</p>
                    <p className="mt-2">Benefits of our window films include:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Up to 80% heat rejection</li>
                      <li>99% UV protection</li>
                      <li>Reduced glare</li>
                      <li>Enhanced security</li>
                      <li>Privacy options</li>
                      <li>Decorative designs available</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How often should I have my boat or yacht detailed in the Cayman Islands?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>In the Cayman Islands' marine environment, we recommend professional detailing for boats and yachts every 1-3 months depending on usage and storage conditions. Regular maintenance washes should be performed weekly to prevent salt damage and oxidation.</p>
                    <p className="mt-2">Our marine maintenance schedule typically includes:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Weekly rinse and basic wash</li>
                      <li>Monthly thorough cleaning and protection</li>
                      <li>Quarterly complete detail with polishing</li>
                      <li>Annual protection renewal and assessment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    What is the benefit of ceramic coating for boats and marine vessels?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Marine ceramic coatings provide superior protection against saltwater, UV damage, and oxidation. Our Ceramic Pro Marine products help maintain your vessel's appearance, make cleaning easier, and protect against the harsh Caribbean elements, ultimately extending the life of gelcoat and painted surfaces.</p>
                    <p className="mt-2">Marine-specific benefits include:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Superior saltwater protection</li>
                      <li>Prevention of barnacle and marine growth adhesion</li>
                      <li>Protection for underwater running gear</li>
                      <li>Extended gelcoat life</li>
                      <li>Reduced maintenance time and costs</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Is window tinting legal in the Cayman Islands?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, window tinting is legal in the Cayman Islands with certain restrictions. For vehicles, the front windshield can have a non-reflective tint strip across the top, while side and rear windows must allow at least 35% light transmission. We ensure all our automotive tinting services comply with local regulations.</p>
                    <p className="mt-2">There are no specific restrictions for residential or commercial window tinting, allowing for greater flexibility in sun protection and privacy solutions.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    How much does professional detailing cost in the Cayman Islands?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Detailing costs vary based on vehicle size, condition, and the specific services requested. Our basic wash and wax packages start at $75, while comprehensive detailing packages range from $200-$600. Ceramic coating and PPF installation are premium services with pricing based on coverage area and product tiers.</p>
                    <p className="mt-2">For an accurate quote tailored to your specific needs, we recommend contacting our team directly. We provide detailed written estimates before beginning any work.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    Do you offer ceramic coating for aircraft in Cayman?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, Detail Pros offers specialized ceramic coating services for private and commercial aircraft. Our aviation ceramic coatings are designed to withstand high altitudes, extreme temperatures, and UV exposure while reducing drag and improving fuel efficiency. Our team is trained to work with various aircraft surfaces and materials.</p>
                    <p className="mt-2">Aircraft-specific benefits include:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Protection against hydraulic fluid and jet fuel exposure</li>
                      <li>Reduced cleaning time and frequency</li>
                      <li>Lower maintenance costs</li>
                      <li>Improved aerodynamics</li>
                      <li>Long-term protection for painted and polished surfaces</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    How should I maintain my ceramic coated vehicle?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>To maintain a ceramic coated vehicle, we recommend gentle hand washing with pH-neutral soap, avoiding automatic car washes with harsh brushes, and applying a ceramic boost spray every 3-4 months. We provide detailed care instructions and maintenance products with all our ceramic coating services.</p>
                    <p className="mt-2">Recommended maintenance routine:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Regular rinsing to remove surface contaminants</li>
                      <li>Two-bucket washing method with microfiber wash mitts</li>
                      <li>Use only pH-neutral, ceramic-coating-safe soaps</li>
                      <li>Quarterly application of ceramic boost spray</li>
                      <li>Annual professional inspection and maintenance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6">Our team is ready to answer any questions you might have about our detailing, ceramic coating, PPF, or window tinting services in the Cayman Islands.</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-detailpros-pink hover:bg-opacity-90">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-detailpros-pink text-detailpros-pink hover:bg-pink-50">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </div>
  );
};

export default FAQ;
