
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-0 md:mt-9 bg-white ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-detailpros-black">
            Detail<span className="text-detailpros-pink">Pros</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors bg-transparent hover:bg-transparent">Company <ChevronDown className="h-4 w-4" /></NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block p-2 hover:bg-gray-100 rounded-md">
                          About Our Company
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/careers" className="block p-2 hover:bg-gray-100 rounded-md">
                          Careers
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/gallery" className="block p-2 hover:bg-gray-100 rounded-md">
                          Gallery
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/services" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Detailing
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors bg-transparent hover:bg-transparent">Ceramic Coating <ChevronDown className="h-4 w-4" /></NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/ceramic-coating" className="block p-2 hover:bg-gray-100 rounded-md">
                          Overview
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/ceramic-coating/packages" className="block p-2 hover:bg-gray-100 rounded-md">
                          Packages
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/paint-protection" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors">
            Paint Protection Film
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors bg-transparent hover:bg-transparent">Window Tinting <ChevronDown className="h-4 w-4" /></NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/window-tinting" className="block p-2 hover:bg-gray-100 rounded-md">
                          Overview
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/window-tinting/options" className="block p-2 hover:bg-gray-100 rounded-md">
                          Tint Options
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
            <Link to="/" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Home
            </Link>
            
            {/* Company Dropdown */}
            <div className="py-2 border-b border-gray-100">
              <div className="font-medium text-detailpros-black mb-2">Company</div>
              <div className="pl-4">
                <Link to="/about" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  About Our Company
                </Link>
                <Link to="/careers" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  Careers
                </Link>
                <Link to="/gallery" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  Gallery
                </Link>
              </div>
            </div>
            
            <Link to="/services" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Detailing
            </Link>
            
            {/* Ceramic Coating Dropdown */}
            <div className="py-2 border-b border-gray-100">
              <div className="font-medium text-detailpros-black mb-2">Ceramic Coating</div>
              <div className="pl-4">
                <Link to="/ceramic-coating" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  Overview
                </Link>
                <Link to="/ceramic-coating/packages" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  Packages
                </Link>
              </div>
            </div>
            
            <Link to="/paint-protection" className="font-medium text-detailpros-black hover:text-detailpros-pink transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>
              Paint Protection Film
            </Link>
            
            {/* Window Tinting Dropdown */}
            <div className="py-2 border-b border-gray-100">
              <div className="font-medium text-detailpros-black mb-2">Window Tinting</div>
              <div className="pl-4">
                <Link to="/window-tinting" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  Overview
                </Link>
                <Link to="/window-tinting/options" className="block py-1 text-sm text-detailpros-black hover:text-detailpros-pink" onClick={toggleMenu}>
                  Tint Options
                </Link>
              </div>
            </div>
            
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
