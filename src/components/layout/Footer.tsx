
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Apple, MessageSquare, LockKeyhole } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { useEffect } from 'react';

// Custom link component that scrolls to top on navigation
const ScrollToTopLink = ({ to, children, className }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

// TikTok icon component since it's not directly available in lucide-react
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

// App store badge component for consistent styling
const AppStoreBadge = ({ store, link, children }) => (
  <div className="relative">
    <div 
      className="flex items-center justify-start bg-black/40 text-white/80 rounded-lg px-4 py-2 w-full cursor-not-allowed"
    >
      {children}
    </div>
    <div className="absolute inset-0 flex items-center justify-start px-4 bg-black/60 backdrop-blur-[2px] rounded-lg">
      <div className="flex items-center">
        <LockKeyhole className="w-5 h-5 text-white mr-2" />
        <span className="text-sm font-medium text-white">Coming Soon</span>
      </div>
    </div>
  </div>
);

const Footer = () => {
  // Add effect to handle navigation from other pages
  useEffect(() => {
    // If coming from a different page, scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Get in Touch Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Reach out to us for all your detailing and surface protection needs and inquiries.
            </p>
          </div>
          
          <div className="md:pl-8">
            {/* Contact Information */}
            <div className="mb-8 mt-0">
              <div className="flex items-center mb-6">
                <Mail className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-medium">Email</h3>
              </div>
              <a href="mailto:contact@detailpros.ky" className="text-gray-300 hover:text-detailpros-pink block ml-7">
                contact@detailpros.ky
              </a>
              
              <div className="flex items-center mb-6 mt-8">
                <Phone className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-medium">Phone</h3>
              </div>
              <a href="tel:+13459299840" className="text-gray-300 hover:text-detailpros-pink block ml-7">
                (345) 929-9840
              </a>
              
              <div className="flex items-center mb-6 mt-8">
                <MapPin className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-medium">Office</h3>
              </div>
              <p className="text-gray-300 ml-7">
                Unit E33 Kingbird Warehouses, 64 Kingbird Drive, George Town
              </p>
            </div>
          </div>
        </div>

        {/* Map spanning across the component */}
        <div className="w-full h-[400px] bg-gray-200 rounded-md overflow-hidden mb-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4461.875424759378!2d-81.3622908!3d19.298592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f2587f2ea851a11%3A0xbd235f6837fe5929!2sDetail%20Pros!5e1!3m2!1sen!2suk!4v1747012358960!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Detail Pros Location"
          />
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <ScrollToTopLink to="/" className="block mb-4">
              <img 
                src="/lovable-uploads/05466d3a-5852-4182-9dd3-5ab926af61e4.png" 
                alt="DetailPros Logo" 
                className="h-14 w-auto"
              />
            </ScrollToTopLink>
          </div>
          
          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><ScrollToTopLink to="/" className="text-gray-300 hover:text-detailpros-pink">Home</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/about" className="text-gray-300 hover:text-detailpros-pink">About Us</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/contact" className="text-gray-300 hover:text-detailpros-pink">Contact Us</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/careers" className="text-gray-300 hover:text-detailpros-pink">Careers</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/blog" className="text-gray-300 hover:text-detailpros-pink">Blog</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/faq" className="text-gray-300 hover:text-detailpros-pink">FAQ</ScrollToTopLink></li>
            </ul>
          </div>
          
          {/* Detailing Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Detailing</h3>
            <ul className="space-y-3">
              <li><ScrollToTopLink to="/services" className="text-gray-300 hover:text-detailpros-pink">Automotive</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/services" className="text-gray-300 hover:text-detailpros-pink">Marine</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/services" className="text-gray-300 hover:text-detailpros-pink">Aviation</ScrollToTopLink></li>
            </ul>
          </div>
          
          {/* Ceramic Coating */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Ceramic Coating</h3>
            <ul className="space-y-3">
              <li><ScrollToTopLink to="/ceramic-coating/automotive" className="text-gray-300 hover:text-detailpros-pink">Automotive</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/ceramic-coating/marine" className="text-gray-300 hover:text-detailpros-pink">Marine</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/ceramic-coating/aviation" className="text-gray-300 hover:text-detailpros-pink">Aviation</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/ceramic-coating/industrial" className="text-gray-300 hover:text-detailpros-pink">Industrial</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/ceramic-coating/signage" className="text-gray-300 hover:text-detailpros-pink">Signage</ScrollToTopLink></li>
            </ul>
          </div>
          
          {/* Paint Protection Film */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Paint Protection Film</h3>
            <ul className="space-y-3">
              <li><ScrollToTopLink to="/paint-protection" className="text-gray-300 hover:text-detailpros-pink">Automotive</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/paint-protection" className="text-gray-300 hover:text-detailpros-pink">Marine</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/paint-protection" className="text-gray-300 hover:text-detailpros-pink">Aviation</ScrollToTopLink></li>
            </ul>
          </div>

          {/* Download App Column - Restored as its own column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-col space-y-3">
              <AppStoreBadge store="apple" link="#">
                <div className="flex items-center">
                  <Apple className="w-6 h-6 mr-2" />
                  <div className="flex flex-col">
                    <span className="text-xs">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </div>
              </AppStoreBadge>
              
              <AppStoreBadge store="android" link="#">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="currentColor" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs">Get it on</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </div>
              </AppStoreBadge>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <Separator className="bg-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 Wetworx Ltd. All rights reserved. Made with ❤️ and lots of 🍺 by <a href="https://kevinramirez.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-detailpros-pink">Kevin Ramirez</a>
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <ScrollToTopLink to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </ScrollToTopLink>
            <ScrollToTopLink to="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </ScrollToTopLink>
            <ScrollToTopLink to="/service-agreement" className="text-sm text-gray-400 hover:text-white">
              Service Agreement
            </ScrollToTopLink>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/detailprosky" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/detailprosofficial/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/13459299840" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <MessageSquare size={20} />
            </a>
            <a href="https://www.tiktok.com/@detailprosky" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <TikTok />
            </a>
            <a href="https://www.linkedin.com/company/detailpros/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
