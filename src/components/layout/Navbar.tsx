
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
      if (window.scrollY > 10) {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Detail<span className="text-detailpros-pink">Pros</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-white hover:text-detailpros-pink transition-colors">
            Home
          </Link>
          <Link to="/services" className="font-medium text-white hover:text-detailpros-pink transition-colors">
            Services
          </Link>
          <Link to="/gallery" className="font-medium text-white hover:text-detailpros-pink transition-colors">
            Gallery
          </Link>
          <Link to="/about" className="font-medium text-white hover:text-detailpros-pink transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-white hover:text-detailpros-pink transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-6 py-2 rounded-full">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium text-white hover:text-detailpros-pink transition-colors py-2 border-b border-white/10" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="font-medium text-white hover:text-detailpros-pink transition-colors py-2 border-b border-white/10" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/gallery" className="font-medium text-white hover:text-detailpros-pink transition-colors py-2 border-b border-white/10" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/about" className="font-medium text-white hover:text-detailpros-pink transition-colors py-2 border-b border-white/10" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="font-medium text-white hover:text-detailpros-pink transition-colors py-2 border-b border-white/10" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="bg-detailpros-pink hover:bg-opacity-90 w-full rounded-full" onClick={toggleMenu}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
