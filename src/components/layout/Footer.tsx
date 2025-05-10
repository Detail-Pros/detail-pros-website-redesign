
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Map } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

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

const Footer = () => {
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
                +1 (345) 929-9840
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.597187423721!2d-81.37641432412949!3d19.329869381913888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f258738d905adf3%3A0xc711ca9486afc56c!2sKingbird%20Dr%2C%20Cayman%20Islands!5e0!3m2!1sen!2sus!4v1715443037042!5m2!1sen!2sus" 
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
            <Link to="/" className="block mb-4">
              <div className="flex items-center">
                <span className="text-white font-bold text-xl ml-2">DetailPros</span>
              </div>
            </Link>
          </div>
          
          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-detailpros-pink">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-detailpros-pink">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-detailpros-pink">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-detailpros-pink">Careers</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-detailpros-pink">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Detailing Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Detailing</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-detailpros-pink">Automotive</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-detailpros-pink">Marine</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-detailpros-pink">Aviation</Link></li>
            </ul>
          </div>
          
          {/* Ceramic Coating */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Ceramic Coating</h3>
            <ul className="space-y-3">
              <li><Link to="/ceramic-coating/automotive" className="text-gray-300 hover:text-detailpros-pink">Automotive</Link></li>
              <li><Link to="/ceramic-coating/marine" className="text-gray-300 hover:text-detailpros-pink">Marine</Link></li>
              <li><Link to="/ceramic-coating/aviation" className="text-gray-300 hover:text-detailpros-pink">Aviation</Link></li>
              <li><Link to="/ceramic-coating/industrial" className="text-gray-300 hover:text-detailpros-pink">Industrial</Link></li>
              <li><Link to="/ceramic-coating/signage" className="text-gray-300 hover:text-detailpros-pink">Signage</Link></li>
            </ul>
          </div>
          
          {/* Paint Protection Film - now in its own column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Paint Protection Film</h3>
            <ul className="space-y-3">
              <li><Link to="/paint-protection" className="text-gray-300 hover:text-detailpros-pink">Automotive</Link></li>
              <li><Link to="/paint-protection" className="text-gray-300 hover:text-detailpros-pink">Marine</Link></li>
              <li><Link to="/paint-protection" className="text-gray-300 hover:text-detailpros-pink">Aviation</Link></li>
            </ul>
          </div>
          
          {/* Download App - now in its own column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-col space-y-3">
              <a href="https://apps.apple.com" className="inline-block" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on App Store" className="h-10" />
              </a>
              <a href="https://play.google.com" className="inline-block" target="_blank" rel="noopener noreferrer">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <Separator className="bg-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 Wetworx Ltd. All rights reserved. Made with ❤️ and lots of 🍸 by Kevin Ramirez
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/service-agreement" className="text-sm text-gray-400 hover:text-white">
              Service Agreement
            </Link>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Linkedin size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <TikTok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
