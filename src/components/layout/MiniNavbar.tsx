
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TikTok } from 'lucide-react';

const MiniNavbar = () => {
  return (
    <div className="bg-white py-2 px-4 text-black text-sm hidden md:block fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Phone className="text-detailpros-pink h-4 w-4 mr-2" />
            <span>Call Us</span>
            <span className="ml-2">+1 (345) 929-9840</span>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-detailpros-pink h-4 w-4 mr-2" />
            <span>Email Us</span>
            <span className="ml-2">contact@detailpros.ky</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-detailpros-pink h-4 w-4 mr-2" />
            <span>Our Address</span>
            <span className="ml-2">E33 Kingbird Warehouses, 64 Kingbird Drive, George Town</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="https://facebook.com" aria-label="Facebook" className="text-black hover:text-detailpros-pink transition-colors">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link to="https://instagram.com" aria-label="Instagram" className="text-black hover:text-detailpros-pink transition-colors">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link to="https://linkedin.com" aria-label="LinkedIn" className="text-black hover:text-detailpros-pink transition-colors">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link to="https://tiktok.com" aria-label="TikTok" className="text-black hover:text-detailpros-pink transition-colors">
            <TikTok className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
