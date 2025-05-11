
import CallToAction from "@/components/home/CallToAction";
import { Check, Smartphone } from "lucide-react";

const WindowTinting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Window <span className="text-detailpros-pink">Tinting</span>
            </h1>
            <p className="text-lg mb-6">
              Our premium window tinting services provide UV protection, heat rejection, and privacy for your vehicle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <Smartphone className="text-detailpros-pink mr-3" size={24} />
                  <h3 className="text-xl font-bold">Automotive Tinting</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our premium ceramic window films block up to 99% of harmful UV rays while reducing interior heat.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Heat reduction up to 70%</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Legal shade options</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Lifetime warranty available</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <Smartphone className="text-detailpros-pink mr-3" size={24} />
                  <h3 className="text-xl font-bold">Residential & Commercial</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Improve energy efficiency and comfort in your home or business with our window films.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Energy cost savings</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Furniture and flooring protection</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Enhanced privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
    </div>
  );
};

export default WindowTinting;
