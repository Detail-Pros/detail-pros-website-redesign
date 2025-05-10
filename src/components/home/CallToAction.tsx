
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return <section className="relative py-24 overflow-hidden bg-gray-100">
      {/* Background with overlay - changed from black to light grey */}
      <div className="absolute inset-0 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-100/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Vehicle or Vessel?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">Whether it's automotive, marine, or other surfaces - our team is ready to provide premium coating services throughout the Cayman Islands.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://book.detailpros.ky/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-[5px] text-sm font-medium bg-detailpros-pink hover:bg-opacity-90 text-white h-14 px-8">
              Book Now
            </a>
            <Link to="/contact">
              <Button variant="outline" className="text-gray-900 border-gray-900 hover:bg-gray-900/10 h-14 px-8 rounded-[5px] w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Pink accent shape */}
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-detailpros-pink opacity-20 blur-3xl rounded-full -ml-20 -mb-16"></div>
    </section>;
};

export default CallToAction;
