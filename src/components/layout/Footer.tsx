import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Apple, MessageSquare } from 'lucide-react';
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

// WhatsApp icon component 
const WhatsAppIcon = () => (
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
    <path d="M17.4 14.25l-4-4-4 4" />
    <path d="M12 3a9 9 0 1 0 9 9c0-4.95-4.05-9-9-9zm-.05 4c-2.75 0-5 2.25-5 5 0 1.07.32 2.05.92 2.82l-1.07 3.18 3.25-1.02c.75.55 1.65.85 2.6.85 2.77 0 5.02-2.23 5.02-5 0-2.72-2.25-4.95-5-4.95l.28.12z" />
  </svg>
);

// App store badge component for consistent styling
const AppStoreBadge = ({ store, link, children }) => (
  <a 
    href={link} 
    className="flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 w-full hover:bg-gray-800 transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {children}
  </a>
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
              <AppStoreBadge store="apple" link="https://apps.apple.com">
                <div className="flex items-center">
                  <Apple className="w-6 h-6 mr-2" />
                  <div className="flex flex-col">
                    <span className="text-xs">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </div>
              </AppStoreBadge>
              
              <AppStoreBadge store="android" link="https://play.google.com">
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
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <WhatsAppIcon />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <TikTok />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-detailpros-pink">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
