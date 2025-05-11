
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-[url('/lovable-uploads/793cb934-f23d-4c7a-8fc1-9efee95045a6.png')] overflow-hidden"
      aria-label="Hero Section"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mt-[-50px] md:mt-[-75px] lg:mt-[-100px]">
          <p className="text-xl md:text-2xl text-black mb-4 font-medium hero-text" itemProp="description">
            Cayman Islands' Premier Mobile Auto, Boat & Plane Detailing Service
          </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-10 max-w-5xl mx-auto hero-text" itemProp="name">
            Welcome To The Premier Detailing<br />
            Company Of The Cayman Islands
          </h1>
          
          <div className="hidden">
            <span itemProp="keywords">car detailing cayman islands, boat detailing cayman, ceramic coating cayman, paint protection film cayman, window tinting cayman</span>
            <span itemProp="serviceArea" itemScope itemType="https://schema.org/GeoCircle">
              <meta itemProp="geoMidpoint" content="19.2869;-81.3673" />
              <meta itemProp="geoRadius" content="25" />
              <span itemProp="address">Grand Cayman, Cayman Islands</span>
            </span>
            <meta itemProp="provider" content="Detail Pros Cayman" />
          </div>
        </div>
        
        <div className="flex justify-center mt-[300px] md:mt-[350px] lg:mt-[400px]">
          <Link to="/services" aria-label="Learn more about our detailing services">
            <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-10 py-6 text-lg rounded-[5px] font-medium">
              Discover Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
