
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-detailpros-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Detail<span className="text-detailpros-pink">Pros</span>
            </h3>
            <p className="mb-6">
              Premium mobile car and boat detailing services in the Cayman Islands. 
              Specializing in Ceramic Pro coating, STEK PPF, and window installation.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-detailpros-pink transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-detailpros-pink transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-detailpros-pink transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-detailpros-pink transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-detailpros-pink transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-detailpros-pink transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-detailpros-pink transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-detailpros-pink" />
                <span>+1 345-555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-detailpros-pink" />
                <span>info@detailproscayman.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-detailpros-pink mt-1" />
                <span>123 West Bay Road, Grand Cayman, Cayman Islands</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Detail Pros. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-detailpros-pink mr-4">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-detailpros-pink">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
