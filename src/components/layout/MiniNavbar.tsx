
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const MiniNavbar = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-white h-9 flex items-center text-black text-xs z-50 shadow-sm border-b border-b-gray-950" role="navigation" aria-label="Contact Information">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 md:space-x-6">
          <div className="flex items-center">
            {isMobile ? (
              <a 
                href="tel:+13459299840" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-detailpros-pink transition-colors"
                aria-label="Phone: (345) 929-9840"
              >
                <Phone className="text-detailpros-pink h-4 w-4" />
              </a>
            ) : (
              <>
                <Phone className="text-detailpros-pink h-4 w-4 mr-2" aria-hidden="true" />
                <a 
                  href="tel:+13459299840" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:inline hover:text-detailpros-pink transition-colors"
                >
                  <span className="hidden md:inline">(345) 929-9840</span>
                </a>
              </>
            )}
          </div>
          
          <div className="flex items-center">
            {isMobile ? (
              <a 
                href="mailto:contact@detailpros.ky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-detailpros-pink transition-colors"
                aria-label="Email: contact@detailpros.ky"
              >
                <Mail className="text-detailpros-pink h-4 w-4" />
              </a>
            ) : (
              <>
                <Mail className="text-detailpros-pink h-4 w-4 mr-2" aria-hidden="true" />
                <a 
                  href="mailto:contact@detailpros.ky" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:inline hover:text-detailpros-pink transition-colors"
                >
                  contact@detailpros.ky
                </a>
              </>
            )}
          </div>
          
          <div className="flex items-center">
            {isMobile ? (
              <a 
                href="https://maps.app.goo.gl/igDHZFcRsJhJnp8E7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-detailpros-pink transition-colors"
                aria-label="Location: E33 Kingbird Warehouses, 64 Kingbird Drive, George Town"
              >
                <MapPin className="text-detailpros-pink h-4 w-4" />
              </a>
            ) : (
              <>
                <MapPin className="text-detailpros-pink h-4 w-4 mr-2" aria-hidden="true" />
                <a 
                  href="https://maps.app.goo.gl/igDHZFcRsJhJnp8E7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:inline hover:text-detailpros-pink transition-colors"
                >
                  E33 Kingbird Warehouses, 64 Kingbird Drive, George Town
                </a>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-4" aria-label="Social Media Links">
          <Link to="https://www.facebook.com/detailprosky" aria-label="Facebook" className="text-black hover:text-detailpros-pink transition-colors">
            <Facebook className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link to="https://www.instagram.com/detailprosofficial/" aria-label="Instagram" className="text-black hover:text-detailpros-pink transition-colors">
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link to="https://wa.me/13459299840" aria-label="WhatsApp" className="text-black hover:text-detailpros-pink transition-colors">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link to="https://www.tiktok.com/@detailprosky" aria-label="TikTok" className="text-black hover:text-detailpros-pink transition-colors">
            <TikTokIcon />
            <span className="sr-only">TikTok</span>
          </Link>
          <Link to="https://www.linkedin.com/company/detailpros/" aria-label="LinkedIn" className="text-black hover:text-detailpros-pink transition-colors">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
