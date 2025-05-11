import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import { Car, Brush, DropletIcon, Check } from "lucide-react";

const Index = () => {
  return (
    <>
      <Hero />
      <Services />
      <section className="text-white py-16 relative flex justify-center items-center">
        {/* Gif Background */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <img 
            src="https://red-extensive-lungfish-931.mypinata.cloud/ipfs/bafybeigf5vkcxyqosbj2mmwwpqbvcrnxvbyuvnqjjcrizdqunfqjhiouye" 
            alt="Ceramic Pro ION Background" 
            className="w-auto h-auto object-contain z-0"
          />
        </div>
      </section>
      
      {/* Mobile Detailing */}
        <section id="detailing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Car className="text-detailpros-pink mr-3" size={28} />
                  <h2 className="text-3xl font-bold">Mobile Detailing</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Our mobile detailing service brings professional car and boat care directly to your location across Grand Cayman.
                  We use premium products and techniques to restore and maintain your vehicle's appearance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Exterior Detailing</h3>
                      <p className="text-sm text-gray-600">
                        Hand wash, clay bar treatment, paint decontamination, polish, and protective wax or sealant application.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Interior Detailing</h3>
                      <p className="text-sm text-gray-600">
                        Deep cleaning of all surfaces, steam cleaning, leather conditioning, odor elimination, and fabric protection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Paint Correction</h3>
                      <p className="text-sm text-gray-600">
                        Professional removal of swirl marks, scratches, water spots, and oxidation to restore paint to showroom quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Marine Detailing</h3>
                      <p className="text-sm text-gray-600">
                        Specialized boat detailing with salt-specific treatments, hull cleaning, teak restoration, and protective coatings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="Mobile Detailing" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Ceramic Pro Coating */}
        <section id="ceramic-coating" className="py-20 bg-detailpros-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="Ceramic Pro Coating" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <DropletIcon className="text-detailpros-pink mr-3" size={28} />
                  <h2 className="text-3xl font-bold">Ceramic Pro Coating</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  As authorized installers of Ceramic Pro in the Cayman Islands, we provide industry-leading ceramic 
                  coating solutions that offer unparalleled protection against the harsh Caribbean elements.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">9H Hardness Protection</h3>
                      <p className="text-sm text-gray-600">
                        Superior scratch resistance and protection with the hardest coating available in the automotive industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Hydrophobic Surface</h3>
                      <p className="text-sm text-gray-600">
                        Extreme water repellency that prevents water spots, makes cleaning easier, and maintains a cleaner vehicle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">UV & Chemical Resistance</h3>
                      <p className="text-sm text-gray-600">
                        Protection from the Caribbean sun's UV rays, salt air, and environmental contaminants that damage paint.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Warranty Options</h3>
                      <p className="text-sm text-gray-600">
                        Various packages available with warranties ranging from 2 years to lifetime protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PPF & Window Tinting */}
        <section id="ppf-tinting" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Brush className="text-detailpros-pink mr-3" size={28} />
                  <h2 className="text-3xl font-bold">PPF & Window Tinting</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  We're certified installers of STEK paint protection film and high-quality window tinting, 
                  providing maximum protection from rock chips, scratches, and the Caribbean sun.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">STEK Paint Protection Film</h3>
                      <p className="text-sm text-gray-600">
                        Self-healing film that protects against rock chips, scratches, and environmental damage while maintaining paint clarity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Custom Installation</h3>
                      <p className="text-sm text-gray-600">
                        Precision cut and installed PPF for full vehicle coverage or targeted high-impact areas like bumpers and hood.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Ceramic Window Tinting</h3>
                      <p className="text-sm text-gray-600">
                        Advanced ceramic technology that blocks up to 99% of UV rays and significantly reduces interior heat.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Legal Compliance</h3>
                      <p className="text-sm text-gray-600">
                        All window tinting is installed to comply with Cayman Islands legal requirements while maximizing protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="PPF and Window Tinting" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Index;
