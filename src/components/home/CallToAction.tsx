
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-detailpros-black">
        <div className="absolute inset-0 bg-gradient-to-r from-detailpros-black to-detailpros-black/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether it's a full detail, ceramic coating, or window tinting, our team is ready to provide premium service throughout Grand Cayman.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-8 py-6 text-lg">
              Book Now
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
