
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-detailpros-black">
            Detail<span className="text-detailpros-pink">Pros</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Home
          </Link>
          <Link to="/services" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Services
          </Link>
          <Link to="/gallery" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Gallery
          </Link>
          <Link to="/about" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-detailpros-pink hover:bg-opacity-90">
            Book Now
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
            <Link to="/" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/gallery" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/about" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="bg-detailpros-pink hover:bg-opacity-90 w-full" onClick={toggleMenu}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
