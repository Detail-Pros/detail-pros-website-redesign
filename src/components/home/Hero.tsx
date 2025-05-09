
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center bg-hero-pattern bg-cover bg-center overflow-hidden">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-detailpros-pink text-white px-4 py-1 text-sm rounded-full mb-4">
            Cayman Islands' Premier Detailing Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Perfection In <span className="text-detailpros-pink">Every Detail</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Mobile car and boat detailing, Ceramic Pro coating, STEK PPF and window installation. 
            Serving all of Grand Cayman with premium automotive care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-8 py-6 text-lg">
              Book A Service
            </Button>
            <Link to="/services">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
