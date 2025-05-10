
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CallToAction from "@/components/home/CallToAction";
import { CheckCircle, Droplets, Diamond, CircleDashed, TestTube } from "lucide-react";

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
                  src="/lovable-uploads/5fd62ae9-5f89-4ae9-b537-a170491bb7e1.png" 
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
                src="/lovable-uploads/a5a1ab08-d604-4d23-a45b-67f47f6f883e.png" 
                alt="Ceramic Pro Application" 
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* ION Package */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/f319da16-825f-4ae5-9dce-a16feecc0ef1.png" 
                alt="ION Package" 
                className="w-full max-w-xs h-auto"
              />
            </div>
            
            {/* Diamond ION Package */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/f60a8d3f-bdad-4bb0-a272-cf9fd039f979.png" 
                alt="Diamond ION Package" 
                className="w-full max-w-xs h-auto"
              />
            </div>
            
            {/* Ultimate ION Package */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/0e4212a8-f19b-41f2-9964-659a65b5197e.png" 
                alt="Ultimate ION Package" 
                className="w-full max-w-xs h-auto"
              />
            </div>
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
            <div className="text-left">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/c55a3379-71dc-43fa-8ea3-247b8b19a688.png" 
                  alt="ION Top Coat" 
                  className="h-40 w-auto"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Forms the foundation of the coating system with strong adhesion properties.
                Creates a permanent bond with the vehicle's clear coat for long-lasting durability.
              </p>
            </div>
            
            <div className="text-left">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/ae812a04-c792-4b7e-96f7-93faa6fe4cb2.png" 
                  alt="ION Base Coat" 
                  className="h-40 w-auto"
                />
              </div>
              <p className="text-gray-600 mb-4">
                The outermost layer provides exceptional gloss, hydrophobicity, and scratch resistance.
                Creates a slick surface that repels water, dirt, and contaminants.
              </p>
            </div>
            
            <div className="text-left">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/5f008ea8-ecf8-41e0-ab49-90ee96b9c780.png" 
                  alt="Authorized Dealer" 
                  className="h-60 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/83ec7181-a1fa-422c-99f1-d9fb843d897a.png" 
                  alt="Application Icon" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-bold mb-2">EASIER WASHING</h3>
              <p className="text-sm text-gray-400">
                Super hydrophobic effect makes cleaning simple and quick
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/eff88072-8e95-4cea-a9c1-b89f33e18aca.png" 
                  alt="Gloss Icon" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-bold mb-2">CHEMICAL RESISTANCE</h3>
              <p className="text-sm text-gray-400">
                Protects against harsh chemicals, salt, and environmental contaminants
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/b7471894-d0a9-41ef-8727-f785d9521f03.png" 
                  className="w-16 h-16"
                  alt="Structure Icon" 
                />
              </div>
              <h3 className="font-bold mb-2">PERMANENCE</h3>
              <p className="text-sm text-gray-400">
                Forms a permanent bond with the factory paint for lasting protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/67541d11-eda9-40ec-b83b-b2ef62a98d71.png" 
                  className="w-16 h-16"
                  alt="Compression Icon" 
                />
              </div>
              <h3 className="font-bold mb-2">SCRATCH RESISTANT</h3>
              <p className="text-sm text-gray-400">
                Superior hardness protects against light scratches and swirl marks
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/3ec55c13-c6df-4f4e-a230-1e7bfa59d3f6.png" 
                  className="w-16 h-16"
                  alt="Perfume Icon" 
                />
              </div>
              <h3 className="font-bold mb-2">ENHANCED GLOSS</h3>
              <p className="text-sm text-gray-400">
                Dramatically enhances paint depth and clarity for showroom shine
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/2ea135a4-6bba-41aa-8f9d-4f5537cfc701.png" 
                  className="w-16 h-16"
                  alt="Water Drops Icon" 
                />
              </div>
              <h3 className="font-bold mb-2">HYDROPHOBIC</h3>
              <p className="text-sm text-gray-400">
                Creates a water-repelling surface that prevents water spots
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
