import CallToAction from "@/components/home/CallToAction";
import { Car, Brush, DropletIcon, Check, Sparkles, Zap, Armchair, CigaretteOff, Dog, Trash, Droplet, Trees, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Detailing = () => {
  const [searchAddOns, setSearchAddOns] = useState("");
  
  // Filter function for add-ons
  const filterAddOns = (items: any[], searchTerm: string) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // Exterior Add-ons data
  const exteriorAddOns = [
    { name: "Ceramic Pro LUX", icon: <Droplet className="w-5 h-5 text-detailpros-pink" />, tag: "Ceramic Pro", price: "$500.00" },
    { name: "Undercarriage Wash", icon: <Car className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$25.00" },
    { name: "Mold Remediation", icon: <Trash className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$75.00" },
    { name: "Tree Sap Removal", icon: <Trees className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$75.00" },
    { name: "Clay Bar Treatment", icon: <Brush className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$100.00" },
    { name: "Engine Wash", icon: <Sparkles className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$100.00" },
    { name: "Headlight Restoration", icon: <Zap className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$150.00" },
    { name: "Plastic Trim Restoration", icon: <Shield className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$75.00" },
    { name: "Iron Decontamination", icon: <Droplet className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$150.00" },
    { name: "Wax", icon: <Trash className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$60.00" },
    { name: "Polish and Wax", icon: <Trash className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$125.00" },
    { name: "3 Month Sealant", icon: <Shield className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$150.00" },
    { name: "One Step Paint Correction", icon: <Brush className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$100.00" },
    { name: "6 Month Ceramic Coating", icon: <Droplet className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$350.00" },
  ];

  // Interior Add-ons data
  const interiorAddOns = [
    { name: "Pet Hair - 15 mins extra", icon: <Dog className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$10.00" },
    { name: "Sand Removal - 30 mins extra", icon: <Trash className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$15.00" },
    { name: "Seat Shampoo - 1 Hour Extra", icon: <Armchair className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$100.00" },
    { name: "Floor Mat Shampoo - 15 Mins Extra", icon: <Trash className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$25.00" },
    { name: "Seat + Floor Mat Shampoo - 1 Hour Extra", icon: <Armchair className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$120.00" },
    { name: "Ozone Clean - 30 Mins Extra", icon: <CigaretteOff className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$25.00" },
    { name: "Leather Conditioning - 15 Mins Extra", icon: <Armchair className="w-5 h-5 text-detailpros-pink" />, tag: "Service", price: "$25.00" },
  ];

  // Filter add-ons based on search
  const filteredExteriorAddOns = filterAddOns(exteriorAddOns, searchAddOns);
  const filteredInteriorAddOns = filterAddOns(interiorAddOns, searchAddOns);
  
  return (
    <div className="min-h-screen flex flex-col">
        {/* Services Header */}
        <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Auto Detailing Services
            </h1>
            <p className="text-sm text-gray-400">
               Luxury detailing for your vehicle, delivered to your doorstep with precision and care.
            </p>
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

        {/* Mobile Detailing Services & Pricing Section - REDESIGNED */}
        <section id="mobile-detailing-services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mobile Detailing Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect detailing service for your vehicle. We offer comprehensive packages
                tailored to various vehicle types and your specific needs.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="inside-out" className="w-full">
                <div className="mb-10">
                  <TabsList className="w-full grid grid-cols-3 gap-2">
                    <TabsTrigger 
                      value="inside-out" 
                      className="flex flex-col gap-4 py-6 data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink rounded-lg"
                    >
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-4 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/dd7f3090-a164-4094-8203-d8c0f503414f.png" 
                          alt="Inside & Out" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <span className="font-medium">Inside & Out</span>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="exterior-only"
                      className="flex flex-col gap-4 py-6 data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink rounded-lg"
                    >
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-4 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/0ba47bc7-3c87-4b93-92e5-efbe316aa969.png" 
                          alt="Exterior Only" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <span className="font-medium">Exterior Only</span>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="interior-only"
                      className="flex flex-col gap-4 py-6 data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink rounded-lg"
                    >
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-4 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/85a41313-83c2-4644-8e39-4d1504770b91.png" 
                          alt="Interior Only" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <span className="font-medium">Interior Only</span>
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="bg-white shadow-lg rounded-xl border border-gray-100">
                  <TabsContent value="inside-out" className="p-0 m-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                          <Car className="h-6 w-6 text-detailpros-pink" />
                        </div>
                        <h3 className="text-xl font-semibold">Inside & Out Detailing</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Our comprehensive Inside & Out detailing service includes thorough cleaning of both 
                        the interior and exterior of your vehicle, ensuring it looks immaculate inside and out.
                      </p>
                      
                      <div className="overflow-x-auto bg-gray-50 rounded-lg">
                        <Table>
                          <TableHeader className="bg-gray-100">
                            <TableRow>
                              <TableHead className="w-1/3 py-4">Vehicle Type</TableHead>
                              <TableHead className="py-4">What's Included</TableHead>
                              <TableHead className="text-right py-4">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Coupe" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Coupe</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$35.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Sedan" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Sedan</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$45.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/343ce067-29bc-42bb-bae4-34307ae5521d.png" alt="SUV 5-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 5-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$55.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/54752ea2-a146-4c59-b7a5-7c8f0d0581d9.png" alt="SUV 7-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 7-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$65.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/b1cddb91-3917-4776-8ec6-556216ea0334.png" alt="Truck" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Truck</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$75.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d99657f5-e4df-4f22-a980-670efe2e2c07.png" alt="Van" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Van</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$100.00</span>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="exterior-only" className="p-0 m-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                          <Brush className="h-6 w-6 text-detailpros-pink" />
                        </div>
                        <h3 className="text-xl font-semibold">Exterior Only Detailing</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Our Exterior Only detailing service focuses on making your vehicle's exterior shine with 
                        professional washing, waxing, and treatment of all external surfaces.
                      </p>
                      
                      <div className="overflow-x-auto bg-gray-50 rounded-lg">
                        <Table>
                          <TableHeader className="bg-gray-100">
                            <TableRow>
                              <TableHead className="w-1/3 py-4">Vehicle Type</TableHead>
                              <TableHead className="py-4">What's Included</TableHead>
                              <TableHead className="text-right py-4">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Coupe" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Coupe</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$25.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Sedan" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Sedan</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$35.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/343ce067-29bc-42bb-bae4-34307ae5521d.png" alt="SUV 5-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 5-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$40.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/54752ea2-a146-4c59-b7a5-7c8f0d0581d9.png" alt="SUV 7-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 7-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$45.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/b1cddb91-3917-4776-8ec6-556216ea0334.png" alt="Truck" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Truck</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$50.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d99657f5-e4df-4f22-a980-670efe2e2c07.png" alt="Van" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Van</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$60.00</span>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="interior-only" className="p-0 m-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                          <DropletIcon className="h-6 w-6 text-detailpros-pink" />
                        </div>
                        <h3 className="text-xl font-semibold">Interior Only Detailing</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Our Interior Only detailing service provides deep cleaning of all interior surfaces, 
                        including seats, dashboard, carpets, and more to restore that new car feel.
                      </p>
                      
                      <div className="overflow-x-auto bg-gray-50 rounded-lg">
                        <Table>
                          <TableHeader className="bg-gray-100">
                            <TableRow>
                              <TableHead className="w-1/3 py-4">Vehicle Type</TableHead>
                              <TableHead className="py-4">What's Included</TableHead>
                              <TableHead className="text-right py-4">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Coupe" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Coupe</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$20.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Sedan" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Sedan</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$25.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/343ce067-29bc-42bb-bae4-34307ae5521d.png" alt="SUV 5-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 5-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$30.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/54752ea2-a146-4c59-b7a5-7c8f0d0581d9.png" alt="SUV 7-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 7-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$35.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/b1cddb91-3917-4776-8ec6-556216ea0334.png" alt="Truck" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Truck</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$40.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d99657f5-e4df-4f22-a980-670efe2e2c07.png" alt="Van" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Van</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$50.00</span>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Contact us for custom requirements or additional detailing services.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-detailpros-pink hover:bg-opacity-90 px-8 py-6 text-base">
                      Request A Quote
                    </Button>
                  </Link>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Add-on Services */}
        <section id="add-on-services" className="py-16 bg-detailpros-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Add-on Services & Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enhance your detailing package with our premium add-on services, tailored to meet your specific vehicle needs.
              </p>
              
              <div className="mt-6 max-w-md mx-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for add-on services..."
                    className="pl-10 py-6"
                    value={searchAddOns}
                    onChange={(e) => setSearchAddOns(e.target.value)}
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="exterior" className="w-full">
                <TabsList className="w-full mb-8 flex justify-center">
                  <TabsTrigger 
                    value="exterior" 
                    className="px-8 py-3 text-base font-medium data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink"
                  >
                    Exterior Add-ons
                  </TabsTrigger>
                  <TabsTrigger 
                    value="interior" 
                    className="px-8 py-3 text-base font-medium data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink"
                  >
                    Interior Add-ons
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="exterior">
                  <div className="bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader className="bg-gray-100">
                          <TableRow>
                            <TableHead className="w-1/12 py-4"></TableHead>
                            <TableHead className="w-6/12 py-4">Service Name</TableHead>
                            <TableHead className="w-3/12 py-4">Category</TableHead>
                            <TableHead className="w-2/12 text-right py-4">Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredExteriorAddOns.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={4} className="py-8 text-center text-gray-500">
                                No matching services found. Please try a different search term.
                              </TableCell>
                            </TableRow>
                          ) : (
                            filteredExteriorAddOns.map((service, index) => (
                              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-200">
                                <TableCell className="py-4">
                                  <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                                    {service.icon}
                                  </div>
                                </TableCell>
                                <TableCell className="py-4">
                                  <span className="font-medium">{service.name}</span>
                                </TableCell>
                                <TableCell className="py-4">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {service.tag}
                                  </span>
                                </TableCell>
                                <TableCell className="text-right py-4">
                                  <span className="font-bold text-lg text-detailpros-black">{service.price}</span>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="interior">
                  <div className="bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader className="bg-gray-100">
                          <TableRow>
                            <TableHead className="w-1/12 py-4"></TableHead>
                            <TableHead className="w-6/12 py-4">Service Name</TableHead>
                            <TableHead className="w-3/12 py-4">Category</TableHead>
                            <TableHead className="w-2/12 text-right py-4">Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredInteriorAddOns.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={4} className="py-8 text-center text-gray-500">
                                No matching services found. Please try a different search term.
                              </TableCell>
                            </TableRow>
                          ) : (
                            filteredInteriorAddOns.map((service, index) => (
                              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-200">
                                <TableCell className="py-4">
                                  <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                                    {service.icon}
                                  </div>
                                </TableCell>
                                <TableCell className="py-4">
                                  <span className="font-medium">{service.name}</span>
                                </TableCell>
                                <TableCell className="py-4">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {service.tag}
                                  </span>
                                </TableCell>
                                <TableCell className="text-right py-4">
                                  <span className="font-bold text-lg text-detailpros-black">{service.price}</span>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Can't find the specific add-on service you're looking for? We offer custom solutions tailored to your unique vehicle care needs.
                </p>
                <Link to="/contact">
                  <Button className="bg-detailpros-pink hover:bg-opacity-90 px-8 py-6 text-base">
                    Request Custom Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
    </div>
  );
};

export default Detailing;
