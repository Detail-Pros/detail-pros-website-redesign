
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import CallToAction from "@/components/home/CallToAction";
import { Star, Play } from "lucide-react";

const CeramicCoatingMarine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Marine Surface Protection
          </h1>
          <p className="text-gray-400 mb-8">Industry leading solutions by Ceramic Pro</p>

          {/* Video placeholder */}
          <div className="mt-8 mb-12 relative aspect-video max-w-4xl mx-auto bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/384ffb1a-2aa0-4dbe-940d-34dd72b25512.png" 
              alt="Marine vessel on water" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <button className="relative z-10 rounded-full bg-detailpros-pink/90 p-4 text-white hover:bg-detailpros-pink transition-colors">
              <Play size={40} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 uppercase">The Most Complete Protective Coating for the Marine Industry</h2>
            
            <p className="text-gray-700 mb-8">
              Ceramic Pro Marine provides the ultimate protection for all your marine vessels. Our proprietary formula creates a permanent bond with gel coat, fiberglass, and painted surfaces to protect against salt water, UV rays, oxidation, and other harsh elements.
            </p>

            <div className="flex justify-center mb-16">
              <img 
                src="/lovable-uploads/b5a716db-dbd2-4a1c-99f4-8f813477aa16.png" 
                alt="Ceramic Pro Logo" 
                className="h-24 w-auto"
              />
            </div>

            {/* Comparison Table */}
            <h2 className="text-3xl font-bold mb-6 text-center uppercase">Ceramic Pro Compared to the Rest</h2>
            
            <div className="overflow-x-auto mb-16">
              <Table className="border-collapse">
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-white text-black font-bold">PROTECTIVE QUALITIES</TableHead>
                    <TableHead className="bg-detailpros-pink text-black font-bold">CERAMIC PRO MARINE</TableHead>
                    <TableHead className="bg-gray-700 text-white font-bold">TRADITIONAL WAX</TableHead>
                    <TableHead className="bg-purple-900 text-white font-bold">POLYMER SEALANTS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { quality: 'UV PROTECTION', ceramic: 5, wax: 0, polymer: 3 },
                    { quality: 'OXIDATION RESISTANCE', ceramic: 5, wax: 0, polymer: 2, highlight: true },
                    { quality: 'CORROSION RESISTANCE', ceramic: 5, wax: 0, polymer: 1 },
                    { quality: 'STAIN RESISTANCE', ceramic: 5, wax: 1, polymer: 2, highlight: true },
                    { quality: 'FOULING RELEASE', ceramic: 5, wax: 0, polymer: 0 },
                    { quality: 'ALL SURFACE PROTECTION', ceramic: 5, wax: 1, polymer: 3, highlight: true },
                    { quality: 'DURABILITY', ceramic: 5, wax: 1, polymer: 3 },
                    { quality: 'GLOSS', ceramic: 5, wax: 3, polymer: 4, highlight: true }
                  ].map((row, i) => (
                    <TableRow key={i} className={row.highlight ? 'bg-amber-300' : 'bg-white'}>
                      <TableCell className="font-bold">{row.quality}</TableCell>
                      <TableCell>
                        <div className="flex">
                          {[...Array(row.ceramic)].map((_, i) => (
                            <Star key={i} fill="#E20882" stroke="none" className="text-detailpros-pink" />
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex">
                          {[...Array(row.wax)].map((_, i) => (
                            <Star key={i} fill="#E20882" stroke="none" className="text-detailpros-pink" />
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex">
                          {[...Array(row.polymer)].map((_, i) => (
                            <Star key={i} fill="#E20882" stroke="none" className="text-detailpros-pink" />
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-gray-700 mb-4">
                  Ceramic Pro is a multi-layerable, clear, liquid nano-ceramic coating. When cured, this technology transforms into a rigid, super-structure of nano-glass, becoming the sacrificial layer of protection on your boat's gel coat, fiberglass, or painted surfaces.
                </p>
                <p className="text-gray-700">
                  The formulation creates a permanent bond with surfaces and will not wash off or break down. It is a protective layer that provides resistance against minor scratches, chemical etching, fading from UV rays, and dramatically increases hydrophobic properties.
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Most importantly for marine vessels, Ceramic Pro creates a surface where fouling from saltwater elements has a difficult time adhering to, making cleaning and maintenance far easier than untreated surfaces.
                </p>
                <p className="text-gray-700">
                  Our professional grade ceramic coating outlasts any wax or sealant on the market today with proper care and maintenance, allowing your marine vessel to look brilliant season after season.
                </p>
              </div>
            </div>

            {/* Unmatched Protection */}
            <h2 className="text-3xl font-bold mb-8 text-center uppercase text-detailpros-pink">Unmatched Protection</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img src="/lovable-uploads/c4a2be50-28c3-47bd-a671-864704716635.png" alt="UV Ray Protection" className="h-32 w-full object-cover rounded-lg" />
                </div>
                <h3 className="font-bold uppercase mb-2">UV Rays</h3>
                <p className="text-sm text-gray-600">Protection from sun damage and fading</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img src="/lovable-uploads/718d90a6-cd60-4715-8166-b43822957b53.png" alt="Salt Protection" className="h-32 w-full object-cover rounded-lg" />
                </div>
                <h3 className="font-bold uppercase mb-2">Salt</h3>
                <p className="text-sm text-gray-600">Guard against corrosive saltwater damage</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img src="/lovable-uploads/b28bf0ac-4224-46c3-b501-1629697844ac.png" alt="Fouling Protection" className="h-32 w-full object-cover rounded-lg" />
                </div>
                <h3 className="font-bold uppercase mb-2">Fouling</h3>
                <p className="text-sm text-gray-600">Reduces marine growth adhesion</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img src="/lovable-uploads/f7fddf14-6979-4191-bd0a-06974de834c9.png" alt="Water Protection" className="h-32 w-full object-cover rounded-lg" />
                </div>
                <h3 className="font-bold uppercase mb-2">Water</h3>
                <p className="text-sm text-gray-600">Extreme hydrophobic properties for easy cleaning</p>
              </div>
            </div>

            {/* The Ceramic Pro System */}
            <h2 className="text-3xl font-bold mb-8 text-center uppercase">The Ceramic Pro System</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              <div className="flex-1 text-center">
                <img src="/lovable-uploads/ae812a04-c792-4b7e-96f7-93faa6fe4cb2.png" alt="Ceramic Pro Top Coat" className="h-40 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Ceramic Pro Top Coat</h3>
                <p className="text-sm text-gray-600">Forms outermost protection layer</p>
              </div>
              
              <div className="flex-1 text-center">
                <img src="/lovable-uploads/c55a3379-71dc-43fa-8ea3-247b8b19a688.png" alt="Ceramic Pro Base Coat" className="h-40 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Ceramic Pro Base Coat</h3>
                <p className="text-sm text-gray-600">Creates foundation bonding layer</p>
              </div>
              
              <div className="flex-1 text-center">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <h3 className="font-bold uppercase mb-2">Paint or Gelcoat Surface</h3>
                  <p className="text-sm text-gray-600">Your marine vessel's original surface</p>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <h2 className="text-3xl font-bold mb-8 text-center uppercase">Our Professional Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 shadow-lg">
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/8a42cd25-617b-461c-a1aa-0f860b905d6a.png" alt="Surface Preparation" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold uppercase mb-2">Surface Preparation</h3>
                <p className="text-sm text-gray-600">
                  Thorough cleaning and decontamination of all surfaces to ensure proper bonding of the ceramic coating.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg">
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/04e9143b-beea-48c1-961e-b5320a504e83.png" alt="Coating Application" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold uppercase mb-2">Coating Application</h3>
                <p className="text-sm text-gray-600">
                  Professional application of multiple layers of ceramic coating to all exterior surfaces.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg">
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/067b54c7-f5da-4119-b51d-38e55facd73e.png" alt="Curing Process" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold uppercase mb-2">Curing Process</h3>
                <p className="text-sm text-gray-600">
                  Controlled curing environment to ensure optimal hardness and longevity of the ceramic coating.
                </p>
              </Card>
            </div>

            {/* Maintenance */}
            <h2 className="text-3xl font-bold mb-8 text-center uppercase">Maintenance Made Simple</h2>
            
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <img src="/lovable-uploads/8eac9a14-0b99-4217-bc29-1ac0beb35dee.png" alt="Easy Maintenance" className="rounded-lg w-full h-64 object-cover" />
              </div>
              <p className="text-gray-700">
                With Ceramic Pro Marine coating, maintaining your vessel's appearance becomes remarkably easy. The hydrophobic surface repels water and contaminants, making cleaning a breeze. Simply rinse with water and use a mild soap when needed - no harsh chemicals or excessive scrubbing required.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold mb-6 uppercase">Book Your Ceramic Pro Marine Coating</h2>
              <Button className="bg-detailpros-pink text-white px-8 py-6 text-lg hover:bg-opacity-90 h-auto">
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default CeramicCoatingMarine;
