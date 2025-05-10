
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
    <path d="M17.5 14.1666L13.5833 10.25L17.5 6.33332" />
    <path d="M6.5 19.8333C8.98218 19.8333 10.9167 17.8989 10.9167 15.4167C10.9167 12.9345 8.98218 11 6.5 11C4.01782 11 2.08334 12.9345 2.08334 15.4167C2.08334 16.4136 2.4253 17.339 3 18.0833L2.5 21.5L6 20.9167C6.72136 21.4648 7.61662 21.8333 8.58334 21.8333" />
    <path d="M14.6667 6.33332H21.5" />
    <path d="M14.6667 10.25H21.5" />
    <path d="M14.6667 14.1666H21.5" />
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
