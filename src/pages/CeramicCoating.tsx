
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CallToAction from "@/components/home/CallToAction";
import { CheckCircle, Wrench } from "lucide-react";

const CeramicCoating = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Automotive Paint Protection
          </h1>
          <p className="text-gray-400 mb-8">Ceramic Pro is a Multi-Layerable, Clear, Liquid Nano-Ceramic Coating</p>

          {/* ION Hero Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h2 className="text-6xl font-bold text-white mb-8">ION</h2>
              <p className="text-gray-300 mb-6">
                Ceramic Pro ION is a revolutionary ceramic coating for automotive surfaces
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Super hydrophobic effect - extreme water repellency</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Anti-graffiti effect - highly resistant to chemicals</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">UV resistance - protection against harmful rays</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Thermal resistance from -50°C to +750°C</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Advanced hardness - long-lasting protection</p>
                </li>
              </ul>

              <Button className="bg-detailpros-pink hover:bg-opacity-90">
                Learn More
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Ceramic Pro ION" 
                  className="max-w-[300px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-detailpros-pink py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            HOW DOES CERAMIC PRO ION TECHNOLOGY WORK?
          </h2>
        </div>
      </section>

      {/* Technology Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Ceramic Pro ION uses advanced nanotechnology to create a permanent protective layer on your vehicle's surfaces. 
                Unlike traditional waxes and sealants that break down over time, Ceramic Pro ION chemically bonds with the factory paint.
              </p>
              
              <p className="text-gray-700 mb-6">
                The liquid nano-ceramic forms an extremely durable shield against environmental contaminants, UV rays, bird droppings, 
                tree sap, and road salt. It also creates a hydrophobic surface that repels water and makes cleaning your vehicle effortless.
              </p>
              
              <p className="text-gray-700">
                After application, the coating needs time to cure, creating a hard, glass-like finish that provides years of protection 
                depending on the package selected. The high gloss appearance enhances the vehicle's color depth and clarity.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Ceramic Coated Wheel" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ceramic Pro ION Coating Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ION Package */}
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">ION PACKAGE</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>1 Layer of Ceramic Pro ION</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Professional Application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>2-Year Warranty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>High Gloss Finish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Diamond ION Package */}
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">DIAMOND ION PACKAGE</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>2 Layers of Ceramic Pro ION</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Professional Application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>5-Year Warranty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Enhanced Durability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Ultimate ION Package */}
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">ULTIMATE ION PACKAGE</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>4 Layers of Ceramic Pro ION</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Professional Application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Lifetime Warranty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Maximum Protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The ION Coating System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 inline-block pb-2 border-b-4 border-detailpros-pink">
            THE ION COATING SYSTEM
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">ION TOP COAT</h3>
              <p className="text-gray-600 mb-4">
                The outermost layer provides exceptional gloss, hydrophobicity, and scratch resistance.
                Creates a slick surface that repels water, dirt, and contaminants.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">ION BASE COAT</h3>
              <p className="text-gray-600 mb-4">
                Forms the foundation of the coating system with strong adhesion properties.
                Creates a permanent bond with the vehicle's clear coat for long-lasting durability.
              </p>
            </div>
            
            <div className="text-center">
              <Wrench className="mx-auto text-detailpros-pink mb-4" size={48} />
              <p className="text-gray-600">
                Professional installation ensures optimal performance and warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">EASIER WASHING</h3>
              <p className="text-sm text-gray-400">
                Super hydrophobic effect makes cleaning simple and quick
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">CHEMICAL RESISTANCE</h3>
              <p className="text-sm text-gray-400">
                Protects against harsh chemicals, salt, and environmental contaminants
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">PERMANENCE</h3>
              <p className="text-sm text-gray-400">
                Forms a permanent bond with the factory paint for lasting protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">SCRATCH RESISTANT</h3>
              <p className="text-sm text-gray-400">
                Superior hardness protects against light scratches and swirl marks
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">ENHANCED GLOSS</h3>
              <p className="text-sm text-gray-400">
                Dramatically enhances paint depth and clarity for showroom shine
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">GLOSSY</h3>
              <p className="text-sm text-gray-400">
                Creates a glass-like shine that enhances your vehicle's appearance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Book Your Ceramic Pro Coating
          </h2>
          <Button className="bg-detailpros-pink hover:bg-opacity-90 px-8">
            Contact Us
          </Button>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default CeramicCoating;
