
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CallToAction from "@/components/home/CallToAction";
import { CheckCircle, Shield } from "lucide-react";

const PaintProtection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Paint Protection <span className="text-detailpros-pink">Film</span>
          </h1>
          <p className="text-gray-400 mb-8">Advanced protection against road debris, scratches, and environmental damage</p>

          {/* STEK Hero Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h2 className="text-6xl font-bold text-white mb-8">STEK</h2>
              <p className="text-gray-300 mb-6">
                STEK paint protection film provides the ultimate defense for your vehicle's paint
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Self-healing technology repairs light scratches</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Hydrophobic surface repels water and contaminants</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Protects against rock chips and road debris</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">UV resistant - prevents fading and oxidation</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">Virtually invisible protection maintains factory appearance</p>
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
                  alt="STEK Paint Protection" 
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
            HOW DOES STEK PAINT PROTECTION FILM WORK?
          </h2>
        </div>
      </section>

      {/* Technology Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                STEK paint protection film consists of multiple layers of specialized materials designed to absorb impacts 
                and protect your vehicle's paint from damage. The outer layer features self-healing technology that repairs 
                minor scratches when exposed to heat.
              </p>
              
              <p className="text-gray-700 mb-6">
                The film is precision-cut using computer-aided design to ensure a perfect fit for your specific vehicle model. 
                Our certified installers apply the film with meticulous attention to detail, ensuring seamless coverage and 
                virtually invisible protection.
              </p>
              
              <p className="text-gray-700">
                Unlike traditional protective methods, STEK PPF preserves your vehicle's original appearance while providing 
                superior protection against road debris, rock chips, bug splatters, and environmental contaminants.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Paint Protection Film Application" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Packages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Paint Protection Film Coverage Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Partial Coverage */}
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">PARTIAL COVERAGE</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Front bumper protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Hood leading edge</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Side mirror coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>High-impact areas protected</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Premium Coverage */}
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">PREMIUM COVERAGE</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Full front end protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Complete hood & fenders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Side mirrors & A-pillars</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Headlight protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Full Vehicle Coverage */}
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">FULL VEHICLE COVERAGE</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Complete vehicle protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>All painted surfaces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>Maximum protection package</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-detailpros-pink"></span>
                    <span>10-year warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 inline-block pb-2 border-b-4 border-detailpros-pink">
            STEK PPF FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="text-center">
              <Shield className="mx-auto text-detailpros-pink mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">SELF-HEALING</h3>
              <p className="text-gray-600 mb-4">
                Advanced technology repairs minor scratches and swirl marks when exposed to heat
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="mx-auto text-detailpros-pink mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">HYDROPHOBIC</h3>
              <p className="text-gray-600 mb-4">
                Water-repellent surface makes cleaning easier and prevents water spotting
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="mx-auto text-detailpros-pink mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">SUPERIOR CLARITY</h3>
              <p className="text-gray-600">
                Crystal clear finish preserves your vehicle's original appearance without yellowing
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
              <h3 className="font-bold mb-2">ROCK CHIP PROTECTION</h3>
              <p className="text-sm text-gray-400">
                Absorbs impacts from road debris and prevents paint damage
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">STAIN RESISTANT</h3>
              <p className="text-sm text-gray-400">
                Resists staining from chemicals, oils, and environmental contaminants
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">PRECISE FIT</h3>
              <p className="text-sm text-gray-400">
                Computer-cut for your specific vehicle model for seamless coverage
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">PRESERVES VALUE</h3>
              <p className="text-sm text-gray-400">
                Maintains your vehicle's appearance and resale value
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">UV PROTECTION</h3>
              <p className="text-sm text-gray-400">
                Prevents paint fading and oxidation from sun exposure
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-detailpros-pink">Icon</span>
              </div>
              <h3 className="font-bold mb-2">WARRANTY</h3>
              <p className="text-sm text-gray-400">
                Backed by up to 10 years warranty for peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Protect Your Investment Today
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

export default PaintProtection;
