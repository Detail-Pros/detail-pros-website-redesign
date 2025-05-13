
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  
  // Script to initialize Fieldd form when component mounts
  useEffect(() => {
    // Check if the global Fieldd object exists
    if (window.Fieldd) {
      try {
        // Initialize the lead form
        window.Fieldd.leadForm({
          container: "#fieldd-form-container",
          business: '57487',
          hideTitle: true,
          hideLabels: false,
          customSuccessMessage: 'Thank you for your message! We will get back to you shortly.',
        });
      } catch (error) {
        console.error("Error initializing Fieldd form:", error);
      }
    }
  }, []);

  // Structured data for this page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Detail Pros Cayman",
    "description": "Contact us for all your car, boat, and plane detailing, ceramic coating, PPF, and window tinting needs in the Cayman Islands.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Detail Pros Cayman",
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "telephone": "+13459299840",
      "email": "contact@detailpros.ky",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "E33 Kingbird Warehouses, 64 Kingbird Drive",
        "addressLocality": "George Town",
        "addressRegion": "Grand Cayman",
        "postalCode": "KY1-1001",
        "addressCountry": "KY"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Detail Pros | Car, Boat & Plane Detailing In Cayman Islands" 
        description="Contact Detail Pros for mobile detailing, ceramic coating, PPF and window tinting services in the Cayman Islands. Book our mobile car wash services today!" 
        keywords="contact detail pros cayman, car detailing cayman islands, boat detailing cayman, mobile car wash cayman, ceramic coating cayman, window tinting cayman, paint protection film cayman"
        canonicalUrl="https://detailpros.ky/contact"
        schema={contactSchema}
      />

      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg mb-8">Reach out to us for all your automotive detailing needs in the Cayman Islands.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card className="p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              {/* Fieldd Form Container */}
              <div id="fieldd-form-container" className="w-full"></div>
              
              {/* Fallback Form */}
              <div className="fieldd-fallback hidden">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} />
                  </div>
                  <Button 
                    className="w-full bg-detailpros-pink hover:bg-opacity-90"
                    onClick={() => {
                      toast({
                        title: "Message Sent",
                        description: "Thank you for your message! We'll get back to you shortly.",
                      });
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-detailpros-pink mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>E33 Kingbird Warehouses, 64 Kingbird Drive</p>
                      <p>George Town, Grand Cayman</p>
                      <p>Cayman Islands KY1-1001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-detailpros-pink mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p><a href="tel:+13459299840" className="hover:text-detailpros-pink">+1 (345) 929-9840</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-detailpros-pink mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p><a href="mailto:contact@detailpros.ky" className="hover:text-detailpros-pink">contact@detailpros.ky</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-detailpros-pink mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p>Monday - Friday: 8am - 5pm</p>
                      <p>Saturday & Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Mobile Service</h2>
                <p>We provide mobile detailing services throughout Grand Cayman. Contact us to schedule a convenient appointment at your location.</p>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="mt-12 h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              title="Detail Pros Cayman location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.214304711326!2d-81.37855372506015!3d19.329858381988475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f258693f779e7a5%3A0x2a3a12458f39b371!2sDetail%20Pros!5e0!3m2!1sen!2sus!4v1700707171730!5m2!1sen!2sus" 
              className="w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
