
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether it's a full detail, ceramic coating, paint protection film, or window tinting, 
            our team is ready to provide premium service throughout Grand Cayman.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-8 py-6 text-lg rounded-[5px]">
              Book Now
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-[5px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Pink accent shape */}
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-detailpros-pink opacity-20 blur-3xl rounded-full -ml-20 -mb-16"></div>
    </section>
  );
};

export default CallToAction;
