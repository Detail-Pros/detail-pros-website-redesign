
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-cover bg-center bg-[url('/images/hero-bg.jpg')] overflow-hidden">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Premium <span className="text-detailpros-pink">Auto Care</span> in the Cayman Islands
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            Mobile car and boat detailing, Ceramic Pro coating, STEK PPF and window tinting. 
            Serving all of Grand Cayman with exceptional service and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-8 py-6 text-lg rounded-[5px]">
              Book Now
            </Button>
            <Link to="/services">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-[5px]">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Pink accent shape */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-1/4 bg-detailpros-pink opacity-20 blur-3xl rounded-full -mr-20 -mb-16"></div>
    </div>
  );
};

export default Hero;
