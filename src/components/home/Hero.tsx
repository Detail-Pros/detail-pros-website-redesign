
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-cover bg-center bg-[url('/lovable-uploads/793cb934-f23d-4c7a-8fc1-9efee95045a6.png')] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <p className="text-xl md:text-2xl text-black mb-4 font-medium">
          Get a 5-Star Service at Home or at Our Shop
        </p>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-40 max-w-5xl mx-auto">
          Welcome To The Premier Detailing<br />
          Company Of The Cayman Islands
        </h1>
        
        <div className="flex justify-center mt-20">
          <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-10 py-6 text-lg rounded-[5px] font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
