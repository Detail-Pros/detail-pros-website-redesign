import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

// WhatsApp icon component 
const WhatsAppIcon = () => (
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
  >
    <path d="M17.4 14.25l-4-4-4 4" />
    <path d="M12 3a9 9 0 1 0 9 9c0-4.95-4.05-9-9-9zm-.05 4c-2.75 0-5 2.25-5 5 0 1.07.32 2.05.92 2.82l-1.07 3.18 3.25-1.02c.75.55 1.65.85 2.6.85 2.77 0 5.02-2.23 5.02-5 0-2.72-2.25-4.95-5-4.95l.28.12z" />
  </svg>
);

const MiniNavbar = () => {
  return (
    <div className="bg-white h-9 flex items-center text-black text-xs hidden md:flex fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Phone className="text-detailpros-pink h-4 w-4 mr-2" />
            <span className="text-xs">+1 (345) 929-9840</span>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-detailpros-pink h-4 w-4 mr-2" />
            <span className="text-xs">contact@detailpros.ky</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-detailpros-pink h-4 w-4 mr-2" />
            <span className="text-xs">E33 Kingbird Warehouses, 64 Kingbird Drive, George Town</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="https://facebook.com" aria-label="Facebook" className="text-black hover:text-detailpros-pink transition-colors">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link to="https://instagram.com" aria-label="Instagram" className="text-black hover:text-detailpros-pink transition-colors">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link to="https://whatsapp.com" aria-label="WhatsApp" className="text-black hover:text-detailpros-pink transition-colors">
            <WhatsAppIcon />
          </Link>
          <Link to="https://tiktok.com" aria-label="TikTok" className="text-black hover:text-detailpros-pink transition-colors">
            <TikTokIcon />
          </Link>
          <Link to="https://linkedin.com" aria-label="LinkedIn" className="text-black hover:text-detailpros-pink transition-colors">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
