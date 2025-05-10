
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add offset for mini navbar height (approximately 36px)
      if (window.scrollY > 46) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-0 md:mt-9 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-detailpros-black">
            Detail<span className="text-detailpros-pink">Pros</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            About Our Company
          </Link>
          <Link to="/services" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Detailing
          </Link>
          <Link to="/ceramic-coating" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Ceramic Coating
          </Link>
          <Link to="/paint-protection" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Paint Protection Film
          </Link>
          <Link to="/window-tinting" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Window Tinting
          </Link>
          <Link to="/contact" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Contact
          </Link>
          <Link to="/careers" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Careers
          </Link>
          <Link to="/faq" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-6 py-2 rounded-full">
            Book Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-detailpros-black"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/about" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              About Our Company
            </Link>
            <Link to="/services" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Detailing
            </Link>
            <Link to="/ceramic-coating" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Ceramic Coating
            </Link>
            <Link to="/paint-protection" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Paint Protection Film
            </Link>
            <Link to="/window-tinting" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Window Tinting
            </Link>
            <Link to="/contact" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/careers" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Careers
            </Link>
            <Link to="/faq" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              FAQ
            </Link>
            <Button className="bg-detailpros-pink hover:bg-opacity-90 w-full rounded-full" onClick={toggleMenu}>
              Book Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
